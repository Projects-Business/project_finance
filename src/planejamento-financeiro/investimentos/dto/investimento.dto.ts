import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from "class-validator";

export class CreateInvestimentoDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  valorInvestido: number;

  @IsNumber()
  @IsNotEmpty()
  valorAtual: number;

  @IsString()
  @IsNotEmpty()
  dataInicio: Date;

  @IsString()
  @IsOptional()
  dataFim?: Date;


}
