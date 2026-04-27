import React, { useState } from 'react'; 
import './App.css'; 
function App() { 
const [text, setText] = useState(''); // Declare a state variable 'text' and a function 'setText' 
to update it 
const handleChange = (event) => { 
setText(event.target.value); 
} 
return ( 
<div className="container" > 
<h1> Hello VCET</h1> 
<input 
type="text" 
onChange={handleChange} // Update state on input change 
placeholder="Type something..." 
/> 
<h1>{text || "Type something..."}</h1> 
</div> 
); 
} 
export default App;
