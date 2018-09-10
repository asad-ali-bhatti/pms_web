import Axios from "axios";

const url = process.env.REACT_APP_API_URL + "/projects";

const getProjects = async () => {
  const projects = await Axios.get(url);
  console.log(projects);
  return projects;
};

export default getProjects;
