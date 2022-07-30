import {Request, Response, Router} from "express";
import {QueryOrder} from "@mikro-orm/core";
import {DI} from '../server';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const authors = await DI.authorRepository.findAll({
        orderBy: { name: QueryOrder.DESC },
        limit: 3,
    });
    res.json(authors);
});

export const AuthorController = router;
