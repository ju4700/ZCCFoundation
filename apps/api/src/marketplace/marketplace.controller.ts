import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';

@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get('services')
  findAll() {
    return this.marketplaceService.findAllServices();
  }

  @Get('services/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.marketplaceService.findService(id);
  }
}
