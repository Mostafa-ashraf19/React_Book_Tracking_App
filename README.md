# MyReads Project

a bookshelf app built using React that allows you to select and categorize books you have read, are currently reading, or want to read. This app use Udacity provided API until build server-side using Flask.

## Getting Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

##  Pages Component Structure 
```bash
├── APP  
|   ├── BookGallery
|   ├──   ├── BookShelves
|   ├──       ├── Shelf
|   ├──           ├── Book 
|   ├──   ├── Search
|   ├──       ├── Book
└── ...
```

## Sketch for Public View
### Main Page 

  ![Main](https://github.com/Mostafa-ashraf19/React_Book_Tracking_App/blob/master/Assests/Main%20Page.png?raw=true)

### Search Page 

  > Soon 

## Backend Server
Currently, I do not have a server-side, So, I'm using a Udacity server AIPs provided in the file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend, Until build flask server side:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

