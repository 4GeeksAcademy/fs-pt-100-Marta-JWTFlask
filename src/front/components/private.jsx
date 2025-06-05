import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import userServices from "../services/userServices";
import "../index.css";

export const Private = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await userServices.getUserInfo();
      if (data) {
        dispatch({ type: "set_user", payload: data });
      } else {
       
        navigate("/");
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");        
    dispatch({ type: "logout" });            
    navigate("/");                      
  };

  return (
    <div className="private-container">
      <h1 className="text-center text-black">Private Zone</h1>
      <h2 className="text-center text-black">
        Welcome {store.user?.name || store.user?.email}
      </h2>
      <p className="text-center text-black">
        This is a private page, only accessible to authenticated users.
      </p>
      <p className="text-center text-black">
        Your email is: {store.user?.email}
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-black px-4 py-2 rounded mt-4 block mx-auto"
      >
        Logout
      </button>
    </div>
  );
};
