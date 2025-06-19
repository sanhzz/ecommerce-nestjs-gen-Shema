import { Fulfillment } from "./Fulfillment";
export declare class FulfillmentLabel {
    id: string;
    trackingNumber: string;
    trackingUrl: string;
    labelUrl: string;
    fulfillmentId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    fulfillment: Fulfillment;
}
