import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: process.env.WEB_URL ?? 'http://localhost:3000',
  },
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(NotificationGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinContest')
  async handleJoinContest(
    @MessageBody() contestId: number,
    @ConnectedSocket() client: Socket,
  ) {
    await client.join(`contest:${contestId}`);
    return { event: 'joined', contestId };
  }

  emitLeaderboardUpdate(contestId: number, data: unknown) {
    this.server.to(`contest:${contestId}`).emit('leaderboardUpdate', data);
  }

  emitSubmissionResult(userId: number, data: unknown) {
    this.server.to(`user:${userId}`).emit('submissionResult', data);
  }
}
