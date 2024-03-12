---
date: '01-01-2018'
title: 'Cambia Health'
description: ''
image: '/images/work-experience/cambia.png'
color: '#55487D'
category: 'Healthcare'
projectInfo:
  - title: 'Position(s) Held'
    data: 'Senior Full Stack Engineer'
  - title: 'Dates of Employment'
    data: '9/2018 - 6/2019'
  - title: 'website'
    data: 'https://www.cambiahealth.com'
  - title: 'tech stack'
    data: |
      React, Redux, Typescript, Node.js, Clojure, Clojurescript, AWS (EC2, RDS / Aurora, S3, DynamoDB, Lambda, API Gateway)
---

## Main Notable Project: Page Builder & Content Management System

### Problem Statement

Much like McKesson, Cambia was struggling how to manage the content lifecycle. This time around it was the content powering the member portals for all 3 plans -- Regence, Bridgespan Health, and Asurus. The content authors needed a place where they could create Content and then lay out that content on the page and have that deploy to production as is.

### Solution

The first thing we needed to figure out was where the content would live. Two of the content authors had prior experience with Contentful, so we did a POC with it and it served all of our use case for both the POC and for future state. After we did the POC, we then spent time with the content authors to build out a UI abstraction layer on top of Contentful's Headless CMS.

From there, we needed a way to lay out that content in a meaningful way for the member portals. So, we leveraged React DND, Material UI, and a whole lot of custom logic to create a drag-and-drop page builder that would allow for multi-column/row layouts using the custom curated content blocks.

### Result

Ultimately, we ended up with a solution that allowed content authors to get changes out to production with no developer intervention. But, no new feature development was needed as all of the content blocks could be created in the UI abstraction by the content authors and then they could use them to build there
