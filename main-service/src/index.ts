import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import {createConnection} from 'typeorm';
import productRoutes from './routes/productRoutes';
import purchaseRoutes from './routes/purchaseRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/api', purchaseRoutes);

createConnection().then(() => {
    app.listen(3000, () => {
        console.log('Main service is listening on port 3000');
    });
}).catch(error => console.log(error));