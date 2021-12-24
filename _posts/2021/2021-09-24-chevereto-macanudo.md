---
date: 2021-09-24T16:31:38Z
title: Chevereto Macanudo
author: Rodolfo Berrios
summary: AKA Chevereto V4.0
permalink: /chevereto-macanudo/
image: /photos/2021/moais.jpg
tags:
  - release
---

> Chevereto Macanudo beta is set to be released on 2021-09-30. Beta process is scheduled to last at least 3 months.

Chevereto's fourth major release is named *macanudo* which is a [hispanic word](https://dle.rae.es/macanudo) that means "Well, magnificent, extraordinary, excellent, in a material and moral sense".

Macanudo is a pretentious name for a software release and we picked it because Chevereto V4.0 opens the path for substantial changes in how we produce and deliver our software product and it represents all what we want to achieve in the entire V4.X cycle.

## A new philosophy

With Macanudo we are changing our software development philosophy towards an unprecedented openness. For us, proprietary software means "private party", not "software without access to its source" and we are introducing changes that build on our new philosophy.

### DRM free

Since [Chevereto V2](https://releases.chevereto.com/2.X/), all the user downloaded source code contained  a mechanism to identify those who take our code and re-distribute it without our permission.

For Chevereto V4 our source code won't be anymore labeled with any user identification. The source code will be free of all these identification bits (known as DRM) and we will let users to determine who access to our source code as we will drive our value towards our large community and our supporting services.

### Beta as the standard

With [Chevereto V3](https://releases.chevereto.com/3.X/) we experimented with invite-only betas which worked great for us.

That's why for Chevereto V4, beta will be available for all customers and it will be the standard for all upcoming releases. Beta releases showed us the huge value of early testing which is crucial for our type of software as we are talking about a system that runs in any machine, under a myriad of different configurations.

### Better packaging

Package delivery now includes the `-lite` alternative, which is a package considerable smaller (~ 5MB) containing only the software and not its dependencies. Used with [Composer](https://getcomposer.org/), this enables faster and yet more reliable updates for CLI customers.

### Default development infra

With [Coqueto](https://releases.chevereto.com/3.X/3.20/3.20.0.html) we introduced support for Docker as a way to provide a base standard for running our software. We did this because the software stack required for Chevereto is not trivial to manage and that's why we took charge of providing it officially.

With Macanudo we are taking this further, by making Docker our default infra for all development purposes. Our new development standard enables us to provide users with an easier way to detect when a conflict happens in the server nor the application.

This infra works as a blue-print for anyone wanting to run Chevereto under any given software stack. Chevereto V4 can run anywhere as all its predecessors.

## Code update

Macanudo introduces the biggest code update ever in Chevereto and all files, functions and classes have been updated for stricter coding standards and strong-typed code.

With Macanudo Chevereto embraces PHP 8 and it relies in our high-quality flagship [Chevere framework](https://chevere.org) for providing a neat path for evolving all the application code into our new application architecture.

We invested from the ground up in a complete new framework tailored for the high customization needs of our users, and we will progressive delivering updates for our massive codebase.

## New features

Macanudo comes with a lot of neat features that will make Chevereto the ultimate media hosting solution as we are converting it from an "image hosting website" to a "media hosting & sharing solution" by turning it into an extensible, pluggable and headless CMS software.

### User-based API

Macanudo introduces the user-based API which enables Chevereto as a full-flagged extensible API which anyone can use to create all sorts of experiences.

With Macanudo you could create a new media sharing community or empower your existing application. You could use it to wrap around your organization, to leverage all your user-tenancy media handling on us.

There's no limits in its application, it all depends on your imagination.

### User interface upgrade

For Macanudo we are pushing a superb user interface upgrade for which we are including multiple color palettes, keyboard shortcuts, highly improved visual elements and overall better aesthetics. Take a peek on the [raw footage](https://www.youtube.com/watch?v=5rQ0DeO1T_g) to get an early preview.

### Hybridauth

In Macanudo we are replacing our old fashioned third-party login implementation with [Hybridauth](https://github.com/hybridauth/hybridauth).

Macanudo provides more sign up alternatives than ever, enabling users all over the world to enjoy the quickness of social login with support for up to 36 auth providers including OpenID, Mail.ru, Yandex, Twitch, QQ and Discord.

## Closing words

This is a huge change, one that we have been preparing since 2018-05 and it is a reality thanks to the support of all who make Chevereto possible: Our users.

We started 14 years ago with a simple one-view MVP and we have come all the way up here driven by the persistency of the need that we address. We have became the most recognizable image hosting software, we are everywhere. Chevereto is ubiquitous in the image hosting scene.

In times where privacy is a luxury, where all big conglomerates mine your data, we believe more than ever that self-hosting is the right solution to the problem. Our duty is to keep this freedom accessible for everybody, to re-shape when needed it in ways that more users can enjoy what we consider a right and not a luxury.

*¡Larga vida a Chevereto!*
