

export class article
{
    id: number;
    title: string;
    content: string;
    image: string;
    date: Date;

    constructor(id: number, title: string, content: string, image: string, date: Date) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.image = image;
      this.date = date;

    }
  }

