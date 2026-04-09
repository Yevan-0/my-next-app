import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: "About",
    description: "Hi, I'm Yevan — a Frontend Software Engineer Intern at IMI Games with a passion for building clean," +
        "responsive user interfaces. I enjoy turning ideas into real, interactive experiences on the web."
}

async function AboutImage({
    imageFilename,
    alt
}: {
    imageFilename: string
    alt: string
}) {
    const { default: image } = await import(
        `@/public/${imageFilename}`
    )




    return (
        <div className='absolute inset-0'>
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
                className='z-0 brightness-80 blur-sm invert dark:invert-0'
                loading='eager'
                priority

            />
            <div className='absolute inset-0 bg-white/20 dark:bg-black/20 z-1' />
        </div>
    )
}

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center" >
            <AboutImage imageFilename='maths.jpg' alt='about background'/>
        
            <div className="relative z-10 space-y-3 max-w-3xl"><h1 className="text-5xl font-semibold">About Page</h1>

                <p>Hi, I'm Yevan — a Frontend Software Engineer Intern at IMI Games with a passion for building clean,
                    responsive user interfaces. I enjoy turning ideas into real, interactive experiences on the web.</p>

                <h3 className='text-2xl font-semibold'>Skills and Technologies</h3>
                <ul className='list-disc list-inside'>
                    <li className='text-base font-semibold'>React</li>
                    <li className='text-base font-semibold'>JavaScript</li>
                    <li className='text-base font-semibold'>Python</li>
                    <li className='text-base font-semibold'>Nextjs <span className='font-light'>(Currently Learning)</span></li>
                </ul>
            </div>

        </div>
    )
}

export default page