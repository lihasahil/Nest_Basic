import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log(`Draing 10 watts of power from Power`);
    this.powerService.supplyPower(10);
    return a + b;
  }
}
