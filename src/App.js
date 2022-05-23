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
import { useState } from 'react';
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


  const [qOne, setQone ] = useState(null);
  const [qTwo, setQtwo ] = useState(null);

  const handleSubmit = () => {
    // console.log(qOne);
    // console.log(qTwo);

    const question = {
      "qOne" : qOne,
      "qTwo" : qTwo,
    }

    console.log(question);
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
       
        {/* <div className="moniter">
           <Box width="100%" height="90vh" margin="1rem" display="flex" flexDirection="row" justifyContent="center" alignItems="center" style={{backgroundColor: "red"}}>
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
        </div>
        <div className="tablet">
           <Box width="100%" height="90vh" margin="1rem" display="flex" flexDirection="row" justifyContent="center" alignItems="center" style={{backgroundColor: "blue"}}>
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
        </div>
        <div className="mobile">
           <Box width="100%" height="90vh" margin="1rem" display="flex" flexDirection="row" justifyContent="center" alignItems="center" style={{backgroundColor: "yellow"}}>
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
        </div> */}
        <Box width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center"  alignItems="center">
        <TextField
         name="question1" 
         label="question1" 
         value={qOne}
         onChange={(e) => setQone(e.target.value)}
         />

         <TextField
         name="question1" 
         label="question1" 
         value={qTwo}
         onChange={(e) => setQtwo(e.target.value)}
         />

        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
