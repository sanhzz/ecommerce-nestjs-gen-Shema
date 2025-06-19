import { Column, Entity, Index } from "typeorm";

@Index("IDX_deleted_at_-31ea43a", ["deletedAt"], {})
@Index("return_fulfillment_pkey", ["fulfillmentId", "returnId"], {
  unique: true,
})
@Index("IDX_fulfillment_id_-31ea43a", ["fulfillmentId"], {})
@Index("IDX_id_-31ea43a", ["id"], {})
@Index("IDX_return_id_-31ea43a", ["returnId"], {})
@Entity("return_fulfillment", { schema: "public" })
export class ReturnFulfillment {
  @Column("character varying", {
    primary: true,
    name: "return_id",
    length: 255,
  })
  returnId: string;

  @Column("character varying", {
    primary: true,
    name: "fulfillment_id",
    length: 255,
  })
  fulfillmentId: string;

  @Column("character varying", { name: "id", length: 255 })
  id: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;
}
