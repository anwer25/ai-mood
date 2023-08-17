import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className={'w-full max-w-[600px] mx-auto'}>
        <h1 className={'text-6xl'}>
          &quot;MoodSync: Your AI Emotion Companion&quot;
        </h1>
        <p className={'2xl text-white/60 mb-4'}>
          &quot;MoodSync is an innovative AI-powered app designed to be your
          ultimate emotion companion. Seamlessly blending cutting-edge
          technology with personalized insights, MoodSync helps you understand,
          track, and enhance your emotional well-being like never before.
        </p>
        <div>
          <Link href={'/journal'}>
            <button className={'bg-blue-600 px-4 py-2 rounded-lg text-xl'}>
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
