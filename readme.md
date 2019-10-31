<p style="font-weight:600; font-size:36px">TABLE OF CONTENT</P>

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Environment Setup](#environment-setup)
  - [Vue Client](#vue-client)
  - [Server](#server)
- [Assignment Details](#assignment-details)
- [Requirements & Guides:](#requirements-guides)
- [Bonus](#bonus)
- [APIs](#apis)
- [Screenshots](#screenshots)
  - [Activities view](#activities-view)
  - [Zoom view](#zoom-view)
- [Activity Types and Settings](#activity-types-and-settings)

<!-- /code_chunk_output -->

# Environment Setup

## Vue Client

1. Navigate to your client folder: `cd {project folder}/client`
2. Install project dependencies: `npm install`
3. Run your dev server. `npm run serve`. Your dev server is ready at http://localhost:8080
   (The dev server defaults to port 8080. If it's taken and it uses a different one you'll need to update your cors settings in the server app.js)

## Server

1. Navigate to your server folder: `cd {project folder}/server`
2. Install project dependencies: `npm install`
3. Run your server. `DEBUG=server:\* npm start`. Your server is ready at http://localhost:3000

---

# Assignment Details

Your task is to build a student timeline app as shown in the [Activities view](#activities-view) screenshot. This timeline displays all the student activities.
You can find the [Requirements](#requirements-guides), [Screenshots](#screenshots) and [APIs](#apis) below.
The time this assignment will take to complete will differ based on experience.

# Requirements & Guides:

- There are two main views in this app. [Activities view](#activities-view) and [Zoom view](#zoom-view).
- When the user clicks on the 'View work' link it should open the zoom view
- The main activities feed you should be using is the [Activities V1 API](#apis)
- The activities timeline should be grouped and ordered by months
- Each activity has its own set of settings that affect its rendering. Available activities and their settings are listed in the [Activity Types and Settings](#activity-types-and-settings) below
- The app should support direct access to the zoom view via your router
- The app should support two types of filters:
  - Free text filter
  - Activity type filter
- The app should support pagination for loading more activities in the form of a 'Load more' button

# Bonus

1. Have the app support another feed, [Activities V2 API](#apis), that is structured differently. Same data, but a different structure. Make sure your code supports both structures from [API #V1](#apis) and [API #V2](#apis).
2. Add support for hiding activities. This effect should be persistent.
3. Add autocomplete support to the text filter input. You can use you main [APIs](#apis) feed for that.

# APIs

- [Get activities - V1](http://localhost:3000/student/:student_id:/activities/v1)
- [Get activities - V2](http://localhost:3000/student/:student_id:/activities/v2)

# Screenshots

###Activities view
![Timeline](assets/timeline.jpg)
###Zoom view
![Zoom](assets/zoom.jpg)

# Activity Types and Settings

Every activity has two settings. They can be scored and they can be viewed in zoom mode (View work button). Those settings are not a part of the API response but rather resides on the client app.

- **Movie**
  - Score = false
  - Zoom = false
- **Quiz**
  - Score = true
  - Zoom = true
- **Easy Quiz**
  - Score = true
  - Zoom = true
- **Challenge**
  - Score = true
  - Zoom = true
- **Make a Map**
  - Score = false
  - Zoom = true
- **Make a Movie**
  - Score = false
  - Zoom = true
- **Wordplay**
  - Score = false
  - Zoom = true
- **Related reading**
  - Score = false
  - Zoom = false
- **Draw about it**
  - Score = false
  - Zoom = true
