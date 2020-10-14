import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./app_bar_styles";
import {
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import routeNames from "../routes/route_names";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

function MyAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
  // const isMenuOpen = Boolean(menuEl);

  const gotoPage = (route: string) => {
    history.push(route);
  };

  const handleMenuOpen = (event: any) => {
    setMenuEl(event.currentTarget);
  };

  // const handleMenuClose = () => {
  //   setMenuEl(null);
  // };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={menuEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>About</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Analytics</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Capabilities</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Solutions</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Thought Leadership</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
  //   </Menu>
  // );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img
         width="250" height="70"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/logo.png"
          className="img"
          alt="Advanced Business Big Data Analytics Company - DataFactZ"
        />
        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.btnset}>
          <Button className={classes.btnstyle}>About</Button>
          <Button className={classes.btnstyle}>Analytics</Button>
          <Button className={classes.btnstyle}>Capabilities</Button>
          <Button className={classes.btnstyle}>Solutions</Button>
          <Button className={classes.btnstyle}>Thought Leadership</Button>
          <Button
            onClick={() => {
              gotoPage(routeNames.contact);
            }}
            className={classes.btnstyle}
          >
            Contact Us
          </Button>
        </div>
        <SearchIcon className={classes.searchIcon} />
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
