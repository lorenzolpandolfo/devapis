import { Product } from "./domain/user.js";
import { Categories } from "./enum/categories.js";
import { ProductRepository } from "./repository/product_repository.js";

const coca = new Product("Coca cola", Categories.DRINK, 5.5);
const sprite = new Product("Sprite", Categories.DRINK, 2.5);
const fanta = new Product("Fanta Uva", Categories.DRINK, 3.0);

const repository = new ProductRepository([coca, sprite]);

// separar por metodos
const fetchCoca = repository.findById(coca.id);

let fetchAll = repository.findAll();

console.log("Coca já existente no banco:", fetchCoca);

repository.save(fanta);

const fetchFanta = repository.findById(fanta.id);

console.log("Fanta adicionada no banco:", fetchFanta);

console.log("Banco de dados atual: ", fetchAll);
