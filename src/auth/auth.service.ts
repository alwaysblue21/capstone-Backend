import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import * as bcrypt from "bcryptjs"
import { JwtService } from '@nestjs/jwt';
import { signUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtSercive: JwtService
    ) {}

    async signUp(signUpDto: signUpDto): Promise<{ token: string }> {
        const { name, email, password } = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtSercive.sign({ id: user._id })

        return { token }
    }
}
