---
date: 2024-02-02T10:09:59Z
lastmod: 2024-02-03T14:10:31Z
title: User-based API
permalink: /upcoming/user-based-api/
author: Rodolfo Berrios
summary: Rolling from V4.1.0
image: /photos/2024/brigitta-schneiter-hXXRLtTxXCU-unsplash.jpg
tags:
  - upcoming
---

The user-based API refers to [Chevereto API V4](https://v4-docs.chevereto.com/developer/api/api-v4) and will enable new ways for interacting with Chevereto as it begins to evolve into a headless API which will enable to programmatically do **everything** Chevereto related like image uploading, managing albums, configuring settings and more.

## What it means

Every single action in the system will be available under this HTTP API, enabling anyone to build rich Chevereto-based applications by leveraging backend on Chevereto’s and creating tailored user interfaces for your _very own_ needs.

Will enable us to ship features early as the system gets headless, from there can build your own UI and leverage the API to do everything Chevereto related.

Power users will be able to craft their own UI, with early access to features enabling to stand out from the crowd.

## Chevere

Chevereto's user-based API is being built on top of the [Chevere](https://chevere.org) library, my own high-quality PHP library which after 6 years under development is finally stable to fulfill its original purpose as the backbone of next gen Chevereto software.

For Chevereto we can expect an extensible routing system thanks to [Router](https://chevere.org/packages/router), with [HTTP Controller](https://chevere.org/packages/http.html#controller) and [Schwager API](https://chevere.org/packages/schwager) standard for a self-documented API.

## Development

Chevereto is massive and this feature must be implemented progressively during V4.1’s lifecycle. It means that the API will be getting new endpoints in patch releases.

User-based API will start rolling from V4.1.0 with the most wanted endpoints first (image upload, management, etc) and the goal is to mirror the current internal API during the 4.1 cycle.

This new feature won’t affect the current public API at `/api` or the internal API at `/json` because the user-based API is being made from scratch, it is a different piece of software that I will magically wire with the old system. You don’t need to worry a thing.
