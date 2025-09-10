import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { PhoneOutlined, EmailOutlined } from "@mui/icons-material";



export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    // If no errors, process form
    const hasErrors = Object.values(newErrors).some((val) => val);
    if (!hasErrors) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully ✅");
      // reset form
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6, bgcolor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left: Form */}

          <Paper elevation={0} sx={{ p: 4, borderRadius: 2 ,border:"none",maxWidth: "600px",  
  }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Get in touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
              Start working with PacificManpower — your one-stop solution to
              engage job seekers and connect with the right candidates.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Typography variant="body1" sx={{ fontSize:"20px" }}>
  Enter your Name
</Typography>
              <TextField
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
              />
<Typography variant="body1" sx={{ fontSize:"20px" }}>
   Enter Your Email
</Typography>
              <TextField
                type="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                error={errors.email}
                helperText={errors.email ? "Enter a valid email" : ""}
              ></TextField>
              <Typography variant="body1" sx={{ fontSize:"20px" }}>
  Your Message
</Typography>
              <TextField
                name="message"
                placeholder="Enter Your Message here!!"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                multiline
                rows={4}
                error={errors.message}
                helperText={errors.message ? "Message is required" : ""}
              />
 <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  bgcolor: "#1976d2",
                    transition: "all 0.3s ease",
                  "&:hover": { bgcolor: "#125ea2",
                          transform: "scale(1.05)",
                   },
                }}
              >
              
                Send Message
              </Button>
              </Box>

            </form>
     
 <Box
      sx={{
        border: "1px solid #110808ff", // thin border
        borderRadius: 1,
        p: 2,
        maxWidth: 550,      // same as form width
        width: "100%",      // full width within container
        display: "flex",    // horizontal layout
        justifyContent: "space-between", // left & right alignment
        bgcolor: "#fff",    // optional background
        mx: "auto", 
        mt:5
                // center box horizontally
      }}
    >
      {/* Local / Physical Address */}
      <Box>
        <Typography fontWeight="bold">Local Address</Typography>
        <Typography>Ground Floor, TISA RUMA</Typography>
        <Typography>Waigani Drive, Port Moresby.</Typography>
        <Typography>Papua New Guinea</Typography>
      </Box>

      {/* Postal Address */}
      <Box textAlign="left">
        <Typography fontWeight="bold">Postal Address</Typography>
        <Typography>P O Box 876,</Typography>
        <Typography>Konedobu, NCD,</Typography>
        <Typography>Papua New Guinea</Typography>
      </Box>
    </Box>
          </Paper>
      

        {/* Right: Illustration */}
        <Box 
        sx={{ margin:3}}>
          <Box
            component="img"
            src="https://www.pacificmanpower.com.pg/static/media/flat-design-illustration-customer-support_23-2148887720.d8cea596.avif"
            alt="Contact"
            sx={{
              maxWidth: "70%",
              height: "auto",
            }}
          />
   <Box display="flex" justifyContent="flex-start" alignItems="center" gap={1}
    margin={3}>
      <EmailOutlined  color="primary"  fontSize="medium" />
      <Typography variant="body1">info@pacificmanpower.com.pg</Typography>
    </Box>
    <Box display="flex" justifyContent="flex-start" alignItems="center" gap={1} mb={1} margin={3}  fontSize="large">
      <PhoneOutlined color="primary" />
      <Typography variant="body1">+675 70311391/392/393/394</Typography>
    </Box>

   
    </Box> 
   </Grid>
    </Box>
  );
}
