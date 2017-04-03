/**
 * Created by Kanstantsin on 25.03.2017.
 */
var articleEdit = (function () {

    var id;

    function goToEditPage(currentNews) {
        document.querySelector(".detailed-view").style.display = "none";
        document.querySelector("#edit-news-page").style.display = "block";

        id = currentNews.dataset.id;
        var article = articleModel.getArticle(id);

        document.querySelector("#edit-news-title").textContent = article.title;
        document.querySelector("#edit-news-img").textContent = article.image;
        document.querySelector("#edit-news-content").textContent = article.content;
        document.querySelector("#edit-news-tags").textContent = article.tags;
    }

    function editNews() {
        var newArticle = articleModel.getArticle(id);
        var article = {};

        article.createdAt = new Date();
        article.author = newArticle.author;
        article.id = newArticle.id;
        article.title = document.querySelector("#edit-news-title").value;
        article.image = document.querySelector("#edit-news-img").value;
        article.content = document.querySelector("#edit-news-content").value;
        article.summary = document.querySelector("#edit-news-content").value.substring(0, 250);
        var tagsStr = document.querySelector("#edit-news-tags").value.toLowerCase();
        console.log(tagsStr);
        if (articleModel.validateTags(tagsStr)){
            article.tags = tagsStr.split(",");
        }

        console.log(article);
        console.log(articleModel.validateArticle(article));

        if(articleModel.validateArticle(article)){
            articleModel.removeArticle(id);
            articleModel.addArticle(article);
            addArticleInDb(article);
            articleModel.storageArticles();
            articleRenderer.removeArticlesFromDom();
            articleRenderer.insertArticlesInDOM(articleModel.getArticles(0, articleModel.getSizeArticles()));
        }

        console.log(articleModel.getArticle(id));
        document.querySelector(".wrapper").style.display = "block";
        document.querySelector("#edit-news-page").style.display = "none";

    }

    return {
        goToEditPage: goToEditPage,
        editNews: editNews
    };
}());