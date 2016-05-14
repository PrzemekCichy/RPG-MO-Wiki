//Angular connot ng-repeat for array, it needs and object
var mapNames = [];

for (var i in map_names) {
    mapNames[i] = {
        "id": i,
        "name": map_names[i]
        };
}

JSON.stringify(mapNames);
JSON.stringify(BODY_PARTS);
JSON.stringify(IMAGE_SHEET);