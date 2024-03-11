---
date: '01-01-2021'
title: 'McKesson'
description: ''
image: '/images/work-experience/mckesson.jpg'
color: '#55487D'
category: 'Healthcare'
projectInfo:
  - title: 'Position(s) Held'
    data: 'Lead Frontend Software Engineer -> Lead Solutions Architect'
  - title: 'Dates of Employment'
    data: '4/2021 - 3/2024'
  - title: 'website'
    data: 'https://www.mckesson.com'
  - title: 'tech stack'
    data: |
      Typescript, React, React Hooks, Redux (Thunks), React Query, AG Grid, Chakra UI, Material UI, Lerna, Nx, Node, Express, GraphQL, Mongoose, Prisma, Azure, AWS, Jest, React Testing Library, Mocha, Chai, Supertest, Sinon, Microfrontends, Microservices
---

## Notable Project #1: Clinical Content Management System

During my first two years at McKesson, I heard in passing how much pain the Clinical Information Services team (Content team) was enduring with their outdated toolsets. They were either building content in the original EHR product (circa 1986 and built in SmallTalk) or in the new EHR in screens where content was a last-class citizen. For smaller content types (Labs), it would take them 10 hours to get one lab from inception through to production. For larger content types (Regimens), it would take 1-2 days. All of this dead time was due to archaic and bloated ETL processes that spanned a multitude of teams.

It wasn't until my promotion to Solutions Architect in February 2023, that I found myself in a position to help in an impactful way.

### Problem Statement

Given that there were many different content types whose processes needed to be rearchitected, I started with the most impactful one first, Labs. The overall goal was to iterate development and delivery on a per content set basis, so as to get tools out to the content team as soon as possible.

Labs was still being developed solely in the original EHR product and was the last bulk of code still running in that product to keep it from being able to be sunset. Sunsetting this would be a huge win on its own because it there were so many ISRM (Information Security) issues that could not be remedied in the original application.

### Solution

As the new EHR was outside of my purview and the old EHR was needing to get sunset, there was nowhere to latch a solution onto. This meant greenfield development and whole new standalone application.

With no developers available to work on this full-time with me, I polled those that would be able to help during innovation time (4 hours each week) to see what tech stack to go with. We ultimately landed on React on the frontend and Node / Express / Postgres on the backend.

All data was seeded from the new EHR by way of ORDS (Oracle REST Data Services) and transformed into our Postgres database. Once the data was seeded fully, we then didn't need to ever pull from the EHR again and could just have a unidirectional data flow that we fully controlled.

With the control of this data flow and the new tech stack, we were also able to accomplish mass publishing to production, which was impossible with the prior toolset. The users of the application were now publishing hundreds of labs to production in a performant manner at any given time.

Also, we developed a custom SNOMED tree that listed all Labs in hierarchal way using a Dewey Decimal System convention. The convention predated the lot of us, so we just stuck with it because it was what the Content team was acclimated to.

### Result

The Content team now can build a lab in less than 5 minutes and then deploy it out to production in less than 10 seconds (depending on the complexity of the lab). As stated in the intro, it was taking them upwards of 10 hours for one lab prior.

### Technology Used

- React V18
- Redux Toolkit
- Chakra UI
- AG Grid (Enterprise Tree Structure)
- Node V20
- Express
- Postgres

## Notable Project #2: Ontada Design System Component Library

## Notable Project #3: Typescript Implementation for Inherited Projects
