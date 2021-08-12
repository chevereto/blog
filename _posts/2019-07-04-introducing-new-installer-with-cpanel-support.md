---
title: Introducing new installer with cPanel support
date: 2019-07-04T03:02:40+00:00
author: Rodolfo Berrios
permalink: /introducing-new-installer-with-cpanel-support/
image: /wp-content/uploads/2019/07/screen-v2-825x510.png
categories:
  - Releases
tags:
  - cPanel
  - installation
  - installer
---
The installer has been re-made (again) and now, set up your own Chevereto based image hosting website is even easier than before. This new version handles all the process and is the recommended method to install Chevereto from now on.

<!--more-->

The installer consists of a single PHP file which checks the system integrity, license key check, database check, download, extract and fill in the installation form. You never leave the installer screen when doing the process, and at the end, you get a concise summary of the outcome.

It now supports cPanel and allows to create all the database setup automatically. By doing this, you don't need to worry about creating the database, database user, and grant permissions. The installer does all this for you.

<img loading="lazy" width="1024" height="948" src="https://chevereto.com/blog/wp-content/uploads/2019/07/cpanel-screen-1024x948.png" alt="cPanel screen" class="wp-image-457" srcset="https://chevereto.com/blog/wp-content/uploads/2019/07/cpanel-screen-1024x948.png 1024w, https://chevereto.com/blog/wp-content/uploads/2019/07/cpanel-screen-300x278.png 300w, https://chevereto.com/blog/wp-content/uploads/2019/07/cpanel-screen-768x711.png 768w, https://chevereto.com/blog/wp-content/uploads/2019/07/cpanel-screen.png 1342w" sizes="(max-width: 1024px) 100vw, 1024px" />

The result is your image hosting website up and running in seconds, totally hassle-free.

<img loading="lazy" width="1012" height="1024" src="https://chevereto.com/blog/wp-content/uploads/2019/07/installer-done-1012x1024.png" alt="Installation completed screen" class="wp-image-455" srcset="https://chevereto.com/blog/wp-content/uploads/2019/07/installer-done-1012x1024.png 1012w, https://chevereto.com/blog/wp-content/uploads/2019/07/installer-done-296x300.png 296w, https://chevereto.com/blog/wp-content/uploads/2019/07/installer-done-768x777.png 768w, https://chevereto.com/blog/wp-content/uploads/2019/07/installer-done.png 1314w" sizes="(max-width: 1012px) 100vw, 1012px" />

It also includes API access to all its controller actions, which allows crafting all sort of integrations. For example, hosting providers can take advantage of this to provision Chevereto pre-installed.

The installer is Open Source, and it is available at [Chevereto/Installer](https://github.com/chevereto/Installer) (GitHub).