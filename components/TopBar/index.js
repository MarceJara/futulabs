import {
  Stack,
  IconButton,
  Tabs,
  Tab,
  tabClasses,
  tabsClasses,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const TopBar = ({ genres, activeGenre, changeGenre, openPanel }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center">
      <Tabs
        variant="scrollable"
        visibleScrollbar
        onChange={(_, value) => changeGenre(value)}
        value={activeGenre}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontWeight: 600,
            fontFamily: "Roboto",
            textTransform: "capitalize",
            fontSize: 17,
          },
          [`& .${tabsClasses.indicator}`]: {
            height: 4,
          },
        }}
      >
        <Tab value="All" label="All" />
        {genres.map((genre) => (
          <Tab key={genre} value={genre} label={genre} />
        ))}
      </Tabs>
      <IconButton onClick={openPanel}>
        <ShoppingCartIcon />
      </IconButton>
    </Stack >


  );
};

export default TopBar;

/* {/* <Stack
      direction="row"
      mb={{
        xs: 10,
        lg: 15,
      }}
      pt={{
        xs: 2,
        lg: 6,
      }}
      px={{
        xs: 2,
        lg: 6,
      }}
      bgcolor="inherit"
    >


      <Tabs
        variant="scrollable"
        visibleScrollbar
        onChange={(_, value) => changeGenre(value)}
        value={activeGenre}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontWeight: 600,
            fontFamily: "Roboto",
            textTransform: "capitalize",
            fontSize: 17,
          },
          [`& .${tabsClasses.indicator}`]: {
            height: 4,
          },
        }}
      >
        <Tab value="All" label="All" />
        {genres.map((genre) => (
          <Tab key={genre} value={genre} label={genre} />
        ))}
      </Tabs>
      <Stack
        mb={1}
        direction="row"
        alignItems="right"
        justifyContent="space-between"
      >
        
  <IconButton onClick={openPanel}>
    <ShoppingCartIcon />
  </IconButton>
      </Stack >

    </Stack > * /} */