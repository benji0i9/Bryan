
import './App.css';

function App() {

  const startAnim = () => {
    const startbtn = document.getElementById("frog");
    for ( let i = 0; i < 2; i++ ) {
      startbtn.click();
    }
    if(startbtn){
      startbtn.addEventListener("click", () => {
        const person = document.getElementById('lebugatti');

        // change the image animation to be true / play animation when startbtn is clicked
        person.style.animation = "moving 4s infinite";
      });
      console.log("clicked");
    }
  }

  const stopAnim = () => {
    const startbtn = document.getElementById("stop");
    for ( let i = 0; i < 2; i++ ) {
      startbtn.click();
    }
    if(startbtn){
      startbtn.addEventListener("click", () => {
        const person = document.getElementById('lebugatti');

        // change the image animation to be true / play animation when startbtn is clicked
        person.style.animation = "";
        
        
        // person.style.webkitAnimation = "front-animation 5s infinite";
        // person.style.opacity = "100%";
      });
      console.log("STOP ANIMATION");
    }
  }

  
// JS functions for the on and off buttons for the image
// function on(){
  

//   document.querySelector("img").style.setProperty( //selects and changes the properties of the code
//   "animation-name", "moving")
//   document.querySelector("img").style.setProperty( 
//   "animation-duration", "4s")
//   document.querySelector("img").style.setProperty( 
//   "animation-iteration-count", "infinite")
// }

// function off(){
//   document.querySelector("img").style.setProperty( 
//   "animation", "0s ease 0s 0 normal none running moving")
// }
//get element by tag name which is p will change the property value to red //index 0
// document.getElementsByTagName("p")[0].style.color="red"
// document.getElementById("frog").style.color="blue";
// document.getElementById("frog").style.position="top";

// let className = document.getElementsByClassName("cool")

// for (let index = 0; index < className.length; index++){
//   if ((index % 2) ===1 ){
//   className[index].style.color="black";
// }
// else if ((index % 2 ) === 0 ){
//   className[index].style.color = "red";
// }
// }


  return (
    <div className="App">
   <div className="page">
  <div className="menu-wrapper">
    <input type="checkbox" className="toggle" />
    <div className="hamburger">
      <div className="bar" />
    </div>
    <div className="menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  <img
    src="https://cdn.shopify.com/s/files/1/1668/8171/products/17040XXX_FD_RocketBunny_a_1_1.jpeg?v=1657819276"
    alt="car"
    id="lebugatti"
  />
  <button id="frog" onClick={startAnim}>
    On
  </button>
  <button id="stop" onClick={stopAnim}>off</button>
  <div className="content">
    <h1>
      Leadership<span>Creed</span>
    </h1>
    <p className="cool">
      The first Leadership creed I practiced its I <br />
      should lead by example because I have a little
      <br />
      siter at home and I want to be an example for her.
      <br />
    </p>
    <p className="cool">
      The Second Leadership Creed I practiced was I will
      <br />
      strive to know my self better and seek self improvement
      <br />
      because I want to be the best version of my self.
      <br />
    </p>
    <p className="cool">
      The third Leadership creed I practiced is I will not
      <br />
      lie cheat or steal because I dont want to lie cheat or
      <br />
      steal my self from oportunities.
      <br />
    </p>
  </div>
</div>

    </div>
  );
}

export default App;
