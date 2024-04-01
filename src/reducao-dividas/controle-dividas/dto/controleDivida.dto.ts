import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class CreateControleDeDividasDTO{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    @IsNumber()
    amount: number;
    
    @IsNotEmpty()
    @IsString()
    dueDate: Date;
    
    @IsNotEmpty()
    @IsString()
    status: string;
} 