---
date: '01-01-2019'
title: 'Treetop Commons'
description: ''
image: '/images/work-experience/treetop.jpg'
color: '#55487D'
category: 'Education'
projectInfo:
  - title: 'Position(s) Held'
    data: 'Senior Frontend & IAM Engineer'
  - title: 'Dates of Employment'
    data: '6/2019 - 12/2019'
  - title: 'website'
    data: 'https://nhc.handsonconnect.org'
  - title: 'tech stack'
    data: |
      Go, React, Redux, Typescript, Enzyme, Jest, Cucumber, OAuth, ADFS, Postgres, AWS coupled with Consul and Nomad, Vagrant
---

# Main Notable Project: On-Prem SAML Autheniction to Auth0

### Problem Statement

The team encountered challenges with the existing SP-initiated Single Sign-On (SSO) flow, wherein the Identity Provider (IDP) was hosted on an on-premises server, and the Service Provider (SP) integration into the application varied across partner schools. This setup proved cumbersome due to the disparate authentication configurations of each school, making the integration of a SAML SP into their workflows a daunting task, often resulting in impracticality, if not impossibility, in certain cases.

### Solution

Transitioning to a Cloud-based solution became imperative to alleviate the complexities associated with managing diverse SSO infrastructures. After evaluating various options including Okta, Auth0, and SailPoint, a meticulous assessment was conducted. Collaborating with select volunteer schools, we conducted small Proof of Concepts (POCs) to assess the simplicity of implementation and long-term maintenance requirements for each solution.

Ultimately, Auth0 emerged as the preferred choice owing to its cost-effectiveness, ease of implementation for both our organization and partner schools, and the exceptional support provided by Auth0 in resolving implementation challenges across different environments.

### Result

Before the company's dissolution, approximately 7 months post my joining, all partner schools successfully transitioned to Auth0. This migration facilitated the complete sunset of the SP-initiated SSO flow, thereby retiring our IDP server. Despite the increase in software costs incurred by adopting Auth0 over the on-premises solution, substantial savings were realized on the engineering front. The SSO implementation time was significantly reduced by over 75%, with onboarding processes streamlined to half a day or less, compared to the previous 2-3 days duration.
