import { Injectable } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  constructor(private readonly gateway: NotificationGateway) {}

  notifyLeaderboardUpdate(contestId: number, data: unknown) {
    this.gateway.emitLeaderboardUpdate(contestId, data);
  }

  notifySubmissionResult(userId: number, data: unknown) {
    this.gateway.emitSubmissionResult(userId, data);
  }
}
