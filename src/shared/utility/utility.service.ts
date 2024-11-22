import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  formatDate = { year: 'numeric', month: 'long', day: 'numeric' };
  getServerDate(): string {
    return new Date().toLocaleDateString('th-TH');
  }
}
