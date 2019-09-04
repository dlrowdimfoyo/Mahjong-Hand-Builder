var tiles = document.getElementsByClassName("tile");
var man = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var sou = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var pin = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var wind = [0, 0, 0, 0]
var dragon = [0, 0, 0]
var windname = ["east", "south", "west", "north"]
var dragname = ["white", "green", "red"]

const add = (a, b) => a + b

var tile_select = function(e) {
  var new_tile = document.createElement("img")
  var img = e.target
  var src = img.src
  var id = img.id
  var suit = id.substr(0, 3)
  var numb = Number(id.substr(3))
  new_tile.src = src
  new_tile.id = "tile"
  document.getElementById("selected_tiles").appendChild(new_tile)
  if (suit == "man") {
	  man[numb - 1]++
	  if (man[numb - 1] == 4) {
		  disable_tile(id)
	  }
  } else if (suit == "sou") {
	  sou[numb - 1]++
	  if (sou[numb - 1] == 4) {
		  disable_tile(id)
	  }
  } else if (suit == "pin") {
	  pin[numb - 1]++
	  if (pin[numb - 1] == 4) {
		  disable_tile(id)
	  }
  } else if (suit == "win") {
	  wind[numb - 1]++
	  if (wind[numb - 1] == 4) {
		  disable_tile(id)
	  }
  } else {
	  dragon[numb - 1]++
	  if (dragon[numb - 1] == 4) {
		  disable_tile(id)
	  }
  }
}

var disable_tile = function(id) {
	document.getElementById(id).style.opacity = "0.2"
	document.getElementById(id).style.cursor = "default"
	document.getElementById(id).removeEventListener("click", tile_select)
}

var reorganize = function() {
	var hand_sum = man.reduce(add) + sou.reduce(add) + pin.reduce(add) + wind.reduce(add) + dragon.reduce(add)
	if (hand_sum < 14) {
		document.getElementById("final_hand").innerHTML = "Not enough tiles"
	} else {
		for (var i = 0; i < 9; i++ ) {
			while (man[i] > 0) {
				var new_tile = document.createElement("img")
				var tile_numb = i + 1
				new_tile.src = "tiles/char" + tile_numb + ".svg"
				new_tile.id = "tile"
				document.getElementById("final_hand").appendChild(new_tile)
				man[i]--
			}
		}
		for (var i = 0; i < 9; i++ ) {
			while (sou[i] > 0) {
				var new_tile = document.createElement("img")
				var tile_numb = i + 1
				new_tile.src = "tiles/bamb" + tile_numb + ".svg"
				new_tile.id = "tile"
				document.getElementById("final_hand").appendChild(new_tile)
				sou[i]--
			}
		}
		for (var i = 0; i < 9; i++ ) {
			while (pin[i] > 0) {
				var new_tile = document.createElement("img")
				var tile_numb = i + 1
				new_tile.src = "tiles/circ" + tile_numb + ".svg"
				new_tile.id = "tile"
				document.getElementById("final_hand").appendChild(new_tile)
				pin[i]--
			}
		}
		for (var i = 0; i < 4; i++ ) {
			while (wind[i] > 0) {
				var new_tile = document.createElement("img")
				var tile_name = windname[i]
				new_tile.src = "tiles/wind" + tile_name + ".svg"
				new_tile.id = "tile"
				document.getElementById("final_hand").appendChild(new_tile)
				wind[i]--
			}
		}
		for (var i = 0; i < 3; i++ ) {
			while (dragon[i] > 0) {
				var new_tile = document.createElement("img")
				var tile_name = dragname[i]
				new_tile.src = "tiles/drag" + tile_name + ".svg"
				new_tile.id = "tile"
				document.getElementById("final_hand").appendChild(new_tile)
				dragon[i]--
			}
		}
	}
}

for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', tile_select);
}