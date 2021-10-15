---
date: 2019-07-04T03:02:40+00:00
title: Introducing new installer with cPanel support
author: Rodolfo Berrios
summary: All-new Chevereto installer.
permalink: /introducing-new-installer-with-cpanel-support/
image: /photos/2019/installer-screen-v2.png
tags:
  - releases
  - cpanel
  - installation
  - installer
---
The installer has been re-made (again) and now, set up your own Chevereto based image hosting website is even easier than before. This new version handles all the process and is the recommended method to install Chevereto from now on.

The installer consists of a single PHP file which checks the system integrity, license key check, database check, download, extract and fill in the installation form. You never leave the installer screen when doing the process, and at the end, you get a concise summary of the outcome.

It now supports cPanel and allows to create all the database setup automatically. By doing this, you don't need to worry about creating the database, database user, and grant permissions. The installer does all this for you.

![Installer cPanel screen](/photos/2019/cpanel-screen.png)

The result is your image hosting website up and running in seconds, totally hassle-free.

![Installer done](/photos/2019/installer-done.png)

It also includes API access to all its controller actions, which allows crafting all sort of integrations. For example, hosting providers can take advantage of this to provision Chevereto pre-installed.

The installer is Open Source, and it is available at [Chevereto/Installer](https://github.com/chevereto/Installer) (GitHub).
