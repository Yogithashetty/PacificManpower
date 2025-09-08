import { Box, Typography, Card, CardContent } from "@mui/material";

export default function AboutCompany() {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch", 
        gap: 0,
        px: { xs: 2, md: 6 },
        py: 6,
        m: 0,
      }}
    >
     

      {/* Right Text */}
      <Box sx={{ flex: "1 1 400px", display: "flex" }}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            width: "100%",
            display: "flex",
          
            justifyContent:"center",
            padding:5 // text flows vertically
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              ABOUT US
            </Typography>
             <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
             Pacific Manpower <span style={{color:"yellow"}}>History</span>
            </Typography>
             <Box
      sx={{
        p: 3,
        mt:2,
        bgcolor: "#f9f9f9",
        borderRadius: 2,
        lineHeight: 1.8,
        fontSize: "1.5rem",
        color: "#333",
      }}
    >
             <p>
        Pacific Manpower PNG Ltd was formed in 2008 by Managing Director Stanley
        Ipu. Stanley, who hails from Enga Province, started Tawap Kamen
        Investments in 1989, servicing the Ok Tedi Mine with the provision of
        Engineering, Construction, Security Services, and Labour Hire. TKI has
        grown to be one of the largest service providers to OTML after 26 years
        in operation. He saw the need to establish a 100% PNG-owned recruitment
        agency, as the market was dominated by overseas companies focusing on
        expatriates and not representing Papua New Guinean workers — and so
        Pacific Manpower was established.
      </p>

      <p>
        Pacific Manpower has successfully established Joint Ventures at mine
        sites in PNG, including the Winima Pacific Manpower JV at MMJV’s Hidden
        Valley, Kndupi Investment Pacific Manpower JV for Porgera, Unapual
        Investment Pacific Manpower JV for Lihir, and others.
      </p>

      <p>
        The real advantage is that clients are rarely charged for advertising,
        as Pacific Manpower always searches its recruitment system first. The
        company has a solid and loyal team of recruitment consultants and
        immigration agents. Pacific Manpower not only specializes in PNG
        Nationals but also recruits expatriates from Australia, New Zealand,
        Fiji, Philippines, India, China, South Africa, the UK, and many other
        countries. They provide services to many of PNG’s top companies, as well
        as companies establishing operations in the country for the first time.
      </p>

      <p>
        Many clients see contract hire as a real benefit, as their requirement
        for employees changes. Whether it’s a replacement for a receptionist on
        maternity leave or staffing a large plant shut-down for maintenance,
        Pacific Manpower can provide skilled and experienced staff for the exact
        period required. They have managed projects ranging from 1 to 250
        workers — and everything in between.
      </p>
      </Box>
          </CardContent>
        </Card>
      </Box>
 
    </Box>
    </>
  );
}
