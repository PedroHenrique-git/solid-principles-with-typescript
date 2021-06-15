import * as Customer from "./interfaces/customer_protocol";

export class IndividualCustomer implements Customer.IndivialCustomer {
  public firstName: string;
  public lastName: string;
  public cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements Customer.EnterpriceCustomer {
  public enterPriseName: string;
  public cnpj: string;

  constructor(cnpj: string, name: string) {
    this.enterPriseName = name;
    this.cnpj = cnpj;
  }
}
