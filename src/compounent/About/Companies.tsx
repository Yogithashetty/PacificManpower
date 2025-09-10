import  { Box, Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
export default function Companies(){

const points= [
    "Labour Hire and Contract Hire( Expatriate & Nationals).",
    "Recruitment (Short-term & Long-Term Expatriate & Nationals ).",
    "Work Permit, Passport, and Immigration Services.",
    "Vehicle and Equipment Hire.",
    "Payroll Services.",
    "Fly in, Fly Out services( Travel Service, Transit, and Transfer)."
 ];


  return(
    <>
<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          flexDirection: "row-reverse",
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
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
           Pacific Manpower (Lihir) Limited
              </Typography>
             <p>Pacific Manpower Lihir Limited is 50% owned by Pacific Manpower PNG Limited and 50% by local landowner entities. The company will have its board of directors representing our shareholders and is managed by Pacific Manpower PNG Limited to provide services to clients and projects and /or its contractors at Newmont Mine site in Lihir Island in the following categories.</p>
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
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
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
               Pacific Manpower (Porgera) Limited
              </Typography>
                <p>Pacific Manpower Lihir Limited is 50% owned by Pacific Manpower PNG Limited and 50% by local landowner entities. The company will have its board of directors representing our shareholders and is managed by Pacific Manpower PNG Limited to provide services to clients and projects and /or its contractors at Newmont Mine site in Lihir Island in the following categories.</p>
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
</>
);

} 