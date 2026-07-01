import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { users } from './users';

export const scholarshipStatusEnum = pgEnum('scholarship_status', [
  'pending',
  'approved',
  'rejected',
]);

export const scholarships = pgTable('scholarships', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  motivationLetter: text('motivation_letter').notNull(),
  documentUrl: varchar('document_url', { length: 255 }),
  status: scholarshipStatusEnum('status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
