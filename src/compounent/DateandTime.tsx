import { useEffect, useState } from "react";
import { LocationOn, Facebook, LinkedIn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function DateAndTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // left vs right
        alignItems: "center",
        height: "30px",
        bgcolor: "black",
        color: "white",
        px:15,
        py:1,
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOn fontSize="small" />
          <Typography sx={{ fontSize: "1rem" }}>
            Location: Bangalore, Karnataka
          </Typography>
        </Box>
        <Facebook />
        <LinkedIn />
      </Box>

      {/* Right Section */}
      <Box>
        <Typography sx={{ fontSize: "1rem" }}>
          {dateTime.toLocaleString("en-US", {
            month: "short", // Sep
            day: "2-digit", // 08
            year: "numeric", // 2025
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </Typography>
      </Box>
    </Box>
  );
}

export default DateAndTime;
