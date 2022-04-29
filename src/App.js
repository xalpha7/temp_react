import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  adaptV4Theme,
  Tabs,
  Tab,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import './App.css';


let theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: '#001A41',
    },

  },
  typography: {
    h1: {
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: '"Poppins", sans-serif',
    },
    h2: {
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: '"Poppins", sans-serif',
    },
    h3: {
      color: '#fff',

    },
    h4: {
      margin: '0.8rem',
      color: "red",
      fontFamily: '"Poppins", sans-serif',
    },
    h5: {
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: '"Poppins", sans-serif',
    },
    h6: {
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: '"Poppins", sans-serif',
    },
    subtitle1: {
      color: 'purple',

    },
    subtitle2: {
      fontFamily: '"Poppins", sans-serif',
      textTransform: "uppercase",
      color: "#333333"

    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      color: "#041562",
      fontSize: "0.8rem"
    },
    overline: {
      fontFamily: '"Poppins", sans-serif',
      color: "#041562",
      fontSize: "0.8rem"
    }

  },

}));

theme = responsiveFontSizes(theme);



function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box width="90%" height="90vh" margin="1rem" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
          <Card>
            <CardContent>
              <Box width="100%"  >
                <Typography variant="subtitle1" >
                  Create Question Paper
                </Typography>
              </Box>
            </CardContent>

          </Card>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
