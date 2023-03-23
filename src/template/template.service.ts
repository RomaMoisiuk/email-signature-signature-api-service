import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Template } from './template.entity';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private templatesRepository: Repository<Template>,
  ) { }

  findTemplateByName(name: string): Promise<Template> {
    return this.templatesRepository.findOneBy({ name });
  }
}
