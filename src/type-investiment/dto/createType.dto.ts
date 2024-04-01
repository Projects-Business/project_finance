import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeInvestimentDTO{
    @IsString()
    @IsNotEmpty()
    tipo: string
}