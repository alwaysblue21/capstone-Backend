import { Module } from '@nestjs/common';
import { LegoController } from './lego.controller';
import { LegoService } from './lego.service';

@Module({
  controllers: [LegoController],
  providers: [LegoService]
})
export class LegoModule {}
