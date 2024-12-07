import { BaseRepository } from "../../base/repository/BaseRepository";
import { AllDamageLossResponse, AllOrder, AllPurchase, AllSales, AllSalesDetail, AllSalesReturn, DamageLoss, DamageLossResponse, IDamageLoss, IOrder, IPurchase, IPurchaseDetail, ISales, ISalesDetail, ISalesReturn, Order, OrderResponse, Purchase, PurchaseDetail, PurchaseDetailResponse, PurchaseResponse, Sales, SalesDetail, SalesDetailResponse, SalesResponse, SalesReturn, SalesReturnResponse } from "../../domain/entities/Agency";

class AgencyRepository extends BaseRepository<any, any> {

  private setCollection(collection: string) {
    this.collection = collection; // Dynamically set the collection
  }

  createPurchase(data: IPurchase): Promise<PurchaseResponse> {
    this.setCollection("purchases")
    return super.create(data);
  }

  getManyPurchase():Promise<AllPurchase> {
    this.setCollection("purchases")
    return super.getMany()
  }

  deletePurchase(id: number): Promise<any> {
    this.setCollection("purchases")
    return super.delete(id);
  }

  updatePurchase(data: Purchase): Promise<{message:string;purchase:{purchaseDto:Purchase}}> {
    this.setCollection("purchases")
    return super.update(data);
  }

  createPurchaseDetail(data: IPurchaseDetail): Promise<PurchaseDetailResponse> {
    this.setCollection("purchase-details")
    return super.create(data);
  }

  getManyPurchaseDetail():Promise<AllPurchase> {
    this.setCollection("purchase-details")
    return super.getMany()
  }

  deletePurchaseDetail(id: number): Promise<any> {
    this.setCollection("purchase-details")
    return super.delete(id);
  }

  updatePurchaseDetail(data: PurchaseDetail): Promise<PurchaseDetailResponse> {
    this.setCollection("purchase-details")
    return super.update(data);
  }

  createOrders(data: IOrder): Promise<OrderResponse> {
    this.setCollection("orders")
    return super.create(data);
  }

  getManyOrder():Promise<AllOrder> {
    this.setCollection("orders")
    return super.getMany()
  }

  deleteOrder(id: number): Promise<any> {
    this.setCollection("orders")
    return super.delete(id);
  }

  updateOrder(data: Order): Promise<OrderResponse> {
    this.setCollection("orders")
    return super.update(data);
  }

  createSales(data: ISales): Promise<SalesResponse> {
    this.setCollection("sales")
    return super.create(data);
  }

  getManySales():Promise<AllSales> {
    this.setCollection("sales")
    return super.getMany()
  }

  deleteSales(id: number): Promise<any> {
    this.setCollection("sales")
    return super.delete(id);
  }

  updateSales(data: Sales): Promise<SalesResponse> {
    this.setCollection("sales")
    return super.update(data);
  }

  createSalesDetail(data: ISalesDetail): Promise<SalesDetailResponse> {
    this.setCollection("sales-details")
    return super.create(data);
  }

  getManySalesDetail():Promise<AllSalesDetail> {
    this.setCollection("sales-details")
    return super.getMany()
  }

  deleteSalesDetail(id: number): Promise<any> {
    this.setCollection("sales-details")
    return super.delete(id);
  }

  updateSalesDetail(data: SalesDetail): Promise<SalesDetailResponse> {
    this.setCollection("sales-details")
    return super.update(data);
  }

  createSalesReturn(data: ISalesReturn): Promise<SalesReturnResponse> {
    this.setCollection("sales-return")
    return super.create(data);
  }

  getManySalesReturn():Promise<AllSalesReturn> {
    this.setCollection("sales-return")
    return super.getMany()
  }

  deleteSalesReturn(id: number): Promise<any> {
    this.setCollection("sales-return")
    return super.delete(id);
  }

  updateSalesReturn(data: SalesReturn): Promise<SalesReturnResponse> {
    this.setCollection("sales-return")
    return super.update(data);
  }

  createDamageLoss(data: IDamageLoss): Promise<DamageLossResponse> {
    this.setCollection("damage-losses")
    return super.create(data);
  }

  getManyDamageLoss():Promise<AllDamageLossResponse> {
    this.setCollection("damage-losses")
    return super.getMany()
  }

  deleteDamageLoss(id: number): Promise<any> {
    this.setCollection("damage-losses")
    return super.delete(id);
  }

  updateDamageLoss(data: DamageLoss): Promise<DamageLossResponse> {
    this.setCollection("damage-losses")
    return super.update(data);
  }

}

export default AgencyRepository;
