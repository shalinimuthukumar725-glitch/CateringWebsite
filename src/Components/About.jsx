import { motion } from "framer-motion";
import { Box ,Grid,Card,Typography} from "@mui/material";

function About() {
  return (
    <>
      {/* ABOUT BANNER */}

      <div
        style={{
          height: "400px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            About Us
          </h1>

          <p>Home / About Us</p>
        </motion.div>
      </div>

      {/* ABOUT COMPANY */}

      <div
        style={{
          padding: "100px 10%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt=""
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: "#ff6b35",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            ABOUT US
          </p>

          <h2
            style={{
              fontSize: {md:"50px"},
              color: "#1f2937",
              marginTop: "10px",
            }}
          >
            Indulge In A Celebration With Great Food!
          </h2>

          <p
            style={{
              lineHeight: "2",
              color: "#666",
              marginTop: "20px",
        
            }}
          >
            Royal Feast Catering Service provides exceptional
            catering experiences for weddings, receptions,
            engagements, corporate events and family
            celebrations. We focus on quality food,
            professional service and unforgettable moments.
          </p>

          <button
            style={{
              marginTop: "25px",
              padding: "12px 25px",
              borderRadius: "30px",
              border: "none",
              background:
                "linear-gradient(90deg,#ff6b35,#ffd700)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </motion.div>
      </div>
      

      {/* TEAM */}

      <div
        style={{
          padding: {md:"50px 10%",xs:"50px 5%"},
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            color: "#1f2937",
          }}
        >
          Meet Our Team
        </h2>

             <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:4}}>
  {[
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      education: "MBA, Hospitality Management",
      image: "/founder.png",
    },
    {
      name: "Priya Sharma",
      role: "Head Chef",
      education: "Diploma in Culinary Arts",
      image: "/headchef.png",
    },
    {
      name: "Arun Nair",
      role: "Operations Manager",
      education: "BBA, Logistics Management",
      image: "/operation.png",
    },
  ].map((member, index) => (
      <Card
      key={index}
        sx={{
          width:{
            xs:"50%",
            sm:"280px",
            md:"320px",
          },

          textAlign: "center",
          p: 3,
          borderRadius: "20px",
          background: "linear-gradient(wheat,white,wheat)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          transition: "0.4s",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 15px 35px brown",
          },
        }}
      >
        <Box
          component="img"
          src={member.image}
          alt={member.name}
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #D4A373",
            transition: "0.4s",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontWeight: 700,
          }}
        >
          {member.name}
        </Typography>

        <Typography
          sx={{
            color: "#D4A373",
            fontWeight: 600,
            mt: 1,
          }}
        >
          {member.role}
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: "0.95rem",
            mt: 1,
          }}
        >
          🎓 {member.education}
        </Typography>
      </Card>
  ))}
</Box>
</div>

      {/* STATISTICS */}

      <div
        style={{
          padding: "100px 10%",
          background: "#f8f9fa",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          
          {[
            { num: "25+", text: "Years Of Excellence" ,bg:"linear-gradient(135deg, #f6c2f3,skyblue 100%)"},
            { num: "250+", text: "Menu Options",bg:"linear-gradient(135deg, white 0%, orange 100%)" },
            { num: "340+", text: "Staff Members" ,bg:"linear-gradient(135deg, skyblue 0%, #b6cf6a 100%)"},
            { num: "125K+", text: "Happy Foodies" ,bg:"linear-gradient(135deg,  #d7e6ff 0%,violet 100%)"},
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: -100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              style={{
                background:item.bg,border:"1px solid skyblue",
                color: "#fff",position:"relative", overflow:"hidden",boxShadow:"0 5px 15px brown",
                textAlign: "center",
                padding: "40px 20px",
                borderRadius: "20px",
              }}
            > 
             
              <h1>{item.num}</h1>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div> 
      </div>

      {/* CTA */}
{/* 
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          margin: "100px 10%",
          padding: "70px",
          textAlign: "center",
          borderRadius: "30px",
          background:
            "linear-gradient(135deg,#ff6b35,#ffd700)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
          }}
        >
          Ready To Make Your Event Memorable?
        </h2>

        <p
          style={{
            marginTop: "15px",
          }}
        >
          Book Venus Catering For Weddings,
          Receptions, Corporate Events And More.
        </p>

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            marginTop: "25px",
            padding: "14px 30px",
            border: "none",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Book Now
        </motion.button>
      </motion.div> */}
    </>
  );
}

export default About;