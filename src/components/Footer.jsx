const Footer = () => {
  return (
    // Why: A dark background with white text provides a clear visual separation.
    // 'py-6' adds vertical padding, and 'text-center' centers the content.
    // 'mt-16' ensures there's ample space before the footer.
    <footer className="bg-gray-800 text-white py-6 text-center mt-16">
      <div className="container mx-auto px-4">
        <p className="text-lg">
          © {new Date().getFullYear()} Nayana. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          {/* Why: Simple links to navigate back to the top or other key sections. */}
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;