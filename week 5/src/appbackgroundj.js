import "./App.css";
function AppColor(props) {

  const  greetUser = (e) => {
    console.log(props.color)
    console.log(e.target.value)
    document.body.style.backgroundColor = e.target.value;
    alert("Welcome Mr" + document.getElementById(props.color).value);
  }
  
  return (
    <div style={{ backgroundColor: "powderblue", color: "black" }}>
      <div class="App">
        <h1>{props.heading} </h1>
        <p style={{ color: "blue", font: "30px Arial" }}>
          
          How to create function comoponent.
        </p>
        <label class="label" id="lbl">
          {props.lbl}
        </label>
        <input id={props.color} type="text" />
        <button value={props.color} onClick={greetUser}>
          Colour me {props.color}
        </button>
      </div>
    </div>
  );
}
export default AppColor;