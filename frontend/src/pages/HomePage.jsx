import Hero from "./page-components/Hero"
import WhyNiwaas from "./page-components/WhyNiwas"

import HowRentingWorks from "./page-components/HowRentingWorks"
import FeaturedListings from "./page-components/FeaturedListing"

export default function HomePage() {
    return (
        <div>
            <Hero />
            <WhyNiwaas />
            <HowRentingWorks/>
            <FeaturedListings/>
        </div>
    )
}