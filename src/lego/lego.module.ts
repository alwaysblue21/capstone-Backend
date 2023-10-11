import { Module } from '@nestjs/common';
import { LegoController } from './lego.controller';
import { LegoService } from './lego.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LegoSchema } from './schemas/lego.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: "Lego", schema: LegoSchema }])
  ],
  controllers: [LegoController],
  providers: [LegoService]
})
export class LegoModule {}
