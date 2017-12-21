import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {serverPort} from './config/config.json';
import * as db from './utils/DataBaseUtils';
import notesController from './controllers/notes.controller';

const app = express();

db.setUpConnection();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

notesController(app);

app.listen(serverPort, () => console.log(`Server is up and running on port ${serverPort}`));
