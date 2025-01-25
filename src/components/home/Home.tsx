import { AppSidebar } from "@/shadcn/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Home;
