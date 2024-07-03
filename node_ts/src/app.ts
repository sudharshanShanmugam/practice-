

import  express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from './models/productModel';

const app = express();
const port: number = 3000;

app.use(express.json()); // Middleware for express

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Node Home Page');
});

app.get('/Blog', (req: Request, res: Response) => {
    res.send('Node Blog Page');
});

// Get Products
app.get('/products', async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
});

// Get product by ID
app.get('/products/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
});

// Post method
app.post('/products', async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.put('/products/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error :any) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect('mongodb+srv://admin:12345sudhar@sudharshanapi.b2jfn.mongodb.net/test?retryWrites=true&w=majority&appName=sudharshanAPI')
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(port, () => {
            console.log(`API app running on localhost port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });