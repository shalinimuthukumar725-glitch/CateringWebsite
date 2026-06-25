 import React, {useState} from "react";

import {
Box,
Button,
Typography
} from "@mui/material";

import {
Heart,
BriefcaseBusiness
} from "lucide-react";

import {
motion,
AnimatePresence
} from "framer-motion";

import {
Link
} from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";


function Home(){


const services=[

{
title:"Wedding Catering",

desc:
"Elegant wedding menus with traditional and modern dishes. Make your wedding celebration truly unforgettable.",

img:"/rice.png",

icon:

<motion.div
animate={{
scale:[1,1.1,1]
}}
transition={{
duration:1.5,
repeat:Infinity
}}
>

<Heart
fill="red"
color="red"
/>

</motion.div>

},


{
title:"Corporate Events",

desc:
"Premium catering solutions for meetings, conferences and celebrations.",

img:"/food.png",

icon:

<motion.div

animate={{
scale:[1,1.1,1]
}}

transition={{
duration:1.5,
repeat:Infinity
}}

>

<BriefcaseBusiness/>

</motion.div>


}

];



const reviews=[

{
name:"Arun Kumar",
rating:5,
review:"Amazing catering service. Food quality and presentation were outstanding."
},

{
name:"Priya",
rating:5,
review:"Guests loved every dish. Professional team and timely service."
},

{
name:"Vignesh",
rating:4,
review:"Excellent experience. Highly recommended."
}


];



const[current,setCurrent]=useState(0);



return(

<>


{/* HERO VIDEO */}


<Box

sx={{

height:{
xs:"75vh",
md:"90vh"
},

position:"relative",

overflow:"hidden"

}}

>


<Box

component="video"

src="/cooking.mp4"

autoPlay

loop

muted


sx={{

position:"absolute",

width:"100%",

height:"100%",

objectFit:"cover",

opacity:0.65

}}


/>



<Box

sx={{

position:"absolute",

top:"50%",

left:"50%",

transform:"translate(-50%,-50%)",

textAlign:"center",

width:"90%"

}}

>


<motion.div

initial={{
opacity:0,
y:60
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

>


<Typography

sx={{

fontFamily:"Poppins",

fontSize:{
xs:"35px",
md:"65px"
},

fontWeight:800,

color:"#fff",

textShadow:
"0 5px 20px black"

}}

>

Every Bite Creates

<br/>

<span

style={{

color:"#ffd166"

}}

>

Beautiful Memories

</span>


</Typography>



<Typography

sx={{

mt:3,

color:"#fff",

fontSize:{
xs:"16px",
md:"22px"
},

fontFamily:"Poppins"

}}

>

Premium Catering Experience
<br/>

crafted with love, taste and tradition

</Typography>



<Link to="/Services">


<Button

sx={{

mt:4,

px:5,

py:1.5,

borderRadius:"30px",

background:
"linear-gradient(45deg,#d4a373,#8d5524)",

color:"#fff",

fontWeight:700

}}

>

Explore Menu

</Button>


</Link>


</motion.div>


</Box>


</Box>

{/* // ABOUT SECTION */}


<Box

sx={{

py:{xs:5,md:8},

px:{xs:2,md:10},

display:"flex",

alignItems:"center",

gap:5,

flexDirection:{
xs:"column",
md:"row"
},

background:"#fff8f5",overflow:"hidden"

}}

>



<motion.img

src="/chef.png"


initial={{
opacity:0,
x:-100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1
}}


style={{

width:"100%",

maxWidth:"450px",

borderRadius:"30px",

boxShadow:
"0 15px 35px rgba(0,0,0,.2)"

}}


/>




<motion.div

initial={{
opacity:0,
x:100
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

>



<Typography

sx={{

fontSize:{
xs:"30px",
md:"45px"
},

fontWeight:800,

color:"#78104d",

fontFamily:"Poppins"

}}

>

About Royal Feast Catering

</Typography>



<Typography

sx={{

mt:2,

fontSize:{
xs:"16px",
md:"20px"
},

lineHeight:1.8,

fontFamily:"Poppins"

}}

>

We create unforgettable food experiences
for weddings, birthdays and corporate events.
Our chefs bring tradition, quality and creativity
together to make every celebration special.

</Typography>


</motion.div>


</Box>







{/* WHY CHOOSE */}



<Box

sx={{

py:6,

px:{xs:2,md:10}

}}

>



<motion.div

initial={{
opacity:0,
y:-40
}}

whileInView={{
opacity:1,
y:0
}}

>


<Typography

sx={{

textAlign:"center",

fontSize:{
xs:"30px",
md:"45px"
},

fontWeight:800,

color:"#78104d",

fontFamily:"Poppins"

}}

>

Why Choose Royal Feast Catering

</Typography>


</motion.div>




<Box

sx={{

mt:5,

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",

gap:3

}}

>



{

[

{
title:"Fresh Ingredients",
img:"/ingredient.png"
},

{
title:"Expert Chefs",
img:"/chef.png"
},

{
title:"Premium Service",
img:"/premium.png"
}


].map((item,index)=>(



<motion.div

key={index}

whileHover={{

scale:1.05,

y:-10

}}


style={{

background:"#fff",

padding:"20px",

borderRadius:"20px",

boxShadow:
"0 10px 25px rgba(0,0,0,.15)",

textAlign:"center"

}}


>


<img

src={item.img}

style={{

width:"100%",

height:"200px",

objectFit:"cover",

borderRadius:"15px"

}}


/>


<Typography

sx={{

mt:2,

fontWeight:700,

fontFamily:"Poppins",

color:"#da4373"

}}

>

{item.title}

</Typography>



</motion.div>


))


}



</Box>


</Box>
{/* SERVICES */}


<Box

sx={{

py:8,

px:{xs:2,md:10}

}}

>


<Typography

sx={{

textAlign:"center",

fontSize:{
xs:"30px",
md:"45px"
},

fontWeight:800,

color:"#78104d",

fontFamily:"Poppins",

mb:5

}}

>

Premium Catering Services

</Typography>




<Box

sx={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",

gap:4

}}

>


{

services.map((service,index)=>(


<motion.div

key={index}

whileHover={{

y:-10

}}


style={{

background:
"linear-gradient(135deg,#ffd6e0,#fff)",

borderRadius:"25px",

overflow:"hidden",

boxShadow:
"0 10px 30px rgba(0,0,0,.15)"

}}


>


<img

src={service.img}

style={{

width:"100%",

height:"260px",

objectFit:"cover"

}}


/>


<Box

sx={{

p:3

}}

>


<Typography

sx={{

display:"flex",

alignItems:"center",

gap:1,

fontWeight:800,

fontSize:"22px",

color:"#78104d",

fontFamily:"Poppins"

}}

>

{service.icon}

{service.title}


</Typography>



<Typography

sx={{

mt:2,

fontSize:"17px",

lineHeight:1.7,

fontFamily:"Poppins"

}}

>

{service.desc}

</Typography>



</Box>


</motion.div>



))


}



</Box>



<Box

sx={{

textAlign:"center",

mt:5

}}

>


<Link to="/Services">


<Button

sx={{

px:5,

py:1.5,

borderRadius:"30px",

background:
"linear-gradient(45deg,#e4729f,#78104d)",

color:"#fff",

fontWeight:700

}}

>

View All Services

</Button>


</Link>



</Box>



</Box>







{/* TESTIMONIALS */}



<Box

sx={{

py:8,

px:2,overflow:"hidden",

background:
"#fff5f8"

}}

>



<Typography

sx={{

textAlign:"center",

fontSize:{
xs:"32px",
md:"45px"
},

fontWeight:800,

fontFamily:"Poppins",

color:"#78104d",

mb:5

}}

>

Testimonials

</Typography>




<AnimatePresence mode="wait">


<motion.div

key={current}

initial={{

opacity:0,

x:100

}}

animate={{

opacity:1,

x:0

}}

exit={{

opacity:0,

x:-100

}}

transition={{

duration:.6

}}

>



<Box

sx={{

maxWidth:"850px",

mx:"auto",

p:5,

borderRadius:"35px",

background:"wheat",

boxShadow:
"0 10px 30px rgba(0,0,0,.15)"

}}

>



<Box

sx={{

display:"flex",

justifyContent:"center"

}}

>


{

[...Array(reviews[current].rating)]

.map((_,i)=>(


<StarIcon

key={i}

sx={{

color:"#FFD700",

fontSize:35

}}


/>


))


}



</Box>



<Typography

sx={{

textAlign:"center",

fontSize:"25px",

fontWeight:700,

mt:2,

color:"#78104d"

}}

>

{reviews[current].name}

</Typography>



<Typography

sx={{

textAlign:"center",

mt:3,

fontSize:"18px",

lineHeight:1.8,

fontFamily:"Poppins"

}}

>

"{reviews[current].review}"

</Typography>



</Box>


</motion.div>


</AnimatePresence>




<Box

sx={{

display:"flex",

justifyContent:"center",

gap:2,

mt:4

}}

>


{

reviews.map((_,index)=>(


<Box

key={index}

onClick={()=>setCurrent(index)}

sx={{

width:

current===index ? 35 : 12,

height:12,

borderRadius:20,

cursor:"pointer",

background:

current===index

?

"#78104d"

:

"pink"

}}

/>


))


}



</Box>



</Box>




</>

)

}


export default Home;