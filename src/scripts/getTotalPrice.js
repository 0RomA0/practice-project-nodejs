import { PATH_DB } from "../constants/products.js";
import fs from "node:fs/promises"


// TODO  Задача 3

// 1. Створіть файл src/scripts/getTotalPrice.js.
// 2. В ньому опишіть функцію getTotalPrice. Вона має повертати загальну вартість продуктів в масиві у файлі src/db/db.json.
// Додайте в цьому файлі логування результату виклику функції getTotalPrice.
// 3. Додайте до файлу package.json скрипт get-total-price для виконання коду з файлу src/scripts/getTotalPrice.js.
// 4. Виконавши скрипт get-total-price, переконайтесь, що ваша функція getTotalPrice коректно рахує загальну вартість продуктів з масиву файлу.


const getTotalPrice = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const products = JSON.parse(data);

    const totalProductsPrice = products.reduce((total, product) => {
        return total + Number(product.price);
    }, 0);

    console.log("Total price");
    return totalProductsPrice;
}


console.log(await getTotalPrice());