export class Article {
 
    constructor(private title: string, private description: string){}

    date() :Date {
        return new Date();
    } 
}

