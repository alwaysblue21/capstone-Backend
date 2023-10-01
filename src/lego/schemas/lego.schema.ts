import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



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

}

export const LegoSchema = SchemaFactory.createForClass(Lego)