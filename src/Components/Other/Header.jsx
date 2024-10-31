import React, { useEffect, useState } from "react";
// import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    if (props.data) {
      setUsername(props.data.firstName);
    } else {
      setUsername("Admin");
    }
  }, [props.data]);

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");

  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-lg font-medium text-white px-4 py-2 rounded-xl"
        >
          Log Out
        </button>
    </div>
  );
};

export default Header;
