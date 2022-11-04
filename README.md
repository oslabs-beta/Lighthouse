# Lighthouse
<p>
<img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/Lighthouse-github-header-img.png" title="lighthouse"/>&nbsp;
<p> 
<div align="center">
<a href="https://github.com/oslabs-beta/Lighthouse"><img src="https://img.shields.io/badge/license-MIT-blue"/></a>
<a href="https://github.com/oslabs-beta/Lighthouse/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/oslabs-beta/Lighthouse"></a>
<a href="https://github.com/oslabs-beta/Lighthouse/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/oslabs-beta/Lighthouse"></a>
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/Lighthouse">

<strong> A minimal, light-weight Kafka cluster monitoring tool built on Next.js. </strong> 
</div>

 
Lighthouse is a lightweight, open-source developer tool useful for monitoring Kafka clusters - in <strong>real</strong> time. It provides a responsive dashboard view of essential performance metrics for visualizing Kafka cluster health.


## Table of Contents

1. [How It Works](#how-it-works)
1. [Getting Started](#getting-started)
1. [Under the Hood](#under-the-hood)
1. [Stretch Goals](#stretch-goals)
1. [Contributors](#contributors)
1. [License](#license)


## How It Works

  Lighthouse is a <strong>typescript-built, open-source developer tool</strong> that utilizies a predefined set of graphQL parameters to query a Prometheus server, allowing Kafka cluster usage data to directly render in a flexible graphical interface. This interface is customizable, allowing for a dynamic display of metrics that are important to each specific user.

<p align="center">
<img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/lighthouse-demo.gif"/>
</p>


## Monitoring

A minimal GUI provides clear visualization of cluster peformance and health. Users are able to get the information they need, when they need it, allowing for on-time system predictions and decisions. 



## Getting Started

Before using the application, the user should have a Confluent Kafka cluster up and running, as well as a Prometheus server connected. AFterwards, it's as easy as inputting the Prometheus endpoint into the application.

1. Install
```javascript
npm install;
npm run build;
npm start;
```
2. Confluent Cloud kafka cluster setup (https://developer.confluent.io/quickstart/kafka-on-confluent-cloud/)
3. Prometheus Server setup (https://prometheus.io/)
4. Create a process.env and input your Prometheus endpoint.


## Under The Hood
Built with Next.js, GraphQL, Apollo, and Prometheus, with plans to refactor into Typescript.
<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/prometheus/prometheus-original-wordmark.svg" title="Prometheus" alt="Prometheus" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" alt="GraphQL" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="Typescript" alt="Typescript" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg" title="NextJS" alt="NextJS" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="50" height="40"/>&nbsp;
</p>

## Stretch Goals
- Typescript Codebase
- Prometheus Endpoint input feature
- Customizable graphical components
- Docker Containerization

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


