export class Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  language: { ['languageId']: number;['languageName']: string }[];
  date: Date;
  constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    author: string,
    language: { ['languageId']: number;['languageName']: string }[],
    date?: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.language = language;
    this.author = author;
    this.date = date;
  }
}
