![image](https://i.imgur.com/70bI8VC.png)

A web app that helps students find resources to study from based off of their notes.

### How to use
1. Git clone the repository
1. Install Node.js
2. cd into the repository
3. Run 'npm install' to ensure that all packages are installed.
4. Run 'npm start'
5. Open up http://localhost:3000
6. Upload a file
7. Wait for file to process then download matching documents!

### Tools Utilized

* Frontend:
  - React.js
  - HTML
  - CSS

* Backend:
  - Node.js
  - Express
  - MongoDB
  - Amazon S3
  - Amazon Textract

## Inspiration
As college students, we spend a lot of our time studying for classes. There are some great resources out there to use for studying, such as Quizlet or Duolingo, but we wanted to go beyond just flashcard generation and language learning. If there was a way to create study materials based off of the notes we took in our classes automatically, it would help us save time and learn our material even better.

## Main Idea
A student can upload a document of their notes to the website and the website will return study documents that the student can download.

## How we built it
We chose to use Amazon Textract to parse key terms out of the document and match them up with tagged documents in a MongoDB database. For example, if a user uploaded notes from a sorting algorithm lecture, tags that could be extracted from those notes might include "quicksort", "mergesort", and "heapsort" for example. Those terms could be used to query the database and find a document that shares the same tags as the lecture notes. 
We chose to build the app using a MERN Stack (MongoDB, Express, React, and Node.js). Node.js was used for the backend and React for the front end. Our document information is stored inside of MongoDB and Express is an important web framework for Node.js. Along with that, we also utilized HTML and CSS stylesheets for the actual appearance of the website. For storage, we created an Amazon S3 bucket where we stored our documents uploaded and library of documents to deliver to the user. 

## Challenges we ran into
The biggest hurdle for us was learning how to use React and Node.js. We have all coded before, but none of us have much experience with Javascript and especially not for a backend. We spent our entire first night just brainstorming how we could make our idea become a reality and watched YouTube tutorials on React and the MERN Stack. Although we felt a bit more comfortable after watching the videos, we still were uneasy starting out. One of the biggest issues was figuring out how React and Node.js worked together. We had decided to split up the work between us into front-end and back-end development. As a result, half of the team understood React and the other half understood Node.js. However, we realized quickly that in order for our web app to work, React would have to be used closely with Node.js. It took a long time to get a grasp on how they worked hand-in-hand. 
We also struggled with understanding how to use Amazon AWS, as we had never used it before either. We had made the assumption that we could easily use the online tools to implement Textract but we could not figure out how to do so. As a result, we chose to implement Textract through Python but still struggled to understand how the API worked. We also could not figure out how to upload files to the S3 server for a long time, as it was hard to get a grasp on how to have a file be directly uploaded to S3 from React.

## Accomplishments that we're proud of
It was all of our first hackathons and we are all really proud of all that we were able to accomplish in such a short amount of time. We got a somewhat functional web app working when none of us had ever implemented a web app before. I know that even though we are amateur coders, we really put our heart and soul into this project and tried our hardest to make it work as we intended it. 

## What we learned
We all learned a lot about the MERN stack, which we had never encountered before. I never knew how powerful the capabilities of Javascript were now and it was fascinating to get to know what we could actually do with it. 
We also learned a lot about AWS, which is an amazing tool to know how to use for various purposes. Specifically, we learned a lot about the S3 platform and how to use Textract.
I think our biggest learning experience was how much time it really takes to develop a fully functioning web app. We unfortunately were not able to create our idea as fully as we had intended to when we first set out, but it also taught us the importance of focusing on one issue at a time rather than being broad with our ideas. All of us feel that we know what to expect from our next hackathon and we hope that we can challenge ourselves even more than we were this time around.

## What's next for EZStudy
Ideally, we would want to finish creating our web app and archive a more complete library of resources that we can supply for students to obtain study materials from. There is a lot of untapped potential in image-to-text recognition. With enough time and effort, EZStudy could be made into a fully fleshed web app that would be extremely advantageous to any student. We think that EZStudy could be made into a great iOS app, as students could just take a picture of their notes from their phone and immediately be given great study resources. Originally, we intended for the app to generate quizzes based off of lecture notes. Because we did not have enough time to create a way of generating quiz questions, we chose to rather just return study materials to the student using the app. However, this would be a great future feature that we could implement into a finished product.

### Contributors
David Dempsey - ddempsey@ucsd.edu

Renaldy Herlim - rherlim@ucsd.edu

Amjad Al-Omar - aalomar@ucsd.edu

Rakesh Senthil - rsenthil@ucsd.edu
