import Admin from "./pages/Admin/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import DevicePage from "./pages/Device/DevicePage";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    }
]

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket,
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage,
    }
]
