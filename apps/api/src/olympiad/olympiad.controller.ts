import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OlympiadService } from './olympiad.service';

@Controller('olympiad')
export class OlympiadController {
  constructor(private readonly olympiadService: OlympiadService) {}

  @Get('contests')
  findAllContests() {
    return this.olympiadService.findAllContests();
  }

  @Get('contests/:id/leaderboard')
  getLeaderboard(@Param('id', ParseIntPipe) id: number) {
    return this.olympiadService.getLeaderboard(id);
  }
}
