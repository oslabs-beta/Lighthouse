# Lighthouse
<p>
<img src="https://github.com/oslabs-beta/Lighthouse/blob/main/GithubImages/Lighthouse-github-header-img.png" title="lighthouse"/>&nbsp;
<p> 
<div align="center">
<a href="https://github.com/oslabs-beta/Lighthouse"><img src="https://img.shields.io/badge/license-MIT-blue"/></a>
<a href="https://github.com/oslabs-beta/Lighthouse/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/oslabs-beta/Lighthouse"></a>
<a href="https://github.com/oslabs-beta/Lighthouse/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/oslabs-beta/Lighthouse"></a>
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/Lighthouse">

<strong> A minimal, light-weight Kafka cluster monitoring and data management tool. </strong> 
</div>

 
Lighthouse is a mininal, multi-faceted developer tool useful for visualizing and managing Kafka clusters - in <strong>real</strong> time. Lightouse provides a dashboard view of essential performance metrics for monitoring Kafka cluster health, allows for topic management within clusters, and performance comparisons based on historical data.


## Table of Contents

1. [How It Works](#how-it-works)
1. [Under the Hood](#under-the-hood)
   - [Monitoring](#monitoring)
   - [Writability](#writability)
   - [Performance Comparison](#performance-comparison)
1. [Getting Started](#getting-started)
   - [Requirements](#requirements)
   - [Installation](#installation)
   - [Prometheus Server](#prometheus-server)
1. [Future Goals](#future-goals)
1. [Contributors](#contributors)
1. [License](#license)


# How It Works

  Lighthouse is a <strong>typescript-built, open-source application</strong> that utilizies a predefined set of graphQL parameters to query a Prometheus server, allowing usage data of your Kafka clusters to directly render in a flexible graphical interface. This interface is customizable, allowing for customization of metrics that are important to the specific user.
  
With Lighthouse, users are able to:

# Monitoring

A minimal GUI provides clear and custom visualization of cluster peformance and health. Users are able to see what they want to see, how they want to see it - performance can be represented in several ways, including scatter plots, pie charts, or traditional graphs.

# Writability

Topics can be directly accessed and manipulated within the cluster via a write feature that manages cluster information.


# Performance Comparison

Utilizing an import and export feature, Lighthouse allows for current metrics to be exported and external metrics to be imported. A comparison tool allows for these metrics at different instances to be compared side-by-side for immediate diagnosis of cluster health.


# Under The Hood

<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/prometheus/prometheus-original-wordmark.svg" title="Prometheus" alt="Prometheus" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" alt="GraphQL" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" title="Docker" alt="Docker" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg" title="NextJS" alt="NextJS" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" title="Express" alt="Express" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="50" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-original.svg" title="MaterialUI" alt="MaterialUI" width="50" height="40"/>&nbsp;
</p>

# Getting Started

```javascript
npm install;
npm run build;
npm start;
```

# Contributors

<table align="center"><tbody><tr>
  <td align="center" width="150">
    <img src="" style="height: 5rem; width: 5rem;" />
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


