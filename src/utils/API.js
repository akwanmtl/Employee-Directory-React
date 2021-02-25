import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=30&inc=name,email,dob,picture,cell";

export default {
  generate: function() {
    return axios.get(BASEURL);
  }
};
