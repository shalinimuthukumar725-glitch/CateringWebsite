import React from "react";
import { motion } from "framer-motion";
import {
Box,
Typography,
Card,
CardContent
} from "@mui/material";
import { useState } from "react";


function Services(){
  const[flipped,setFlipped]= useState(null);

return(

<> 
{/* HERO */}

<Box
sx={{
height:{xs:"45vh",md:"60vh"},
position:"relative",
overflow:"hidden",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>


{/* BACKGROUND VIDEO */}

<Box
component="video"
autoPlay
loop
muted
playsInline
src="/video1.mp4"
sx={{
position:"absolute",
width:"100%",
height:"100%",
objectFit:"cover",
top:0,
left:0
}}
/>



{/* Overlay */}

<Box
sx={{
position:"absolute",
inset:0,
background:"rgba(0,0,0,0.55)"
}}
/>




{/* TEXT */}

<motion.div

initial={{
opacity:0,
y:-80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

style={{
position:"relative",
textAlign:"center",
color:"white"
}}

>


<h1
style={{
fontSize:"clamp(35px,6vw,70px)",
fontFamily:"Playfair Display",
letterSpacing:"2px"
}}
>
Our Services
</h1>


<p
style={{
fontSize:"18px"
}}
>
Royal Feast Catering Experiences
</p>


</motion.div>


</Box>



{/* TITLE */}

<Box
sx={{
py:{xs:3,md:1},
px:{xs:3,md:10},
textAlign:"center"
}}
>


<motion.h2

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

style={{
fontSize:"clamp(30px,5vw,50px)",
fontFamily:"Playfair Display",
color:"#3B1F0B"
}}>

Celebrate Every Occasion With Taste

</motion.h2>

<Typography
sx={{
maxWidth:"750px",
mx:"auto",
mt:2,
color:"#666",
fontSize:{
xs:"15px",
md:"18px"
},
lineHeight:1.8
}}
>

From traditional weddings to premium corporate
events, we create unforgettable food experiences
with authentic flavours and elegant service.

</Typography>
</Box>

{/* EVENT CARDS */}

<Box
sx={{
px:{xs:2,md:10},
pb:10
}}
>


<Box
sx={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",
gap:{xs:3,md:5}
}}
>


{[
{
event:"Wedding",
veg:"Traditional Veg Feast",
nonveg:"Royal Chicken & Mutton Menu",
vegimg:"/rice.png",
nonimg:"/non1.png"
},

{
event:"Reception",
veg:"Premium Veg Buffet",
nonveg:"Luxury NonVeg Dinner",
vegimg:"/home.png",
nonimg:"/non2.png"
},

{
event:"Engagement",
veg:"Elegant Veg Menu",
nonveg:"Special NonVeg Cuisine",
vegimg:"/snack1.png",
nonimg:"/non3.png"
},

{
event:"Birthday Party",
veg:"Kids Friendly Veg Food",
nonveg:"Party Special NonVeg",
vegimg:"/cake.png",
nonimg:"/non1.png"
},

{
event:"Corporate Event",
veg:"Healthy Veg Catering",
nonveg:"Executive NonVeg Meals",
vegimg:"/img7.png",
nonimg:"/non2.png"
},

{
event:"Baby shower",
veg:"Traditional Veg Celebration",
nonveg:"Special Family Feast",
vegimg:"/rice.png",
nonimg:"/non3.png"
},

{
event:"House Warming",
veg:"South Indian Veg Meals",
nonveg:"Grand NonVeg Feast",
vegimg:"/img1.png",
nonimg:"/non1.png"
},

{
event:"Festival Events",
veg:"Authentic Festival Food",
nonveg:"Festival Special Dishes",
vegimg:"/img3.png",
nonimg:"/non2.png"
},

{
event:"College Events",
veg:"Budget Veg Menu",
nonveg:"Student Special NonVeg",
vegimg:"/img4.png",
nonimg:"non3.png"
},

{
event:"Outdoor Events",
veg:"Fresh Veg Catering",
nonveg:"Live NonVeg Counter",
vegimg:"/img5.png",
nonimg:"/non1.png"
},

{
event:"Private Parties",
veg:"Custom Veg Menu",
nonveg:"Chef Special NonVeg",
vegimg:"/snack.png",
nonimg:"/non2.png"
},

{
event:"Corporate Lunch",
veg:"Premium Lunch Box",
nonveg:"Royal Lunch Specials",
vegimg:"/img6.png",
nonimg:"/non3.png"
}

].map((item,index)=>(

<motion.div
key={index}

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.1
}}

style={{
perspective:"1000px",position:"relative",
height:"360px",width:"100%",
overflow:"hidden"
}}>

<motion.div

animate={{rotateY:flipped === index ? 180:0}}

whileHover={{
rotateY:180
}}

transition={{
duration:.8
}}

onClick={()=>setFlipped(flipped === index ? null :index)}

style={{
width:"100%",
height:"100%",
position:"relative",
transformStyle:"preserve-3d",
cursor:"pointer"
}}>

{/* FRONT */}

<Card
sx={{
position:"absolute",
width:"100%",
height:"100%",
backfaceVisibility:"hidden",
borderRadius:"25px",
overflow:"hidden",
boxShadow:
"0 15px 35px rgba(0,0,0,.2)"
}}>

<Box
component="img"
src={item.vegimg}
sx={{
width:"100%",
height:"220px",
objectFit:"cover"
}}/>
<CardContent>

<Typography
variant="h5"
sx={{
fontFamily:"Playfair Display",
fontWeight:700,
color:"#3B1F0B"
}}
>
{item.event}
</Typography>

<Typography
sx={{
mt:1,
color:"#777"
}}
>

Celebrate with delicious
food & memorable moments

</Typography>
</CardContent>
</Card>

{/* BACK */}

<Card
sx={{
position:"absolute",
width:"100%",
height:"100%",
backfaceVisibility:"hidden",
transform:"rotateY(180deg)",
borderRadius:"25px",
textAlign:"center",
// p:3
}}>


<Box
            component="img"
            src={item.nonimg}
            sx={{ width: "100%", height: "220px", objectFit: "cover" }}
          />

          <CardContent>
            <Typography variant="h6">
              {item.event} - Non Veg
            </Typography>

           
            <Typography
sx={{
mt:1,
color:"#777"
}}
>

Celebrate with delicious
food & memorable moments

</Typography>
          </CardContent>
        
</Card>
</motion.div>
</motion.div>
))}
</Box>
</Box>

</>
)

}

export default Services;