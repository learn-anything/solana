import { useGlobalState } from "~/GlobalContext/global"
import { NightlyConnectAdapter } from "@nightlylabs/wallet-selector-solana"
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction as SolanaTx
} from "@solana/web3.js"
import { createSignal } from "solid-js"
import { getAdapter } from "~/lib/solana/adapter"

export default function ItemInfo() {
  const global = useGlobalState()

  return (
    <>
      <div class="fixed top-0 right-0 w-screen h-screen flex items-center justify-end">
        <div id="InfoCard" class="z-20 w-full h-full bg-white flex gap-2 p-2">
          <div class="relative h-full w-full bg-[#f9f8f6]">
            <div
              class="w-[40px] flex items-center justify-center text-[20px] h-[40px] bg-white rounded-[6px] absolute top-2 left-2 cursor-pointer p-4"
              onClick={() => {
                global.setShowItemInfo(false)
              }}
            >
              x
            </div>
          </div>
          <div
            id="Info"
            class="w-full flex flex-col justify-between gap-2 h-full px-[5rem] pb-[2rem] pt-[5rem]"
          >
            <div class="">
              <div class="flex flex-col text-[15px] pb-[40px] leading-5">
                <div class="font-mono">Course</div>
                <div class="font-light text-[16px] opacity-80">$30</div>
              </div>
              {/* <div class=" pb-[40px]"></div> */}
            </div>
            <div class="flex flex-col gap-6">
              <div class="flex items-center">
                <button
                  onClick={async () => {
                    try {
                      console.log("testing")
                      const adapter = await getAdapter(false)
                      console.log(adapter, "adapter")
                      await adapter.connect()

                      // create command to ask user user to use 50$ from their wallet
                      //

                      // const ix = SystemProgram.transfer({
                      //   fromPubkey: adapter()!.publicKey!,
                      //   lamports: 1e6,
                      //   toPubkey: new PublicKey(
                      //     "147oKbjwGDHEthw7sRKNrzYiRiGqYksk1ravTMFkpAnv"
                      //   )
                      // })
                      // const tx = new SolanaTx()
                      //   .add(ix)
                      //   .add(ix)
                      //   .add(ix)
                      //   .add(ix)
                      //   .add(ix)
                      // const a = await connection.getRecentBlockhash()
                      // tx.recentBlockhash = a.blockhash
                      // tx.feePayer = adapter()!.publicKey!
                      // const signedTx = await adapter()!.signTransaction!(tx)
                      // await connection.sendRawTransaction(signedTx!.serialize())
                      // toast.success("Transaction was signed and sent!")
                    } catch (e) {
                      // toast.error("Error: couldn't sign and send transaction!")
                      console.log(e)
                    }
                  }}
                  class="bg-black hover:bg-transparent border border-black flex items-center justify-center p-3 w-[350px] text-white hover:text-black cursor-pointer"
                >
                  Buy for $30
                </button>
                <div class="text-[14px] flex items-center justify-center w-[200px] opacity-40 cursor-pointer">
                  Save for later
                </div>
              </div>
              {/* <div class="flex font-light justify-between gap-6 text-[14px]">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        #InfoCard {
          animation: 0.2s InfoCardSlide forwards ease-out;
        }

        @keyframes InfoCardSlide {
          0% {
            transform: translateX(850px);
          }
        }
      `}</style>
    </>
  )
}
