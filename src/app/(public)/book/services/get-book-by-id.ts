
export async function getBookById(bookId: string) {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${bookId}`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${bookId}`);
    const book = await response.json();
    return book;
}
