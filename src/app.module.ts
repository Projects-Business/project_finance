import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/userEntitie';
import * as dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [UserModule, AuthModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [UserEntity], 
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
   