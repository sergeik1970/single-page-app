import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Контакты");
    }

    async getHtml() {
        return `
        <h1>Контакты</h1>

        <p>Здесь вы найдёте мои контактные данные!</p>
        <p>

            <a href="#" ><i class="fa-brands fa-telegram"></i> Телеграм </a><br>
            <a href="#" ><i class="fa-brands fa-discord"></i> Дискорд </a><br>
            <a href="#" ><i class="fa-solid fa-envelope"></i> Электронная почта </a><br><br>


        <a href="/" data-link>Перейти на главную страницу <i class="fa-solid fa-house"></i></a>
        </p>
        `;
    }
}