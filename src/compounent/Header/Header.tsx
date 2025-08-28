
import { AppBar, Toolbar, Typography, Button} from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {/* Left side - menu icon
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }} color="black">
          Pacific Manpower
        </Typography>

        {/* Right side - navigation buttons */}
        <Button color="primary" >Home</Button>
        <Button color="primary">About</Button>
         <Button color="primary">Core Services</Button>
        <Button color="primary">Contact</Button>
        <Button variant="contained">FIND JOBS</Button>
        <Button variant="contained">CANDIDATE PORTAL</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
