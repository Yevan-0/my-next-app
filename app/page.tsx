import { Metadata } from "next";
import Image from "next/image";
import cat from '../public/cat.jpg';

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page"
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" >
      <div className="space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">Home Page</h1>
        <Image 
        src={cat} 
        alt="cat"
        loading="eager"
        />
        <p className="text-gray-400">Static import was used to display the image</p>
      </div>

    </div>
  );
}
