import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lego } from './schemas/lego.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class LegoService {
    constructor(
        @InjectModel(Lego.name)
        private legoModel: mongoose.Model<Lego>
    ) {}

    async findAll(): Promise<Lego[]> {
        const legos = await this.legoModel.find();
        return legos;
    }

    async create(lego: Lego): Promise<Lego> {
        const res = await this.legoModel.create(lego);
        return res;
    }
}
