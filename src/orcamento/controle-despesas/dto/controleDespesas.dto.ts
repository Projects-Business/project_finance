import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateControleDespesaDTO{

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    date: Date;
}