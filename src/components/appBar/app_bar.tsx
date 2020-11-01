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
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const gotoPage = (route: string) => {
    history.push(route);
  };

  const aboutusBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.aboutus);
  }

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
            onClick={handleClick1}
          >
            About
          </Button>
          <Menu
            id="about-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
            style={{ marginTop: "52px" }}
            classes={{ list: classes.dropList }}
          >
            <MenuItem className={classes.menuItem} onClick={aboutusBtnPressed}>
              About Us
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose1}>
              Community care
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose1}>
              Careers
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose1}>
              IBM Partnership
            </MenuItem>
          </Menu>
          <Button
            className={classes.btnstyle}
            aria-controls="analytics-menu"
            aria-haspopup="true"
            onClick={handleClick2}
          >
            Analytics
          </Button>
          <Menu
            id="analytics-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            style={{ marginTop: "52px" }}
            classes={{ list: classes.dropList }}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose2}>
              Supply Chain Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose2}>
              Customer Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose2}>
              Marketing Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose2}>
              Risk Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose2}>
              Social Media Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose2}>
              Real Time Analytics
            </MenuItem>
          </Menu>

          <Button
            className={classes.btnstyle}
            aria-controls="analytics-menu"
            aria-haspopup="true"
            onClick={handleClick3}
          >
            capabilities
          </Button>
          <Menu
            id="analytics-menu"
            anchorEl={anchorEl3}
            keepMounted
            open={Boolean(anchorEl3)}
            onClose={handleClose3}
            style={{ marginTop: "52px" }}
            classes={{ list: classes.dropList }}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose3}>
              Big Data
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose3}>
              Business Intelligrnt
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose3}>
              Data warehousing & Modernization
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose3}>
              Data Visualization & Dashboarding
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose3}>
              Data Management
            </MenuItem>
          </Menu>
          <Button
            onClick={() => {
              gotoPage(routeNames.solution);
            }}
            className={classes.btnstyle}
          >
            Solutions
          </Button>
          <Button
            className={classes.btnstyle}
            aria-controls="analytics-menu"
            aria-haspopup="true"
            onClick={handleClick4}
          >
            Thought Leadership
          </Button>
          <Menu
            id="analytics-menu"
            anchorEl={anchorEl4}
            keepMounted
            open={Boolean(anchorEl4)}
            onClose={handleClose4}
            style={{ marginTop: "52px" }}
            classes={{ list: classes.dropList }}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose4}>
              Blog
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose4}>
              Case Studies
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose4}>
              Whitepapers
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose4}>
              Testimonials
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose4}>
              Technology partners
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose4}>
              News & Events
            </MenuItem>
          </Menu>
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
