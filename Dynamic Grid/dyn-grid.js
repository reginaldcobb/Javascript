const createGrid = () => {
    const markup = `
    <div class="container" id="container" style="display: grid;
                                                 border: 1px black solid; 
                                                 height:100%; 
                                                 width: 100%">
    </div> `
    document.body.innerHTML += markup
}

const layoutGrid = (height, width) => {
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`
}

const fillGrid = (x, y, blockSize, numOfBlocks, color) => {
    const container = document.getElementById('container')
    const test = Array(num_of_blocks).keys()
            for (var i of test){
                let markup = `<div id="card ${i}" 
                                   style="grid-column: ${Math.floor(Math.random() * y) + 1} / span ${blockSize}; 
                                          grid-row: ${Math.floor(Math.random() * x) + 1} / span ${blockSize};
                                          background-color: ${color};
                                          border: 1px black solid;">${i}</div>`
                container.innerHTML += markup
            };
}

function buildGrid(columns, rows) {
    var gridID;
    var row;
    var col;
    var row_string;
    var col_string;

    for (i = 1; i <= rows; i++) {
        row = i;
        row_string = row.toString();
        for (j = 1; j <= columns; j++) {
            col = j;
            col_string = col.toString();
            gridID = row_string.concat("-");
            gridID = gridID.concat(col_string);

            var div = document.createElement('div');
            if (j == columns) {
                div.className = "end";
            }
            else {
                div.className = "box spacing";
            }

            div.id = gridID

            document.getElementById(gridID).innerHTML = "";
            document.getElementById(gridID).style.backgroundColor = colorForBackground;
        }
    }
}