import { Module } from '@nestjs/common';
import { TypeInvestimentService } from './type-investiment.service';
import { TypeInvestimentController } from './type-investiment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeInvestimentEntity } from './entities/typeEntity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeInvestimentEntity])],
  controllers: [TypeInvestimentController],
  providers: [TypeInvestimentService],
})
export class TypeInvestimentModule {}
