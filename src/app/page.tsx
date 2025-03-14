import Image from "next/image";
import logo from "@@/app/components/assets/logo.png";

export default function Home() {
  return (
    <div>
      <h1>Logistics UK</h1>
      <Image
        src={logo}
        alt="Logistics UK"
        width={500}
        height={500}
      />
    </div>
  );
}
