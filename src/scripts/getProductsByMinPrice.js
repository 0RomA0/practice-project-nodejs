import { PATH_DB } from "../constants/products.js";
import fs from "node:fs/promises"

// TODO Задача 2 
// 1. Створіть файл src/scripts/getProductsByMinPrice.js.
// 2. В ньому опишіть функцію getProductsByMinPrice. Вона має приймати параметром значення вартості і повертати масив 
// продуктів із файлу src / db / db.json, вартість яких дорівнює або перевищує значення параметра функції.Додайте 
// в цьому файлі логування результату виклику функції getProductsByMinPrice.
// 3. Додайте до файлу package.json скрипт get-products-by-min-price для виконання коду з файлу src/scripts/getProductsByMinPrice.js.
// 4. Виконавши скрипт get-products-by-min-price, переконайтесь, що ваша функція getProductsByMinPrice працює коректно.

const getProductsByMinPrice = async (price) => {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const products = JSON.parse(data);

    const filterProducts = products.filter(product => product.price >= price);

    if (filterProducts.length === 0) {
        console.log(`There is no product that is greater than or equal to price: ${price}`);
        return [];
       
    }
       
        return filterProducts;
}



console.log(await getProductsByMinPrice(600)); 




