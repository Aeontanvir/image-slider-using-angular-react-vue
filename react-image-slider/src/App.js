import ImageSlider from "./components/ImageSlider";

function App() {
  const slides = [
    { url: 'https://picsum.photos/id/231/700/400', title: 'Image slide 1' },
    { url: 'https://picsum.photos/id/232/700/400', title: 'Image slide 2' },
    { url: 'https://picsum.photos/id/233/700/400', title: 'Image slide 3' },
    { url: 'https://picsum.photos/id/234/700/400', title: 'Image slide 4' },
    { url: 'https://picsum.photos/id/235/700/400', title: 'Image slide 5' },
  ];
  const containerStyles = { 
    margin: '100px auto 0', 
    width: '700px', 
    height: '400px'
  }
  return (
    <div>
      <header>

      </header>
      <section>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </section>
    </div>
  );
}

export default App;
