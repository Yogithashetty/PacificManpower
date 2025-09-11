
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
 
  Container,
} from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 2 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent:"space-around" }}>
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Pacific Manpower
          </Typography>
          <Box>
            <Button color="primary">Home</Button>

            <Button
              color="primary"
        
            >
              About
            </Button>

            <Button color="primary">Core Services</Button>

            <Button
            >
              Contact
            </Button>

            <Button variant="contained" sx={{ ml: 2 }}>
              FIND JOBS
            </Button>
            <Button variant="contained" sx={{ ml: 1 }}>
              CANDIDATE PORTAL
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header