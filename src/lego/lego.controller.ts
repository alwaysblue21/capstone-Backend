import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { LegoService } from './lego.service';
import { Lego } from './schemas/lego.schema';
import { CreateLegoDto } from './dto/create-lego.dto';
import { UpdateLegoDto } from './dto/update-lego.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('legos')
export class LegoController {
    constructor(private legoService: LegoService) {}

    @Get()
    @UseGuards(AuthGuard())
    async getAllLegos(): Promise<Lego[]> {
        return this.legoService.findAll();
    }

    // find by user
    // @Get('/user/:userId')
    // @UseGuards(AuthGuard())
    // async findLegosByUser(@Param('userId') userId: string): Promise<Lego[]> {
    //     return this.legoService.findByUser(userId);
    // }


    @Post()
    @UseGuards(AuthGuard())
    async createLego(
        @Body()
        lego: CreateLegoDto,
        @Req() req
    ): Promise<Lego> {

        return this.legoService.create(lego, req.user);
    }

    @Get(":id")
    @UseGuards(AuthGuard())
    async getLego(
        @Param("id")
        id: string
    ): Promise<Lego> {
        return this.legoService.findById(id);
    }

    @Put(":id")
    @UseGuards(AuthGuard())
    async updateLego(
        @Param("id")
        id: string,
        @Body()
        lego: UpdateLegoDto,
    ): Promise<Lego> {
        return this.legoService.updateById(id, lego);
    }

    @Delete(":id")
    @UseGuards(AuthGuard())
    async deleteLego(
        @Param("id")
        id: string
    ): Promise<Lego> {
        return this.legoService.deleteById(id);
    }
}
