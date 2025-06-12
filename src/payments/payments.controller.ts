import { Controller, Get, Put, Body } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  @Get()
  getAllPayments() {
    return [{ id: 1, status: 'Paid' }];
  }

  @Put()
  updatePayment(@Body() body: any) {
    return { message: 'Payment updated', payment: body };
  }
}