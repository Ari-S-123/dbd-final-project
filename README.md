# F1 Fantasy Team Manager

## Problem Statement:

Currently, the official Formula 1 Fantasy Sports website (https://fantasy.formula1.com/) does not support the creation of 
true fantasy teams with drivers and constructors that are not part of F1 in real life. In my 
opinion, this severely limits the possibilities a fantasy sports application can offer to its 
users. The official website also limits the number of drivers per fantasy team at the arbitrary 
number of 5.

## Solution Statement:

To solve this problem, I created a webapp that lets users create brand-new drivers and 
constructors from scratch, and add them to their fantasy teams which are stored long-term in a 
MySQL database. TypeORM is the ORM Solution used for the project. The backend of this webapp is 
built using Node.js, Express, and Typescript. The frontend of this webapp is built using React 
and Typescript. This application is meant to serve as a base on top of which an entirely new 
fantasy sports website could be built, one with possible functionality to simulate seasons of 
fantasy f1 detached from the real-life series.

## User:

The typical users that would find my webapp useful are Formula 1 Fans that would like to have a 
convenient way to create and maintain partially or completely fictional fantasy teams which 
drivers or constructors that may also be fictional. They have a first name, a last name, a 
username, password, email, and a date of birth. Shares a one-to-many relationship with fantasy 
teams.

## Domain Objects:-

1. Fantasy Team: A fantasy F1 team consisting of any number of drivers and a single constructor. 
   Shares a many-to-one relationship with users, a many-to-one relationship with constructors, 
   and a many-to-many relationship with drivers. They have a name, budget, constructor, and 
   any number of drivers.

2. Constructor: A real or fictional F1 team that has one or multiple drivers under contract, 
   and can be related to many fantasy teams. Shares a many-to-one relationship with constructors 
   and a many-to-many relationship with fantasy teams. They have a name, color, nationality, 
   value, and any number of drivers.

3. Driver: Athletes who are under contract by a constructor but have no restrictions as to which 
or how many fantasy teams they can be a part of. Shares a one-to-many relationship with fantasy 
   teams and drivers. They have a name, nationality, value, are part of only one constructor, 
   and part of any number of fantasy teams.

## Team Member(s):

Aritra Saharay

## How to run the app:-

1. Have node and npm installed.

2. `npm install ts-node` globally.

3. Install dependencies with `npm install`.

4. Make sure "module" in `tsconfig.json` is set to `"commonjs"` before starting server.

5. Start the server with `ts-node src/backend/server.ts` and keep it running.

6. In a separate console, start the React App with `npm start`.


