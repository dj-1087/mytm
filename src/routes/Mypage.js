import React from "react";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Mypage = () => { 
  return (
    <>
    <button  id='내그룹' > <AllInboxIcon color="primary" />내그룹 </button>
    <button id='알림'> <ErrorOutlineIcon color="primary"/>알림 </button>
    <button  id='내정보'><AssignmentIndIcon color="primary"/> 내정보 = 내정보 수정란 </button>
    </>);
    

  


}

export default Mypage;