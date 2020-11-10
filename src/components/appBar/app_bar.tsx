import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./app_bar_styles";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import routeNames from "../../routes/route_names";
import SearchIcon from "@material-ui/icons/Search";
import UseWindowSize from "../useWindowWidth/useWindowWidth";

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
  };

  const communitycarebtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.communitycare);
  };

  const careersbtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.careers);
  };

  const IBMbtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const SupplyChainBtnPressed = () => {
    setAnchorEl2(null);
    gotoPage(routeNames.SupplychainAnalytics);
  };

  const CustomerBtnPressed = () => {
    setAnchorEl2(null);
    gotoPage(routeNames.CustomerAnalytics);
  };

  const MarketingBtnPressed = () => {
    setAnchorEl2(null);
    gotoPage(routeNames.MarketingAnalyticsPage);
  };

  const RiskBtnPressed = () => {
    setAnchorEl2(null);
    gotoPage(routeNames.RiskAnalyticsPage);
  };

  const SocialMediaBtnPressed = () => {
    setAnchorEl2(null);
    gotoPage(routeNames.SocialmediaAnalyticsPage);
  };

  const RealtimeBtnPressed = () => {
    setAnchorEl2(null);
    gotoPage(routeNames.RealTimeAnalyticsPage);
  };

  const BigDataBtnPressed = () => {
    setAnchorEl3(null);
    gotoPage(routeNames.BigDataPage);
  };

  const BusinessIntelligentBtnPressed = () => {
    setAnchorEl3(null);
    gotoPage(routeNames.BusinessIntelligentPage);
  };

  const DatawarehousingBtnPressed = () => {
    setAnchorEl3(null);
    gotoPage(routeNames.ibmPage);
  };

  const DatavisualizationBtnPressed = () => {
    setAnchorEl3(null);
    gotoPage(routeNames.ibmPage);
  };

  const DataManagementBtnPressed = () => {
    setAnchorEl3(null);
    gotoPage(routeNames.ibmPage);
  };

  const BlogBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const CaseStudieasBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const WhitePapersBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const TestimonialsBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const TechnologyBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const NewsEventBtnPressed = () => {
    setAnchorEl4(null);
    gotoPage(routeNames.ibmPage);
  };

  const screenSize = UseWindowSize();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img
          className={classes.datafactzlogo}
          width={screenSize.width < 1100 ? "150px" : "250px"}
          src="images\datafactz.png"
          alt="Advanced Business Big Data Analytics Company - DataFactZ"
          onClick={() => {
            gotoPage(routeNames.home);
          }}
        />
        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.btnset}>
          <Button
            className={
              screenSize.width < 1000 ? classes.btnStyle2 : classes.btnstyle
            }
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
            <MenuItem
              className={classes.menuItem}
              onClick={communitycarebtnPressed}
            >
              Community care
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={careersbtnPressed}>
              Careers
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={IBMbtnPressed}>
              IBM Partnership
            </MenuItem>
          </Menu>
          <Button
            className={
              screenSize.width < 1000 ? classes.btnStyle2 : classes.btnstyle
            }
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
            <MenuItem
              className={classes.menuItem}
              onClick={SupplyChainBtnPressed}
            >
              Supply Chain Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={CustomerBtnPressed}>
              Customer Analytics
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={MarketingBtnPressed}
            >
              Marketing Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={RiskBtnPressed}>
              Risk Analytics
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={SocialMediaBtnPressed}
            >
              Social Media Analytics
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={RealtimeBtnPressed}>
              Real Time Analytics
            </MenuItem>
          </Menu>

          <Button
            className={
              screenSize.width < 1000 ? classes.btnStyle2 : classes.btnstyle
            }
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
            <MenuItem className={classes.menuItem} onClick={BigDataBtnPressed}>
              Big Data
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={BusinessIntelligentBtnPressed}
            >
              Business Intelligrnt
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={DatawarehousingBtnPressed}
            >
              Data warehousing & Modernization
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={DatavisualizationBtnPressed}
            >
              Data Visualization & Dashboarding
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={DataManagementBtnPressed}
            >
              Data Management
            </MenuItem>
          </Menu>
          <Button
            onClick={() => {
              gotoPage(routeNames.solution);
            }}
            className={
              screenSize.width < 1000 ? classes.btnStyle2 : classes.btnstyle
            }
          >
            Solutions
          </Button>
          <Button
            className={
              screenSize.width < 1000 ? classes.btnStyle2 : classes.btnstyle
            }
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
            <MenuItem className={classes.menuItem} onClick={BlogBtnPressed}>
              Blog
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={CaseStudieasBtnPressed}
            >
              Case Studies
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={WhitePapersBtnPressed}
            >
              Whitepapers
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={TestimonialsBtnPressed}
            >
              Testimonials
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={TechnologyBtnPressed}
            >
              Technology partners
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={NewsEventBtnPressed}
            >
              News & Events
            </MenuItem>
          </Menu>
          <Button
            onClick={() => {
              gotoPage(routeNames.contact);
            }}
            className={
              screenSize.width < 1000 ? classes.btnStyle2 : classes.btnstyle
            }
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
