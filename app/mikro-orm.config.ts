import {Options} from '@mikro-orm/core';
import {Author} from './entities';

const options: Options ={
  type: 'postgresql',
  entities: [Author],
  dbName: 'tempdb',
  debug: true,
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  clientUrl: 'jdbc:postgresql://localhost:5432/postgres'
};

export default options;
