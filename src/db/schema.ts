import { pgTable } from "drizzle-orm/pg-core";
import { PgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow()
});