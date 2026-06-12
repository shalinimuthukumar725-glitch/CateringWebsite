import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";


function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (

    <>
    <AppBar
      position="sticky"
      sx={{
        background:
          "white",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
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
            { name: "Contact", path: "/Contact" },
            { name: "Menu",  path:"/menu"}
          ].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
            >
              <Button
                onClick={() => navigate(item.path)}
                sx={{
                  color: "purple",
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
      background:"linear-gradient(290deg, #e4729f,grey)"
    }}
  >
    <IconButton
      onClick={() => setOpen(false)}
    >
      <CloseIcon />
    </IconButton>

    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Gallery", path: "/gallery" },
      { name: "Contact", path: "/contact" },
      { name: "Menu", path: "/menu" },
    ].map((item) => (
      <Button
        key={item.name}
        fullWidth
        sx={{
          my: 1,
          justifyContent: "flex-start",
          color:"white",
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