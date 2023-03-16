/* /* import { useState } from "react";
import Books from "../components/Books";
import TopBar from "../components/TopBar";
import CartPanel from "../components/Cart/CartPanel";
import axios from "axios";
import { Snackbar, Typography } from "@mui/material";
import { getBooks } from "../utils/gsheets";
import ResponsiveAppBar from "./navbar";

const initForm = {
  fullName: "",
  email: "",
  contact: "",
  address: "",
};

const Homepage = ({ books }) => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState({});
  const [enterDetailsForm, setEnterDetailsForm] = useState(initForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const genres = [...new Set(books.map((b) => b.genre))];

  const handleChangeForm = (event) =>
    setEnterDetailsForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));

  const handleIncreaseItemQty = (name) =>
    setCart((old) => ({
      ...old,
      [name]: !!old[name] ? old[name] + 1 : 1,
    }));

  const handleDecreaseItemQty = (name) => {
    if (cart[name] === 1) {
      let tCart = { ...cart };
      delete tCart[name];
      setCart(tCart);
    } else {
      setCart((old) => ({
        ...old,
        [name]: old[name] - 1,
      }));
    }
  };

  const handlePlaceNewOrder = async () => {
    try {
      setLoading(true);
      const resp = await axios.post("/api/new-order", {
        cart,
        ...enterDetailsForm,
      });
      setShowPanel(false);
      setOrderPlaced(true);
      setCart({});
      setEnterDetailsForm(initForm);
      setError({});
    } catch (err) {
      if (err.response.status === 400) {
        setError(err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClosePanel = () => {
    setError({});
    setShowPanel(false);
  };

  return (
    <>
      <ResponsiveAppBar />
      {/* <ButtonAppBar
        openPanel={() => setShowPanel(true)}
        activeGenre={activeGenre}
        changeGenre={setActiveGenre}
        genres={genres} /> 
<Snackbar
  anchorOrigin={{
    vertical: "top",
    horizontal: "center",
  }}
  open={orderPlaced}
  autoHideDuration={7000}
  onClose={() => setOrderPlaced(false)}
  message="Order placed! A confirmation mail has been sent to you. The link is valid for the next 5 mins"
/>
{/* <TopBar
        openPanel={() => setShowPanel(true)}
        activeGenre={activeGenre}
        changeGenre={setActiveGenre}
        genres={genres}
/> 
      <Books
        books={books}
        cart={cart}
        increaseItemQty={handleIncreaseItemQty}
        decreaseItemQty={handleDecreaseItemQty}
        activeGenre={activeGenre}
      />
      <CartPanel
        books={books}
        cart={cart}
        showPanel={showPanel}
        increaseItemQty={handleIncreaseItemQty}
        decreaseItemQty={handleDecreaseItemQty}
        closePanel={handleClosePanel}
        enterDetailsForm={enterDetailsForm}
        onFormChange={handleChangeForm}
        placeOrder={handlePlaceNewOrder}
        error={error}
        loading={loading}
        orderPlaced={orderPlaced}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const books = await getBooks();
  return {
    props: {
      books,
    },
  };
};

export default Homepage; */

import React from "react";
import { Grid, Typography, Button, Box, Container, ThemeProvider, createTheme } from '@mui/material';
import ResponsiveAppBar from "./navbar";

const HeroTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f38923',
    },
    secondary: {
      main: '#9197ae',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <ThemeProvider theme={HeroTheme}>

        <Box sx={{
          width: '100%',
          display: 'flex',
          minHeight: '600px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Grid container spacing={6} sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1300px',
            padding: '50px',
          }}>
            <Grid item xs={12} md={7}>
              <Typography variant="h3" fontWeight={650}>
                Somos el futuro de la manufactura digital
              </Typography>
              <Typography variant="h6">
                Creamos productos únicos con tecnología que impactará nuestro futuro.
              </Typography>
              <Button href="/Products" variant="contained" color="primary" sx={{
                width: '200px', fontSize: '16px', mt: '15px'
              }}>
                Ver productos
              </Button>
            </Grid>
            <Grid item xs={12} md={5} >
              <img style={{ borderRadius: '15px' }} width={400} src={"https://cdn.discordapp.com/attachments/849781073802035261/1086011121238016030/88107df7-bd96-4aa8-a9c0-2905f21aae78.jpeg"} />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
};

export default Home;
