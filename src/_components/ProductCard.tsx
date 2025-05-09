import type {AdaptedResponse} from "../_types/AdaptedResponse.ts";

interface ProductCardProps {
    product: AdaptedResponse['products'];
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <div className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hidden">
                {product.map((item) => (
                    <div
                        key={item.id}
                        className="inline-flex items-center bg-white p-3 rounded-lg shadow-sm min-w-[300px] max-w-[350px]"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 mr-4 object-cover"
                        />
                        <div className="flex-1">
                            <h4 className="text-base font-semibold">{item.name}</h4>
                            <p className="text-gray-700">{item.price}</p>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-1 w-full">
                                View Page
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};