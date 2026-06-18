import { Box, Typography, Button, Container ,Grid,Paper,Dialog,DialogContent,DialogTitle,TextField} from "@mui/material";
import { motion } from "framer-motion";
import { linearGradient } from "framer-motion/client";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [open,setOpen]=useState(false);
    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendToWhatsApp = () => {
  const message = `Hello Royal Feast Catering,

Name: ${formData.name}
Phone Number: ${formData.phone}
Event Type: ${formData.eventType}
Number of Guests: ${formData.guests}
Event Date: ${formData.date}
Location: ${formData.location}`;

  const url = `https://wa.me/919150755751?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "50vh",
          backgroundImage: "url('/conban.png')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        {/* <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65))",
          }}
        /> */}

         <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 ,color:["#fff","#25e7d8"],textShadow:"0 0 5px gold "}}
                  transition={{opacity:{ duration: 0.8 },y:{duration:0.8},color:{duration:4,repeat:Infinity},}}
                  style={{ fontSize: "60px", fontWeight: "bold" }}
                >
                  Contact
                </motion.h1>
       </Box>
        <Container sx={{ position: "relative", zIndex: 2  }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
           

            <Typography
              variant="h5"
              sx={{
                color: "black",
                mb: 3,
                fontWeight: 500,
                textAlign:"left",p:2
              }}
            >
              Hello Families 👋
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontWeight: 600,
                fontSize: { xs: "1.3rem", md: "2rem" },
                lineHeight: {md:1.4},
                mb: 3,
                ml:10
              }}
            >
              Crafting Memorable Feasts 
              For Every Celebration 
              Fresh Ingredients 
              Exceptional Hospitality
            </Typography>

            <Typography
              sx={{
                color: "black",
                // maxWidth: "800px",
                // mx: "auto",
                lineHeight: 2.2,
                fontSize: "1rem",
                mb: 4,
                ml:10
              }}
            >
              At Royal Feast Catering, every dish is prepared with
              premium ingredients and authentic flavors. We create
              unforgettable dining experiences for your guests.
              Book us today and enjoy a feast filled with taste,
              quality, and hospitality.
            </Typography>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={()=>setOpen(true)}
                sx={{
                  px: 5,
                  py: 1.8,
                  borderRadius: "40px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  background:
                    "linear-gradient(90deg, #e4729f,  #78104d)",
                  boxShadow:
                    "0px 15px 25px #e4729f",
                }}
              >
                ✨ Book Your Event
              </Button>
            </motion.div>
          </motion.div>
        </Container>

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle>Book Your Event</DialogTitle>

  <DialogContent>
    <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />

    <TextField label="Phone Number" name="phone" fullWidth margin="normal" onChange={handleChange} />

    <TextField label="Event Type" name="eventType" fullWidth margin="normal" onChange={handleChange} />

    <TextField label="Number of Guests" name="guests" fullWidth margin="normal" onChange={handleChange} />

    <TextField
      label="Event Date"
    //   name="date"
      type="date"
      fullWidth
    //   margin="normal"
    slotProps={{
      inputLabel:{ shrink: true }}}
      onChange={handleChange}
    />

    <TextField
      label="Location (Optional)"
      name="location"
      fullWidth
      margin="normal"
      onChange={handleChange}
    />

    <Button
      fullWidth
      sx={{ mt: 2 ,fontSize:15,fontWeight:"bold",color:"green"}}
      onClick={sendToWhatsApp}
    >
      Send to WhatsApp
    </Button>
  </DialogContent>
</Dialog>



        {/* Contact Details Section */}
<Box
  sx={{
    py: 10,
    // background: "linear-gradient(to bottom,#fff,#fff8e7)",
  }}
>
  <Container maxWidth="lg">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 800,
          color:["#e90000", "violet"],textShadow:"0 0 5px gold",
          mb: 2,
        }}
      >
        Get In Touch
      </Typography>

      <Typography
        textAlign="center"
        sx={{
          color: "black",
          mb: 6,
        //   maxWidth: "700px",
          mx: "auto",
          fontSize:{md:20},
          lineHeight:1.8
        }}
      >
        We'd love to hear about your event and help create a
        memorable dining experience for you and your guests.
         Our experienced team
prepares every dish with premium ingredients and authentic
flavors to delight your guests. Let us take care of the feast
while you enjoy every special moment with your family and friends.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Address */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              
            }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "25px",
                background:"linear-gradient(135deg,pink,skyblue)"
              }}
            >
              <MapPin
                size={45}
                color="gold"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(255,140,0,0.5))",
                }}
              />

              <Typography
                variant="h6"
                fontWeight={700}
                mt={2}
                mb={1}
                sx={{color:"white",fontFamily:"'poppins',sans-serif",fontWeight:"bold"}}
              >
                Address
              </Typography>

              <Typography sx={{fontFamily:"'poppins',sans-serif",lineHeight:1.8,letterSpacing:0.3,color:["pink","blue"],fontWeight:600}}>
                Royal Feast Catering
                <br />
                Chennai, Tamil Nadu
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "25px",
            background:"linear-gradient(135deg,skyblue,pink)"
              }}
            >
              <Mail
                size={45}
                color="yellow"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(255,140,0,0.5))",
                }}
              />

              <Typography
                variant="h6"
                fontWeight={700}
                mt={2}
                mb={1}
                sx={{color:"white",fontFamily:"'poppins',sans-serif",fontWeight:"bold"}}
              >
                Email
              </Typography>

              <Typography  
              component="a"
              href="mailto:shalinimuthukumar725@gmail.com"
              sx={{fontFamily:"'poppins',sans-serif",lineHeight:1.8,letterSpacing:0.3,color:"blue",
              textDecoration:"none",fontWeight:600,"&:hover":{color:"yellow"}}}>
                shalinimuthukumar <br />725@gmail.com
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "25px",
                // background:"linear-gradient( #ffbf6d, #f02167, #871080)"
                background:"linear-gradient(135deg,pink,skyblue)"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Phone
                  size={45}
                  color="yellow"
                  style={{
                    filter:
                      "drop-shadow(0 0 8px rgba(255,140,0,0.5))",
                  }}
                />
              </motion.div>

              <Typography
                variant="h6"
                fontWeight={700}
                mt={2}
                mb={1}
                sx={{color:"white",fontFamily:"'poppins',sans-serif",fontWeight:"bold"}}
              >
                Contact
              </Typography>

              <Typography sx={{fontFamily:"'poppins',sans-serif",lineHeight:1.8,letterSpacing:0.3,color:"blue",fontWeight:600}}>
                +91 98765 43210
                <br />
                +91 91234 56789
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  </Container>
</Box>
    </>
  );
};

export default Contact;