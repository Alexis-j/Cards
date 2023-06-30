import { Box, Button, Paper, Typography } from "@mui/material";
import destacada from "../img/destacada.jpg";

export default function Pizza() {
  return (
    <Paper
      sx={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
        width: 600,
        bgcolor: "#f2c10f",
      }}
    >
      <Box sx={{ width: "100%", height: 200, position: "relative" }}>
        <img
          src={destacada} // Cambio: Usa la importación de la imagen en el atributo src
          alt="perro"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 4,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h4">Hotel</Typography>
          <Button sx={{ mt: 2 }} variant="contained">
            €99,99 Night
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
