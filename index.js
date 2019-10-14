import express from 'express';
import routes from './api/routes.js';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';

// Setup .env variables
dotenv.config();

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.listen(5000, () => {
    console.log('Identity Service running at --> localhost:' + 5000);
});

app.use('/', routes);
