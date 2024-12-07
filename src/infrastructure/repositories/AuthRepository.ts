import { BaseRepository } from "../../base/repository/BaseRepository";
import { IUserLogin, LoginResponse, } from "../../domain/entities/User";

class AuthRepository extends BaseRepository<IUserLogin, LoginResponse> {
  collection = "api/Tenant/login";

  create(data: IUserLogin): Promise<LoginResponse> {
    return super.create(data);
  }

}

export default AuthRepository;
