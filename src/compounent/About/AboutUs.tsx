import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import WorkIcon from "@mui/icons-material/Work";
import SendIcon from "@mui/icons-material/Send";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function AboutCompany() {
  return (
    <>
      {/* Section 1 - About Company */}
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
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                About Company
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                Pacific Manpower was formed in 2008 out of the growth in
                resource projects and the economic conditions within Papua New
                Guinea, wishing to build a nationwide HR company offering the
                best skills from PNG Nationals and Expatriates. We are proud to
                be 100% PNG owned.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
                Our sister Company, TawapKamen Investments, was formed in 1989,
                and some 22 years later, it continues to be a major supplier of
                skills to OTML and operated a large-scale security,
                construction, and engineering business at Ok Tedi. We also
                operated TKI Manpower, which was one of the largest suppliers of
                skilled manpower to the mine. (Handed over the company to Mining
                Area Landowners in 2021)
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
                Our parent Company, GavipumakuLimited, was formed in 1994.
                GavipumakuLimited is an investment company that also provides
                real estate/rental services for high-quality and affordable
                houses in Kiunga Town and Port Moresby. They also provide
                Equipment Hires, Transport and logistics services, and a Poultry
                farm in Kiunga.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Section 2 - Why Choose */}
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
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                ABOUT US
              </Typography>
              <Typography
                variant="body2"
                sx={{ lineHeight: 1, fontSize: "2em", fontWeight: "bold" }}
              >
                Why Choose
                <span style={{ color: "red" }}> Pacific Manpower</span>?
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="success" sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Allocate the right person to the right job" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Improve hiring quality." />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Improve recruitment performance." />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Minimize recruitment process costs." />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Leverage employee retention, thus achieving a higher return on human capital investment." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Section 3 - Company Mission */}
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: "5%",
          p: 4,
          textAlign: "center",
          maxWidth: "1000px",
          maxHeight:"500px",
          margin: "auto",
          mt:4
        }}
      >
        <Typography variant="h4" gutterBottom>
          Our Company <span style={{ color: "#fbc02d" }}>Mission</span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We are driven by the belief that a well-matched job can ignite
          extraordinary success stories, and we’re committed to making those
          stories a reality for every member of our community.
        </Typography>

        <Box sx={{ display: "grid", gap: 3 }}>
          {/* Mission 1 */}
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
            }}
          >
            <Box
              sx={{
                bgcolor: "#e6f2ff",
                p: 1.5,
                borderRadius: 2,
                mr: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WorkIcon sx={{ color: "#1976d2" }} />
            </Box>
            <Typography variant="body1">
              To provide Quality and Efficient Labour and contract Hire Services
              to meet the needs and demands of the Mining, Petroleum, and other
              industries.
            </Typography>
          </Paper>

          {/* Mission 2 */}
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
            }}
          >
            <Box
              sx={{
                bgcolor: "#e6f2ff",
                p: 1.5,
                borderRadius: 2,
                mr: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SendIcon sx={{ color: "#1976d2" }} />
            </Box>
            <Typography variant="body1">
              To foster relationships with resource area landowners under formal
              partnership arrangements for long-term harmonious business
              relations.
            </Typography>
          </Paper>

          {/* Mission 3 */}
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
            }}
          >
            <Box
              sx={{
                bgcolor: "#e6f2ff",
                p: 1.5,
                borderRadius: 2,
                mr: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BusinessCenterIcon sx={{ color: "#1976d2" }} />
            </Box>
            <Typography variant="body1">
              To provide efficient recruitment, work permits, visas, and
              immigration services to all industries.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
