import { Product } from "./domain/product.js";
import { Categories } from "./enum/categories.js";
import { ProductRepository } from "./repository/product_repository.js";
import { printSection } from "./utils.js";

const coca = new Product("Coca cola", Categories.DRINK, 5.5);
const sprite = new Product("Sprite", Categories.DRINK, 2.5);
const fanta = new Product("Fanta Uva", Categories.DRINK, 3.0);

const donut = new Product("Donut", Categories.BAKERY, 3.5);
const cake = new Product("Bolo de Chocolate", Categories.BAKERY, 15.8);
const sandwich = new Product("Sanduiche", Categories.BAKERY, 6.0);

const meat = new Product("Carne", Categories.MEAT, 20.5);

const lettuce = new Product("Alface", Categories.HORTIFRUTI, 2.0);
const tomato = new Product("Tomate", Categories.HORTIFRUTI, 1.5);

const repository = new ProductRepository([
  coca,
  sprite,
  donut,
  cake,
  sandwich,
  meat,
  lettuce,
  tomato,
]);

printSection(
  "[findAll] Todos os produtos já cadastrados no banco: ",
  repository.findAll()
);

printSection(
  "[findById] Buscando o produto Sprite por id: ",
  repository.findById(sprite.id)
);

printSection(
  "[save] Adicionando o produto Fanta no banco:",
  repository.save(fanta)
);

printSection(
  "[findByCategory] Drinks cadastrados no banco (+ Fanta): ",
  repository.findByCategory(Categories.DRINK)
);

coca.price = 10;
printSection(
  "[updateById] Atualizando o valor de Coca para 10 reais: ",
  repository.updateById(coca.id, coca)
);

printSection(
  "[findByCategory] Drinks cadastrados no banco (+ novo preço Coca): ",
  repository.findByCategory(Categories.DRINK)
);

printSection(
  "[deleteById] Removendo produto Sprite: ",
  repository.deleteById(sprite.id)
);

printSection(
  "[findByCategory] Drinks cadastrados no banco (- Sprite): ",
  repository.findByCategory(Categories.DRINK)
);

printSection(
  "[findByCategory] Hortifrutis cadastrados no banco: ",
  repository.findByCategory(Categories.HORTIFRUTI)
);

printSection(
  "[findByCategory] Carnes cadastradas no banco: ",
  repository.findByCategory(Categories.MEAT)
);

printSection(
  "[findByCategory] Produtos de Padaria cadastradas no banco: ",
  repository.findByCategory(Categories.BAKERY)
);

printSection(
  "[findByName] Buscando produto Sanduiche pelo nome:",
  repository.findByName(sandwich.name)
);
