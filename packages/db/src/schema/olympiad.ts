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

export const contestStatusEnum = pgEnum('contest_status', [
  'draft',
  'upcoming',
  'active',
  'ended',
]);

export const submissionStatusEnum = pgEnum('submission_status', [
  'pending',
  'running',
  'accepted',
  'wrong_answer',
  'time_limit_exceeded',
  'runtime_error',
  'compilation_error',
]);

export const contests = pgTable('contests', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  status: contestStatusEnum('status').default('draft').notNull(),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const problems = pgTable('problems', {
  id: serial('id').primaryKey(),
  contestId: integer('contest_id')
    .references(() => contests.id)
    .notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  timeLimit: integer('time_limit').default(2000).notNull(),
  memoryLimit: integer('memory_limit').default(256).notNull(),
  points: integer('points').default(100).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const submissions = pgTable('submissions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  problemId: integer('problem_id')
    .references(() => problems.id)
    .notNull(),
  contestId: integer('contest_id')
    .references(() => contests.id)
    .notNull(),
  code: text('code').notNull(),
  language: varchar('language', { length: 50 }).notNull(),
  status: submissionStatusEnum('status').default('pending').notNull(),
  score: integer('score').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const leaderboards = pgTable('leaderboards', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  contestId: integer('contest_id')
    .references(() => contests.id)
    .notNull(),
  totalScore: integer('total_score').default(0).notNull(),
  rank: integer('rank').default(0).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
