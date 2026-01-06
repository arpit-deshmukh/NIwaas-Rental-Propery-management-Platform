export default function HowRentingWorks() {
  return (
    <section id="how-it-works" className="bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">


        <div className="text-center max-w-2xl mx-auto fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold">
            How renting works on Niwaas
          </h2>
          <p className="mt-4 text-gray-600">
            A simple, transparent process designed to help you
            find and move into a home with confidence.
          </p>
        </div>


        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">


          <div className="card text-center slide-up">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold">
              1
            </div>
            <h3 className="font-medium text-lg">
              Explore verified homes
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Browse rental homes with real photos, clear pricing,
              and complete details — no guesswork.
            </p>
          </div>


          <div className="card text-center slide-up">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold">
              2
            </div>
            <h3 className="font-medium text-lg">
              Compare & choose
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Shortlist homes, understand rental terms,
              and choose what fits your needs and lifestyle.
            </p>
          </div>


          <div className="card text-center slide-up">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold">
              3
            </div>
            <h3 className="font-medium text-lg">
              Book with confidence
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Confirm your booking and move forward
              knowing everything is transparent and clear.
            </p>
          </div>

        </div>


        <div className="mt-16 text-center">
          <a href="/listings" className="btn">
            Explore Homes
          </a>
        </div>

      </div>
    </section>
  );
}
