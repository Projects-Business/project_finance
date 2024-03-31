import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMetaFinanceiraDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  targetAmount: number;

  @IsNotEmpty()
  @IsNumber()
  currentAmount: number;

  @IsNotEmpty()
  @IsString()
  deadline: string; 
}