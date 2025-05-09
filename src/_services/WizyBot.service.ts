import type {AdaptedResponse} from "../_types/AdaptedResponse.ts";
import type {Product} from "../_types/ProductsApi.ts";
import {AdaptFromApi} from "./WizyBot.adapter.ts";
import {API_BASE_URL} from "../_constants/apis.ts";
import {WizyBotEndpoints} from "./WizyBot.endpoints.ts";

export const WizyBotService = {
    products: async (): Promise<AdaptedResponse> => {
        const response = await fetch(API_BASE_URL + WizyBotEndpoints.productsList)
        const data: Product[] = await response.json()

        return AdaptFromApi(data)
    }
}