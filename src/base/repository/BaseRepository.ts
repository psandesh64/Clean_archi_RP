// import { AxiosResponse } from "axios";
import { HttpClient } from "../../infrastructure/http/HttpClient";
import { CURRENT_BASE_URL } from "../../constants/constants";

export interface IBaseRepository<T, R = T> {
  get(id: any): Promise<R>;
  getMany(): Promise<R[]>;
  create(item: T): Promise<R>;
  update(id: any, item: T): Promise<R>;
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

  public async getMany(params?: Record<string,any>): Promise<TResponse[]> {
    const instance = this.createInstance();
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}`,{params});
    return result.data as TResponse[];
  }

  public async update(id: string, item: TRequest): Promise<TResponse> {
    const instance = this.createInstance();
    const result = await instance.put(`${CURRENT_BASE_URL}/${this.collection}/${id}`, item);
    return result as TResponse;
  }

  public async delete(id: any): Promise<TResponse> {
    const instance = this.createInstance();
    const result = await instance.delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`);
    return result as TResponse;
  }
}
// export interface IBaseRepository<T> {
//   get(id: any): Promise<ApiResponse<T>>;
//   getMany(): Promise<ApiResponse<T[]>>;
//   create(item: T): Promise<ApiResponse<T>>;
//   update(id: any, item: T): Promise<ApiResponse<T>>;
//   delete(id: any): Promise<ApiResponse<T>>;
// }

// export class ApiResponse<T> {
//   data?: T;
//   succeeded?: boolean;
//   errors: any;
// }

// const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
//   // console.log("Raw response:", response)
//   const succeed = response ? true : false
//   console.log(response)
//   const result: ApiResponse<any> = {
//     data: response.data || response,
//     succeeded: succeed  , // Check if data exists
//     errors: response.data?.errors || null,  // Default to null if no errors field
//   };

//   return new Promise((resolve, reject) => {
//     if (result.succeeded) {
//       resolve(result); 
//     } else {
//       reject(result);
//     }
//   });
// };

// export abstract class BaseRepository<T> extends HttpClient implements IBaseRepository<T> {
//   protected collection: string | undefined;

//   public async get(id: string) {
//     const instance = this.createInstance();
//     const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/${id}`);
//     return result;
//   }

//   public async getMany() {
//     const instance = this.createInstance();
//     const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/`);
//     return result;
//   }

//   public async create( item: T) {
//     const instance = this.createInstance();
//     const result = await instance.post(`${CURRENT_BASE_URL}/${this.collection}/`, item);
//     return result;
//   }

//   public async update(id: string, item: T) {
//     const instance = this.createInstance();
//     const result = await instance.put(`${CURRENT_BASE_URL}/${this.collection}/${id}`, item);
//     return result;
//   }

//   public async delete(id: any) {
//     const instance = this.createInstance();
//     const result = await instance.delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`);
//     return result;
//   }
// }
// public async delete(id: any): Promise<ApiResponse<T>> {
//   const instance = this.createInstance();
//   const result = await instance.delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`).then(transform);
//   return result as ApiResponse<T>;
// }