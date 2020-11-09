import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Detail = () => {
  const history = useHistory();
  const location = useLocation();
  const group = location.state.groupObj;

  useEffect(() => {
    if (group == undefined) {
      history.push("/");
    }
  }, []);
  return (
    <>
      {console.log(history)}
      <span>{group}</span>;
    </>
  );
};

export default Detail;
