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
        height: "100vh",
      }}
    >
      <Pizza />
      <Patineta />
      <Postcard />
    </Container>
  );
