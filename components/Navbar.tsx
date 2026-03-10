export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Ecommerce Store</h1>

      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  )
}