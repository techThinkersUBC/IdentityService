import express from 'express';
import routes from './api/routes.js';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import cors from 'cors';

// Setup .env variables
dotenv.config();

const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.listen(4000, () => {
    console.log('Identity Service running at --> localhost:' + 4000);
});

app.use('/', routes);
