import axios from "axios";

var ApiClient = axios.create({
  baseURL: "http://localhost/ABprojekt/test.php/",
  headers: {
    "Content-Type": "application/json"
  }
});

export default ApiClient;
