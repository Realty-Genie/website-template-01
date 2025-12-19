import Image from "next/image"
import { Button } from "@/components/ui/button"

const listings = [
    {
        status: "Active",
        address: "2085 E 1st Avenue 110",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V5N 1B6",
        price: 998000,
        bedrooms: 3,
        bathrooms: 3,
        image: "/listing-1.jpeg"
    },
    {
        status: "Active",
        address: "1950 W 8th Avenue 114",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V6J 1W3",
        price: 699000,
        bedrooms: 2,
        bathrooms: 1,
        image: "/listing-2.jpeg"
    },
    {
        status: "Active",
        address: "898 Carnarvon Street 2706",
        "city": "New Westminster",
        "province": "British Columbia",
        "postalCode": "V3M 0C3",
        "price": 639000,
        "bedrooms": 2,
        "bathrooms": 2,
        "image": "/listing-3.jpeg"
    },
    {
        status: "Active",
        address: "550 E 7th Avenue 101",
        city: "Vancouver",
        "province": "British Columbia",
        "postalCode": "V5T 1N7",
        "price": 485000,
        "bedrooms": 1,
        "bathrooms": 1,
        "image": "/listing-4.jpeg"
    },
    {
        status: "Active",
        address: "3569 W 35th Avenue",
        city: "Vancouver",
        "province": "British Columbia",
        "postalCode": "V6N 2N4",
        "price": 2988000,
        "bedrooms": 4,
        "bathrooms": 1,
        "image": "/listing-5.jpeg"
    },
    {
        status: "Active",
        address: "1483 Homer Street 1003",
        city: "Vancouver",
        "province": "British Columbia",
        "postalCode": "V6Z 3C7",
        "price": 1899000,
        "bedrooms": 3,
        "bathrooms": 2,
        "image": "/listing-6.jpeg"
    },
    {
        status: "Active",
        address: "1289 Hornby Street 2102",
        city: "Vancouver",
        "province": "British Columbia",
        "postalCode": "V6Z 0C7",
        "price": 628000,
        "bedrooms": 1,
        "bathrooms": 1,
        "image": "/listing-7.jpeg"
    },
    {
        status: "Active",
        address: "5691 Keith Street",
        city: "Burnaby",
        "province": "British Columbia",
        "postalCode": "V5J 3C4",
        "price": 2198000,
        "bedrooms": 6,
        "bathrooms": 4,
        "image": "/listing-1.jpeg" // Fallback as listing-8 is missing
    }
]

export default function FeaturedListings() {
    return (
        <section className="py-20 bg-background text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Featured Listings
                    </h2>
                    <div className="w-full h-[1px] bg-white/10 mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {listings.map((item, idx) => (
                        <div
                            key={idx}
                            className="group bg-[#222] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 border border-white/5 hover:border-primary/30"
                        >
                            <div className="relative aspect-[1/1] w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.address}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                    <span className="text-white font-medium">
                                        ${item.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 space-y-3">
                                <h3 className="text-white font-medium text-lg leading-tight truncate">
                                    {item.address}
                                </h3>
                                <p className="text-white/50 text-sm">
                                    {item.city}, {item.postalCode}
                                </p>
                                <div className="flex items-center gap-4 text-xs tracking-wider text-white/70 pt-2 font-light uppercase">
                                    <span>Bed: <strong className="text-white font-normal">{item.bedrooms}</strong></span>
                                    <span className="w-[1px] h-3 bg-white/20"></span>
                                    <span>Bath: <strong className="text-white font-normal">{item.bathrooms}</strong></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show New Listing Button */}
                <div className="flex justify-center mt-12">
                    <Button className="border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                        Show New Listing
                    </Button>
                </div>
            </div>
        </section>
    )
}
