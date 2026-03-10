import Link from "next/link"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"


export default function Home() {

  const products = [
    {name:"Phone",price:20000},
    {name:"Laptop",price:50000},
    {name:"Tablet",price:15000},
    {name:"Headphone",price:3000},
    {name:"Camera",price:25000}
  ]

  return (
    <main>

      <Navbar/>

      <div className="p-6 grid grid-cols-3 gap-4">

        {products.map((item,index)=>(
          <Link key={index} href={`/product/${index+1}`}>
            <ProductCard
            name={item.name}
            price={item.price}
          />
          </Link>
        ))}

      </div>

    </main>
  )
}
