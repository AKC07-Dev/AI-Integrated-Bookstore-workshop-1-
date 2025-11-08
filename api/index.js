import express from 'express';
import connectDB from '../config/db.js';
import authRoutes from '../routes/auth.routes.js';
import bookRoutes from '../routes/book.routes.js';
import orderRoutes from '../routes/order.routes.js';
import aiRoutes from '../routes/ai.routes.js';

const app = express();


app.use(express.json());
connectDB();

const PORT = 8080;

app.get("/",(req,res) => {
    res.send("Bookstore API is running");
});

app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/ai", aiRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`);
});