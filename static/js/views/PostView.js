import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Мой блог");
    }

    async fetchText() {
        let response = await fetch("/static/texts/" + this.params.id + ".html");
        let data = await response.text();
        // console.log(response);

        return data;
    }

    async getHtml() {

        let text = await this.fetchText();
// Дополнительный текст внизу:
        text += "<p><a href='/posts' data-link>Смотреть другие посты</a></p>";
        //Итоговый текст помещаем в контейнер с классом post
        text = "<div class='post'>" + text + "</div>";

        return text;
    }
}