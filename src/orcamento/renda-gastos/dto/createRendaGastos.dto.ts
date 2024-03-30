import { IsNotEmpty, IsString } from "class-validator";

export class CreateRendaGastosDTO {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsString()
    value: string;

    @IsNotEmpty()
    @IsString()
    type: string;
}