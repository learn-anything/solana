import { Show, createSignal } from "solid-js";
import { useGlobalState } from "~/GlobalContext/global";

export default function ItemInfo() {
  const global = useGlobalState();

  return (
    <>
      <div class="fixed top-0 right-0 w-screen h-screen flex items-center justify-end">
        <div id="InfoCard" class="z-20 w-full h-full bg-white flex gap-2 p-2">
          <div class="h-full w-full bg-[#f9f8f6]"></div>
          <div
            id="Info"
            class="w-full flex flex-col justify-between gap-2 h-full px-[5rem] pb-[2rem] pt-[5rem]"
          >
            <div class="">
              <div class="flex flex-col text-[15px] pb-[40px] leading-5">
                <div class="font-mono">Mini Classic Shield Ring</div>
                <div class="font-light text-[16px] opacity-80">$5500.00</div>
                <div class="opacity-40 font-bold text-[10px]">
                  Made To Order
                </div>
              </div>
              <div class=" pb-[40px]">
                <div>Material</div>
                <div>Options</div>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <div class="flex items-center">
                <div
                  onClick={() => {
                    global.setShowCart(true);
                  }}
                  class="bg-black hover:bg-transparent border border-black flex items-center justify-center p-3 w-[350px] text-white hover:text-black"
                >
                  ADD TO CART
                </div>
                <div class="text-[14px] flex items-center justify-center w-[200px] opacity-40">
                  ADD TO WISHLIST
                </div>
              </div>
              <div class="flex font-light justify-between gap-6 text-[14px]">
                <div class="flex flex-col gap-2">
                  <div>Overview</div>
                  <div>Shipping</div>
                  <div>Returns & Exchanges</div>
                </div>
                <div class="w-full opacity-40">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  modi nesciunt commodi totam adipisci nihil iure eius
                  temporibus at atque consectetur doloribus ea, vitae veritatis?
                  Ut aperiam quo saepe dignissimos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        #InfoCard {
          animation: 0.5s InfoCardSlide forwards ease-out;
        }

        @keyframes InfoCardSlide {
          0% {
            transform: translateX(850px);
          }
        }
      `}</style>
    </>
  );
}
