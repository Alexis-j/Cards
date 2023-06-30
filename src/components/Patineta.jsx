import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Patineta() {

  const Img = styled("img")({
    width: 200,
    heith: 200,
    ObjectFit: "cover",
    ObjectPosition: "center",
    borderRadius:4,
  })
return (
  <Paper
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      overFlow: "hidden",
      mt: 5,
      width: 600,
      bgcolor: "#f2c10f",
    }}
  >
    <Img
      src="https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80"
      alt="perro"
    />

    <Box sx={{ flexGrow: 1}}>
      <Typography variant="h4">Product Name</Typography>
      <Typography variant="body1">Product Description</Typography>
      <Button variant="contained">Add to Cart</Button>
    </Box>
    <Box sx={{ mr: 2 }}
      component="p"
    >
      €21,99</Box>
  </Paper>
);
}
