import axios from "axios";

// Random User Generator API
const BASEURL = "https://randomuser.me/api/?results=50&inc=name,email,dob,picture,phone&nat=ca";

export default {
  generate: function() {
    return axios.get(BASEURL);
  }
};
