import { routesConfig, routesKeys } from "./RoutesConfig";

import CartPage from "../pages/CartPage";
import CatalogPage from "../pages/CatalogPage";
import DeliveryPage from "../pages/DeliveryPage";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

const renderMap = {
    [routesKeys.cart]: CartPage,
    [routesKeys.catalog]: CatalogPage,
    [routesKeys.delivery]: DeliveryPage,
    [routesKeys.main]: MainPage,
    [routesKeys.product]: ProductPage
}

export const routesForRender = routesConfig.map(route => ({
    ...route,
    element: renderMap[route.key]
}))
