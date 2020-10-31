import React, { useState } from "react";
import {dbService} from "fbase";

const Home = () => {
  const [group, setGroup] = useState("");
  
  const onSubmit = async(event) => {
    event.preventDefault();
    await dbService.collection("groups").add({
      group,
      createdAt: Date.now()
    });
    setGroup("");
  };
  const onChange = (event) => {
    const {target:{value}} = event;
    setGroup(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={group} onChange={onChange} type="text" placeholder="GroupName" maxLength={20} />
        <input type="submit" value="mkGroup" />
      </form>
    </div>
  )
}
export default Home;