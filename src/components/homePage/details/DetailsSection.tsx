export const DetailsSection = () => {
  return <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="flex flex-col mx-auto text-center gap-5 w-[1000px] max-lg:w-full items-center justify-center">
        <h3 className="text-blue-500 font-semibold text-md">Blog Faster</h3>
        <h2 className="text-5xl font-bold">Get your blog up and running in minutes</h2>
        <p className="text-gray-500 text-center text-lg font-semibold">Right here you can create a blog in minutes. We make it easy for you to create a blog in minutes. The Blog is very fast and easy to create.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {[
          { title: "Sign up for free", icon: "🚀" },
          { title: "Blazing fast", icon: "⚡" },
          { title: "Super secure with Auth", icon: "🔒" },
          { title: "Easy to use", icon: "👌" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 cursor-pointer hover:shadow-xl hover:bg-blue-900 transition-all duration-300 rounded-lg shadow-md">
            <div className="flex items-center mb-4 gap-3">
                <div className="bg-blue-300 w-12 h-12 flex items-center justify-center text-white text-2xl rounded-full">
              <span className="text-xl text-white">{item.icon}</span>
                </div>
              <h3 className="text-xl text-white font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        ))}
      </div>
  </section>
}