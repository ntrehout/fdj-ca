# Coding assignment

[![Build Status](https://drone.outworld.fr/api/badges/ntrehout/fdj-ca/status.svg)](https://drone.outworld.fr/ntrehout/fdj-ca)
[![wakatime](https://wakatime.com/badge/user/fbf17092-b7b3-4965-b1ae-ab3c4c25c68b/project/ac0f6019-50e5-40ae-b0a1-48357d4b2e3a.svg)](https://wakatime.com/badge/user/fbf17092-b7b3-4965-b1ae-ab3c4c25c68b/project/ac0f6019-50e5-40ae-b0a1-48357d4b2e3a)
[Check my activity on this project](https://wakatime.com/@Azword/projects/ahlbgwukys?start=2023-01-31&end=2023-02-13)

You can check my [Devblog](./DEVBLOG.md) for this project.

## Introduction

Hello and welcome to my repository for the FDJ technical test.
The purpose of this test is to create a web application that lists leagues, teams and players in world football.

The dataset initially provided was a dump containing ~10 entries, which I found to be very lightweight to be able to
to represent the ability of the applications to handle the imaginary load of a sports betting site.

I therefore decided to create my own dump, which led to the development of a scraper and dump generator.

The generated dump contains 3 main entities: `League`, `Team` and `Player`.
For a total now of ~80,000 entries.

I took the liberty of implementing the various quality and productivity boosting tools I usually use (homemade).
Allowing me to get continuous deployment, code coverage, project time history and of course continuous integration.

The continuous deployment is done on a dedicated server, and the application is accessible at the following address: [https://fdj-ca.outworld.fr](https://fdj-ca.outworld.fr)
The applications are built and deployed automatically at each push on the `master` branch via a `Docker` image and a `HelmChart`.

On the code side I have opted for an `ICrudService` interface shared by the front and backend to represent what OOP brings to code quality.

I am aware that the code is not perfect, but considering the quantity of features it was difficult to do better without investing too much time (already ~30h).

I still have to do a last refacto here and there, small improvements in the models and the ICrudService interface, improvement of the HTML boilerplate on the Angular side, more TU, etc...

If it's necessary I'll do it :)

Good discovery ! :)

## How to run

```bash
npm config set @otwld:registry https://nexus.outworld.fr/repository/npm-group/

npm i

# Run the app while proxying the API.
npm run start
```

## Scraper

```bash
# scrap, then stores in a temporary database, then dump the DB to a file.
nx run apps-scraper:generate
```

## Angular App

```bash
# run tests
nx test apps-client
```

## API

```bash
# run app
nx test apps-server
```

## Charts

### Client

NGINX + ProxyPass /api.

### Server

MONGODO / Download + Load DUMP / API REST
