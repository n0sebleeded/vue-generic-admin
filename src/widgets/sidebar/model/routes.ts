import {
  List,
  Users,
  Tag,
  Apple,
  Grid3X3,
  ShoppingBagIcon,
} from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

interface SidebarRoute {
  title: string;
  url: string;
  icon: FunctionalComponent;
  items?: Array<SidebarSubRoute>;
}

interface SidebarSubRoute {
  title: string;
  url: string;
}

export const routes: Array<SidebarRoute> = [
  {
    title: "Заказы",
    url: "#",
    icon: List,
  },
  {
    title: "Клиенты",
    url: "#",
    icon: Users,
  },
  {
    title: "Промокоды",
    url: "#",
    icon: Tag,
  },
  {
    title: "Продукты",
    url: "#",
    icon: Apple,
  },
  {
    title: "Категории",
    url: "#",
    icon: Grid3X3,
  },
  {
    title: "Магазины",
    url: "#",
    icon: ShoppingBagIcon,
  },
];
