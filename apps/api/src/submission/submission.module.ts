import { Module } from '@nestjs/common';
import { SubmissionController } from './submission.controller';
import { SubmissionService } from './submission.service';
import { SubmissionQueue } from './submission.queue';

@Module({
  controllers: [SubmissionController],
  providers: [SubmissionService, SubmissionQueue],
  exports: [SubmissionService],
})
export class SubmissionModule {}
