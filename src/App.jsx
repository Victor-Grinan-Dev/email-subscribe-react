import './App.css';
import image from './images/image.jpg';
function App() {
  return (
    <div class="flex items-center justify-center h-screen bg-zinc-700">
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div class="flex flex-col md:flex-row rounded-l-xl">
          <img src={image} alt="beans" class="object-fit rounded" />
        </div>
      </div>
    </div>
  );
}

export default App;
