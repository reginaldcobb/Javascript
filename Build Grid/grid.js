


// document.addEventListener("DOMContentLoaded", () => {
function buildGrid(){
  var gridID;
  var row;
  var col;
  var row_string;
  var col_string;

  let rows = 10;
  let columns = 10;
  const container = document.querySelector(".container");
  // let div = document.createElement('div');

  for (i = 1; i <= rows; i++) {
    row = i;
    row_string = row.toString();

    for (j = 1; j <= columns; j++) {
      col = j;
      col_string = col.toString();
      gridID = row_string.concat("-");
      gridID = gridID.concat(col_string);

      let div = document.createElement("div");
      div.setAttribute("onclick", "checkGrid(this.id)");
      
      div.id = gridID;
    //   div.innerHTML = gridID;
      div.className = "box spacing";

      if (j == columns) {
        div.className = "box ";
      } else if (j < columns) {
        div.className = "box spacing";
      }

    //   document.querySelector("body").appendChild(div);
      container.appendChild(div);
      console.log(gridID);
    }
    let div = document.createElement("div");
    div.className = "end";
    document.querySelector("body").appendChild(div);
  }
}
// });
