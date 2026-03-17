import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  numeric,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { users } from './users';

export const serviceStatusEnum = pgEnum('service_status', [
  'active',
  'inactive',
]);

export const orderStatusEnum = pgEnum('order_status', [
  'pending',
  'confirmed',
  'delivered',
  'cancelled',
]);

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  vendorId: integer('vendor_id')
    .references(() => users.id)
    .notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  status: serviceStatusEnum('status').default('active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  buyerId: integer('buyer_id')
    .references(() => users.id)
    .notNull(),
  serviceId: integer('service_id')
    .references(() => services.id)
    .notNull(),
  status: orderStatusEnum('status').default('pending').notNull(),
  totalAmount: numeric('total_amount', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
