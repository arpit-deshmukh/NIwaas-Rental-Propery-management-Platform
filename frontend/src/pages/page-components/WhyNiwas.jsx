export default function WhyNiwaas() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-20">


        <div className="text-center max-w-2xl mx-auto fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why renting today feels broken
          </h2>
          <p className="mt-4 text-gray-600">
            Finding a home shouldn’t feel confusing, risky, or exhausting.
            Yet for most people, renting has become exactly that.
          </p>
        </div>


        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Broker Dependency",
              desc: "High commissions, unclear incentives, and pressure-driven decisions."
            },
            {
              title: "Fake Listings",
              desc: "Outdated photos, misleading details, and homes that don’t exist."
            },
            {
              title: "No Transparency",
              desc: "Hidden costs, unclear pricing, and vague rental terms."
            },
            {
              title: "Stressful Relocation",
              desc: "Especially hard for families, students, and people moving cities."
            }
          ].map((item, i) => (
            <div key={i} className="card">
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>


        <div className="my-16 flex items-center justify-center">
          <div className="h-px w-24 bg-gray-300"></div>
        </div>


        <div className="text-center max-w-2xl mx-auto slide-up">
          <h3 className="text-2xl font-semibold">
            Niwaas is built to fix this
          </h3>
          <p className="mt-4 text-gray-600">
            We focus on trust, clarity, and simplicity — so you can
            choose a home with confidence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Verified Homes",
              desc: "Listings reviewed for authenticity and accuracy."
            },
            {
              title: "Honest Pricing",
              desc: "Clear rental costs without hidden surprises."
            },
            {
              title: "Real Photos",
              desc: "Homes shown as they truly are — no stock images."
            },
            {
              title: "Simple Booking",
              desc: "A clean flow from discovery to confirmation."
            }
          ].map((item, i) => (
            <div key={i} className="card">
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
