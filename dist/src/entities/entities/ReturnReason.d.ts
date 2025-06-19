export declare class ReturnReason {
    id: string;
    value: string;
    label: string;
    description: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    parentReturnReason: ReturnReason;
    returnReasons: ReturnReason[];
}
