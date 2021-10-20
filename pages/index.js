import Head from "next/head";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Head>
        <title>amplituhedron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center space-y-8">
        <Link href="https://youtu.be/joeDff7EnAU?t=17">
          <a target="_blank">
            <span className="flex relative">
              <h1
                className="font-inter tracking-wide text-8xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-400 via-yellow-300 to-red-500 active:scale-90 transition duration-400 cursor-pointer"
              >
                space time is doomed
              </h1>
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-500 opacity-75 right-0 top-0 sm:mr-4 md:-mr-6"></span>
            </span>
          </a>
        </Link>
        <Link href="https://en.wikipedia.org/wiki/Nima_Arkani-Hamed">
          <a target="_blank">
            <h2 className="font-inter tracking-wide mt-3 text-md sm:text-3xl text-white text-extrabold text-3xl">
              nima-arkani hamed
            </h2>
          </a>
        </Link>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-400 border-opacity-60">
        <div className="flex flex-col space-y-2 px-10">
          <div className="justify-center flex text-center">
            <Link href="https://arxiv.org/abs/1312.2007">
              <a target="_blank">
                <div className="cursor-pointer flex space-x-2 text-center">
                  <ExternalLinkIcon className="h-6 text-gray-200" />
                  <p className="font-inter text-gray-200 ">The Amplituhedron</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="justify-center flex text-center">
            <Link href="https://www.quantamagazine.org/physicists-discover-geometry-underlying-particle-physics-20130917/">
              <a target="_blank">
                <div className="cursor-pointer flex space-x-2 text-center">
                  <ExternalLinkIcon className="h-6 text-gray-200" />
                  <p className="font-inter text-gray-200 break-normal sm:break-all">
                    A Jewel at the Heart of Quantum Physics, Quanta Magazine
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
