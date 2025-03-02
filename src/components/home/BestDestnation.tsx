import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  { id: 1, name: "Lalibela", image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", description: "Famous for its rock-hewn churches, a UNESCO World Heritage site." },
  { id: 2, name: "Simien Mountains", image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_565481389.jpg", description: "A stunning national park with breathtaking landscapes and wildlife." },
  { id: 3, name: "Axum", image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", description: "Home to ancient obelisks and the Ark of the Covenant legend." },
  { id: 4, name: "Danakil Depression", image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_565481389.jpg", description: "One of the hottest and most unique places on Earth with colorful landscapes." },
  { id: 5, name: "Lake Tana", image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", description: "Ethiopia's largest lake, known for its monasteries and hippos." },
  { id: 6, name: "Harar", image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_565481389.jpg", description: "A historic city famous for its unique culture and hyena feeding ritual." },
];

const BestDestination = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 500; // Scroll by one card width
      const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

      // Determine the new active item
      const newIndex = direction === "left" ? Math.max(0, activeIndex - 1) : Math.min(destinations.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="relative w-full  p-6">
      {/* Title and Buttons Aligned Horizontally */}
      <div className="flex">
        <h2 className="text-3xl font-bold flex-grow">Best Destination to Visit</h2>
        <div className="flex gap-6">
               <button onClick={() => scroll("left")} className="p-3 bg-white rounded-full shadow-md">
              <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll("right")} className="p-3 bg-white rounded-full shadow-md">
               <ChevronRight size={20} />
            </button>
  </div>
</div>



      {/* Scrollable Horizontal List */}
      <div
        ref={scrollRef}
        className="flex gap-x-8 overflow-x-auto  no-scrollbar scroll-smooth px-12"
        style={{ scrollSnapType: "x mandatory", display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`flex-shrink-0 bg-white text-black flex flex-col items-center justify-start rounded-lg shadow-lg transition-all duration-300 ${
              index === activeIndex ? "scale-110" : "scale-90 opacity-80"
            }`}
            style={{
              width: index === activeIndex ? "550px" : "500px",
              height: index === activeIndex ? "650px" : "600px",
              scrollSnapAlign: "center",
              padding: "16px", // Added padding around the list items
            }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-[60%] object-cover rounded-t-lg" // Ensuring consistent image size
              style={{
                height: "60%", // Set image height to make them equal
                objectFit: "cover", // Ensures images cover the area without stretching
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-sm text-gray-600">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDestination;
