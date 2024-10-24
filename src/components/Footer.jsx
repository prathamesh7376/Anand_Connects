const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-semibold">Contact Us</h4>
        <p className="mt-2">
          Email :-
          <a
            href="mailto:Support@anandconnect.com"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Support@anandconnect.com
          </a>
        </p>
        <p className="mt-1">
          Phone :-
          <a
            href="tel:8692820689"
            className="text-blue-400 underline hover:text-blue-300"
          >
            8692820689
          </a>
        </p>

        <div className="mt-4">
          <a
            href="https://www.facebook.com/rlexportimport/"
            className="mx-2 text-blue-400 hover:text-blue-300"
          >
            Facebook
          </a>
          <a href="#" className="mx-2 text-blue-400 hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="mx-2 text-blue-400 hover:text-blue-300">
            Instagram
          </a>
        </div>

        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Anand Connects. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
