import localFont from "next/font/local";
import Link from "next/link";

const dancingScript = localFont({
  src: "../../app/fonts/DancingScript-VariableFont_wght.ttf",
  variable: "--font-dancing-script",
  weight: "100 900",
});

export const Logo = ({
  isScrolled,
  isNotHomePage,
}: {
  isScrolled?: boolean;
  isNotHomePage?: boolean;
}) => {
  return (
    <div
      className={`${dancingScript.className} ${
        isNotHomePage
          ? "text-white"
          : isScrolled
          ? "text-default-orange"
          : "text-white"
      } font-[900] text-4xl pr-14 cursor-default`}>
      <Link href="/">Petly</Link>
    </div>
  );
};
