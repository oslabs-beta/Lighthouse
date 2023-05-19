# Lighthouse
<p>
<img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/Lighthouse-github-header-img.png" title="lighthouse"/>&nbsp;
<p> 
<div align="center">
<a href="https://github.com/oslabs-beta/Lighthouse"><img src="https://img.shields.io/badge/license-MIT-blue"/></a>
<a href="https://github.com/oslabs-beta/Lighthouse/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/oslabs-beta/Lighthouse"></a>
<a href="https://github.com/oslabs-beta/Lighthouse/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/oslabs-beta/Lighthouse"></a>

<strong> A minimal, light-weight Kafka cluster monitoring tool built on Next.js. </strong> 
</div>

 
Lighthouse is a lightweight, open-source developer tool useful for monitoring Kafka clusters - in <strong>real</strong> time. It provides a responsive dashboard view of essential performance metrics for visualizing Kafka cluster health. 

Soon to be Typescript integrated.


## Table of Contents

1. [How It Works](#how-it-works)
1. [Getting Started](#getting-started)
1. [Under the Hood](#under-the-hood)
1. [Stretch Goals](#stretch-goals)
1. [Contributors](#contributors)
1. [License](#license)


## How It Works

  Lighthouse helps you see metrics that matter by utilizing a predefined set of GraphQL parameters to query a Prometheus server, allowing Kafka cluster usage data to directly render in a minimal graphical interface. With the goal of capitalizing on Kafka's on-demand consumer threading, which gives immediate access to the producer threads, Lighthouse's goal is to provide the developer with on-time metrics to allow for immediate system analysis. 

<p align="center">
<img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/lighthouse-demo.gif"/>
</p>


## Getting Started

Before using the application, the user should have a Confluent Kafka cluster up and running, as well as a Prometheus server connected. Afterwards, it's as easy as inputting the Prometheus endpoint into your process.env variables.

1. Install
```javascript
npm install;
```
2. Confluent Cloud kafka cluster setup (https://developer.confluent.io/quickstart/kafka-on-confluent-cloud/)
3. Prometheus Server setup (https://prometheus.io/)
4. Create a process.env and input your Prometheus endpoints corresponding to the API variables within the components.
5. Run Build & Start
```javascript
npm run build;
npm start;
```

To run Lighthouse within a Docker container based on the image provided, follow these steps.

1. Open Docker (make sure local Docker client is up to date with the latest version)
2. Build Docker Image
```javascript
docker build -t lighthouse-app .
```
3. Run the image as a Docker container
```javascript
docker run -p 3000:3000 lighthouse-app
```


## Under The Hood
Built with Next.js, GraphQL, Apollo, Prometheus, and Docker. Containerization provided by Docker.
<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/prometheus/prometheus-original-wordmark.svg" title="Prometheus" alt="Prometheus" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" alt="GraphQL" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg" title="NextJS" alt="NextJS" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" title="Docker" alt="Docker" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="50" height="40"/>&nbsp;
</p>

## Stretch Goals
- Typescript Codebase
- Prometheus Endpoint input feature
- Customizable graphical components

## Contributors
We are always open to collaborating and building together! Reach out with features you'd like to see.
<table align="center"><tbody><tr>
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/andy-profile-pic.jpg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Andy Kuang</strong>
    <br/>
    <a href="https://github.com/Aku15">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/andy-kuang-156318221/">LinkedIn</a>
  </td>
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/Zaw-profile-pic.jpeg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Zaw Win</strong>
    <br/>
    <a href="https://github.com/hbkw510">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/zawnwin/">LinkedIn</a>
  </td>
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/Christian-profile.jpeg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Christian Springer</strong>
    <br/>
    <a href="https://github.com/christianspringer-ux">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/christian-springer0/">LinkedIn</a>
  </td>
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/Brandon-profile-pic.jpeg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Brandon Chin</strong>
    <br/>
    <a href="https://github.com/chitangchin">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/chitangchin/">LinkedIn</a>
  </td>
</tr></tbody></table>

# License

This product is licensed under the MIT License without restriction.


