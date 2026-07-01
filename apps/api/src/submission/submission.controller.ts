import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  create(
    @Body()
    body: {
      userId: number;
      problemId: number;
      contestId: number;
      code: string;
      language: string;
    },
  ) {
    return this.submissionService.create(body);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.submissionService.findOne(id);
  }
}
