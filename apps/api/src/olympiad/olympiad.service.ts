import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../db/drizzle.service';
import { contests, leaderboards } from '@zccfoundation/db';
import { eq, desc } from 'drizzle-orm';

@Injectable()
export class OlympiadService {
  constructor(private readonly drizzle: DrizzleService) {}

  async findAllContests() {
    return this.drizzle.db.select().from(contests);
  }

  async getLeaderboard(contestId: number) {
    return this.drizzle.db
      .select()
      .from(leaderboards)
      .where(eq(leaderboards.contestId, contestId))
      .orderBy(desc(leaderboards.totalScore));
  }
}
