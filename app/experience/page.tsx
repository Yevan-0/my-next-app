import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
    title: "Experience",
    description: "This is the experience page. Conetent coming soon."
}

async function MountainImage({
    imageFilename,
    alt }: {
        imageFilename: string
        alt: string
    }) {
    const { default: image } = await import(
        `@/public/${imageFilename}`
    )

    return (
        <div>
            <Image
                alt={alt}
                src={image}
                placeholder='blur'
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover'
                }}
                className='z-0 brightness-80 blur-sm'
                priority
                loading='eager'
            />
            <div className='absolute inset-0 bg-black/60 z-1'/>
        </div>
    )
}


const Page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <MountainImage imageFilename='mountain.jpg' alt='mountain' />

            <div className="relative z-10 space-y-3 max-w-3xl">
                <h1 className="text-5xl font-semibold">Experience</h1>
                <p className="text-white">This is the experience page. Conetent coming soon.</p>



            </div>
        </div>
    )
}

export default Page