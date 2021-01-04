import axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import IHttpService from './IHttpService';

class HttpService implements IHttpService {
  constructor() {
    axios.defaults.baseURL = `${Config.API_HOST}`;
    axios.defaults.timeout = 15000;
  }

  public get(
    uri: string,
    params?: object,
    config?: AxiosRequestConfig,
  ): AxiosPromise<any> {
    const defaultConfig = this.getDefaultConfig(config);
    defaultConfig.params = params;
    return axios.get(uri, defaultConfig);
  }

  public post(uri: string, body: any, config?: AxiosRequestConfig) {
    const defaultConfig = this.getDefaultConfig(config);
    return axios.post(uri, body, defaultConfig);
  }

  public put(uri: string, body: any, config?: AxiosRequestConfig) {
    const defaultConfig = this.getDefaultConfig(config);
    return axios.put(uri, body, defaultConfig);
  }

  public patch(uri: string, body: any) {
    const defaultConfig = this.getDefaultConfig();
    return axios.patch(uri, body, defaultConfig);
  }

  public delete(uri: string) {
    const defaultConfig = this.getDefaultConfig();
    return axios.delete(uri, defaultConfig);
  }

  private getDefaultConfig = (config?: AxiosRequestConfig) => {
    if (config) {
      config.headers = {...config.headers};
      return config;
    }
    return {};
  };
}

export default new HttpService();
