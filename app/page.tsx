import About from "./about/page";
import Services from "./services/page";
import Patient from "./patient/page";
import Contact from "./contact/page";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <div className="home relative w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/home-bg.avif')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="home-content relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold">Tom Dixon MD</h1>
          <p className="text-xl md:text-2xl my-4">Helping to Build a Healthy Community</p>
          <a
            href="#"
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-full text-sm md:text-base transition duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
      <About />
      <Services />
      <Patient />
      <Contact />
      <Footer />
    </>
  );
}
