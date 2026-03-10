export default function ProductPage({ params }: any) {

  const products = [
    {id:1,name:"Phone",price:20000},
    {id:2,name:"Laptop",price:50000},
    {id:3,name:"Tablet",price:15000},
  ]

  const product = products.find(p => p.id == params.id)

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold">{product?.name}</h1>

      <p className="text-gray-600 text-lg">${product?.price}</p>

      <button className="bg-blue-500 text-white px-4 py-2 mt-4">
        Add to Cart
      </button>

    </div>

  )
}