import Image from 'next/image';


export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex justify-between items-center container mx-auto px-5">
      <a
      href="https://x.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 hover:text-white"
    >
      <Image
        src="/assets/x.svg"
        alt="X"
        width={24}
        height={24}
        className="text-gray-400 hover:text-white"
      />
    </a>
        <p className="text-gray-400">© Ran</p>
      </div>
    </footer>
  );
}

export default Footer;
