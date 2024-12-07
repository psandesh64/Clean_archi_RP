import axios, { AxiosInstance, AxiosResponse } from "axios";
import { CURRENT_BASE_URL } from "../../constants/constants";
import { getAccessToken, handleRefresh } from "../utils/AuthService";

export abstract class HttpClient {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    this.instance = axios.create({
      baseURL: CURRENT_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.initializeInterceptors();
    return this.instance;
  }

  private initializeInterceptors = () => {
    // Request Interceptor to set Authorization header
    this.instance?.interceptors.request.use(async (config) => {
      const token = await getAccessToken(); // Retrieve access token from cookies
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Response Interceptor to handle token refresh on 401 errors
    this.instance?.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  private handleError = async (error: any) => {
    // Check for 401 errors
    if (error.response?.status === 401) {
      console.warn("Access token expired. Attempting to refresh...");

      const newToken = await handleRefresh();
      if (newToken) {
        // Retry the failed request with the new token
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return this.instance?.request(error.config);
      }
    }

    // Reject the error if refreshing fails or another error occurs
    return Promise.reject(error);
  };
}