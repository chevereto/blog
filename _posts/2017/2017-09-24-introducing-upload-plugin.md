---
date: 2017-09-24T02:45:58+00:00
title: Introducing upload plugin
author: Rodolfo Berrios
summary: A new way to use Chevereto.
permalink: /introducing-upload-plugin/
dsq_thread_id:
  - "6166184322"
dsq_needs_sync:
  - "1"
image: /photos/2017/pup_display.png
tags:
  - features
---

The new upload plugin allows any website to **easily provide image uploading** via Chevereto. It installs quickly, it supports any website and it features seamless support for the most popular forum software like **Discourse**, **XenForo**, **IP.Board**, **vBulletin**, **phpBB**, **SMF** and even more.

It works by detecting user-editable content —like post reply boxes— and then placing a button that when you click on, it will pop-up a window that will allow visitors to upload images to a Chevereto website and it will auto-insert the embedded codes, all in one step.

Since it works using a pop-up window, the plugin is referenced as **PUP** which stands for pop-up upload plugin.

![PUP Palette red](/photos/2017/pup_palette_red-1.jpg)

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-palette="red"></script>
```

> _An example of PUP (red color palette) in a basic `<textarea>` editor box._

### Supported software

PUP works with a wide range of forum software including:

* bbPress
* Discourse
* Discuz!
* Invision Power Board
* MyBB
* NodeBB
* phpBB
* Simple Machines Forum
* Vanilla Forums
* vBulletin
* XenForo

For selected vendors, the plugin will fit the button to the target editor toolbar, achieving an absolutely unobtrusive experience and it won't break the UI at all. It also sets which embeds codes should be used depending on the target editor (Markdown, BBCode or HTML) and it will listen to live events so it will work even on dynamically generated content.

![PUP Discourse](/photos/2017/pup_discourse.jpg)

> _Discourse editor box showing the cloud upload icon added by PUP._

Additional vendors may be supported via basic integration (non-toolbar), meaning that it also supports FluxBB, PunBB and any other CMS using textarea-based editors.

### Customization

The plugin is designed to require **zero configuration** but still, you can configure everything. You can use your own HTML, CSS, palettes, language, observers, everything. If that's not enough, you can even place the button manually and indicate the target editor you want to bind. Talking about customization, don't worry to touch the code at all. Everything has been designed to be configured directly as simple data-attributes on the plugin insertion code.

All these instructions are now included in every installation and for the basic options, end-users will only need to toggle some switches and **Chevereto will generate the insertion code**. Here, check this live example: [Upload plugin &#8211; Chevereto demo](https://demo.chevereto.com/plugin). For those who need advanced customization, there is a [complete documentation](https://v3-docs.chevereto.com/features/integrations/pup.html) available.

## Core features

The plugin has been built using native JavaScript and is very lightweight —about 6 KB gzipped— and it doesn't require additional libraries or server dependencies. It works asynchronous, supports multiple instances, it always shows a perfect sized pop-up window on center and it uses **postMessage** to safely establish cross-site communication. The code is all wrapped inside a closure so it won't mess with any JavaScript you may have and it prevents anyone else from tempering the plugin variables.

## Who should use it?

The upload plugin is the perfect solution for **communities** looking for external image hosting since it easily leverages all the image uploading into an external Chevereto website. If you run a community, you will notice how **users will engage more** because they won't even need to leave your website to upload and share their images.

For those who use Chevereto to generate revenue, this is the perfect tool to **boost your content and traffic** because there is a huge number of communities and websites in general with the need for image sharing and there is room for everybody. Situations like the [_ransomgate_](http://www.bbc.com/news/technology-40492668) happen because only a few provide most of the internet image traffic and services will always trend to gets saturated when they just want to eat everybody.
