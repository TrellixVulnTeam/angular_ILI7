export class Blog {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: { ['item_id']: number; ['item_text']: string }[];
    author: string;
    date?: Date;
    publishBy?: number;
    constructor(
        id: number,
        title: string,
        description: string,
        imageUrl: string,
        author: string,
        tags: { ['item_id']: number; ['item_text']: string }[],
        date: Date,
        publishBy: number = null
      ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.tags = tags;
        this.author = author;
        this.date = date;
        this.publishBy = publishBy;
      }
}
