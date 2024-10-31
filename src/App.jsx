import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashborad from "./Components/Dashborad/AdminDashborad"
import EmployeeDashborad from "./Components/Dashborad/EmployeeDashborad"
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(userData);
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@ems.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else if (email === "employee1/5@ems.com") {
        alert(
          "Use employee1@ems.com to employee5@ems.com Not employee1/5@ems.com"
        );
      }
        else {
        alert("Invalid email or password");
        }
        
      }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashborad changeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashborad changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
