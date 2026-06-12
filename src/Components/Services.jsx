import { motion } from "framer-motion";
import { Cake,Heart, Baby, HandHeart,PartyPopper, Gem, HeartHandshake, Crown, Flower2, House,
  BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Button } from "@mui/material";

function Services() {
  const events = [
    {
      title: "Wedding Catering",
      desc: `Elegant wedding menus with traditional & modern dishes.
      Make your wedding celebration truly unforgettable with our premium catering services.
We create customized menus that perfectly match your taste and traditions.`,
      img: "/rice.png",
      icon:
       ( <motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
      <Heart  fill="currentColor"  style={{color:"red",filter:"drop-shadow(2px 2px 5px pink)"}}/>
        </motion.div>
      ),
    },
    {
      title: "60th Wedding",
      desc: `Colorful birthday setups with tasty snacks and meals.
      Celebrate six decades of togetherness with a catering experience worthy of the occasion.
Our specially curated menus honor tradition while delivering exceptional taste.`,
      img: "/home.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
        <Gem  style={{color:"#25e7d8",filter:"drop-shadow(2px 2px 5px yellow)"}}/>
      </motion.div>
      ),
    },
    {
      title: "70th Wedding",
      desc: `Mark this remarkable milestone with a catering service designed to honor a lifetime of memories.
Our menus feature a perfect blend of traditional flavors and modern culinary excellence.
We carefully prepare every dish using premium ingredients and hygienic cooking practices.`,
      img: "/Gallerybanner1.png",
      icon:
    (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
         <HeartHandshake style={{color:"#b263fc",filter:"drop-shadow(2px 2px 5px pink)"}} />
      </motion.div>
      ),
    },
     {
      title: "80th Wedding",
      desc: `Professional catering for meetings & corporate gatherings.
      Honor an incredible journey of love and commitment with our premium catering services.
We provide carefully crafted menus that reflect the dignity and significance of the occasion.`,
      img: "/premium.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <Crown fill="CurrentColor" style={{color:"orange",filter:"drop-shadow(2px 2px 5px yellow)"}}/>
      </motion.div>
      ),
    },
     {
      title: "Birthday Function ",
      desc: `Turn every birthday celebration into a delightful and memorable experience with our catering services.
We offer customized menus suitable for children, adults, and guests of all ages.
From delicious snacks and desserts to complete meal packages, we have everything covered.`,
      img: "/snack.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <Cake fill="CurrentColor" style={{color:"skyblue",filter:"drop-shadow(2px 2px 5px blue)"}}/>
      </motion.div>
      ),
    },
    {
      title: "Engagement",
      desc: `Beautiful engagement food setups with premium service.
      Celebrate the beginning of a beautiful journey with our elegant engagement catering services.
We offer customized menus designed to complement your special occasion.
From traditional favorites to contemporary culinary delights, we provide a variety of options.`,
      img: "/sweet1.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <HandHeart style={{color:"red",filter:"drop-shadow(2px 2px 5px red)"}}/>
      </motion.div>
      ),
    },
    {
      title: "Mehandi",
      desc: `Live cooking & outdoor event catering services.
      Add flavor and excitement to your Mehendi celebration with our vibrant catering services.
We offer creative menus that perfectly complement the festive atmosphere of the event.
Guests can enjoy a variety of snacks, live counters, beverages, and specialty dishes.`,
      img: "/sweet.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <Flower2 style={{color:"green",filter:"drop-shadow(2px 2px 5px green)"}}/>
      </motion.div>
      ),
    },
    {
      title: "Seemantham",
      desc: `Grand reception meals with luxury presentation.
      Celebrate the cherished tradition of Seemantham with authentic and elegant catering services.
We offer specially curated menus that honor cultural values and family traditions.
Traditional South Indian delicacies are prepared with care and attention to detail.`,
      img: "/bangle.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <Baby  style={{color:"crimson",filter:"drop-shadow(2px 2px 5px red)"}}/>
      </motion.div>
      ),
    },
    {
      title: "House Warming",
      desc: `Traditional home event catering with family meals.
      Welcome new beginnings with our premium housewarming catering services.
We create delightful menus that bring family and friends together over great food.
Traditional South Indian meals and modern dining options are available.`,
      img: "/tiffin.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <House style={{color:"orange",filter:"drop-shadow(2px 2px 5px orange)"}}/>
      </motion.div>
      ),
    },
     {
      title: "Graduation Ceremony",
      desc: `Honor academic achievements with delicious cuisine, elegant presentation,
       and seamless service.A graduation ceremony is a formal academic event celebrating the
        successful completion of a course of study at a school, college, or university We create 
        memorable dining experiences that make every graduation
        celebration truly special.`,
      img: "/snack1.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <GraduationCap fill="CurrentColor" style={{filter:"drop-shadow(2px 2px 5px #57ca85)"}}/>
      </motion.div>
      ),
    },
     {
      title: "Corporate Events",
      desc: `From board meetings and conferences to annual celebrations and team gatherings, 
      we deliver premium catering solutions tailored to your corporate needs. Our carefully crafted 
      menus, impeccable service, and attention to detail ensure a seamless and memorable dining
       experience for every event.`,
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
   
    {
      title: "Retirement",
      desc: `Pure vegetarian special catering packages.
      Celebrate a successful career and a new beginning with our professional catering services.
We provide thoughtfully designed menus to suit the significance of the occasion.
Our offerings include traditional meals, contemporary dishes, and customized dining options.`,
      img: "/retirement.png",
      icon:
       (<motion.div
      animate={{scale:[1,1.1,1]}}
      transition={{duration:1.5,
      repeat:Infinity}}>
       <PartyPopper style={{color:"orange",filter:"drop-shadow(2px 2px 5px yellow)"}}/>
      </motion.div>
      ),
    },
  
  ];

  return (
    <div>

      {/* 🔥 BANNER */}
      <div style={bannerStyle}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 ,color:["#ffffff","#ffd700","#ff9800","#fdd034","#ffffff"],}}
          transition={{opacity:{ duration: 0.8 },y:{duration:0.8},color:{duration:4,repeat:Infinity},}}
          style={{ fontSize: "60px", fontWeight: "bold" }}
        >
          Services
        </motion.h1>
      </div>

      {/* 🔥 GRID */}
      <div style={containerStyle}>

        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={cardStyle}
          >

            <img src={item.img} alt={item.title} style={imgStyle} />

            <div style={{ padding: "15px" }}>
              <h3 style={{ display: "flex", alignItems: "center", gap: "8px",color:"brown",fontSize:22}}>
                {item.icon} {item.title}
              </h3>

              <p style={{
    fontFamily: "math",
    lineHeight: 1.7,
    letterSpacing: "0.3px",
    fontSize:18,
    fontWeight:500,
    wordSpacing: "2px",
    color: "black",
  }}
>{item.desc}</p>

              {/* <Button variant="contained" size="small">
                Read More
              </Button> */}
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

/* 🔥 STYLES */

const bannerStyle = {
  height: "300px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('/home.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
//   position: "relative",
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  padding: "40px",
  // background: "linear-gradient(40deg, #FFC82D,white)",
};

const cardStyle = {
  background: "linear-gradient(135deg,pink,white,pink)",
  borderRadius: "12px",
  overflow: "hidden",
  // boxShadow: "0 5px 15px gold",
  cursor: "pointer",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

export default Services;