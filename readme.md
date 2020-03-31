# Project Title

Node professional setup

---

## Requirements

For development, you will need Node.js and a node package manager such npm or yarn installed in your environment.
You will also need to install MongoDB in your environment please refer to official website to get started https://www.mongodb.com/
or use MongoDB Atlas which is a cloud DB (Recommended) https://www.mongodb.com/cloud/atlas

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command(The versions can differ)

    $ node --version
    v10.15.3

    $ npm --version
    6.9.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/moiscye/node-setup.git
    $ cd node-setup
    $ npm install

## Configure app

In the /config folder create a file dev.js with the following (You only need either local or cloud)

module.exports = {
mongoURI: "mongodb://localhost/your_db" <<< local DB
mongoURI: "your_cloud_string" <<< MongoDB Atlas
};

The dev.js file is not in the repo because its being blacklisted in the .gitignore file

## Running the project

    $ npm run server

## Accesing the end point

- navigate to http://localhost:8000/api/test

you should see the following:

Setup successful

## Adding new routes. Lets say routes for auth

- create a file auth.js in the folder /routes with the following

  const express = require("express");
  const router = express.Router();
  const { signin, signup, signout } = require("../controllers/auth");
  router.get("/signup", signup);
  router.get("/signin", signin);
  router.get("/signout", signout);
  module.exports = router;

* create a file auth.js in the folder /controllers with the following

  exports.signup = async (req, res) => {
  //all logic goes here
  res.send("Signing up...");
  };
  exports.signin = async (req, res) => {
  //all logic goes here
  res.send("Signing in...");
  };
  exports.signout = async (req, res) => {
  //all logic goes here
  res.send("Signing out...");
  };

* in the file routes.js inside folder /startup add the following below import routes

  const authRoutes = require("../routes/auth");

* and also add this line below routes middleware
    
   app.use("/api", authRoutes);

## Accesing the end point once again. Now we have three new routes

- navigate to http://localhost:8000/api/signup
- navigate to http://localhost:8000/api/signin
- navigate to http://localhost:8000/api/signout

you should see a message according the page.

Disclaimer: This configuration is better suited for large projects, however, in small projects, it keeps the code well-organized.
