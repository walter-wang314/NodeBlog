$(document).ready(function () {

  var ndCategory = $('#js-category');
  var ndAuthor = $('#js-author');

  $('#js-filter-submit').on('click', function () {

    console.log('js -> post.js onclick');

    var query = queryString.parse(location.search);
    var category = ndCategory.val();
    console.log('category: ' + category);
    var author = ndAuthor.val();
    console.log('author: ' + author);

    if (category) {
      query.category = category;
    } else {
      delete query.category;
    }

    if (author) {
      query.author = author;
    } else {
      delete query.author;
    }

    console.log('query: ' + queryString.stringify(query));
    window.location.url = window.location.origin + window.location.pathname + queryString.stringify(query);
    console.log('window.location.url: ' + window.location.url);
  });
});
