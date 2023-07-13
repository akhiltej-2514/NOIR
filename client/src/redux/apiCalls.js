import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { delCart } from "./cartRedux";
import {delCartProduct} from "./cartRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const lgout = (dispatch) => {
  dispatch(logout());
};

export const clearCart = (dispatch) => {
  dispatch(delCart());
};

export const clearCartProduct = (dispatch, product) => {
  dispatch(delCartProduct(product));
};


