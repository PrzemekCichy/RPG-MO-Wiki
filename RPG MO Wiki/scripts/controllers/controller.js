var map_json = map_json || [];
var on_map_json = on_map_json || [];
///// <reference path="../../d3.js" />
var wikiAppControllers = angular.module('wikiApp', ['ngRoute', 'ngTable']);
wikiAppControllers.$inject = ['$scope', '$filter'];
wikiAppControllers.config(function ($routeProvider) {
    $routeProvider
        .when('/wiki', {
        templateUrl: 'views/wiki.html',
        controller: 'ItemListController'
    })
        .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'MapsController'
    })
        .when('/calculators', {
        templateUrl: 'views/calculators.html',
        controller: 'CalculatorsController'
    })
        .when('/market', {
        templateUrl: 'views/market.html',
        controller: 'MarketController'
    })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    });
})
    .controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
})
    .controller('ItemListController', ["$scope", function ($scope, $routeParams) {
        //$scope.ItemsData = new ItemsData();
        //console.log($scope.ItemsData);
        $scope.items = itemsFromString;
        $scope.itemCategories = categoriesFromString;
        $scope.mobList = baseNPCFromString;
        $scope.images = {
            0: 'https://1239889624.rsc.cdn77.org/sheet/ground.gif',
            1: 'https://1239889624.rsc.cdn77.org/sheet/ground2.gif',
            5: 'images/dgweapon32.gif',
            6: 'images/dg_armor32.gif',
            7: 'images/dg_food32.gif',
            8: 'images/tools.gif',
            9: 'images/fish_new32.gif',
            10: 'images/dgmisc32.gif',
            11: 'images/dg_jewls32.gif',
            13: 'images/dg_dragon32.gif',
            15: 'images/dg_uniques32.gif',
            16: 'images/alchemyitems2.gif',
            17: 'images/dg_monster532.gif',
            31: 'images/mspell.gif',
            33: 'images/mweapons.gif',
            38: 'images/pets.gif',
            42: 'images/house_inv.gif',
            45: "https://1239889624.rsc.cdn77.org/sheet/halloween.gif?f0cb8b948f34abd9e2b99baac244c6d3rpg.mo.ee",
            52: 'images/dgmisc2.gif',
            53: 'images/dgmisc3.gif',
            54: 'images/dgmisc4.gif',
            55: 'images/dgmisc5.gif',
            56: 'images/dg_armor2.gif'
        };
        $scope.getBackgroundStyle = function (imagePath, x, y) {
            var url = 'url(' + $scope.images[imagePath] + ')';
            return {
                'background-image': url,
                'background-position': (x * -32 + 'px ' + y * -32 + 'px')
            };
        };
        $scope.tableHeaders = [
            //Armour
            ["Name", "Skill", "Price", "Aim", "Power", "Armour", "Magic", "Archery", "Speed"],
            //Mob
            ["Name", "Level", "Health", "Aim", "Power", "Defense", "Magic", "Melee Block", "Magic Block"],
            ["Name"],
        ];
        $scope.data = baseNPCFromString;
        //  $scope.tableParams = new ngTableParams({}, { dataset: $scope.data });
    }])
    .controller('ctrlRead', function ($scope, $filter) {
    // init
    $scope.sort = {
        sortingOrder: 'id',
        reverse: false
    };
    $scope.gap = 5;
    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = baseNPCFromString;
    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };
    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for (var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
    };
    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];
        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
            }
            else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };
    $scope.range = function (size, start, end) {
        var ret = [];
        console.log(size, start, end);
        if (size < end) {
            end = size;
            start = size - $scope.gap;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        console.log(ret);
        return ret;
    };
    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };
    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };
    // functions have been describe process the data for display
    $scope.search();
})
    .directive("customSort", function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            order: '=',
            sort: '='
        },
        template: ' <a ng-click="sort_by(order)" style="color: #555555;">' +
            '    <span ng-transclude></span>' +
            '    <i ng-class="selectedCls(order)"></i>' +
            '</a>',
        link: function (scope) {
            // change sorting order
            scope.sort_by = function (newSortingOrder) {
                var sort = scope.sort;
                if (sort.sortingOrder == newSortingOrder) {
                    sort.reverse = !sort.reverse;
                }
                sort.sortingOrder = newSortingOrder;
            };
            scope.selectedCls = function (column) {
                if (column == scope.sort.sortingOrder) {
                    return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
                }
                else {
                    return 'icon-sort';
                }
            };
        } // end link
    };
})
    .controller('MapsController', function ($scope, $routeParams) {
    //Map container Scrolling
    (function () {
        var clicked = false, clickY, clickX;
        $("#Maps").on({
            'mousemove': function (e) {
                clicked && updateScrollPos(e);
            },
            'mousedown': function (e) {
                clicked = true;
                clickY = e.pageY;
                clickX = e.pageX;
            },
            'mouseup': function () {
                clicked = false;
                $('#Maps').css('cursor', 'auto');
            }
        });
        var updateScrollPos = function (e) {
            $('#Maps').css('cursor', 'row-resize');
            $('#Maps').scrollTop($('#Maps').scrollTop() + (clickY - e.pageY));
            $('#Maps').scrollLeft($('#Maps').scrollLeft() + (clickX - e.pageX));
        };
    })();
    //Load maps
    (function () {
        $scope.mapNames = [{ "id": "0", "name": "Dorpat" }, { "id": "1", "name": "Dungeon I" }, { "id": "2", "name": "Narwa" }, { "id": "3", "name": "Whiland" }, { "id": "4", "name": "Reval" }, { "id": "5", "name": "Rakblood" }, { "id": "6", "name": "Blood River" }, { "id": "7", "name": "Hell" }, { "id": "8", "name": "Clouds" }, { "id": "9", "name": "Heaven" }, { "id": "10", "name": "Cesis" }, { "id": "11", "name": "Walco" }, { "id": "12", "name": "Tutorial Island" }, { "id": "13", "name": "Pernau" }, { "id": "14", "name": "Fellin" }, { "id": "15", "name": "Dragon's Lair" }, { "id": "16", "name": "No Man's Land" }, { "id": "17", "name": "Ancient Dungeon" }, { "id": "18", "name": "Lost Woods" }, { "id": "19", "name": "Minigames" }, { "id": "20", "name": "Broceliande Forest" }, { "id": "21", "name": "Devil's Triangle" }, { "id": "22", "name": "Cathedral" }, { "id": "23", "name": "Illusion Guild" }, { "id": "24", "name": "Every Man's Land" }, { "id": "25", "name": "Moche" }, { "id": "26", "name": "Wittensten" }, { "id": "27", "name": "Dungeon II" }, { "id": "28", "name": "Dungeon III" }, { "id": "29", "name": "Dungeon IV" }];
        var loadMaps = function (a) {
            var mapFile = document.createElement('script');
            mapFile.setAttribute("type", "text/javascript");
            mapFile.setAttribute("src", "https://1239889624.rsc.cdn77.org/maps/map" + a + ".js");
            document.getElementsByTagName("head")[0].appendChild(mapFile);
        };
        for (var i in $scope.mapNames) {
            loadMaps(i);
        }
    })();
    /*
    function drawBody(a) {
        //Split hash using space as separator
        var hash = a.split(" ");
        //Turn strings into numbers
        for (var i = 0; 13 > i; i++) {
            hash[i] <<= 0;
        }

        //BODY_PARTS.HEADS[d];
        var d = hash[0],
            //BODY_PARTS.FACIAL_HAIR[e];
            e = hash[1],
            //BODY_PARTS.BODIES[f];
            f = hash[2],
            //BODY_PARTS.PANTS[g];
            g = hash[3],
            //BODY_PARTS.CAPES[h];
            h = hash[4],
            //BODY_PARTS.LEFT_HANDS[l];
            l = hash[5],
            //BODY_PARTS.RIGHT_HANDS[m];
            m = hash[6],
            //BODY_PARTS.SHIELDS[a];
            a = hash[7],
            //BODY_PARTS.WEAPONS[k];
            k = hash[8],
            //BODY_PARTS.HELMETS[q];
            q = hash[9],
            //BODY_PARTS.BOOTS[r];
            r = hash[10],
            u = hash[11],
            //BODY_PARTS.GROUND_EFFECT[n];
            n = hash[12];
                
    }
    */
    /*
            function drawBody(a) {
                var b = a.split(" ");
                for (a = 0; 13 > a; a++)
                    b[a] <<= 0;
                var d = b[0]
                    , e = b[1]
                    , f = b[2]
                    , g = b[3]
                    , h = b[4]
                    , l = b[5]
                    , m = b[6];
                a = b[7];
                var k = b[8]
                    , q = b[9]
                    , r = b[10]
                    , u = b[11]
                    , n = b[12]
                    , b = Filters.getCanvas(64, 54)
                    , x = b.getContext("2d");
                var n = BODY_PARTS.GROUND_EFFECT[n], n = n.img, p, v, w;
                if ("undefined" != typeof n.sheet_file) {
                    p = IMAGE_SHEET[n.sheet_file].sprite.imgs[n.file];
                    if ("undefined" == typeof p)
                        return b;
                    x.drawImage(p, n.pos && n.pos._x || 0, n.pos && n.pos._y || 0)
                } else
                    p = IMAGE_SHEET[n.sheet],
                        v = IMAGE_SHEET[n.sheet].tile_width *
                        n.x,
                        w = IMAGE_SHEET[n.sheet].tile_height * n.y,
                        x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 0, 0, p.tile_width, p.tile_height);
                n = BODY_PARTS.CAPES[h];
                n = n.img;
                if ("undefined" != typeof n.sheet_file) {
                    p = IMAGE_SHEET[n.sheet_file].sprite.imgs[n.file];
                    if ("undefined" == typeof p)
                        return b;
                    x.drawImage(p, n.pos && n.pos._x || 0, n.pos && n.pos._y || 0)
                } else
                    p = IMAGE_SHEET[n.sheet],
                        v = IMAGE_SHEET[n.sheet].tile_width * n.x,
                        w = IMAGE_SHEET[n.sheet].tile_height * n.y,
                        x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, -5, -6, p.tile_width,
                            p.tile_height);
                h = -1 < GENDER_HEADS[GENDER.FEMALE].indexOf(d);
                n = BODY_PARTS.PANTS[g];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                n = BODY_PARTS.BOOTS[r];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                n = BODY_PARTS.LEFT_HANDS[l];
                n = JSON.clone(n.img);
                h && (n.sheet = IMAGE_SHEET.LEFT_HANDS_FEMALE);
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w + u * IMAGE_SHEET[n.sheet].tile_height, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                n = BODY_PARTS.RIGHT_HANDS[m];
                n = JSON.clone(n.img);
                h && (n.sheet = IMAGE_SHEET.RIGHT_HANDS_FEMALE);
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w +
                    u * IMAGE_SHEET[n.sheet].tile_height, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                n = BODY_PARTS.BODIES[f];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                n = BODY_PARTS.HEADS[d];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11,
                    p.tile_width, p.tile_height);
                n = BODY_PARTS.FACIAL_HAIR[e];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                d = 0;
                h == GENDER.FEMALE && (d = -1);
                n = BODY_PARTS.HELMETS[q];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11 + d, p.tile_width, p.tile_height);
                n =
                    BODY_PARTS.SHIELDS[a];
                n = n.img;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11, 11, p.tile_width, p.tile_height);
                n = BODY_PARTS.WEAPONS[k];
                n = n.img;
                rel_x = n.pos._x;
                rel_y = n.pos._y;
                p = IMAGE_SHEET[n.sheet];
                v = IMAGE_SHEET[n.sheet].tile_width * n.x;
                w = IMAGE_SHEET[n.sheet].tile_height * n.y;
                x.drawImage(p.img[0], v, w, p.tile_width, p.tile_height, 11 + rel_x, 11 + rel_y, p.tile_width, p.tile_height);
                return b
            }
            */
    //Use <HTMLCanvasElement> or var groundTilesCanvas : any = document.getElementById("groundTilesCanvas");
    //Render Map tiles
    (function () {
        var groundTilesCanvas = document.getElementById("groundTilesCanvas");
        var ctxGround = groundTilesCanvas.getContext('2d');
        var topTilesCanvas = document.getElementById("topTilesCanvas");
        var ctxTop = topTilesCanvas.getContext('2d');
        $scope.groundBase = groundBaseFromString;
        var imageGround = {};
        imageGround[2] = new Image();
        imageGround[2].src = "https://1239889624.rsc.cdn77.org/sheet/ground.gif";
        imageGround[46] = new Image();
        imageGround[46].src = "https://1239889624.rsc.cdn77.org/sheet/ground2.gif";
        var imgGroundTop = new Image();
        imgGroundTop.src = "https://1239889624.rsc.cdn77.org/sheet/pots_crates.gif";
        $scope.render = function (map_id) {
            ctxGround.clearRect(0, 0, groundTilesCanvas.width, groundTilesCanvas.height);
            var offsetX = 0, offsetY = 0, tile;
            var map_id = map_id || 0;
            $scope.maps = map_json[map_id];
            $scope.mapsTop = on_map_json[map_id];
            //Rendres from top
            for (var xx = 100; xx <= 10000; xx += 100) {
                for (var yx = 1; yx <= 100; yx++) {
                    tile = xx - yx;
                    offsetX = 2700 + 27 * ($scope.maps[tile].i);
                    offsetX -= 27 * (99 - ($scope.maps[tile].j));
                    offsetY = 0 + 14 * (99 - $scope.maps[tile].j);
                    offsetY += 14 * (($scope.maps[tile].i));
                    ctxGround.drawImage(imageGround[$scope.groundBase[$scope.maps[tile].b_i].img.sheet], $scope.groundBase[$scope.maps[tile].b_i].img.x * 54, $scope.groundBase[$scope.maps[tile].b_i].img.y * 34, 54, 34, offsetX, offsetY, 54, 34);
                }
            }
            /*
            for (var tile in $scope.mapsTop) {
                //                ctxTop.drawImage(imgGroundTop, 7*54, 7*34, 54, 34, offsetX, offsetY, 54, 34);
                offsetX = 27 + 27 * ($scope.mapsTop[tile].i);
                offsetX += 27 * (($scope.mapsTop[tile].j));
                offsetY = 1400 - 28 - 14 * ($scope.mapsTop[tile].j);
                offsetY += 14 * (($scope.mapsTop[tile].i));
                if ($scope.maps[tile].b_i < $scope.groundBase.length) {
                    //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
                    ctxTop.drawImage(imgGroundTop, ($scope.groundBase[$scope.maps[tile].b_i].img.y + 1) * 54, ($scope.groundBase[$scope.maps[tile].b_i].img.x + 1) * 50, 54, 50, offsetX, offsetY, 54, 50);
                } else {
                    //ctxTop.drawImage(imgGroundTop, 54, 50, 54, 50, offsetX, offsetY, 54, 50);
                }
            }
            */
        };
    })();
})
    .controller('CalculatorsController', ['$routeParams', '$scope', function ($scope, $routeParams) {
        //Cluster & bubble layout
        /*
        var width = 800,
            height = 600;

        var canvas = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(50, 50)");

        var pack = d3.layout.pack()
            .size([width, height - 50])
            .padding(10);

        d3.json("clusterData.json", function (data) {
            var nodes = pack.nodes(data);
            console.log(nodes);

            var node = canvas.selectAll(".node")
                .data(nodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + d.x + ", " + d.y + ")";
                });

            node.append("circle")
                .attr("r", function (d) {
                    return d.r;
                })
                .attr("fill", function (d) { return d.children ? "#fff" : "steelblue"; })
                .attr("opacity", 0.25)
                .attr("stroke", function (d) { return d.children ? "#fff" : "#ADADAD"; })
                .attr("stroke-width", "2");

            node.append("text")
                .text(function (d) {
                    return d.children ? "" : d.name;
                })
        });
        */
        //Trees
        /*
       var canvas = d3.select("body").append("svg")
           .attr("width", 500)
           .attr("height", 500)
           .append("g")
           .attr("transform", "translate(50, 50)");

       //CLuster is all nodes and at last level
       //var tree = d3.layout.cluster()
       var tree = d3.layout.tree()
       .size([400, 400])

       d3.json("treeData.json", function (data) {
           var nodes = tree.nodes(data);
           console.log(nodes);
           var links = tree.links(nodes);
           console.log(links);

           var node = canvas.selectAll(".node")
               .data(nodes)
               .enter()
               .append("g")
               .attr("class", "node")
               .attr("transform", function (d) {
                   return "translate(" + d.y + "," + d.x + ")";
               });

           node.append("circle")
               .attr("r", 5)
               .attr("fill", "steelblue");

           node.append("text")
               .text(function (d) {
                   return d.name;
               });

           var diagonal = d3.svg.diagonal()
               .projection(function (d) {
                   return [d.y, d.x]
               });

           canvas.selectAll(".link")
               .data(links)
               .enter()
               .append("path")
               .attr("class", "link")
               .attr("fill", "none")
               .attr("stroke", "#ADADAD")
               .attr("d", diagonal);

       })
       */
        //Tree fancy line connection
        /*
        var canvas = d3.select("body").append("svg")
            .attr("width", 500)
            .attr("height", 500);

        var diagonal = d3.svg.diagonal()
            .source({ x: 10, y: 10 })
            .target({ x: 300, y: 300 });

        canvas.append("path")
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("d", diagonal);
        */
        //Creaing a donut chart
        /*
        var data = [10, 50, 80];
        var r = 300;

        var color = d3.scale.ordinal()
        .range(["red", "blue", "orange"]);

        var canvas = d3.select("body").append("svg")
            .attr("width", 1500)
            .attr("height", 1500)

        var group = canvas.append("g")
            .attr("transform", "translate(300, 300)");

        var arc = d3.svg.arc()
            //inner radius 0 is a pie chart
            .innerRadius(r - 100)
            .outerRadius(r);

        var pie = d3.layout.pie()
            .value(function (d) {
                return d;
            });

        var arcs = group.selectAll(".arc")
            .data(pie(data))
            .enter()
                .append("g")
                .attr("class", "arc")

        arcs.append("path")
            .attr("d", arc)
            .attr("fill", function (d) {
                return color(d.data);
            });

        arcs.append("text")
            .attr("transform", function (d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .attr("font-size", "2.5em")
            .text(function (d) {
                return d.data;
            })

        */
        //Creating an arch
        /*
        var canvas = d3.select("body").append("svg")
            .attr("width", 500)
            .attr("height", 500);

        var group = canvas.append("g")
            .attr("transform", "translate(100, 100)");

        var r = 100;
        var p = Math.PI * 2;

        var arc = d3.svg.arc()
            .innerRadius(r - 20)
            .outerRadius(r)
            .startAngle(0)
            .endAngle(p-1);


        group.append("path")
        .attr("d", arc)
        */
        //Loading external data
        /*
        var canvas = d3.select("body").append("svg")
            .attr("width", 500)
            .attr("height", 500);

        var data = [
            { x: 10, y: 10 },
            { x: 40, y: 60 },
            { x: 50, y: 70 }
        ];

        var group = canvas.append("g")
            .attr("transform", "translate(100, 100)");

        var line = d3.svg.line()
            .x(function (d) {
                return d.x;
            })
            .y(function (d) {
                return d.y;
            });

        group.selectAll("path")
            .data([data])
            .enter()
            .append("path")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#000")
            .attr("stroke-width", 10);
        /*


        //External Files
        /*
        d3.json("mydata.json", function (data) {
            //code which depends on  data avalibility should be declared here
            var canvas = d3.select("body").append("svg")
                .attr("width", 500)
                .attr("height", 500)

            canvas.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("width", function (d) {
                    return d.age * 10;
                })
                .attr("height", 48)
                .attr("y", function (d, i) {
                    return i * 50;
                })
                .attr("fill", "blue")
            canvas.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("fill", "white")
                .attr("y", function (d, i) {
                    return i * 50 + 24;
                })
                .text(function (d) {
                        return d.name;
                    })

        })
        */
        //Array 
        /*
        var data = [10, 20, 30, 40, 50];
        data.sort();
        data.sort(d3.descending);
        var data = [10, 20, 30, 40, 50];
        d3.min(data);
        d3.max(data);
        d3.extent(data);
        d3.sum(data);
        d3.mean(data);
        d3.median(data);
        */
        //Basic transitions
        /*
        var canvas = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

        var circle = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r", 25);

        circle.transition()
            .duration(1500)
            .attr("cx", 150)
            .delay(1000)
            .each("start", function () { d3.select(this).attr("fill", "blue") })
            .each("end", function () { d3.select(this).attr("fill", "red") });
        */
        //Already rendered elements
        //Elements just rendered
        //Elements which were not rendered
        //Data selection
        /*
        var data = [10];

        var canvas = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

        //Entering circle manually, not based on data
        var circle1 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 100)
            .attr("r", 25);

        var circle2 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 200)
            .attr("r", 25);

        var circles = canvas.selectAll("circle")
            .data(data)
            .attr("fill", "red")
           // .enter()
           // .append("circle")
           // .attr("cy", 50)
            //.attr("cx", 50)
            //.attr("r", 25)
            //.attr("fill", "green")
            .exit()
        .attr("fill", "blue")
        */
        //Simple barchart
        /*
        var dataArray = [20, 40, 60, 80];
        var width = 500;
        var height = 500;

        var widthScale = d3.scale.linear()
            .domain([0, 80])
            .range([0, width]);

        var colorScale = d3.scale.linear()
            .domain([0, 80])
            .range(["red", "blue"]);


        var axis = d3.svg.axis()
          .ticks(20)
           .scale(widthScale);
        

      var canvas = d3.select("body")
          .append("svg")
          .attr("width", 500)
          .attr("height", 500)
          .append("g")
          .attr("transform", "translate(20, 0)")
          ;




        var bars = canvas.selectAll("rect")
            //Binds data to empty selection
            .data(dataArray)
            .enter()
            .append("rect")
            .attr("width", function (dataElement) { return widthScale(dataElement); })
            .attr("height", 50)
            .attr("fill", function (d) { return colorScale(d); })
            .attr("y", function (d, i) { return i * 100 });

        canvas.append("g")
            .attr("transform", "translate(0, 400)")
            .call(axis);
        */
    }])
    .controller('MarketController', ['$routeParams', '$scope', function ($scope, $routeParams) {
    }])
    .controller('AboutController', ['$routeParams', '$scope', function ($scope, $routeParams) {
    }])
    .filter('timer', function () {
    return function (input) {
        if (typeof input === "number") {
            var minutes = Math.floor(input / 60000);
            var seconds = ((input % 60000) / 1000).toFixed(0);
            if (input > 0) {
                return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            }
            else {
                return "Up" + -minutes + ":" + (-seconds < 10 ? '0' : '') + -seconds;
            }
        }
        return input;
    };
});
//# sourceMappingURL=controller.js.map 
//# sourceMappingURL=controller.js.map