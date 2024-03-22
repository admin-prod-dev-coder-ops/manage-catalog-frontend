import PermanentDrawerLeft from './nav/PermanentDrawerLeft'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
   direction: 'rtl',
   // other theme properties
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <PermanentDrawerLeft /> 
    </ThemeProvider>
  )
}

export default App
