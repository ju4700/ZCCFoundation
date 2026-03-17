import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OlympiadModule } from './olympiad/olympiad.module';
import { SubmissionModule } from './submission/submission.module';
import { ContentModule } from './content/content.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    DbModule,
    AuthModule,
    UsersModule,
    OlympiadModule,
    SubmissionModule,
    ContentModule,
    MarketplaceModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
