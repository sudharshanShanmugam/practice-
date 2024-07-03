import Link from "next/link";



export default function Home() {
  return (
    <div className="mt-40 align-center items-center  ">
      <h1>Home page</h1>
      <Link href="/users">Table page</Link>
    </div>
  );
}
