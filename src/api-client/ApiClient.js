import axios from "axios";

var ApiClient = axios.create({
  baseURL: "http://localhost/ABprojekt/api.php/",
  headers: {
    "Content-Type": "application/json"
  }
});

export default ApiClient;
