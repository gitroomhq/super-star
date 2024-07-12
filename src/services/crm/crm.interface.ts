export interface CrmInterface {
  addDeal(name: string, email: string): Promise<void>;
}
