import React, { useState, useEffect } from "react";
import { elements } from "components/roadmap/lectures"
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { Button} from "@material-ui/core";
import { dbService } from "fbase";
import { HashRouter as Router , Link } from "react-router-dom";
//그룹 폼 텍스트 데이터를 DB에 저장 DB에서 특정 데이터를 반환 하는 것 구현

const StudyGroupForm = (props) => {
  const {history} = props;
  const lectures = elements.map((lecture) => (lecture.name));
  const [studyGroup, setStudyGroup] = useState({
    group_name: '미등록',
    group_lecture: lectures[0],
    group_type: '스터디',
    group_numOfMembers: '0',
    group_goal: '미등록',
    group_plane: '미등록',
    group_qualification: '미등록'
  });
  /*studyGroup.propTypes = {
    group_name: PropTypes.string.isRequired,
    group_lecture: PropTypes.string.isRequired,
    group_type: PropTypes.string.isRequired,
    group_numOfMembers: PropTypes.number.isRequired,
    group_goal: PropTypes.string.isRequired,
    group_plane: PropTypes.string.isRequired,
    group_qualification: PropTypes.string
  }*/

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
    await dbService.collection("groups").add({ 
      info: studyGroup,
      createdAt: Date.now(),
      creatorId: "null"/*userObj.uid*/
    });
    setStudyGroup("");
    history.push("/");
  };

  const onChange = e => {
    console.log(e.target.name);
    setStudyGroup({
      ...studyGroup,
      [e.target.name]: e.target.value
    });
  };

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
              <input type="text" id="group_name" name="group_name" onChange={onChange} required/>
            </div>
            <div>
              <label for="group_numOfMembers">인원수</label>
              <input type="text" id="group_numOfMembers" name="group_numOfMembers" onChange={onChange} required/>
            </div>
            <div>
              <label for="group_goal">그룹 목표</label>
              <input type="text" id="group_goal" name="group_goal" onChange={onChange} required/>
            </div>
            <div>
              <label for="group_plane">학업계획</label>
              <input type="text" id="group_plane" name="group_plane" onChange={onChange} required/>
            </div>
            
            <label for="group_qualification">자격 요건</label>
            <input type="text" id="group_qualification" name="group_qualification" onChange={onChange} required/>
          </div>
          <Router>
            <Link to="/components/roadmap/lectures">
            <Button variant="contained" id = '그룹생성취소' endIcon={<DeleteIcon />} size="small">
              취소
            </Button> 
            </Link>
            <Button input variant="contained" id="제출" type="submit" startIcon={<SaveIcon />} size="small">
              저장
            </Button>
          </Router>

          <input id="제출" type="submit" />
        
        </form>
      </div>
    </>
  );
}

/*저 107번째줄 하는거 없는애면 102줄 버튼으로 대체 가능?*/ 
export default StudyGroupForm;