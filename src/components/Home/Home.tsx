import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import drone_image from "../../assets/images/plants.jpg";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#33abb8",
      main: "#0097a7",
      dark: "#006974",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ebf1af",
      main: "#e6ee9c",
      dark: "#a1a66d",
      contrastText: "#000",
    },
  },
});
const Root = styled("div")({
  padding: 0,
  margin: 0,
  "background-color": theme.palette.secondary.light,
});
const NavbarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const Logo = styled("h1")({
  margin: "0 0 0 0.45em",
});
const LogoA = styled("a")({
  color: theme.palette.primary.dark,
  listStyle: "none",
  textDecoration: "none",
});
const LogoNavigation = styled("ul")({
  listStyle: "none",
  textDecoration: "none",
  display: "flex",
});
const NavA = styled(Link)({
  display: "block",
  padding: "1em",
  color: theme.palette.primary.dark,
  'text-decoration': "none"
});
const Main = styled("main")({
  backgroundImage: `linear-gradient(rgba(0, 100, 100, 0.6), rgba(50, 50, 0, 0.7)), url(${drone_image});`,
  width: "100%",
  height: "70%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute",
});
const MainText = styled("div")({
  textAlign: "center",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
});

export const Home = (props: Props) => {
  return (
    <Root>
      <NavbarContainer>
        <Logo>
          <LogoA href="#">HousePlant</LogoA>
        </Logo>
        <LogoNavigation>
          <li>
            <NavA to="/">Home</NavA>
          </li>
          <li>
            <NavA to="/dashboard">Dashboard</NavA>
          </li>
          <li>
            <NavA to="/signin">Sign In</NavA>
          </li>
        </LogoNavigation>
      </NavbarContainer>
      <Main>
        <MainText>
          <h1>{props.title}</h1>
          <p>Plants grow on you</p>
          <br></br>
          <Button
            color="info"
            variant="contained"
            component={Link}
            to="/dashboard"
          >
            See the Plants
          </Button>
        </MainText>
      </Main>
    </Root>
  );
};
