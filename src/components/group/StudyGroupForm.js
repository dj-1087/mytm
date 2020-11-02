import React from "react";
import lectures from "../roadmap/lectures"

const StudyGroupForm = () => {
  const lecture = lectures;
  console.log(typeof(lecture));
  return (
    <div>
      <form method="post">
        <label for="group_type">그룹 속성</label>
        <select id="group_type" name="group_type">
          <option value="study">스터디</option>
          <option value="tutoring">튜터링</option>
        </select>

        <label for="group_lecture">강좌명</label>


        <label for="group_name">그룹명</label>
        <label for="group_numOfMember">인원수</label>
        <label for="group_plan">학업 계획</label>
        <label for="group_goal">그룹 목표</label>
        <label for="group_qualification">조건</label>

      </form>
    </div>
  );
}

export default StudyGroupForm;