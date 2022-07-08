import {mount as mountProduct} from 'products/ProductsIndex';
import { mount as mountCart } from "cart/CartShow";

//When importing products, webpack first search for products in node_modules. 
//If it's not present then, it'll look in the webpack.config.js. Ie in 
//plugins / remote section 

// plugins: [
//   new ModuleFederationPlugin({
//     name: "container",
//     remotes: {
//       products: "products@http://localhost:8081/remoteEntry.js",
//     },
//   }),
//   new HtmlWebpackPlugin({
//     template: "./public/index.html",
//   }),
// ];


//The products in "products@http://localhost:8081/remoteEntry.js" 
//is from the webpack.config.js (plugins/name) in products project 

// module.exports = {
//   mode: "development",
//   devServer: {
//     port: 8081,
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "products",
//       filename: "remoteEntry.js",
//       exposes: {
//         "./ProductsIndex": "./src/index",
//       },
//     }),
//     new HtmlWebpackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };


//Also note that in the product's config, we can see that ProductsIndex, is exposed. 
//So, if anyone imports this paritcular module, then the corresponding file is mentioned. 

console.log('Container!'); 

mountProduct(document.querySelector("#my-product")); 
mountCart(document.querySelector("#my-cart"));