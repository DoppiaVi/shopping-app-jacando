import Cheeses from "./pages/Cheeses";
import Vegetables from "./pages/Vegetables";
import Fruits from "./pages/Fruits";

const routes = [
  {
    path: "/vegetables",
    component: Vegetables,
  },
  {
    path: "/cheeses",
    component: Cheeses,
  },
  {
    path: "/fruits",
    component: Fruits,
  },
  {
    path: "/",
    component: Vegetables,
  },
];

export default routes;
