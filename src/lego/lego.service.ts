import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lego } from './schemas/lego.schema';
import * as mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

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

    async create(lego: Lego, user: User): Promise<Lego> {

        const data = Object.assign(lego, { user: user._id })

        const res = await this.legoModel.create(lego);
        return res;
    }

    async findById(id: string): Promise<Lego> {
        
        const lego = await this.legoModel.findById(id);

        if(!lego) {
            throw new NotFoundException("Lego Not Found.")
        }

        return lego;
    }

    async updateById(id: string, lego: Lego): Promise<Lego> {
        return await this.legoModel.findByIdAndUpdate(id, lego, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Lego> {
        return await this.legoModel.findByIdAndDelete(id);
    }

}
