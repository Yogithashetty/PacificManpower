import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

function Header() {
  const [aboutAnchor, setAboutAnchor] = useState<null | HTMLElement>(null);
  const [contactAnchor, setContactAnchor] = useState<null | HTMLElement>(null);

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
              onMouseEnter={(e) => setAboutAnchor(e.currentTarget)}
              onMouseLeave={() => setAboutAnchor(null)}
            >
              About
            </Button>
            <Menu
              anchorEl={aboutAnchor}
              open={Boolean(aboutAnchor)}
              onClose={() => setAboutAnchor(null)}
              MenuListProps={{ onMouseLeave: () => setAboutAnchor(null) }}
            >
              <MenuItem>Company History</MenuItem>
              <MenuItem>Our Team</MenuItem>
            </Menu>

            <Button color="primary">Core Services</Button>

            <Button
              color="primary"
              onMouseEnter={(e) => setContactAnchor(e.currentTarget)}
              onMouseLeave={() => setContactAnchor(null)}
            >
              Contact
            </Button>
            <Menu
              anchorEl={contactAnchor}
              open={Boolean(contactAnchor)}
              onClose={() => setContactAnchor(null)}
              MenuListProps={{ onMouseLeave: () => setContactAnchor(null) }}
            >
              <MenuItem>Email Us</MenuItem>
              <MenuItem>Locations</MenuItem>
            </Menu>

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