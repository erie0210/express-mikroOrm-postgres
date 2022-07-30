import {AuthorFactory} from "./factory/AuthorFactory";
import {DI, init} from "../app/server";
import {MikroORM} from "@mikro-orm/core";
import {AuthorRepository} from "../app/repository/AuthorRepository";

describe('controller test', () => {
    let orm: MikroORM;
    let authorFactory: AuthorFactory;

    beforeAll(async () => {
        await init;
        DI.orm.config.set('dbName', 'tempdb');
        DI.orm.config.getLogger().setDebugMode(false);
        await DI.orm.config.getDriver().reconnect();
        await DI.orm.getSchemaGenerator().clearDatabase();

        orm = DI.orm
        authorFactory = new AuthorFactory(orm.em);
    })

    afterAll(async () => {
        await DI.orm.close(true);
        DI.server.close();
    });

    it('get three authors', async () => {
        // given
        const testAuthor = authorFactory.createOne();
        orm.em.clear();

        // when
        const result = new AuthorRepository().getThreeAuthors();

        // then
        expect((await result).length).toBe(3);
    })
})
