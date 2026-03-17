import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SubmissionQueue {
  private readonly logger = new Logger(SubmissionQueue.name);

  addJob(submissionId: number) {
    // TODO: Integrate BullMQ with Redis once auth/judging pipeline is ready
    this.logger.log(`Queued submission ${submissionId} for judging`);
  }
}
