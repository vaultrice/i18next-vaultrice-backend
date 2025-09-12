# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v1.0.2...v1.0.3) - 2025-09-12

- update dependencies

## [1.0.2](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v1.0.1...v1.0.2) - 2025-09-11

- update dependencies

## [1.0.1](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v1.0.0...v1.0.1) - 2025-09-08

- update dependencies

## [1.0.0](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.14...v1.0.0) - 2025-09-06

- First official stable release. This marks it as production-ready.
- No functional changes from the latest 0.9.x series — this release only promotes the project to a stable major version.
- Public API is considered stable; any future breaking changes will require a major version bump per SemVer.
- No migration steps required for users upgrading from 0.9.x.
- Thanks to all contributors and early adopters.

## [0.9.15](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.14...v0.9.15) - 2025-08-28

- update dependencies

## [0.9.14](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.13...v0.9.14) - 2025-08-28

- update dependencies

## [0.9.13](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.12...v0.9.13) - 2025-08-27

- update dependencies

## [0.9.12](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.11...v0.9.12) - 2025-08-25

- update dependencies

## [0.9.11](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.10...v0.9.11) - 2025-08-21

- update dependencies

## [0.9.10](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.9...v0.9.10) - 2025-08-20

- update dependencies

## [0.9.9](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.8...v0.9.9) - 2025-08-20

- update dependencies

## [0.9.8](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.7...v0.9.8) - 2025-08-20

- update dependencies

## [0.9.7](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.6...v0.9.7) - 2025-08-19

- update dependencies

## [0.9.6](https://github.com/vaultrice/i18next-vaultrice-backend/compare/v0.9.5...v0.9.6) - 2025-08-13

- update dependencies

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