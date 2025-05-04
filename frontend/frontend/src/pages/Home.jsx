export default function Home() {
    return (
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://via.placeholder.com/800x600"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Summer Sale
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Shop the latest trends at unbeatable prices
            </p>
            <div className="mt-8">
              <a
                href="/products"
                className="inline-flex rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }