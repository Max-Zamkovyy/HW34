import { useContext } from "react";
import { Context } from "../App";

const Articles = () => {
  const { user, setUser } = useContext(Context);
  const handleChange =()=> {
    setUser('Random');
  };

  return (
    <div>
      <div>Articles page {user}</div>
      <button onClick={handleChange}>Change name</button>
    </div>
  );
};

export default Articles;
