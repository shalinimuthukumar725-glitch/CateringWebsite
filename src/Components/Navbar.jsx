import { AppBar, Toolbar, Typography, Button, Box ,Dialog,DialogContent} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { Home } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
import { RoomService } from "@mui/icons-material";
import { PhotoLibrary } from "@mui/icons-material";
import { ContactMail } from "@mui/icons-material";
import { RestaurantMenu } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";


function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  // const[menu,setMenu]=useState(false);

  return (

    <>
    <AppBar
      position="sticky"
      sx={{
        background:"rgba(255,255,255,0.1)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",
        border:"1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
        }}
      >

         {/* Logo */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
         
          <Box component="img" src="/logo.png" alt="logo"  sx={{width:{xs:50,sm:60,md:80},height:{xs:50,sm:60,md:50},objectFit:"cover",display:"block",borderRadius:"90%"}}/>
          
        </motion.div>

        <Box
  sx={{
    display: {
      xs: "block",
      md: "none",
    },
  }}
>
  <IconButton
    onClick={() => setOpen(true)}
    sx={{ color: "purple" }}
  >
    <MenuIcon />
  </IconButton>
</Box>

       

        {/* Menu */}


        <Box
  sx={{
    display: {
      xs: "none",
      md: "flex",
    },
    gap: 2,
  }}
>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Gallery", path: "/gallery" },
            { name: "Menu",  path :"/menu"},
            { name: "Contact", path: "/Contact" },
          ].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
            >
              <Button
                onClick={() =>{
                //   if(item.action ==="menu"){
                //     setMenu(true);
                //   }else{
                // }
                   navigate(item.path)}
              }
                sx={{
                  color: "black",
                  fontWeight: 600,
                  borderRadius: "25px",
                  px: 2,
                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </Box>

        {/* CTA Button */}

      </Toolbar>
    </AppBar>
    <Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
>
  <Box
    sx={{
      width: 250,
      height:"100%",
      p: 2,
      background:"rgba(255,255,255,0.1)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",
        border:"1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    }}
  >
    <IconButton
      onClick={() => setOpen(false)}
    >
      <CloseIcon />
    </IconButton>

    {[
      { name: "Home", path: "/",icon:<Home style={{color:"purple"}}/> },
      { name: "About", path: "/about" ,icon:<Info style={{color:"purple"}}/>},
      { name: "Services", path: "/services" ,icon:<RoomService style={{color:"purple"}}/>},
      { name: "Gallery", path: "/gallery",icon:<PhotoLibrary style={{color:"purple"}}/> },
      { name: "Menu", path: "/menu" ,icon:<RestaurantMenu style={{color:"purple"}}/>},
      { name: "Contact", path: "/contact",icon:<ContactMail style={{color:"purple"}}/> },
    ].map((item) => (
      <Button
      startIcon={item.icon}
        key={item.name}
        fullWidth
        sx={{
          my: 1,
          justifyContent: "flex-start",
          color:"black",textTransform:"none",
          fontFamily:"fangsong",fontSize:15,fontWeight:"bold",letterSpacing:1
        }}
        onClick={() => {
          navigate(item.path);
          setOpen(false);
        }}
      >
        {item.name}
      </Button>
    ))}
  </Box>
</Drawer>

</>
  );
}

export default Navbar;