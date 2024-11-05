import { BaseRepository } from "../../base/repository/BaseRepository";
import { IUserLogin, LoginResponse, } from "../../domain/entities/User";

class AuthRepository extends BaseRepository<IUserLogin, LoginResponse> {
  collection = "account/login";

  create(data: IUserLogin): Promise<LoginResponse> {
    return super.create(data);
  }

}

export default AuthRepository;
