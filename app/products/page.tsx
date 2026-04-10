import { Product } from "../types/product"
import fs from "fs";
import path from "path";


const page = async () => {
    const filePath = path.join(process.cwd(), "public", "api", "products.json");
    const products: Product[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return (
        <div className="min-h-screen flex items-center justify-center" >
            <div className="flex md:flex-row flex-wrap gap-6 justify-center p-2">
                {products.map((product) => (
                    <a href={`/products/${product.id}`} key={product.id}>
                        <div className="border rounded-xl p-2 space-y-2 hover:shadow-lg transition">
                            <img src={product.image}
                                alt={product.name}
                                className="w-full rounded-lg" />
                            <h3 className="text-m font-semibold">{product.name}</h3>
                            <p className="text-sm">{product.category}</p>
                            <p className="font-bold">${product.price}</p>
                            <p className="font-semibold text-sm">Rating: {product.rating} / 5</p>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default page