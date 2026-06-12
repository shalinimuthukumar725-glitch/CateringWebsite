import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { menuData } from "./MenuData";

function EventMenu() {
  const { eventName } = useParams();

  const event = menuData[eventName];

  const [selected, setSelected] = useState(
    event?.categories[0]
  );

  if (!event) {
    return <h1>Event Not Found</h1>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Left Menu */}

      <Box
        sx={{
          width: "250px",
          p: 3,
          borderRight: "1px solid #ddd",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          {event.title}
        </Typography>

        {event.categories.map((item) => (
          <Button
            key={item}
            fullWidth
            sx={{
              mb: 1,
              justifyContent: "flex-start",
            }}
            onClick={() => setSelected(item)}
          >
            {item}
          </Button>
        ))}
      </Box>

      {/* Right Content */}

      <Box
        sx={{
          flex: 1,
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          {selected}
        </Typography>

        <Typography>
          Here show images/cards for {selected}
        </Typography>
      </Box>
    </Box>
  );
}

export default EventMenu;