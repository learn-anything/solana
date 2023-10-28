import { onMount } from "solid-js"
import { A } from "solid-start"
import { useGlobalState } from "~/GlobalContext/global"
import ItemInfo from "~/components/ItemInfo"
import ItemsPage from "~/components/ItemsPage"

export default function Home() {
  const global = useGlobalState()
  onMount(() => {
    console.log(global.state.expandItemId, "test")
  })
  return (
    <>
      <div class="h-full w-screen dark:text-white text-black bg-white dark:bg-neutral-900 p-[1vh] min-h-screen ">
        <ItemsPage />
        {/* <ItemInfo /> */}
      </div>
    </>
  )
}
