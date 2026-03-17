import { Module } from '@nestjs/common';
import { OlympiadController } from './olympiad.controller';
import { OlympiadService } from './olympiad.service';

@Module({
  controllers: [OlympiadController],
  providers: [OlympiadService],
  exports: [OlympiadService],
})
export class OlympiadModule {}
