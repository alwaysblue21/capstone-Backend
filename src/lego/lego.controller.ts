import { Controller, Get } from '@nestjs/common';
import { LegoService } from './lego.service';
import { Lego } from './schemas/lego.schema';

@Controller('legos')
export class LegoController {
    constructor(private legoService: LegoService) {}

    @Get()
    async getAllLegos(): Promise<Lego[]> {
        return this.legoService.findAll();
    }
}
