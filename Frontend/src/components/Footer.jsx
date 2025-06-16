

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-12 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Logo and Social */}
        
        <div className="max-w-md">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="logo"
            className="mb-4 h-8 md:h-10"
          />
          <p className="text-sm leading-relaxed">
            Bringing quality furniture to your home with elegant design and modern craftsmanship.
          </p>
          <div className="flex items-center gap-4 mt-5">
            {[

              "M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z",
              "M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z",
              "M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z",
              "M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z"
            
            ].map((d, i) => (
              <svg key={i} className="w-6 h-6 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
                <path d={d} />
              </svg>
            ))}
          </div>
        </div>

        {/* Links */}
        
        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-3">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Press</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Partners</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 font-semibold mb-3">Support</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-black">Help Center</a></li>
            <li><a href="#" className="hover:text-black">Safety Info</a></li>
            <li><a href="#" className="hover:text-black">Cancellation</a></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
            <li><a href="#" className="hover:text-black">Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-md">
          <h3 className="text-lg text-gray-800 font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm leading-relaxed mb-4">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              className="flex-grow px-4 h-10 rounded-l-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your email"
            />
            <button type="submit" className="bg-black h-10 w-10 rounded-r-md flex items-center justify-center hover:bg-gray-800 transition">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t mt-12 border-gray-300" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-black">Privacy</a></li>
          <li><a href="#" className="hover:text-black">Terms</a></li>
          <li><a href="#" className="hover:text-black">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
