import { productData } from "../../../app/api/SampleProduct";
import ProductList from "../operations/list/ProductList";

export default function ProductDashboard() {
    return (
         <ProductList products={productData}/> 
    )
}