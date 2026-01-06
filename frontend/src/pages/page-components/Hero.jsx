export default function HeroSection() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          

          <div className="fade-in">
           
        
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
  Find a <span className="text-indigo-600">Home</span>,
  <br />not just a place to stay.
</h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Niwaas helps families, students, and professionals discover
              verified rental homes with clarity, trust, and comfort — 
              so every move feels like a new beginning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/listings" className="btn">
                Explore Homes
              </a>

              <a href="#how-it-works" className="btn-outline">
                How Renting Works
              </a>
            </div>
          </div>


          <div className="relative slide-up">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <img
                src="/heros2.png"
                alt="Family enjoying their home"
                className="h-full w-full object-cover"
              />
            </div>


            <div className="absolute -bottom-6 -left-6 hidden md:block bg-gray-">
              <div className="card w-64 bg-gray-200">
                <p className="text-sm text-gray-600">
                  “A good home is where peace begins.”
                </p>
                <p className="mt-2 text-xs text-gray-600">
                  — Niwaas philosophy
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
