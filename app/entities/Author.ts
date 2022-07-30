import {Entity, PrimaryKey, Property} from '@mikro-orm/core';

@Entity()
export class Author {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
