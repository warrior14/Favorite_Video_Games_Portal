# Grunt and Json-Server Boilerplate

### Steps
To make this work do:
1. clone this repo
2. cd to the lib folder, you must be here to do any npm commands
3. npm install
4. npm install json-server
5. npm install grunt-cli

If you get this error:
```
'NODE_PATH' is not recognized as an internal or external command,
   operable program or batch file.
   npm ERR! code ELIFECYCLE
   npm ERR! errno 1
   npm ERR! lib@1.0.0 start: `NODE_PATH=./src/lib/noode_modules grunt`
   npm ERR! Exit status 1
   npm ERR!
   npm ERR! Failed at the lib@1.0.0 start script.
   npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
   
   npm ERR! A complete log of this run can be found in:
   npm ERR!     C:\Users\amiranda\AppData\Roaming\npm-cache\_logs\2021-03-09T22_26_01_414Z-debug.log
```
then you must install cross-env:
```
npm install --g cross-env
```
or
```
npm install cross-env
```

If you are getting this error:
```
Loading "bg-shell.coffee" tasks...ERROR
>> Error: Grunt attempted to load a .coffee file but CoffeeScript was not installed.
>> Please run `npm install --dev coffeescript` to enable loading CoffeeScript.
Loading "child-process.coffee" tasks...ERROR
>> Error: Grunt attempted to load a .coffee file but CoffeeScript was not installed.
>> Please run `npm install --dev coffeescript` to enable loading CoffeeScript.
Warning: Task "bgShell:launchAPI" not found. Use --force to continue.

Aborted due to warnings.
npm ERR! code ELIFECYCLE
npm ERR! errno 3
npm ERR! lib@1.0.0 start: `cross-env NODE_PATH=`pwd`/node_modules grunt`
npm ERR! Exit status 3
npm ERR!
npm ERR! Failed at the lib@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\amiranda\AppData\Roaming\npm-cache\_logs\2021-03-09T22_33_51_721Z-debug.log

```
then you must install the coffeescript that grunt is looking for:
```
npm npm install --dev coffeescript
```


If you see this:
```
Running "eslint:src" (eslint) task

C:\Users\amiranda\Desktop\MadrazoProjects\jsonServerPractice\src\scripts\main.js
  1:7   warning  Strings must use doublequote  quotes
  2:17  warning  Strings must use doublequote  quotes

✖ 2 problems (0 errors, 2 warnings)
  0 errors and 2 warnings potentially fixable with the `--fix` option.


Running "http-server:dev" (http-server) task
Server running on http://0.0.0.0:8080/
Hit CTRL-C to stop the server

Running "bgShell:launchAPI" (bgShell) task

Running "browserify:app" (browserify) task
>> Bundle ../../public/bundle.js created.

  \{^_^}/ hi!

  Loading ../../api/database.json
  Done

  Resources
  http://localhost:8088/pokemon

  Home
  http://localhost:8088

  Type s + enter at any time to create a snapshot of the database
  Watching...


Running "watch" task
Waiting...
GET /pokemon 200 7.294 ms - 50

```
then you are a winner and your database json-server is running.


## How does it work:

Everything here has been organized.

###Files
* .eslintrc - This file contains all the rules by which the server may stop working, such as if you want the server to error
or warn you if you are using double quotes somewhere.
* .gitignore - This file allows you to ignore files you don't want to push to github, such as node_modules.
* README.ms - This file is what you are reading right now, it contains detailed information about the project or app.

###Folders
####Api
* database.json - This file should contain your json object, all the data aka your database where you are going to be making
all fetch calls.
####Public
* main.html - Your main page.
* main.css - Your main page's style sheet.
* main.js - Your main page's javascript file.
* bundle.js - DON'T TOUCH THIS, this is all of your code compiled, this file will appear when you run your server for the first time.
####Src
#####lib
* This is where all the magic happens
* Gruntfile.js - This file contains the grunt configuration in order for grunt to run.
* package.json - This file contains all the packages that npm install will install.
* package-lock.json - This file will appear once you run npm install.
######grunt - All the files in this folder are necessary to run the server
* aliases.yaml
* bgShell.js
* browserify.js
* eslint.js
* http-server.js
* watch.js
######node_modules
* All the files in here including this folder will appear once you run npm install.
#####scripts
* All of your js files go here

