import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DrizzleService.name);
  private pool: Pool;
  public db: NodePgDatabase<typeof schema>;

  async onModuleInit() {
    const connectionString =
      process.env.DATABASE_URL ??
      'postgresql://postgres:password@localhost:5432/zccfoundation';
    this.pool = new Pool({ connectionString });
    this.db = drizzle(this.pool, { schema });
    this.logger.log('Database connection initialized');
  }

  async onModuleDestroy() {
    await this.pool.end();
    this.logger.log('Database connection closed');
  }
}
