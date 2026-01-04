const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} E-Commerce-Bazzar. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 mt-3 md:mt-0 text-sm">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
