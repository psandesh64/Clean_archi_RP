export interface IProductType {
    name: string | null
    isActive:boolean
}

export interface ProductTypeResponse {
    message: string
    productType : IProductType
}

export interface ProductType {
    id: number
    name: string
    isActive: boolean
}

export interface ProductTypes {
    productTypes : ProductType[]
}

export interface IProductGroup {
    name: string | null
    isActive:boolean
}

export interface ProductGroupResponse {
    message: string
    productGroup : IProductType
}

export interface ProductGroup {
    id: number
    name: string
    isActive: boolean
}

export interface ProductGroups {
    productGroups : ProductGroup[]
}

export interface IProductCategories {
    productGroupId: number
    name: string
    notes: string
    productTypeId: number
    margin: string
    isActive: boolean
}

export interface ProductCategoryResponse{
    message: string
    productCategory : IProductCategories
}

export interface ProductCategory {
    id: number
    name: string
    notes: string
    productGroupId: number
    productTypeId: number
    margin: string
    isActive: boolean
}

export interface ProductCategories {
    productCategories : ProductCategory[]
}

export interface IProductUnit {
    name: string
}

export interface ProductUnitResponse {
    message: string
    productUnits : IProductUnit
}

export interface ProductUnit {
    id: number
    name: string
}

export interface ProductUnits {
    productUnits : ProductUnit[]
}

export interface IProduct {
    name: string
    barcode: string
    isExpiredDate: boolean,
    expireDate: string
    description: string
    productGroupId: number
    productCategoryId: number
    supplierId: number|undefined
    discountable: boolean
    discount: string
    discountType: string
    serialed: string
    isActive: boolean
    mrp: number|undefined
    sPrice: number|undefined
    unitId: number|undefined
}

export interface ProductResponse {
    message: string
    product: IProduct
}

export interface Product{
    id: number
    name: string
    barcode: string
    isExpiredDate: boolean,
    expireDate: string
    description: string
    productGroupId: number
    productCategoryId: number
    supplierId: number|undefined
    discountable: boolean
    discount: string
    discountType: string
    serialed: string
    isActive: boolean
    mrp: number|undefined
    sPrice: number|undefined
    productTypeId: number
    unitId: number|undefined
}

export interface Products {
    products: Product[]
}