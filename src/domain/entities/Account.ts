export interface IGroupLedger {
    name: string
    type: string
}

export interface GroupLedgerResponse {    
    message: string
    groupLedger: IGroupLedger
}

export interface GroupLedger {
    id: number
    name: string
    type: string
}

export interface AllGroupLedger {
    groupLedgers: GroupLedger[]
}

export interface ILedger {
    name: string
    groupLedgerId: number
}

export interface LedgerResponse {    
    message: string
    ledgers: ILedger
}

export interface Ledger {
    id: number
    name: string
    groupLedgerId: number
}

export interface IAllLedgers {
    ledgers: {
        id: number
        name: string
        groupLedgerId: number
        groupLedgerName: string
    }[]
}

export interface IGroupLedger {
    name: string
    type: string
}

export interface ISubLedger {
    name: string;
    ledgerId: number;
}

export interface SubLedgerResponse {    
    message: string
    subLedger: ISubLedger
}

export interface SubLedger {
    id: number
    name: string
    ledgerId: number
}

export interface IAllSubLedgers {
    subLedgers: SubLedger[]
}

export interface ICompanyInfo {
    companyName: string
    ownerName: string
    designation: string
    contactInfo: string
    contactPerson: string
    designationContactPerson: string
    contactInfoContactPerson: string
}

export interface CompanyInfoResponse {
    message: string
    companyInfo: ICompanyInfo
}

export interface Company {
    id: number
    companyName: string
    ownerName: string
    designation: string
    contactInfo: string
    contactPerson: string
    designationContactPerson: string
    contactInfoContactPerson: string
}

export interface AllCompanyResponse {
    companyInfoList: Company[]
}

export interface IPartyAccount {
    subLedgerId: number | undefined,
    accountNumber: string
    name: string
    address: string
    contactInfo: string
    email: string
    panNumber: string
    backUpContact: string
    creditLimit: number | undefined
    creditDays: string
    companyInfoId: number | undefined
    isTaxable: boolean
    unitId: number | undefined
}

export interface PartyAccountResponse {
    message: string
    account: IPartyAccount
}

export interface PartyAccount {
    id: number
    subLedgerId: number | undefined,
    accountNumber: string
    name: string
    address: string
    contactInfo: string
    email: string
    panNumber: string
    backUpContact: string
    creditLimit: number | undefined
    creditDays: string
    companyInfoId: number | undefined
    isTaxable: boolean
    unitId: number | undefined
}

export interface AllPartyAccount {
    accounts: PartyAccount[]
}

export interface IInventory {
    productId: number
    stock: number
}

export interface InventoryResponse {
    message: string
    inventory: IInventory
}

export interface Inventory {
    id: number
    productId: number
    stock: number
}

export interface AllInventoryResponse {
    inventories: Inventory[]
}

export interface IMaster {
    voucher_No: number
    voucherType: string
    userId: string
}

export interface MasterResponse {
    message: string
    master: IMaster
}

export interface Master {
    id: number
    voucher_No: number
    voucherType: string
    userId: string
}

export interface AllMasterResponse {
    masters: Master[]
}