# course condenser frontend

https://devpost.com/software/learne

## Inspiration

We were first inspired by the shared pain we've experienced watching long online lectures in an unproductive environment. After that initial moment of solidarity, we thought of what the distance learning experience must be like for members of our community with ADHD. Inspired by the ability to do some social good, we set out to create a learning experience that simplifies and shortens the existing process that Zoom University entails.
What it does

Learne is a webapp aiming to streamline the learning process by providing ML-powered summaries of each of your lectures. We provide a way to consolidate all of your lectures in a single place and extract only the most vital information, giving you the option of gleaning most of the information in a much shorter time. Alternatively, if you'd like to delve more into detail, we always show you the
How I built it

Our frontend is built with Ionic + Vue, while our backend stack consists of a self-hosted Flask server, Firebase for authentication and data storage, and a BERT server on Google Cloud to process the transcripts of videos. We also utilize Google APIs to generate transcripts from audio.
Challenges we ran into

We had many problems in coming up with an idea, so we didn't have much time for actual building.

##Accomplishments that I'm proud of

The team learned to compromise and work with each other efficiently and cleanly. We learned many new technologies in the process of building, including ionic.

## What I learned

The pain and importance of pivoting, as well as many new frameworks for all the teammates.

## What's next for Learne

Add social functions and robustness to current functionality. Do a user study with our target audience of students with ADHD to design a more effective UI.

---

## Install dependencies

```bash
npm install -g @ionic/cli
npm i
```

## Develop

```bash
ionic serve
```

## Build

```bash
npm install -g serve
ionic build
serve -s dist
```
## [Deploy](https://cli.vuejs.org/guide/deployment.html#firebase)
