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

## 🚀 When it will be released?

Chevereto **V4.0.0.beta.1** will be released on 2021-09-30. Production release (V4.0.0) will be available between 2021-12 ~ 2022-03. Note that V4.0.0 beta may get extended as needed to ship safe software.

## 🤔 Can I use beta in production?

You shouldn't. Use it under your own risk.

Chevereto V4.0 beta is for testing purposes and to iterate the system design based on user feedback. It will take a while to get V4.0 beta usable as our focus at this stage is to detect system compatibility issues inherent of a system which run on-premises. We will help our beta users when encountering issues, but we won't include support for beta issues affecting production systems.

## 👑 How to get access to it?

### 🆕 New purchases

You can purchase a Chevereto V4 license at [chevereto.com/pricing](https://chevereto.com/pricing).

There's a special intro offer until 2021-12-31: License purchase includes (1) V3 license and (1) V4. That's 2 different licenses.

### 🤴 Existing customers

* 🎁 Purchases made from 2020-09-01: There's a license redeem option.
* 🗿 Purchases made before 2020-09-01: There's a license upgrade option.

License redeem and upgrade options will be available at [panel/license](https://chevereto.com/panel/license) until 2021-12-31.

## 🤑 How many licenses I will require?

One license per root-domain as `domain.com`.

**Note:** As Chevereto V4 beta won't be ready for production systems we won't enforce domain license binding until we ship the production grade releases.

## 🤖 Which are the system requirements?

Chevereto V4 inherits all the [Chevereto V3 requirements](https://v3-docs.chevereto.com/setup/server/requirements.html) but under PHP 8.0.

## 🆙 How to upgrade my V3 installation?

Upgrade from V3.20 will be available after releasing the production grade releases starting  with V4.0.0.

**Note:** Chevereto V4.0 uses the same database and public upload paths as V3.20.

## 🔗 How does the domain license binding works?

It works similar to how DKIM signs email delivery.

We will provide you instructions to configure your DNS records to make your domain eligible to interact with our service API. You will require to indicate the IP(s) needed to query our API.

## 🕵️‍♂️ Will it be DRM signed?

No, Chevereto V4 won't be DRM signed. There won't be any license-footprint in the Chevereto V4 code as it will be distributed DRM free.
