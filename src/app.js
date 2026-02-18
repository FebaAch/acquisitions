import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Hello from Acquisitions!')})

export default app