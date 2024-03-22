import { Grid } from "@mui/material"
import { Product } from "../../../../app/model/Product"
import ProductCard from "../ProductCard"

type productListProps = {
    products: Product[]
}
export default function ProductList({products}: productListProps) {
  return (
    <>
    {/* {products.map((product: Product)=>(
      <ProductListItem key={product.id} product={product} />
    ))} */}
  <Grid container spacing={3}>
    {products.map(product => (
      <Grid
        item
        xs={6}
        md={3}
        key={`grid-${product.name}-${product.description}-${product.price}`}
      >
        <ProductCard product={product}
        />
      </Grid>
    ))}
  </Grid>
);
    </>
  )
}