import { IsEmpty, IsOptional, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";


export class UpdateLegoDto {

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly image: string;

    @IsOptional()
    @IsString()
    readonly age: string;

    @IsOptional()
    @IsString()
    readonly pieces: string;

    @IsOptional()
    @IsString()
    readonly item_number: string;

    @IsOptional()
    @IsString()
    readonly price: string;

    @IsEmpty({ message: "You Can Not Pass User Id" })
    readonly user: User;
}