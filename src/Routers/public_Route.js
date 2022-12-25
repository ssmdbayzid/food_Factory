import { Home, Shop, Contact, Sign_In, Sign_Up } from "../Pages";

const publicRouite = [
    {
        name: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "Home",
        path: "/home",
        component: Home,
    },
    {
        name: "Shop",
        path: "/shop",
        component: Shop,
    },
    
    {
        name: "Contact",
        path: "/contact",
        component: Contact,
    },
    {
        name: "Sign In",
        path: "/sign-in",
        component: Sign_In,
    },
    {
        name: "Sign Up",
        path: "/sign-up",
        component: Sign_Up,
    },    
]

export default publicRouite;
