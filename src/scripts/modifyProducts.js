// import { PATH_DB } from "../constants/products.js";
// import fs from "node:fs/promises"


// TODO  Задача 5

// 1. Створіть файл src/scripts/modifyProducts.js.
// 2. В ньому опишіть функцію modifyProducts.Вона має перезаписувати вміст файлу src / db / db.json таким чином, щоб у
// файлі в результаті опинився перелік тих самих продуктів, але без поля description.
// 3. Додайте до файлу package.json скрипт modify-products для виконання коду з файлу src/scripts/modifyProducts.js.
// 4. Виконавши скрипт modify-products, переконайтесь, що ваша функція modifyProducts коректно перезаписує вміст файлу src/db/db.json.

// const modifyProducts = async () => {
//     const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
//     const products = JSON.parse(data);
// } 

// modifyProducts();