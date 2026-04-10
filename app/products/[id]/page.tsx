import { Product } from "../../types/product"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products.json`)
    const products: Product[] = await res.json()

    const product = products.find((p) => p.id === Number(id))

    if (!product) return <div>Product not found</div>

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl space-y-4">
                <img src={product.image} alt={product.name} className="w-full rounded-xl" />
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="">{product.description}</p>
                <p className="">{product.category}</p>
                <p className="text-2xl font-bold">${product.price}</p>
                <p>⭐ {product.rating}</p>
                <p className="text-sm font-semibold">{product.reviews} reviews</p>
            </div>
        </div>
    )
}

export default page