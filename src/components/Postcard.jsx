import { Box, Paper, Typography } from "@mui/material";
import coliseo from "../img/coliceo.jpg";
import pngegg from "../img/pngegg.png";

export default function Postcard() {
  return (
    <Paper
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        mt: 5,
        width: 600,
        bgcolor: "#f2c10f",
      }}
    >
      <Box sx={{ width: "100%", height: "80%", position: "relative" }}>
        <img
          src={coliseo}
          alt="coliseo"
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
            top: "89%", // Ajusta la posición verticalmente
            left: "83%", // Ajusta la posición horizontalmente
          }}
        >
          <img
            src={pngegg}
            alt="firma"
            style={{
              width: "75px",
              height: "75px",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%", // Ajusta la altura de la sección inferior
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pl: 2,
          pr: 2, // Añadido: Añade un espacio a la derecha para el botón
          textAlign: "left",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4">PostCards</Typography>
          <Typography variant="body1">es solo una tarjeta</Typography>
        </Box>
        <Typography
        sx={{marginTop: 5}}
        variant="body1">€0,99 Night</Typography>
      </Box>
    </Paper>
  );
}
