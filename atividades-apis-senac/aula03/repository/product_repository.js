// save(Product),
// findAll(), findById(id),
// updateById(id),
// deleteById(id),
// findByCategory(Category), findByName(string)

export class ProductRepository {
  #data;

  constructor(data) {
    this.#data = data || [];
  }

  save(product) {
    this.#data.push(product);
    return product;
  }

  findAll() {
    return [...this.#data];
  }

  findById(id) {
    return this.#data.filter((p) => p.id === id);
  }

  updateById(id, product) {
    this.#data = this.#data.filter((p) => p.id !== id);
    this.#data.push(product);
  }

  deleteById(id) {
    this.#data = this.#data.filter((p) => p.id !== id);
    return id;
  }
}
