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
        Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },

Engagement:{   
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },

Reception:{   
          Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },


"HouseWarming":{   
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },


"Baby Shower":{   
        Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },


Mehandi:{   
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },


"Graduation Ceremony":{   
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },


"Corporate Event":{   
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}],  
        soups:[{img:"/soup1.png",name:"Celery Soup"},{img:"/soup2.png",name:"Bottle Guard Soup"},{img:"/soup3.png",name:"Broccoli Soup"},{img:"/soup4.png",name:"Vegan Thai Coconut Soup"},{img:"/soup5.png",name:"Mushroom Barley Soup"}],},
        
Birthday:{
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },

"Retirement":{   
         Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/idli.png",name:"Idli"},{img:"/coconut.png",name:"Coconut Chutney"},{img:"/chutney.png",name:"Tomato Chutney"},{img:"/sambar.png",name:"Sambar"},{img:"/poori.png",name:"Poori"},{img:"/dosa.png",name:"Dosa"},{img:"/vegrice.png",name:"Vegetable Rice"},{img:"/podi.png",name:"Podi Idli"}],
        Lunch:[{img:"/rice1.png",name:"Rice"},{img:"/sambar.png",name:"Sambar"},{img:"/vathal.png",name:"Vathal Kulambu"},{img:"/rasam.png",name:"Rasam"},{img:"/poriyal.png",name:"Veg Poriyal"},{img:"/pickle.png",name:"Spicy Pickle"}],
        Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },
       
},

nonveg:{
Wedding:{
        Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/parota.png",name:"Parotta"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/vada.png",name:"Vada"}],
       Lunch:[{img:"/non1.png",name:"Chicken Biryani"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/chukka.png",name:"Chicken Chukka"},{img:"/65.png",name:"Chicken 65"},{img:"/fish.png",name:"Fish Fry"},{img:"/non2.png",name:"Mutton Biryani"}],
       Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },


"Corporate Event":{
       Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/parota.png",name:"Parotta"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/vada.png",name:"Vada"}],
       Lunch:[{img:"/non1.png",name:"Chicken Biryani"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/chukka.png",name:"Chicken Chukka"},{img:"/65.png",name:"Chicken 65"},{img:"/fish.png",name:"Fish Fry"},{img:"/non2.png",name:"Mutton Biryani"}],
       Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },

Birthday:{
       Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/parota.png",name:"Parotta"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/vada.png",name:"Vada"}],
       Lunch:[{img:"/non1.png",name:"Chicken Biryani"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/chukka.png",name:"Chicken Chukka"},{img:"/65.png",name:"Chicken 65"},{img:"/fish.png",name:"Fish Fry"},{img:"/non2.png",name:"Mutton Biryani"}],
       Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },

Engagement:{
        Drinks:[{img:"/coffee.png",name:"Filter Coffee"},{img:"/tea.png",name:"Tea"},{img:"/milk.png",name:"Milk"},{img:"/bornvita.png",name:"BornVita"},{img:"/badam.png",name:"Badam Milk"},{img:"/ragi.png",name:"Ragi"}],
        Breakfast:[{img:"/parota.png",name:"Parotta"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/vada.png",name:"Vada"}],
       Lunch:[{img:"/non1.png",name:"Chicken Biryani"},{img:"/chicken.png",name:"Chicken Gravy"},{img:"/chukka.png",name:"Chicken Chukka"},{img:"/65.png",name:"Chicken 65"},{img:"/fish.png",name:"Fish Fry"},{img:"/non2.png",name:"Mutton Biryani"}],
       Desserts:[{img:"/img1.png",name:"Panna Cotta Berry"},{img:"/gulab.png",name:"Gulab Jamun"},{img:"/mango.png",name:"Coconut Mango Sago"},{img:"/rasagulla.png",name:"Rasagulla"},{img:"/img7.png",name:"Chocolate & Blueberry"}],
        Juices:[{img:"/apple.png",name:"Apple Juice"},{img:"/grapes.png",name:"Grapes Juice"},{img:"/mangojuice.png",name:"Mango Juice"},{img:"/orange.png",name:"Orange Juice"}]  },
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

.map((food,index)=>(

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
image={food.img}
/>
<Box sx={{p:2}}>
        <Typography fontWeight="700" variant="h6" sx={{textAlign:"center",color:"brown"}}>
                {food.name}
        </Typography>

</Box>
</Card>
))
}
</Box>
</Box>
)
}
export default Menu;