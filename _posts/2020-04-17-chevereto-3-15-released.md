---
title: Chevereto 3.15 released
date: 2020-04-17T21:18:18+00:00
author: Rodolfo Berrios
permalink: /chevereto-3-15-released/
categories:
  - New features
  - Releases
---
[Chevereto 3.15](https://chevereto.com/releases#v3_15_0) is just released, and it features considerable improvements in the [bulk importing](https://chevereto.com/docs/bulk-importer) functionality, which now is automatic. It also includes a theme tone switcher, allowing your users to choose between light and dark theme variants easily. This release fixes plenty of bugs, and it also features improvements for mobile users.

#### Automatic importing

The bulk content importer now supports to work continuously. Parsing is the same as before, but now it is all automatic. That way, you only need to place the content in a special file-system path, which is constantly analyzed.

The system works by processing the contents of the `/importing` path, in which the sub-folders `./no-parse`, `./parse-albums` and `./parse-users` are designated to hold the content being imported under a folder-based content structure. Once all contents of `/importing` are processed, the job will be labeled as completed and 1 minute after it will begin again.

<img loading="lazy" width="1024" height="268" src="https://chevereto.com/blog/wp-content/uploads/2020/04/image-1024x268.png" alt="" class="wp-image-488" srcset="https://chevereto.com/blog/wp-content/uploads/2020/04/image-1024x268.png 1024w, https://chevereto.com/blog/wp-content/uploads/2020/04/image-300x78.png 300w, https://chevereto.com/blog/wp-content/uploads/2020/04/image-768x201.png 768w, https://chevereto.com/blog/wp-content/uploads/2020/04/image-1536x401.png 1536w, https://chevereto.com/blog/wp-content/uploads/2020/04/image.png 1990w" sizes="(max-width: 1024px) 100vw, 1024px" />

> Automatic importing @3.15.0

The advantage of continuous importing is that it doesn't require any configuration, just throw contents to the importing path.

#### User theme tone toggle

Users can now toggle light and dark theme variants by just clicking on the lights button at the top bar. This allows users to pick the theme that goes better for their eyes.

#### Improvements for mobile users

User scale limiting has been removed and now the user interface can be freely zoomed in/out. This release also fixes incompatibilities detected in some webview implementations. Especially with WeChat and QQ, where it was impossible to use their webview browser for image uploading.

#### PUP.js for ProBoards

The [popup upload plugin](https://chevereto.com/docs/pup) (PUP) now works with [ProBoards](https://www.proboards.com/) software, making Chevereto based websites ready to empower any ProBoards based community. This release also includes support for [Vanilla's](https://vanillaforums.com/) latest editor ([Quill](https://quilljs.com/)).

PUP.js now integrates with 13 different forum software.

#### Rebuild stats

Global stats can now be quickly rebuilt by clicking a button from the `/dashboard` panel.

#### Configurable embed codes display

Displaying of embed codes has improved. Now it is possible to configure if these codes will be displayed for everybody, only users, or disable it altogether.

## Final notes

Chevereto 3.15 arrived three months after 3.14 and it marks another milestone in the V3 LTS. More updates will be issued for this year, and the development is also ongoing for the [chevere](https://chevere.org) framework.
