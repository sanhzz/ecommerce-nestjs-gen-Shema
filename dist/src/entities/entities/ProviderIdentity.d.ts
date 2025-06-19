import { AuthIdentity } from "./AuthIdentity";
export declare class ProviderIdentity {
    id: string;
    entityId: string;
    provider: string;
    authIdentityId: string;
    userMetadata: object | null;
    providerMetadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    authIdentity: AuthIdentity;
}
