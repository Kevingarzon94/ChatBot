import type {Product} from "../_types/ProductsApi.ts";
import type {AdaptedResponse} from "../_types/AdaptedResponse.ts";
//It handles mapping the API data and transforming it into the required format.
export const AdaptFromApi = (
    productsList: Product[],
): AdaptedResponse => ({
  products: productsList.map((item) => ({
      id: item.id,
      name: item.displayTitle,
      price: '$50.00',
      image: item.imageUrl
  }))
})