import { useState } from 'react';
import Image from 'next/image';

const hobbies = [
    {
        title: 'Baseball',
        description: 'Growing up, baseball was everything. I played almost every day from the age of 5 to 19. If you asked the 10-year-old me what I was going to be, of course, I would have said a pitcher for the Yankees. My Senior year of high school, I was the captain of my team and was awarded First Team All Greater Rochester as a pitcher. Baseball taught me a lot about life, how to be a team player, how to find inspiration in great leaders, how to motivate those around me and lead by example, and how to take over when the time is right. While some dreams fade, others come to life.',
        images: ['/Images/hobbies/IMG_5906.jpg']
    },
    {
        title: 'Guitar',
        description: 'Music has always been a huge part of my life. I am a fully self-taught guitar player who started when I was 21. I picked up my first guitar in college and loved everything about it. Putting in a lot of practice, and getting direct results was something that fits my personality perfectly. I was most surprised about the ability to change my mental state and be a release after playing. And no, I will not play Freebird.',
        images: ['/Images/hobbies/PlayingGuitar.PNG']
    },
    {
        title: 'Fishing',
        description: 'I have spent a fair share of time in the past 2 years on boats, banks, and docks fishing. Honing my skills and practicing patience, I have been able to catch some pretty cool fish and have a blast doing it. There are a lot of life lessons to learn with a rod in your hand, and I am excited to keep learning them. Go Bills!',
        images: [
            '/Images/hobbies/fishing/IMG_4326.jpg',
            '/Images/hobbies/fishing/IMG_3314.jpg',
            '/Images/hobbies/fishing/IMG_5839.jpg',
            '/Images/hobbies/fishing/IMG_5985.jpg',
            '/Images/hobbies/fishing/IMG_8317.JPEG'
        ]
    },
    {
        title: 'Travel',
        description: 'Travel is an important part of my life. I have been lucky enough to travel to some incredible places in my life with my partner, Anna. Some of my favorite places so far have been: Malaysia - Had the coolest scenery, delicious street food, and kindest people. Paris - Amazing architecture and some of the best food I have ever had. Lisbon - Breathtaking views, beautiful mosaic tiles, and the best custard tarts in the world. Sydney - As far from home as I have ever been, and it was worth it. Loved the city vibes and culture. Unfortunately, did not get to see any kangaroos.',
        images: ['/Images/hobbies/IMG_2594.jpeg']
    }
];

const Hobbies = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">AWAY FROM THE KEYBOARD</h1>
            {hobbies.map((hobby, index) => (
                <div key={hobby.title} className="mb-16">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-4">{hobby.title}</h4>
                    <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                        <div className="md:w-1/2 p-4">
                            <Carousel images={hobby.images} />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <p className="text-sm sm:text-base lg:text-lg">{hobby.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full max-w-xl mx-auto">
            <div className="relative h-48 sm:h-64 lg:h-[30rem] overflow-hidden rounded-lg min-w-3/4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image src={image} alt={`Image ${index}`} fill style={{ objectFit: 'contain' }} />
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button
                        onClick={handlePrevClick}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                    >
                        &gt;
                    </button>
                </>
            )}
        </div>
    );
};

export default Hobbies;
