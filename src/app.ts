import express, {Application, Request, json, Response} from 'express';
import dotenv, { DotenvConfigOutput } from 'dotenv';
import config from './config/config';

const app: Application = express();
const env_config: DotenvConfigOutput = dotenv.config();
const port = process.env.PORT || 1617;


//Middleware
app.use(json());

//Modules
import TestRouter from './routes/test.route';

//Routes
app.use(TestRouter);

let serve = async () => {
    await config.authenticate();
    await config.sync({force: false});
    app.listen(port, ()=>{
        console.log("Connected to port:", port);
    });    
}

serve();


