import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  const cards = [
    {
      title: "🎂 Birthdays",
      text: "Create time capsules for your friends and family's birthdays. Send years into the future. Extra funny — and you'll never forget again!",
      img: "https://cupaloy.com/images/tiffany@2x.png"
    },
    {
      title: "👶 Babies and Children",
      text: "Fill a capsule with baby photos and videos. Open it on their 18th birthday — a beautiful gift from the past.",
      img: "https://cupaloy.com/images/amelie@2x.png"
    },
    {
      title: "🎓 Graduations",
      text: "Save school memories, video messages, and notes. Open it years later and relive the moments.",
      img: "https://cupaloy.com/images/schools-out@2x.png"
    }
  ]

  const perfectFor = [
    {
      title: "Future Birthdays",
      text: "Create special messages for milestone birthdays years in advance, letting your loved ones know you're celebrating with them across time.",
      img: "https://m.media-amazon.com/images/I/81tTw2Dar5L._AC_SL1500_.jpg"
    },
    {
      title: "Freshman-Graduation",
      text: "Record your pride and encouragement for future academic achievements, preserving the emotions of these pivotal life moments.",
      img: "https://m.media-amazon.com/images/I/61eLMG+5-oL.jpg"
    },
    {
      title: "Wedding Anniversaries",
      text: "Celebrate the journey of love with memories delivered on future anniversaries, keeping romance alive through the years.",
      img: "https://i.etsystatic.com/10877557/r/il/379f29/4938673026/il_fullxfull.4938673026_3b2d.jpg"
    },
    {
      title: "Family Legacy",
      text: "Share family stories, traditions, and wisdom with future generations, creating a bridge between past and future family members.",
      img: "https://st3.depositphotos.com/4046139/13756/i/450/depositphotos_137566848-stock-photo-african-american-father-and-his.jpg"
    },
    {
      title: "Personal Milestones",
      text: "Mark important life achievements with messages from the past, celebrating personal growth and transformation over time.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5YtZirdyscDguKfKd4CAVKpb-6PQdG9T_62N8Wg2JWnf4NMg"
    },
    {
      title: "Words of Wisdom",
      text: "Send support and motivation for future challenges, providing comfort and inspiration when your loved ones need it most.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpD17pc_Z_w-Z7ewPvuIWwDrwXKdEkt3-1htEFvGHzVEOc0pAS&s"
    }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const current = cards[index]

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="bg-[#837dff] min-h-screen flex flex-col items-center md:flex-row px-6 py-12 text-white transition-all duration-700">
        {/* Left text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Time Capsules. <br />
            <span className="text-yellow-200">But Digital.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Create digital time capsules with photos, videos and messages.
            Invite friends and family to participate. Enjoy memories together later.
          </p>
          <Link to="/signup">
            <button className="mt-6 bg-yellow-300 hover:bg-yellow-200 text-black font-semibold py-2 px-6 rounded-md shadow-md">
              🎁 Get started for free
            </button>
          </Link>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cupaloy.com/images/screenshot.png"
            alt="Capsule preview"
            className="w-full max-w-sm rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* GET INSPIRED SECTION */}
      <div className="bg-gradient-to-r from-purple-100 to-yellow-100 py-16 px-4 md:px-20">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          ✨ Get Inspired
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 transition-all duration-500 ease-in-out">
          {/* Left text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-purple-800 mb-2">{current.title}</h3>
            <p className="text-gray-700 text-lg">{current.text}</p>
            <Link to="/signup">
              <button className="mt-6 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-md shadow-lg transition">
                ✍️ Start Creating
              </button>
            </Link>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={current.img}
              alt={current.title}
              className="w-44 md:w-64 rounded-xl shadow-lg transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* PERFECT FOR SECTION */}
      <div className="bg-white py-20 px-4 md:px-20">
        <h2 className="text-center text-3xl font-bold text-yellow mb-6">Perfect For</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Virtual Time Capsules can be used for many memorable occasions throughout life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {perfectFor.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end text-white"> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">

                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/create">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
              🎉 Find Your Perfect Moment – Create a Capsule
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
