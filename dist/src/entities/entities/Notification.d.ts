import { NotificationProvider } from "./NotificationProvider";
export declare class Notification {
    id: string;
    to: string;
    channel: string;
    template: string;
    data: object | null;
    triggerType: string | null;
    resourceId: string | null;
    resourceType: string | null;
    receiverId: string | null;
    originalNotificationId: string | null;
    idempotencyKey: string | null;
    externalId: string | null;
    providerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    provider: NotificationProvider;
}
