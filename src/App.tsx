
import DateAndTime from "./compounent/DateandTime"
import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import ImageSlider from "./compounent/Home/Imageslider"
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
      <AppBar
       position="static" 
              sx={{ backgroundColor: 'grey', color: 'blue' }}>
        <Toolbar>
          < ImageSlider />
        </Toolbar>
      </AppBar>
    </Box>
   
    </>
  )
}

export default App
