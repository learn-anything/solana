import { useGlobalState } from "~/GlobalContext/global";

export default function ProductPage() {
  const global = useGlobalState();
  return (
    <>
      <div class="p-[50px] gap-8 w-full flex flex-col">
        <div class="w-full flex flex-col gap-1">
          <div class="text-[14px] font-light">Name</div>
          <input
            type="text"
            placeholder="Some product"
            onChange={(e) => {}}
            class="border rounded-[4px] px-4 p-3 text-[14px] outline-none border-slate-400"
          />
        </div>
        <div class="w-full flex flex-col gap-1">
          <div class="text-[14px] font-light">Description</div>
          <input
            type="text"
            placeholder="Description"
            class="border rounded-[4px] px-4 p-3 text-[14px] outline-none border-slate-400"
          />
        </div>
        <div class="w-full flex flex-col gap-1">
          <div class="text-[14px] font-light">Url</div>
          <input
            type="text"
            placeholder="Url"
            class="border rounded-[4px] px-4 p-3 text-[14px] outline-none border-slate-400"
          />
        </div>
      </div>
    </>
  );
}
