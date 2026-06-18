import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { WorkspacePremium } from "@mui/icons-material";


function Footer(){
  const leftServices = [
    "Wedding Event",
    "60th Wedding Event",
    "70th Wedding Event",
    "80th Wedding Event",
    "Engagement",
    "Seemantham",
   
  ];

  const rightServices = [
    "Graduation Ceremony",
    "Birthday Party",
    "House Warming",
    "Mehandi Function",
    "Corporate Events",
    "Retirement Function",
  ];

  const events = [
    "Wedding",
    "Engagement",
    "Birthday",
    "House Warming",
    "Mehandi",
    "Reception",
    "Corporate",
    "Seemantham",
    "Retirement",
    "Graduation",
    "Anniversary",
  ];

  return (
    <>
      {/* Moving Events Bar */}

      <Box
        sx={{
            // width:"100vw",
            // marginLeft:"calc(-50vw + 50%)",
          background:"linear-gradient( purple 0%,pink 100%)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          py: 1.5,
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            animation: "marquee 30s linear infinite",

            "@keyframes marquee": {
              "0%": {
                transform: "translateX(100%)",
              },
              "100%": {
                transform: "translateX(-100%)",
              },
            },
          }}
        >
          {events.map((event, index) => (
            <Typography
              key={index}
              component="span"
              sx={{
                mx: 3,
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              •&nbsp; &nbsp;{event} 
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Footer */}

      <Box
        sx={{
            // width:"100vw",
            // marginLeft:"calc(-50vw + 50%)",
          background:
            "linear-gradient(to right,#050b17,#081120,#050b17)",
          color: "#fff",
          pt: 7,
          pb: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={5}>
            {/* Left Section */}

            <Grid item xs={12} md={4}>

              {/* <Typography
                variant="h2"
                sx={{
                  color: "#D4AF37",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: {
                    xs: "2rem",
                    md: "2rem",
                  },
                }}
              >
                ROYAL FEAST
              </Typography> */}

             <Box component="img" src="/logo.png" alt="logo"  sx={{width:{xs:100,sm:80,md:90},height:"auto",display:"block",ml:{md:10,xs:13}}}/>

              <Typography 
                sx={{
                  fontSize:20,
                  color: "#ddd",
                  lineHeight: 2,
                  mb: 4,
                  maxWidth: "320px",
                }}
              >
                Let Royal Feast transform your special occasion
                into a masterpiece with our professional touch.
              </Typography>

              <Box>
                <IconButton
                  sx={{
                    color: "#fff",
                    mr: 1,
                    "&:hover": {
                      color: "#1877F2",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  sx={{
                    color: "#fff",
                    mr: 1,
                    "&:hover": {
                      color: "#E4405F",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  sx={{
                    color: "#fff",
                    mr: 1,
                    "&:hover": {
                      color: "#FF0000",
                    },
                  }}
                >
                  <YouTubeIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://wa.me/919840935064"
                  target="_blank"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#25D366",
                    },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Services */}

            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                }}
              >
                Our Services
              </Typography>

              <Grid container spacing={5}>
                <Grid item xs={5}>
                  <Stack spacing={2}>
                    {leftServices.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          cursor: "pointer",
                          ml:0,
                          pl:0,
                          fontSize:"1.10rem",
                          "&:hover": {
                            color: "#D4AF37",
                          },
                        }}
                      >
                        ➜ {item}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>

                <Grid item xs={5}>
                  <Stack spacing={2}>
                    {rightServices.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          cursor: "pointer",
                          ml:0,
                          fontSize:"1.10rem",
                          pl:0,
                          "&:hover": {
                            color: "#D4AF37",
                          },
                        }}
                      >
                        ➜ {item}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            {/* Contact */}

            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                  ml:9
                }}
              >
                Contact Now
              </Typography>

              <Stack spacing={4} >
                <Box sx={{display:"flex" ,alignItems:"flex-start"}}>
                  <LocationOnIcon sx={{ color: "#D4AF37"}} />

                  <Typography variant="h6">
                    No.1/379B,
                    Kannagi Street, <br />
                    Jalladianpet,
                    Pallikaranai, <br />
                    Medavakkam,
                    Chennai - 600100
                  </Typography>
                </Box>

                <Box sx={{display:"flex", alignItems:"flex-start"}}>
                  <PhoneIcon sx={{ color: "#D4AF37"}} />

                  <Typography variant="h6">
                    +91 98409 35064
                    <br />
                    +91 91713 63371
                  </Typography>
                </Box>

                <Box sx={{display:"flex",alignItems:"center"}}>
                  <EmailIcon sx={{ color: "#D4AF37"}} />

                  <Typography
                  variant="h6"
                    component="a"
                    href="mailto:shalinimuthukumar725@gmail.com"
                    sx={{
                      color: "#fff",
                      textDecoration: "none",
                      // flexShrink:0,
                      "&:hover": {
                        color: "#D4AF37",
                      },
                    }}
                  >
                    shalinimuthukumar725@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* Copyright */}

          <Box
            sx={{
              borderTop:
                "1px solid rgba(255,255,255,0.1)",
              mt: 6,
              pt: 3,
              textAlign: "center",
            }}
          >
            <Typography>
              © 2026 Royal Feast Catering Services.
              All Rights Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;