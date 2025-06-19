export declare class ApiKey {
    id: string;
    token: string;
    salt: string;
    redacted: string;
    title: string;
    type: string;
    lastUsedAt: Date | null;
    createdBy: string;
    createdAt: Date;
    revokedBy: string | null;
    revokedAt: Date | null;
    updatedAt: Date;
    deletedAt: Date | null;
}
