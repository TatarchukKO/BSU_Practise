/**
 * Created by Kanstantsin on 13.03.2017.
 */

var userName = null;
var articleModel = (function () {
    var GLOBAL_ARTICLES = [{
        "id": "news/2017/02/28/rossiya-snimet-zapret-na-import-moldavskih-vin",
        "title": "Россия снимет запрет на импорт молдавских вин длинный заголовок пусть будет тут здесь",
        "image": "./img/2128-ht3.jpg",
        "author": "KOSTYA",
        "createdAt": new Date("2017-02-28T05:24:23.856Z"),
        "content": "Content of post",
        "summary": "he Nike Flyknit Racer is finally getting the Triple White treatment, and for a good cause too",
        "tags": [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/28/tramp-obvinil-obamu-v-organizatsii-protestov-po-vsey-strane-i-utechek-v-smi",
        "title": "Трамп обвинил Обаму в организации протестов по всей стране и утечек в СМИ",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-02-27T05:24:23.316Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        "tags": [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/28/rosneft-zainteresovalas-dobychey-v-meksikanskom-zalive",
        "title": "«Роснефть» заинтересовалась добычей в Мексиканском заливе",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-02-26T05:24:22.818Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        "tags": [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/28/amerikanskiy-senator-predlozhil-nazvat-imenem-nemtsova-ulitsu-pered-posolstvom-rossii",
        "title": "Американский сенатор предложил назвать именем Немцова улицу перед посольством России",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-02-25T05:24:21.043Z"),
        "content": "Content of post",
        "summary": "Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post Summary of post",
        "tags": [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/28/rossiya-otkazalas-zaderzhat-podozrevaemyh-v-ubiystve-kim-chen-nama",
        "title": "Россия отказалась задержать подозреваемых в убийстве Ким Чен Нама",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-02-24T05:24:19.591Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        tags: [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/28/spacex-anonsiroval-polet-kosmicheskih-turistov-k-lune-v-2018-godu",
        "title": "SpaceX пообещала отправить космических туристов к Луне в 2018 году",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-02-22T05:23:51.252Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        tags: [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/27/v-avstrii-vyhodtsa-iz-chechni-prigovorili-k-2-5-godam-tyurmy-za-uchastie-v-boyah-na-storone-ig",
        "title": "В Австрии выходца из Чечни приговорили к 2,5 годам тюрьмы за участие в боях на стороне ИГ",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-02-21T05:23:47.871Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        tags: [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/27/v-peterburge-zaderzhali-uchastnika-aktsii-lgbt-spetsnaza-proshedshey-23-fevralya",
        "title": "В Петербурге задержали участника акции «ЛГБТ-спецназа», прошедшей 23 февраля",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-01-18T05:23:45.059Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        tags: [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/27/nikolay-karachentsov-gospitalizirovan-posle-dtp-v-podmoskovie",
        "title": "Николай Караченцов госпитализирован после ДТП в Подмосковье",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-01-16T05:23:41.378Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        tags: [
            "Спорт", "Жизнь"
        ]
    }, {
        "id": "news/2017/02/27/id-kommersant-nachnet-vypuskat-pod-nazvaniem-dengi-reklamnoe-prilozhenie",
        "title": "ИД «Коммерсант» начнет выпускать под названием «Деньги» рекламное приложение",
        "image": "./img/2128-ht3.jpg",
        "author": "Meduza",
        "createdAt": new Date("2017-01-15T05:23:36.803Z"),
        "content": "Content of post",
        "summary": "Summary of post",
        "tags": [
            "Спорт", "Жизнь"
        ]
    }];

    var tags = ["Музыка", "Спорт", "Искусство"];

    function getArticles(skip, top) {
        skip = skip || 0;
        top = top || 10;
        return GLOBAL_ARTICLES.slice(skip, skip + top);
    }

    function addArticle(obj) {
        if (validateArticle(obj)) {
            for (var i = 0; i < obj.tags.length; i++) {
                if (tags.indexOf(obj.tags[i]) === -1) {
                    tags.push(obj.tags[i]);
                }
            }
            GLOBAL_ARTICLES[GLOBAL_ARTICLES.length] = obj;
            return true;
        }
        return false;
    }

    function validateArticle(obj) {
        if (
            (obj.id != undefined && typeof obj.id == "string") &&
            (obj.title != undefined && typeof obj.title == "string" ) &&
            (obj.author != undefined && typeof obj.author == "string") &&
            (obj.content != undefined && typeof obj.content == "string" ) &&
            (obj.summary != undefined && typeof obj.summary == "string") &&
            (obj.createdAt != undefined && typeof obj.createdAt == "object") &&
            (obj.tags != undefined && typeof obj.tags == "object") &&
            (obj.tags.length > 0 && obj.title.length < 100 && obj.summary.length < 200)
        ) {
            return true;
        }
        return false;
    }

    function removeArticle(id) {
        for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
            if (GLOBAL_ARTICLES[i].id === id) {
                GLOBAL_ARTICLES.splice(i, 1);
            }
        }
    }

    function editArticle(id, obj) {
        if (obj.author != undefined || obj.id != undefined || obj.createdAt != undefined || obj.tags != undefined) {
            return false;
        }
        for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
            if (id === GLOBAL_ARTICLES[i].id) {
                if (validateArticle(GLOBAL_ARTICLES[i])) {
                    if (obj.title != undefined && obj.content != undefined && obj.summary != undefined) {
                        GLOBAL_ARTICLES[i].title = obj.title;
                        GLOBAL_ARTICLES[i].content = obj.content;
                        GLOBAL_ARTICLES[i].summary = obj.summary;
                        return true;
                    } else if (obj.title === undefined && obj.content != undefined && obj.summary === undefined) {
                        GLOBAL_ARTICLES[i].content = obj.content;
                        return true;
                    } else if (obj.title != undefined && obj.content === undefined && obj.summary === undefined) {
                        GLOBAL_ARTICLES[i].title = obj.title;
                        return true;
                    } else if (obj.title === undefined && obj.content === undefined && obj.summary != undefined) {
                        GLOBAL_ARTICLES[i].summary = obj.summary;
                        return true;
                    } else if (obj.title != undefined && obj.content === undefined && obj.summary != undefined) {
                        GLOBAL_ARTICLES[i].summary = obj.summary;
                        GLOBAL_ARTICLES[i].title = obj.title;
                        return true;
                    } else if (obj.title === undefined && obj.content != undefined && obj.summary != undefined) {
                        GLOBAL_ARTICLES[i].summary = obj.summary;
                        GLOBAL_ARTICLES[i].content = obj.content;
                        return true;
                    } else if (obj.title != undefined && obj.content != undefined && obj.summary === undefined) {
                        GLOBAL_ARTICLES[i].title = obj.title;
                        GLOBAL_ARTICLES[i].content = obj.content;
                        return true;
                    }
                }
            }
        }
    }

    function getSizeArticles() {
        return GLOBAL_ARTICLES.length;
    }

    function containsTags(tagList, news) {
        for (var i = 0; i < tagList.tags.length; i++) {
            if (news.tags.indexOf(tagList.tags[i]) === -1) {
                return false;
            }
        }
        return true;
    }

    return {
        getArticles: getArticles,
        addArticle: addArticle,
        validateArticle: validateArticle,
        removeArticle: removeArticle,
        editArticle: editArticle,
        containsTags: containsTags,
        GLOBAL_ARTICLES: GLOBAL_ARTICLES,
        tags: tags,
        getSizeArticles: getSizeArticles,
    };
}())

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        /* DOM Загрузился.
         Можно найти в нем нужные элементы и сохранить в переменные */
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.news-list');
    }

    function insertArticlesInDOM(articles) {
        /* для массива объектов статей получим соотвествующие HTML элементы */
        var articlesNodes = renderArticles(articles);
        /* вставим HTML элементы в '.article-list' элемент в DOM. */
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function renderArticles(articles) {
        /* каждый объект article из массива преобразуем в HTML элемент */
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        /*
         Используем template из DOM, заполним его данными конкретной статьи - article.
         Этот код можно сделать лучше ...
         */
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.article-list-item-img').setAttribute("src", article.image);
        /*
         Склонируем полученный контент из template и вернем как результат
         */
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    /* Date -> 16/05/2015 09:50 */
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

/*
 Функция startApp вызовется, когда браузер полностью загрузит и распарсит исходный HTML (index.html)
 DOMContentLoaded – означает, что все DOM-элементы разметки уже созданы,
 можно их искать, вешать обработчики, создавать интерфейс, но при этом, возможно,
 ещё не догрузились какие-то картинки или стили.
 */
document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    /* DOM Загрузился.
     Можно найти в нем нужные элементы и сохранить в переменные */
    articleRenderer.init();
    /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
    renderArticles(0, articleModel.getSizeArticles());
}

/* Глобальная Функция для проверки. Свяжет модель и отображения */

function renderArticles(skip, top) {
    // 1. Удалим статьи из HTML
    articleRenderer.removeArticlesFromDom();

    // 2. Достанем статьи из модели
    var articles = articleModel.getArticles(skip, top);

    // 3. Отобразим статьи
    articleRenderer.insertArticlesInDOM(articles);
}

function chooseUserName(user_name){
    if (typeof user_name == "string"){
        return user_name;
    } return false;
}

function logIn(){
    if (userName != null){
        document.querySelector(".user-name").innerHTML = userName;
        document.querySelector(".add-button").style.visibility = "visible";
    }
}

function task5(user_name){
    userName = chooseUserName(user_name);
    logIn();
}