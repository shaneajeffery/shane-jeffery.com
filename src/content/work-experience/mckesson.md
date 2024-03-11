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

During my initial tenure at McKesson, I became privy to the challenges faced by the Clinical Information Services team, affectionately referred to as the Content team. Their struggle with outdated toolsets, particularly evident in the arduous process of content creation within both the original and new EHR products, piqued my interest. With smaller content types, such as Labs, requiring up to 10 hours for inception to production, and larger types like Regimens necessitating 1-2 days, it was evident that our workflows were hindered by obsolete ETL processes spanning multiple teams.

It wasn't until my promotion to Solutions Architect in February 2023 that I found an opportunity to effect meaningful change.

### Problem Statement

Given the imperative to revamp processes for various content types, I prioritized addressing the inefficiencies surrounding Labs. The overarching aim was to streamline development and delivery on a per-content-set basis, expediting tool deployment to the Content team.

Labs remained solely developed within the original EHR product, serving as the last vestige of code preventing its sunset. The significance of retiring this outdated system extended beyond mere efficiency gains; it addressed numerous Information Security concerns inherent in the original application.

### Solution

Navigating the landscape of transitioning from the old to the new EHR, I spearheaded the development of a new standalone application. Faced with resource constraints, I engaged available assistance during innovation time to determine our optimal tech stack. Ultimately, we adopted React for the frontend and Node/Express/Postgres for the backend.

Seeding data from the new EHR via ORDS (Oracle REST Data Services) and subsequently transforming it into our Postgres database allowed us to establish a unidirectional data flow under our complete control. This newfound control facilitated mass publishing to production, a feat previously unattainable with our antiquated toolset.

Additionally, we crafted a custom SNOMED tree, organizing Labs hierarchically using a Dewey Decimal System convention, a familiar framework for the Content team.

### Result

The transformation was palpable as the Content team achieved remarkable efficiency gains. Building a lab now requires less than 5 minutes, with deployment to production taking less than 10 seconds. This monumental improvement starkly contrasts the previous labor-intensive process, where a single lab could consume upwards of 10 hours.

### Technology Used

- React V18
- Redux Toolkit
- Chakra UI
- AG Grid (Enterprise Tree Structure)
- Jest / React Testing Library / Cypress
- Vite
- Node V20
- Express
- Postgres
- Supertest / Mocha / Chai
- Hosted on Azure using Docker, Istio, and Kubernetes

## Notable Project #2: Ontada Design System Component Library

### Problem Statement

Upon joining McKesson in April 2021, I was made aware of an ongoing initiative to develop a React Component Library for the newly established Ontada Design System. Like many large companies, disparate implementations of identical components proliferated throughout our product portfolio. The need for standardization was evident, with the myriad implementations becoming increasingly burdensome for stakeholders at all levels.

### Solution

Given the company-wide mandate to utilize React for all frontend development, our approach to the component library was straightforward. We undertook the development of approximately 50% of the design system components in React 16, subsequently releasing V1 two months later. Iterative development ensued, culminating in the extension of these components to React 18, with a focus on achieving coverage for 90% of use cases.

### Result

The introduction of a singular component library has proven instrumental in consolidating development efforts across the organization. Rather than managing a multitude of disparate implementations, teams now rally around a unified library, fostering consistency and efficiency. Though different products may adopt varying versions of the library, alignment towards a common long-term trajectory remains paramount.

### Technology Used

- React 16 and React 18
- Chakra UI
- Vite
- Chromatic
- Storybook
- Jest / React Testing Library

## Notable Project #3: Typescript Implementation for 5 Inherited Projects

### Problem Statement

In the realm of enterprise software development, the absence of type safety coupled with the lack of code linting and prettification poses significant challenges. This not only diminishes the enjoyment of the development process but also transforms it into a daunting ordeal.

### Solution

The solution lies in a systematic approach, wherein each project undergoes iterative transformation. By prioritizing the conversion of numerous components and containers to Typescript, we embark on a journey towards enhanced code integrity and readability.

### Result

The implementation of Typescript brings forth a multitude of benefits, chief among them being the availability of type checking. Moreover, our endeavors unearthed a substantial amount of redundancy within each project, accounting for approximately 5-10% of the codebase. By rectifying unused variables, eliminating obsolete imports, and standardizing variable types, we succeeded in streamlining the codebase, resulting in cleaner and more robust software. Additionally, this endeavor simplified our testing procedures, paving the way for a more efficient development lifecycle.
