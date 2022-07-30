import {Factory, faker} from "@mikro-orm/seeder";
import {Author} from "../../app/entities";

export class AuthorFactory extends Factory<Author> {
    model = Author;

    static createEntity(entity?: Partial<Author>): Author {
        return Object.assign(new Author(
            faker.datatype.number(),
            faker.name.firstName('female'),
            faker.internet.email()), {} as Author
        );
    }

    definition(): Partial<Author> {
        return AuthorFactory.createEntity();
    }
}
