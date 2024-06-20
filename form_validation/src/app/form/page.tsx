


import Link from "next/link"
export default function Home() {
  return (
   <div className="text-3xl flex flex-col items-center justify-center py-20 px-40">
    <h1>Form page!</h1>
    <Link href="/"  className="bg-red-500 rounded px-8 py-3 mt-20">Home Page</Link>
   </div>
  )
}