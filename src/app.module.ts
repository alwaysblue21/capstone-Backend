import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LegoModule } from './lego/lego.module';

@Module({
  imports: [LegoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
