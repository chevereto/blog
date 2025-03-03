---
date: 2025-03-03T14:34:15Z
lastmod: 2025-03-03T14:34:15Z
title: Big File Upload
permalink: /upcoming/big-file-upload/
author: Rodolfo Berrios
summary: Arriving on V4.3.0
image: /photos/2025/pexels-mohamed-nasar-641930278-17977824.jpg
tags:
  - upcoming
  - upload
---

The big file upload feature is an exciting new addition to Chevereto, enabling users to upload and share media without size limitations. This enhancement significantly improves the media hosting experience for video files, large images (such as panoramas and 360° photos), and other media types that require substantial storage space.

## Driven by video

The introduction of [video support](../2024/2024-03-19-video-support.md) in [Chevereto 4.1](https://releases.chevereto.com/4.X/4.1/4.1.0) generated significant interest within the community, with users eager to upload and share their video content. Following this, the most requested feature has been the ability to upload large video files. Initially, our focus was on implementing video support, and we did not address the big file upload issue at that time.

With the [addition of tags](../2024/2024-04-04-tags.md) in [Chevereto 4.2](https://releases.chevereto.com/4.X/4.2/4.2.0), we observed an increase in users uploading large images, panoramas, 360° photos, and videos. We are very pleased with our tagging system and want users to continue sharing their media, now without size limitations.

## How it works

Here's a practical example: let's say you have a 1GB video file to upload.

Instead of uploading a 1GB file in a single connection, Chevereto will split the file into 25MB chunks and upload these asynchronously. The server will then reassemble the file once all chunks have been uploaded. This method, known as [chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding), allows for large file uploads without concerns about timeouts or connection issues, ensuring a smooth and reliable experience.

Larger files will take longer to process, so media processing for these cases will be deferred to a background task. Users will be informed that the file is being processed, and a notification will appear once the file is ready to be shared.

## Benefits

The big file upload feature offers several significant advantages over standard file uploads:

- **Unlimited file sizes**: Upload files of any size, bypassing server timeouts and network limitations
- **Faster transfers**: Multiple chunks can be processed simultaneously, improving overall upload speed
- **Resume capability**: If interrupted, uploads can continue from the last successful chunk, saving time and bandwidth
- **Higher reliability**: Chunked uploads minimize connection failures for large files
- **CDN compatibility**: Works seamlessly with services like CloudFlare by staying under their 100MB packet size limitations
- **Better user experience**: Progress indicators and background processing provide clearer feedback during large uploads

To summarize, this feature transforms Chevereto into a truly comprehensive media hosting platform capable of handling everything from small thumbnails to massive professional-grade videos and ultra-high-resolution imagery. By removing file size limitations, Chevereto now empowers content creators to share their highest quality work without compromise.

## Release

Chevereto will start supporting big file uploads in **Chevereto 4.3**, stay tuned for the [release announcement](https://chevereto.com/community/forums/announcements.3/).
