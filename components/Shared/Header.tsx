import Link from "next/link";
import { useRouter } from "next/router";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../styles/Home.module.css";
import cn from "classnames";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AboutContent } from "../AboutContent";

export const Header = () => {
  return (
    <>
      <div className="flex flex-row items-end mb-8 py-4 bg-white top-0 max-md:flex-col max-md:items-center">
        <div className="text-5xl text-slate-900 font-extralight grow whitespace-nowrap max-md:text-3xl max-md:pb-4">
          <Link href={"/"}>ALLAN GELMAN</Link>
        </div>

        <nav
          aria-label="Main"
          className="flex flex-wrap justify-center gap-x-4"
        >
          <HeaderCategory name={"CODE"} href={"/Coding"} />
          <HeaderCategory name={"3D"} href={"/ThreeDArt"} />
          <HeaderCategory name={"AR/VR"} href={"/AR"} />
          <HeaderCategory name={"PAINTING"} href={"/Painting"} />
          {/* <HeaderCategory name={"FABRIC"} href={"/Sewing"} /> */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="text-lg font-extralight whitespace-nowrap text-slate-900 hover:text-slate-500"
              >
                {"ABOUT"}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay
                className={cn(
                  styles.DialogOverlay,
                  "fixed inset-0 bg-slate-600/50 backdrop-blur-sm"
                )}
              >
                <Dialog.Content
                  className={cn(
                    styles.DialogContent,
                    "fixed top-1/2 left-1/2 transform bg-white overflow-y-scroll -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[55vw] h-[93vh] max-w-[90vw] md:max-w-[55vw] max-h-[93vh] outline-none rounded-lg"
                  )}
                >
                  <Dialog.Title className="sr-only">About Allan Gelman</Dialog.Title>
                  <AboutContent />
                  <Dialog.Close asChild>
                    <button
                      className="text-white flex h-6 w-6 rounded-full absolute top-[10px] bg-black/40 hover:bg-black/60 right-[10px] items-center outline-none justify-center"
                      aria-label="Close"
                    >
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </div>
    </>
  );
};

interface HeaderCategoryProps {
  name: string;
  href: string;
}

const HeaderCategory = ({ name, href }: HeaderCategoryProps) => {
  const { pathname } = useRouter();
  // The home page shows the coding projects, so treat "/" as CODE.
  const isActive = pathname === href || (pathname === "/" && href === "/Coding");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-lg whitespace-nowrap text-slate-900 hover:text-slate-500",
        isActive
          ? "font-normal underline decoration-1 underline-offset-8"
          : "font-extralight"
      )}
    >
      {name}
    </Link>
  );
};
