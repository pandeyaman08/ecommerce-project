export default function Home() {

  const products = [
    {name:"Phone",price:20000},
    {name:"Laptop",price:50000},
    {name:"Tablet",price:15000}
  ]

  return (
    <main>
      <h1>Ecommerce Store</h1>

      {products.map((item)=>{
        return(
          <p>{item.name} - ${item.price}</p>
        )
      })}

    </main>
  )
}
