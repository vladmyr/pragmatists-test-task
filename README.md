## Pragmatists/task-kata ##
#### Description ####
This is a resut of a test task provided by [Pragmatists](http://pragmatists.pl/) company. Description of the task can be found here: [github.com/Pragmatists/task-kata](https://github.com/Pragmatists/task-kata)

#### Pre-requirements ####
Application webserver is written using [Node.js](https://nodejs.org/en/), therefore, in order to run this project locally you need to have it installed. It is recommended to use version [4.2.1](https://nodejs.org/dist/v4.2.1/). Other ones were not tested.

#### How to install? ####
Execute the following commands:
```cmd
git clone https://github.com/vladmyr/pragmatists_test_task
cd pragmatists_test_task
npm install
```
You may also need to install webpack globally
```cmd
npm install webpack -g
```

#### How to run? ####
Inside the root directory of the project execute
```cmd
npm run start
```
that will start server on port 8080. Afer you can navigate to [http://localhost:8080](http://localhost:8080) to see the result.

#### What was done? ####
- Fully functional front-ent part
- Fully functional back-end part
- Build automation for development and production environments

#### What else could be done? ####
- Unit testing
- Separation of front-end and back-end part to different projects
- i18n
- JSDocs

#### Whar stack of used technologies and frameworks were used? ####
- Front-end
	- React as a view layer
	- Redux for handling view state
	- Backbone.Model, Backbone.Collection 
	- Webpack as a build automation tool
	- Additional minor libraries such as validator
- Back-end
	- Node
	- Express