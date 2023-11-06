import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import "./App.css";

function App() {
  /* 
    we need to use state instead of just passing
    down the result to the imagelist component
    so that, anytime we get new images and call 
    the setimages func, this compoenent along with
    all it's children get re-rendered.
  */
  const [images, setImages] = useState([]);

  /* 
    using the async keyword to declare this 
    function as asynchronous, ensuring that
    the result is resolved to an array of images
    returned from the API, not a promise.
  */
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
