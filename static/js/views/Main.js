import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Главная страница");
    }

    async getHtml() {
        return `
        <h1>Привет всем!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eligendi obcaecati! Maiores, tempora. Et
            labore nihil natus, dolor voluptates neque excepturi assumenda delectus, nam possimus modi eum nulla quis
            quam?</p>
        
        <img src="/images/photo1.jpg" alt="">

        <p>
        <a href="/posts" data-link>Перейти к блогу</a>
        </p>
            `
    }
}