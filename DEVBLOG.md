# Devblog

## February 7th, 2023 | DevOps & Architecture | 2 hours

Implementation of the necessary elements in order to use my homemade - nx based - tools.

Corrections and adjustments were made to ensure the proper functioning of my homemade tools.

### 📋 Tasks

* [x] Fork the repository
* [x] Restructure the repository in order to be compatible with my tools & process.
* [x] Add .drone.yaml file.
* [x] Add helm-deploy, docker-publish and version targets to Client & Server.
* [x] Add environment.[staging/development/production].ts files.
* [x] Add Dockerfile & Docker's folder to Client & Server.
* [x] Create an NX HelmChart project for Client & Server.
* [x] Migrate packages to Angular v15
* [x] Configuring the nginx host to use a proxy_pass to the backend
* [x] Troubleshooting issues with version NX 15.4.5 and outworld.fr tools
* [x] Reverting to version @nrwl/devkit 15.3.0 for time savings, and planning to update the tools for NX 15.4.5 at a later stage.


### 🎯 Benefits

* 3 environments : development, staging & production (all inside our Kubernetes)
* Continuous Integration on affected projects on every push.
* Continuous Delivery on development environment on every push on master.
* Manual build promotion to start Continuous Delivery on targeted environment.
* High level ESLint rules for RxJS by Cartan
* The client's nginx can proxy_pass /api through a Kubernetes Service to the Backend
* All my homemade tools works perfectly for this repository. While I could have avoided this loss of time by starting from scratch with a new repository that would be perfectly compatible with my tools, I chose to understand the source of the problem with (@nrwl/devkit:15.4.5) in order to create a task in my own board and develop my tools further.
