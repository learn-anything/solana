import { Show } from "solid-js";
import { useGlobalState } from "~/GlobalContext/global";
import ItemInfo from "~/components/ItemInfo";
import ItemsPage from "~/components/ItemsPage";
import Nav from "~/components/Nav";

export default function Home() {
  const global = useGlobalState();
  return (
    <>
      <div class="h-full w-screen mt-[80px] dark:text-white text-black bg-white dark:bg-neutral-900 p-2 min-h-screen ">
        <Show when={global.state.showCart}>
          <div class="fixed top-0 z-50 left-0 flex items-center justify-end w-screen h-screen">
            <div class="w-[400px] bg-white h-full flex flex-col gap-3">
              <div
                id="ItemInCart"
                class="flex w-full gap-3 p-3 border-b border-gray-100"
              >
                <div class="min-w-[80px] flex items-center justify-center h-[80px] bg-[#f9f8f6]">
                  image
                </div>
                <div class="flex w-full py-2 justify-between gap-4">
                  <div class="text-[14px]">name</div>
                  <div class="font-light text-[12px] items-end justify-between flex flex-col">
                    <div>$1250.00</div>
                    <div class="opacity-40">REMOVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Show>
        <Nav />
        <div id="hamburger" class="text-[12px] font-light h-[60px] px-8">
          <span class="opacity-50">All jewelery Collection / </span>
          <span class="font-normal">Featured</span>
        </div>
        <ItemsPage />
        <Show when={global.state.showItemInfo}>
          <ItemInfo />
        </Show>
      </div>
    </>
  );
}
