import 'reflect-metadata';
import { Template } from '../../template/template.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { layouts } from './template-layouts';

export default class MainSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(Template);

    console.log('SEEDER inserting');

    await repository.insert([
      {
        name: 'first',
        layout: layouts.first,
      },
      {
        name: 'second',
        layout: layouts.second,
      },
    ]);
  }
}
