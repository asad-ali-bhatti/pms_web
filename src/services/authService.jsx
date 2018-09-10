import Axios from "axios";

const getToken = async (email, password) => {
  const url = process.env.REACT_APP_API_HOST + "/user_token";
  const { data } = await Axios.post(url, {
    auth: { email: email, password: password }
  });
  return data.jwt;
};

export default getToken;
