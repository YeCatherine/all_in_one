const button = document.createElement("button");
button.textContent = "Click me";
document.body.append(button);
class Display {
  constructor() {
    this.buttonText = "New text";

    // button.addEventListener('click', function (event){
    //   console.log(this);
    // return event.target.textContent = this.buttonText
    // })

    button.addEventListener("click", (event) => {
      console.log(this);
      event.target.textContent = this.buttonText;
    });
  }
}
new Display();
