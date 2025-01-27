import { AppSidebar } from "@/shadcn/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import RightSection from "./rightSection/RightSection";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
      <div className="w-full pr-5">
        <RightSection></RightSection>
      </div>
    </div>
  );
};

export default Home;
