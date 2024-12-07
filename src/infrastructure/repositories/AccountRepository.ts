import { BaseRepository } from "../../base/repository/BaseRepository";
import { AllCompanyResponse, AllGroupLedger, AllInventoryResponse, AllMasterResponse, AllPartyAccount, Company, CompanyInfoResponse, GroupLedger, GroupLedgerResponse, IAllLedgers, IAllSubLedgers, ICompanyInfo, IGroupLedger, IInventory, ILedger, IMaster, Inventory, InventoryResponse, IPartyAccount, ISubLedger, Ledger, LedgerResponse, Master, MasterResponse, PartyAccountResponse, SubLedger, SubLedgerResponse } from "../../domain/entities/Account";

class AccountRepository extends BaseRepository<any, any> {

  private setCollection(collection: string) {
    this.collection = collection; // Dynamically set the collection
  }

  createPartyAccount(data: IPartyAccount): Promise<PartyAccountResponse> {
    this.setCollection("accounts")
    return super.create(data);
  }

  getManyPartyAccount():Promise<AllPartyAccount> {
    this.setCollection("accounts")
    return super.getMany()
  }
  deletePartyAccount(id:number):Promise<any>{
    this.setCollection("accounts")
    return super.delete(id)
  }

  createGroupLedger(data: IGroupLedger): Promise<GroupLedgerResponse> {
    this.setCollection("group-ledgers")
    return super.create(data);
  }

  getManyGroupLedgers():Promise<AllGroupLedger> {
    this.setCollection("group-ledgers")
    return super.getMany()
  }

  deleteGroupLedger(id:number):Promise<any>{
    this.setCollection("group-ledgers")
    return super.delete(id)
  }
  
  updateGroupLedger(data:GroupLedger):Promise<GroupLedgerResponse>{
    this.setCollection("group-ledgers")
    return super.update(data)
  }

  createLedger(data: ILedger): Promise<LedgerResponse> {
    this.setCollection("ledgers")
    return super.create(data);
  }

  getManyLedgers():Promise<IAllLedgers> {
    this.setCollection("ledgers")
    return super.getMany()
  }

  deleteLedgers(id:number):Promise<any>{
    this.setCollection("ledgers")
    return super.delete(id)
  }
  
  updateLedgers(data:Ledger):Promise<{message:string;ledger:ILedger}>{
    this.setCollection("ledgers")
    return super.update(data)
  }

  createSubLedger(data: ISubLedger): Promise<SubLedgerResponse> {
    this.setCollection("sub-ledgers")
    return super.create(data);
  }

  getManySubLedgers():Promise<IAllSubLedgers> {
    this.setCollection("sub-ledgers")
    return super.getMany()
  }

  deleteSubLedgers(id:number):Promise<any>{
    this.setCollection("sub-ledgers")
    return super.delete(id)
  }
  
  updateSubLedgers(data:SubLedger):Promise<SubLedgerResponse>{
    this.setCollection("sub-ledgers")
    return super.update(data)
  }

  createCompany(data: ICompanyInfo):Promise<CompanyInfoResponse> {
    this.setCollection("company-info")
    return super.create(data);
  }

  getManyCompany():Promise<AllCompanyResponse> {
    this.setCollection("company-info")
    return super.getMany()
  }

  deleteCompany(id:number):Promise<any>{
    this.setCollection("company-info")
    return super.delete(id)
  }

  updateCompany(data:Company):Promise<CompanyInfoResponse>{
    this.setCollection("company-info")
    return super.update(data)
  }

  createInventory(data:IInventory):Promise<InventoryResponse>{
    this.setCollection("inventories")
    return super.create(data)
  }

  getManyInventory():Promise<AllInventoryResponse> {
    this.setCollection("inventories")
    return super.getMany()
  }

  deleteInventory(id:number):Promise<any>{
    this.setCollection("inventories")
    return super.delete(id)
  }

  updateInventory(data:Inventory):Promise<InventoryResponse>{
    this.setCollection("inventories")
    return super.update(data)
  }

  createMaster(data:IMaster):Promise<MasterResponse>{
    this.setCollection("masters")
    return super.create(data)
  }

  getManyMaster():Promise<AllMasterResponse> {
    this.setCollection("masters")
    return super.getMany()
  }

  deleteMaster(id:number):Promise<any>{
    this.setCollection("masters")
    return super.delete(id)
  }

  updateMaster(data:Master):Promise<MasterResponse>{
    this.setCollection("masters")
    return super.update(data)
  }

}

export default AccountRepository;
