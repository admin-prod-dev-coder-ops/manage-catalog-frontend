import { Product } from "../../../../app/model/Product"

type productListItemProp = {
    product: Product
}

export default function ProductListItem({product}:productListItemProp) {

  return (
    <div>ProductListItem {product.name}</div>
  )
}