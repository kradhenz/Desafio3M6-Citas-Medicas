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

// Main route
app.get('/usuarios', async (req, res) => {
    try {
        // 1.2. Axios para consultar la data
        const userApi = await axios.get(apiUrl);
        const name = userApi.data.results[0].name.first;
        const last = userApi.data.results[0].name.last;
        const gender = userApi.data.results[0].gender;

        // 2. Campo id único generado por el paquete UUID
        const id = uuidv4().slice(0, 8);

        //3. Timestamp almacenando la fecha de registro obtenida y formateada por el paquete Moment.
        const date = moment().format(dateFormat);

        // Save data in array
        usersArray.push({ id, name, last, gender, date });

        
        
    } catch (error) {
        console.log('Something is wrong ' + error);
    }
});

// Undefined route managament
app.get('*', (req, res) => {
    res.send('<center><h1>This page does not exist...👻</h1></center>');
});

// Express server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});