$(document).ready(function () {

    // category and author filter
    var ndCategory = $('#js-category');
    var ndAuthor = $('#js-author');
    var ndKeyword = $('#js-keyword');

    $('#js-filter-submit').on('click', function () {

        console.log('js -> post.js onclick');

        var query = queryString.parse(location.search);
        var category = ndCategory.val();
        var author = ndAuthor.val();
        var keyword = ndKeyword.val();

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

        if (keyword) {
            query.keyword = keyword;
        } else {
            delete query.keyword;
        }

        console.log('query: ' + queryString.stringify(query));
        window.location.url = window.location.origin + window.location.pathname + queryString.stringify(query);
        console.log('window.location.url: ' + window.location.url);
    });

    if (typeof CKEDITOR !== 'undefined') {
        CKEDITOR.replace('js-post-content');
    }
});
