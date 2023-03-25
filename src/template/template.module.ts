import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Signature } from 'src/signatures/signature.entity';
import { UserData } from 'src/user-data/user-data.entity';
import { Template } from './template.entity';
import { TemplateService } from './template.service';

@Module({
  imports: [TypeOrmModule.forFeature([Signature, Template, UserData])],
  exports: [TypeOrmModule],
  providers: [TemplateService],
})
export class TemplateModule { }
