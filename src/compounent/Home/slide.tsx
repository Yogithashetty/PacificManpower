import React from "react";
import { Box, Typography } from "@mui/material";

interface SlideProps {
  image: string;
  title: string;
}

const Slide: React.FC<SlideProps> = ({ image, title }) => {
  return (
  <Box
  sx={{
    width: "100%",
    height: "100%",
    backgroundImage: `url(${image})`,
    //backgroundSize: "cover",
    //backgroundPosition: "center",
   backgroundRepeat: "no-repeat", // ✅ this line fixes repetition
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
  }}
>
  <Typography variant="h3">{title}</Typography>
</Box>

  );
};

export default Slide;
