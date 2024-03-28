import { IsDate, IsEmail, IsIn, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength, minLength } from "class-validator";

export enum Sex {
    Male = "homem",
    Female = "mulher",
    Outhers = "outros"
}

export class createUserDTO {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsStrongPassword()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(11)
    @MaxLength(11)
    cpf: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(14)
    phone: string;

    @IsNotEmpty()
    @IsString()
    dateofbirth: string;

    @IsString()
    @IsNotEmpty()
    @IsIn([Sex.Male, Sex.Female, Sex.Outhers])
    sex: Sex
}