import axios from "axios";
import { BASE_URL } from "../../config";

const register = async (formValues) => {
  try {
    console.log(">:::::::::::>:>:", formValues);
    const res = await axios.post(
      `${BASE_URL}/teacher/auth/signup`,

      formValues
    );
    return res.data;
  } catch (error) {
    return error.res;
  }
};
const loginUser = async (formValues) => {
  try {
    console.log(formValues, "<<<<<<<loginUser");
    const res = await axios.post(`${BASE_URL}/teacher/auth/login`, formValues);
    console.log(">>::>:>:>:>:>", res);
    return res.data;
  } catch (error) {
    return error.res;
  }
};

export { register, loginUser };
