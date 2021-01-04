import { AxiosPromise, AxiosRequestConfig } from 'axios'

export interface CustomError {
  type: string
  message: string
}

export interface IHttpService {
  get(uri: string, params?: object, headers?: object): AxiosPromise<any>
  post(uri: string, body?: any, headers?: AxiosRequestConfig): AxiosPromise<any>
  put(uri: string, body?: any, headers?: AxiosRequestConfig): AxiosPromise<any>
  delete(uri: string): AxiosPromise<any>
}

export default IHttpService
