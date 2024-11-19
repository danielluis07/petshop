import localFont from "next/font/local";
import Link from "next/link";

const dancingScript = localFont({
  src: "../../app/fonts/DancingScript-VariableFont_wght.ttf",
  variable: "--font-dancing-script",
  weight: "100 900",
});

export const Logo = () => {
  return (
    <div
      className={`${dancingScript.className} font-[900] text-4xl pr-14 cursor-default text-white`}>
      <Link href="/">Petly</Link>
    </div>
  );
};
