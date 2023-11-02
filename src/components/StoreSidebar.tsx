export default function StoreSidebar() {
  return (
    <>
      <div
        id="SellSidebar"
        class="min-w-[250px] justify-between font-light text-white flex flex-col bg-black h-screen fixed left-0 top-0"
      >
        <div>
          <div class="border-b-[0.5px] text-[24px] font-semibold min-h-[100px] flex items-center justify-center">
            Learn Anything
          </div>
          <div class="p-3 px-4 border-y-[0.5px] border-gray-400">Home</div>
          <div class="p-3 px-4 border-y-[0.5px] border-gray-400">Products</div>
          <div class="p-3 px-4 border-y-[0.5px] border-gray-400">Checkout</div>
        </div>
        <div>
          <div class="p-3 px-4 border-y-[0.5px] border-gray-400">Help</div>
          <div class="p-3 px-4 border-t-[0.5px] border-gray-400">Settings</div>
        </div>
      </div>
    </>
  );
}
