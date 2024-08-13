import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-5">
        <div className="text-center text-2xl font-bold tracking-tighter">
          Bon Voyage!
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-400">© Ran</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://x.com/l10XZkPh8S24125"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Image
              src="/assets/x.svg"
              alt="X"
              width={24}
              height={24}
              className="text-gray-400 hover:text-white"
            />
          </a>
          <a
            href="https://github.com/Masurun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Image
              src="/assets/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
