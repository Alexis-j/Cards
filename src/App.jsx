import { Container } from "@mui/material";
import Pizza from "./components/Pizza";
import Patineta from "./components/Patineta";
import Postcard from "./components/Postcard";

export default function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Asegúrate de que el contenedor tenga una altura definida
      }}
    >
      <Pizza />
      <Patineta />
      <Postcard />
    </Container>
  );
}
