import { Product } from "./domain/user.js";
import { Categories } from "./enum/categories.js";
import { ProductRepository } from "./repository/product_repository.js";

const repository = new ProductRepository([coca, sprite]);

const coca = new Product("Coca cola", Categories.DRINK, 5.5);
const sprite = new Product("Sprite", Categories.DRINK, 2.5);
const fanta = new Product("Fanta Uva", Categories.DRINK, 3.0);

// separar por metodos

const fetchCoca = repository.findById(coca.id);

let fetchAll = repository.findAll();

console.log(fetchCoca);

repository.save(fanta);

console.log(fetchAll);
