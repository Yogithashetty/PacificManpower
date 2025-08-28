import { AppBar, Box, Toolbar, } from "@mui/material";
import ImageSlider from "../../compounent/Home/Imageslider";

function Home(){
    return(
     <Box> 
     
      <AppBar
       position="static" 
              sx={{ backgroundColor: 'grey', color: 'blue' }}>
        <Toolbar>
          < ImageSlider />
        </Toolbar>
      </AppBar>
    </Box>
   
    );

}
export default Home;