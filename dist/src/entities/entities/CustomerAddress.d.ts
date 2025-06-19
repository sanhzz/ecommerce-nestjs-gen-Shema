import { Customer } from "./Customer";
export declare class CustomerAddress {
    id: string;
    customerId: string;
    addressName: string | null;
    isDefaultShipping: boolean;
    isDefaultBilling: boolean;
    company: string | null;
    firstName: string | null;
    lastName: string | null;
    address_1: string | null;
    address_2: string | null;
    city: string | null;
    countryCode: string | null;
    province: string | null;
    postalCode: string | null;
    phone: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    customer: Customer;
}
