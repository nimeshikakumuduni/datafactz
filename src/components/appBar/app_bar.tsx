import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./app_bar_styles";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import routeNames from "../../routes/route_names";
import SearchIcon from "@material-ui/icons/Search";

function MyAppBar() {
  const history = useHistory();
  const classes = useStyles();

  const gotoPage = (route: string) => {
    history.push(route);
  };
 
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
