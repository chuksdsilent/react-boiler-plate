import axios from "axios";

export default class Interceptor {
  intercept() {
    axios.interceptors.request.use(
      function (config) {
        // const loggedIn = token.isTokenLogged();
        const loggedIn = "";
        if (loggedIn) {
          config.headers = {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
          };
          config.headers.Authorization = "Bearer token.getAuthUserToken()";
          console.log(config);
          return config;
        } else {
          console.log("There is no token yet...");
          return config;
        }
      },
      function (err) {
        return Promise.reject(err);
      }
    );
  }
}
