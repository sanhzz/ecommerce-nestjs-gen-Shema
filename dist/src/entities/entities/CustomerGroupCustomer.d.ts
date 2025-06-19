import { CustomerGroup } from "./CustomerGroup";
import { Customer } from "./Customer";
export declare class CustomerGroupCustomer {
    id: string;
    customerId: string;
    customerGroupId: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string | null;
    deletedAt: Date | null;
    customerGroup: CustomerGroup;
    customer: Customer;
}
