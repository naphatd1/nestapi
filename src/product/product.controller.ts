import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller({
  path: 'product',
  version: '1',
})
export class ProductController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/')
  findAll() {
    return [];
  }
  @Get('/date')
  getDate() {
    return { server_date: this.utilityService.getServerDate() };
  }
  @Get('/thaidate')
  getThaiDate() {
    return { server_thai_date: this.globalHelperService.getServerThaiDate() };
  }
}
