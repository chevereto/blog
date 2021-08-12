---
date: 2017-11-05T23:19:30+00:00
title: New Chevereto installer
author: Rodolfo Berrios
summary: Easier and friendly installation process.
permalink: /new-installer/
featuredImage: /photos/2017/installer-screen.jpg
tags:
  - news
  - releases
---
The web installer has been completely re-made from scratch with a better user interface, server requirements check and improved error handling. It aims to offer a more friendly installation process and to detect any server issue prior purchase.

The cherry on top is that the new web installer works for both free and paid Chevereto editions and it will be used to upgrade from free to paid directly within your dashboard panel.

For nginx users, the web installer will generate rewrite rules needed for Chevereto so you only need to copy and paste these in your nginx.conf server block. For Apache, this is not needed since Chevereto already includes these in the .htaccess file.

Talking about performance, this thing is remarkable fast and in just 60 KB it contains all the stuff needed to self-download and extracts Chevereto. The process time varies depending on the machine and since most servers have fast network and hardware, it takes just a couple seconds to do everything. This is for real, on the demo server **it takes about 2 seconds** to install Chevereto!

The source is available on [chevereto/installer](https://github.com/chevereto/Installer) (GitHub).
