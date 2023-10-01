import { Module } from '@nestjs/common';
import { LegoController } from './lego.controller';
import { LegoService } from './lego.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LegoSchema } from './schemas/lego.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Lego", schema: LegoSchema }])],
  controllers: [LegoController],
  providers: [LegoService]
})
export class LegoModule {}
