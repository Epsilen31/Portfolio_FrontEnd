const Footer = () => {
  return (
    <footer className="p-6 mt-8 w-full max-w-[1050px] mx-auto text-center flex flex-col items-center">
      <hr className="w-full border-gray-300 mb-6" />
      <p className="text-gray-600">
        © {new Date().getFullYear()} Epsilen Porfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
