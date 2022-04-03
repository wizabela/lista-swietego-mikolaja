import * as express from "express";
import * as cors from 'cors';
import 'express-async-errors';
import * as methodOverride from "method-override";
import {engine} from "express-handlebars";
import {handleError} from "./utils/errors";
import {homeRouter} from "./routers/home";
import {childRouter} from "./routers/child";
import {giftRouter} from "./routers/gift";

import './utils/db';

const {handlebarsHelpers} = require("./utils/handlebars-helpers");

const app = express();

app.use(cors({

    origin: 'http://localhost:3000',

    }));

// app.use(methodOverride('_method'));
// app.use(express.urlencoded({
//     extended: true,
// }));
// app.use(express.static('public'));
app.use(express.json()); // Content-type: application/json
// app.engine('.hbs', engine({
//     extname: '.hbs',
//     helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
// }));
// app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});
