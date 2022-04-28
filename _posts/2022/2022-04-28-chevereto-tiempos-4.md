---
date: 2022-04-28T16:13:04Z
title: Tiempos 2022/04
author: Rodolfo Berrios
summary: April 2022
permalink: /tiempos-2022-04/
image: /photos/2022/vackground.jpg
tags:
  - tiempos
---

This is the fourth issue of **Chevereto Tiempos**, a monthly recap for all-things Chevereto. We build these notes taking in consideration announcements, user submitted tips, and tech news around self-hosting and related software products.

## V4 feature summary

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item m-0" src="https://www.youtube.com/embed/C-AZVuMEFMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## V4.0.0.beta.8

Chevereto V4.0.0.beta.8 has been [released](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8.14246/) and it drops massive new features to Chevereto.

👉 Check the complete release notes at [releases.chevereto.com](https://releases.chevereto.com/4.X/4.0/4.0.0.beta.8.html).

### 🦄 Added expiration date

Expiration time is now visible on [main upload form](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71183), same as category and album. With this you can now easily bulk set the expiration date for your current upload.

### ✅ Improved API authorization

Authorization in API V1.1 gets improved with support for [header authorization](https://v4-docs.chevereto.com/api/api-v1.html#authorization). Instead of passing key in the body you will now be able to pass the X-API-Key header with the target API key.

### 🦆 Improved login page

Login [now uses](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71236) accent color for the submit button (arrow icon). Autofilled account details (username, password) now follow the palette color as it overrides the browser defaults.

### 💅 Improved uploader UX

The uploader [has been improved](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71234) for iOS devices (missing upload button, not rounded borders), also the fixed uploader now blocks the page scrolling in the background when opened.

### 💡 Improved autofocus behavior

Property autofocus [has been added](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71277) to form elements at login, signup and account/*. This will focus the user input with a blinking text on page load. This saves one click and makes the experience a little bit better.

### 💅 Improved consent screen

Consent screen [gets improved](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71090) with a neat new design.

### 🎩 Improved mobile top bar

Mobile top bar [now shows](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71184) uploader instead of notifications, which are now under the menu (hamburger icon).

### 😎 Improved API guest user handling

Calls to API V1.1 using the public key at Dashboard > API will [now be handled](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71231) as guest uploads, meaning that it follows all guest upload restrictions you may want to configure (enabled, guest max upload file size, etc).

### 🛤 SEO route options settings

This is minimal change, but is quite annoying to don't have the routing settings on the same place. This [get fixed in V4](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-8-announcement.14194/post-71079) and now SEO routing settings are under Dashboard > Settings > Routing.

### 🐞 Fixed bugs

This revision address the following bugs:

- "Powered by" at homepage
- Dashboard External services (akismet, moderatecontent)
- Default palette [[14207](https://chevereto.com/community/threads/14207)]
- Disabled embed codes [[14220](https://chevereto.com/community/threads/14220)]
- Lock system
- Missing user name on profile [[14219](https://chevereto.com/community/threads/14219)]
- Pages [[14234](https://chevereto.com/community/threads/14234)]
- Personal mode routing
- Settings route [[14192](https://chevereto.com/community/threads/14192)]
- Uploader window [[14153](https://chevereto.com/community/threads/14153)]
- Listing (TypeError)

## RFC

👍 We got the following requests for changes. Do us a big one for and provide your vote to drive development.

- [Account moderation](https://chevereto.com/community/threads/account-moderation.14232/)
- [Filters when viewing images](https://chevereto.com/community/threads/filters-when-viewing-images.14231/)
- [Image Replacement / Version Control](https://chevereto.com/community/threads/image-replacement-version-control.14227/)
- [Disable Color Palettes](https://chevereto.com/community/threads/disable-color-palettes.14221/)

* * *

## Thanks for reading

Hope you have enjoyed this recap. If you have any interesting tip or link to share about Chevereto go to [our community](https://chevereto.com/community) and join the conversation.
