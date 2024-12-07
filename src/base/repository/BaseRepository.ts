// import { AxiosResponse } from "axios";
import { HttpClient } from "../../infrastructure/http/HttpClient";
import { CURRENT_BASE_URL } from "../../constants/constants";

export interface IBaseRepository<T, R = T> {
  get(id: any): Promise<R>;
  getMany(): Promise<R[]>;
  create(item: T): Promise<R>;
  update( item: T, id?: any): Promise<R>;
  delete(id: any): Promise<R>;
}

export abstract class BaseRepository<TRequest, TResponse> extends HttpClient implements IBaseRepository<TRequest, TResponse> {
  protected collection: string | undefined;

  public async create(item: TRequest): Promise<TResponse> {
    const instance = this.createInstance();
    const result = await instance.post(`${CURRENT_BASE_URL}/${this.collection}`, item);
    return result as TResponse;  // Cast the response to the expected response type
  }
  public async get(id: string): Promise<TResponse> {
    const instance = this.createInstance();
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/${id}`);
    return result as TResponse;
  }

  public async getMany(params?: Record<string,any>): Promise<any> {
    const instance = this.createInstance();
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}`,{params});
    return result;
  }

  public async update(item: TRequest, id?: string, ): Promise<TResponse> {
    const instance = this.createInstance();
    if (id){
      const result = await instance.put(`${CURRENT_BASE_URL}/${this.collection}/${id}`, item);
      return result as TResponse;
    } else {
      const result = await instance.put(`${CURRENT_BASE_URL}/${this.collection}`, item);
      return result as TResponse;
    }
  }

  public async delete(id: any): Promise<TResponse> {
    const instance = this.createInstance();
    const result = await instance.delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`);
    return result as TResponse;
  }
}