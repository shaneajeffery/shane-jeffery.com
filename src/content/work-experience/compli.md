---
date: '01-01-2016'
title: 'Compli'
description: ''
image: '/images/work-experience/compli.jpg'
color: '#55487D'
category: 'Compliance'
projectInfo:
  - title: 'Position(s) Held'
    data: 'Lead Software Engineer'
  - title: 'Dates of Employment'
    data: '1/2016 - 9/2018'
  - title: 'website'
    data: 'https://kpa.io/compligo'
  - title: 'tech stack'
    data: |
      Node.js (Express), PHP (Laravel), Vue.js, Vuex, gRPC, REST, mySQL, MongoDB, InfluxDB, Kubernetes, Docker, ConcourseCI, AWS (EC2, S3), mySQL, jQuery, Jest, Mocha, Chai, Sinon, Istanbul
---

## Notable Project #1: Scheduler for Compliance Training Rewrite

### Problem Statement

Compligo, the application that Compli was selling, was originally built by a vendor called Matsoft (out of the UK). They used a lot of code from an application that they had built for another client and the resulting code was a mess.

One of the most complex modules was called Scheduler and it was responsible for sending out compliance training on whatever schedule the user set. Given that the trainings had a vast amount of modules (some had 50 or more steps), each with its own schedule for being sent out, the Scheduler code had a hard time getting the trainings out on time and in a performant manner.

The reason for the rewrite was because Scheduler was taking 8 hours per evening to run calculations and distribute trainings and would completely fall over about half the time. We had a lot of ways to fix the problems the next day, but all of the ways were manual and would take up the first half of our development time for the day.

### Solution

It was not a hard sell to C suite that a rewrite was necessary in order to cut down on the Scheduler problem areas. I was afforded two developers to lead to rewrite Scheduler from the ground up with a 6 month timeline. We already knew how the software worked and where all of the problem areas were, so we weren't going in blind.

The first thing we needed to do is move the code away from being a part of the actual Compligo application and into its own service hosted outside of Compligo. Given that the application was built to be self-contained, no APIs existed within the application. It was PHP code and it followed the PHP templating flow to the letter of the law. So, we started there and figured out what APIs we needed to create to get access to the data we needed.

After those APIs were created within the Compligo application, we were able to build out a new service for Scheduler using Laravel, PHP, and mySQL. The new service was responsible for doing all of the complex Scheduler computations, storing the result, and then queueing it to be updated the Compligo database with RabbitMQ. While we could have just used Scheduler to do the computations and then send the result back immediately, we noticed that Compligo could not handle that kind of traffic volume without falling over. So, we had to be very tactical about how to get the data back into the database without overloading the server.

### Result

After the rewrite, Scheduler took around 30 minutes to run every night. The service was very performant and we were missing sending out trainings on time any longer. Also, the load that this took off the Compligo was enormous and we were not having the server issues we were having before.

## Notable Project #2: Users Microfrontend & Microservice

### Problem Statement

After the Scheduler rewrite was complete, we started to see an issue that was being masked by the Scheduler woes. It turned out that the Compligo application could only handle so many user logins at the same time.

To understand why this was happening, you first have to understand how Compligo was deployed. The model that Compli and Matsoft decided to go with (long before I started), was to put multiple Compligo customers on the same server, sharing server resources. If one customer was stressing the server, all of the other customers on that server would feel it. While all of this was setup on AWS with auto-scaling, logging into the application was such a performance hit that if too many customers were logging in at the same time, it would bring the server to its knees and start to throw timeout errors.

### Solution

With the lessons learning from Scheduler, we decided to move away from PHP and use Node and Express to handle the transaction volume in an asyncronous manner. In parallel, our SREs were working on figuring out if we could bring Docker and Kubernetes into our ecosystem.

As we peeled back the layers of the users module, we realized that in order to redo the login, we were also going to need to redo the user management screens. The problem there was that all of these pieces of the user module were so tightly coupled, that even the UI would need to be redone. So, we looked into a bunch of different ways to do this and decided to go with a microfrontend for the User management screen a

### Result

## Notable Project #3: Import / Export Compliance Reporting Rewrite

### Problem Statement

Building on the success from rewriting Scheduler and User login/management, we set our sights on the final performance issue that was plaguging our users: Import and Export. When onboarding new customers, they would have years of compliance data that they wanted to bring into our system so that they could manage everything in one place. The import code was much of a nightmare as the other two modules that we had rewrite, with the added headache that had to be manually run and monitored after hours by an engineer. Thankfully, this is a task we could spread out amongst our engineers so no one was having to work into the night on a continual basis.

On the flip side, the export

### Solution

### Result
