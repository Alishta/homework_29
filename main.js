class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    }

    static SIZE_BIG = {
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }

    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }

    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach((topping) => calories += topping.calories);
        return calories;
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        this.toppings.forEach((topping) => price += topping.price);
        return price;
    }
}

//маленький гамбургер з начинкою із сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//Рахуємо калорії і ціну
document.write('Ваше замовлення: маленький гамбургер з додаванням сиру. Наразі калорійність Вашого гамбургеру становить ', hamburger.calculateCalories() + ', а ціна - ' + hamburger.calculatePrice() + ' тугриків.<br>');

//добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
document.write('Додати майонез? Гарний вибір! ');
//Рахуємо калорії і ціну
document.write('Наразі калорійність Вашого гамбургеру становить ', hamburger.calculateCalories() + ', а ціна - ' + hamburger.calculatePrice() + ' тугриків.<br>');

//додамо ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

//Усього
document.write('Ціна з врахуванням приправи: ', hamburger.calculatePrice() + ' тугриків.');