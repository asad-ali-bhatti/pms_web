import React from "react";
import Axios from "axios";

const base_url = process.env.REACT_APP_API_URL;

export const getTasks = async project_id => {
  const url = base_url + `/projects/${project_id}/tasks`;
  const { data } = await Axios.get(url);
  return data;
};
