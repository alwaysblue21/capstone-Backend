import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LegoService } from './lego.service';
import { Lego } from './schemas/lego.schema';
import { CreateLegoDto } from './dto/create-lego.dto';
import { UpdateLegoDto } from './dto/update-lego.dto';

@Controller('legos')
export class LegoController {
    constructor(private legoService: LegoService) {}

    @Get()
    async getAllLegos(): Promise<Lego[]> {
        return this.legoService.findAll();
    }

    @Post()
    async createLego(
        @Body()
        lego: CreateLegoDto,
    ): Promise<Lego> {
        return this.legoService.create(lego);
    }

    @Get(":id")
    async getLego(
        @Param("id")
        id: string
    ): Promise<Lego> {
        return this.legoService.findById(id);
    }

    @Put(":id")
    async updateLego(
        @Param("id")
        id: string,
        @Body()
        lego: UpdateLegoDto,
    ): Promise<Lego> {
        return this.legoService.updateById(id, lego);
    }

    @Delete(":id")
    async deleteLego(
        @Param("id")
        id: string
    ): Promise<Lego> {
        return this.legoService.deleteById(id);
    }
}
