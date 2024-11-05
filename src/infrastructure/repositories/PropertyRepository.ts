import { BaseRepository } from "../../base/repository/BaseRepository";
import { IProperty } from "../../domain/entities/Property";

class PropertyRepository extends BaseRepository<IProperty,any> {
  collection = "properties";

  getMany(landlordId?: string) {
    const params = landlordId ?  landlordId  : '';
    return super.getMany(params); // Pass params object to the BaseRepository’s getMany method
  }

  get(id: string) {
    return super.get(id);
  }

  create(data: IProperty) {
    return super.create(data);
  }

  update(id: string, data: IProperty) {
    return super.update(id, data);
  }

  delete(id: string) {
    return super.delete(id);
  }
}

export default PropertyRepository;
