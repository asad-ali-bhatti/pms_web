import Axios from "axios";

const base_url = process.env.REACT_APP_API_URL;

const token = () => {
  return window.localStorage.getItem("token");
};

export const getProjects = async () => {
  const url = base_url + "/projects";
  const projects = await Axios.get(url);
  console.log(projects);
  return projects;
};

export const deleteProject = async project_id => {
  const url = base_url + `/projects/${project_id}`;
  const { data } = await Axios.delete(url, {
    headers: { Authorization: `Bearer ${token()}` }
  });
  return data;
};
