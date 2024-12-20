export default function About() {
  return (
    <>
      <div className="about flex flex-col md:flex-row items-center bg-white">
        <div className="about-content w-full md:w-1/2 p-6 md:p-16 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-5 mt-5">
            About Tom Dixon MD
          </h1>
          <p className="text-base md:text-lg mb-8">
            I am a paragraph. Click here to add your own text and edit me. It is easy. Just click  or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I am a great place for you to tell a story and let your users know a little more about you.
          </p>
          <h2 className="text-lg md:text-xl font-bold text-blue-700 mb-4">
            Education
          </h2>
          <p className="text-base md:text-lg mb-8">
            Medical School   University of Dulton Health Science Center.<br />
            Residency in Family Medicine   University of Dulton Health Science Center.
          </p>
          <a
            href="#"
            className="bg-orange-600 text-white py-3 px-6 md:px-8 text-sm md:text-base rounded-full transition duration-300 hover:bg-orange-700"
          >
            Read More
          </a>
        </div>

        {/* About Image */}
        <div
          className="about-image w-full md:w-1/2 h-60 md:h-[700px] bg-center"
          style={{
            backgroundImage: "url('/images/about-image.avif')",
            backgroundSize: "contain", 
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

    </>
  )
}