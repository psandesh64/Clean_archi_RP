export interface IPurchase {
    supplierId: number;
    date: string;
    billDate: string; 
    voucherNo: string;
    billNo: string;
    remarks: string;
    taxableAmount: number;
    tax: number;
    discount: number;
    paymentID: number; 
    createdAt: string; 
    updatedAt: string; 
}

export interface PurchaseResponse {
    message: string
    purchase: IPurchase
}

export interface Purchase {
    id: number;
    supplierId: number;
    date: string;
    billDate: string; 
    voucherNo: string;
    billNo: string;
    remarks: string;
    taxableAmount: number;
    tax: number;
    discount: number;
    paymentID: number; 
    createdAt: string; 
    updatedAt: string; 
}

export interface AllPurchase {
    purchases: Purchase[]
}

export interface IPurchaseDetail {
    purchaseId: number
    productID: number
    quantity: number
    unitCost: number
    discount: number
    remarks: string
    hscode: string
}

export interface PurchaseDetailResponse {
    message: string
    purchaseDetail: IPurchase
}

export interface PurchaseDetail {
    id:number
    purchaseId: number
    productID: number
    quantity: number
    unitCost: number
    discount: number
    remarks: string
    hscode: string
}

export interface AllPurchase {
    purchaseDetails: PurchaseDetail[]
}

export interface IOrder {

    customerID: string
    orderDate: string
    totalAmount: number
    orderStatus: string
    paymentStatus: string
    createdAt: string
    updatedAt: string

}

export interface OrderResponse {
    message: string
    order: IOrder
}

export interface Order {
    orderID: number
    customerID: string
    orderDate: string
    totalAmount: number
    orderStatus: string
    paymentStatus: string
    createdAt: string
    updatedAt: string
}

export interface AllOrder {
    orders: Order[]
}

export interface ISales {
    partyId: number;
    voucherNo: string;
    invoiceNo: string;
    remarks: string;
    taxableAmount: number;
    tax: number;
    discount: number;
    paymentId: number;
    createdAt: string;
    updatedAt: string;
}

export interface SalesResponse {
    message: string
    sales: ISales
}
export interface Sales {
    id: number;
    partyId: number;
    voucherNo: string;
    invoiceNo: string;
    remarks: string;
    taxableAmount: number;
    tax: number;
    discount: number;
    paymentId: number;
    createdAt: string;
    updatedAt: string;
}
export type AllSales = Sales[];

export interface ISalesDetail {
    productID: number
    quantity: number
    unitPrice: number
    discount: number
    remarks: string
    hscode: string
}

export interface SalesDetailResponse {
    message: string
    salesDetails: ISalesDetail
}

export interface SalesDetail {
    id: number
    productID: number
    quantity: number
    unitPrice: number
    discount: number
    remarks: string
    hscode: string
}

export type AllSalesDetail = SalesDetail[]

export interface ISalesReturn {
    saleId: number
    productId: number
    returnDate: string
    returnInvoiceNo: string
    returnedQuantity: number
    returnReason: string
    taxableAmount: number
    discount: number
}

export interface SalesReturnResponse {
    message: string
    salesReturn: ISalesReturn
}

export interface SalesReturn {
    id: number
    saleId: number
    productId: number
    returnDate: string
    returnInvoiceNo: string
    returnedQuantity: number
    returnReason: string
    taxableAmount: number
    discount: number
}

export type AllSalesReturn = SalesReturn[]

export interface IDamageLoss {
    productID: number
    qty: number
    remarks: string
    rate: number
}

export interface DamageLossResponse {
    message: string
    damageLoss:IDamageLoss
}

export interface DamageLoss {
    id: number
    productId: number
    qty: number
    remarks: string
    rate: number
}

export interface AllDamageLossResponse {
    damageLosses: DamageLoss[]
}