
import DateAndTime from "./compounent/DateandTime"
import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import Header from "./compounent/Header/Header"
import Footer from "./compounent/Footer/Footer"


function App() {

  return (
    <>
     <Box>
   <AppBar
       position="static" 
              sx={{ backgroundColor: 'black' ,height:'50px'}}>
                <Toolbar>
                   <Typography sx={{ fontSize:"2.5em"}} color="white" />
                  <DateAndTime />
                </Toolbar>
              </AppBar>
        </Box>
                  <Header/>
                  <Footer />
 
    </>
  )
}

export default App
