---
date: 2021-09-08T20:52:24Z
title: Chevereto V4 FAQ
author: Rodolfo Berrios
summary: Frequent asked questions about V4
permalink: /chevereto-v4-faq/
featuredImage: /photos/2021/faq-daniella-alscher.png
tags:
  - faq
---
Chevereto V4 is around the corner and while this release has caught the attention of many people, lots of misinformation have been circulating about it among user groups.

We want to address these concerns in this entry, but if we miss something you can ask in the [community announcement](https://chevereto.com/community/threads/chevereto-v4-faq.13752/). If you aren't a customer refer to our [contact page](https://chevereto.com/contact).

## When it will be released?

Chevereto V4.0.0.beta.1 will be released on 2021-09-30.

Production release (V4.0.0) will be available between 2021-12 ~ 2022-03. Note that V4.0.0 beta may get extended as needed to ship safe software.

## Can I use beta in production?

You shouldn't. Let's us coin the well-know "use it under your own risk".

Beta is for testing purposes and to iterate the system design based on user feedback. To detect system compatibility issues inherent of a system which run on-premises. We will help our beta users when encountering issues, but we won't be able to include support for beta issues affecting production systems.

## How can I access to it?

Chevereto V4 requires a paid license to get access to it which you can purchase at [chevereto.com](https://chevereto.com).

This license grants access to:

* Unencrypted source code access to our private GitHub repository for the entire major version cycle. Including access to milestones, tags, issues and discussions where you and other users will engage with the dev team.
* Access to the Chevereto community.
* Software support and additional supporting services.

## How many licenses I will require?

One license per root-domain as `domain.com`.

Chevereto V4 beta won't be ready for production systems we won't enforce domain license binding until we ship the production grade releases.

## Which are the system requirements?

Chevereto V4 inherits the [Chevereto V3 requirements](https://v3-docs.chevereto.com/setup/server/requirements.html) but under PHP 8. Chevereto V4 won't run in previous PHP releases.

## How to upgrade from V3?

Upgrade from V3 will be available after releasing the production grade releases.

## How does the domain license binding works?

It works similar to how DKIM signs email delivery.

We will provide you instructions to configure your DNS records to make your domain eligible to interact with our service API. You will require to indicate the IP(s) needed to query our API.

## Will be DRM signed?

No, Chevereto V4 won't be DRM signed in any way.

There won't be any license-footprint in the Chevereto V4 code as it will be DRM free.
