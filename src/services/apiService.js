import axios, { Axios } from "axios";
export class Apiservice {
  constructor() {
    this.api_connector = Axios;
    this.requestConfig = {
      url: "",
      method: null,
      baseURL: "",
      transformRequest: [],
      transformResponse: [],
      headers: null,
      params: null,
      paramsSerializer: "",
      data: null,
    };
    this.api_connector = axios.create({
      baseURL:  "https://script.google.com",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  setRequestHeaders(header) {
    if (this?.requestConfig.headers) {
      this.requestConfig.headers = { ...this.requestConfig.headers, ...header };
    } else {
      this.requestConfig.headers = header;
    }

    return this;
  }
  async get(url) {
    try {
      let result = await this.api_connector.get(url, this.requestConfig);
      this.resetRequestConfig();
      return result.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async post(url, data, isFormData) {
    // handle content type application/json
    let postData = data;

    if (isFormData) {
      //configure header to be Content-Type = 'multipart/form-data'
      postData = new FormData();
      for (const key in data) {
        postData.append(key, data[key]);
      }

      this.setRequestHeaders({ "Content-Type": "multipart/form-data" });
    }

    try {
      let result = await this.api_connector.post(
        url,
        postData,
        this.requestConfig
      );
      this.resetRequestConfig();

      return result.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  handleErrors(error) {
    this.resetRequestConfig();
    throw error;
  }

  changeBaseURL(url) {
    this.requestConfig.baseURL = url;
    return this;
  }

  resetRequestConfig() {
    this.requestConfig = {};
  }
}

