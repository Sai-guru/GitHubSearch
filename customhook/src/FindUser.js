// in this ,the user will be found then by that we will access their details;
// while typing in the box also get displayed from here only;
// before the stage of completion of the profile getting ;
import { useState } from "react";
import GitHubUser from "./GitHubUser";

const FindUser = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="find-user">
      <h1>Find User</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
      </form>

      <div className="result">
        {userName ? 
          <GitHubUser username={userName} /> : 
          <p>Please Initiate a Search!!!</p>
        }
      </div>
    </div>
  );
};

export default FindUser;