import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";


export class CreateLegoDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly image: string;

    @IsNotEmpty()
    @IsString()
    readonly age: string;

    @IsNotEmpty()
    @IsString()
    readonly pieces: string;

    @IsNotEmpty()
    @IsString()
    readonly item_number: string;

    @IsNotEmpty()
    @IsString()
    readonly price: string;

    @IsEmpty({ message: "You Can Not Pass User Id" })
    readonly user: User;
}