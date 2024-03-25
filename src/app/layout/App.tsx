import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppRoutes } from '../router/AppRoutes';
import PermanentDrawerLeft from './nav/PermanentDrawerLeft';

const theme = createTheme({
  direction: 'rtl',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
          <PermanentDrawerLeft />
          {AppRoutes}
    </ThemeProvider>
  );
}

export default App;