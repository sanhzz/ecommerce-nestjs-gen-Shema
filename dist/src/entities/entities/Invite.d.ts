export declare class Invite {
    id: string;
    email: string;
    accepted: boolean;
    token: string;
    expiresAt: Date;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
