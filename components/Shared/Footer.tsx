import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="items-center justify-center border-t-2 flex flex-col mt-16 py-4 space-y-2">
      <div className="flex break-all">allangelman4@gmail.com</div>
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      <div> ©2023 by Allan Gelman</div>
    </footer>
  );
};
