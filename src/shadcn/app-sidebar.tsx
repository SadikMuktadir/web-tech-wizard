import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Blocks, BookOpen, Headset, Home } from "lucide-react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#home",
    icon: Home,
  },
  {
    title: "Services",
    url: "#services",
    icon: Blocks,
  },
  {
    title: "Blogs",
    url: "#blogs",
    icon: BookOpen,
  },
  {
    title: "Contact Us",
    url: "#contactUs",
    icon: Headset,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
