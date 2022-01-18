num_ships = 5
var ships = new Array(num_ships).fill([]);
var ship_dir = new Array(num_ships).fill(-1);
var ships_built = 0

function CreateShip(n) {
    var pos = new Array(n).fill([0,0]);
    var cancel = false;
    while (true) {
        var build_dir = Math.round((Math.random())*3);
        ship_dir[ships_built] = build_dir;
        pos[0] = [Math.round((Math.random())*(size-1)),Math.round((Math.random())*(size-1))];
        for (var i=1; i<n; i++) {
            if (build_dir == 0) {
                pos[i] = [pos[i-1][0]+1, pos[i-1][1]];
            }
            else if (build_dir == 1) {
                pos[i] = [pos[i-1][0]-1, pos[i-1][1]];
            }
            else if (build_dir == 2) {
                pos[i] = [pos[i-1][0], pos[i-1][1]+1];
            }
            else if (build_dir == 3) {
                pos[i] = [pos[i-1][0], pos[i-1][1]-1];
            }

            if (pos[i][0] < 0 || pos[i][0] > size-1) {cancel = true}
            else if (pos[i][1] < 0 || pos[i][1] > size-1) {cancel = true}
            else for (var ii=0; ii<ships.length; ii++) {
                if (searchForArray(ships[ii],pos[i]) || searchForArray(ships[ii],pos[0])) {
                    cancel = true
                }
            }
        }
        if (cancel) {
            cancel = false
            continue
        }
        break
    }
    ships_built ++;
    return pos
}

function setShips() {
    ships = new Array(num_ships).fill([]);
    ship_dir = new Array(num_ships).fill(-1);
    ships_built = 0
    var ship_sizes = [5,4,3,3,2];
    for (var i=0; i<num_ships; i++) {
    ships[i] = CreateShip(ship_sizes[i])
    }
}

function displayShips() {
    for (var i=0; i<ships.length; i++) {
        for (var ii=0; ii<ships[i].length; ii++) {
            squareClicked(ships[i][ii][1]*size + ships[i][ii][0], i, ii);
        }
    }
}

function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
      if(needle.length === haystack[i].length){
        current = haystack[i];
        for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
        if(j === needle.length)
          return true;
      }
    }
    return false;
  }