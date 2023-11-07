import { useGlobalState } from "~/GlobalContext/global";

interface Props {
  children: any;
  close: (boolean: boolean) => void;
}

export default function Modal(props: Props) {
  const global = useGlobalState();
  return (
    <>
      <div class="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-10">
        <div
          class="fixed top-0 left-0 w-screen h-screen"
          onClick={() => {
            props.close(false);
          }}
        ></div>
        <div class="w-full h-full flex items-center justify-center z-20">
          {props.children}
        </div>
      </div>
    </>
  );
}
