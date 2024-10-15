import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.webp";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Horizon Developers">
      <Image src={logo} alt="Horizon Developers" width={50} height={40} />
    </Link>
  );
}
