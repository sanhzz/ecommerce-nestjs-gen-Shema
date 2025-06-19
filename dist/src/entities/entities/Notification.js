"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const typeorm_1 = require("typeorm");
const NotificationProvider_1 = require("./NotificationProvider");
let Notification = class Notification {
    id;
    to;
    channel;
    template;
    data;
    triggerType;
    resourceId;
    resourceType;
    receiverId;
    originalNotificationId;
    idempotencyKey;
    externalId;
    providerId;
    createdAt;
    updatedAt;
    deletedAt;
    status;
    provider;
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], Notification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "to" }),
    __metadata("design:type", String)
], Notification.prototype, "to", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "channel" }),
    __metadata("design:type", String)
], Notification.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "template" }),
    __metadata("design:type", String)
], Notification.prototype, "template", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb", { name: "data", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "trigger_type", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "triggerType", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "resource_id", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "resourceId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "resource_type", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "resourceType", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "receiver_id", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "receiverId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "original_notification_id", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "originalNotificationId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "idempotency_key", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "idempotencyKey", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "external_id", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "externalId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "provider_id", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Notification.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Notification.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "status", default: () => "'pending'" }),
    __metadata("design:type", String)
], Notification.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NotificationProvider_1.NotificationProvider, (notificationProvider) => notificationProvider.notifications, { onDelete: "SET NULL", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "provider_id", referencedColumnName: "id" }]),
    __metadata("design:type", NotificationProvider_1.NotificationProvider)
], Notification.prototype, "provider", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Index)("IDX_notification_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("notification_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("IDX_notification_idempotency_key_unique", ["idempotencyKey"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("IDX_notification_provider_id", ["providerId"], {}),
    (0, typeorm_1.Index)("IDX_notification_receiver_id", ["receiverId"], {}),
    (0, typeorm_1.Entity)("notification", { schema: "public" })
], Notification);
//# sourceMappingURL=Notification.js.map