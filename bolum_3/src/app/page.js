import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Link href={"/contact"}>İletişim</Link>
        <br/><br/>
        <Link href={"/faq"}>S.S.S.</Link>
    </div>
  );
}
