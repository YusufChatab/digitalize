function ContactUs() {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight old text-center bold-40 ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 text-center text-gray-50 sm:text-xl">
            Got any questions? Want to send feedback about our product? Need
            details about our Marketing Plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm  text-gray-50">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm"
                placeholder="digitalize@company.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm  text-gray-50">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm  text-gray-50">
                Your message
              </label>
              <textarea
                id="message"
                className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <a
              href="#"
              className="mt-10 block w-full rounded-lg bg-black px-3 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Submit
            </a>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
