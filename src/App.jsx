import "./App.css";
import image from "./images/image.jpg";
function App() {
  return (
    <div class="flex items-center justify-center h-screen bg-zinc-700">
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div class="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={image}
            alt="beans"
            class="object-fit rounded-xl h-80 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
          />
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium-center text-white md:text-left">Get diet and fitness tips in your inbox</h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-white md:text-left">Eat better and exercise better. Sign up for the Diet&Fitness newsletter.</p>
            <div className="flex flex-col mt-5 space-y-4md:space-x-3 md:flex-rowmdspace-y-0">
              <input 
              type="text" 
              placeholder="Enter your email address" 
              class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500 mt-5">Subscribe</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
