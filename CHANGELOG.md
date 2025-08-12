# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.0...v1.0.0) - YYYY-MM-DD

- not released yet

## [0.9.5](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.4...v0.9.5) - 2025-08-12

- update dependencies

## [0.9.4](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.3...v0.9.4) - 2025-08-11

- update dependencies

## [0.9.3](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.2...v0.9.3) - 2025-08-11

- improve onNonLocalStorageCreated usage

## [0.9.2](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.1...v0.9.2) - 2025-08-11

- introduce onNonLocalStorageCreated

## [0.9.1](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.0...v0.9.1) - 2025-08-11

- update dependencies

## [0.9.0] - 2025-08-09

### Added

* Initial public release of the `i18next-vaultrice-backend` plugin.
* Full implementation of the i18next backend interface, including `read`, `readMulti`, and `save` methods.
* Functions as either a primary translation backend or a persistent, cross-device cache when used with `i18next-chained-backend`.
* Efficiently loads multiple namespaces and languages with a single API call in `readMulti`.
* Supports translation versioning through the `class` option to easily manage and invalidate cache.
* Integrates with Vaultrice security features, including End-to-End Encryption via the `passphrase` option.
* Includes an optional `reloadInterval` to periodically poll for updated translations.
* Provides comprehensive TSDoc comments for all methods and options for a better TypeScript experience.