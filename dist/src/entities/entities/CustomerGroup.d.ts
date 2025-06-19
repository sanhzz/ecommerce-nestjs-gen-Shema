import { CustomerGroupCustomer } from "./CustomerGroupCustomer";
export declare class CustomerGroup {
    id: string;
    name: string;
    metadata: object | null;
    createdBy: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    customerGroupCustomers: CustomerGroupCustomer[];
}
