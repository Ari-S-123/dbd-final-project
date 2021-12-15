# Problem Statement:

Currently, the official Formula 1 Fantasy Sports website (https://fantasy.formula1.com/) does not support the creation of 
true fantasy teams with drivers and constructors that are not part of F1 in real life. In my 
opinion, this severely limits the possibilities a fantasy sports application can offer to its 
users. The official website also limits the number of drivers per fantasy team at the arbitrary 
number of 5.

# Solution Statement:

To solve this problem, I created a webapp that lets users create brand new drivers and 
constructors from scratch, and add them to their fantasy teams which are stored long-term in a 
MySQL database. This application is meant to serve as a base on top of which an entirely new 
fantasy sports website could be built, one with possible to simulate seasons of fantasy f1 
detached from the real-life series. 

# User:

The typical users that would find my webapp useful are Formula 1 Fans that would like to have a 
convenient way to create and maintain partially or completely fictional fantasy teams which 
drivers or constructors that may also be fictional. 

# Domain Objects:-

1. FantasyTeam: A fantasy team consisting of any number of drivers and a single constructor. This

2. Constructor: A real or fictional F1 team that has 2 drivers under contract, can be related to 
many fantasy teams.

3. Driver: Athletes who are under contract by a constructor but have no restrictions as to which 
or how many fantasy teams they can be a part of.

# Team Member(s):

Aritra Saharay

# How to run the app:-

1. Have node and npm installed.

2. npm install ts-node globally.

3. Install dependencies with npm install.

4. Make sure "module" in tsconfig.json is set to "commonjs" before starting server.

5. Start the server with ts-node src/backend/server.ts and keep it running.

6. In a separate console, start the React App with npm start.


