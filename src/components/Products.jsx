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
                        {reactElementsArray}
                    </div>  


          
        );

}
export default Products;
  