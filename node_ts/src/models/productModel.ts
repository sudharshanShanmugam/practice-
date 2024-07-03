

// const productSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "Please enter a product name"]
//         },
//         quantity: {
//             type: Number,
//             required: true,
//             default: 1

//         },
//         price: {
//             type: Number,
//             required: true,
//         },
//         image: {
//             type: String,
//             required: false
//         }
//     },
//     {
//         timestamps: true
//     }
// )
// const Product = mongoose.model("product", productSchema);
// export default Product






import mongoose from 'mongoose';

interface IProduct  {
    name: string;
    quantity: number;
    price: number;
    image?: string;

}

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;