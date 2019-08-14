var tiles = document.getElementsByClassName("tile");

for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', function(e){tile_select(e.target)});
}

document.getElementsByClassName("tile").addEventListener("click", function(e){tile_select(e.target)})

function tile_select(img) {
  var new_tile = document.createElement("img")
  var src = img.src
  new_tile.src = src
  new_tile.id = "tile"
  document.getElementById("selected_tiles").appendChild(new_tile)
}