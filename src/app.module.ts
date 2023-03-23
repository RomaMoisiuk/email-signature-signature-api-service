import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignaturesService } from './signatures/signatures.service';
import { SignaturesModule } from './signatures/signatures.module';
import { UserDataModule } from './user-data/user-data.module';
import { UserDataService } from './user-data/user-data.service';
import { Signature } from './signatures/signature.entity';
import { Template } from './template/template.entity';
import { TemplateModule } from './template/template.module';
import { TemplateService } from './template/template.service';
import { SignaturesController } from './signatures/signatures.controller';
import { UserData } from './user-data/user-data.entity';
import { JwtStrategy } from './jwt.strategy';
import { UserDataController } from './user-data/user-data.controller';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? ''),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Signature, Template, UserData],
      synchronize: true,
    }),
    SignaturesModule,
    UserDataModule,
    TemplateModule,
  ],
  controllers: [AppController, SignaturesController, UserDataController],
  providers: [
    AppService,
    SignaturesService,
    UserDataService,
    TemplateService,
    JwtStrategy,
  ],
})
export class AppModule { }
