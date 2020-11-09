import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { dbService } from "fbase";

const Detail = () => {
  const history = useHistory();
  const location = useLocation();
  let { groupObj, userObj } = location.state;
  const user = {
    userId: userObj.userObj.uid,
    userName: userObj.userObj.displayName,
  }; //임시
  useEffect(() => {
    console.log(user);
    if (groupObj == undefined) {
      history.push("/");
    }
  }, []);

  const handleApply = () => {
    const applyUser = groupObj.applyUser;
    const userId = applyUser();
    if (userObj.userObj == null) {
      alert("로그인을 해야 신청가능합니다");
      history.push("/login");
    } else if (applyUser.includes(user)) {
      alert("이미 신청한 그룹입니다.");
      history.push("/");
    } else {
      applyUser.push(user);
      groupObj = { ...groupObj, applyUser: applyUser };
      console.log(groupObj);
      dbService.collection("groups").doc(groupObj.id).set(groupObj);
    }
  };

  return (
    <>
      <fieldset>
        <legend>{groupObj.info.group_name}</legend>
        <ul>
          <li>강좌명: {groupObj.info.group_lecture}</li>
          <li>그룹 형태: {groupObj.info.group_type}</li>
          <li>그룹 목표: {groupObj.info.group_goal}</li>
          <li>모집 인원: {groupObj.info.group_numOfMembers}</li>
          <li>그룹 목표: {groupObj.info.group_goal}</li>
          <li>학업 계획: {groupObj.info.group_plane}</li>
          <li>자격 요건: {groupObj.info.group_qualification}</li>
        </ul>
      </fieldset>
      <form>
        <button type="button" onClick={handleApply}>
          신청
        </button>
        <button type="button">문의</button>
      </form>
    </>
  );
};

export default Detail;
