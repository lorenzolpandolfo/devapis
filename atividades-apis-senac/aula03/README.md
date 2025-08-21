# Atividade Aula 3

A atividade consiste em gerenciar produtos em uma lista utilizando arquitetura em camadas, com uma separação entre classe de domínio (`product.js`) e responsabilidade de manipulação de dados com a lista no repository (`product_repository.js`).

## Rodando

Para rodar o código, execute:

```
node main.js
```

## Output

```
 [findAll] Todos os produtos já cadastrados no banco:  [
  Product {
    id: 'f7e892ac-be01-4720-9757-9801d79204e4',
    name: 'Coca cola',
    category: 'drink',
    price: 5.5
  },
  Product {
    id: '06b3c58a-ad78-4bb5-9e06-76be7432d621',
    name: 'Sprite',
    category: 'drink',
    price: 2.5
  },
  Product {
    id: '28c484e7-da6a-412b-aca1-8bb94de86708',
    name: 'Donut',
    category: 'bakery',
    price: 3.5
  },
  Product {
    id: '44086a1e-36aa-4063-8cb1-f1587bd00e35',
    name: 'Bolo de Chocolate',
    category: 'bakery',
    price: 15.8
  },
  Product {
    id: '0c1ba3da-4858-42bf-9ad1-6348d2afc9b6',
    name: 'Sanduiche',
    category: 'bakery',
    price: 6
  },
  Product {
    id: 'cecd3f27-d698-4dd0-ae8b-c719b27f1bc5',
    name: 'Carne',
    category: 'meat',
    price: 20.5
  },
  Product {
    id: '95594329-9175-4a8e-8c99-5878b096332f',
    name: 'Alface',
    category: 'hortifruti',
    price: 2
  },
  Product {
    id: '44d86abb-fc1b-42c1-9677-625cb34c8452',
    name: 'Tomate',
    category: 'hortifruti',
    price: 1.5
  }
]


 [findById] Buscando o produto Sprite por id:  [
  Product {
    id: '06b3c58a-ad78-4bb5-9e06-76be7432d621',
    name: 'Sprite',
    category: 'drink',
    price: 2.5
  }
]


 [save] Adicionando o produto Fanta no banco: Product {
  id: 'ef6c1134-97cb-42fc-87b8-045d47c2ab00',
  name: 'Fanta Uva',
  category: 'drink',
  price: 3
}


 [findByCategory] Drinks cadastrados no banco (+ Fanta):  [
  Product {
    id: 'f7e892ac-be01-4720-9757-9801d79204e4',
    name: 'Coca cola',
    category: 'drink',
    price: 5.5
  },
  Product {
    id: '06b3c58a-ad78-4bb5-9e06-76be7432d621',
    name: 'Sprite',
    category: 'drink',
    price: 2.5
  },
  Product {
    id: 'ef6c1134-97cb-42fc-87b8-045d47c2ab00',
    name: 'Fanta Uva',
    category: 'drink',
    price: 3
  }
]


 [updateById] Atualizando o valor de Coca para 10 reais:  Product {
  id: 'f7e892ac-be01-4720-9757-9801d79204e4',
  name: 'Coca cola',
  category: 'drink',
  price: 10
}


 [findByCategory] Drinks cadastrados no banco (+ novo preço Coca):  [
  Product {
    id: '06b3c58a-ad78-4bb5-9e06-76be7432d621',
    name: 'Sprite',
    category: 'drink',
    price: 2.5
  },
  Product {
    id: 'ef6c1134-97cb-42fc-87b8-045d47c2ab00',
    name: 'Fanta Uva',
    category: 'drink',
    price: 3
  },
  Product {
    id: 'f7e892ac-be01-4720-9757-9801d79204e4',
    name: 'Coca cola',
    category: 'drink',
    price: 10
  }
]


 [deleteById] Removendo produto Sprite:  true


 [findByCategory] Drinks cadastrados no banco (- Sprite):  [
  Product {
    id: 'ef6c1134-97cb-42fc-87b8-045d47c2ab00',
    name: 'Fanta Uva',
    category: 'drink',
    price: 3
  },
  Product {
    id: 'f7e892ac-be01-4720-9757-9801d79204e4',
    name: 'Coca cola',
    category: 'drink',
    price: 10
  }
]


 [findByCategory] Hortifrutis cadastrados no banco:  [
  Product {
    id: '95594329-9175-4a8e-8c99-5878b096332f',
    name: 'Alface',
    category: 'hortifruti',
    price: 2
  },
  Product {
    id: '44d86abb-fc1b-42c1-9677-625cb34c8452',
    name: 'Tomate',
    category: 'hortifruti',
    price: 1.5
  }
]


 [findByCategory] Carnes cadastradas no banco:  [
  Product {
    id: 'cecd3f27-d698-4dd0-ae8b-c719b27f1bc5',
    name: 'Carne',
    category: 'meat',
    price: 20.5
  }
]


 [findByCategory] Produtos de Padaria cadastradas no banco:  [
  Product {
    id: '28c484e7-da6a-412b-aca1-8bb94de86708',
    name: 'Donut',
    category: 'bakery',
    price: 3.5
  },
  Product {
    id: '44086a1e-36aa-4063-8cb1-f1587bd00e35',
    name: 'Bolo de Chocolate',
    category: 'bakery',
    price: 15.8
  },
  Product {
    id: '0c1ba3da-4858-42bf-9ad1-6348d2afc9b6',
    name: 'Sanduiche',
    category: 'bakery',
    price: 6
  }
]


 [findByName] Buscando produto Sanduiche pelo nome: [
  Product {
    id: '0c1ba3da-4858-42bf-9ad1-6348d2afc9b6',
    name: 'Sanduiche',
    category: 'bakery',
    price: 6
  }
]
```
