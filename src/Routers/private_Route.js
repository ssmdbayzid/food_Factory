import { Purchase, Order, Dashboard } from "../Pages";

 const privateRoute = [
    {
        name: "Purchase",
        path: "/purchase",
        component: Purchase,
    },
    {
        name: "Order",
        path: "/order",
        component: Order,
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        component: Dashboard,
    },    
]

export default privateRoute;