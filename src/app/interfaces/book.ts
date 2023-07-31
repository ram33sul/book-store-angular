export interface BooksList {
    total: string;
    books: {
        title: string;
        subtitle: string;
        isbn13: string;
        price: string;
        image: string;
        url: string;
    }[]
}

export interface Book {
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn13: string;
    isbn10: string;
    pages: string;
    year: string;
    rating: string;
    price: string;
    image: string;
    url: string;
}
