---
date: 2024-02-03T13:47:42Z
lastmod: 2024-02-03T13:47:42Z
title: License key regeneration
author: Rodolfo Berrios
summary: Protecting your keys
image: /photos/2024/marek-piwnicki-t9AKq7vFYlc-unsplash.jpg
tags:
  - announcement
  - license
---

Chevereto customers can now protect their licenses with license key re-generation. Go to [license](https://chevereto.com/panel/license) and try for yourself, regenerate your license keys on-the-fly.

## Why

The Chevereto license is like a password as it grants access to download the software using the API. For example, to build the [docker image](https://github.com/chevereto/docker) or use the [VPS provisioning](https://github.com/chevereto/vps) the license key is essential to download the software.

Mishandling this key could lead to unintended consequences, such as unauthorized access and potential license bans due to misuse.

## Regenerating keys

Head over to [license](https://chevereto.com/panel/license) and click on the "Regenerate license key" button. Instantly the license key will expire and a new one will be provided.

This not only adds an extra layer of security but also safeguards your keys from potential misuse. The change is immediate, rendering the old license key inactive while providing you with a new, secure key on-the-fly.

Consider it a seamless way to ensure the ongoing security of your Chevereto keys without any hassle.

## How it works?

A Chevereto license key is made from two components: An id and a code. It has the following shape.

```plain
asdf:d562b55144a834adfaba51f71621f8a63f66a8cf2e77cc2d
<license_id>:<license_code>
```

The `license_id` is immutable, won't change. What changes with this process is the `license_code`.
