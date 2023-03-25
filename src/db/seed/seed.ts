import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import * as dotenv from 'dotenv';

import MainSeeder from './main.seeder';
import { UserData } from '../../user-data/user-data.entity';
import { Signature } from '../../signatures/signature.entity';
import { Template } from '../../template/template.entity';

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? ''),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Template, UserData, Signature],
  synchronize: true,
  factories: [],
  seeds: [MainSeeder],
  connectTimeoutMS: 5000,
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
