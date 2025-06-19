import { CustomerAddress } from "./CustomerAddress";
import { CustomerGroupCustomer } from "./CustomerGroupCustomer";
export declare class Customer {
    id: string;
    companyName: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    hasAccount: boolean;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    createdBy: string | null;
    customerAddress: CustomerAddress;
    customerGroupCustomers: CustomerGroupCustomer[];
}
