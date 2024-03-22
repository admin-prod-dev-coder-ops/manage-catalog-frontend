import {createBrowserRouter} from 'react-router-dom'
import App from '../layout/App'
import ProductDetails from '../../features/products/operations/details/ProductDetails';
import ProductForm from '../../features/products/operations/add/ProductForm';
import ProductDashboard from '../../features/products/common/ProductDashboard';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "/products", element: <ProductDashboard />},
        {path: "/product/:id", element: <ProductDetails />},
        {path: "/products/:id", element: <ProductForm />},
        {path: "/product/add", element: <ProductForm key='create' />}
      ],
    },
  ]);