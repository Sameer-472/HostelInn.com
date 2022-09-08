import  express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { Connection } from "./DBConnection.js/Connection.js";

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
// app.use('/',Route)
dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

const PORT= 8000;

app.listen(PORT,console.log('Listening At port 8000'));

