import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/contstants";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(`${BASE_URL}profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(res?.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
