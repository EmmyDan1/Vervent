import {Logos} from '../assets/ImageData.js';

function PhoneCarrier() {
  return (
    <section className="bg-white py-12 px-4">
      <div className=" mx-auto">
        <h3 className="text-2xl font-semibold mb-6 ">
        Trusted by the brands you know to protect the stuff you love
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 place-items-center">
          {Logos.map((logo, index) => (
            <div
              key={index}
              className="w-[170px] h-[80px] md:w-[200px] flex items-center justify-center bg-gray-100 rounded-xl shadow-sm p-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy" 
              />
            </div>
          ))}
        </div>
        <button className='mt-2'>View all Plans ➡️</button>
      </div>
    </section>
  );
}

export default PhoneCarrier;
