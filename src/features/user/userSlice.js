import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getTokenFromLocalStorage = () => localStorage.getItem("token") || null;

const defaultState = {
  token: getTokenFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, { payload }) => {
      const token = `Bearer ${payload.data.token}`;
      state.token = token;
      localStorage.setItem("token", token);
    },
    logOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      toast.success("با موفقیت از سیستم خارج شدید");
    },
  },
});

export const { loginUser, logOut } = userSlice.actions;
export default userSlice.reducer;
