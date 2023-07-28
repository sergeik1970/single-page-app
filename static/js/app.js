import Contacts from "./views/Contacts.js";
import Main from "./views/Main.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";

const pathToRegex = (path) =>
  RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const getParams = (match) => {
    // Получаем параметр из пути в адресной строке 
    const values = match.result.slice(1);
    // console.log(values)
    // Получаем ключ значения
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
        (result) => result[1]
    );

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));

}

// console.log("Static JS loaded");

const router = async () => {
    const routes = [
        // Тестируем пути
        // { path: "/", view: () => console.log("Главная страница") },
        // { path: "/posts", view: () => console.log("Блог") },
        // { path: "/contacts", view: () => console.log("Контакты") },

        { path: "/", view: Main },
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: PostView },
        { path: "/contacts", view: Contacts },

    ];
    // Проверяем, какому из путей соответствует текущий адрес в адресной строке браузера. Для совпадающего пути свойство isMatch будет равно True.

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    // console.log(potentialMatches);

    // Записываем нужный путь в переменную
    let match = potentialMatches.find((match) => match.result !== null);
    // Если путь из адресной строки не найден, отправляем на путь "/"
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    // console.log(match);

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    new match.route.view();

}

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link")) {
            e.preventDefault();
            // переход на url
            navigateTo(e.target.href);
        };
    });

    router();
});