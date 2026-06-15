import React from "react";
import {
  Box,
  Button,
  Container,Avatar,IconButton,
  Typography,
} from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { Heart ,BriefcaseBusiness } from "lucide-react";
import { motion ,AnimatePresence, transform} from "framer-motion";
import { useEffect,useState } from "react";
import { ChevronRight,ChevronLeft} from "@mui/icons-material";
import  StarIcon from "@mui/icons-material/Star";

function Home(){

  const services = [
    {
      title: "Wedding Catering",
            desc: `Elegant wedding menus with traditional & modern dishes.
            Make your wedding celebration truly unforgettable with our premium catering services.`,
            img: "/rice.png",
            icon:
             (<motion.div
                  animate={{scale:[1,1.1,1]}}
                  transition={{duration:1.5,
                  repeat:Infinity}}>
            <Heart fill="currentColor"  style={{color:"red",filter:"drop-shadow(2px 2px 5px pink)"}}/> 
            </motion.div>
                  ),
    },
    {
       title: "Corporate Events",
            desc: `From board meetings and conferences to annual celebrations and team gatherings, 
            we deliver premium catering solutions tailored to your corporate needs.`,
            img: "/food.png",
            icon:
             (<motion.div
                  animate={{scale:[1,1.1,1]}}
                  transition={{duration:1.5,
                  repeat:Infinity}}>
            <BriefcaseBusiness style={{filter:"drop-shadow(2px 2px 5px brown)"}}/>
             </motion.div>
                  ),
    },
   
  ];  
  const[current,setCurrent]=useState(0);
  const reviews = [
  {
    name: "Arun Kumar",
    rating:5,
    review:
      "Amazing catering service. Food quality and presentation were outstanding.",
  },

  {
    name: "Priya",
    rating:5,
    review:
      "Guests loved every dish. Professional team and timely service.",
  },

  {
    name: "Vignesh",
    rating:4,
    review:
      "Excellent experience. Highly recommended for weddings.",
  },

  {
    name: "Karthik",
    rating:5,
    review:
      "Very hygienic and tasty food. Everyone appreciated it.",
  },

  {
    name: "Divya",
    rating:5,
    review:
      "Beautiful setup and delicious menu. Worth every penny.",
  },
];
  

 
    
  return (
    <>
         <Box
  sx={{
    position: "relative",
    height: "90vh",
    backgroundImage:
      " url('/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  }}
>
  {/* Floating Glow */}
  <motion.div
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "#ff4fa3",
      filter: "blur(120px)",
      top: "10%",
      left: "5%",
    }}
  />

  {/* Content */}
  <Box
    sx={{
      position: "absolute",
      top: "46%",
      left: { xs: "5%", md: "8%" },
      transform: "translateY(-50%)",
      maxWidth: "650px",
      zIndex: 2,
    }}
  >
    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        color: "#FFD700",
        fontWeight: "bold",
        letterSpacing: "4px",
        textTransform: "uppercase",
        fontSize: "18px",
      }}
    >
      Premium Catering Service
    </motion.p>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      style={{
        fontSize: "clamp(3rem, 6vw, 3rem)",
        color: "#fff",
        lineHeight: "1.1",
        margin: "10px 0",
        fontWeight: "bold",
      }}
    >
      Delicious Moments
      <br />
      <span style={{ color: "#ff4fa3" }}>
        Made Memorable
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      style={{
        color: "#f5f5f5",
        fontSize: "1.2rem",
        lineHeight: "1.8",
        marginBottom: "30px",
      }}
    >
      Experience authentic South Indian catering
      crafted with tradition, quality and
      unforgettable taste.
    </motion.p>

    {/* Buttons */}
    <Box sx={{ display: "flex", gap: 2 }}>
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 25px #ff4fa3",
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "14px 30px",
          borderRadius: "30px",
          border: "none",
          background:
            "linear-gradient(90deg,#ff4fa3,#ff8ad8)",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Explore More
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.08,
          backgroundColor: "#fff",
          color: "#000",
        }}
        style={{
          padding: "14px 30px",
          borderRadius: "30px",
          border: "2px solid #fff",
          background: "transparent",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Contact Us
      </motion.button>
    </Box>

    {/* Features */}
    <Box
      sx={{
        display: "flex",
        gap: 4,
        mt: 5,
        flexWrap: "wrap",
      }}
    >
      {[
        "Fresh Ingredients",
        "Hygienic Food",
        "On-Time Delivery",
      ].map((item) => (
        <motion.div
          key={item}
          whileHover={{ y: -5 }}
        >
          <Typography
            sx={{
              color: "#FFD700",
              fontWeight: "bold",
            }}
          >
            ✨ {item}
          </Typography>
        </motion.div>
      ))}
    </Box>
  </Box>
</Box>

      {/* Floating Gold Circle */}
      {/* <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        style={{
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "linear-gradient( brown,grey)",
          boxShadow:"5px 5px 20px gold",
          position: "absolute",
          top: "10%",
          right: "-80px",
        }}
      /> */}

      {/* <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "linear-gradient(brown,purple,grey)",
          boxShadow:"5px 5px 20px violet",
          position: "absolute",
          bottom: "10%",
          left: "-60px",
        }}
      /> */}     

    <div
            style={{
              padding: "80px 10%",
              background: "#fff",
              // height:{md:100,xs:20},
              textAlign: "center",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "45px",
                color: "#1f2937",
                   animation: "floatText 3s ease-in-out infinite",

  "@keyframes floatText" : {
  "0%":{
    transform: "translateY(0px)",
  },
  "50%":{
    transform:"translateY(-10px)",
  },
  "100%" : {
     transform: "translateY(0px)",
  },
},
              }}
            >
              Why Choose Royal Feast Catering
            </motion.h2>
    
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(250px,1fr))",
                gap: "25px",
                marginTop: "50px",
                
              }}
            >
              {[
      {
        title: "Fresh Ingredients",
        img: "/ingredient.png",
      },
      {
        title: "Expert Chefs",
        img: "/chef.png",
      },
      {
        title: "Premium Service",
        img: "/premium.png",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        style={{
          background: "linear-gradient(135deg, pink,pink)",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(53, 182, 74, 0.1)",
          textAlign: "center",
         
        }}
      >
        {item.img && (
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          />
        )}
    
        <h3>{item.title}</h3>
      </motion.div>
    ))}
            </div>
          </div>

          {/* services */}

    <div style={{ padding: "10px 10%" }}>
      <h4
        style={{
          color: "#78104d",
          textAlign: "center",
          letterSpacing: "2px",
          fontSize:20
        }}
      >
        WHAT WE DO
      </h4>

      <h2
        style={{
          textAlign: "center",
          fontSize: {md:"45px"},
          marginBottom: "50px",
        }}
      >
        Premium Catering Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
               background:"linear-gradient(135deg,pink,white,pink)",
              boxShadow:
                "5px 5px 20px  #78104d",
            }}
          >
            <img
              src={service.img}
              alt={service.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3 style={{ display: "flex", alignItems: "center", gap: "8px",color:" #78104d"
                }}>
                {service.icon} {service.title}</h3>
              <p style={{
    fontFamily: "math",
    lineHeight: 1.7,
    letterSpacing: "0.3px",
    fontSize:18,
    fontWeight:500,
    wordSpacing: "2px",
    color: "black",
  }}
>
{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",marginBottom:"20px"
        }}
      >
        <Link to= "/Services">
        <Button
          variant="contained"
          // onClick={() => navigate("/Services")}
          sx={{
            background:
              "linear-gradient( #e4729f, #78104d)",
            borderRadius: "30px",
            px: 4,
          }}
        >
          View All Services
        </Button>
        </Link>
      </div>
    </div>

    {/* testimonals */}

    <Box
  sx={{
    py: 10,
    px: 2,

    background:
      "linear-gradient(135deg,#f8e8ff, #bab0d4, #ffe6f7)",

    overflow: "hidden",
    position: "relative",
  }}
>
  <motion.div
  initial={{
    opacity: 0,
    y: -50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
  }}
>
  <Typography
    variant="h2"
    sx={{
      textAlign: "center",

      // fontWeight: {md:800},

      background:
        "linear-gradient(90deg,#7b2cbf,#ff4d9d)",

      WebkitBackgroundClip: "text",

      WebkitTextFillColor:
        "transparent",

      mb: 6,
    }}
  >
    Testimonials
  </Typography>
</motion.div>

<AnimatePresence mode="wait">
  <motion.div
    key={current}
    initial={{
      opacity: 0,
      x: 100,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    exit={{
      opacity: 0,
      x: -100,
    }}
    transition={{
      duration: 0.8,
    }}
  >
    <Box
  sx={{
    maxWidth: "900px",

    mx: "auto",

    p: 5,

    borderRadius: "40px",

    backdropFilter:
      "blur(20px)",

    background:
      "rgba(140, 111, 187, 0.5)",

    boxShadow:
      "0 20px 60px rgba(123,44,191,.2)",
  }}
>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mb: 2,
  }}
>
  {[...Array(reviews[current].rating)]
    .map((_, index) => (
      <StarIcon
        key={index}
        sx={{
          color: "#FFD700",
          fontSize: 30,
        }}
      />
    ))}
</Box>

  <Typography
  variant="h4"
  sx={{
    fontWeight: 700,

    color: "#7b2cbf",

    textAlign: "center",
  }}
>
  {reviews[current].name}
</Typography>
<Typography
  sx={{
    mt: 3,

    textAlign: "center",

    fontSize: "1.2rem",

    lineHeight: 2,

    color: "#444",
  }}
>
  "{reviews[current].review}"
</Typography>
</Box>
</motion.div>
</AnimatePresence>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 1.5,
    mt: 4,
  }}
>
  {reviews.map((_, index) => (
    <Box
      key={index}
      onClick={() =>
        setCurrent(index)
      }
      sx={{
        width:
          current === index
            ? 30
            : 12,

        height: 12,

        borderRadius: "20px",

        cursor: "pointer",

        transition: ".4s",

        background:
          current === index
            ? "linear-gradient(90deg,#7b2cbf,#ff4d9d)"
            : "#d4b5ff",
      }}
    />
  ))}
</Box>
</Box>
    
    </> 
  );
};

export default Home;