import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../db/drizzle.service';
import { SubmissionQueue } from './submission.queue';
import { submissions } from '@zccfoundation/db';
import { eq } from 'drizzle-orm';

@Injectable()
export class SubmissionService {
  constructor(
    private readonly drizzle: DrizzleService,
    private readonly queue: SubmissionQueue,
  ) {}

  async create(data: {
    userId: number;
    problemId: number;
    contestId: number;
    code: string;
    language: string;
  }) {
    const [submission] = await this.drizzle.db
      .insert(submissions)
      .values({ ...data, status: 'pending', score: 0 })
      .returning();
    this.queue.addJob(submission.id);
    return submission;
  }

  async findOne(id: number) {
    const result = await this.drizzle.db
      .select()
      .from(submissions)
      .where(eq(submissions.id, id))
      .limit(1);
    return result[0] ?? null;
  }
}
