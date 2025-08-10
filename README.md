# i18next-vaultrice-backend

[![Tests](https://github.com/vaultrice/i18next-vaultrice-backend/workflows/node/badge.svg)](https://github.com/vaultrice/i18next-vaultrice-backend/actions?query=workflow%3Anode)
[![npm version](https://img.shields.io/npm/v/i18next-vaultrice-backend.svg?style=flat-square)](https://www.npmjs.com/package/i18next-vaultrice-backend)

This is an [i18next](https://www.i18next.com/) backend for loading translations from [Vaultrice](https://www.vaultrice.com).

It can be used as a primary, serverless backend for your translations. However, its main strength is as a **persistent, real-time, cross-device cache**. When used with [i18next-chained-backend](https://github.com/i18next/i18next-chained-backend), it provides the performance of a local cache but is shared across all of a user's sessions and devices.

### Key Features

* **Persistent Caching**: Caches translations in the Vaultrice global edge network.
* **Cross-Device**: A cache populated on a user's desktop is instantly available on their mobile device.
* **Real-Time Updates**: The cache can be updated in real-time. Pushing a translation fix from a CMS or dashboard can update the UI for all live users without a page reload.
* **Versioning**: Built-in support for versioning translations.
* **End-to-End Encryption**: Full support for Vaultrice's client-side encryption features.

---

## Getting Started

Source can be loaded via [npm](https://www.google.com/search?q=https://www.npmjs.com/package/i18next-vaultrice-backend).

```bash
# npm package
$ npm install i18next-vaultrice-backend
```

The most common use case is to chain the `VaultriceBackend` with a fallback backend like `i18next-http-backend`. This creates a robust "Cache First, then Fetch" strategy.

### Wiring up with the Chained Backend

```javascript
import i18next from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import VaultriceBackend from 'i18next-vaultrice-backend'; // The primary cache
import HttpBackend from 'i18next-http-backend';       // The fallback loader

i18next
  .use(ChainedBackend)
  .init({
    backend: {
      backends: [
        VaultriceBackend,
        HttpBackend
      ],
      backendOptions: [
        {
          credentials: {
            apiKey: 'YOUR_VAULTRICE_API_KEY',
            apiSecret: 'YOUR_VAULTRICE_API_SECRET',
            projectId: 'YOUR_VAULTRICE_PROJECT_ID'
          },
          class: 'translations-v1.1'
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
      ]
    }
  });
```

---

## Backend Options

Options can be passed in by setting `options.backend` in the `i18next.init` function.

```js
{
  credentials: {
    apiKey: string,
    apiSecret: string,
    projectId: string
  },
  id?: string,
  class?: string,
  ttl?: number,
  passphrase?: string,
  idSignature?: string,
  reloadInterval?: number,
  // etc...
}
```

**All `@vaultrice/sdk` options are also available**, meaning developers can enable features such as object ID verification, end-to-end encryption, logging levels, and other advanced capabilities.

### Choosing Your `id` Scope

The `id` option determines **which Vaultrice Durable Object** your translations are stored in, and therefore how they are cached, replicated, and accessed globally.

| Scope                       | Example `id` Value                                      | Use Case                                                                                     | Behind the Scenes                                                                                                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Global Shared**           | `"shared-i18next-resources"`                            | All projects/users share one global cache of translations. Best for public/shared resources. | Single Durable Object instance, globally replicated. High cache hit ratio, minimal duplication. Slightly higher latency for users far from object’s home location (though Vaultrice edges replicate state).                                                                              |
| **Regional / Jurisdiction** | `"eu-i18next-resources"` or `"us-i18next-resources"`    | Comply with data residency laws (e.g., EU-only). Reduce cross-border latency.                | Durable Object instance is created in a region based on the `id` value. The developer is responsible for knowing the user’s region/jurisdiction and constructing the appropriate `id`. Requests from that region hit the local edge; cross-region requests may route to the home region. |
| **Per-User / Per-Project**  | `"project-42-i18next-resources"` or `"user-12345-i18n"` | Data isolation per customer or per logged-in user. Prevents data leakage between tenants.    | Each unique ID creates its own Durable Object instance, located close to where it was first created. Lowest risk of collisions; can reduce cache efficiency if many small, isolated IDs.                                                                                                 |

#### Performance & Latency Notes

* **Durable Object Location**: Vaultrice places the Durable Object’s “home” in the region closest to where it was **first** created. All writes go to that home location; reads can be served from edge replicas when possible.
* **Global IDs**: Maximize cache hits and minimize storage duplication, but may incur slightly higher latency for faraway users on a cold cache.
* **Regional IDs**: Keep requests and data in one jurisdiction, lowering legal risk and improving latency for local users. The developer must decide the correct region/jurisdiction ID based on the user’s location.
* **Per-User IDs**: Provide maximum isolation; latency depends on where the object was first instantiated for that user.

#### Best Practice

* Use **global IDs** for public, non-sensitive translations where cache efficiency matters most.
* Use **regional IDs** if you must comply with GDPR or other residency rules — you are responsible for choosing the correct ID for each user.
* Use **per-user/project IDs** for private or highly dynamic translations.

---

## The Real-Time Advantage

Because Vaultrice is a real-time platform, you can create powerful workflows that are not possible with traditional file-based backends or `localStorage` caching.

By building a simple admin dashboard that writes to the same Vaultrice object your i18next plugin is configured with, you can push translation updates, fix typos, or add new strings, and have them appear in your live application instantly.

When used with the `reloadInterval` option, you can ensure that your users' translation cache is refreshed periodically with the latest content without requiring a page reload.

---

## TypeScript

To properly type the backend options, you can import the `BackendOptions` interface and use it as a generic type parameter to i18next's `init` method.

```ts
import i18n from 'i18next';
import ChainedBackend, { ChainedBackendOptions } from 'i18next-chained-backend';
import VaultriceBackend, { VaultriceBackendOptions } from 'i18next-vaultrice-backend';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';

i18n
  .use(ChainedBackend)
  .init<ChainedBackendOptions>({
    backend: {
      backends: [VaultriceBackend, HttpBackend],
      backendOptions: [
        {
          credentials: { /* ... */ },
          class: 'translations-v1.1'
        } as VaultriceBackendOptions,
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        } as HttpBackendOptions
      ]
    }
  });
```

---

<h3 align="center">Powered by Vaultrice</h3>
<p align="center">
  <a href="[https://www.vaultrice.com/](https://www.vaultrice.com/)" target="_blank">
    <img src="https://www.vaultrice.com/img/vaultrice_logo_color.png" width="240px">
  </a>
</p>
