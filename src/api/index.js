import config from "../config";
import ApiUtils from "./ApiUtils";
export default {
  getPlanets: function () {
    const url = config.baseUrl + "planets"
    return fetch(
      url
    )
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(e => e);
  },
};
