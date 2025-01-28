import Link from "next/link";

export default function Home() {
    return (
        <div>
            Dinamik Rotasyon Sistemi
            <br/>
            <Link href={{
                pathname : "/cart",
                query : {
                    start : "2025-01-28",
                    end : "2025-02-03",
                }
            }}>
                Sepetime Git
            </Link>
        </div>
    );
}
