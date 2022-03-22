---
date: 2022-03-22T14:55:45Z
title: Tiempos 2022/03
author: Rodolfo Berrios
summary: March 2022
permalink: /tiempos-2022-03/
image: /photos/2022/lucas-benjamin.jpg
tags:
  - tiempos
---

This is the third issue of **Chevereto Tiempos**, a monthly recap for all-things Chevereto. We build these notes taking in consideration announcements, user submitted tips, and tech news around self-hosting and related software products.

## V4.0.0.beta.7

Chevereto V4.0.0.beta.7 has been [released](https://chevereto.com/community/threads/chevereto-v4-0-0-beta-7.14184/) and it drops massive new features to Chevereto.

👉 Check the complete release notes at [releases.chevereto.com](https://releases.chevereto.com/4.X/4.0/4.0.0.beta.7.html).

### API V1.1

The API has been improved with support for extra fields including `title`, `description` resize `width`, `category_id`, `album_id` and `nsfw` flag. This brings a new layer of utility for the API.

👏 Fear not, API V1.1 is compatible with the existing API V1.

### User-based API keys

V4.0.0.beta.7 adds user-based API keys and now users will be able to upload content directly to their accounts when using the API, making it more usable and enabling to craft custom usage mixes.

👸 Tools like ShareX can now be used privately by each user rather than going as public uploads.

### Configurable root routing

Root routing has been reserved for usernames (as `/rodolfo`) but that changes in V4 as it is now configurable. Administrators can now pick which content will resolve on root route from username (default), image or album.

😘 This enables content-oriented tweaks, like change from `/image/<id>` to `/<id>` to remark the relevancy of images in your system.

### Image delete link

Image delete link returns in V4.0.0.beta.7, enabling users to keep a one-time shown delete URL that will remove the image once opened.

🥑 This enables to safely remove images even without being logged in.

## RFC

👍 We got the following requests for changes. Do us a big one for and provide your vote to drive development.

- [Bulk Exporter: Image + Album export for each user](https://chevereto.com/community/threads/bulk-exporter-image-album-export-for-each-user.14145/)
- [Pick username with social signups](https://chevereto.com/community/threads/pick-username-with-social-signups.14181/)

## Community Tips

- [使用腾讯云cos作为外部存储的方法和建议（The method and suggestion of using Tencent cloud cos as external storage）](https://chevereto.com/community/threads/%E4%BD%BF%E7%94%A8%E8%85%BE%E8%AE%AF%E4%BA%91cos%E4%BD%9C%E4%B8%BA%E5%A4%96%E9%83%A8%E5%AD%98%E5%82%A8%E7%9A%84%E6%96%B9%E6%B3%95%E5%92%8C%E5%BB%BA%E8%AE%AE%EF%BC%88the-method-and-suggestion-of-using-tencent-cloud-cos-as-external-storage%EF%BC%89.13101/)

🕹 No more tips this month, we believe that the community *got lost playing Elden Ring*.

* * *

## Thanks for reading

Hope you have enjoyed this recap. If you have any interesting tip or link to share about Chevereto go to [our community](https://chevereto.com/community) and join the conversation.
