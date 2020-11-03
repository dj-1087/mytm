import React, { useState } from "react";
import { elements } from "components/roadmap/lectures"
//import PropTypes from "prop-types";

import { dbService } from "fbase";
//그룹 폼 텍스트 데이터를 DB에 저장 DB에서 특정 데이터를 반환 하는 것 구현

const StudyGroupForm = () => {
  const [studyGroup, setStudyGroup] = useState({
    group_name: 'none',
    group_lecture: 'none',
    group_type: 'none',
    group_numOfMembers: '0',
    group_goal: 'none',
    group_plane: 'none',
    group_qualification: 'none'
  });


  const lectures = elements.map((lecture) => (lecture.name));
  const mkOptions = (lectures) => {
    const options = [];
    for (let index = 0; index < lectures.length; index++) {
      const option = <option value={lectures[index]}>{lectures[index]}</option>;
      options.push(option);
    }
    return (options)
  }


  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("groups").add({ ...studyGroup, createdAt: Date.now(), });
    setStudyGroup("");
  };




  const onChange = e => {
    console.log(e.target.name);
    setStudyGroup({
      ...studyGroup,
      [e.target.name]: e.target.value
    });
  };
  console.log(lectures);



  return (
    <>
      <div>
        <form id='groupMake' onSubmit={onSubmit} method="post">
          <div >
            <label id='그룹속성' for="group_type">그룹 속성</label>
            <select name="group_type" id="group_type" onChange={onChange}>
              <option value="study" >스터디</option>
              <option value="tutoring">튜터링</option>
            </select>
          </div>
         
          <div>
            <label id='강좌명' for="group_lecture">강좌명</label>
            <select name="group_lecture" id="group_lecture" onChange={onChange}>
              {mkOptions(lectures)}
            </select>
            
            <div>
              <label for="group_name">그룹명</label>
              <input type="text" id="group_name" name="group_name" onChange={onChange} />
            </div>
            <div>
              <label for="group_numOfMembers">인원수</label>
              <input type="text" id="group_numOfMembers" name="group_numOfMembers" onChange={onChange} />
            </div>
            <div>
              <label for="group_goal">그룹 목표</label>
              <input type="text" id="group_goal" name="group_goal" onChange={onChange} />
            </div>
            <div>
              <label for="group_plane">학업계획</label>
              <input type="text" id="group_plane" name="group_plane" onChange={onChange} />
            </div>
            

            <div>

            </div>
            <label for="group_qualification">자격 요건</label>
            <input type="text" id="group_qualification" name="group_qualification" onChange={onChange} />
          </div>
          <input id="제출" type="submit" />
        </form>
      </div>
    </>
  );
}
export default StudyGroupForm;