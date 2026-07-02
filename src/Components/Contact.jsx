import { Box, Typography, Button, Container ,Grid,Paper,Dialog,DialogContent,DialogTitle,
  IconButton,TextField,MenuItem,Snackbar,Alert} from "@mui/material";
import { motion } from "framer-motion";
import { linearGradient } from "framer-motion/client";
import { MapPin, Mail, Phone ,X} from "lucide-react";
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
      <Box sx={{overflowX:"hidden",}}>
      <Box
        sx={{
          height: "60vh",
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
        {/* Overlay  */}
       <Box
          sx={{
            position: "absolute",
            // inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65))",
          }}
        />

         <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 ,color:["#fff","#25e7d8"],textShadow:"0 0 5px gold "}}
                  transition={{opacity:{ duration: 0.8 },y:{duration:0.8},color:{duration:4,repeat:Infinity},}}
                  style={{ fontSize: "60px", fontWeight: "bold" }}
                >
                  Contact
                </motion.h1>
       </Box>
        <Container sx={{ position: "relative", zIndex: 2 , }}>
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
              Hello Everyone👋
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontWeight: 600,
                fontSize: { xs: "1.3rem", md: "2rem" },
                lineHeight: {md:1.4},
                mb: 3,
                // ml:10
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
                // ml:10
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
                  px: {md:5},
                  py: {md:1.8},
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
  <DialogTitle>Book Your Event
   <X
    size={25}
    style={{cursor:"pointer",position:"absolute",right:"12px",top:"6%",transform:"translateY(-50%)",}}
    onClick={()=>setOpen(false)}
   />

  </DialogTitle>

  <DialogContent>
    <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleChange} />

    <TextField label="Phone Number" name="phone" fullWidth margin="normal" onChange={handleChange} />

    <TextField select label="Event Type" name="eventType" fullWidth margin="normal" value={formData.eventType} onChange={handleChange}>
      <MenuItem value="wedding">wedding</MenuItem>
      <MenuItem value="60th wedding">60th wedding</MenuItem>
      <MenuItem value="70th wedding">70th wedding</MenuItem>
      <MenuItem value="80th wedding">80th wedding</MenuItem>
      <MenuItem value="mehandi">Mehandi</MenuItem>
      <MenuItem value="Engagement">Engagement</MenuItem>
      <MenuItem value="Birthday">Birthday Function</MenuItem>
      <MenuItem value="HouseWarming">House Warming</MenuItem>
      <MenuItem value="Graduation">Graduation Event</MenuItem>
      <MenuItem value="Seemantham">Seemantham</MenuItem>
      <MenuItem value="Corporate Events">Corporate Event</MenuItem>
      <MenuItem value="Retirement">Retirement Ceremony</MenuItem>
      </TextField>

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
py:10,
background:"linear-gradient(135deg,#fff8f2,#fff0f7)"
}}
>

<Container maxWidth="lg">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>


<Typography
variant="h3"
textAlign="center"
sx={{
fontWeight:900,
color:"#c2185b",
textShadow:"0 0 10px #ffd700",
mb:2,
fontFamily:"Poppins",
fontSize:{xs:"35px",md:"48px"}
}}
>
Get In Touch
</Typography>



<Typography
textAlign="center"
sx={{
color:"#4a154b",
mb:6,
mx:"auto",
fontSize:{xs:16,md:20},
lineHeight:1.8,
fontFamily:"Poppins",
fontWeight:500
}}
>

We'd love to hear about your event and help create a memorable dining experience for you and your guests. Our experienced team prepares every dish with premium ingredients and authentic flavors to delight your guests. Let us take care of the feast while you enjoy every special moment with your family and friends.

</Typography>





<Box
sx={{
display:"grid",
gridTemplateColumns:{
xs:"1fr",
md:"repeat(3,1fr)"
},
gap:4
}}
>



{/* Address */}

<motion.div
whileHover={{
y:-12,
scale:1.04
}}
transition={{type:"spring",stiffness:250}}
>

<Paper
elevation={8}
sx={{
p:4,
textAlign:"center",
borderRadius:"30px",
background:
"linear-gradient(135deg,#ffd6e8,#dff7ff)",
}}
>


<MapPin
size={45}
color="#c2185b"
/>


<Typography
mt={2}
fontWeight={800}
sx={{
color:"#7b1fa2",
fontFamily:"Poppins"
}}
>
Address
</Typography>


<Typography
sx={{
mt:1,
color:"#561139",
fontWeight:600,
lineHeight:1.8,
fontFamily:"Poppins"
}}
>
Royal Feast Catering
<br/>
Chennai, Tamil Nadu
</Typography>


</Paper>

</motion.div>






{/* Email */}


<motion.div
whileHover={{
y:-12,
scale:1.04
}}
transition={{type:"spring",stiffness:250}}
>


<Paper
elevation={8}
sx={{
p:4,
textAlign:"center",
borderRadius:"30px",
background:
"linear-gradient(135deg,#dff7ff,#ffd6e8)",
}}
>


<Mail
size={45}
color="#e91e63"
/>


<Typography
mt={2}
fontWeight={800}
sx={{
color:"#7b1fa2",
fontFamily:"Poppins"
}}
>
Email
</Typography>



<Typography
component="a"
href="mailto:shalinimuthukumar725@gmail.com"
sx={{
display:"block",
mt:1,
color:"#561139",
fontWeight:600,
textDecoration:"none",
fontFamily:"Poppins",
"&:hover":{
color:"#e91e63"
}
}}
>
shalinimuthukumar
<br/>
725@gmail.com
</Typography>



</Paper>


</motion.div>






{/* Phone */}


<motion.div

whileHover={{
y:-12,
scale:1.04
}}

transition={{
type:"spring",
stiffness:250
}}

>


<Paper
elevation={8}
sx={{
p:4,
textAlign:"center",
borderRadius:"30px",
background:
"linear-gradient(135deg,#ffd6e8,#dff7ff)",
}}
>


<motion.div

animate={{
rotate:[0,10,-10,0]
}}

transition={{
duration:2,
repeat:Infinity
}}

>

<Phone
size={45}
color="#e91e63"
/>

</motion.div>




<Typography
mt={2}
fontWeight={800}
sx={{
color:"#7b1fa2",
fontFamily:"Poppins"
}}
>
Contact
</Typography>



<Typography
sx={{
mt:1,
color:"#561139",
fontWeight:600,
lineHeight:1.8,
fontFamily:"Poppins"
}}
>
+91 98765 43210
<br/>
+91 91234 56789
</Typography>


</Paper>


</motion.div>



</Box>


</motion.div>

</Container>

</Box>
</Box>
    </>
  );
};

export default Contact;