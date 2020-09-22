import React from "react";
import useStyles from "./contact_page_styles";
import {
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import MyAppBar from "../../components/app_bar";
import { useHistory } from "react-router-dom";

function ContactPage() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <div className={classes.outer}></div>
      <div className={classes.appBar}>
        <MyAppBar />
      </div>
      <div className={classes.appBarHeight}></div>
      <div className={classes.nameRow}>
        <div className={classes.contactPagediv}>
          <text className={classes.contactTopic}>Contact Us</text>
          <ContactList />
        </div>
      </div>
    </div>
  );
}

function ContactList() {
  const classes = useStyles();
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Email
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Send us email for direct contact
              </Typography>
            </CardContent>
            <div></div>
          </div>
          <CardMedia
            className={classes.cover}
            image={"images/gmail-email-logo-png-16.png"}
            title="Email"
          />
        </Card>
      </ListItem>

      <ListItem>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Facebook
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Here contact through facebook!
              </Typography>
            </CardContent>
            <div></div>
          </div>
          <CardMedia
            className={classes.cover2}
            image={"images/fb icon.png"}
            title="facebook"
          />
        </Card>
      </ListItem>

      <ListItem>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Twitter
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Directly contact us by Twitter.!
              </Typography>
            </CardContent>
            <div></div>
          </div>
          <CardMedia
            className={classes.contacticon}
            image={"images/twitter.png"}
            title="Twitter"
          />
        </Card>
      </ListItem>

      <ListItem>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Request Call
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                (866) 739-0820
              </Typography>
            </CardContent>
            <div></div>
          </div>
          <CardMedia
            className={classes.contacticon}
            image={"images/call.png"}
            title="Telephone"
          />
        </Card>
      </ListItem>
    </List>
  );
}

export default ContactPage;
