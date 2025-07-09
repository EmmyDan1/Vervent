import { images } from "../assets/ImageData.js";

function HowItWorks() {
  return (
    <section className="px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 flex justify-center md:hidden">
          <img
            src={images.FeatureSmPhone}
            alt="Feature Phone"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-light text-2xl mb-6">How it works</h1>
          <hr className="w-full border-t border-gray-300 mb-6" />

          <div className="mb-8">
            <h2 className="font-semibold text-2xl font-serif mb-3">
              File a Claim
            </h2>
            <p className="text-gray-700">
              Tell us what happened to your product and when it happened. The
              more we know, the more we can help you get your product back to
              normal.
            </p>
          </div>

          <hr className="w-full border-t border-gray-300 mb-6" />

          <div className="mb-8">
            <h2 className="font-semibold text-md font-serif mb-3">
              WE'VE GOT YOU COVERED
            </h2>
            <p className="text-gray-700">
              Depending on your plan, we'll repair or replace your product, or
              reimburse you. Each claim is unique, and it's possible your
              product will be replaced with a new or refurbished product.
            </p>
          </div>

          <hr className="w-full border-t border-gray-300 mb-6" />

          <div className="mb-8">
            <h2 className="font-semibold text-md font-serif mb-3">
              PAY YOUR DEDUCTIBLE
            </h2>
            <p className="text-gray-700">
              Like most insurance programs, we require you to pay a deductible
              when you file a claim. In most cases, the deductible is far less
              than the full retail price.
            </p>
          </div>

          <hr className="w-full border-t border-gray-300 mb-6" />

          <div className="mb-8">
            <h2 className="font-semibold text-md font-serif mb-3">
              PROTECT YOUR PRODUCTS
            </h2>
            <p className="text-gray-700">
              We're here to protect any new purchases you make in the future.
              With an Asurion plan, you're protected against unexpected product
              failures and costly repairs or replacement.
            </p>
          </div>
        </div>

        
        <div className=" hidden lg:flex w-full lg:w-1/2  justify-center">
          <img
            src={images.FeatureSmPhone}
            alt="Feature Phone"
            className="w-full max-w-sm h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
