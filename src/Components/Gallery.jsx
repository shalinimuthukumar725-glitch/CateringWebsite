import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

const images = [
  { category: "Food", img: "/img1.png" },
  { category: "Food", img: "/img8.png" },
  { category: "Buffet", img: "/img3.png" },
  { category: "Buffet", img: "/img4.png" },
  { category: "Sweets", img: "/img5.png" },
  { category: "Sweets", img: "/img6.png" },
  {catagory:"Drink",img:"/snack1.png"},
  {catagory:"",img:"/img2.png"},
  {catagory:"",img:"/img7.png"},
  {catagory:"",img:"/icecream.png"},
  {catagory:"",img:"/mango.png"},
  {catagory:"",img:"/cake.png"}
];

export default function Gallery() {
  return (
    <Box sx={{ p: 4, background: "linear-gradient(wheat,white,wheat)", textAlign: "center" }}>
      
      {/* Title */}
      <Typography variant="h4"  sx={{ mb: 3, color: " rgb(156, 100, 31)", fontWeight: "bold",
         animation: "blinkMove 4s ease",

  "@keyframes blinkMove" : {
  from :{
    transform: "translateY(-80px)",
        opacity: 0,
        //  transform: "translateY(-80px)",
  },
  to : {
    opacity: 1,
     transform: "translateY(0)",
  }}
      }}>
         Gallery
      </Typography>

      {/* Grid */}
      <Box sx={{ display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: 5,}}>
      {/* <Grid container spacing={6}> */}
        {images.map((item, index) => (
          // <Grid item xs={12} sm={6} md={4} key={index}>
            
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                 width:"100%",
                    animation: "cardDrop 2s ease",

  "@keyframes cardDrop" : {
  from :{
    transform: "translateX(-80px)",
        opacity: 0,
  },
  to : {
    opacity: 1,
     transform: "translateX(0)",
  }
                },
               cursor: "pointer",
                transition: "0.3s",
                // border:"2px solid violet",
                "&:hover": {
                  transform: "scale(1.05)",
                  // boxShadow: "0 0 20px brown",
                }
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={item.img}
                alt={item.category}
              />

              {/* Overlay */}
              {/* <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: "linear-gradient(white, #e4729f, #78104d)",
                  color: "black",
                  py: 1,
                  fontSize:20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {item.category}
              </Box> */}
            </Card>

          // </Grid>
        ))}
        </Box>
      {/* </Grid> */}
    </Box>
  );
}