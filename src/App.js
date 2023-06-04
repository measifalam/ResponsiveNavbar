import Navbar from "./Components/Navbar";

const linksArray=["Products","Services","Overview","Contact US"]

function App() {
  return (
    <div className="App">
      <Navbar links={linksArray}/>
      {/* <Postmortem/> */}
    </div>
  );
}

export default App;
