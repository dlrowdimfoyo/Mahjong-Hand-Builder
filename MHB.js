var tiles = document.getElementsByClassName("tile");
var man = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var sou = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var pin = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var wind = [0, 0, 0, 0]
var dragon = [0, 0, 0]

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
	}
}

for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', tile_select);
}