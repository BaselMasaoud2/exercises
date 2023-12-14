// const fetchBookData = function(queryType, queryValue) {
//     const useData = function(data) {
//       const books = data.items;
//         for (let i = 0; i < books.length; i++) {
//           const bookInfo = books[i];
//           const title = bookInfo.volumeInfo.title;
//           const authors = bookInfo.volumeInfo.authors ? bookInfo.volumeInfo.authors.join(', ') : 'N/A';
//           const isbn = bookInfo.volumeInfo.industryIdentifiers ? bookInfo.volumeInfo.industryIdentifiers[0].identifier : 'N/A';
  
//           console.log(`Title: ${title}`);
//           console.log(`Author(s): ${authors}`);
//           console.log(`ISBN: ${isbn}`);
//           console.log('------------------------');
//         }
//     }
  
//     let url;
//     if (queryType === 'isbn') {
//       url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`;
//     } else if (queryType === 'title') {
//       url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryValue}`;
//     } else {
//       console.error('Invalid query type. Please use "isbn" or "title"');
//       return;
//     }
  
//     $.ajax({
//       method: "GET",
//       url: url,
//       success: useData
//     });
//   }
  
//   fetchBookData('isbn', '9780575087057');
//   fetchBookData('isbn', '1440633908');
//   fetchBookData('isbn', '9781945048470');
//   fetchBookData('isbn', '9780307417138');
//   fetchBookData('title', 'The Wise Man\'s Fears');
//   fetchBookData('title', 'How to Win Friends and Influence People');
  
const api = "5eYX6PAcEMvuQsK7gx7dbLatUOHaSVQp"
const searchGif = function () {
    const text = $("#search").val()
    $.get("http://api.giphy.com/v1/gifs/search?q=" + text + "&api_key=" + API_KEY + "&limit=1", function (data) { 
        const src = data.data[0].embed_url
        $('#result').attr('src',src);
    });
}

//// 





