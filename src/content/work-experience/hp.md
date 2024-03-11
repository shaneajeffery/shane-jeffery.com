---
date: '01-01-2020'
title: 'Hewlett-Packard (HP)'
description: ''
image: '/images/work-experience/hp.jpg'
color: '#55487D'
category: '3D Printing'
projectInfo:
  - title: 'Position(s) Held'
    data: 'Senior Full Stack Engineer & Scrum Master'
  - title: 'Dates of Employment'
    data: '3/2020 - 4/2021 (Contract)'
  - title: 'website'
    data: 'https://www.hp.com/us-en/printers/3d-printers.html'
  - title: 'tech stack'
    data: |
      React, React Query, Typescript, Jest, React Testing Library, Storybook, Chromatic, Cypress, Go, Azure Devops for CI, Microfrontends, Emotion, Tailwinds
---

## Main Notable Project: HP 3D Center

### Problem Statement

Upon joining HP on a one-year contract, I assumed the responsibility of leading the frontend development initiative aimed at addressing a critical business challenge.

The primary objective was to provide clients, equipped with numerous 3D printers and auxiliary devices, with a comprehensive overview of each machine's status. This entailed monitoring various parameters such as the printer's current stage in the printing cycle, pending jobs, material levels, and other pertinent metrics, as showcased in the accompanying video.

### Solution

Embarking on this endeavor, we commenced with a greenfield approach encompassing the entire technological stack. The frontend development was anchored on React and React Query, complemented by HP's 3D Print Design System, codenamed Veneer. Simultaneously, the backend infrastructure was constructed using Go, with Redis serving as the designated data store. Data updates were furnished every 10 minutes by our Firmware team, responsible for aggregating and managing the raw data.

Our team composition comprised four frontend engineers (including one lead, two seniors, and one junior), three backend engineers (comprising one lead and two seniors), and two senior QA engineers. Despite the robust team structure, the project's fruition spanned a year. Predominantly, our challenges emanated from collaborating with the firmware team and deciphering the data's cadence to ensure accurate computation and visualization.

### Result

The culmination of our efforts is showcased in the accompanying video snippet:

[![HP 3D Center Video](https://img.youtube.com/vi/93IeL9Xijsw/0.jpg)](https://www.youtube.com/watch?v=93IeL9Xijsw&ab_channel=HP)

### Technology Used

- React 17
- Redux
- Custom Design System
- Vite
- Jest / React Testing Library / Cypress
- Go
- Hosted on GCP using Docker and Kubernetes
