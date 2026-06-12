import { motion } from "framer-motion";

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "50px",
            marginTop: {md:"50px"},
          }}
        >
          {[
            "Founder",
            "Head Chef",
            "Operations Manager",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              style={{
                background: "#fff",
                padding: {md:"40px"},
                borderRadius: "20px",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt=""
                style={{
                  width: "50%",height:"70%",
                  borderRadius: "15px",
                }}
              />

              <h3 style={{ marginTop: "15px" }}>
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
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
            { num: "25+", text: "Years Of Excellence" },
            { num: "250+", text: "Menu Options" },
            { num: "340+", text: "Staff Members" },
            { num: "125K+", text: "Happy Foodies" },
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
                background:
                  "linear-gradient(135deg,#1f2937,#374151)",
                color: "#fff",
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