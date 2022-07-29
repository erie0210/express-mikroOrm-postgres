import {Entity, PrimaryKey} from "@mikro-orm/core";

@Entity()
export class Book{
    @PrimaryKey()
    private readonly _id: number;
    private readonly _title: string;
    private readonly _author: string;

    constructor(
        id: number,
        title: string,
        author: string
    ) {
        this._id = id;
        this._title = title;
        this._author = author;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }
}
