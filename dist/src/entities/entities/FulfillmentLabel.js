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
exports.FulfillmentLabel = void 0;
const typeorm_1 = require("typeorm");
const Fulfillment_1 = require("./Fulfillment");
let FulfillmentLabel = class FulfillmentLabel {
    id;
    trackingNumber;
    trackingUrl;
    labelUrl;
    fulfillmentId;
    createdAt;
    updatedAt;
    deletedAt;
    fulfillment;
};
exports.FulfillmentLabel = FulfillmentLabel;
__decorate([
    (0, typeorm_1.Column)("text", { primary: true, name: "id" }),
    __metadata("design:type", String)
], FulfillmentLabel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "tracking_number" }),
    __metadata("design:type", String)
], FulfillmentLabel.prototype, "trackingNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "tracking_url" }),
    __metadata("design:type", String)
], FulfillmentLabel.prototype, "trackingUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "label_url" }),
    __metadata("design:type", String)
], FulfillmentLabel.prototype, "labelUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "fulfillment_id" }),
    __metadata("design:type", String)
], FulfillmentLabel.prototype, "fulfillmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "created_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], FulfillmentLabel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", {
        name: "updated_at",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], FulfillmentLabel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], FulfillmentLabel.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Fulfillment_1.Fulfillment, (fulfillment) => fulfillment.fulfillmentLabels, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "fulfillment_id", referencedColumnName: "id" }]),
    __metadata("design:type", Fulfillment_1.Fulfillment)
], FulfillmentLabel.prototype, "fulfillment", void 0);
exports.FulfillmentLabel = FulfillmentLabel = __decorate([
    (0, typeorm_1.Index)("IDX_fulfillment_label_deleted_at", ["deletedAt"], {}),
    (0, typeorm_1.Index)("IDX_fulfillment_label_fulfillment_id", ["fulfillmentId"], {}),
    (0, typeorm_1.Index)("fulfillment_label_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("fulfillment_label", { schema: "public" })
], FulfillmentLabel);
//# sourceMappingURL=FulfillmentLabel.js.map