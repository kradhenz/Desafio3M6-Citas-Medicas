import express from 'express';
import axios from 'axios';
import chalk from 'chalk';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

const app = express();
const port = 3000;
const apiUrl = 'https://randomuser.me/api/' // API URL
const usersArray = []; // Array for users
const dateFormat = 'MMMM Do YYYY: hh:mm:ss a'; // format date



// Undefined route managament
app.get('*', (req, res) => {
    res.send('<center><h1>This page does not exist...👻</h1></center>');
});

// Express server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});