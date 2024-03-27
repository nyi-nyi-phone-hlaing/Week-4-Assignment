import React from "react";
import Card from "./Card";

const productList = [
  {
    name: "Apple",
    description: "Fresh and juicy apples",
    price: 1.99,
    id: "FRT001",
    stock: 100,
    emoji: "🍎",
  },
  {
    name: "Banana",
    description: "Ripe bananas packed with nutrients",
    price: 0.49,
    id: "FRT002",
    stock: 150,
    emoji: "🍌",
  },
  {
    name: "Orange",
    description: "Sweet and tangy oranges",
    price: 2.49,
    id: "FRT003",
    stock: 80,
    emoji: "🍊",
  },
  {
    name: "Grapes",
    description: "Juicy and flavorful grapes",
    price: 3.99,
    id: "FRT004",
    stock: 120,
    emoji: "🍇",
  },
  {
    name: "Strawberry",
    description: "Fresh strawberries, perfect for snacking",
    price: 4.99,
    id: "FRT005",
    stock: 70,
    emoji: "🍓",
  },
  {
    name: "Pineapple",
    description: "Delicious and tropical pineapples",
    price: 2.99,
    id: "FRT006",
    stock: 90,
    emoji: "🍍",
  },
  {
    name: "Watermelon",
    description: "Refreshing watermelons for hot days",
    price: 6.99,
    id: "FRT007",
    stock: 60,
    emoji: "🍉",
  },
  {
    name: "Mango",
    description: "Exotic and sweet mangoes",
    price: 1.79,
    id: "FRT008",
    stock: 110,
    emoji: "🥭",
  },
  {
    name: "Kiwi",
    description: "Tangy and nutrient-packed kiwis",
    price: 0.99,
    id: "FRT009",
    stock: 130,
    emoji: "🥝",
  },
  {
    name: "Peach",
    description: "Soft and succulent peaches",
    price: 2.29,
    id: "FRT010",
    stock: 100,
    emoji: "🍑",
  },
  {
    name: "Plum",
    description: "Sweet and juicy plums",
    price: 1.49,
    id: "FRT011",
    stock: 80,
    emoji: "🍑",
  },
  {
    name: "Cherry",
    description: "Tart and flavorful cherries",
    price: 5.49,
    id: "FRT012",
    stock: 70,
    emoji: "🍒",
  },
  {
    name: "Pear",
    description: "Crisp and refreshing pears",
    price: 3.49,
    id: "FRT013",
    stock: 90,
    emoji: "🍐",
  },
  {
    name: "Raspberry",
    description: "Plump and juicy raspberries",
    price: 6.99,
    id: "FRT014",
    stock: 50,
    emoji: "🍇",
  },
  {
    name: "Blueberry",
    description: "Sweet and antioxidant-rich blueberries",
    price: 4.49,
    id: "FRT015",
    stock: 80,
    emoji: "🫐",
  },
];

const ProductList = () => {
  return (
    <div className='product-list'>
      {productList.length > 0 ? (
        productList.map((product) => (
          <Card key={product.id} product={product} />
        ))
      ) : (
        <p> NO Product avaliable </p>
      )}
    </div>
  );
};

export default ProductList;
