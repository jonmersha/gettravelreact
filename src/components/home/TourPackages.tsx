import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data for tours and packages with additional details
const toursAndPackages = [
  { id: 1, title: "Lalibela Rock Churches", image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", description: "Explore the ancient rock-hewn churches of Lalibela.", price: "$200", duration: "3 Days", accommodation: "3-Star Hotel" },
  { id: 2, title: "Simien Mountains Trek", image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_565481389.jpg", description: "Trek through the stunning Simien Mountains, a UNESCO site.", price: "$350", duration: "5 Days", accommodation: "Camping" },
  { id: 3, title: "Axum Historical Tour", image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892609/EducationHub/photos/king-ezanas-stela.jpg", description: "Visit the historical city of Axum, the birthplace of Ethiopian civilization.", price: "$150", duration: "2 Days", accommodation: "Hotel" },
  { id: 4, title: "Danakil Depression Adventure", image: "https://cdn.getyourguide.com/img/tour/fd57c585cdb44f694b6c992d8fb8f8f9abf8dca145cc96f06f9892c67e0d9a32.jpeg/98.jpg", description: "Discover one of the hottest places on Earth, the Danakil Depression.", price: "$500", duration: "6 Days", accommodation: "Luxury Lodge" },
  { id: 5, title: "Lake Tana Boat Tour", image: "https://www.myethiopiatours.com/wp-content/uploads/2020/09/Lake-Tana-768x432.jpg", description: "Take a boat tour around Ethiopia's largest lake, Lake Tana.", price: "$250", duration: "4 Days", accommodation: "Hotel" },
  { id: 6, title: "Harar City Tour", image: "https://www.ethiosports.com/wp-content/uploads/2015/07/Harar-Wall.jpg", description: "Explore the historic walled city of Harar, famous for its culture and hyena feeding.", price: "$180", duration: "3 Days", accommodation: "Guesthouse" },
];

const TourPackages = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = 500; // Scroll by one card width
      const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <>
    
      <div style={{ display: 'flex', justifyContent: 'space-between',marginTop: '20px' }}>
  <h2 className="text-3xl font-bold">Explore Tours and Packages</h2>
  <div className="flex gap-6">
    
    <button 
      onClick={() => scroll("left")} 
      className="p-6 bg-white rounded-full shadow-md flex items-center justify-center"
    >
      <ChevronLeft size={24} />
    </button>
    <button 
      onClick={() => scroll("right")} 
      className="p-6 bg-white rounded-full shadow-md flex items-center justify-center"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</div>

      <div className="w-full p-6 text-center" style={{ margin: "0px" }}>
        {/* Horizontal Scrollable List of Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth px-12"
          style={{
            scrollSnapType: "x mandatory",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            height: "600px", // Fixed height for container to prevent vertical scrolling
          }}
        >
          {toursAndPackages.map((tour) => (
            <div
              key={tour.id}
              className="flex-shrink-0 bg-white text-black flex flex-col items-center justify-start rounded-lg shadow-lg transition-all duration-300"
              style={{
                margin:'10px',
                width: "350px",
                height: "500px", // Same height for all cards
                scrollSnapAlign: "center",
                padding: "6px", // Padding around the card content
              }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-3/5 object-cover rounded-t-lg"
                style={{
                  height: "50%", // Set image height to make them equal
                  width:'100%',
                  objectFit: "cover", // Ensures images cover the area without stretching
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{tour.title}</h3>
                <p className="text-sm text-gray-600">{tour.description}</p>

                {/* Additional details */}
                <div className="mt-4 text-lg font-semibold text-gray-900">
                  <p>Price: {tour.price}</p>
                  <p>Duration: {tour.duration}</p>
                  <p>Accommodation: {tour.accommodation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourPackages;
