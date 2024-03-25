import {Route, Routes} from 'react-router-dom'
import ProductDashboard from '../../features/products/common/ProductDashboard';

export const AppRoutes = (
  <Routes>
    <Route path="/products" element={<ProductDashboard />} />
  </Routes>
);