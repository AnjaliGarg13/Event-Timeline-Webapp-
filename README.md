# csi_events_timeline

## Pre-Requisites
you will need

 [Node.js](https://nodejs.org/)(with npm)

 Mysql

 ##For Running

`git clone <repo-url>` this repository wherever you wan to run

cd into this repo

`npm install`


## Set up Database

Run the following commands in mysql

CREATE DATABASE nsitTimeline;

CREATE USER organiser IDENTIFIED BY 'MY@1pass';

USE nsitTimeline;

GRANT ALL PRIVILEGES ON nsitTimeline.* TO organiser;

FLUSH PRIVILEGES;

login as organiser and..

USE nsitTimeline;

INSERT INTO nsitTimeline VALUES (1,'admin','ADMIN')

##run the server
node server

the site will run on http://localhost:1234