import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Product } from "../../../app/model/Product";
type prodProps = {
    product: Product
}
export default function ProductCard({product}: prodProps) {
    return (
      <Box sx={{height:300 , display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Card sx={{ maxWidth: 280 }}>
          <CardContent>
            <Typography sx={{ fontSize: 15 }} color="text.secondary">
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price}
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              {product.category}
            </Typography>
            <Typography variant="body1">
             {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant = 'contained' size="large">delete</Button>
          </CardActions>
        </Card>
      </Box>
    );
  }