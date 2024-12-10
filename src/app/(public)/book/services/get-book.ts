

// export async function getBooks() {

//     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const books = await response.json();

//     return books || [];
    
// } 

export async function getBooks(limit:any) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return photos.slice(0, limit);
}
