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
    return product;
  }

  deleteById(id) {
    const hadId = this.findById(id);
    this.#data = this.#data.filter((p) => p.id !== id);
    return hadId !== null;
  }

  findByCategory(category) {
    return this.#data.filter((p) => p.category === category);
  }

  findByName(name) {
    return this.#data.filter((p) => p.name === name);
  }
}
