import React, {useEffect} from "react";

const Detail = (props) => {
  useEffect(() => {
    if (group_name === undefined) {
      history.push("/");
    }
  },[]);
  const {group_name, history} = props;
  return (
    <>
    {console.log(group_name)}
    <span>{group_name}</span>;
    </>
  );
} 

export default Detail;