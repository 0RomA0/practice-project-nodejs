import { PATH_DB } from "../constants/products.js";
import fs from "node:fs/promises"



//TODO  Задача 6

// 1. Створіть файл src/scripts/groupProductsByCategories.js.
// 2. В ньому опишіть функцію groupProductsByCategories.
// Вона має повертати об'єкт, в якому назви продуктів будуть згруповані за категоріями.
// В результаті виконання задачі ви повинні отримати об'єкт схожої структури:

// <!-- {
// category1: [name1, name3, name5],
// category2: [name2, name7],
// category3: [name4, name6],
// } -->

// 3. Додайте до файлу package.json скрипт group-products для виконання коду з файлу src/scripts/groupProductsByCategories.js.
// 4. Виконавши скрипт group-products, переконайтесь, що ваша функція group-products коректно групує назви продуктів за категоріями.


const groupProductsByCategories = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const products = JSON.parse(data);

    const categoriesOgject = products.reduce((obj, { category, name }) => {
        
        if (!obj[category]) {
            obj[category] = [];
        }
        obj[category].push(name);
        return obj;
        
    }, {})
    
    console.log(categoriesOgject);
}

groupProductsByCategories();


