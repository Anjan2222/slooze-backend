import { Controller, Post, Param, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  createOrder(@Body() body: any) {
    // TODO: Create a new order
    return { message: 'Order created', order: body };
  }

  @Post(':id/items')
  addItemsToOrder(@Param('id') id: string, @Body() body: any) {
    // TODO: Add items to order with id
    return { message: `Items added to order ${id}`, items: body };
  }

  @Post(':id/checkout')
  checkoutOrder(@Param('id') id: string) {
    // TODO: Checkout the order
    return { message: `Order ${id} checked out` };
  }

  @Post(':id/cancel')
  cancelOrder(@Param('id') id: string) {
    // TODO: Cancel the order
    return { message: `Order ${id} cancelled` };
  }
}