import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample data for tours and packages
const toursAndPackages = [
  { id: 1, title: "Lalibela Rock Churches", image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", description: "Explore the ancient rock-hewn churches of Lalibela." },
  { id: 2, title: "Simien Mountains Trek", image: "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_565481389.jpg", description: "Trek through the stunning Simien Mountains, a UNESCO site." },
  { id: 3, title: "Axum Historical Tour", image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892609/EducationHub/photos/king-ezanas-stela.jpg", description: "Visit the historical city of Axum, the birthplace of Ethiopian civilization." },
  { id: 4, title: "Danakil Depression Adventure", image: "https://cdn.getyourguide.com/img/tour/fd57c585cdb44f694b6c992d8fb8f8f9abf8dca145cc96f06f9892c67e0d9a32.jpeg/98.jpg", description: "Discover one of the hottest places on Earth, the Danakil Depression." },
  { id: 5, title: "Lake Tana Boat Tour", image: "https://www.myethiopiatours.com/wp-content/uploads/2020/09/Lake-Tana-768x432.jpg", description: "Take a boat tour around Ethiopia's largest lake, Lake Tana." },
  { id: 6, title: "Harar City Tour", image: "https://www.ethiosports.com/wp-content/uploads/2015/07/Harar-Wall.jpg", description: "Explore the historic walled city of Harar, famous for its culture and hyena feeding." },
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
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h2 className="text-3xl font-bold">Explore Tours and Packages</h2>

        {/* Buttons */}
        <div className="flex gap-4">
          <button onClick={() => scroll("left")} className="p-3 bg-white rounded-full shadow-md">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="p-3 bg-white rounded-full shadow-md">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="w-full p-6 text-center">
        {/* Horizontal Scrollable List of Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth px-12"
          style={{
            scrollSnapType: "x mandatory",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            height: "400px", // Fixed height for container to prevent vertical scrolling
          }}
        >
          {toursAndPackages.map((tour) => (
            <div
              key={tour.id}
              className="flex-shrink-0 bg-white text-black flex flex-col items-center justify-start rounded-lg shadow-lg transition-all duration-300"
              style={{
                width: "300px",
                height: "400px", // Same height for all cards
                scrollSnapAlign: "center",
                padding: "16px", // Padding around the card content
              }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-3/5 object-cover rounded-t-lg"
                style={{
                  height: "60%", // Set image height to make them equal
                  objectFit: "cover", // Ensures images cover the area without stretching
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{tour.title}</h3>
                <p className="text-sm text-gray-600">{tour.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourPackages;
