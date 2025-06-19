import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NotificationProvider } from "./NotificationProvider";

@Index("IDX_notification_deleted_at", ["deletedAt"], {})
@Index("notification_pkey", ["id"], { unique: true })
@Index("IDX_notification_idempotency_key_unique", ["idempotencyKey"], {
  unique: true,
})
@Index("IDX_notification_provider_id", ["providerId"], {})
@Index("IDX_notification_receiver_id", ["receiverId"], {})
@Entity("notification", { schema: "public" })
export class Notification {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "to" })
  to: string;

  @Column("text", { name: "channel" })
  channel: string;

  @Column("text", { name: "template" })
  template: string;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("text", { name: "trigger_type", nullable: true })
  triggerType: string | null;

  @Column("text", { name: "resource_id", nullable: true })
  resourceId: string | null;

  @Column("text", { name: "resource_type", nullable: true })
  resourceType: string | null;

  @Column("text", { name: "receiver_id", nullable: true })
  receiverId: string | null;

  @Column("text", { name: "original_notification_id", nullable: true })
  originalNotificationId: string | null;

  @Column("text", { name: "idempotency_key", nullable: true })
  idempotencyKey: string | null;

  @Column("text", { name: "external_id", nullable: true })
  externalId: string | null;

  @Column("text", { name: "provider_id", nullable: true })
  providerId: string | null;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("text", { name: "status", default: () => "'pending'" })
  status: string;

  @ManyToOne(
    () => NotificationProvider,
    (notificationProvider) => notificationProvider.notifications,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "provider_id", referencedColumnName: "id" }])
  provider: NotificationProvider;
}
