export default function TodoInput({ $target, onEnter }) {
  const $input = document.createElement("input");

  this.state = "";

  this.render = () => {
    $input.value = "";
  };

  $input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      onEnter(e.target.value);
      this.render();
    }
  });

  $target.prepend($input);
}
