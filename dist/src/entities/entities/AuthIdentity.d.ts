import { ProviderIdentity } from "./ProviderIdentity";
export declare class AuthIdentity {
    id: string;
    appMetadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    providerIdentities: ProviderIdentity[];
}
