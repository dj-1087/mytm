import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link, useHistory } from "react-router-dom";
import { authService, dbService } from "fbase";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
const GroupList = (props) => {
  let {
    match: {
      params: { group_lecture },
    },
  } = props;
  const classes = useStyles();
  const [groups, setGroup] = useState([]);
  const history = useHistory();
  console.log("prop");
  console.log(props);

  console.log(group_lecture);
  const userObj = authService.currentUser;
  const getGroup = async (group_lecture) => {
    const dbGroup = await dbService.collection("groups").get();
    dbGroup.forEach((document) => {
      if (document.data().info.group_lecture === group_lecture) {
        console.log(group_lecture);
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      } else if (group_lecture === "all") {
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      } else if (
        group_lecture === "myGroups" &&
        document.data().creator.userId == userObj.uid
      ) {
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      }
    });
  };

  const handleApply = (group) => {
    console.log(userObj);
    const applyUser = group.applyUser;
    const applyUserId = applyUser.map((user) => user.userId);
    if (userObj == null) {
      alert("로그인을 해야 신청가능합니다");
      history.go("/sign-in");
    } else if (applyUserId.includes(userObj.uid)) {
      alert("이미 신청한 그룹입니다.");
    } else if (applyUser.length >= group.info.group_numOfMembers) {
      alert("인원 초과");
    } else {
      applyUser.push({
        displayName: userObj.displayName,
        uid: userObj.uid,
      });
      group = { ...group, applyUser: applyUser };
      console.log(group);
      dbService.collection("groups").doc(group.id).set(group);
    }
  };

  useEffect(() => {
    if (group_lecture === null) {
      history.push("/Home");
    }
    getGroup(group_lecture);
  }, []);

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {groups.map((group, index) => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={group.info.group_name} xs={12} md={4}>
            <Card>
              <CardHeader
                title={group.info.group_name}
                subheader={group.info.group_lecture}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                // action={group.info.group_name === "Pro" ? <StarIcon /> : null/}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {group.applyUser.length}명
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {group.info.group_numOfMembers}명
                  </Typography>
                </div>
                <ul>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={group.info.group_type}
                  >
                    그룹 형태: {group.info.group_type}
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={group.info.group_goal}
                  >
                    그룹 목표: {group.info.group_goal}
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={group.info.group_plane}
                  >
                    학업 계획: {group.info.group_plane}
                  </Typography>
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={group.info.group_qualification}
                  >
                    자격 요건: {group.info.group_qualification}
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  id={group.info.group_name}
                  fullWidth
                  variant={"contained"}
                  color={
                    userObj
                      ? group.applyUser
                          .map((user) => user.uid)
                          .includes(userObj.uid)
                        ? "secondary"
                        : "primary"
                      : "primary"
                  }
                  onClick={() => {
                    console.log(userObj);
                    const applyUser = group.applyUser;
                    const applyUserId = applyUser.map((user) => user.uid);
                    console.log(applyUserId);
                    if (userObj == null) {
                      alert("로그인을 해야 신청가능합니다");
                      history.push("/login");
                    } else if (applyUserId.includes(userObj.uid)) {
                      alert("이미 신청한 그룹입니다.");
                    } else if (
                      applyUser.length >= group.info.group_numOfMembers
                    ) {
                      alert("인원 초과");
                    } else {
                      applyUser.push({
                        displayName: userObj.displayName,
                        uid: userObj.uid,
                      });
                      group = { ...group, applyUser: applyUser };
                      console.log(group);
                      dbService.collection("groups").doc(group.id).set(group);
                      alert("신청되었습니다!");
                      history.go(0);
                    }
                  }}
                >
                  {userObj
                    ? group.applyUser
                        .map((user) => user.uid)
                        .includes(userObj.uid)
                      ? "신청완료"
                      : "신청"
                    : "신청"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    // <div>
    //   {groups.map((group) => {
    //     return (
    //       <>
    //         <Link
    //           to={{
    //             pathname: `/studygrouplist/group_name/${group.info.group_name}`,
    //             state: {
    //               groupObj: group,
    //               userObj: userObj,
    //             },
    //           }}
    //         >
    //           <button id={group.info.group_name}>
    //             {group.info.group_name}
    //           </button>
    //         </Link>
    //       </>
    //     );
    //   })}
    // </div>
  );
};

export default GroupList;
