import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'

const profileImages = [
    '/Images/IMG_6515.jpg',
    '/Images/IMG_9274.JPG',
    '/Images/IMG_1198.jpg',
    '/Images/IMG_3374.JPG',
    '/Images/IMG_4405.PNG',
]

export default function AboutMe() {
    const [currentImage, setCurrentImage] = useState(0)
    const profilePicRef = useRef(null)

    const handleImageClick = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % profileImages.length)
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            const vw = window.innerWidth
            const vh = window.innerHeight
            const x = event.clientX / vw
            const y = event.clientY / vh

            profilePicRef.current.style.setProperty('--mouse-x', x)
            profilePicRef.current.style.setProperty('--mouse-y', y)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <section className="container mx-auto px-4 py-8 text-center">
            <div className="w-96 h-96 mx-auto mb-4 relative profilePicContainer" onClick={handleImageClick}>
                <div className="profilePic cursor-pointer" ref={profilePicRef}>
                    <Image
                        src={profileImages[currentImage]}
                        alt="Kevin Sullivan"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Kevin Sullivan, Full Stack Engineer</h1>
            <p className="text-lg">
                Hello! I'm Kevin, a passionate software engineer based in Brooklyn, NY who is skilled in Full-Stack development.
                My 4 years of hands-on experience in technical support and customer success fueled my interest in solving
                complex problems and pushed me to learn how to build applications. I'm now on the hunt for a web developer role
                at a forward-thinking company, eager to contribute my skills while relentlessly honing my craft.
            </p>
            <p className="mt-4">
                Please feel free to check out my <Link href="https://www.linkedin.com/in/kevin-sullivan-se/" legacyBehavior><a className="text-blue-500">LinkedIn</a></Link> and <Link href="https://github.com/skullington4" legacyBehavior><a className="text-blue-500">Github</a></Link> or email me at <a href="mailto:kevsullivan12@gmail.com" className="text-blue-500">kevsullivan12@gmail.com</a>.
            </p>
        </section>
    )
}
