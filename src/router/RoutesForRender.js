import { routesConfig, routesKeys } from "./RoutesConfig";

import CartPage from "../pages/CartPage";
import CatalogPage from "../pages/CatalogPage";
import DeliveryPage from "../pages/DeliveryPage";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import OrderPage from "../pages/OrderPage";

const renderMap = {
    [routesKeys.cart]: CartPage,
    [routesKeys.catalog]: CatalogPage,
    [routesKeys.delivery]: DeliveryPage,
    [routesKeys.main]: MainPage,
    [routesKeys.product]: ProductPage,
    [routesKeys.order]: OrderPage
}

export const routesForRender = routesConfig.map(route =>{
    return {
        ...route,
        element: renderMap[route.key]

}
})
