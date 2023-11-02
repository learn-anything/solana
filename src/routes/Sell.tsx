import { useGlobalState } from "~/GlobalContext/global";
import StoreSidebar from "~/components/StoreSidebar";
import StoreTopbar from "~/components/StoreTopbar";

export default function Home() {
  const global = useGlobalState();
  return (
    <>
      <div class="h-full w-screen flex dark:text-white text-black bg-white dark:bg-neutral-900 min-h-screen ">
        <StoreSidebar />
        <div class="ml-[250px] w-full">
          <StoreTopbar />
          <div></div>
        </div>
      </div>
    </>
  );
}
