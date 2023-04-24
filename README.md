# COLLEGE MS API

## SETUP MONGO

Firstly, set up a mongo database.
Host loally or use Mongo Atlas.

Steps to setup atlas:

1. Go to `https://www.mongodb.com/atlas/database`
2. Sign in using your Google or Github account
3. Create a free cluster, if new account
4. Create a user to connect to the database
5. Atlas will automatically add your IP for accessing database.
6. Or, you can add `0.0.0.0` in-order to access from any device, if for developing process only.
7. Now click `Connect` button, then select VS Code and copy the connection string.
8. It should be something like this:
   `mongodb+srv://<user>:<password>@clustername.dimodnar.mongodb.net/dbName`

## CREATE ENVIRONMENT

Create a `.env` file in root of the project. i.e. where `package.json` lies

Paste the connection string as. Make sure to replace `<user>`, `<password>` and `dbName` with yours.

<em>Note: </em> `user` and `password` from Step 4. from atlas setup

`MONGO_URI=mongodb+srv://<user>:<password>@clustername.dimodnar.mongodb.net/dbName`

## RUN

To run, use following command in your terminal.

`npm start`
