import React, { useState, useEffect } from "react";
import { dbService } from "fbase";

const StudyGroupList = () => {
  const [groups, setGroup] = useState([]);
  const getGroup = async () => {
    const dbGroup = await dbService.collection("groups").get();
    dbGroup.forEach((document) => {
      const groupObject = {
        ...document.data(),
        id: document.id,
      };
      setGroup((prev) => [groupObject, ...prev]);
    });
  };
  useEffect(() => {
    getGroup();
    /*dbService.collection("groups").onSnapshot((snapshot) => {
      const groupArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGroups(groupArray);
    });*/
  }, []);

  return (
    <div>
      {groups.map((group) => (
        <fieldset key={group.id}>
          <legend>{group.info.group_name}</legend>
          <ul>
            <li>그룹속성: {group.info.group_type}</li>
            <li>강좌명: {group.info.group_lecture}</li>
            <li>모집인원: {group.info.group_numOfMembers}</li>
            <li>그룹 목표: {group.info.group_goal}</li>
            <li>학업계획: {group.info.group_plane}</li>
            <li>자격요건: {group.info.group_qualification}</li>
          </ul>
        </fieldset>
      ))}
    </div>
  )
}

export default StudyGroupList;