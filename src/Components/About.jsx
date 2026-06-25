import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
<div
  style={{
    height: "400px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source
      src="/cooking.mp4"
      type="video/mp4"
    />
  </video>


  {/* Dark Overlay */}
  <div
    style={{
      position:"absolute",
      inset:0,
      background:"rgba(0,0,0,0.55)",
      zIndex:1,
    }}
  />


  {/* Text */}
  <motion.div
    initial={{opacity:0, y:50}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}
    style={{
      position:"relative",
      zIndex:2,
      color:"white",
      textAlign:"center",
    }}
  >

    <h1
      style={{
        fontSize:"clamp(35px,8vw,60px)",
        fontFamily:"Playfair Display",
      }}
    >
      About Us
    </h1>

    <p>
      Home / About Us
    </p>

  </motion.div>

</div>
{/* ABOUT COMPANY */}

<div
  style={{
    padding:"100px 8%",
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
    gap:"60px",
    alignItems:"center",overflow:"hidden"
  }}
>

{/* IMAGE */}

<motion.div
initial={{opacity:0,x:-100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1}}
viewport={{once:true}}
>

<img
src="https://images.unsplash.com/photo-1555244162-803834f70033"
alt=""
style={{
 width:"100%",
 borderRadius:"30px",
 boxShadow:"0 20px 40px rgba(0,0,0,0.2)",
}}
/>

</motion.div>


{/* CONTENT */}

<motion.div
initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1}}
viewport={{once:true}}
>

<p
style={{
color:"#D4A373",
letterSpacing:"3px",
fontWeight:"bold"
}}
>
WHO WE ARE
</p>


<h2
style={{
fontSize:"clamp(35px,5vw,50px)",
fontFamily:"Playfair Display",
color:"#3B1F0B",
lineHeight:"1.2"
}}
>
Creating Beautiful Moments With Exceptional Taste
</h2>


<p
style={{
marginTop:"20px",
lineHeight:"2",
color:"#666",
fontFamily:"Poppins"
}}
>
Royal Feast Catering delivers premium catering
experiences for weddings, receptions, corporate
events and celebrations. From traditional flavours
to modern cuisine, we create unforgettable dining
moments with quality and passion.
</p>

<Link
to="/contact"
style={{textDecoration:"none"}}>
<button
style={{
marginTop:"25px",
padding:"14px 35px",
border:"none",
borderRadius:"30px",
background:
"linear-gradient(135deg,#3B1F0B,#D4A373)",
color:"white",
fontWeight:"bold",
cursor:"pointer",
boxShadow:"0 10px 25px rgba(212,163,115,0.5)"
}}
>
Explore More
</button>
</Link>

</motion.div>

</div>

{/* WHY CHOOSE US */}

<div
style={{
padding:"80px 8%",
background:"#FFF8E7",
textAlign:"center"
}}
>

<motion.h2
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
style={{
fontSize:"clamp(35px,5vw,50px)",
fontFamily:"Playfair Display",
color:"#3B1F0B"
}}
>
Why Choose Royal Feast?
</motion.h2>


<p
style={{
color:"#777",
marginTop:"15px",
fontFamily:"Poppins"
}}
>
We deliver delicious food with elegant service
and unforgettable experiences.
</p>


<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"30px",
marginTop:"50px"
}}
>


{[
{
icon:"🍽️",
title:"Premium Food Quality",
text:"Fresh ingredients and authentic flavours"
},

{
icon:"👨‍🍳",
title:"Expert Chefs",
text:"Experienced team creating amazing dishes"
},

{
icon:"🎉",
title:"Perfect Events",
text:"Wedding, corporate and special occasions"
},

{
icon:"⭐",
title:"Trusted Service",
text:"Thousands of happy customers"
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
duration:0.6,
delay:index*0.2
}}

whileHover={{
y:-10,
scale:1.03
}}

style={{
padding:"35px 20px",
borderRadius:"25px",
background:
"linear-gradient(145deg,#ffffff,#f5e6c8)",
boxShadow:
"0 10px 30px rgba(0,0,0,0.12)"
}}
>


<div
style={{
fontSize:"45px"
}}
>
{item.icon}
</div>


<h3
style={{
marginTop:"15px",
color:"#3B1F0B",
fontFamily:"Playfair Display"
}}
>
{item.title}
</h3>


<p
style={{
color:"#666",
marginTop:"10px"
}}
>
{item.text}
</p>


</motion.div>


))}

</div>

</div>

{/* OUR JOURNEY */}

<div
style={{
padding:"100px 8%",
background:"white",
}}
>


<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
style={{
textAlign:"center"
}}
>

<p
style={{
color:"#D4A373",
letterSpacing:"3px",
fontWeight:"bold"
}}
>
OUR JOURNEY
</p>


<h2
style={{
fontSize:"clamp(35px,5vw,50px)",
fontFamily:"Playfair Display",
color:"#3B1F0B"
}}
>
Years Of Passion & Excellence
</h2>

</motion.div>



<div
style={{
marginTop:"60px",
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",
gap:"30px"
}}
>


{[
{
year:"2001",
title:"Started Our Journey",
text:"A small dream to serve delicious food became a premium catering brand."
},

{
year:"2010",
title:"Expanded Services",
text:"Successfully handled weddings, celebrations and corporate events."
},

{
year:"2020",
title:"Modern Catering",
text:"Introduced creative menus with professional event management."
},

{
year:"2026",
title:"Royal Feast Today",
text:"Delivering unforgettable food experiences for thousands of guests."
}

].map((item,index)=>(


<motion.div
key={index}

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.6,
delay:index*0.2
}}

whileHover={{
y:-10
}}

style={{
padding:"35px",
borderRadius:"25px",
background:
"linear-gradient(135deg,#3B1F0B,#D4A373)",
color:"white",
textAlign:"center",
boxShadow:
"0 15px 35px rgba(0,0,0,0.15)"
}}
>


<h1
style={{
fontSize:"45px",
fontFamily:"Playfair Display"
}}
>
{item.year}
</h1>


<h3>
{item.title}
</h3>


<p
style={{
marginTop:"15px",
lineHeight:"1.8"
}}
>
{item.text}
</p>


</motion.div>


))}


</div>

</div>

{/* TEAM SECTION */}

<div
style={{
padding:"100px 8%",
background:"#FFF8E7",
textAlign:"center"
}}
>


<motion.h2
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
style={{
fontSize:"clamp(35px,5vw,50px)",
fontFamily:"Playfair Display",
color:"#3B1F0B"
}}
>
Meet Our Expert Team
</motion.h2>


<p
style={{
color:"#777",
marginTop:"15px"
}}
>
The passionate people behind our delicious experiences
</p>



<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",
gap:"35px",
marginTop:"50px"
}}
>


{[
{
name:"Rajesh Kumar",
role:"Founder & CEO",
img:"/founder.png"
},
{
name:"Priya Sharma",
role:"Head Chef",
img:"/headchef.png"
},
{
name:"Arun Nair",
role:"Event Manager",
img:"/operation.png"
}

].map((member,index)=>(


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
duration:0.7,
delay:index*0.2
}}

whileHover={{
y:-15
}}

style={{
background:"white",
padding:"35px 20px",
borderRadius:"30px",
boxShadow:
"0 15px 35px rgba(0,0,0,0.12)"
}}
>


<img
src={member.img}
alt=""
style={{
width:"130px",
height:"130px",
borderRadius:"50%",
objectFit:"cover",
border:
"5px solid #D4A373"
}}
/>


<h3
style={{
marginTop:"20px",
fontFamily:"Playfair Display",
color:"#3B1F0B"
}}
>
{member.name}
</h3>


<p
style={{
color:"#D4A373",
fontWeight:"bold"
}}
>
{member.role}
</p>


</motion.div>


))}


</div>


</div>

{/* STATISTICS */}

<div
style={{
padding:"90px 8%",
background:
"linear-gradient(135deg,#3B1F0B,#D4A373)",
}}
>


<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap:"30px"
}}
>


{[
{
number:"25+",
title:"Years Of Excellence"
},

{
number:"250+",
title:"Menu Varieties"
},

{
number:"500+",
title:"Events Completed"
},

{
number:"100K+",
title:"Happy Customers"
}

].map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7,
delay:index*0.2
}}

whileHover={{
scale:1.05
}}

style={{
background:
"rgba(255,255,255,0.15)",
backdropFilter:"blur(10px)",
borderRadius:"25px",
padding:"40px 20px",
textAlign:"center",
color:"white",
border:
"1px solid rgba(255,255,255,0.3)"
}}

>


<h1
style={{
fontSize:"50px",
fontFamily:"Playfair Display"
}}
>
{item.number}
</h1>


<p
style={{
fontSize:"18px",
fontWeight:"600"
}}
>
{item.title}
</p>


</motion.div>


))}


</div>


</div>

{/* CTA SECTION */}

<motion.div

initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

style={{
margin:"100px 8%",
padding:"70px 30px",
borderRadius:"35px",
textAlign:"center",
background:
"linear-gradient(135deg,#D4A373,#3B1F0B)",
color:"white",
boxShadow:
"0 20px 50px rgba(0,0,0,0.2)"
}}

>


<h2
style={{
fontSize:"clamp(30px,5vw,50px)",
fontFamily:"Playfair Display"
}}
>
Ready To Make Your Event Special?
</h2>


<p
style={{
marginTop:"20px",
fontSize:"18px",
lineHeight:"1.8"
}}
>
From weddings to celebrations,
Royal Feast creates unforgettable
food experiences for your special moments.
</p>


<Link to ="/contact">
<motion.button

whileHover={{
scale:1.1
}}

whileTap={{
scale:0.95
}}

style={{
marginTop:"30px",
padding:"15px 40px",
borderRadius:"30px",
border:"none",
background:"white",
color:"#3B1F0B",
fontWeight:"bold",
fontSize:"16px",
cursor:"pointer"
}}
>
Contact details

</motion.button>
</Link>

</motion.div>
</>
)
}
export default About;
