import Image from "next/image"
export default function Patient(){
    return(
        <>
        <div className="info w-full min-h-screen p-8 md:p-20">
  {/* <!-- Flu Shot Section --> */}
  <div className="shot relative top-5 mx-auto w-full max-w-4xl h-[300px] bg-cover bg-center text-center" style={{ backgroundImage: "url('/images/shot.avif')" }}>
    <h1 className="text-2xl md:text-4xl font-bold text-white pt-16 pb-8">
      Get a Free Flu Shot Today!
    </h1>
    <a className="bg-orange-600 text-white py-2 px-6 md:px-8 text-sm md:text-lg rounded-full transition duration-300 hover:bg-orange-700">
      Book a Flu Shot
    </a>
  </div>

  {/* <!-- Insurance Policy Section --> */}
  <div className="info-content w-full max-w-4xl mx-auto mt-10 md:mt-20 text-center p-6 md:p-12 border-b border-black">
    <h2 className="text-2xl md:text-3xl text-blue-900 font-medium pb-4">
      Insurance Policy
    </h2>
    <h3 className="text-lg md:text-xl pb-6 md:pb-10">
      Nearly all major insurance plans accepted
    </h3>
    <p className="text-sm md:text-base">
      I'm a paragraph. Click here to add your own text and edit me. I'm a great place for
      <br />
      you to tell a story and let your users know a little more about you.
    </p>
  </div>

  {/* <!-- Images Section --> */}
  <div className="info-images w-full max-w-4xl mx-auto mt-10 flex flex-wrap justify-around gap-6">
    <img src="/images/med.avif" alt="Medical" className="w-[100px] md:w-[150px] h-auto object-contain" />
    <img src="/images/life.avif" alt="Life" className="w-[100px] md:w-[150px] h-auto object-contain" />
    <img src="/images/multi.avif" alt="Multi" className="w-[100px] md:w-[150px] h-auto object-contain" />
    <img src="/images/plan.avif" alt="Plan" className="w-[100px] md:w-[150px] h-auto object-contain" />
    <img src="/images/health.avif" alt="Health" className="w-[100px] md:w-[150px] h-auto object-contain" />
  </div>

  {/* <!-- Button Section --> */}
  <button className="block mx-auto mt-10 bg-orange-600 text-white py-3 px-6 text-sm md:text-lg rounded-full transition duration-300 hover:bg-orange-700">
    New Patient Form
  </button>
</div>

        </>
    )
}