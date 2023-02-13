# Coding assignment

[![Build Status](https://drone.outworld.fr/api/badges/ntrehout/fdj-ca/status.svg)](https://drone.outworld.fr/ntrehout/fdj-ca)
[![wakatime](https://wakatime.com/badge/user/fbf17092-b7b3-4965-b1ae-ab3c4c25c68b/project/ac0f6019-50e5-40ae-b0a1-48357d4b2e3a.svg)](https://wakatime.com/badge/user/fbf17092-b7b3-4965-b1ae-ab3c4c25c68b/project/ac0f6019-50e5-40ae-b0a1-48357d4b2e3a)
[Check my activity on this project](https://wakatime.com/@Azword/projects/ahlbgwukys?start=2023-01-31&end=2023-02-13)

You can check my [Devblog](./DEVBLOG.md) for this project.

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
