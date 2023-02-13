# Coding assignment

[![Build Status](https://drone.outworld.fr/api/badges/ntrehout/fdj-ca/status.svg)](https://drone.outworld.fr/ntrehout/fdj-ca)

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
