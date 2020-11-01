import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./app_bar_styles";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import routeNames from "../../routes/route_names";
import SearchIcon from "@material-ui/icons/Search";

function MyAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const gotoPage = (route: string) => {
    history.push(route);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img
          className={classes.datafactzlogo}
          width="250"
          height="70"
          src="images\datafactz.png"
          alt="Advanced Business Big Data Analytics Company - DataFactZ"
          onClick={() => {
            gotoPage(routeNames.home);
          }}
        />
        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.btnset}>
          <Button
            className={classes.btnstyle}
            aria-controls="about-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            About
          </Button>
          <Menu
            id="about-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Community care</MenuItem>
            <MenuItem onClick={handleClose}>Careers</MenuItem>
            <MenuItem onClick={handleClose}>IBM Partnership</MenuItem>
          </Menu>
          <Button
            className={classes.btnstyle}
            aria-controls="analytics-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Analytics
          </Button>
          <Menu
            id="analytics-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Supply Chain Analytics</MenuItem>
            <MenuItem onClick={handleClose}>Customer Analytics</MenuItem>
            <MenuItem onClick={handleClose}>Marketing Analytics</MenuItem>
            <MenuItem onClick={handleClose}>Risk Analytics</MenuItem>
            <MenuItem onClick={handleClose}>Social Media Analytics</MenuItem>
            <MenuItem onClick={handleClose}>Real Time Analytics</MenuItem>
          </Menu>
          <Button className={classes.btnstyle}>Capabilities</Button>
          <Button
            onClick={() => {
              gotoPage(routeNames.solution);
            }}
            className={classes.btnstyle}
          >
            Solutions
          </Button>
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
