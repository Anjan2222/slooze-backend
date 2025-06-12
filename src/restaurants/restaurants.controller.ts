import { Controller, Get } from '@nestjs/common';

@Controller('restaurants')
export class RestaurantsController {
  @Get()
  getAllRestaurants() {
    return [{ id: 1, name: 'Demo Restaurant' }];
  }
}