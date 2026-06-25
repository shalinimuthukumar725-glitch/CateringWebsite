
//   const menuData = {
//      Wedding: {
//       Drinks: [
//         "/coffee.png",
//         "/tea.png",
//         "/milk.png",
//         "/ragi.png",
//         "/badam.png",
//         "/bornvita.png"
//       ],

//       Breakfast: [
//         "/idli.png",
//         "/dosa.png",
//         "/sambar.png",
//         "/coconut.png",
//         "/chutney.png",
//       ],

//       Lunch: [
//         "/vathal.png",
//         "/rasam.png",
//         "/sambar.png",
//         "/rice1.png",
//         "/poriyal.png",
//         "/pickle.png"
//       ],

//       Desserts: [
//         "/mango.png",
//         "/icecream.png",
//         "/gulab.png",
//         "/rasagulla.png",
//         "/cake.png"
//       ],

//       Juices:[
//         "/apple.png",
//         "/mangojuice.png",
//         "/orange.png",
//         "/grapes.png"
//       ]
//     },

import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogContent
} from "@mui/material";

function Menu() {
  const [foodType,setFoodType] = useState("veg");
  const [selectedEvent,setSelectedEvent] = useState("Wedding");
  const [selectedCategory,setSelectedCategory] = useState("Drinks");
  const [eventModal,setEventModal] = useState(false);

const menuData = {
veg:{
Wedding:{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

Engagement:{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

Reception:{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

"HouseWarming":{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

"Baby Shower":{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

Mehandi:{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

"Graduation Ceremony":{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },

"Corporate Event":{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },
        
Birthday:{
       Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
       Breakfast:["/idli.png"],
       Lunch:["/rice1.png"],
       Desserts:["/cake.png"]  },

"Retirement":{   
        Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png"],
        Breakfast:["/idli.png","/poori.png","/dosa.png","/vegrice.png","/podi.png"],
        Lunch:["/rice1.png","/sambar.png","/vathal.png","/rasam.png","/poriyal.png","/pickle.png"],
        Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"],
        Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  },       
},

nonveg:{
Wedding:{
       Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
       Breakfast:["/idli.png","/parota.png","/vada.png"],
       Lunch:["/non1.png","/chicken.png","/chukka.png","/65.png","/fish.png","/non2.png"],
       Desserts:["/img1.png","/gulab.png","/mango.png","/rasagulla.png","/img7.png"] ,
       Juices:["/apple.png","/grapes.png","/mangojuice.png","/orange.png"]  }, 

Birthday:{
       Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png"],
       Breakfast:["/dosa.png"],
       Lunch:["/chicken65.png"], 
       Desserts:["/cake.png"]  },

Engagement:{
       Drinks:["/coffee.png","/tea.png","/milk.png","/bornvita.png","/badam.png","/ragi.png"],
       Breakfast:["/dosa.png"],
       Lunch:["/non1.png"],
       Desserts:["/cake.png"] }
}
};

const events =
Object.keys(menuData[foodType]);

return(

<Box
sx={{
background:"#fff5f7",
minHeight:"100vh",
p:{xs:2,md:4}
}}
>

<Typography
variant="h4"
fontWeight="700"
mb={3}
>
Menu
</Typography>

{/* VEG NON VEG BUTTON */}

<Box
sx={{
display:"flex",
gap:2,
mb:3
}}
>

<Button
variant={
foodType==="veg"
?
"contained"
:
"outlined"
}
onClick={()=>{
setFoodType("veg");
setEventModal(true);
}}
>
Veg
</Button>

<Button
variant={
foodType==="nonveg"
?
"contained"
:
"outlined"
}
color="secondary"
onClick={()=>{
setFoodType("nonveg");
setEventModal(true);
}}>
  Non Veg
</Button>
</Box>

{/* EVENT MODAL */}

<Dialog open={eventModal}>
<DialogContent
sx={{width:{md:300,xs:260}}}>

<Typography
fontWeight="700"
mb={2}>
Select Event
</Typography>

{events.map((event)=>(

<Button
key={event}
fullWidth
sx={{
mb:1
}}
onClick={()=>{
setSelectedEvent(event);
setSelectedCategory("Drinks");
setEventModal(false);
}}>
{event}
</Button>
))}
</DialogContent>
</Dialog>

<Typography
variant="h5"
fontWeight="700"
mb={2}>
{selectedEvent} - {foodType}
</Typography>

{/* CATEGORY */}

<Box
sx={{
display:"flex",
gap:1,
flexWrap:"wrap",
mb:3
}}
>
{Object.keys(
menuData[foodType][selectedEvent]
)

.map((cat)=>(

<Button
key={cat}
variant={
selectedCategory===cat
?
"contained"
:
"outlined"
}
onClick={()=>{
setSelectedCategory(cat);
}}>
{cat}
</Button>

))
}
</Box>

{/* FOOD CARDS */}

<Box
sx={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",
gap:3
}}
>
{
menuData[foodType]
[selectedEvent]
[selectedCategory]

.map((img,index)=>(

<Card
key={index}
sx={{
borderRadius:3,
overflow:"hidden",
     animation: "cardDrop 5s ease ",
  "@keyframes cardDrop" : {
  from :{
    transform: "translateY(-80px)",
        opacity: 0,
        //  transform: "translateY(-80px)",
  },
  to : {
    opacity: 1,
     transform: "translateY(0)",
  }
}
}}
>
<CardMedia
component="img"
height="230"
image={img}
/>
</Card>
))
}
</Box>
</Box>
)
}
export default Menu;