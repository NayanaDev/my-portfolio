const Contact = () => {
  return (
    // Why: We use 'container mx-auto' to center the content and ensure it's responsive.
    // 'py-16' adds generous vertical padding, and 'my-8' creates space between this section and others.
    <section id="contact" className="container mx-auto py-16 px-4 my-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Get In Touch</h2>
      
      {/* Why: A flexbox layout divides the space for the form and contact details,
          stacking them vertically on smaller screens (md:flex-row) for better responsiveness. */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg transition-shadow hover:shadow-xl">
          {/* Why: Styling with Tailwind classes for input fields and buttons ensures a consistent, modern look. */}
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" 
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" 
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out resize-none" 
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            {/* Why: A prominent, branded button for submitting the form, with hover effects. */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information & Social Links */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-lg text-gray-700 space-y-4">
          <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
          <p>
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <p><strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a></p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          
          {/* Why: Social links are presented as clear, clickable text with hover states for interactivity. */}
          <div className="mt-6 space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">LinkedIn</a>
            {/* Add other relevant social media links here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;