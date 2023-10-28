import { A } from "solid-start";
import ItemInfo from "~/components/ItemInfo";
import ItemsPage from "~/components/ItemsPage";
import Nav from "~/components/Nav";

export default function Home() {
  return (
    <>
      <div class="h-full w-screen dark:text-white text-black bg-white dark:bg-neutral-900 p-[1vh] min-h-screen ">
        <Nav />
        <ItemsPage />
        {/* <ItemInfo /> */}
      </div>
    </>
  );
}
