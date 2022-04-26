import express from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";
import {childRouter} from "./routers/child";
import {giftRouter} from "./routers/gift";
import './utils/db';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    }));

app.use(express.json()); // Content-type: application/json

app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://0.0.0.0:3001');
});
