import { Product } from '@/type'
import { addProductToDatabase } from '@/actions/serverActions'

export default async function Home() {
  const res = await fetch('https://64fbf4fb605a026163ae172c.mockapi.io/products', {
    cache: 'no-cache',
    next: {
      tags: ['products']
    }
  })

  const products: Product[] = await res.json()


  return (
    <main>
      <h1 className="text-3xl font-bold text-center">
        Product warehouse
      </h1>

      <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input name="product" placeholder="상품의 이름을 입력해주세요" className="border border-gray-300 p-2 rounded-md" />
        <input name="price" placeholder="상품의 가격을 입력해주세요" className="border border-gray-300 p-2 rounded-md" />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          상품 추가
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

    </main>
  )
}
