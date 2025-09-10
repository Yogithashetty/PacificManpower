import  { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
export default function LamdOwner(){

const points= [
    "Labour Hire and Contract Hire( Expatriate & Nationals).",
    "Recruitment (Short-term & Long-Term Expatriate & Nationals ).",
    "Work Permit, Passport, and Immigration Services.",
    "Vehicle and Equipment Hire.",
    "Payroll Services.",
    "Fly in, Fly Out services( Travel Service, Transit, and Transfer).",
    "Building strong ongoing JV to benefit Landowners"
 ];


  return(
<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "strech",
          flexDirection: "row",
          gap: 0,
          px: { xs: 2, md: 6 },
          py: 6,
          m: 0,
        }}
      >
        {/* Left Image */}
        <Box sx={{ flex: "1 1 400px", display: "flex" }}>
          <Box
            component="img"
            src="https://picsum.photos/id/1011/600/400"
            alt="Company"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Right Text */}
        <Box sx={{ flex: "1 1 400px", display: "flex" }}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Kandupi Investment Limited and Pacific Manpower PNG Ltd JV

              </Typography>
             <p>To Provide Services to Clients ad Projects and /or its contractors based in the Porgera Gold Mine site and in PNG in the following categories</p>
             <List>
              {points.map((text, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                  <CheckIcon 
                        color="success" 
                               sx={{ fontSize:18, strokeWidth: 1, stroke: "green" }} 
                    />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
);

} 