import { Box, Typography, Avatar, Paper } from "@mui/material";

const staff = [
  {
    name: "Stanley Ipu",
    role: "Managing Director",
    img: "https://pacificmanpower.com.pg/images/team/Stanley-Ipu.jpg", // replace with actual image URL
    desc: `Stanley formed the Group of companies in 1989 and was General Manager until 2006 when he assumed the role of Managing Director. For Pacific Manpower, he is actively involved in the day-to-day operations of the business. He drives our continued growth through the formation of beneficial Landowner Joint Ventures and oversees many of the diverse Business Units within the Group.`,
  },
  {
    name: "William Lamur, OBE",
    role: "Executive Director",
    img: "https://pacificmanpower.com.pg/images/team/William-Lamur.jpg", // replace with actual image URL
    desc: `Mr. William Lamur was appointed as Executive Director in June 2023. Mr. Lamur has over 40 years of commercial experience across many industries, 32 of which are at senior executive management level. He has worked in senior positions with Shell Oil Company, Origin Energy, and East New Britain Development Corporation Limited. He also held director roles, including Chairmanship at PTC, National Development Bank, NASFUND, Mainland Holdings, PNG Air, and ENBDC. Other Director roles include ENB Port Services, Trukai Industries, Andersons Foodland Supermarket, Pacific Energy, Pacific Assurance Group, Kumul Hotel Group, Grand Pacific (Fiji), and Loloata Island Resort. He currently sits on a number of Boards.`,
  },
];

export default function KeyStaff() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
        px: { xs: 2, md: 6 },
        py: 6,
        border:"none"
      }}
    >
      {staff.map((person, index) => (
        <Paper
          key={index}
          sx={{
            flex: "1 1 350px",
            maxWidth: 500,
            p: 3,
            borderRadius: 3,
            textAlign: "center",
        
          }}
        >
          {/* Circular Image */}
          <Avatar
            src={person.img}
            alt={person.name}
            sx={{
              width: 150,
              height: 150,
              mx: "auto",
              mb: 2,
              border: "4px solid #110303ff",
            }}
          />

          {/* Name + Role */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {person.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: "text.secondary" }}
          >
            {person.role}
          </Typography>

          {/* Description */}
          <Typography variant="body2" sx={{ textAlign: "justify", lineHeight: 1.8 }}>
            {person.desc}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}
