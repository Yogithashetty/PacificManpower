import React from "react";
import { Box, Typography, TextField, Button,  Link } from "@mui/material";
import Grid from "@mui/material/Grid";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#2c2f32", color: "white", mt: 5 }}>
      {/* Newsletter Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          px: { xs: 2, md: 6 },
          py: 4,
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Get New Jobs Notification!
          </Typography>
          <Typography variant="body2">
            Subscribe & get all related jobs notification.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", mt: { xs: 2, md: 0 } }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "4px 0 0 4px",
              "& fieldset": { border: "none" },
              minWidth: "250px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0 4px 4px 0",
              backgroundColor: "#1976d2",
              textTransform: "none",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      {/* Footer Links Section */}
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        {/* Address */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Address
          </Typography>
          <Typography variant="body2">
            Mangolre <br />
            Karnataka
          </Typography>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contact
          </Typography>
          <Typography variant="body2">988676356373</Typography>
          <Typography variant="body2">
            contact@pacificmanpower.com.pg
          </Typography>
        </Grid>

        {/* Discover */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Discover
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Contact Us
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Login
          </Link>
        </Grid>

        {/* Core Service */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold">
            Core Service
          </Typography>
          <Link href="#" color="inherit" underline="hover" display="block">
            Manpower
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Recruitment
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Payroll
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Technical Services
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
