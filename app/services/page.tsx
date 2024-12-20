import Image from "next/image";
export default function Services(){
    return(
        <>
           <div className="services w-full bg-gray-200 py-12">
  <h1 className="text-4xl text-center text-blue-900 font-bold mb-10">How Can I Help You</h1>
  <div className="parent-card flex flex-wrap justify-center gap-8 px-4">
    {[
      { src: "/images/blood.webp", title: "Blood Work" },
      { src: "/images/mental.webp", title: "Mental Health" },
      { src: "/images/exam.webp", title: "Physical Exam" },
      { src: "/images/flu.webp", title: "Flu Shot" },
      { src: "/images/well.webp", title: "Prevention & Wellness" },
      { src: "/images/family.webp", title: "Family Planning" },
    ].map((service, index) => (
      <div key={index} className="card bg-white w-72 h-96 rounded-md shadow-md transition-transform hover:scale-105">
        <div className="service-image relative w-full h-44 overflow-hidden group">
        <div className="relative w-full h-full">
  <Image
    src={service.src}
    alt={service.title}
    fill
    className="object-cover"
  />
</div>

          <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-50 transition-opacity"></div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mt-4 mx-5 group-hover:text-gray-600">{service.title}</h3>
        <button className="service-btn px-6 py-2 text-orange-500 border-2 border-orange-500 rounded-full mt-6 mx-5 hover:bg-orange-500 hover:text-white transition">
          Book Now
        </button>
      </div>
    ))}
  </div>
</div>

        </>
    )
}