import 'reflect-metadata';
import http from 'http';
import express from 'express';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';

import { AuthorController } from './controllers';
import { Author } from './entities';

export const DI = {} as {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager,
  authorRepository: EntityRepository<Author>
};

export const app = express();
const PORT = process.env.PORT || 3000;
console.log(`now working on port: ${PORT}`)

export const init = (async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;
  DI.authorRepository = DI.orm.em.getRepository(Author);

  app.use(express.json());
  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  app.get('/', (req, res) => res.json({ message: 'Welcome to MikroORM express TS example, try CRUD on /author and /book endpoints!' }));
  app.use('/author', AuthorController);
  app.use((req, res) => res.status(404).json({ message: 'No route found' }));

  DI.server = app.listen(PORT, () => {
    console.log(`MikroORM express TS example started at http://localhost:${PORT}`);
  });
})();
