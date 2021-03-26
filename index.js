// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function () {
    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  }