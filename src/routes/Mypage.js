import React from "react";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Profile from "routes/Profile";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

const Mypage = ({ refreshUser, userObj }) => {
  const history = useHistory();
  useEffect(() => {
    if (userObj == undefined) {
      alert("로그인을 하십시오");
      history.push("/login");
    }
  });
  return (
    <>
      <button id="내그룹">
        {" "}
        <AllInboxIcon color="primary" />
        내그룹{" "}
      </button>
      <button id="알림">
        {" "}
        <ErrorOutlineIcon color="primary" />
        알림{" "}
      </button>
      <Link
        to={{
          pathname: `/Profile`,
          status: { refreshUser: refreshUser, userObj: userObj },
        }}
      >
        <button id="내정보">
          <AssignmentIndIcon color="primary" /> 내정보 = 내정보 수정란{" "}
        </button>
      </Link>
    </>
  );
};

export default Mypage;
