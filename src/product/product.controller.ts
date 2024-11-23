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
    // throw new HttpException(
    //   'เกิดข้อผิดพลาดแสดงวันที่ไม่ได้',
    //   HttpStatus.BAD_REQUEST,
    // );
    // return { server_date: this.utilityService.getServerDate() };
  }
  @Get('/thaidate')
  getThaiDate() {
    // throw new BadRequestException('เกิดข้อผิดพลาด แสดงวันที่ไม่ได้');
    return { server_thai_date: this.globalHelperService.getServerThaiDate() };
  }
}
