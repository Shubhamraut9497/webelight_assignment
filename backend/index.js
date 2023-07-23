import express from 'express';
import connect from './connect/connect.js';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import cors from 'cors';
const app = express();
const corsOptions = {
    origin: ['http://example.com', 'http://localhost:3000'], // List of allowed origins
  };
  app.use(cors(corsOptions));
  
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line for body-parser
const PORT = process.env.PORT || 7000;

app.use("/",router)


app.listen(PORT, () => {
    connect();
    console.log(`server is running on ${PORT}`);
});
