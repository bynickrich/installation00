import Link from "next/link";

export default function HaloInfinitePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
      <h1 className="text-2xl font-semibold">Halo Infinite</h1>
      <Link href="/" className="underline underline-offset-2">
        Back to games
      </Link>
    </main>
  );
}
