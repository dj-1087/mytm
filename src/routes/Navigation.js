import React, { useState } from "react";
import { HashRouter as Router, Link as RouterLink } from "react-router-dom";
import { toLocalStorage } from "init";
import RoadMap from "components/roadmap/RoadMap";
import { authService } from "fbase";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "@material-ui/core";

export const mainListItems = (
  <div>
    <Router>
      <Link component={RouterLink} to="/roadmap">
        <ListItem button>
          <ListItemIcon>
            <AccountTreeIcon />
          </ListItemIcon>
          <ListItemText primary="로드맵" />
        </ListItem>
      </Link>

      <Link
        component={RouterLink}
        to={{
          pathname: "/studygrouplist/group/all",
          state: {
            group_lecture: "all",
          },
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="스터디/튜터링" />
        </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="공모전/대회" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="마이페이지" />
      </ListItem>

      <Link
        component={RouterLink}
        to={{
          pathname: "/groupform",
          state: {
            group_lecture: "all",
            userObj: authService.currentUser,
          },
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="그룹 생성" />
        </ListItem>
      </Link>
    </Router>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>추천 그룹</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="스터디/튜터링" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="공모전/대회" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="그룹 신청 기록 " />
    </ListItem>
  </div>
);
