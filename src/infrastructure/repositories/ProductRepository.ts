import { BaseRepository } from "../../base/repository/BaseRepository";
import { IProductType, ProductTypes, ProductTypeResponse, ProductGroupResponse, ProductGroups, IProductGroup, IProductCategories, ProductCategoryResponse, ProductCategories, IProductUnit, ProductUnitResponse, ProductUnits, IProduct, ProductResponse, Products, ProductUnit, ProductType, ProductGroup, ProductCategory } from "../../domain/entities/Product";

class ProductRepository extends BaseRepository<any, any> {
  // collection = "product-types";
  private setCollection(collection: string) {
    this.collection = collection; // Dynamically set the collection
  }

  createType(data: IProductType): Promise<ProductTypeResponse> {
    this.setCollection("product-types")
    return super.create(data);
  }

  getManyTypes():Promise<ProductTypes> {
    this.setCollection("product-types")
    return super.getMany()
  }

  deleteType(id: number): Promise<any> {
    this.setCollection("product-types")
    return super.delete(id);
  }

  updateType(data: ProductType): Promise<ProductTypeResponse> {
    this.setCollection("product-types")
    return super.update(data);
  }

  createGroup(data: IProductGroup): Promise<ProductGroupResponse> {
    this.setCollection("product-groups")
    return super.create(data);
  }

  getManyGroups():Promise<ProductGroups> {
    this.setCollection("product-groups")
    return super.getMany()
  }

  deleteGroup(id: number): Promise<any> {
    this.setCollection("product-groups")
    return super.delete(id);
  }
  
  updateGroup(data: ProductGroup): Promise<ProductGroupResponse> {
    this.setCollection("product-groups")
    return super.update(data);
  }

  createUnit(data: IProductUnit): Promise<ProductUnitResponse> {
    this.setCollection("product-units")
    return super.create(data);
  }

  getManyUnit():Promise<ProductUnits> {
    this.setCollection("product-units")
    return super.getMany()
  }

  deleteUnit(id: number): Promise<any> {
    this.setCollection("product-units")
    return super.delete(id);
  }
  updateUnit(data: ProductUnit): Promise<ProductUnitResponse> {
    this.setCollection("product-units")
    return super.update(data);
  }

  createCategories(data: IProductCategories): Promise<ProductCategoryResponse> {
    this.setCollection("product-categories")
    return super.create(data);
  }

  getManyCategories():Promise<ProductCategories> {
    this.setCollection("product-categories")
    return super.getMany()
  }

  deleteCategory(id: number): Promise<any> {
    this.setCollection("product-categories")
    return super.delete(id);
  }

  updateCategory(data: ProductCategory): Promise<ProductUnitResponse> {
    this.setCollection("product-categories")
    return super.update(data);
  }

  createProduct(data:IProduct): Promise<ProductResponse> {
    this.setCollection("product")
    return super.create(data)
  }

  getManyProduct():Promise<Products>{
    this.setCollection("product")
    return super.getMany()
  }

  deleteProduct(id: number): Promise<any> {
    this.setCollection("product")
    return super.delete(id);
  }

}

export default ProductRepository;
