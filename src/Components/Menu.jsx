import { Heart } from "lucide-react";


import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function Menu() {
  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [selectedCategory, setSelectedCategory] =
    useState("Drinks");

  const menuData = {
     Wedding: {
      Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },

    "60th Wedding": {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },

    "70th Wedding": {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },

    "80th Wedding": {
      Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },

    Engagement: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Seemantham: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Birthday: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Housewarming: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Corporate: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Graduation: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Mehandi: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
    Retirement: {
       Drinks: [
        "/coffee.png",
        "/tea.png",
        "/milk.png",
        "/ragi.png",
        "/badam.png",
        "/bornvita.png"
      ],

      Breakfast: [
        "/idli.png",
        "/dosa.png",
        "/sambar.png",
        "/coconut.png",
        "/chutney.png",
      ],

      Lunch: [
        "/vathal.png",
        "/rasam.png",
        "/sambar.png",
        "/rice1.png",
        "/poriyal.png",
        "/pickle.png"
      ],

      Desserts: [
        "/mango.png",
        "/icecream.png",
        "/gulab.png",
        "/rasagulla.png",
        "/cake.png"
      ],

      Juices:[
        "/apple.png",
        "/mangojuice.png",
        "/orange.png",
        "/grapes.png"
      ]
    },
  };

  const events = Object.keys(menuData);

  if (!selectedEvent) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h3"
          textAlign="center"
          mb={5}
        >
          Choose Your Event
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: 3,
          }}
        >
          {events.map((event) => (
            <Card
              key={event}
              onClick={() => {
                setSelectedEvent(event);

                const firstCategory =
                  Object.keys(
                    menuData[event]
                  )[0];

                setSelectedCategory(
                  firstCategory
                );
              }}
              sx={{
                cursor: "pointer",
                borderRadius: "20px",
              }}
            >
              {/* <CardMedia
                component="img"
                height="220"
                image="https://images.unsplash.com/photo-1555244162-803834f70033"
              /> */}

              <Typography
                textAlign="center"
                p={2}
                fontWeight="bold"
              >
                {event}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Left Side */}

      <Box
        sx={{
          width: {md:250,xs:100},
          borderRight: "1px solid #ddd",
          p:{md:2},fontSize:{xs:10}
        
        }}
      >
        <Button
          // fullWidth
          variant="contained"
          onClick={() =>
            setSelectedEvent(null)
          }
          sx={{ mb: 3,width:{md:"fullwidth",xs:20},ml:{xs:3} }}
        >
          Back
        </Button>

        {Object.keys(
          menuData[selectedEvent]
        ).map((category) => (
          <Button
            key={category}
            fullWidth
            sx={{
              mb: 1, 
            }}
            onClick={() =>
              setSelectedCategory(
                category
              )
            }
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Right Side */}

      <Box
        sx={{
          flex: 1,
          p: {md:4},
        }}
      >
        <Typography
          variant="h4"
          mb={3}
        >
          {selectedCategory}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: 3,
          }}
        >
          {menuData[selectedEvent][
            selectedCategory
          ]?.map((img, index) => (
            <Card
              key={index}
              sx={{
                // borderRadius: "20px",
                overflow: "hidden",
                                           
     animation: `cardDrop 5s ease ${ index * 0.3}s both infinite`,

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
                image={img}
                height="250"
//                 sx= {{animation: "moveCenter 0.9s ease forwards",

//   "@keyframes moveCenter" : {
//   from :{
//     // transform: "translateY(-80px)",
//         opacity: 0,
//          transform: "translateX(-200px)scale(0.95)",
//   },
//   to : {
//     opacity: 1,
//      transform: "translateX(0)scale(0.95)",
//   }
// }
// }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Menu;