import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../db/drizzle.service';
import { services } from '@zccfoundation/db';
import { eq } from 'drizzle-orm';

@Injectable()
export class MarketplaceService {
  constructor(private readonly drizzle: DrizzleService) {}

  async findAllServices() {
    return this.drizzle.db
      .select()
      .from(services)
      .where(eq(services.status, 'active'));
  }

  async findService(id: number) {
    const result = await this.drizzle.db
      .select()
      .from(services)
      .where(eq(services.id, id))
      .limit(1);
    return result[0] ?? null;
  }
}
