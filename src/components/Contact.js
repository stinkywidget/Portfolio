export default function Contact() {
  return (
    <section className="py-[124px] px-[36px]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-[32px] items-center justify-center">
        <h2 className="font-bold text-purple text-[72px] leading-[1]">
          Let&apos;s Connect!
        </h2>
        <div class="min-w-[500px]">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                class="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-purple hover:bg-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
