import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Plural',
    description: 'A marketplace for thrifted and upcycled goods curated by the Schilling sisters. All items link to a Depop listing.',
    technologies: 'Next.js, TailwindCSS, Firebase',
    images: ['/images/Plural/Plural1.JPG', '/images/Plural/Plural2.JPG'],
    githubUrl: '#', // Add the GitHub URL here
    websiteUrl: 'https://plural-e916b8d817b6.herokuapp.com/',
  },
  {
    title: 'Pick Your Poison',
    description: 'This is an app that allows you to create a cocktail from scratch or pick a drink from a classic cocktail menu. Pick a glass, add spirit(s), add mixer(s), add a garnish, name it, and enjoy!',
    technologies: 'React, JavaScript, HTML, CSS, MongoDb',
    images: ['/images/PickYourPoison.png'],
    githubUrl: 'https://github.com/skullington4/pickyourpoison',
    websiteUrl: 'https://pickyour-poison-d276c8edc8c1.herokuapp.com/',
  },
  {
    title: 'ENGINEAR',
    description: 'Helping developers get connected with local or remote businesses to contract software engineering help. This platform allows any user to browse posts by businesses looking for software engineering help or a software engineer looking for work. Businesses can create posts outlining their needs, and engineers can showcase their skills and rates.',
    technologies: 'Python, Django, Neon PostgressSQL DB, Heroku, JavaScript, HTML5, CSS, Materialize',
    images: [
      '/images/project1/En help.png',
      '/images/project1/En home.png',
      '/images/project1/En signup.png',
      '/images/project1/En work.png'
    ],
    githubUrl: 'https://github.com/skullington4/enginear',
    websiteUrl: 'https://enginearapp-f0ae5d54cb3b.herokuapp.com/',
  },
  {
    title: 'BLACKJACK',
    description: 'This is the game Blackjack! No splitting hands or doubling down. Player will go first and hit until they either stay or are over 21. Then it is the computer\'s turn. The winner is decided by getting blackjack or whoever has the higher number at or under 21.',
    technologies: 'JavaScript, HTML, CSS, Cards Library',
    images: [
      '/images/project2/Blackjack.PNG',
      '/images/project2/Bj 1.png',
      '/images/project2/Bj 2.png',
      '/images/project2/Bj 3.png',
      '/images/project2/Bj 4.png',
    ],
    githubUrl: 'https://github.com/skullington4/kevins-blackjack-game/',
    websiteUrl: 'https://skullington4.github.io/kevins-blackjack-game/',
  },
  {
    title: 'PURE THREADS',
    description: 'This website is a clothing retail store. You can log in using your Google account, browse items, rate items, add items to the cart, and purchase your items!',
    technologies: 'Node.JS, Express.js, HTML, CSS, MongoDB, Mongoose, OAuth',
    images: [
      '/images/project3/PT details page.png',
      '/images/project3/PT homepage.png',
      '/images/project3/PT page1.png',
      '/images/project3/PT page2.png',
      '/images/project3/PureThreadsHome.PNG'
    ],
    githubUrl: 'https://github.com/skullington4/pure-threads',
    websiteUrl: 'https://pure-threads.herokuapp.com',
  },
]

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">PROJECTS</h1>
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-16`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-1/2 p-4 flex justify-start flex-col items-start">
            <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
            <p className="mb-4">{project.description}</p>
            <h6 className="mb-4"><strong>Technologies used:</strong> {project.technologies}</h6>
            <div className="flex space-x-4">
              <Link href={project.githubUrl} legacyBehavior>
                <a className="text-blue-500" target="_blank">Github Repo</a>
              </Link>
              <Link href={project.websiteUrl} legacyBehavior>
                <a className="text-blue-500" target="_blank">Website</a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <Carousel images={project.images} />
          </div>
        </motion.div>
      ))}
    </section>
  )
}

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative h-[30rem] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={image} alt={`Image ${index}`} layout="fill" objectFit="contain" />
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
  )
}

export default Projects
