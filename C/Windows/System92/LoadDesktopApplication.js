function loadapplication() {
  document.getElementById("SearchIcon").style.display = "block";
  if (localStorage.WindowsU_ArcadeApplication == "Installed") {
    document.getElementById("Arcade").style.display = "block";
  }
  if (localStorage.WindowsU_p5js_editorApplication == "Installed") {
    document.getElementById("p5js_editor").style.display = "block";
  }
  if (localStorage.WindowsU_PokemonRedApplication == "Installed") {
    document.getElementById("PokemonRed").style.display = "block";
  }
}
