import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-[#121214] text-white flex flex-col justify-center items-center py-4 shadow-md">
      <div className="max-w-[1040px] w-full h-full mx-auto px-4 flex justify-between items-center flex-wrap">
        <div className="logo w-[120px] h-auto">
          <Image
            src={"/logo_dark.png"}
            alt="Logo"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
        </div>

        <button className="bg-[#593cfb] text-white font-semibold text-lg py-3 px-6 rounded-full transition-all duration-300 ease-in-out hover:bg-[#4733b7] hover:scale-105">
          Share A Car{" "}
        </button>
      </div>

      <div className="footerText text-center mt-4 text-sm text-[#ddd]">
        <p className="mb-1">&copy; 2024 Your Company. All rights reserved.</p>
        <a href="#" className="text-[#593cfb] hover:underline">
          support@example.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
