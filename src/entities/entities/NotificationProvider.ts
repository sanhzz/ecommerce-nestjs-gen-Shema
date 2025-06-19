import { Column, Entity, Index, OneToMany } from "typeorm";
import { Notification } from "./Notification";

@Index("IDX_notification_provider_deleted_at", ["deletedAt"], {})
@Index("notification_provider_pkey", ["id"], { unique: true })
@Entity("notification_provider", { schema: "public" })
export class NotificationProvider {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "handle" })
  handle: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("boolean", { name: "is_enabled", default: () => "true" })
  isEnabled: boolean;

  @Column("text", { name: "channels", array: true, default: () => "'{}'[]" })
  channels: string[];

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

  @OneToMany(() => Notification, (notification) => notification.provider)
  notifications: Notification[];
}
