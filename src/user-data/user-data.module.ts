import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Signature } from 'src/signatures/signature.entity';
import { Template } from 'src/template/template.entity';
import { UserData } from './user-data.entity';
import { UserDataService } from './user-data.service';
import { UserDataController } from './user-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Signature, Template, UserData])],
  providers: [UserDataService],
  exports: [TypeOrmModule],
  controllers: [UserDataController],
})
export class UserDataModule { }
