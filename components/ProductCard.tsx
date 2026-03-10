type Product = {
  name: string
  price: number
}

export default function ProductCard({name,price}: Product) {
  return (

    <div className="border p-4 rounded shadow">

      <h2 className="text-lg font-bold">{name}</h2>

      <p className="text-gray-600">${price}</p>

      <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
        Add to Cart
      </button>

    </div>

  )
}