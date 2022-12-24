import { Add_Admin, Add_Item, ManageItems } from "../Pages";

 const admin_Route = [
    {
        name: "Add Admin",
        path: "/add_Admin",
        component: Add_Admin,
    },
    {
        name: "Add Item",
        path: "/add_Item",
        component: Add_Item,
    },
    {
        name: "Manage Items",
        path: "/manage_items",
        component: ManageItems,
    },    
]

export default admin_Route;