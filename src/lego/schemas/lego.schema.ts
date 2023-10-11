import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";



@Schema({
    timestamps: true
})
export class Lego {

    @Prop()
    name: string;

    @Prop()
    image: string;

    @Prop()
    age: string;

    @Prop()
    pieces: string;

    @Prop()
    item_number: string;

    @Prop()
    price: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user: User;

}

export const LegoSchema = SchemaFactory.createForClass(Lego)