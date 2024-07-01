

import './App.css';
import Navbar from "./component/Navbar.js";
import Textform from "./component/Textform.js"
function App() {
  return (
<>


<Navbar />
<div className="container mx-7">
<Textform heading ="Enter the text to analyze"/>
</div>

</>

  );
}

export default App;
