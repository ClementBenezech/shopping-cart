import { products } from './ProductsData.js';
import Product from './Product.jsx'
import "./../styles/Products.scss"

const Products = () => {
        const reactElementsArray = products.map((data) => {
            return (
                <Product productData = {data}/>
            );
        });
        
        return (
                     <div className  = "product-list">
                        <h1>{"In need of some skills?"}</h1>
                        {reactElementsArray}
                    </div>  


          
        );

}
export default Products;
  