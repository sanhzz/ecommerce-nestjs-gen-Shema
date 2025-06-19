import { Notification } from "./Notification";
export declare class NotificationProvider {
    id: string;
    handle: string;
    name: string;
    isEnabled: boolean;
    channels: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    notifications: Notification[];
}
