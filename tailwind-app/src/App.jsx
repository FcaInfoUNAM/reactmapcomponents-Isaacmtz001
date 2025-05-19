import './App.css';
import Nav from './Nav';
import Card from './Card';

function App() {
  const products = [
    {
      name: "Unbranded Fresh Shoes",
      model: "978-1-905099-69-6",
      b64Image: "https://picsum.photos/seed/ozuQiMyzNK/640/480",
      properties: "Tecnología de compresión avanzada para mayor rendimiento.",
    },
    {
      name: "Modern Rubber Chair",
      model: "978-1-7904-2553-2",
      b64Image: "https://picsum.photos/seed/rDWbwgbgDz/640/480",
      properties: "Silla ergonómica con diseño moderno y cómodo.",
    },
  ];

  return (
    <>
      <Nav />
      <div className="bg-orange-500 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            paragraph={item.properties}
            image={item.b64Image}
            productRef="#"
          />
        ))}
      </div>
    </>
  );
}

export default App;
