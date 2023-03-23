import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Signature } from './signature.entity';
import { SignaturesService } from './signatures.service';
import { Template } from '../template/template.entity';
import { UserData } from 'src/user-data/user-data.entity';
import { UserDataModule } from 'src/user-data/user-data.module';
import { SignaturesController } from './signatures.controller';
import { UserDataService } from 'src/user-data/user-data.service';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Signature, Template, UserData]),
    UserDataModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [SignaturesService, UserDataService, JwtService],
  controllers: [SignaturesController],
})
export class SignaturesModule { }
