var map_json = [];
var on_map_json = [];
var baseNPCFromString = [{
  "id": -1,
  "b_i": 0,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 10,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 0,
      "chance": 0.05
    }, {
      "id": 1,
      "chance": 0.01
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 993,
      "chance": 0.0025
    }, {
      "id": 992,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.01
    }, {
      "id": 448,
      "chance": 0.01
    }, {
      "id": 8,
      "chance": 0.01
    }],
    "combat_level": 4
  },
  "name": "Gray Wizard",
  "img": {
    "hash": "2 0 36 40 1 2 0 50 60 0 0 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "busy": false,
    "health": 10,
    "magics": [{
      "id": 2
    }],
    "magic": 1,
    "total_defense": 3,
    "total_strength": 3,
    "total_accuracy": 2
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 1,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 5,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 3,
      "chance": 0.25
    }, {
      "id": 0,
      "chance": 0.05
    }, {
      "id": 759,
      "chance": 0.1
    }, {
      "id": 756,
      "chance": 0.1
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 490,
      "chance": 0.25
    }, {
      "id": 204,
      "chance": 0.01
    }],
    "combat_level": 1
  },
  "name": "White Rat",
  "img": {
    "sheet": "15",
    "x": 4,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 5,
    "busy": false,
    "total_defense": 0,
    "total_strength": 0,
    "total_accuracy": 0
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 2,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Shopkeeper",
  "img": {
    "hash": "18 0 25 26 72 0 0 0 0 52 1 2"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 3,
      "count": 50,
      "spawn": true
    }, {
      "id": 491,
      "count": 10,
      "spawn": true
    }, {
      "id": 493,
      "count": 10,
      "spawn": true
    }, {
      "id": 6,
      "count": 10,
      "spawn": true
    }, {
      "id": 5,
      "count": 0
    }, {
      "id": 19,
      "count": 0
    }, {
      "id": 47,
      "count": 0
    }, {
      "id": 20,
      "count": 0
    }, {
      "id": 21,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 3,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 17,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 0,
      "chance": 0.1
    }, {
      "id": 1,
      "chance": 0.05
    }, {
      "id": 40,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 992,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 20,
      "chance": 0.02
    }, {
      "id": 452,
      "chance": 0.01
    }, {
      "id": 448,
      "chance": 0.01
    }, {
      "id": 220,
      "chance": 0.01
    }],
    "combat_level": 9
  },
  "name": "Green Wizard",
  "img": {
    "hash": "18 0 30 15 1 1 0 49 60 21 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 17,
    "busy": false,
    "magics": [{
      "id": 2
    }],
    "magic": 20,
    "total_defense": 10,
    "total_strength": 1,
    "total_accuracy": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 4,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 25,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "att_anim": 34,
    "speed": 100,
    "drops": [{
      "id": 1,
      "chance": 0.1
    }, {
      "id": 40,
      "chance": 0.05
    }, {
      "id": 5,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 25,
      "chance": 0.0025
    }, {
      "id": 37,
      "chance": 0.0035
    }, {
      "id": 479,
      "chance": 0.0025
    }, {
      "id": 4,
      "chance": 0.01
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 19,
      "chance": 0.01
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 230,
      "chance": 0.005
    }, {
      "id": 264,
      "chance": 0.01
    }],
    "combat_level": 21
  },
  "name": "Orc Warrior",
  "img": {
    "hash": "56 0 10 11 1 8 3 1 2 0 4 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 25,
    "busy": false,
    "total_defense": 5,
    "total_strength": 30,
    "total_accuracy": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 5,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Fishing Master",
  "img": {
    "hash": "0 0 43 25 72 2 0 0 80 48 1 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 7,
      "count": 5,
      "spawn": true
    }, {
      "id": 124,
      "count": 5,
      "spawn": true
    }, {
      "id": 68,
      "count": 0
    }, {
      "id": 213,
      "count": 0
    }, {
      "id": 1368,
      "count": 10,
      "spawn": true
    }, {
      "id": 1369,
      "count": 0
    }, {
      "id": 8,
      "count": 10,
      "spawn": true
    }, {
      "id": 9,
      "count": 0
    }, {
      "id": 10,
      "count": 8,
      "spawn": true
    }, {
      "id": 11,
      "count": 0
    }, {
      "id": 72,
      "count": 5,
      "spawn": true
    }, {
      "id": 73,
      "count": 0
    }, {
      "id": 12,
      "count": 5,
      "spawn": true
    }, {
      "id": 13,
      "count": 0
    }, {
      "id": 74,
      "count": 5,
      "spawn": true
    }, {
      "id": 75,
      "count": 0
    }, {
      "id": 14,
      "count": 5,
      "spawn": true
    }, {
      "id": 15,
      "count": 0
    }, {
      "id": 16,
      "count": 0
    }, {
      "id": 17,
      "count": 0
    }, {
      "id": 70,
      "count": 0
    }, {
      "id": 71,
      "count": 0
    }, {
      "id": 76,
      "count": 0
    }, {
      "id": 77,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 6,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 60,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 6,
      "chance": 0.2
    }, {
      "id": 18,
      "chance": 0.02
    }, {
      "id": 303,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 864,
      "chance": 0.0025
    }, {
      "id": 1071,
      "chance": 0.0025
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 2,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 4,
      "chance": 0.1
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 272,
      "chance": 0.05
    }],
    "combat_level": 48
  },
  "name": "Minotaur",
  "img": {
    "hash": "59 0 10 11 1 22 11 0 20 0 4 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 60,
    "busy": false,
    "total_defense": 45,
    "total_strength": 45,
    "total_accuracy": 45,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 7,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 14,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 21,
      "chance": 0.05
    }, {
      "id": 20,
      "chance": 0.05
    }, {
      "id": 448,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 479,
      "chance": 0.0025
    }, {
      "id": 273,
      "chance": 0.05
    }, {
      "id": 444,
      "chance": 0.005
    }],
    "combat_level": 13
  },
  "name": "Dwarf Mage",
  "img": {
    "sheet": "15",
    "x": 2,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 14,
    "busy": false,
    "magics": [{
      "id": 3
    }],
    "magic": 1,
    "total_defense": 14,
    "total_strength": 10,
    "total_accuracy": 14,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 8,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 23,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 14,
      "chance": 0.05
    }, {
      "id": 15,
      "chance": 0.1
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 22,
      "chance": 0.03
    }, {
      "id": 23,
      "chance": 0.03
    }],
    "combat_level": 20
  },
  "name": "Black Rat",
  "img": {
    "sheet": "15",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 23,
    "busy": false,
    "total_defense": 20,
    "total_strength": 20,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 9,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 31,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 17,
      "chance": 0.1
    }, {
      "id": 24,
      "chance": 0.015
    }, {
      "id": 54,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 38,
      "chance": 0.0025
    }, {
      "id": 25,
      "chance": 0.05
    }, {
      "id": 1359,
      "chance": 0.0015
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 233,
      "chance": 0.05
    }],
    "combat_level": 30
  },
  "name": "Ghost",
  "img": {
    "sheet": "15",
    "x": 2,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 31,
    "busy": false,
    "total_defense": 32,
    "total_strength": 28,
    "total_accuracy": 32,
    "melee_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 10,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 38,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 24,
      "chance": 0.025
    }, {
      "id": 26,
      "chance": 0.035
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 1269,
      "chance": 0.0015
    }, {
      "id": 1359,
      "chance": 0.0015
    }, {
      "id": 294,
      "chance": 0.0025
    }, {
      "id": 27,
      "chance": 0.05
    }, {
      "id": 274,
      "chance": 0.05
    }],
    "combat_level": 36
  },
  "name": "Skeleton",
  "img": {
    "hash": "89 0 124 95 0 32 15 0 2 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38,
    "busy": false,
    "total_defense": 18,
    "total_strength": 48,
    "total_accuracy": 43
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 11,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 44,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 25,
      "chance": 0.07
    }, {
      "id": 24,
      "chance": 0.03
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 28,
      "chance": 0.01
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 860,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 1071,
      "chance": 0.0025
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 215,
      "chance": 0.05
    }],
    "combat_level": 44
  },
  "name": "Vampire",
  "img": {
    "hash": "86 0 50 2 1 0 0 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 44,
    "busy": false,
    "total_defense": 70,
    "total_strength": 30,
    "total_accuracy": 35,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 12,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Outpost Trader",
  "img": {
    "hash": "18 0 15 16 72 2 1 33 133 17 6 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 22,
      "count": 1,
      "spawn": true
    }, {
      "id": 23,
      "count": 1,
      "spawn": true
    }, {
      "id": 36,
      "count": 1,
      "spawn": true
    }, {
      "id": 286,
      "count": 5,
      "spawn": true
    }, {
      "id": 4,
      "count": 0
    }, {
      "id": 29,
      "count": 0
    }, {
      "id": 491,
      "count": 10,
      "spawn": true
    }, {
      "id": 493,
      "count": 10,
      "spawn": true
    }, {
      "id": 6,
      "count": 10,
      "spawn": true
    }, {
      "id": 3,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 13,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 30,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 1,
      "chance": 0.1
    }, {
      "id": 40,
      "chance": 0.05
    }, {
      "id": 5,
      "chance": 0.05
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 4,
      "chance": 0.01
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 435,
      "chance": 0.0025
    }, {
      "id": 295,
      "chance": 0.0025
    }, {
      "id": 424,
      "chance": 0.0025
    }, {
      "id": 230,
      "chance": 0.005
    }, {
      "id": 19,
      "chance": 0.01
    }, {
      "id": 64,
      "chance": 0.005
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 264,
      "chance": 0.05
    }],
    "combat_level": 25
  },
  "name": "Orc Mage",
  "img": {
    "hash": "56 0 32 11 0 8 3 49 60 0 4 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 30,
    "busy": false,
    "total_defense": 17,
    "total_strength": 30,
    "total_accuracy": 25,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 14,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 25,
      "chance": 0.025
    }, {
      "id": 26,
      "chance": 0.0025
    }, {
      "id": 28,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 216,
      "chance": 0.0035
    }, {
      "id": 250,
      "chance": 0.0025
    }, {
      "id": 362,
      "chance": 0.0015
    }],
    "combat_level": 83
  },
  "name": "Sapphire Dragon",
  "img": {
    "sheet": "13",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "total_defense": 80,
    "total_strength": 85,
    "total_accuracy": 80,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 15,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Blacksmith",
  "img": {
    "hash": "0 0 17 61 72 0 1 33 0 17 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 2,
      "spawn": true
    }, {
      "id": 23,
      "count": 2,
      "spawn": true
    }, {
      "id": 32,
      "count": 20,
      "spawn": true
    }, {
      "id": 33,
      "count": 20,
      "spawn": true
    }, {
      "id": 34,
      "count": 0
    }, {
      "id": 64,
      "count": 0
    }, {
      "id": 176,
      "count": 0
    }, {
      "id": 1303,
      "count": 0
    }, {
      "id": 1125,
      "count": 0
    }, {
      "id": 0,
      "count": 5,
      "spawn": true
    }, {
      "id": 37,
      "count": 5,
      "spawn": true
    }, {
      "id": 38,
      "count": 5,
      "spawn": true
    }, {
      "id": 27,
      "count": 5,
      "spawn": true
    }, {
      "id": 1,
      "count": 5,
      "spawn": true
    }, {
      "id": 39,
      "count": 2,
      "spawn": true
    }, {
      "id": 40,
      "count": 2,
      "spawn": true
    }, {
      "id": 41,
      "count": 2,
      "spawn": true
    }, {
      "id": 42,
      "count": 2,
      "spawn": true
    }, {
      "id": 43,
      "count": 2,
      "spawn": true
    }, {
      "id": 976,
      "count": 0
    }, {
      "id": 473,
      "count": 5,
      "spawn": true
    }, {
      "id": 366,
      "count": 5,
      "spawn": true
    }, {
      "id": 1686,
      "count": 5,
      "spawn": true
    }, {
      "id": 368,
      "count": 5,
      "spawn": true
    }, {
      "id": 801,
      "count": 5,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 16,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 54,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 6,
      "chance": 0.2
    }, {
      "id": 44,
      "chance": 0.01
    }, {
      "id": 42,
      "chance": 0.02
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 45,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 62,
      "chance": 0.0025
    }, {
      "id": 43,
      "chance": 0.0025
    }, {
      "id": 58,
      "chance": 0.0025
    }, {
      "id": 295,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 64,
      "chance": 0.005
    }, {
      "id": 272,
      "chance": 0.05
    }],
    "combat_level": 54
  },
  "name": "Gnoll Warrior",
  "img": {
    "hash": "8 0 26 11 0 2 1 8 90 0 4 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 54,
    "busy": false,
    "total_defense": 60,
    "total_strength": 50,
    "total_accuracy": 54
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 17,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 61,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 47,
      "chance": 0.05
    }, {
      "id": 46,
      "chance": 0.0025
    }, {
      "id": 189,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 339,
      "chance": 0.0025
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 142,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 26,
      "chance": 0.02
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 62
  },
  "name": "Hydra",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 61,
    "busy": false,
    "total_defense": 80,
    "total_strength": 65,
    "total_accuracy": 43,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 18,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 69,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 48,
      "chance": 0.0025
    }, {
      "id": 17,
      "chance": 0.05
    }, {
      "id": 56,
      "chance": 0.0025
    }, {
      "id": 855,
      "chance": 0.0015
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 300,
      "chance": 0.001
    }, {
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 49,
      "chance": 0.0025
    }, {
      "id": 369,
      "chance": 0.01
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 70
  },
  "name": "Archangel",
  "img": {
    "hash": "71 0 10 2 6 0 0 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 69,
    "busy": false,
    "total_defense": 70,
    "total_strength": 71,
    "total_accuracy": 73,
    "melee_block": 15,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 19,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 82,
      "chance": 0.01
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 128,
      "chance": 0.0015
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 475,
      "chance": 0.0025
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 141,
      "chance": 0.0025
    }, {
      "id": 144,
      "chance": 0.0015
    }, {
      "id": 370,
      "chance": 0.01
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 95
  },
  "name": "Archdevil",
  "img": {
    "hash": "70 0 10 2 30 0 0 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 130,
    "total_strength": 75,
    "total_accuracy": 75,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 20,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 88,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 59,
      "chance": 0.008
    }, {
      "id": 89,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 64,
      "chance": 0.005
    }, {
      "id": 858,
      "chance": 0.0025
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 1075,
      "chance": 0.0025
    }, {
      "id": 276,
      "chance": 0.005
    }, {
      "id": 135,
      "chance": 0.0025
    }],
    "combat_level": 97
  },
  "name": "Behemoth",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 88,
    "busy": false,
    "total_defense": 122,
    "total_strength": 78,
    "total_accuracy": 100
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 21,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 67,
      "chance": 0.002
    }, {
      "id": 93,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 128,
      "chance": 0.005
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 93
  },
  "name": "Ettin King",
  "img": {
    "hash": "60 0 128 99 1 26 13 0 122 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "total_defense": 80,
    "total_strength": 100,
    "total_accuracy": 100,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 22,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 112,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 129,
      "chance": 0.0025
    }, {
      "id": 428,
      "chance": 0.0025
    }, {
      "id": 996,
      "chance": 0.0025
    }, {
      "id": 406,
      "chance": 0.0025
    }, {
      "id": 233,
      "chance": 0.01
    }, {
      "id": 801,
      "chance": 0.0025
    }, {
      "id": 143,
      "chance": 0.0025
    }, {
      "id": 803,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 895,
      "chance": 0.002
    }, {
      "id": 130,
      "chance": 0.003
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 99
  },
  "name": "Efreet",
  "img": {
    "sheet": "15",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 112,
    "busy": false,
    "magics": [{
      "id": 6
    }],
    "magic": 90,
    "total_defense": 130,
    "total_strength": 1,
    "total_accuracy": 155,
    "cooldown": 0.3,
    "magic_block": 30,
    "melee_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 23,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 98,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 131,
      "chance": 0.0025
    }, {
      "id": 35,
      "chance": 0.0035
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 99,
      "chance": 0.01
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 117
  },
  "name": "Ghost Dragon",
  "img": {
    "sheet": "13",
    "x": 3,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 98,
    "busy": false,
    "total_defense": 100,
    "total_strength": 100,
    "total_accuracy": 170,
    "melee_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 24,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 132,
      "chance": 0.0001
    }, {
      "id": 99,
      "chance": 0.05
    }, {
      "id": 224,
      "chance": 0.008
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 363,
      "chance": 0.0025
    }, {
      "id": 669,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 396,
      "chance": 0.0015
    }, {
      "id": 252,
      "chance": 0.005
    }],
    "combat_level": 165
  },
  "name": "King Ruby Dragon",
  "img": {
    "sheet": "13",
    "x": 0,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 200,
    "total_strength": 100,
    "total_accuracy": 200,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 25,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 73,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 133,
      "chance": 0.005
    }, {
      "id": 49,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1348,
      "chance": 0.0025
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 93,
      "chance": 0.003
    }],
    "combat_level": 84
  },
  "name": "Paladin",
  "img": {
    "hash": "0 0 15 28 6 2 1 41 90 17 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 73,
    "busy": false,
    "total_defense": 100,
    "total_strength": 63,
    "total_accuracy": 100,
    "magic_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 26,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 168,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 153,
      "chance": 0.0025
    }, {
      "id": 155,
      "chance": 0.0025
    }, {
      "id": 655,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 398,
      "chance": 0.0025
    }, {
      "id": 156,
      "chance": 0.003
    }],
    "combat_level": 142
  },
  "name": "Cursed Dragon",
  "img": {
    "sheet": "13",
    "x": 6,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 168,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 150,
    "melee_block": 15,
    "magic_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 27,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 110,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 99,
      "chance": 0.01
    }, {
      "id": 150,
      "chance": 0.0025
    }, {
      "id": 252,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 224,
      "chance": 0.0035
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 148,
      "chance": 0.003
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 152,
      "chance": 0.01
    }],
    "combat_level": 100
  },
  "name": "Ruby Dragon",
  "img": {
    "sheet": "13",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 110,
    "busy": false,
    "total_defense": 90,
    "total_strength": 90,
    "total_accuracy": 110,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 28,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 106,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 134,
      "chance": 0.001
    }, {
      "id": 92,
      "chance": 0.1
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 133,
      "chance": 0.0025
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 215,
      "chance": 0.05
    }],
    "combat_level": 101
  },
  "name": "Vampire Lord",
  "img": {
    "hash": "86 0 10 2 5 0 0 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 106,
    "busy": false,
    "total_defense": 150,
    "total_strength": 50,
    "total_accuracy": 100,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 29,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 83,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 133,
      "chance": 0.005
    }, {
      "id": 49,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 93,
      "chance": 0.03
    }],
    "combat_level": 86
  },
  "name": "Dark Knight",
  "img": {
    "hash": "0 0 16 29 30 2 1 12 93 37 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 83,
    "busy": false,
    "total_defense": 100,
    "total_strength": 53,
    "total_accuracy": 110,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 30,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 83,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 133,
      "chance": 0.005
    }, {
      "id": 149,
      "chance": 0.005
    }, {
      "id": 93,
      "chance": 0.03
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 154,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 94
  },
  "name": "Holy Warrior",
  "img": {
    "hash": "0 0 62 36 7 2 1 12 212 19 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 83,
    "busy": false,
    "total_defense": 120,
    "total_strength": 63,
    "total_accuracy": 110,
    "magic_block": 20,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 31,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 6,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 227,
      "chance": 0.2
    }],
    "combat_level": 5
  },
  "name": "Russula",
  "img": {
    "sheet": "16",
    "x": 1,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 6,
    "busy": false,
    "total_defense": 6,
    "total_strength": 4,
    "total_accuracy": 6
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 32,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 14,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 235,
      "chance": 0.8
    }],
    "combat_level": 15
  },
  "name": "Dark Shroom",
  "img": {
    "sheet": "16",
    "x": 3,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 14,
    "busy": false,
    "total_defense": 20,
    "total_strength": 10,
    "total_accuracy": 16
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 33,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 20,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 236,
      "chance": 0.8
    }],
    "combat_level": 25
  },
  "name": "Blue Magic Shroom",
  "img": {
    "sheet": "16",
    "x": 0,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 20,
    "busy": false,
    "total_defense": 30,
    "total_strength": 20,
    "total_accuracy": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 34,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 35,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 237,
      "chance": 0.8
    }],
    "combat_level": 35
  },
  "name": "Boletus",
  "img": {
    "sheet": "16",
    "x": 1,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 35,
    "busy": false,
    "total_defense": 35,
    "total_strength": 30,
    "total_accuracy": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 35,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 50,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 239,
      "chance": 0.7
    }],
    "combat_level": 45
  },
  "name": "Silver Shroom",
  "img": {
    "sheet": "16",
    "x": 3,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 50,
    "busy": false,
    "total_defense": 50,
    "total_strength": 30,
    "total_accuracy": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 36,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 55,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 238,
      "chance": 0.7
    }],
    "combat_level": 55
  },
  "name": "Golden Shroom",
  "img": {
    "sheet": "16",
    "x": 5,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 55,
    "busy": false,
    "total_defense": 65,
    "total_strength": 40,
    "total_accuracy": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 37,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 60,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 240,
      "chance": 0.6
    }],
    "combat_level": 65
  },
  "name": "Dry-Rotted Shroom",
  "img": {
    "sheet": "16",
    "x": 0,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 60,
    "busy": false,
    "total_defense": 70,
    "total_strength": 50,
    "total_accuracy": 80
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 38,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 241,
      "chance": 0.6
    }],
    "combat_level": 75
  },
  "name": "Avatar's Shroom",
  "img": {
    "sheet": "16",
    "x": 6,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "total_defense": 120,
    "total_strength": 40,
    "total_accuracy": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 39,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 243,
      "chance": 0.6
    }],
    "combat_level": 85
  },
  "name": "Poisoned Shroom",
  "img": {
    "sheet": "16",
    "x": 2,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "total_defense": 80,
    "total_strength": 60,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 40,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 245,
      "chance": 0.5
    }],
    "combat_level": 95
  },
  "name": "Fire Shroom",
  "img": {
    "sheet": "15",
    "x": 7,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 60,
    "total_strength": 80,
    "total_accuracy": 140
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 41,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 244,
      "chance": 0.5
    }],
    "combat_level": 105
  },
  "name": "Lava Shroom",
  "img": {
    "sheet": "15",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 100,
    "total_strength": 100,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 42,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Jeweler",
  "img": {
    "hash": "18 0 69 22 72 0 0 0 0 32 12 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 297,
      "count": 5,
      "spawn": true
    }, {
      "id": 582,
      "count": 10,
      "spawn": true
    }, {
      "id": 292,
      "count": 0
    }, {
      "id": 293,
      "count": 0
    }, {
      "id": 30,
      "count": 20,
      "spawn": true
    }, {
      "id": 185,
      "count": 0
    }, {
      "id": 203,
      "count": 0
    }, {
      "id": 200,
      "count": 0
    }, {
      "id": 201,
      "count": 0
    }, {
      "id": 198,
      "count": 0
    }, {
      "id": 199,
      "count": 0
    }, {
      "id": 196,
      "count": 0
    }, {
      "id": 197,
      "count": 0
    }, {
      "id": 194,
      "count": 0
    }, {
      "id": 195,
      "count": 0
    }, {
      "id": 385,
      "count": 0
    }, {
      "id": 386,
      "count": 0
    }, {
      "id": 387,
      "count": 0
    }, {
      "id": 388,
      "count": 0
    }, {
      "id": 389,
      "count": 0
    }, {
      "id": 390,
      "count": 0
    }, {
      "id": 294,
      "count": 1,
      "spawn": true
    }, {
      "id": 295,
      "count": 1,
      "spawn": true
    }, {
      "id": 302,
      "count": 1,
      "spawn": true
    }, {
      "id": 303,
      "count": 1,
      "spawn": true
    }, {
      "id": 48,
      "count": 2,
      "spawn": true
    }, {
      "id": 803,
      "count": 0
    }, {
      "id": 804,
      "count": 0
    }, {
      "id": 300,
      "count": 0
    }, {
      "id": 49,
      "count": 2,
      "spawn": true
    }, {
      "id": 299,
      "count": 1,
      "spawn": true
    }, {
      "id": 813,
      "count": 0
    }, {
      "id": 814,
      "count": 0
    }, {
      "id": 1085,
      "count": 0
    }, {
      "id": 1086,
      "count": 0
    }, {
      "id": 1087,
      "count": 0
    }, {
      "id": 1088,
      "count": 0
    }, {
      "id": 1105,
      "count": 0
    }, {
      "id": 1106,
      "count": 0
    }, {
      "id": 1107,
      "count": 0
    }, {
      "id": 1108,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 43,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 221,
      "chance": 0.02
    }, {
      "id": 49,
      "chance": 0.025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 1422,
      "chance": 0.0025
    }, {
      "id": 228,
      "chance": 0.1
    }, {
      "id": 75,
      "chance": 0.08
    }],
    "combat_level": 97
  },
  "name": "Cyclops Knight",
  "img": {
    "hash": "60 0 10 2 0 28 14 19 87 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "total_defense": 108,
    "total_strength": 60,
    "total_accuracy": 140,
    "magic_block": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 44,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 28,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 249,
      "chance": 0.05
    }, {
      "id": 270,
      "chance": 0.1
    }, {
      "id": 41,
      "chance": 0.05
    }, {
      "id": 1422,
      "chance": 0.0025
    }, {
      "id": 274,
      "chance": 0.1
    }, {
      "id": 19,
      "chance": 0.05
    }],
    "combat_level": 30
  },
  "name": "Desert Runner",
  "img": {
    "hash": "84 0 13 7 0 20 10 1 27 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 28,
    "busy": false,
    "total_defense": 30,
    "total_strength": 20,
    "total_accuracy": 42
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 45,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 200,
      "chance": 0.005
    }, {
      "id": 270,
      "chance": 0.1
    }, {
      "id": 264,
      "chance": 0.1
    }, {
      "id": 1422,
      "chance": 0.0025
    }, {
      "id": 230,
      "chance": 0.05
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 146,
      "chance": 0.0025
    }],
    "combat_level": 106
  },
  "name": "Desert Orc",
  "img": {
    "hash": "67 0 21 7 2 24 12 6 86 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "total_defense": 130,
    "total_strength": 70,
    "total_accuracy": 132,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 46,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 110,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 264,
      "chance": 0.1
    }, {
      "id": 858,
      "chance": 0.0025
    }, {
      "id": 1422,
      "chance": 0.0025
    }, {
      "id": 1075,
      "chance": 0.0025
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 268,
      "chance": 0.05
    }, {
      "id": 230,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 285,
      "chance": 0.03
    }],
    "combat_level": 110
  },
  "name": "Orc King",
  "img": {
    "hash": "66 0 103 69 2 24 12 59 90 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 110,
    "busy": false,
    "total_defense": 100,
    "total_strength": 80,
    "total_accuracy": 150,
    "melee_block": 10,
    "magic_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 47,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 38,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 274,
      "chance": 0.1
    }, {
      "id": 760,
      "chance": 0.05
    }, {
      "id": 856,
      "chance": 0.0025
    }, {
      "id": 292,
      "chance": 0.05
    }, {
      "id": 1422,
      "chance": 0.0025
    }, {
      "id": 268,
      "chance": 0.01
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 42,
      "chance": 0.05
    }],
    "combat_level": 42
  },
  "name": "Fire Imp",
  "img": {
    "sheet": "18",
    "x": 1,
    "y": 10
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38,
    "busy": false,
    "total_defense": 40,
    "total_strength": 30,
    "total_accuracy": 60,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 48,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 72,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 62,
      "chance": 0.01
    }, {
      "id": 275,
      "chance": 0.05
    }, {
      "id": 284,
      "chance": 0.05
    }, {
      "id": 286,
      "chance": 0.05
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 61,
      "chance": 0.05
    }],
    "combat_level": 72
  },
  "name": "King Cobra",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 72,
    "busy": false,
    "total_defense": 66,
    "total_strength": 60,
    "total_accuracy": 90
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 49,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 48,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 44,
      "chance": 0.01
    }, {
      "id": 206,
      "chance": 0.1
    }, {
      "id": 212,
      "chance": 0.05
    }, {
      "id": 260,
      "chance": 0.02
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 42,
      "chance": 0.02
    }],
    "combat_level": 58
  },
  "name": "Fire Viper",
  "img": {
    "sheet": "15",
    "x": 8,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 48,
    "busy": false,
    "total_defense": 72,
    "total_strength": 50,
    "total_accuracy": 62
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 50,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 72,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 44,
      "chance": 0.0025
    }, {
      "id": 205,
      "chance": 0.1
    }, {
      "id": 210,
      "chance": 0.05
    }, {
      "id": 260,
      "chance": 0.02
    }, {
      "id": 247,
      "chance": 0.02
    }, {
      "id": 303,
      "chance": 0.01
    }],
    "combat_level": 86
  },
  "name": "Fire Ant",
  "img": {
    "sheet": "17",
    "x": 7,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 72,
    "busy": false,
    "total_defense": 120,
    "total_strength": 60,
    "total_accuracy": 92
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 51,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 66,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 81,
      "chance": 0.04
    }, {
      "id": 205,
      "chance": 0.1
    }, {
      "id": 212,
      "chance": 0.05
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 285,
      "chance": 0.005
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 48,
      "chance": 0.005
    }, {
      "id": 418,
      "chance": 0.001
    }],
    "combat_level": 56
  },
  "name": "Wind Elemental",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 66,
    "busy": false,
    "magics": [{
      "id": 8
    }],
    "magic": 55,
    "total_defense": 70,
    "total_strength": 1,
    "total_accuracy": 90,
    "magic_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 52,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 82,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 81,
      "chance": 0.04
    }, {
      "id": 46,
      "chance": 0.0025
    }, {
      "id": 212,
      "chance": 0.05
    }, {
      "id": 285,
      "chance": 0.005
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 146,
      "chance": 0.0025
    }],
    "combat_level": 90
  },
  "name": "Ice Troglodyte",
  "img": {
    "hash": "94 0 15 16 0 12 6 60 93 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 82,
    "busy": false,
    "total_defense": 108,
    "total_strength": 70,
    "total_accuracy": 100,
    "melee_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 53,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 76,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 83,
      "chance": 0.02
    }, {
      "id": 204,
      "chance": 0.05
    }, {
      "id": 221,
      "chance": 0.005
    }, {
      "id": 61,
      "chance": 0.01
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 293,
      "chance": 0.005
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 83
  },
  "name": "Frozen Bat",
  "img": {
    "sheet": "15",
    "x": 7,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 76,
    "busy": false,
    "total_defense": 80,
    "total_strength": 76,
    "total_accuracy": 100
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 54,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 110,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 83,
      "chance": 0.02
    }, {
      "id": 207,
      "chance": 0.05
    }, {
      "id": 222,
      "chance": 0.003
    }, {
      "id": 259,
      "chance": 0.1
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 163,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 115
  },
  "name": "Ice Giant",
  "img": {
    "hash": "104 0 138 108 0 48 29 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 110,
    "busy": false,
    "total_defense": 120,
    "total_strength": 80,
    "total_accuracy": 150,
    "melee_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 55,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 98,
      "chance": 0.02
    }, {
      "id": 261,
      "chance": 0.05
    }, {
      "id": 267,
      "chance": 0.08
    }, {
      "id": 862,
      "chance": 0.0025
    }, {
      "id": 1075,
      "chance": 0.0025
    }, {
      "id": 144,
      "chance": 0.0025
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 201,
      "chance": 0.01
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 130
  },
  "name": "Ice Lizard",
  "img": {
    "sheet": "15",
    "x": 3,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 150,
    "total_strength": 90,
    "total_accuracy": 150
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 56,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 150,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 89,
      "chance": 0.02
    }, {
      "id": 298,
      "chance": 0.05
    }, {
      "id": 299,
      "chance": 0.05
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 180,
      "chance": 0.0025
    }, {
      "id": 217,
      "chance": 0.05
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 363,
      "chance": 0.0025
    }],
    "combat_level": 150
  },
  "name": "Ice Golem",
  "img": {
    "hash": "114 0 136 107 0 47 28 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 150,
    "busy": false,
    "total_defense": 150,
    "total_strength": 150,
    "total_accuracy": 150,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 57,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 280,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 109,
      "chance": 0.02
    }, {
      "id": 301,
      "chance": 0.0025
    }, {
      "id": 258,
      "chance": 0.05
    }, {
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 378,
      "chance": 0.0025
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 363,
      "chance": 0.0025
    }, {
      "id": 467,
      "chance": 0.0025
    }, {
      "id": 248,
      "chance": 0.05
    }, {
      "id": 194,
      "chance": 0.01
    }],
    "combat_level": 230
  },
  "name": "Frozen Spirit",
  "img": {
    "sheet": "15",
    "x": 4,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 280,
    "busy": false,
    "magics": [{
      "id": 9
    }],
    "magic": 90,
    "total_defense": 320,
    "total_strength": 1,
    "total_accuracy": 320,
    "melee_block": 15,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 58,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 66,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 89,
      "chance": 0.02
    }, {
      "id": 205,
      "chance": 0.05
    }, {
      "id": 861,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 994,
      "chance": 0.0025
    }, {
      "id": 220,
      "chance": 0.05
    }, {
      "id": 58,
      "chance": 0.01
    }, {
      "id": 18,
      "chance": 0.03
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 74
  },
  "name": "Wind Protector",
  "img": {
    "hash": "94 0 63 54 0 11 6 50 166 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 66,
    "busy": false,
    "total_defense": 100,
    "total_strength": 40,
    "total_accuracy": 90,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 59,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 383,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 384,
      "chance": 0.005
    }],
    "combat_level": 122
  },
  "name": "Azure Golem",
  "img": {
    "hash": "109 0 131 102 0 42 22 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "total_defense": 108,
    "total_strength": 85,
    "total_accuracy": 115,
    "melee_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 60,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 34,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 33,
      "chance": 0.05
    }, {
      "id": 32,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 34,
      "chance": 0.05
    }],
    "combat_level": 26
  },
  "name": "Bronze Golem",
  "img": {
    "hash": "112 0 134 105 0 45 26 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 34,
    "busy": false,
    "total_defense": 20,
    "total_strength": 30,
    "total_accuracy": 20,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 61,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 52,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 31,
      "chance": 0.05
    }, {
      "id": 186,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 194,
      "chance": 0.0015
    }],
    "combat_level": 63
  },
  "name": "Coal Golem",
  "img": {
    "hash": "111 0 133 104 0 44 25 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 52,
    "busy": false,
    "total_defense": 100,
    "total_strength": 50,
    "total_accuracy": 50,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 62,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 52,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 23,
      "chance": 0.03
    }, {
      "id": 31,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 860,
      "chance": 0.0025
    }, {
      "id": 1071,
      "chance": 0.0025
    }, {
      "id": 50,
      "chance": 0.03
    }],
    "combat_level": 48
  },
  "name": "Iron Golem",
  "img": {
    "hash": "110 0 132 103 0 43 24 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 52,
    "busy": false,
    "total_defense": 50,
    "total_strength": 30,
    "total_accuracy": 60,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 63,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 31,
      "chance": 0.04
    }, {
      "id": 186,
      "chance": 0.03
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 291,
      "chance": 0.01
    }],
    "combat_level": 73
  },
  "name": "Steel Golem",
  "img": {
    "hash": "108 0 130 101 0 41 21 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "total_defense": 80,
    "total_strength": 40,
    "total_accuracy": 80,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 64,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 89,
      "chance": 0.02
    }, {
      "id": 205,
      "chance": 0.05
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 150,
      "chance": 0.0025
    }, {
      "id": 289,
      "chance": 0.025
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 419,
      "chance": 0.005
    }],
    "combat_level": 92
  },
  "name": "Rock Spirit",
  "img": {
    "sheet": "18",
    "x": 4,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "total_defense": 100,
    "total_strength": 66,
    "total_accuracy": 110,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 65,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 86,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 85,
      "chance": 0.02
    }, {
      "id": 142,
      "chance": 0.01
    }, {
      "id": 228,
      "chance": 0.1
    }, {
      "id": 1424,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 259,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.03
    }, {
      "id": 52,
      "chance": 0.01
    }],
    "combat_level": 84
  },
  "name": "Mutated Hydra",
  "img": {
    "sheet": "15",
    "x": 2,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 86,
    "busy": false,
    "total_defense": 90,
    "total_strength": 50,
    "total_accuracy": 110
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 66,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 38,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 77,
      "chance": 0.02
    }, {
      "id": 205,
      "chance": 0.05
    }, {
      "id": 220,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1424,
      "chance": 0.0025
    }, {
      "id": 57,
      "chance": 0.01
    }, {
      "id": 856,
      "chance": 0.0025
    }, {
      "id": 230,
      "chance": 0.01
    }, {
      "id": 264,
      "chance": 0.05
    }],
    "combat_level": 47
  },
  "name": "Dark Orc",
  "img": {
    "hash": "97 0 20 20 1 40 19 0 114 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38,
    "busy": false,
    "total_defense": 40,
    "total_strength": 50,
    "total_accuracy": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 67,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 33,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 89,
      "chance": 0.02
    }, {
      "id": 270,
      "chance": 0.05
    }, {
      "id": 269,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 860,
      "chance": 0.0025
    }, {
      "id": 1269,
      "chance": 0.0015
    }, {
      "id": 1071,
      "chance": 0.0025
    }, {
      "id": 1359,
      "chance": 0.0015
    }, {
      "id": 51,
      "chance": 0.01
    }, {
      "id": 24,
      "chance": 0.02
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 38
  },
  "name": "Skeleton Knight",
  "img": {
    "hash": "89 0 124 95 2 32 16 1 90 15 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 33,
    "busy": false,
    "total_defense": 39,
    "total_strength": 40,
    "total_accuracy": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 68,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 18,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 11,
      "chance": 0.02
    }, {
      "id": 4,
      "chance": 0.03
    }, {
      "id": 220,
      "chance": 0.05
    }, {
      "id": 274,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 269,
      "chance": 0.005
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 25
  },
  "name": "Minotaur Skeleton",
  "img": {
    "hash": "90 0 124 95 2 30 15 0 11 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 18,
    "busy": false,
    "total_defense": 30,
    "total_strength": 22,
    "total_accuracy": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 69,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 125,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 101,
      "chance": 0.02
    }, {
      "id": 152,
      "chance": 0.03
    }, {
      "id": 198,
      "chance": 0.01
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 207,
      "chance": 0.1
    }, {
      "id": 261,
      "chance": 0.02
    }, {
      "id": 216,
      "chance": 0.01
    }],
    "combat_level": 150
  },
  "name": "Snow Troll Knight",
  "img": {
    "hash": "6 0 85 59 2 12 6 60 108 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 125,
    "busy": false,
    "total_defense": 175,
    "total_strength": 100,
    "total_accuracy": 200
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 70,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 97,
      "chance": 0.02
    }, {
      "id": 207,
      "chance": 0.08
    }, {
      "id": 222,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 862,
      "chance": 0.0025
    }, {
      "id": 259,
      "chance": 0.01
    }, {
      "id": 268,
      "chance": 0.05
    }, {
      "id": 155,
      "chance": 0.0025
    }],
    "combat_level": 120
  },
  "name": "Snow Troll Assassin",
  "img": {
    "hash": "6 0 85 59 1 12 7 0 129 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 120,
    "total_strength": 80,
    "total_accuracy": 180
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 71,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 76,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 87,
      "chance": 0.02
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 272,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 259,
      "chance": 0.01
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 865,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 284,
      "chance": 0.05
    }, {
      "id": 302,
      "chance": 0.01
    }],
    "combat_level": 80
  },
  "name": "Snow Troll Defender",
  "img": {
    "hash": "6 0 85 59 0 12 7 67 147 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 76,
    "busy": false,
    "total_defense": 84,
    "total_strength": 60,
    "total_accuracy": 100,
    "melee_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 72,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 83,
      "chance": 0.02
    }, {
      "id": 275,
      "chance": 0.05
    }, {
      "id": 188,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 274,
      "chance": 0.01
    }, {
      "id": 48,
      "chance": 0.005
    }, {
      "id": 445,
      "chance": 0.0025
    }, {
      "id": 449,
      "chance": 0.005
    }, {
      "id": 453,
      "chance": 0.004
    }],
    "combat_level": 77
  },
  "name": "Snow Gungan Priest",
  "img": {
    "hash": "98 0 63 43 0 15 7 68 68 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "magics": [{
      "id": 5
    }],
    "magic": 50,
    "total_defense": 110,
    "total_strength": 1,
    "total_accuracy": 110,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 73,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 120,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 99,
      "chance": 0.02
    }, {
      "id": 143,
      "chance": 0.05
    }, {
      "id": 275,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 228,
      "chance": 0.05
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 176,
      "chance": 0.005
    }],
    "combat_level": 130
  },
  "name": "Snow Gungan Lord",
  "img": {
    "hash": "98 0 64 38 0 15 7 68 236 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 120,
    "busy": false,
    "total_defense": 150,
    "total_strength": 90,
    "total_accuracy": 160,
    "melee_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 74,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 120,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 101,
      "chance": 0.02
    }, {
      "id": 255,
      "chance": 0.01
    }, {
      "id": 229,
      "chance": 0.0025
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 262,
      "chance": 0.001
    }, {
      "id": 301,
      "chance": 0.01
    }],
    "combat_level": 130
  },
  "name": "Baby Elemental Dragon",
  "img": {
    "sheet": "13",
    "x": 7,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 120,
    "busy": false,
    "total_defense": 120,
    "total_strength": 100,
    "total_accuracy": 180,
    "magic_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 75,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 101,
      "chance": 0.05
    }, {
      "id": 255,
      "chance": 0.02
    }, {
      "id": 229,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 262,
      "chance": 0.01
    }, {
      "id": 397,
      "chance": 0.0025
    }, {
      "id": 267,
      "chance": 0.05
    }, {
      "id": 151,
      "chance": 0.01
    }],
    "combat_level": 190
  },
  "name": "Adult Elemental Dragon",
  "img": {
    "sheet": "13",
    "x": 7,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 250,
    "total_strength": 100,
    "total_accuracy": 250,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 76,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 350,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 101,
      "chance": 0.02
    }, {
      "id": 256,
      "chance": 0.03
    }, {
      "id": 229,
      "chance": 0.07
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1015,
      "chance": 0.07
    }, {
      "id": 262,
      "chance": 0.01
    }, {
      "id": 399,
      "chance": 0.0025
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 1661,
      "chance": 0.0015
    }, {
      "id": 267,
      "chance": 0.08
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 128,
      "chance": 0.0025
    }],
    "combat_level": 300
  },
  "name": "King Elemental Dragon",
  "img": {
    "sheet": "13",
    "x": 7,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 350,
    "busy": false,
    "total_defense": 330,
    "total_strength": 170,
    "total_accuracy": 350,
    "magic_block": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 77,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Alchemist",
  "img": {
    "hash": "18 0 65 39 72 2 0 50 162 43 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1016,
      "count": 10,
      "spawn": true
    }, {
      "id": 204,
      "count": 10,
      "spawn": true
    }, {
      "id": 274,
      "count": 5,
      "spawn": true
    }, {
      "id": 220,
      "count": 5,
      "spawn": true
    }, {
      "id": 264,
      "count": 0
    }, {
      "id": 215,
      "count": 0
    }, {
      "id": 271,
      "count": 0
    }, {
      "id": 1421,
      "count": 0
    }, {
      "id": 1422,
      "count": 0
    }, {
      "id": 1423,
      "count": 0
    }, {
      "id": 1424,
      "count": 0
    }, {
      "id": 230,
      "count": 0
    }, {
      "id": 228,
      "count": 0
    }, {
      "id": 283,
      "count": 0
    }, {
      "id": 249,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 78,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Whiland Mushroom Fanatic",
  "img": {
    "hash": "18 0 62 36 72 0 0 0 0 44 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 227,
      "count": 40,
      "spawn": true
    }, {
      "id": 235,
      "count": 40,
      "spawn": true
    }, {
      "id": 236,
      "count": 0
    }, {
      "id": 237,
      "count": 0
    }, {
      "id": 238,
      "count": 0
    }, {
      "id": 239,
      "count": 0
    }, {
      "id": 240,
      "count": 0
    }, {
      "id": 241,
      "count": 0
    }, {
      "id": 242,
      "count": 0
    }, {
      "id": 243,
      "count": 0
    }, {
      "id": 245,
      "count": 0
    }, {
      "id": 244,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 79,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Shopkeeper",
  "img": {
    "hash": "18 0 65 39 72 2 0 0 102 46 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 5,
      "count": 2,
      "spawn": true
    }, {
      "id": 21,
      "count": 2,
      "spawn": true
    }, {
      "id": 286,
      "count": 2,
      "spawn": true
    }, {
      "id": 47,
      "count": 0
    }, {
      "id": 20,
      "count": 0
    }, {
      "id": 187,
      "count": 0
    }, {
      "id": 314,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 80,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Potion Master",
  "img": {
    "hash": "18 0 63 37 72 0 1 39 0 46 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 304,
      "count": 2,
      "spawn": true
    }, {
      "id": 305,
      "count": 2,
      "spawn": true
    }, {
      "id": 306,
      "count": 2,
      "spawn": true
    }, {
      "id": 307,
      "count": 0
    }, {
      "id": 308,
      "count": 0
    }, {
      "id": 309,
      "count": 0
    }, {
      "id": 310,
      "count": 0
    }, {
      "id": 311,
      "count": 0
    }, {
      "id": 795,
      "count": 0
    }, {
      "id": 312,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 81,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Fishing Master",
  "img": {
    "hash": "18 0 15 28 72 2 0 0 80 39 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 125,
      "count": 0
    }, {
      "id": 946,
      "count": 10,
      "spawn": true
    }, {
      "id": 1036,
      "count": 10,
      "spawn": true
    }, {
      "id": 76,
      "count": 5,
      "spawn": true
    }, {
      "id": 77,
      "count": 5,
      "spawn": true
    }, {
      "id": 78,
      "count": 5,
      "spawn": true
    }, {
      "id": 79,
      "count": 0
    }, {
      "id": 80,
      "count": 5,
      "spawn": true
    }, {
      "id": 81,
      "count": 0
    }, {
      "id": 82,
      "count": 5,
      "spawn": true
    }, {
      "id": 83,
      "count": 0
    }, {
      "id": 1370,
      "count": 0
    }, {
      "id": 1371,
      "count": 0
    }, {
      "id": 84,
      "count": 0
    }, {
      "id": 85,
      "count": 0
    }, {
      "id": 86,
      "count": 0
    }, {
      "id": 87,
      "count": 0
    }, {
      "id": 88,
      "count": 0
    }, {
      "id": 89,
      "count": 0
    }, {
      "id": 90,
      "count": 0
    }, {
      "id": 91,
      "count": 0
    }, {
      "id": 92,
      "count": 0
    }, {
      "id": 93,
      "count": 0
    }, {
      "id": 94,
      "count": 0
    }, {
      "id": 95,
      "count": 0
    }, {
      "id": 96,
      "count": 0
    }, {
      "id": 97,
      "count": 0
    }, {
      "id": 1372,
      "count": 0
    }, {
      "id": 1373,
      "count": 0
    }, {
      "id": 98,
      "count": 0
    }, {
      "id": 99,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 82,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Magician",
  "img": {
    "hash": "18 0 32 33 72 1 0 49 66 20 12 5"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 348,
      "count": 5,
      "spawn": true
    }, {
      "id": 993,
      "count": 0
    }, {
      "id": 992,
      "count": 0
    }, {
      "id": 994,
      "count": 0
    }, {
      "id": 995,
      "count": 0
    }, {
      "id": 996,
      "count": 0
    }, {
      "id": 1598,
      "count": 0
    }, {
      "id": 1677,
      "count": 0
    }, {
      "id": 452,
      "count": 5,
      "spawn": true
    }, {
      "id": 448,
      "count": 5,
      "spawn": true
    }, {
      "id": 479,
      "count": 5,
      "spawn": true
    }, {
      "id": 444,
      "count": 10,
      "spawn": true
    }, {
      "id": 434,
      "count": 5,
      "spawn": true
    }, {
      "id": 422,
      "count": 5,
      "spawn": true
    }, {
      "id": 402,
      "count": 10,
      "spawn": true
    }, {
      "id": 403,
      "count": 10,
      "spawn": true
    }, {
      "id": 404,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 83,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Magician",
  "img": {
    "hash": "18 0 63 37 72 1 0 50 165 46 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 349,
      "count": 5,
      "spawn": true
    }, {
      "id": 452,
      "count": 0
    }, {
      "id": 448,
      "count": 0
    }, {
      "id": 479,
      "count": 5,
      "spawn": true
    }, {
      "id": 434,
      "count": 5,
      "spawn": true
    }, {
      "id": 435,
      "count": 5,
      "spawn": true
    }, {
      "id": 423,
      "count": 5,
      "spawn": true
    }, {
      "id": 405,
      "count": 10,
      "spawn": true
    }, {
      "id": 406,
      "count": 10,
      "spawn": true
    }, {
      "id": 407,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 84,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Whiland Magician",
  "img": {
    "hash": "18 0 62 36 72 1 0 50 166 39 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 350,
      "count": 5,
      "spawn": true
    }, {
      "id": 453,
      "count": 0
    }, {
      "id": 449,
      "count": 0
    }, {
      "id": 480,
      "count": 0
    }, {
      "id": 424,
      "count": 5,
      "spawn": true
    }, {
      "id": 425,
      "count": 0
    }, {
      "id": 428,
      "count": 0
    }, {
      "id": 429,
      "count": 0
    }, {
      "id": 407,
      "count": 10,
      "spawn": true
    }, {
      "id": 408,
      "count": 10,
      "spawn": true
    }, {
      "id": 409,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 85,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Magician",
  "img": {
    "hash": "18 0 64 38 72 2 0 50 72 17 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 351,
      "count": 5,
      "spawn": true
    }, {
      "id": 453,
      "count": 5,
      "spawn": true
    }, {
      "id": 449,
      "count": 5,
      "spawn": true
    }, {
      "id": 480,
      "count": 5,
      "spawn": true
    }, {
      "id": 424,
      "count": 5,
      "spawn": true
    }, {
      "id": 425,
      "count": 0
    }, {
      "id": 407,
      "count": 10,
      "spawn": true
    }, {
      "id": 408,
      "count": 10,
      "spawn": true
    }, {
      "id": 409,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 86,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Magician",
  "img": {
    "hash": "18 0 62 36 72 1 0 54 166 51 6 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 352,
      "count": 5,
      "spawn": true
    }, {
      "id": 455,
      "count": 0
    }, {
      "id": 457,
      "count": 0
    }, {
      "id": 481,
      "count": 0
    }, {
      "id": 426,
      "count": 5,
      "spawn": true
    }, {
      "id": 427,
      "count": 0
    }, {
      "id": 428,
      "count": 0
    }, {
      "id": 429,
      "count": 0
    }, {
      "id": 430,
      "count": 0
    }, {
      "id": 431,
      "count": 0
    }, {
      "id": 436,
      "count": 0
    }, {
      "id": 437,
      "count": 0
    }, {
      "id": 438,
      "count": 0
    }, {
      "id": 439,
      "count": 0
    }, {
      "id": 410,
      "count": 10,
      "spawn": true
    }, {
      "id": 411,
      "count": 10,
      "spawn": true
    }, {
      "id": 412,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 87,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 157,
      "chance": 0.0025
    }, {
      "id": 371,
      "chance": 0.01
    }, {
      "id": 165,
      "chance": 0.0025
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 652,
      "chance": 0.0025
    }, {
      "id": 421,
      "chance": 0.01
    }],
    "combat_level": 172
  },
  "name": "Flame Phoenix",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "magics": [{
      "id": 11
    }],
    "magic": 90,
    "total_defense": 210,
    "total_strength": 1,
    "total_accuracy": 300,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 88,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 136,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 401,
      "chance": 0.01
    }, {
      "id": 89,
      "chance": 0.01
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 866,
      "chance": 0.0025
    }, {
      "id": 340,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 276,
      "chance": 0.005
    }, {
      "id": 135,
      "chance": 0.0035
    }],
    "combat_level": 134
  },
  "name": "Fire Behemoth",
  "img": {
    "sheet": "15",
    "x": 8,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 136,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 150,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 89,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 110,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 83,
      "chance": 0.02
    }, {
      "id": 207,
      "chance": 0.05
    }, {
      "id": 222,
      "chance": 0.003
    }, {
      "id": 259,
      "chance": 0.1
    }, {
      "id": 129,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 115
  },
  "name": "Flaming Giant",
  "img": {
    "hash": "103 0 137 109 0 49 30 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 110,
    "busy": false,
    "total_defense": 120,
    "total_strength": 80,
    "total_accuracy": 150,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 90,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 103,
      "chance": 0.02
    }, {
      "id": 207,
      "chance": 0.05
    }, {
      "id": 147,
      "chance": 0.01
    }, {
      "id": 259,
      "chance": 0.1
    }, {
      "id": 342,
      "chance": 0.0025
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 145
  },
  "name": "Blood Lizard",
  "img": {
    "sheet": "14",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 150
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 91,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 156,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 369,
      "chance": 0.02
    }, {
      "id": 180,
      "chance": 0.005
    }, {
      "id": 163,
      "chance": 0.0025
    }, {
      "id": 103,
      "chance": 0.05
    }, {
      "id": 221,
      "chance": 0.01
    }],
    "combat_level": 139
  },
  "name": "Hell Angel",
  "img": {
    "hash": "71 0 95 70 32 2 0 0 131 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 156,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 150,
    "melee_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 92,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Hell Keeper",
  "img": {
    "hash": "18 0 79 16 72 2 1 33 133 51 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 346,
      "count": 2,
      "spawn": true
    }, {
      "id": 35,
      "count": 0
    }, {
      "id": 133,
      "count": 2,
      "spawn": true
    }, {
      "id": 163,
      "count": 2,
      "spawn": true
    }, {
      "id": 173,
      "count": 0
    }, {
      "id": 177,
      "count": 0
    }, {
      "id": 1304,
      "count": 0
    }, {
      "id": 365,
      "count": 0
    }, {
      "id": 366,
      "count": 5,
      "spawn": true
    }, {
      "id": 368,
      "count": 5,
      "spawn": true
    }, {
      "id": 370,
      "count": 0
    }, {
      "id": 371,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 93,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 86,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 457,
      "chance": 0.0025
    }, {
      "id": 455,
      "chance": 0.0025
    }, {
      "id": 438,
      "chance": 0.0025
    }, {
      "id": 79,
      "chance": 0.05
    }, {
      "id": 412,
      "chance": 0.01
    }],
    "combat_level": 71
  },
  "name": "Battlemage",
  "img": {
    "hash": "0 0 62 36 33 2 0 50 64 19 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 86,
    "busy": false,
    "magics": [{
      "id": 7
    }],
    "magic": 50,
    "total_defense": 100,
    "total_strength": 1,
    "total_accuracy": 100,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 94,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 457,
      "chance": 0.0025
    }, {
      "id": 455,
      "chance": 0.0025
    }, {
      "id": 273,
      "chance": 0.05
    }],
    "combat_level": 73
  },
  "name": "Dwarf Battlemage",
  "img": {
    "sheet": "15",
    "x": 3,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "magics": [{
      "id": 6
    }],
    "magic": 60,
    "total_defense": 100,
    "total_strength": 1,
    "total_accuracy": 100,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 95,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 126,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 450,
      "chance": 0.0025
    }, {
      "id": 456,
      "chance": 0.0025
    }, {
      "id": 413,
      "chance": 0.01
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 414,
      "chance": 0.01
    }, {
      "id": 430,
      "chance": 0.0025
    }],
    "combat_level": 89
  },
  "name": "Confused Merlin",
  "img": {
    "hash": "0 0 64 38 44 2 0 51 72 22 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 126,
    "busy": false,
    "magics": [{
      "id": 8
    }],
    "magic": 100,
    "total_defense": 50,
    "total_strength": 1,
    "total_accuracy": 180,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 96,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 136,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 450,
      "chance": 0.0025
    }, {
      "id": 456,
      "chance": 0.0025
    }, {
      "id": 415,
      "chance": 0.01
    }, {
      "id": 414,
      "chance": 0.01
    }, {
      "id": 1598,
      "chance": 0.0025
    }, {
      "id": 445,
      "chance": 0.0025
    }],
    "combat_level": 109
  },
  "name": "Merlin",
  "img": {
    "hash": "0 0 64 38 49 2 0 51 166 22 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 136,
    "busy": false,
    "magics": [{
      "id": 8
    }],
    "magic": 100,
    "total_defense": 150,
    "total_strength": 1,
    "total_accuracy": 150,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 97,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 186,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 451,
      "chance": 0.0025
    }, {
      "id": 432,
      "chance": 0.0025
    }, {
      "id": 1598,
      "chance": 0.0025
    }, {
      "id": 416,
      "chance": 0.01
    }, {
      "id": 417,
      "chance": 0.01
    }, {
      "id": 445,
      "chance": 0.0025
    }],
    "combat_level": 129
  },
  "name": "Young Grendalf",
  "img": {
    "hash": "0 0 66 40 51 2 0 51 168 23 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 186,
    "busy": false,
    "magics": [{
      "id": 9
    }],
    "magic": 100,
    "total_defense": 150,
    "total_strength": 1,
    "total_accuracy": 180,
    "magic_block": 25,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 98,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 186,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 451,
      "chance": 0.0025
    }, {
      "id": 454,
      "chance": 0.0025
    }, {
      "id": 418,
      "chance": 0.01
    }, {
      "id": 1598,
      "chance": 0.0025
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 420,
      "chance": 0.005
    }, {
      "id": 445,
      "chance": 0.0025
    }],
    "combat_level": 159
  },
  "name": "Grendalf The Grey",
  "img": {
    "hash": "0 0 66 40 53 2 0 51 218 23 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 186,
    "busy": false,
    "magics": [{
      "id": 9
    }],
    "magic": 100,
    "total_defense": 200,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 30,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 99,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 200,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 463,
      "chance": 0.0025
    }, {
      "id": 454,
      "chance": 0.0025
    }, {
      "id": 981,
      "chance": 0.003
    }, {
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 458,
      "chance": 0.005
    }, {
      "id": 1012,
      "chance": 0.01
    }, {
      "id": 855,
      "chance": 0.0025
    }, {
      "id": 460,
      "chance": 0.0025
    }, {
      "id": 1599,
      "chance": 0.0025
    }, {
      "id": 446,
      "chance": 0.0025
    }],
    "combat_level": 175
  },
  "name": "Zeus",
  "img": {
    "hash": "0 0 89 74 53 2 0 51 220 45 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 200,
    "busy": false,
    "magics": [{
      "id": 12
    }],
    "magic": 100,
    "total_defense": 250,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 100,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 2,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 3,
      "chance": 0.25
    }, {
      "id": 1302,
      "chance": 0.01
    }, {
      "id": 759,
      "chance": 0.1
    }, {
      "id": 756,
      "chance": 0.1
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 492,
      "chance": 0.25
    }],
    "combat_level": 1
  },
  "name": "Chicken",
  "img": {
    "sheet": "34",
    "x": 1,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 2,
    "busy": false,
    "total_defense": 1,
    "total_strength": 1,
    "total_accuracy": 1
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 101,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 5,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 3,
      "chance": 0.25
    }, {
      "id": 7,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 759,
      "chance": 0.1
    }, {
      "id": 756,
      "chance": 0.1
    }, {
      "id": 1302,
      "chance": 0.01
    }, {
      "id": 492,
      "chance": 0.25
    }],
    "combat_level": 2
  },
  "name": "Hen",
  "img": {
    "sheet": "34",
    "x": 2,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 5,
    "busy": false,
    "total_defense": 1,
    "total_strength": 1,
    "total_accuracy": 1
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 102,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 8,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 494,
      "chance": 0.15
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 757,
      "chance": 0.1
    }, {
      "id": 756,
      "chance": 0.1
    }, {
      "id": 5,
      "chance": 0.01
    }],
    "combat_level": 7
  },
  "name": "Cow",
  "img": {
    "sheet": "34",
    "x": 3,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 8,
    "busy": false,
    "total_defense": 5,
    "total_strength": 5,
    "total_accuracy": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 103,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 18,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 494,
      "chance": 0.1
    }, {
      "id": 204,
      "chance": 0.02
    }, {
      "id": 757,
      "chance": 0.1
    }, {
      "id": 756,
      "chance": 0.1
    }, {
      "id": 1423,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 424,
      "chance": 0.0025
    }],
    "combat_level": 18
  },
  "name": "Deer",
  "img": {
    "sheet": "34",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 18,
    "busy": false,
    "total_defense": 17,
    "total_strength": 17,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 104,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 38,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 270,
      "chance": 0.1
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1423,
      "chance": 0.0025
    }, {
      "id": 41,
      "chance": 0.01
    }],
    "combat_level": 34
  },
  "name": "Bear",
  "img": {
    "sheet": "34",
    "x": 4,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38,
    "busy": false,
    "total_defense": 30,
    "total_strength": 38,
    "total_accuracy": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 105,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 220,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 369,
      "chance": 0.05
    }, {
      "id": 347,
      "chance": 0.0025
    }, {
      "id": 661,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 440,
      "chance": 0.0025
    }, {
      "id": 415,
      "chance": 0.01
    }, {
      "id": 376,
      "chance": 0.0025
    }],
    "combat_level": 180
  },
  "name": "Death Angel",
  "img": {
    "hash": "71 0 110 81 53 0 0 0 123 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 220,
    "busy": false,
    "total_defense": 170,
    "total_strength": 130,
    "total_accuracy": 200,
    "melee_block": 65
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 106,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 28,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 423,
      "chance": 0.01
    }, {
      "id": 234,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 13,
      "chance": 0.01
    }],
    "combat_level": 22
  },
  "name": "Baby Gryffin",
  "img": {
    "sheet": "15",
    "x": 0,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 28,
    "busy": false,
    "total_defense": 30,
    "total_strength": 10,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 107,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 54,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 27,
      "chance": 0.01
    }, {
      "id": 234,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 55,
      "chance": 0.0025
    }],
    "combat_level": 46
  },
  "name": "Griffin",
  "img": {
    "sheet": "17",
    "x": 4,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 54,
    "busy": false,
    "total_defense": 45,
    "total_strength": 40,
    "total_accuracy": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 108,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 181,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 702,
      "chance": 0.0025
    }, {
      "id": 257,
      "chance": 0.0025
    }, {
      "id": 364,
      "chance": 0.0025
    }],
    "combat_level": 200
  },
  "name": "King Black Dragon",
  "img": {
    "sheet": "13",
    "x": 7,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 150,
    "total_strength": 150,
    "total_accuracy": 250,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 109,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 58,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 275,
      "chance": 0.05
    }, {
      "id": 1257,
      "chance": 0.002
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 299,
      "chance": 0.003
    }],
    "combat_level": 62
  },
  "name": "Naga",
  "img": {
    "sheet": "54",
    "x": 6,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 58,
    "busy": false,
    "total_defense": 50,
    "total_strength": 50,
    "total_accuracy": 90
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 110,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 74,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 219,
      "chance": 0.0025
    }, {
      "id": 54,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 695,
      "chance": 0.0025
    }, {
      "id": 79,
      "chance": 0.01
    }],
    "combat_level": 76
  },
  "name": "Royal Griffin",
  "img": {
    "sheet": "17",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 74,
    "busy": false,
    "total_defense": 70,
    "total_strength": 70,
    "total_accuracy": 90
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 111,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 140,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 95,
      "chance": 0.05
    }, {
      "id": 250,
      "chance": 0.005
    }, {
      "id": 216,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 263,
      "chance": 0.01
    }, {
      "id": 35,
      "chance": 0.0025
    }, {
      "id": 397,
      "chance": 0.0025
    }, {
      "id": 267,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.0025
    }],
    "combat_level": 110
  },
  "name": "Adult Sapphire Dragon",
  "img": {
    "sheet": "13",
    "x": 0,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 140,
    "busy": false,
    "total_defense": 110,
    "total_strength": 80,
    "total_accuracy": 110,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 112,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 95,
      "chance": 0.05
    }, {
      "id": 250,
      "chance": 0.01
    }, {
      "id": 216,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 263,
      "chance": 0.01
    }, {
      "id": 397,
      "chance": 0.0025
    }, {
      "id": 267,
      "chance": 0.05
    }, {
      "id": 165,
      "chance": 0.0025
    }],
    "combat_level": 140
  },
  "name": "King Sapphire Dragon",
  "img": {
    "sheet": "13",
    "x": 1,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 160,
    "total_strength": 100,
    "total_accuracy": 140,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 113,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 66,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 45,
      "chance": 0.0025
    }, {
      "id": 53,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 682,
      "chance": 0.0025
    }, {
      "id": 59,
      "chance": 0.008
    }],
    "combat_level": 84
  },
  "name": "King Observer",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 66,
    "busy": false,
    "total_defense": 70,
    "total_strength": 120,
    "total_accuracy": 80
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 114,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 54,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 77,
      "chance": 0.05
    }, {
      "id": 861,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 64,
      "chance": 0.005
    }],
    "combat_level": 74
  },
  "name": "Observer",
  "img": {
    "sheet": "15",
    "x": 5,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 54,
    "busy": false,
    "total_defense": 82,
    "total_strength": 80,
    "total_accuracy": 80
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 115,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 82,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 366,
      "chance": 0.0025
    }, {
      "id": 368,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 426,
      "chance": 0.0025
    }],
    "combat_level": 83
  },
  "name": "Ettin",
  "img": {
    "hash": "73 0 128 98 1 26 13 0 94 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 82,
    "busy": false,
    "total_defense": 75,
    "total_strength": 100,
    "total_accuracy": 75,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 116,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 106,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 457,
      "chance": 0.0025
    }, {
      "id": 455,
      "chance": 0.0025
    }, {
      "id": 438,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 79,
      "chance": 0.05
    }, {
      "id": 412,
      "chance": 0.01
    }],
    "combat_level": 81
  },
  "name": "Blood Battlemage",
  "img": {
    "hash": "0 0 29 36 5 2 0 50 220 19 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 106,
    "busy": false,
    "magics": [{
      "id": 4
    }],
    "magic": 50,
    "total_defense": 100,
    "total_strength": 1,
    "total_accuracy": 120,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 117,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Makeover Guy",
  "img": {
    "hash": "4 0 37 24 72 0 0 0 0 24 6 2"
  },
  "type": 4,
  "activities": ["Makeover", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 118,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Lumberjack",
  "img": {
    "hash": "4 0 43 25 72 2 1 7 35 0 1 2"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 29,
      "count": 10,
      "spawn": true
    }, {
      "id": 313,
      "count": 5,
      "spawn": true
    }, {
      "id": 22,
      "count": 5,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 119,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 24,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 47,
      "chance": 0.001
    }, {
      "id": 37,
      "chance": 0.001
    }, {
      "id": 20,
      "chance": 0.001
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 124,
      "chance": 0.0025
    }, {
      "id": 473,
      "chance": 0.0025
    }, {
      "id": 9,
      "chance": 0.005
    }],
    "combat_level": 21
  },
  "name": "Apeman",
  "img": {
    "hash": "61 0 12 8 0 22 11 0 12 0 4 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 24,
    "busy": false,
    "total_defense": 20,
    "total_strength": 20,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 120,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 20,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 5,
      "chance": 0.003
    }, {
      "id": 21,
      "chance": 0.004
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1421,
      "chance": 0.0025
    }, {
      "id": 0,
      "chance": 0.007
    }, {
      "id": 38,
      "chance": 0.005
    }],
    "combat_level": 20
  },
  "name": "Dragonfly",
  "img": {
    "sheet": "17",
    "x": 1,
    "y": 7
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 20,
    "busy": false,
    "total_defense": 20,
    "total_strength": 20,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 121,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Holy Guardian",
  "img": {
    "hash": "18 0 82 50 72 2 0 0 133 39 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 367,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 122,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Weapon Merchant",
  "img": {
    "hash": "0 0 17 25 72 2 0 0 125 43 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 505,
      "count": 0
    }, {
      "id": 506,
      "count": 0
    }, {
      "id": 509,
      "count": 0
    }, {
      "id": 510,
      "count": 0
    }, {
      "id": 798,
      "count": 0
    }, {
      "id": 800,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 123,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Armor Merchant",
  "img": {
    "hash": "0 0 44 26 72 0 1 39 0 1 6 2"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 555,
      "count": 0
    }, {
      "id": 560,
      "count": 0
    }, {
      "id": 562,
      "count": 0
    }, {
      "id": 571,
      "count": 0
    }, {
      "id": 572,
      "count": 0
    }, {
      "id": 802,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 124,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 1200,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 1425,
      "chance": 0.05
    }, {
      "id": 363,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.05
    }, {
      "id": 178,
      "chance": 0.05
    }, {
      "id": 190,
      "chance": 0.05
    }, {
      "id": 194,
      "chance": 0.04
    }, {
      "id": 202,
      "chance": 0.03
    }, {
      "id": 203,
      "chance": 0.03
    }, {
      "id": 258,
      "chance": 0.04
    }, {
      "id": 1127,
      "chance": 0.05
    }, {
      "id": 1626,
      "chance": 0.04
    }, {
      "id": 1305,
      "chance": 0.05
    }, {
      "id": 167,
      "chance": 0.05
    }, {
      "id": 651,
      "chance": 0.03
    }, {
      "id": 481,
      "chance": 0.06
    }, {
      "id": 497,
      "chance": 0.07
    }, {
      "id": 710,
      "chance": 0.02
    }, {
      "id": 593,
      "chance": 0.02
    }, {
      "id": 476,
      "chance": 0.05
    }],
    "combat_level": 470
  },
  "name": "[BOSS] Orc Overlord",
  "img": {
    "sheet": "15",
    "x": 7,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1200,
    "busy": false,
    "total_defense": 250,
    "total_strength": 80,
    "total_accuracy": 350
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 125,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 91,
      "chance": 0.05
    }, {
      "id": 254,
      "chance": 0.0025
    }, {
      "id": 64,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1434,
      "chance": 0.0025
    }, {
      "id": 231,
      "chance": 0.0025
    }, {
      "id": 198,
      "chance": 0.005
    }, {
      "id": 141,
      "chance": 0.01
    }],
    "combat_level": 80
  },
  "name": "Baby Emerald Dragon",
  "img": {
    "sheet": "13",
    "x": 3,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 80,
    "total_strength": 60,
    "total_accuracy": 80,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 126,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 120,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 93,
      "chance": 0.05
    }, {
      "id": 254,
      "chance": 0.0035
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 231,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 198,
      "chance": 0.008
    }, {
      "id": 67,
      "chance": 0.0025
    }],
    "combat_level": 95
  },
  "name": "Emerald Dragon",
  "img": {
    "sheet": "13",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 120,
    "busy": false,
    "total_defense": 100,
    "total_strength": 60,
    "total_accuracy": 100,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 127,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 145,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 93,
      "chance": 0.05
    }, {
      "id": 254,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1434,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 231,
      "chance": 0.0075
    }, {
      "id": 198,
      "chance": 0.01
    }, {
      "id": 149,
      "chance": 0.0025
    }],
    "combat_level": 115
  },
  "name": "Adult Emerald Dragon",
  "img": {
    "sheet": "13",
    "x": 3,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 145,
    "busy": false,
    "total_defense": 115,
    "total_strength": 70,
    "total_accuracy": 130,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 128,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 99,
      "chance": 0.05
    }, {
      "id": 254,
      "chance": 0.008
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 231,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1434,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 198,
      "chance": 0.015
    }, {
      "id": 706,
      "chance": 0.0025
    }, {
      "id": 139,
      "chance": 0.0025
    }],
    "combat_level": 145
  },
  "name": "King Emerald Dragon",
  "img": {
    "sheet": "13",
    "x": 4,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 140,
    "total_strength": 100,
    "total_accuracy": 180,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 129,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 220,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 364,
      "chance": 0.0025
    }, {
      "id": 1,
      "chance": 0.005
    }, {
      "id": 37,
      "chance": 0.005
    }, {
      "id": 462,
      "chance": 0.0025
    }, {
      "id": 1434,
      "chance": 0.0025
    }, {
      "id": 2,
      "chance": 0.0025
    }, {
      "id": 18,
      "chance": 0.0025
    }, {
      "id": 19,
      "chance": 0.0025
    }, {
      "id": 698,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 248,
      "chance": 0.05
    }, {
      "id": 199,
      "chance": 0.03
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 139,
      "chance": 0.0025
    }],
    "combat_level": 190
  },
  "name": "Moss Wyvern",
  "img": {
    "sheet": "15",
    "x": 7,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 220,
    "busy": false,
    "total_defense": 200,
    "total_strength": 140,
    "total_accuracy": 200,
    "melee_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 130,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 406,
      "chance": 0.05
    }, {
      "id": 60,
      "chance": 0.0025
    }, {
      "id": 127,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1358,
      "chance": 0.0025
    }, {
      "id": 307,
      "chance": 0.03
    }, {
      "id": 64,
      "chance": 0.005
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 659,
      "chance": 0.0025
    }, {
      "id": 75,
      "chance": 0.05
    }],
    "combat_level": 90
  },
  "name": "Grass Snake",
  "img": {
    "sheet": "15",
    "x": 9,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 100,
    "total_strength": 60,
    "total_accuracy": 100
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 131,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 140,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 374,
      "chance": 0.001
    }, {
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 686,
      "chance": 0.0025
    }, {
      "id": 1434,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 319,
      "chance": 0.05
    }, {
      "id": 475,
      "chance": 0.0025
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 87,
      "chance": 0.05
    }],
    "combat_level": 120
  },
  "name": "Barbarian Ghost",
  "img": {
    "hash": "63 0 125 96 0 6 3 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 140,
    "busy": false,
    "total_defense": 140,
    "total_strength": 60,
    "total_accuracy": 140,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 132,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 449,
      "chance": 0.05
    }, {
      "id": 453,
      "chance": 0.04
    }, {
      "id": 166,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 475,
      "chance": 0.0025
    }, {
      "id": 1434,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 87,
      "chance": 0.05
    }],
    "combat_level": 85
  },
  "name": "Barbarian Shaman",
  "img": {
    "hash": "63 0 125 96 9 7 3 50 167 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "magics": [{
      "id": 5
    }],
    "magic": 60,
    "total_defense": 120,
    "total_strength": 1,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 133,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 45,
      "chance": 0.0025
    }, {
      "id": 143,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 28,
      "chance": 0.0025
    }, {
      "id": 307,
      "chance": 0.01
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 87,
      "chance": 0.05
    }],
    "combat_level": 100
  },
  "name": "Barbarian Berserker",
  "img": {
    "hash": "63 0 78 62 9 8 3 0 127 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 120,
    "total_strength": 60,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 134,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 45,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 17,
      "chance": 0.1
    }, {
      "id": 402,
      "chance": 0.04
    }, {
      "id": 25,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 233,
      "chance": 0.05
    }],
    "combat_level": 45
  },
  "name": "Shadow Ghost",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 45,
    "busy": false,
    "total_defense": 40,
    "total_strength": 40,
    "total_accuracy": 55,
    "melee_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 135,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 45,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 17,
      "chance": 0.1
    }, {
      "id": 303,
      "chance": 0.025
    }, {
      "id": 51,
      "chance": 0.03
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 864,
      "chance": 0.0025
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 233,
      "chance": 0.05
    }],
    "combat_level": 50
  },
  "name": "Spirit",
  "img": {
    "hash": "96 0 124 96 0 30 15 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 45,
    "busy": false,
    "total_defense": 60,
    "total_strength": 45,
    "total_accuracy": 50,
    "melee_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 136,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 31,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 17,
      "chance": 0.1
    }, {
      "id": 24,
      "chance": 0.015
    }, {
      "id": 59,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 233,
      "chance": 0.05
    }],
    "combat_level": 30
  },
  "name": "Poltergeist",
  "img": {
    "hash": "91 0 125 96 0 30 15 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 31,
    "busy": false,
    "total_defense": 32,
    "total_strength": 28,
    "total_accuracy": 32,
    "melee_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 137,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 17,
      "chance": 0.1
    }, {
      "id": 48,
      "chance": 0.025
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 233,
      "chance": 0.05
    }],
    "combat_level": 95
  },
  "name": "Energy Ghost",
  "img": {
    "sheet": "15",
    "x": 3,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 75,
    "total_strength": 75,
    "total_accuracy": 130,
    "melee_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 138,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 89,
      "chance": 0.05
    }, {
      "id": 154,
      "chance": 0.0025
    }, {
      "id": 60,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1359,
      "chance": 0.0025
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 233,
      "chance": 0.05
    }],
    "combat_level": 115
  },
  "name": "Skeleton Assassin",
  "img": {
    "hash": "89 0 94 96 0 32 15 0 90 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 100,
    "total_strength": 70,
    "total_accuracy": 160
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 139,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Blacksmith",
  "img": {
    "hash": "18 0 47 57 72 2 1 41 135 39 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 2,
      "spawn": true
    }, {
      "id": 23,
      "count": 2,
      "spawn": true
    }, {
      "id": 581,
      "count": 10,
      "spawn": true
    }, {
      "id": 186,
      "count": 0
    }, {
      "id": 383,
      "count": 0
    }, {
      "id": 384,
      "count": 0
    }, {
      "id": 174,
      "count": 0
    }, {
      "id": 178,
      "count": 0
    }, {
      "id": 35,
      "count": 0
    }, {
      "id": 340,
      "count": 0
    }, {
      "id": 362,
      "count": 0
    }, {
      "id": 498,
      "count": 0
    }, {
      "id": 476,
      "count": 0
    }, {
      "id": 163,
      "count": 0
    }, {
      "id": 161,
      "count": 0
    }, {
      "id": 165,
      "count": 0
    }, {
      "id": 138,
      "count": 0
    }, {
      "id": 393,
      "count": 0
    }, {
      "id": 394,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 140,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Fishing Master",
  "img": {
    "hash": "18 0 47 27 72 2 0 0 80 42 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 125,
      "count": 0
    }, {
      "id": 124,
      "count": 10,
      "spawn": true
    }, {
      "id": 127,
      "count": 10,
      "spawn": true
    }, {
      "id": 100,
      "count": 0
    }, {
      "id": 101,
      "count": 0
    }, {
      "id": 102,
      "count": 0
    }, {
      "id": 103,
      "count": 0
    }, {
      "id": 104,
      "count": 0
    }, {
      "id": 105,
      "count": 0
    }, {
      "id": 106,
      "count": 0
    }, {
      "id": 107,
      "count": 0
    }, {
      "id": 108,
      "count": 0
    }, {
      "id": 109,
      "count": 0
    }, {
      "id": 110,
      "count": 0
    }, {
      "id": 111,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 141,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Magician",
  "img": {
    "hash": "18 0 88 52 72 2 0 54 171 44 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 598,
      "count": 5,
      "spawn": true
    }, {
      "id": 455,
      "count": 0
    }, {
      "id": 457,
      "count": 0
    }, {
      "id": 481,
      "count": 0
    }, {
      "id": 426,
      "count": 5,
      "spawn": true
    }, {
      "id": 427,
      "count": 0
    }, {
      "id": 438,
      "count": 0
    }, {
      "id": 429,
      "count": 0
    }, {
      "id": 413,
      "count": 10,
      "spawn": true
    }, {
      "id": 414,
      "count": 10,
      "spawn": true
    }, {
      "id": 412,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 142,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Walco Magician",
  "img": {
    "hash": "18 0 60 34 72 1 0 50 61 44 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 599,
      "count": 5,
      "spawn": true
    }, {
      "id": 453,
      "count": 0
    }, {
      "id": 449,
      "count": 0
    }, {
      "id": 480,
      "count": 0
    }, {
      "id": 424,
      "count": 5,
      "spawn": true
    }, {
      "id": 425,
      "count": 0
    }, {
      "id": 407,
      "count": 10,
      "spawn": true
    }, {
      "id": 408,
      "count": 10,
      "spawn": true
    }, {
      "id": 409,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 143,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Tutorial Instructor",
  "img": {
    "hash": "18 0 81 60 72 0 1 36 0 39 12 5"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 144,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cooking Instructor",
  "img": {
    "hash": "14 0 44 40 72 0 0 0 0 0 12 0"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 145,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Fishing Instructor",
  "img": {
    "hash": "13 0 43 25 72 1 0 0 81 0 1 2"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 146,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Combat Instructor",
  "img": {
    "hash": "18 0 92 60 72 2 1 39 148 51 12 5"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 147,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Jewelry Instructor",
  "img": {
    "hash": "18 0 79 60 72 0 0 0 0 15 12 6"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 148,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Mining Instructor",
  "img": {
    "hash": "18 0 87 57 72 2 0 0 46 43 0 0"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 149,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Forging Instructor",
  "img": {
    "hash": "18 0 81 60 72 2 1 36 173 32 12 6"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 150,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Woodcutting Instructor",
  "img": {
    "hash": "18 0 81 60 72 2 0 0 47 32 1 2"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 151,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Chest Instructor",
  "img": {
    "hash": "18 0 25 25 72 0 0 0 0 0 12 6"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 152,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 1600,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 1426,
      "chance": 0.06
    }, {
      "id": 451,
      "chance": 0.07
    }, {
      "id": 361,
      "chance": 0.05
    }, {
      "id": 144,
      "chance": 0.07
    }, {
      "id": 174,
      "chance": 0.06
    }, {
      "id": 265,
      "chance": 0.04
    }, {
      "id": 305,
      "chance": 0.05
    }, {
      "id": 178,
      "chance": 0.06
    }, {
      "id": 368,
      "chance": 0.05
    }, {
      "id": 370,
      "chance": 0.05
    }, {
      "id": 1626,
      "chance": 0.06
    }, {
      "id": 1127,
      "chance": 0.06
    }, {
      "id": 1305,
      "chance": 0.06
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 432,
      "chance": 0.05
    }, {
      "id": 182,
      "chance": 0.04
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 169,
      "chance": 0.04
    }, {
      "id": 593,
      "chance": 0.03
    }],
    "combat_level": 600
  },
  "name": "[BOSS] The Reaper",
  "img": {
    "sheet": "37",
    "x": 7,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1600,
    "busy": false,
    "total_defense": 300,
    "total_strength": 150,
    "total_accuracy": 350,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 153,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 3250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 174,
      "chance": 0.06
    }, {
      "id": 178,
      "chance": 0.06
    }, {
      "id": 1127,
      "chance": 0.06
    }, {
      "id": 1305,
      "chance": 0.06
    }, {
      "id": 342,
      "chance": 0.03
    }, {
      "id": 622,
      "chance": 0.03
    }, {
      "id": 465,
      "chance": 0.03
    }, {
      "id": 260,
      "chance": 0.05
    }, {
      "id": 258,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 1626,
      "chance": 0.06
    }, {
      "id": 710,
      "chance": 0.02
    }, {
      "id": 138,
      "chance": 0.08
    }, {
      "id": 134,
      "chance": 0.08
    }, {
      "id": 664,
      "chance": 0.03
    }, {
      "id": 454,
      "chance": 0.07
    }, {
      "id": 593,
      "chance": 0.03
    }, {
      "id": 1341,
      "chance": 0.005
    }],
    "combat_level": 1000
  },
  "name": "[BOSS] Ancient Hydra",
  "img": {
    "sheet": "37",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 3250,
    "busy": false,
    "total_defense": 300,
    "total_strength": 100,
    "total_accuracy": 350
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 154,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 14900,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 175,
      "chance": 0.06
    }, {
      "id": 179,
      "chance": 0.06
    }, {
      "id": 1128,
      "chance": 0.06
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 1687,
      "chance": 0.02
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 1306,
      "chance": 0.06
    }, {
      "id": 183,
      "chance": 0.03
    }, {
      "id": 478,
      "chance": 0.05
    }, {
      "id": 1682,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 584,
      "chance": 0.03
    }, {
      "id": 624,
      "chance": 0.02
    }, {
      "id": 649,
      "chance": 0.03
    }, {
      "id": 593,
      "chance": 0.05
    }],
    "combat_level": 3975
  },
  "name": "[BOSS] Acid Dragon Lord",
  "img": {
    "sheet": "37",
    "x": 1,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 14900,
    "busy": false,
    "magics": [{
      "id": 22
    }],
    "magic": 450,
    "total_defense": 450,
    "total_strength": 1,
    "total_accuracy": 550,
    "cooldown": 0.3,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 155,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 2400,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 1427,
      "chance": 0.06
    }, {
      "id": 160,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 169,
      "chance": 0.04
    }, {
      "id": 475,
      "chance": 0.04
    }, {
      "id": 174,
      "chance": 0.06
    }, {
      "id": 154,
      "chance": 0.03
    }, {
      "id": 1687,
      "chance": 0.02
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 130,
      "chance": 0.04
    }, {
      "id": 131,
      "chance": 0.04
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 146,
      "chance": 0.03
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 138,
      "chance": 0.03
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 150,
      "chance": 0.035
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 155,
      "chance": 0.04
    }, {
      "id": 143,
      "chance": 0.04
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1271,
      "chance": 0.05
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 178,
      "chance": 0.06
    }, {
      "id": 1127,
      "chance": 0.06
    }, {
      "id": 1305,
      "chance": 0.06
    }, {
      "id": 710,
      "chance": 0.02
    }, {
      "id": 145,
      "chance": 0.08
    }, {
      "id": 1641,
      "chance": 0.01
    }, {
      "id": 1659,
      "chance": 0.01
    }, {
      "id": 133,
      "chance": 0.08
    }, {
      "id": 364,
      "chance": 0.04
    }, {
      "id": 363,
      "chance": 0.03
    }, {
      "id": 593,
      "chance": 0.03
    }],
    "combat_level": 800
  },
  "name": "[BOSS] Diablo",
  "img": {
    "sheet": "49",
    "x": 1,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 2400,
    "busy": false,
    "total_defense": 300,
    "total_strength": 100,
    "total_accuracy": 400
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 156,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 5000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 1428,
      "chance": 0.06
    }, {
      "id": 489,
      "chance": 0.03
    }, {
      "id": 361,
      "chance": 0.02
    }, {
      "id": 190,
      "chance": 0.08
    }, {
      "id": 175,
      "chance": 0.04
    }, {
      "id": 179,
      "chance": 0.04
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 130,
      "chance": 0.04
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 129,
      "chance": 0.04
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 664,
      "chance": 0.04
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 764,
      "chance": 0.04
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 808,
      "chance": 0.04
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 1128,
      "chance": 0.04
    }, {
      "id": 1306,
      "chance": 0.04
    }, {
      "id": 391,
      "chance": 0.03
    }, {
      "id": 340,
      "chance": 0.05
    }, {
      "id": 475,
      "chance": 0.06
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 1692,
      "chance": 0.02
    }, {
      "id": 618,
      "chance": 0.05
    }, {
      "id": 593,
      "chance": 0.03
    }],
    "combat_level": 1475
  },
  "name": "[BOSS] Demon Portal",
  "img": {
    "sheet": "37",
    "x": 6,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 5000,
    "busy": false,
    "magics": [{
      "id": 20
    }],
    "magic": 350,
    "total_defense": 400,
    "total_strength": 1,
    "total_accuracy": 500,
    "cooldown": 0.4,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 157,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 75,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 140,
      "chance": 0.0015
    }, {
      "id": 152,
      "chance": 0.0025
    }, {
      "id": 406,
      "chance": 0.01
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 339,
      "chance": 0.0015
    }],
    "combat_level": 70
  },
  "name": "Sand Centipede",
  "img": {
    "sheet": "17",
    "x": 5,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 75,
    "busy": false,
    "total_defense": 80,
    "total_strength": 45,
    "total_accuracy": 80
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 158,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 85,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 90,
      "chance": 0.05
    }, {
      "id": 64,
      "chance": 0.005
    }, {
      "id": 294,
      "chance": 0.0025
    }, {
      "id": 865,
      "chance": 0.0025
    }, {
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 53,
      "chance": 0.0025
    }, {
      "id": 150,
      "chance": 0.0015
    }, {
      "id": 294,
      "chance": 0.0025
    }, {
      "id": 141,
      "chance": 0.01
    }],
    "combat_level": 80
  },
  "name": "Rock Centipede",
  "img": {
    "sheet": "17",
    "x": 0,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 85,
    "busy": false,
    "total_defense": 90,
    "total_strength": 55,
    "total_accuracy": 90
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 159,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 95,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 442,
      "chance": 0.0015
    }, {
      "id": 410,
      "chance": 0.01
    }, {
      "id": 86,
      "chance": 0.04
    }, {
      "id": 298,
      "chance": 0.0025
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 474,
      "chance": 0.0025
    }, {
      "id": 144,
      "chance": 0.0025
    }],
    "combat_level": 90
  },
  "name": "Fire Centipede",
  "img": {
    "sheet": "17",
    "x": 4,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 95,
    "busy": false,
    "total_defense": 100,
    "total_strength": 65,
    "total_accuracy": 100
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 160,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 152,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 363,
      "chance": 0.0025
    }, {
      "id": 58,
      "chance": 0.0025
    }, {
      "id": 46,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 94,
      "chance": 0.05
    }, {
      "id": 153,
      "chance": 0.0025
    }],
    "combat_level": 138
  },
  "name": "Skeletal dragon",
  "img": {
    "sheet": "13",
    "x": 0,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 152,
    "busy": false,
    "total_defense": 160,
    "total_strength": 80,
    "total_accuracy": 160
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 161,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 82,
      "chance": 0.05
    }, {
      "id": 616,
      "chance": 0.0015
    }],
    "combat_level": 95
  },
  "name": "DarkElf Mage",
  "img": {
    "hash": "74 0 94 97 0 2 0 50 218 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "magics": [{
      "id": 4
    }],
    "magic": 100,
    "total_defense": 120,
    "total_strength": 1,
    "total_accuracy": 160,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 162,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 50,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 187,
      "chance": 0.04
    }, {
      "id": 24,
      "chance": 0.0025
    }, {
      "id": 147,
      "chance": 0.0025
    }, {
      "id": 339,
      "chance": 0.0025
    }, {
      "id": 76,
      "chance": 0.03
    }],
    "combat_level": 60
  },
  "name": "Sand Golem",
  "img": {
    "hash": "113 0 135 106 0 46 27 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 50,
    "busy": false,
    "total_defense": 80,
    "total_strength": 40,
    "total_accuracy": 70,
    "melee_block": 5
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 163,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 40,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 426,
      "chance": 0.0025
    }, {
      "id": 408,
      "chance": 0.02
    }, {
      "id": 368,
      "chance": 0.0025
    }, {
      "id": 474,
      "chance": 0.0025
    }, {
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 78,
      "chance": 0.02
    }, {
      "id": 438,
      "chance": 0.0015
    }],
    "combat_level": 50
  },
  "name": "Mummy",
  "img": {
    "sheet": "17",
    "x": 7,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 40,
    "busy": false,
    "total_defense": 60,
    "total_strength": 30,
    "total_accuracy": 70
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 164,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 50,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 426,
      "chance": 0.0025
    }, {
      "id": 408,
      "chance": 0.02
    }, {
      "id": 128,
      "chance": 0.0025
    }, {
      "id": 368,
      "chance": 0.0025
    }, {
      "id": 474,
      "chance": 0.0025
    }, {
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 78,
      "chance": 0.02
    }, {
      "id": 438,
      "chance": 0.0015
    }],
    "combat_level": 60
  },
  "name": "Rotting Mummy",
  "img": {
    "sheet": "17",
    "x": 0,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 50,
    "busy": false,
    "total_defense": 70,
    "total_strength": 40,
    "total_accuracy": 80
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 165,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 70,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 49,
      "chance": 0.0025
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 430,
      "chance": 0.0025
    }, {
      "id": 146,
      "chance": 0.0025
    }, {
      "id": 84,
      "chance": 0.04
    }],
    "combat_level": 70
  },
  "name": "Ice Mummy",
  "img": {
    "sheet": "17",
    "x": 5,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 70,
    "busy": false,
    "total_defense": 70,
    "total_strength": 70,
    "total_accuracy": 70
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 166,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 87,
      "chance": 0.02
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 272,
      "chance": 0.05
    }, {
      "id": 130,
      "chance": 0.0025
    }, {
      "id": 131,
      "chance": 0.0025
    }, {
      "id": 259,
      "chance": 0.01
    }, {
      "id": 284,
      "chance": 0.05
    }, {
      "id": 302,
      "chance": 0.01
    }],
    "combat_level": 80
  },
  "name": "Emerald Mummy",
  "img": {
    "sheet": "17",
    "x": 2,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "total_defense": 100,
    "total_strength": 30,
    "total_accuracy": 100
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 167,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 442,
      "chance": 0.0015
    }, {
      "id": 410,
      "chance": 0.01
    }, {
      "id": 86,
      "chance": 0.04
    }, {
      "id": 298,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 474,
      "chance": 0.0025
    }, {
      "id": 144,
      "chance": 0.0025
    }],
    "combat_level": 90
  },
  "name": "Gilded Mummy",
  "img": {
    "sheet": "17",
    "x": 3,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 100,
    "total_strength": 50,
    "total_accuracy": 110
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 168,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 140,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 190,
      "chance": 0.0015
    }, {
      "id": 92,
      "chance": 0.04
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 385,
      "chance": 0.0015
    }, {
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 46,
      "chance": 0.0025
    }, {
      "id": 156,
      "chance": 0.0015
    }, {
      "id": 163,
      "chance": 0.0015
    }],
    "combat_level": 110
  },
  "name": "Amethyst Mummy",
  "img": {
    "sheet": "17",
    "x": 4,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 140,
    "busy": false,
    "total_defense": 120,
    "total_strength": 60,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 169,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 108,
      "chance": 0.03
    }, {
      "id": 350,
      "chance": 0.0015
    }, {
      "id": 149,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 616,
      "chance": 0.0015
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 120
  },
  "name": "Diamond Mummy",
  "img": {
    "sheet": "17",
    "x": 1,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 150,
    "total_strength": 70,
    "total_accuracy": 130
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 170,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 200,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 393,
      "chance": 0.0025
    }, {
      "id": 112,
      "chance": 0.04
    }, {
      "id": 498,
      "chance": 0.0015
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 482,
      "chance": 0.0025
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 342,
      "chance": 0.0025
    }, {
      "id": 440,
      "chance": 0.0025
    }],
    "combat_level": 160
  },
  "name": "Phantom Skull",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 200,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 190
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 171,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 115,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 138,
      "chance": 0.0025
    }, {
      "id": 86,
      "chance": 0.04
    }, {
      "id": 299,
      "chance": 0.0015
    }, {
      "id": 191,
      "chance": 0.0025
    }, {
      "id": 1176,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 128,
      "chance": 0.0025
    }, {
      "id": 150,
      "chance": 0.0025
    }],
    "combat_level": 115
  },
  "name": "Deathstalker Scorpion",
  "img": {
    "sheet": "15",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 115,
    "busy": false,
    "total_defense": 70,
    "total_strength": 115,
    "total_accuracy": 160
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 172,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 140,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 165,
      "chance": 0.0015
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 140,
      "chance": 0.0025
    }, {
      "id": 1176,
      "chance": 0.0025
    }, {
      "id": 866,
      "chance": 0.0025
    }, {
      "id": 1075,
      "chance": 0.0025
    }, {
      "id": 462,
      "chance": 0.0015
    }, {
      "id": 190,
      "chance": 0.0025
    }],
    "combat_level": 135
  },
  "name": "Emperor Scorpion",
  "img": {
    "sheet": "15",
    "x": 0,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 140,
    "busy": false,
    "total_defense": 50,
    "total_strength": 150,
    "total_accuracy": 200
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 173,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 189,
      "chance": 0.0025
    }, {
      "id": 131,
      "chance": 0.0015
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 140,
      "chance": 0.0025
    }, {
      "id": 193,
      "chance": 0.0015
    }, {
      "id": 96,
      "chance": 0.03
    }],
    "combat_level": 85
  },
  "name": "War Elephant",
  "img": {
    "sheet": "17",
    "x": 7,
    "y": 7
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "total_defense": 110,
    "total_strength": 50,
    "total_accuracy": 90
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 174,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 300,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 110,
      "chance": 0.04
    }, {
      "id": 378,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 482,
      "chance": 0.0025
    }, {
      "id": 618,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 187
  },
  "name": "Chaos Vortex",
  "img": {
    "sheet": "15",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 300,
    "busy": false,
    "magics": [{
      "id": 9
    }],
    "magic": 150,
    "total_defense": 100,
    "total_strength": 1,
    "total_accuracy": 350,
    "melee_block": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 175,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 148,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 90,
      "chance": 0.03
    }, {
      "id": 163,
      "chance": 0.0025
    }, {
      "id": 145,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 692,
      "chance": 0.0025
    }, {
      "id": 467,
      "chance": 0.0015
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 137
  },
  "name": "Skeleton King",
  "img": {
    "hash": "85 0 109 81 0 32 16 38 125 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 148,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 150
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 176,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 102,
      "chance": 0.05
    }, {
      "id": 154,
      "chance": 0.0025
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 1359,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 67,
      "chance": 0.0025
    }, {
      "id": 140,
      "chance": 0.0025
    }, {
      "id": 475,
      "chance": 0.0025
    }],
    "combat_level": 105
  },
  "name": "Skeleton Lord",
  "img": {
    "hash": "89 0 78 63 1 32 16 38 119 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 120,
    "total_strength": 80,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 177,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 45,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 78,
      "chance": 0.005
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 56,
      "chance": 0.0025
    }, {
      "id": 864,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 18,
      "chance": 0.0025
    }, {
      "id": 46,
      "chance": 0.0025
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 480,
      "chance": 0.0025
    }, {
      "id": 295,
      "chance": 0.001
    }],
    "combat_level": 37
  },
  "name": "Skeleton Mage",
  "img": {
    "hash": "96 0 47 15 0 31 15 49 68 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 45,
    "busy": false,
    "magics": [{
      "id": 6
    }],
    "magic": 20,
    "total_defense": 55,
    "total_strength": 1,
    "total_accuracy": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 178,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Pet Trader",
  "img": {
    "hash": "13 0 63 37 72 0 0 0 0 44 12 5"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 670,
      "count": 10,
      "spawn": true
    }, {
      "id": 674,
      "count": 0
    }, {
      "id": 887,
      "count": 10,
      "spawn": true
    }, {
      "id": 1810,
      "count": 10,
      "spawn": true
    }, {
      "id": 1813,
      "count": 10,
      "spawn": true
    }, {
      "id": 1816,
      "count": 10,
      "spawn": true
    }, {
      "id": 1819,
      "count": 10,
      "spawn": true
    }, {
      "id": 1257,
      "count": 0
    }, {
      "id": 676,
      "count": 0
    }, {
      "id": 675,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 179,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 75,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 31,
      "chance": 0.005
    }, {
      "id": 50,
      "chance": 0.001
    }],
    "combat_level": 78
  },
  "name": "White Wall",
  "img": {
    "sheet": "35",
    "x": 14,
    "y": 9
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 75,
    "busy": false,
    "total_defense": 90,
    "total_strength": 60,
    "total_accuracy": 90
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 180,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 31,
      "chance": 0.005
    }, {
      "id": 50,
      "chance": 0.01
    }],
    "combat_level": 132
  },
  "name": "White Hard Wall",
  "img": {
    "sheet": "35",
    "x": 14,
    "y": 9
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 150,
    "total_strength": 100,
    "total_accuracy": 150,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 181,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 220,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 364,
      "chance": 0.0025
    }, {
      "id": 462,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 700,
      "chance": 0.0025
    }, {
      "id": 248,
      "chance": 0.05
    }, {
      "id": 199,
      "chance": 0.03
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 139,
      "chance": 0.0025
    }],
    "combat_level": 210
  },
  "name": "Flame Wyvern",
  "img": {
    "sheet": "15",
    "x": 8,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 220,
    "busy": false,
    "total_defense": 250,
    "total_strength": 130,
    "total_accuracy": 240,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 182,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Farmer",
  "img": {
    "hash": "18 0 25 50 72 2 1 39 160 39 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 779,
      "count": 3,
      "spawn": true
    }, {
      "id": 767,
      "count": 10,
      "spawn": true
    }, {
      "id": 1874,
      "count": 10,
      "spawn": true
    }, {
      "id": 1016,
      "count": 10,
      "spawn": true
    }, {
      "id": 754,
      "count": 40,
      "spawn": true
    }, {
      "id": 756,
      "count": 40,
      "spawn": true
    }, {
      "id": 759,
      "count": 40,
      "spawn": true
    }, {
      "id": 1034,
      "count": 40,
      "spawn": true
    }, {
      "id": 755,
      "count": 40,
      "spawn": true
    }, {
      "id": 777,
      "count": 40,
      "spawn": true
    }, {
      "id": 761,
      "count": 40,
      "spawn": true
    }, {
      "id": 763,
      "count": 30,
      "spawn": true
    }, {
      "id": 757,
      "count": 0
    }, {
      "id": 758,
      "count": 0
    }, {
      "id": 760,
      "count": 0
    }, {
      "id": 762,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 183,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Santa",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 6
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 751,
      "count": 10,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 184,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 252,
      "chance": 0.0035
    }, {
      "id": 258,
      "chance": 0.0025
    }, {
      "id": 396,
      "chance": 0.0015
    }, {
      "id": 224,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 95,
      "chance": 0.05
    }, {
      "id": 300,
      "chance": 0.0025
    }, {
      "id": 166,
      "chance": 0.0025
    }, {
      "id": 612,
      "chance": 0.0015
    }],
    "combat_level": 120
  },
  "name": "Adult Ruby Dragon",
  "img": {
    "sheet": "13",
    "x": 5,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 120,
    "total_strength": 80,
    "total_accuracy": 150,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 185,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 22,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 37,
      "chance": 0.0025
    }, {
      "id": 43,
      "chance": 0.0025
    }, {
      "id": 47,
      "chance": 0.0025
    }, {
      "id": 1424,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 994,
      "chance": 0.0025
    }, {
      "id": 16,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 41,
      "chance": 0.0025
    }, {
      "id": 762,
      "chance": 0.02
    }, {
      "id": 403,
      "chance": 0.02
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 7,
      "chance": 0.01
    }],
    "combat_level": 25
  },
  "name": "Thief",
  "img": {
    "hash": "2 0 10 25 0 2 0 0 1 28 0 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 22,
    "busy": false,
    "total_defense": 30,
    "total_strength": 18,
    "total_accuracy": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 186,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 26,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 473,
      "chance": 0.0025
    }, {
      "id": 479,
      "chance": 0.0025
    }, {
      "id": 304,
      "chance": 0.02
    }, {
      "id": 28,
      "chance": 0.0025
    }, {
      "id": 1424,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 22,
      "chance": 0.0025
    }, {
      "id": 0,
      "chance": 0.0025
    }],
    "combat_level": 31
  },
  "name": "Assassin",
  "img": {
    "hash": "2 0 10 25 1 1 0 0 8 28 0 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 26,
    "busy": false,
    "total_defense": 40,
    "total_strength": 18,
    "total_accuracy": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 187,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 38,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 473,
      "chance": 0.0025
    }, {
      "id": 2,
      "chance": 0.0025
    }, {
      "id": 21,
      "chance": 0.0025
    }, {
      "id": 856,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 996,
      "chance": 0.0025
    }, {
      "id": 1424,
      "chance": 0.0025
    }, {
      "id": 20,
      "chance": 0.0025
    }, {
      "id": 26,
      "chance": 0.0025
    }, {
      "id": 72,
      "chance": 0.02
    }],
    "combat_level": 38
  },
  "name": "Explorer",
  "img": {
    "hash": "2 0 14 25 1 2 0 0 7 32 0 2"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38,
    "busy": false,
    "total_defense": 45,
    "total_strength": 24,
    "total_accuracy": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 188,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 50,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 14,
      "chance": 0.02
    }, {
      "id": 260,
      "chance": 0.01
    }, {
      "id": 227,
      "chance": 0.01
    }, {
      "id": 27,
      "chance": 0.0025
    }, {
      "id": 39,
      "chance": 0.0025
    }, {
      "id": 54,
      "chance": 0.0025
    }, {
      "id": 38,
      "chance": 0.0025
    }],
    "combat_level": 45
  },
  "name": "Grizzly Bear",
  "img": {
    "sheet": "34",
    "x": 5,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 50,
    "busy": false,
    "total_defense": 50,
    "total_strength": 30,
    "total_accuracy": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 189,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 14,
      "chance": 0.02
    }, {
      "id": 260,
      "chance": 0.01
    }, {
      "id": 67,
      "chance": 0.0025
    }, {
      "id": 141,
      "chance": 0.0025
    }, {
      "id": 1433,
      "chance": 0.0025
    }, {
      "id": 408,
      "chance": 0.01
    }, {
      "id": 128,
      "chance": 0.0025
    }, {
      "id": 38,
      "chance": 0.0025
    }],
    "combat_level": 82
  },
  "name": "Polar Bear",
  "img": {
    "sheet": "34",
    "x": 7,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "total_defense": 100,
    "total_strength": 38,
    "total_accuracy": 100
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 190,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 133,
      "chance": 0.0025
    }, {
      "id": 481,
      "chance": 0.0025
    }, {
      "id": 375,
      "chance": 0.0025
    }, {
      "id": 12,
      "chance": 0.03
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1175,
      "chance": 0.0025
    }, {
      "id": 187,
      "chance": 0.01
    }, {
      "id": 125,
      "chance": 0.0025
    }, {
      "id": 60,
      "chance": 0.0045
    }],
    "combat_level": 94
  },
  "name": "Lion",
  "img": {
    "sheet": "34",
    "x": 6,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "total_defense": 100,
    "total_strength": 56,
    "total_accuracy": 130
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 191,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 129,
      "chance": 0.0025
    }, {
      "id": 421,
      "chance": 0.01
    }, {
      "id": 467,
      "chance": 0.0025
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 1304,
      "chance": 0.005
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 377,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 481,
      "chance": 0.0025
    }, {
      "id": 167,
      "chance": 0.0025
    }],
    "combat_level": 187
  },
  "name": "Fire Spirit",
  "img": {
    "sheet": "18",
    "x": 3,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "total_defense": 100,
    "total_strength": 168,
    "total_accuracy": 300,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 192,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Furniture Master",
  "img": {
    "hash": "18 0 43 25 72 0 0 0 0 15 1 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 730,
      "count": 0
    }, {
      "id": 732,
      "count": 0
    }, {
      "id": 733,
      "count": 0
    }, {
      "id": 745,
      "count": 0
    }, {
      "id": 734,
      "count": 0
    }, {
      "id": 746,
      "count": 0
    }, {
      "id": 735,
      "count": 0
    }, {
      "id": 747,
      "count": 0
    }, {
      "id": 736,
      "count": 0
    }, {
      "id": 748,
      "count": 0
    }, {
      "id": 737,
      "count": 0
    }, {
      "id": 749,
      "count": 0
    }, {
      "id": 738,
      "count": 0
    }, {
      "id": 750,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 193,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 656,
      "chance": 0.0025
    }, {
      "id": 135,
      "chance": 0.0025
    }, {
      "id": 145,
      "chance": 0.0025
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 818,
      "chance": 0.0025
    }, {
      "id": 813,
      "chance": 0.0025
    }, {
      "id": 481,
      "chance": 0.0025
    }, {
      "id": 167,
      "chance": 0.0025
    }],
    "combat_level": 170
  },
  "name": "Poisonous Behemoth",
  "img": {
    "sheet": "15",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "total_defense": 200,
    "total_strength": 50,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 194,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 342,
      "chance": 0.0025
    }, {
      "id": 46,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 480,
      "chance": 0.0025
    }, {
      "id": 86,
      "chance": 0.03
    }, {
      "id": 198,
      "chance": 0.0025
    }, {
      "id": 790,
      "chance": 0.01
    }, {
      "id": 787,
      "chance": 0.01
    }],
    "combat_level": 147
  },
  "name": "Emerald Plant",
  "img": {
    "sheet": "17",
    "x": 6,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 200,
    "total_strength": 88,
    "total_accuracy": 200
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 195,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 787,
      "chance": 0.01
    }, {
      "id": 777,
      "chance": 0.03
    }, {
      "id": 286,
      "chance": 0.0025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 1358,
      "chance": 0.0025
    }, {
      "id": 86,
      "chance": 0.03
    }, {
      "id": 198,
      "chance": 0.0025
    }, {
      "id": 301,
      "chance": 0.0025
    }, {
      "id": 794,
      "chance": 0.01
    }],
    "combat_level": 95
  },
  "name": "Grass Killer",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "total_defense": 120,
    "total_strength": 60,
    "total_accuracy": 120
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 196,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 5,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 220,
      "chance": 0.05
    }, {
      "id": 5,
      "chance": 0.0025
    }, {
      "id": 1281,
      "chance": 0.0015
    }, {
      "id": 3,
      "chance": 0.1
    }, {
      "id": 0,
      "chance": 0.0025
    }, {
      "id": 1,
      "chance": 0.0025
    }, {
      "id": 21,
      "chance": 0.0025
    }],
    "combat_level": 3
  },
  "name": "Cave Bat",
  "img": {
    "sheet": "15",
    "x": 4,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 5,
    "busy": false,
    "total_defense": 2,
    "total_strength": 2,
    "total_accuracy": 3
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 197,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 12,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 204,
      "chance": 0.05
    }, {
      "id": 5,
      "chance": 0.0025
    }, {
      "id": 37,
      "chance": 0.0025
    }, {
      "id": 39,
      "chance": 0.0025
    }, {
      "id": 187,
      "chance": 0.09
    }],
    "combat_level": 9
  },
  "name": "Cave Worm",
  "img": {
    "sheet": "17",
    "x": 7,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 12,
    "busy": false,
    "total_defense": 8,
    "total_strength": 6,
    "total_accuracy": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 198,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 44,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 10,
      "chance": 0.05
    }, {
      "id": 5,
      "chance": 0.0025
    }, {
      "id": 37,
      "chance": 0.0025
    }, {
      "id": 44,
      "chance": 0.0025
    }, {
      "id": 1269,
      "chance": 0.0015
    }, {
      "id": 1359,
      "chance": 0.0015
    }, {
      "id": 27,
      "chance": 0.0025
    }, {
      "id": 19,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 4,
      "chance": 0.01
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 274,
      "chance": 0.09
    }],
    "combat_level": 41
  },
  "name": "Skeleton Fighter",
  "img": {
    "hash": "89 0 12 26 0 32 15 0 10 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 44,
    "busy": false,
    "total_defense": 50,
    "total_strength": 20,
    "total_accuracy": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 199,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 62,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 448,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 479,
      "chance": 0.0025
    }, {
      "id": 424,
      "chance": 0.0025
    }, {
      "id": 435,
      "chance": 0.0025
    }, {
      "id": 404,
      "chance": 0.04
    }],
    "combat_level": 43
  },
  "name": "Gnoll Mage",
  "img": {
    "hash": "8 0 63 37 0 1 0 49 62 0 4 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 62,
    "busy": false,
    "magics": [{
      "id": 5
    }],
    "magic": 16,
    "total_defense": 50,
    "total_strength": 1,
    "total_accuracy": 60,
    "magic_block": 5
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 200,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 271,
      "chance": 0.05
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 805,
      "chance": 0.0025
    }, {
      "id": 815,
      "chance": 0.0025
    }, {
      "id": 141,
      "chance": 0.0025
    }, {
      "id": 74,
      "chance": 0.04
    }],
    "combat_level": 75
  },
  "name": "Crusader",
  "img": {
    "hash": "4 0 20 26 0 1 0 0 17 0 0 2"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "total_defense": 70,
    "total_strength": 70,
    "total_accuracy": 80,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 201,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 76,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 271,
      "chance": 0.05
    }, {
      "id": 804,
      "chance": 0.0025
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 142,
      "chance": 0.0025
    }, {
      "id": 474,
      "chance": 0.0025
    }, {
      "id": 74,
      "chance": 0.04
    }],
    "combat_level": 69
  },
  "name": "Ridder",
  "img": {
    "hash": "4 0 45 29 0 2 0 0 41 0 0 2"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 76,
    "busy": false,
    "total_defense": 70,
    "total_strength": 60,
    "total_accuracy": 70,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 202,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 271,
      "chance": 0.05
    }, {
      "id": 440,
      "chance": 0.0015
    }, {
      "id": 453,
      "chance": 0.0025
    }, {
      "id": 449,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 480,
      "chance": 0.0025
    }, {
      "id": 430,
      "chance": 0.0015
    }, {
      "id": 411,
      "chance": 0.04
    }],
    "combat_level": 71
  },
  "name": "Scholar",
  "img": {
    "hash": "4 0 88 29 0 2 0 68 163 19 0 2"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "magics": [{
      "id": 7
    }],
    "magic": 25,
    "total_defense": 84,
    "total_strength": 1,
    "total_accuracy": 100,
    "magic_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 203,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Jeweler",
  "img": {
    "hash": "18 0 90 54 72 2 0 0 108 39 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 297,
      "count": 5,
      "spawn": true
    }, {
      "id": 582,
      "count": 10,
      "spawn": true
    }, {
      "id": 292,
      "count": 0
    }, {
      "id": 293,
      "count": 0
    }, {
      "id": 30,
      "count": 25,
      "spawn": true
    }, {
      "id": 202,
      "count": 0
    }, {
      "id": 184,
      "count": 0
    }, {
      "id": 1300,
      "count": 0
    }, {
      "id": 200,
      "count": 0
    }, {
      "id": 201,
      "count": 0
    }, {
      "id": 198,
      "count": 0
    }, {
      "id": 199,
      "count": 0
    }, {
      "id": 196,
      "count": 0
    }, {
      "id": 197,
      "count": 0
    }, {
      "id": 194,
      "count": 0
    }, {
      "id": 195,
      "count": 0
    }, {
      "id": 385,
      "count": 0
    }, {
      "id": 386,
      "count": 0
    }, {
      "id": 387,
      "count": 0
    }, {
      "id": 388,
      "count": 0
    }, {
      "id": 389,
      "count": 0
    }, {
      "id": 390,
      "count": 0
    }, {
      "id": 24,
      "count": 0
    }, {
      "id": 28,
      "count": 0
    }, {
      "id": 805,
      "count": 0
    }, {
      "id": 298,
      "count": 0
    }, {
      "id": 131,
      "count": 0
    }, {
      "id": 806,
      "count": 0
    }, {
      "id": 815,
      "count": 0
    }, {
      "id": 816,
      "count": 0
    }, {
      "id": 130,
      "count": 0
    }, {
      "id": 301,
      "count": 0
    }, {
      "id": 1089,
      "count": 0
    }, {
      "id": 1090,
      "count": 0
    }, {
      "id": 1091,
      "count": 0
    }, {
      "id": 1092,
      "count": 0
    }, {
      "id": 1109,
      "count": 0
    }, {
      "id": 1110,
      "count": 0
    }, {
      "id": 1111,
      "count": 0
    }, {
      "id": 1112,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 204,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 122,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 271,
      "chance": 0.05
    }, {
      "id": 432,
      "chance": 0.0015
    }, {
      "id": 442,
      "chance": 0.0025
    }, {
      "id": 455,
      "chance": 0.0025
    }, {
      "id": 457,
      "chance": 0.0025
    }, {
      "id": 1001,
      "chance": 0.0025
    }, {
      "id": 481,
      "chance": 0.0015
    }, {
      "id": 416,
      "chance": 0.03
    }],
    "combat_level": 98
  },
  "name": "Enchanter",
  "img": {
    "hash": "0 0 90 54 0 1 0 68 63 46 9 2"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 122,
    "busy": false,
    "magics": [{
      "id": 7
    }],
    "magic": 75,
    "total_defense": 90,
    "total_strength": 1,
    "total_accuracy": 180,
    "magic_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 205,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Blacksmith",
  "img": {
    "hash": "18 0 87 57 72 0 0 0 137 51 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 2,
      "spawn": true
    }, {
      "id": 23,
      "count": 2,
      "spawn": true
    }, {
      "id": 31,
      "count": 25,
      "spawn": true
    }, {
      "id": 186,
      "count": 0
    }, {
      "id": 50,
      "count": 0
    }, {
      "id": 173,
      "count": 0
    }, {
      "id": 177,
      "count": 0
    }, {
      "id": 25,
      "count": 5,
      "spawn": true
    }, {
      "id": 2,
      "count": 5,
      "spawn": true
    }, {
      "id": 52,
      "count": 0
    }, {
      "id": 58,
      "count": 5,
      "spawn": true
    }, {
      "id": 53,
      "count": 5,
      "spawn": true
    }, {
      "id": 51,
      "count": 5,
      "spawn": true
    }, {
      "id": 61,
      "count": 0
    }, {
      "id": 65,
      "count": 0
    }, {
      "id": 66,
      "count": 0
    }, {
      "id": 474,
      "count": 0
    }, {
      "id": 44,
      "count": 0
    }, {
      "id": 18,
      "count": 0
    }, {
      "id": 54,
      "count": 5,
      "spawn": true
    }, {
      "id": 55,
      "count": 5,
      "spawn": true
    }, {
      "id": 56,
      "count": 5,
      "spawn": true
    }, {
      "id": 57,
      "count": 0
    }, {
      "id": 59,
      "count": 0
    }, {
      "id": 60,
      "count": 0
    }, {
      "id": 62,
      "count": 0
    }, {
      "id": 67,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 206,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Alchemist",
  "img": {
    "hash": "18 0 64 38 72 1 0 0 166 0 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1016,
      "count": 10,
      "spawn": true
    }, {
      "id": 205,
      "count": 0
    }, {
      "id": 207,
      "count": 10,
      "spawn": true
    }, {
      "id": 212,
      "count": 0
    }, {
      "id": 259,
      "count": 0
    }, {
      "id": 276,
      "count": 0
    }, {
      "id": 369,
      "count": 0
    }, {
      "id": 247,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 207,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Jeweler",
  "img": {
    "hash": "18 0 46 28 72 0 1 33 0 17 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 297,
      "count": 5,
      "spawn": true
    }, {
      "id": 582,
      "count": 10,
      "spawn": true
    }, {
      "id": 30,
      "count": 30,
      "spawn": true
    }, {
      "id": 484,
      "count": 0
    }, {
      "id": 485,
      "count": 0
    }, {
      "id": 200,
      "count": 0
    }, {
      "id": 201,
      "count": 0
    }, {
      "id": 198,
      "count": 0
    }, {
      "id": 199,
      "count": 0
    }, {
      "id": 196,
      "count": 0
    }, {
      "id": 197,
      "count": 0
    }, {
      "id": 194,
      "count": 0
    }, {
      "id": 195,
      "count": 0
    }, {
      "id": 385,
      "count": 0
    }, {
      "id": 386,
      "count": 0
    }, {
      "id": 387,
      "count": 0
    }, {
      "id": 388,
      "count": 0
    }, {
      "id": 389,
      "count": 0
    }, {
      "id": 390,
      "count": 0
    }, {
      "id": 487,
      "count": 0
    }, {
      "id": 488,
      "count": 0
    }, {
      "id": 807,
      "count": 0
    }, {
      "id": 808,
      "count": 0
    }, {
      "id": 809,
      "count": 0
    }, {
      "id": 810,
      "count": 0
    }, {
      "id": 486,
      "count": 0
    }, {
      "id": 818,
      "count": 0
    }, {
      "id": 819,
      "count": 0
    }, {
      "id": 820,
      "count": 0
    }, {
      "id": 821,
      "count": 0
    }, {
      "id": 489,
      "count": 0
    }, {
      "id": 1093,
      "count": 0
    }, {
      "id": 1094,
      "count": 0
    }, {
      "id": 1095,
      "count": 0
    }, {
      "id": 1096,
      "count": 0
    }, {
      "id": 1097,
      "count": 0
    }, {
      "id": 1113,
      "count": 0
    }, {
      "id": 1114,
      "count": 0
    }, {
      "id": 1115,
      "count": 0
    }, {
      "id": 1116,
      "count": 0
    }, {
      "id": 1117,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 208,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Potion Master",
  "img": {
    "hash": "18 0 60 34 72 0 0 0 0 54 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 315,
      "count": 0
    }, {
      "id": 316,
      "count": 0
    }, {
      "id": 317,
      "count": 0
    }, {
      "id": 318,
      "count": 0
    }, {
      "id": 319,
      "count": 0
    }, {
      "id": 320,
      "count": 0
    }, {
      "id": 321,
      "count": 0
    }, {
      "id": 322,
      "count": 0
    }, {
      "id": 401,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 209,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Shopkeeper",
  "img": {
    "hash": "18 0 15 28 72 0 0 0 0 39 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 5,
      "count": 2,
      "spawn": true
    }, {
      "id": 21,
      "count": 2,
      "spawn": true
    }, {
      "id": 286,
      "count": 2,
      "spawn": true
    }, {
      "id": 612,
      "count": 0
    }, {
      "id": 46,
      "count": 0
    }, {
      "id": 32,
      "count": 0
    }, {
      "id": 33,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 210,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Rakblood Blacksmith",
  "img": {
    "hash": "18 0 92 28 72 0 0 0 113 51 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 2,
      "spawn": true
    }, {
      "id": 23,
      "count": 2,
      "spawn": true
    }, {
      "id": 31,
      "count": 30,
      "spawn": true
    }, {
      "id": 186,
      "count": 0
    }, {
      "id": 291,
      "count": 0
    }, {
      "id": 173,
      "count": 0
    }, {
      "id": 177,
      "count": 0
    }, {
      "id": 188,
      "count": 5,
      "spawn": true
    }, {
      "id": 26,
      "count": 5,
      "spawn": true
    }, {
      "id": 191,
      "count": 5,
      "spawn": true
    }, {
      "id": 339,
      "count": 0
    }, {
      "id": 497,
      "count": 5,
      "spawn": true
    }, {
      "id": 166,
      "count": 5,
      "spawn": true
    }, {
      "id": 189,
      "count": 0
    }, {
      "id": 193,
      "count": 0
    }, {
      "id": 190,
      "count": 0
    }, {
      "id": 475,
      "count": 0
    }, {
      "id": 139,
      "count": 0
    }, {
      "id": 142,
      "count": 5,
      "spawn": true
    }, {
      "id": 143,
      "count": 5,
      "spawn": true
    }, {
      "id": 141,
      "count": 5,
      "spawn": true
    }, {
      "id": 140,
      "count": 0
    }, {
      "id": 144,
      "count": 0
    }, {
      "id": 145,
      "count": 0
    }, {
      "id": 146,
      "count": 0
    }, {
      "id": 147,
      "count": 0
    }, {
      "id": 148,
      "count": 0
    }, {
      "id": 149,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 211,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Alchemist",
  "img": {
    "hash": "18 0 64 38 72 1 0 0 61 0 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1016,
      "count": 10,
      "spawn": true
    }, {
      "id": 260,
      "count": 0
    }, {
      "id": 206,
      "count": 0
    }, {
      "id": 233,
      "count": 0
    }, {
      "id": 261,
      "count": 0
    }, {
      "id": 269,
      "count": 0
    }, {
      "id": 275,
      "count": 0
    }, {
      "id": 1433,
      "count": 0
    }, {
      "id": 1434,
      "count": 0
    }, {
      "id": 1435,
      "count": 0
    }, {
      "id": 246,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 212,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Weapon Merchant",
  "img": {
    "hash": "18 0 81 52 72 0 0 0 122 42 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 511,
      "count": 0
    }, {
      "id": 512,
      "count": 0
    }, {
      "id": 513,
      "count": 0
    }, {
      "id": 508,
      "count": 0
    }, {
      "id": 514,
      "count": 0
    }, {
      "id": 515,
      "count": 0
    }, {
      "id": 516,
      "count": 0
    }, {
      "id": 517,
      "count": 0
    }, {
      "id": 518,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 213,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Armor Merchant",
  "img": {
    "hash": "18 0 92 50 72 0 1 41 0 39 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 556,
      "count": 0
    }, {
      "id": 561,
      "count": 0
    }, {
      "id": 563,
      "count": 0
    }, {
      "id": 573,
      "count": 0
    }, {
      "id": 574,
      "count": 0
    }, {
      "id": 559,
      "count": 0
    }, {
      "id": 162,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 214,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Lumberjack",
  "img": {
    "hash": "18 0 87 38 72 2 0 0 35 17 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 296,
      "count": 0
    }, {
      "id": 594,
      "count": 0
    }, {
      "id": 596,
      "count": 0
    }, {
      "id": 597,
      "count": 0
    }, {
      "id": 1873,
      "count": 5,
      "spawn": true
    }, {
      "id": 22,
      "count": 5,
      "spawn": true
    }, {
      "id": 152,
      "count": 5,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 215,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Pet Trader",
  "img": {
    "hash": "18 0 87 52 72 0 0 0 0 42 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 669,
      "count": 0
    }, {
      "id": 671,
      "count": 0
    }, {
      "id": 672,
      "count": 0
    }, {
      "id": 673,
      "count": 0
    }, {
      "id": 698,
      "count": 0
    }, {
      "id": 699,
      "count": 0
    }, {
      "id": 702,
      "count": 0
    }, {
      "id": 703,
      "count": 0
    }, {
      "id": 704,
      "count": 0
    }, {
      "id": 705,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 216,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Shopkeeper",
  "img": {
    "hash": "18 0 90 54 72 0 0 0 0 44 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 5,
      "count": 2,
      "spawn": true
    }, {
      "id": 21,
      "count": 2,
      "spawn": true
    }, {
      "id": 612,
      "count": 0
    }, {
      "id": 46,
      "count": 0
    }, {
      "id": 493,
      "count": 20,
      "spawn": true
    }, {
      "id": 491,
      "count": 20,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 217,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Furniture Master",
  "img": {
    "hash": "18 0 60 34 72 2 0 0 47 44 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 730,
      "count": 0
    }, {
      "id": 731,
      "count": 0
    }, {
      "id": 732,
      "count": 0
    }, {
      "id": 825,
      "count": 0
    }, {
      "id": 830,
      "count": 0
    }, {
      "id": 733,
      "count": 0
    }, {
      "id": 739,
      "count": 0
    }, {
      "id": 745,
      "count": 0
    }, {
      "id": 768,
      "count": 0
    }, {
      "id": 769,
      "count": 0
    }, {
      "id": 734,
      "count": 0
    }, {
      "id": 740,
      "count": 0
    }, {
      "id": 746,
      "count": 0
    }, {
      "id": 824,
      "count": 0
    }, {
      "id": 829,
      "count": 0
    }, {
      "id": 735,
      "count": 0
    }, {
      "id": 741,
      "count": 0
    }, {
      "id": 747,
      "count": 0
    }, {
      "id": 826,
      "count": 0
    }, {
      "id": 831,
      "count": 0
    }, {
      "id": 736,
      "count": 0
    }, {
      "id": 742,
      "count": 0
    }, {
      "id": 748,
      "count": 0
    }, {
      "id": 827,
      "count": 0
    }, {
      "id": 832,
      "count": 0
    }, {
      "id": 737,
      "count": 0
    }, {
      "id": 743,
      "count": 0
    }, {
      "id": 749,
      "count": 0
    }, {
      "id": 828,
      "count": 0
    }, {
      "id": 833,
      "count": 0
    }, {
      "id": 738,
      "count": 0
    }, {
      "id": 744,
      "count": 0
    }, {
      "id": 750,
      "count": 0
    }, {
      "id": 853,
      "count": 0
    }, {
      "id": 834,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 218,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Walco Alchemist",
  "img": {
    "hash": "18 0 64 38 72 1 1 33 61 42 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1016,
      "count": 10,
      "spawn": true
    }, {
      "id": 285,
      "count": 0
    }, {
      "id": 221,
      "count": 0
    }, {
      "id": 284,
      "count": 0
    }, {
      "id": 222,
      "count": 0
    }, {
      "id": 267,
      "count": 0
    }, {
      "id": 229,
      "count": 0
    }, {
      "id": 248,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 219,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Walco Armor Merchant",
  "img": {
    "hash": "18 0 46 30 72 0 0 0 0 17 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 556,
      "count": 0
    }, {
      "id": 192,
      "count": 0
    }, {
      "id": 563,
      "count": 0
    }, {
      "id": 575,
      "count": 0
    }, {
      "id": 165,
      "count": 0
    }, {
      "id": 168,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 220,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Walco Weapon Merchant",
  "img": {
    "hash": "18 0 90 50 72 2 1 37 125 39 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 522,
      "count": 0
    }, {
      "id": 523,
      "count": 0
    }, {
      "id": 524,
      "count": 0
    }, {
      "id": 525,
      "count": 0
    }, {
      "id": 526,
      "count": 0
    }, {
      "id": 527,
      "count": 0
    }, {
      "id": 528,
      "count": 0
    }, {
      "id": 529,
      "count": 0
    }, {
      "id": 530,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 221,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Walco Lumberjack",
  "img": {
    "hash": "18 0 92 52 72 2 1 36 47 39 6 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 595,
      "count": 0
    }, {
      "id": 152,
      "count": 5,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 222,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Whiland Weapon Merchant",
  "img": {
    "hash": "18 0 87 16 72 2 1 39 111 17 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 535,
      "count": 0
    }, {
      "id": 536,
      "count": 0
    }, {
      "id": 538,
      "count": 0
    }, {
      "id": 520,
      "count": 0
    }, {
      "id": 519,
      "count": 0
    }, {
      "id": 521,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 223,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Whiland Armor Merchant",
  "img": {
    "hash": "18 0 81 52 72 0 1 37 0 51 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 132,
      "count": 0
    }, {
      "id": 341,
      "count": 0
    }, {
      "id": 565,
      "count": 0
    }, {
      "id": 589,
      "count": 0
    }, {
      "id": 590,
      "count": 0
    }, {
      "id": 591,
      "count": 0
    }, {
      "id": 592,
      "count": 0
    }, {
      "id": 656,
      "count": 0
    }, {
      "id": 170,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 224,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Whiland Shopkeeper",
  "img": {
    "hash": "18 0 81 52 72 0 1 33 0 39 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 5,
      "count": 2,
      "spawn": true
    }, {
      "id": 21,
      "count": 2,
      "spawn": true
    }, {
      "id": 47,
      "count": 0
    }, {
      "id": 20,
      "count": 0
    }, {
      "id": 260,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 225,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Clouds Armor Merchant",
  "img": {
    "hash": "18 0 82 50 72 0 0 0 0 39 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 172,
      "count": 0
    }, {
      "id": 180,
      "count": 0
    }, {
      "id": 181,
      "count": 0
    }, {
      "id": 182,
      "count": 0
    }, {
      "id": 343,
      "count": 0
    }, {
      "id": 472,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 226,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Clouds Pet Trader",
  "img": {
    "hash": "18 0 15 16 72 0 0 0 188 17 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 677,
      "count": 0
    }, {
      "id": 678,
      "count": 0
    }, {
      "id": 679,
      "count": 0
    }, {
      "id": 680,
      "count": 0
    }, {
      "id": 681,
      "count": 0
    }, {
      "id": 886,
      "count": 0
    }, {
      "id": 695,
      "count": 0
    }, {
      "id": 696,
      "count": 0
    }, {
      "id": 697,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 227,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Heaven Weapon Merchant",
  "img": {
    "hash": "18 0 79 50 72 2 1 36 133 39 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 532,
      "count": 0
    }, {
      "id": 533,
      "count": 0
    }, {
      "id": 534,
      "count": 0
    }, {
      "id": 517,
      "count": 0
    }, {
      "id": 619,
      "count": 0
    }, {
      "id": 621,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 228,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Heaven Jeweler",
  "img": {
    "hash": "18 0 76 50 72 2 1 33 111 17 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 297,
      "count": 5,
      "spawn": true
    }, {
      "id": 582,
      "count": 10,
      "spawn": true
    }, {
      "id": 30,
      "count": 30,
      "spawn": true
    }, {
      "id": 372,
      "count": 0
    }, {
      "id": 373,
      "count": 0
    }, {
      "id": 200,
      "count": 0
    }, {
      "id": 201,
      "count": 0
    }, {
      "id": 198,
      "count": 0
    }, {
      "id": 199,
      "count": 0
    }, {
      "id": 196,
      "count": 0
    }, {
      "id": 197,
      "count": 0
    }, {
      "id": 194,
      "count": 0
    }, {
      "id": 195,
      "count": 0
    }, {
      "id": 385,
      "count": 0
    }, {
      "id": 386,
      "count": 0
    }, {
      "id": 387,
      "count": 0
    }, {
      "id": 388,
      "count": 0
    }, {
      "id": 389,
      "count": 0
    }, {
      "id": 390,
      "count": 0
    }, {
      "id": 374,
      "count": 0
    }, {
      "id": 379,
      "count": 0
    }, {
      "id": 375,
      "count": 0
    }, {
      "id": 376,
      "count": 0
    }, {
      "id": 377,
      "count": 0
    }, {
      "id": 378,
      "count": 0
    }, {
      "id": 391,
      "count": 0
    }, {
      "id": 812,
      "count": 0
    }, {
      "id": 380,
      "count": 0
    }, {
      "id": 382,
      "count": 0
    }, {
      "id": 381,
      "count": 0
    }, {
      "id": 395,
      "count": 0
    }, {
      "id": 822,
      "count": 0
    }, {
      "id": 823,
      "count": 0
    }, {
      "id": 392,
      "count": 0
    }, {
      "id": 1098,
      "count": 0
    }, {
      "id": 1099,
      "count": 0
    }, {
      "id": 1100,
      "count": 0
    }, {
      "id": 1101,
      "count": 0
    }, {
      "id": 1102,
      "count": 0
    }, {
      "id": 1103,
      "count": 0
    }, {
      "id": 1104,
      "count": 0
    }, {
      "id": 1118,
      "count": 0
    }, {
      "id": 1119,
      "count": 0
    }, {
      "id": 1120,
      "count": 0
    }, {
      "id": 1121,
      "count": 0
    }, {
      "id": 1122,
      "count": 0
    }, {
      "id": 1123,
      "count": 0
    }, {
      "id": 1124,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 229,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Heaven Potion Master",
  "img": {
    "hash": "18 0 79 52 72 1 0 0 166 44 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 323,
      "count": 0
    }, {
      "id": 324,
      "count": 0
    }, {
      "id": 325,
      "count": 0
    }, {
      "id": 326,
      "count": 0
    }, {
      "id": 327,
      "count": 0
    }, {
      "id": 328,
      "count": 0
    }, {
      "id": 329,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 230,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Blood River Pet Trader",
  "img": {
    "hash": "18 0 33 50 72 0 0 0 0 32 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 682,
      "count": 0
    }, {
      "id": 683,
      "count": 0
    }, {
      "id": 684,
      "count": 0
    }, {
      "id": 685,
      "count": 0
    }, {
      "id": 686,
      "count": 0
    }, {
      "id": 687,
      "count": 0
    }, {
      "id": 692,
      "count": 0
    }, {
      "id": 693,
      "count": 0
    }, {
      "id": 694,
      "count": 0
    }, {
      "id": 711,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 231,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Blood River Shopkeeper",
  "img": {
    "hash": "18 0 0 36 72 0 0 0 0 39 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 366,
      "count": 10,
      "spawn": true
    }, {
      "id": 39,
      "count": 5,
      "spawn": true
    }, {
      "id": 661,
      "count": 0
    }, {
      "id": 659,
      "count": 0
    }, {
      "id": 281,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 232,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Hell Potion Master",
  "img": {
    "hash": "18 0 92 36 72 1 0 0 166 17 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 330,
      "count": 0
    }, {
      "id": 331,
      "count": 0
    }, {
      "id": 332,
      "count": 0
    }, {
      "id": 333,
      "count": 0
    }, {
      "id": 334,
      "count": 0
    }, {
      "id": 335,
      "count": 0
    }, {
      "id": 336,
      "count": 0
    }, {
      "id": 337,
      "count": 0
    }, {
      "id": 338,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 233,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Hell Blacksmith",
  "img": {
    "hash": "18 0 78 50 72 0 0 0 188 44 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 2,
      "spawn": true
    }, {
      "id": 23,
      "count": 2,
      "spawn": true
    }, {
      "id": 581,
      "count": 10,
      "spawn": true
    }, {
      "id": 657,
      "count": 0
    }, {
      "id": 658,
      "count": 0
    }, {
      "id": 174,
      "count": 0
    }, {
      "id": 178,
      "count": 0
    }, {
      "id": 666,
      "count": 0
    }, {
      "id": 668,
      "count": 0
    }, {
      "id": 618,
      "count": 0
    }, {
      "id": 616,
      "count": 0
    }, {
      "id": 620,
      "count": 0
    }, {
      "id": 622,
      "count": 0
    }, {
      "id": 624,
      "count": 0
    }, {
      "id": 159,
      "count": 0
    }, {
      "id": 477,
      "count": 0
    }, {
      "id": 344,
      "count": 0
    }, {
      "id": 500,
      "count": 0
    }, {
      "id": 664,
      "count": 0
    }, {
      "id": 665,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 234,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Hell Merchant",
  "img": {
    "hash": "18 0 62 36 72 2 1 33 111 32 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 566,
      "count": 0
    }, {
      "id": 583,
      "count": 0
    }, {
      "id": 584,
      "count": 0
    }, {
      "id": 585,
      "count": 0
    }, {
      "id": 499,
      "count": 0
    }, {
      "id": 647,
      "count": 0
    }, {
      "id": 652,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 235,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Hell Pet Trader",
  "img": {
    "hash": "18 0 62 36 72 0 0 0 0 17 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 700,
      "count": 0
    }, {
      "id": 701,
      "count": 0
    }, {
      "id": 688,
      "count": 0
    }, {
      "id": 689,
      "count": 0
    }, {
      "id": 690,
      "count": 0
    }, {
      "id": 691,
      "count": 0
    }, {
      "id": 888,
      "count": 0
    }, {
      "id": 889,
      "count": 0
    }, {
      "id": 890,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 236,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Shopkeeper",
  "img": {
    "hash": "6 0 47 52 9 1 0 0 60 0 0 7 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 463,
      "count": 0
    }, {
      "id": 465,
      "count": 0
    }, {
      "id": 151,
      "count": 0
    }, {
      "id": 363,
      "count": 0
    }, {
      "id": 160,
      "count": 0
    }, {
      "id": 158,
      "count": 0
    }, {
      "id": 157,
      "count": 0
    }, {
      "id": 489,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 237,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Tutorial Fishing Master",
  "img": {
    "hash": "18 0 44 26 72 2 0 0 80 0 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 7,
      "count": 5,
      "spawn": true
    }, {
      "id": 124,
      "count": 5,
      "spawn": true
    }, {
      "id": 68,
      "count": 0
    }, {
      "id": 8,
      "count": 10,
      "spawn": true
    }, {
      "id": 9,
      "count": 0
    }, {
      "id": 10,
      "count": 8,
      "spawn": true
    }, {
      "id": 11,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 238,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Weapon Merchant",
  "img": {
    "hash": "18 0 81 50 72 2 0 0 133 51 6 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 129,
      "count": 0
    }, {
      "id": 150,
      "count": 0
    }, {
      "id": 363,
      "count": 0
    }, {
      "id": 531,
      "count": 0
    }, {
      "id": 537,
      "count": 0
    }, {
      "id": 615,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 239,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Armor Merchant",
  "img": {
    "hash": "18 0 25 52 72 0 1 33 0 39 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 133,
      "count": 0
    }, {
      "id": 153,
      "count": 0
    }, {
      "id": 154,
      "count": 0
    }, {
      "id": 155,
      "count": 0
    }, {
      "id": 156,
      "count": 0
    }, {
      "id": 165,
      "count": 0
    }, {
      "id": 472,
      "count": 0
    }, {
      "id": 558,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 240,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Shopkeeper",
  "img": {
    "hash": "18 0 62 36 72 1 0 0 61 17 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 366,
      "count": 10,
      "spawn": true
    }, {
      "id": 39,
      "count": 5,
      "spawn": true
    }, {
      "id": 661,
      "count": 0
    }, {
      "id": 659,
      "count": 0
    }, {
      "id": 261,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 241,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Jeweler",
  "img": {
    "hash": "18 0 88 52 72 2 1 36 125 44 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 297,
      "count": 5,
      "spawn": true
    }, {
      "id": 582,
      "count": 10,
      "spawn": true
    }, {
      "id": 292,
      "count": 0
    }, {
      "id": 293,
      "count": 0
    }, {
      "id": 30,
      "count": 25,
      "spawn": true
    }, {
      "id": 184,
      "count": 0
    }, {
      "id": 202,
      "count": 0
    }, {
      "id": 200,
      "count": 0
    }, {
      "id": 201,
      "count": 0
    }, {
      "id": 198,
      "count": 0
    }, {
      "id": 199,
      "count": 0
    }, {
      "id": 196,
      "count": 0
    }, {
      "id": 197,
      "count": 0
    }, {
      "id": 194,
      "count": 0
    }, {
      "id": 195,
      "count": 0
    }, {
      "id": 385,
      "count": 0
    }, {
      "id": 386,
      "count": 0
    }, {
      "id": 387,
      "count": 0
    }, {
      "id": 388,
      "count": 0
    }, {
      "id": 389,
      "count": 0
    }, {
      "id": 390,
      "count": 0
    }, {
      "id": 24,
      "count": 0
    }, {
      "id": 28,
      "count": 0
    }, {
      "id": 805,
      "count": 0
    }, {
      "id": 298,
      "count": 0
    }, {
      "id": 131,
      "count": 0
    }, {
      "id": 806,
      "count": 0
    }, {
      "id": 815,
      "count": 0
    }, {
      "id": 816,
      "count": 0
    }, {
      "id": 130,
      "count": 0
    }, {
      "id": 301,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 242,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Farmer",
  "img": {
    "hash": "18 0 88 52 72 2 0 0 160 0 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 779,
      "count": 3,
      "spawn": true
    }, {
      "id": 767,
      "count": 10,
      "spawn": true
    }, {
      "id": 1875,
      "count": 10,
      "spawn": true
    }, {
      "id": 1876,
      "count": 0
    }, {
      "id": 1877,
      "count": 0
    }, {
      "id": 1878,
      "count": 0
    }, {
      "id": 778,
      "count": 40,
      "spawn": true
    }, {
      "id": 776,
      "count": 40,
      "spawn": true
    }, {
      "id": 794,
      "count": 40,
      "spawn": true
    }, {
      "id": 773,
      "count": 40,
      "spawn": true
    }, {
      "id": 787,
      "count": 40,
      "spawn": true
    }, {
      "id": 788,
      "count": 40,
      "spawn": true
    }, {
      "id": 789,
      "count": 40,
      "spawn": true
    }, {
      "id": 790,
      "count": 30,
      "spawn": true
    }, {
      "id": 780,
      "count": 0
    }, {
      "id": 781,
      "count": 0
    }, {
      "id": 782,
      "count": 0
    }, {
      "id": 783,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 243,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Wandering Farmer",
  "img": {
    "hash": "18 0 88 16 72 2 1 39 125 17 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 779,
      "count": 3,
      "spawn": true
    }, {
      "id": 767,
      "count": 10,
      "spawn": true
    }, {
      "id": 1876,
      "count": 0
    }, {
      "id": 1877,
      "count": 0
    }, {
      "id": 1878,
      "count": 0
    }, {
      "id": 774,
      "count": 40,
      "spawn": true
    }, {
      "id": 1035,
      "count": 40,
      "spawn": true
    }, {
      "id": 854,
      "count": 40,
      "spawn": true
    }, {
      "id": 775,
      "count": 40,
      "spawn": true
    }, {
      "id": 791,
      "count": 40,
      "spawn": true
    }, {
      "id": 792,
      "count": 40,
      "spawn": true
    }, {
      "id": 793,
      "count": 30,
      "spawn": true
    }, {
      "id": 1364,
      "count": 20,
      "spawn": true
    }, {
      "id": 1358,
      "count": 3,
      "spawn": true
    }, {
      "id": 1359,
      "count": 1,
      "spawn": true
    }, {
      "id": 784,
      "count": 0
    }, {
      "id": 785,
      "count": 0
    }, {
      "id": 786,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 244,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 220,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 101,
      "chance": 0.02
    }, {
      "id": 253,
      "chance": 0.03
    }, {
      "id": 616,
      "chance": 0.025
    }, {
      "id": 459,
      "chance": 0.005
    }, {
      "id": 153,
      "chance": 0.0025
    }, {
      "id": 155,
      "chance": 0.0025
    }, {
      "id": 1359,
      "chance": 0.005
    }, {
      "id": 399,
      "chance": 0.0015
    }, {
      "id": 267,
      "chance": 0.05
    }, {
      "id": 381,
      "chance": 0.0025
    }, {
      "id": 182,
      "chance": 0.0025
    }],
    "combat_level": 220
  },
  "name": "King Gilded Dragon",
  "img": {
    "sheet": "13",
    "x": 5,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 220,
    "busy": false,
    "total_defense": 200,
    "total_strength": 150,
    "total_accuracy": 310
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 245,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 911,
      "chance": 0.025
    }, {
      "id": 114,
      "chance": 0.05
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 160,
      "chance": 0.0015
    }, {
      "id": 821,
      "chance": 0.0025
    }, {
      "id": 866,
      "chance": 0.0025
    }],
    "combat_level": 194
  },
  "name": "Unicorn",
  "img": {
    "sheet": "38",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "total_defense": 200,
    "total_strength": 96,
    "total_accuracy": 300,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 246,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Whiland Blacksmith",
  "img": {
    "hash": "18 0 15 52 72 0 0 0 181 17 6 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 5,
      "spawn": true
    }, {
      "id": 23,
      "count": 5,
      "spawn": true
    }, {
      "id": 31,
      "count": 25,
      "spawn": true
    }, {
      "id": 50,
      "count": 0
    }, {
      "id": 254,
      "count": 0
    }, {
      "id": 173,
      "count": 0
    }, {
      "id": 177,
      "count": 0
    }, {
      "id": 932,
      "count": 5,
      "spawn": true
    }, {
      "id": 933,
      "count": 0
    }, {
      "id": 934,
      "count": 0
    }, {
      "id": 935,
      "count": 0
    }, {
      "id": 936,
      "count": 0
    }, {
      "id": 937,
      "count": 0
    }, {
      "id": 938,
      "count": 5,
      "spawn": true
    }, {
      "id": 939,
      "count": 0
    }, {
      "id": 940,
      "count": 0
    }, {
      "id": 941,
      "count": 0
    }, {
      "id": 942,
      "count": 0
    }, {
      "id": 943,
      "count": 0
    }, {
      "id": 944,
      "count": 0
    }, {
      "id": 945,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 247,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cupid",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 6
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 897,
      "count": 20,
      "spawn": true
    }, {
      "id": 899,
      "count": 20,
      "spawn": true
    }, {
      "id": 901,
      "count": 20,
      "spawn": true
    }, {
      "id": 902,
      "count": 20,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 248,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 99,
      "chance": 0.01
    }, {
      "id": 190,
      "chance": 0.0025
    }, {
      "id": 61,
      "chance": 0.0035
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 253,
      "chance": 0.01
    }],
    "combat_level": 130
  },
  "name": "Gilded Dragon",
  "img": {
    "sheet": "13",
    "x": 6,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 150,
    "total_strength": 90,
    "total_accuracy": 150,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 249,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 99,
      "chance": 0.01
    }, {
      "id": 190,
      "chance": 0.0025
    }, {
      "id": 61,
      "chance": 0.0035
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 165,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 115
  },
  "name": "Adult Black Dragon",
  "img": {
    "sheet": "13",
    "x": 4,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 120,
    "total_strength": 90,
    "total_accuracy": 120,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 250,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 102,
      "chance": 0.01
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 398,
      "chance": 0.0025
    }, {
      "id": 394,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 430,
      "chance": 0.0025
    }, {
      "id": 379,
      "chance": 0.0025
    }, {
      "id": 487,
      "chance": 0.0025
    }, {
      "id": 154,
      "chance": 0.0025
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 253,
      "chance": 0.01
    }],
    "combat_level": 170
  },
  "name": "Adult Gilded Dragon",
  "img": {
    "sheet": "13",
    "x": 6,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 150,
    "total_strength": 120,
    "total_accuracy": 250,
    "melee_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 251,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 116,
      "chance": 0.02
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 51,
      "chance": 0.004
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 50,
      "chance": 0.005
    }, {
      "id": 158,
      "chance": 0.0025
    }, {
      "id": 181,
      "chance": 0.0025
    }, {
      "id": 52,
      "chance": 0.003
    }, {
      "id": 618,
      "chance": 0.0025
    }, {
      "id": 1498,
      "chance": 0.0025
    }, {
      "id": 468,
      "chance": 0.0025
    }, {
      "id": 257,
      "chance": 0.0025
    }, {
      "id": 866,
      "chance": 0.0025
    }, {
      "id": 1075,
      "chance": 0.0025
    }, {
      "id": 613,
      "chance": 0.0025
    }, {
      "id": 500,
      "chance": 0.0025
    }],
    "combat_level": 240
  },
  "name": "Earth Dragon",
  "img": {
    "sheet": "13",
    "x": 3,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 300,
    "total_strength": 110,
    "total_accuracy": 300,
    "melee_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 252,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 120,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 613,
      "chance": 0.0025
    }, {
      "id": 5,
      "chance": 0.0025
    }, {
      "id": 39,
      "chance": 0.0025
    }, {
      "id": 48,
      "chance": 0.0025
    }, {
      "id": 138,
      "chance": 0.0025
    }, {
      "id": 143,
      "chance": 0.0025
    }, {
      "id": 622,
      "chance": 0.0025
    }, {
      "id": 395,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 477,
      "chance": 0.0025
    }, {
      "id": 475,
      "chance": 0.005
    }, {
      "id": 189,
      "chance": 0.005
    }, {
      "id": 2,
      "chance": 0.0025
    }, {
      "id": 501,
      "chance": 0.0025
    }, {
      "id": 469,
      "chance": 0.0025
    }, {
      "id": 384,
      "chance": 0.01
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 250
  },
  "name": "Metal Dragon",
  "img": {
    "sheet": "13",
    "x": 1,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 320,
    "total_strength": 110,
    "total_accuracy": 320,
    "melee_block": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 253,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 260,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 120,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 180,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 440,
      "chance": 0.0025
    }, {
      "id": 668,
      "chance": 0.0025
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 159,
      "chance": 0.0025
    }, {
      "id": 664,
      "chance": 0.0025
    }, {
      "id": 665,
      "chance": 0.0025
    }, {
      "id": 177,
      "chance": 0.005
    }],
    "combat_level": 257
  },
  "name": "Fire Dragon",
  "img": {
    "sheet": "13",
    "x": 5,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 260,
    "busy": false,
    "total_defense": 320,
    "total_strength": 130,
    "total_accuracy": 320,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 254,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 300,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 122,
      "chance": 0.04
    }, {
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 666,
      "chance": 0.0025
    }, {
      "id": 380,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 51,
      "chance": 0.0025
    }, {
      "id": 158,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 193,
      "chance": 0.005
    }, {
      "id": 66,
      "chance": 0.005
    }, {
      "id": 2,
      "chance": 0.004
    }, {
      "id": 1498,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 50,
      "chance": 0.0025
    }, {
      "id": 821,
      "chance": 0.0025
    }, {
      "id": 944,
      "chance": 0.0025
    }, {
      "id": 470,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }],
    "combat_level": 285
  },
  "name": "Void Dragon",
  "img": {
    "sheet": "13",
    "x": 5,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 300,
    "busy": false,
    "total_defense": 350,
    "total_strength": 140,
    "total_accuracy": 350,
    "melee_block": 25,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 255,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 4240,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 1429,
      "chance": 0.05
    }, {
      "id": 863,
      "chance": 0.03
    }, {
      "id": 1077,
      "chance": 0.03
    }, {
      "id": 859,
      "chance": 0.03
    }, {
      "id": 175,
      "chance": 0.05
    }, {
      "id": 156,
      "chance": 0.04
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.05
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 436,
      "chance": 0.04
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 1641,
      "chance": 0.015
    }, {
      "id": 1659,
      "chance": 0.015
    }, {
      "id": 155,
      "chance": 0.04
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 158,
      "chance": 0.03
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 163,
      "chance": 0.03
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 856,
      "chance": 0.04
    }, {
      "id": 864,
      "chance": 0.04
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 1306,
      "chance": 0.05
    }, {
      "id": 391,
      "chance": 0.02
    }, {
      "id": 1354,
      "chance": 0.02
    }, {
      "id": 666,
      "chance": 0.05
    }, {
      "id": 934,
      "chance": 0.05
    }, {
      "id": 905,
      "chance": 0.04
    }, {
      "id": 820,
      "chance": 0.05
    }, {
      "id": 593,
      "chance": 0.04
    }, {
      "id": 1692,
      "chance": 0.02
    }, {
      "id": 477,
      "chance": 0.05
    }],
    "combat_level": 1300
  },
  "name": "[BOSS] Pharaoh",
  "img": {
    "sheet": "37",
    "x": 11,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 4240,
    "busy": false,
    "total_defense": 400,
    "total_strength": 160,
    "total_accuracy": 400
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 256,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 7350,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 1430,
      "chance": 0.05
    }, {
      "id": 465,
      "chance": 0.04
    }, {
      "id": 620,
      "chance": 0.04
    }, {
      "id": 1684,
      "chance": 0.04
    }, {
      "id": 867,
      "chance": 0.03
    }, {
      "id": 1077,
      "chance": 0.03
    }, {
      "id": 175,
      "chance": 0.05
    }, {
      "id": 807,
      "chance": 0.04
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.05
    }, {
      "id": 809,
      "chance": 0.04
    }, {
      "id": 1306,
      "chance": 0.05
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 1641,
      "chance": 0.015
    }, {
      "id": 1659,
      "chance": 0.015
    }, {
      "id": 669,
      "chance": 0.03
    }, {
      "id": 1269,
      "chance": 0.04
    }, {
      "id": 813,
      "chance": 0.04
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 1284,
      "chance": 0.04
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 706,
      "chance": 0.03
    }, {
      "id": 372,
      "chance": 0.05
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 374,
      "chance": 0.05
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 426,
      "chance": 0.04
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 339,
      "chance": 0.06
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 340,
      "chance": 0.04
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 665,
      "chance": 0.04
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 1354,
      "chance": 0.02
    }, {
      "id": 146,
      "chance": 0.05
    }, {
      "id": 1692,
      "chance": 0.02
    }, {
      "id": 450,
      "chance": 0.05
    }, {
      "id": 653,
      "chance": 0.04
    }, {
      "id": 593,
      "chance": 0.04
    }, {
      "id": 378,
      "chance": 0.05
    }, {
      "id": 477,
      "chance": 0.05
    }],
    "combat_level": 2072
  },
  "name": "[BOSS] Chaotic Dragon",
  "img": {
    "sheet": "49",
    "x": 2,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 7350,
    "busy": false,
    "magics": [{
      "id": 21
    }],
    "magic": 450,
    "total_defense": 440,
    "total_strength": 1,
    "total_accuracy": 500,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 257,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 10920,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 1431,
      "chance": 0.06
    }, {
      "id": 171,
      "chance": 0.03
    }, {
      "id": 347,
      "chance": 0.04
    }, {
      "id": 1354,
      "chance": 0.02
    }, {
      "id": 175,
      "chance": 0.06
    }, {
      "id": 179,
      "chance": 0.06
    }, {
      "id": 1626,
      "chance": 0.01
    }, {
      "id": 1602,
      "chance": 0.03
    }, {
      "id": 1606,
      "chance": 0.03
    }, {
      "id": 1610,
      "chance": 0.03
    }, {
      "id": 1614,
      "chance": 0.03
    }, {
      "id": 964,
      "chance": 0.03
    }, {
      "id": 1455,
      "chance": 0.03
    }, {
      "id": 1467,
      "chance": 0.03
    }, {
      "id": 1487,
      "chance": 0.03
    }, {
      "id": 1502,
      "chance": 0.03
    }, {
      "id": 1639,
      "chance": 0.03
    }, {
      "id": 1128,
      "chance": 0.06
    }, {
      "id": 1306,
      "chance": 0.06
    }, {
      "id": 947,
      "chance": 0.1
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 593,
      "chance": 0.04
    }, {
      "id": 501,
      "chance": 0.05
    }, {
      "id": 1682,
      "chance": 0.05
    }, {
      "id": 262,
      "chance": 0.1
    }, {
      "id": 478,
      "chance": 0.05
    }, {
      "id": 1340,
      "chance": 0.005
    }],
    "combat_level": 3000
  },
  "name": "[BOSS] Nephilim Warrior",
  "img": {
    "sheet": "49",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 10920,
    "busy": false,
    "total_defense": 450,
    "total_strength": 180,
    "total_accuracy": 450
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 258,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 150,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 219,
      "chance": 0.0025
    }, {
      "id": 950,
      "chance": 0.0025
    }, {
      "id": 340,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 379,
      "chance": 0.0025
    }, {
      "id": 138,
      "chance": 0.0025
    }, {
      "id": 104,
      "chance": 0.01
    }],
    "combat_level": 156
  },
  "name": "Thunder Bird",
  "img": {
    "sheet": "17",
    "x": 7,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 150,
    "busy": false,
    "magics": [{
      "id": 12
    }],
    "magic": 50,
    "total_defense": 200,
    "total_strength": 1,
    "total_accuracy": 275,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 259,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 110,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 949,
      "chance": 0.0025
    }, {
      "id": 858,
      "chance": 0.0025
    }, {
      "id": 1075,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 268,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 285,
      "chance": 0.03
    }],
    "combat_level": 110
  },
  "name": "Ice Wyvern",
  "img": {
    "sheet": "15",
    "x": 5,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 110,
    "busy": false,
    "total_defense": 100,
    "total_strength": 80,
    "total_accuracy": 150
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 260,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Sailor",
  "img": {
    "hash": "18 0 88 52 72 0 0 0 0 0 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 948,
      "count": 50,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 261,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Road Sign",
  "img": {
    "sheet": "1",
    "x": 8,
    "y": 13
  },
  "type": 4,
  "activities": ["Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 262,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Road Sign",
  "img": {
    "sheet": "1",
    "x": 8,
    "y": 13
  },
  "type": 4,
  "activities": ["Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 263,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Road Sign",
  "img": {
    "sheet": "1",
    "x": 8,
    "y": 13
  },
  "type": 4,
  "activities": ["Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 264,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Road Sign",
  "img": {
    "sheet": "1",
    "x": 8,
    "y": 13
  },
  "type": 4,
  "activities": ["Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 265,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Magic Crafter",
  "img": {
    "hash": "18 0 32 33 72 2 0 49 53 15 12 5"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 265,
      "count": 20,
      "spawn": true
    }, {
      "id": 988,
      "count": 10,
      "spawn": true
    }, {
      "id": 1084,
      "count": 10,
      "spawn": true
    }, {
      "id": 989,
      "count": 10,
      "spawn": true
    }, {
      "id": 991,
      "count": 10,
      "spawn": true
    }, {
      "id": 1159,
      "count": 10,
      "spawn": true
    }, {
      "id": 990,
      "count": 30,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 266,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Magic Crafter",
  "img": {
    "hash": "18 0 66 40 72 0 0 0 0 51 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 266,
      "count": 20,
      "spawn": true
    }, {
      "id": 988,
      "count": 10,
      "spawn": true
    }, {
      "id": 1084,
      "count": 10,
      "spawn": true
    }, {
      "id": 989,
      "count": 10,
      "spawn": true
    }, {
      "id": 991,
      "count": 10,
      "spawn": true
    }, {
      "id": 1159,
      "count": 10,
      "spawn": true
    }, {
      "id": 990,
      "count": 30,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 267,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Blood River Magic Crafter",
  "img": {
    "hash": "18 0 79 50 72 1 0 0 166 51 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1012,
      "count": 0
    }, {
      "id": 988,
      "count": 10,
      "spawn": true
    }, {
      "id": 1084,
      "count": 10,
      "spawn": true
    }, {
      "id": 989,
      "count": 10,
      "spawn": true
    }, {
      "id": 991,
      "count": 10,
      "spawn": true
    }, {
      "id": 1159,
      "count": 10,
      "spawn": true
    }, {
      "id": 990,
      "count": 30,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 268,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Heaven Magic Crafter",
  "img": {
    "hash": "18 0 79 54 72 1 0 54 166 51 0 4"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1013,
      "count": 0
    }, {
      "id": 1014,
      "count": 0
    }, {
      "id": 988,
      "count": 10,
      "spawn": true
    }, {
      "id": 1084,
      "count": 10,
      "spawn": true
    }, {
      "id": 989,
      "count": 10,
      "spawn": true
    }, {
      "id": 991,
      "count": 10,
      "spawn": true
    }, {
      "id": 1159,
      "count": 10,
      "spawn": true
    }, {
      "id": 990,
      "count": 30,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 269,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 172,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 369,
      "chance": 0.0025
    }, {
      "id": 950,
      "chance": 0.0025
    }, {
      "id": 340,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 379,
      "chance": 0.0025
    }, {
      "id": 661,
      "chance": 0.0025
    }, {
      "id": 138,
      "chance": 0.0025
    }, {
      "id": 104,
      "chance": 0.01
    }],
    "combat_level": 175
  },
  "name": "Thunder Angel",
  "img": {
    "hash": "70 0 112 84 28 0 0 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 172,
    "busy": false,
    "magics": [{
      "id": 12
    }],
    "magic": 65,
    "total_defense": 230,
    "total_strength": 1,
    "total_accuracy": 300,
    "magic_block": 20,
    "melee_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 270,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Quest Instructor",
  "img": {
    "hash": "18 0 79 60 72 0 0 0 0 32 12 6"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 271,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 40,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 976,
      "chance": 0.0025
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 3,
      "chance": 0.05
    }, {
      "id": 43,
      "chance": 0.025
    }, {
      "id": 799,
      "chance": 0.025
    }],
    "combat_level": 30
  },
  "name": "Novice Knight",
  "img": {
    "hash": "18 0 27 10 3 2 1 22 140 48 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 40,
    "busy": false,
    "total_defense": 30,
    "total_strength": 20,
    "total_accuracy": 30,
    "melee_block": 5
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 272,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 65,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 426,
      "chance": 0.0025
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 474,
      "chance": 0.0025
    }, {
      "id": 65,
      "chance": 0.0025
    }, {
      "id": 78,
      "chance": 0.02
    }, {
      "id": 438,
      "chance": 0.0015
    }],
    "combat_level": 53
  },
  "name": "Knight",
  "img": {
    "hash": "18 0 44 26 3 3 1 22 101 13 0 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 65,
    "busy": false,
    "total_defense": 60,
    "total_strength": 30,
    "total_accuracy": 60,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 273,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 764,
      "chance": 0.0015
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 442,
      "chance": 0.0025
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 301,
      "chance": 0.01
    }],
    "combat_level": 86
  },
  "name": "Baron",
  "img": {
    "hash": "18 0 68 46 13 1 0 54 69 22 0 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 100,
    "total_strength": 45,
    "total_accuracy": 100,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 274,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 150,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 97,
      "chance": 0.02
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 1006,
      "chance": 0.0025
    }, {
      "id": 764,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 862,
      "chance": 0.0025
    }, {
      "id": 259,
      "chance": 0.01
    }, {
      "id": 268,
      "chance": 0.05
    }, {
      "id": 155,
      "chance": 0.0025
    }],
    "combat_level": 127
  },
  "name": "Earl",
  "img": {
    "hash": "18 0 88 52 30 2 1 33 125 17 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 150,
    "busy": false,
    "total_defense": 150,
    "total_strength": 60,
    "total_accuracy": 150,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 275,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 190,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 89,
      "chance": 0.02
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 298,
      "chance": 0.05
    }, {
      "id": 299,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.0025
    }, {
      "id": 180,
      "chance": 0.0025
    }, {
      "id": 217,
      "chance": 0.05
    }, {
      "id": 177,
      "chance": 0.005
    }, {
      "id": 363,
      "chance": 0.0025
    }],
    "combat_level": 160
  },
  "name": "Marquis",
  "img": {
    "hash": "18 0 15 28 44 2 1 25 108 46 0 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 190,
    "busy": false,
    "total_defense": 190,
    "total_strength": 70,
    "total_accuracy": 190,
    "magic_block": 10,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 276,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 210,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 145,
      "chance": 0.0025
    }, {
      "id": 764,
      "chance": 0.0025
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 818,
      "chance": 0.0025
    }, {
      "id": 813,
      "chance": 0.0025
    }, {
      "id": 481,
      "chance": 0.0025
    }, {
      "id": 167,
      "chance": 0.0025
    }],
    "combat_level": 180
  },
  "name": "Prince",
  "img": {
    "hash": "18 0 87 57 36 2 1 33 148 43 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 210,
    "busy": false,
    "total_defense": 200,
    "total_strength": 110,
    "total_accuracy": 200,
    "magic_block": 20,
    "melee_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 277,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 290,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 1435,
      "chance": 0.0025
    }, {
      "id": 477,
      "chance": 0.0025
    }, {
      "id": 6,
      "chance": 0.05
    }, {
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 378,
      "chance": 0.0025
    }, {
      "id": 363,
      "chance": 0.0025
    }, {
      "id": 467,
      "chance": 0.0025
    }, {
      "id": 248,
      "chance": 0.05
    }, {
      "id": 907,
      "chance": 0.0015
    }],
    "combat_level": 275
  },
  "name": "King",
  "img": {
    "hash": "18 0 92 61 28 2 1 33 173 51 11 6"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 290,
    "busy": false,
    "total_defense": 350,
    "total_strength": 110,
    "total_accuracy": 350,
    "melee_block": 25,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 278,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 14000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 1432,
      "chance": 0.06
    }, {
      "id": 171,
      "chance": 0.03
    }, {
      "id": 587,
      "chance": 0.05
    }, {
      "id": 347,
      "chance": 0.04
    }, {
      "id": 175,
      "chance": 0.06
    }, {
      "id": 179,
      "chance": 0.06
    }, {
      "id": 1626,
      "chance": 0.01
    }, {
      "id": 1602,
      "chance": 0.03
    }, {
      "id": 1606,
      "chance": 0.03
    }, {
      "id": 1610,
      "chance": 0.03
    }, {
      "id": 1614,
      "chance": 0.03
    }, {
      "id": 964,
      "chance": 0.03
    }, {
      "id": 1455,
      "chance": 0.03
    }, {
      "id": 1467,
      "chance": 0.03
    }, {
      "id": 1487,
      "chance": 0.03
    }, {
      "id": 1502,
      "chance": 0.03
    }, {
      "id": 1639,
      "chance": 0.03
    }, {
      "id": 907,
      "chance": 0.06
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 1354,
      "chance": 0.04
    }, {
      "id": 593,
      "chance": 0.05
    }, {
      "id": 501,
      "chance": 0.05
    }, {
      "id": 262,
      "chance": 0.1
    }, {
      "id": 478,
      "chance": 0.05
    }, {
      "id": 1343,
      "chance": 0.005
    }],
    "combat_level": 3775
  },
  "name": "[BOSS] World Tree",
  "img": {
    "sheet": "51",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 14000,
    "busy": false,
    "total_defense": 150,
    "total_strength": 50,
    "total_accuracy": 900
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 279,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Loot Master",
  "img": {
    "hash": "17 0 85 59 72 2 1 12 148 40 14 0"
  },
  "type": 4,
  "activities": ["Check loot", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 280,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 5,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 3,
      "chance": 0.25
    }, {
      "id": 0,
      "chance": 0.05
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 21,
      "chance": 0.05
    }, {
      "id": 5,
      "chance": 0.05
    }],
    "combat_level": 1
  },
  "name": "Moth",
  "img": {
    "sheet": "17",
    "x": 0,
    "y": 7
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 5,
    "busy": false,
    "total_defense": 0,
    "total_strength": 1,
    "total_accuracy": 1
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 281,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 128,
      "chance": 0.0025
    }, {
      "id": 145,
      "chance": 0.0025
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 818,
      "chance": 0.0025
    }, {
      "id": 813,
      "chance": 0.0025
    }, {
      "id": 481,
      "chance": 0.0025
    }, {
      "id": 167,
      "chance": 0.0025
    }],
    "combat_level": 170
  },
  "name": "Blood Spirit",
  "img": {
    "sheet": "18",
    "x": 2,
    "y": 5
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 230,
    "total_strength": 70,
    "total_accuracy": 220
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 282,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 165,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 102,
      "chance": 0.01
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 394,
      "chance": 0.0025
    }, {
      "id": 430,
      "chance": 0.0025
    }, {
      "id": 339,
      "chance": 0.0025
    }, {
      "id": 487,
      "chance": 0.0025
    }, {
      "id": 154,
      "chance": 0.0025
    }, {
      "id": 61,
      "chance": 0.0025
    }, {
      "id": 1012,
      "chance": 0.006
    }],
    "combat_level": 175
  },
  "name": "Queen Lizard",
  "img": {
    "sheet": "15",
    "x": 2,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 165,
    "busy": false,
    "total_defense": 220,
    "total_strength": 80,
    "total_accuracy": 235
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 283,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 190,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 364,
      "chance": 0.0025
    }, {
      "id": 157,
      "chance": 0.0025
    }, {
      "id": 981,
      "chance": 0.003
    }, {
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 152,
      "chance": 0.0025
    }, {
      "id": 1012,
      "chance": 0.01
    }, {
      "id": 327,
      "chance": 0.0025
    }, {
      "id": 324,
      "chance": 0.0025
    }, {
      "id": 1599,
      "chance": 0.0025
    }, {
      "id": 446,
      "chance": 0.0025
    }],
    "combat_level": 210
  },
  "name": "Pyrohydra",
  "img": {
    "sheet": "15",
    "x": 0,
    "y": 4
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 190,
    "busy": false,
    "total_defense": 250,
    "total_strength": 150,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 284,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 220,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 116,
      "chance": 0.02
    }, {
      "id": 189,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 158,
      "chance": 0.0025
    }, {
      "id": 181,
      "chance": 0.0025
    }, {
      "id": 618,
      "chance": 0.0025
    }, {
      "id": 468,
      "chance": 0.0025
    }, {
      "id": 1013,
      "chance": 0.0025
    }, {
      "id": 866,
      "chance": 0.0025
    }, {
      "id": 19,
      "chance": 0.0025
    }, {
      "id": 156,
      "chance": 0.0025
    }],
    "combat_level": 205
  },
  "name": "Earthstorm",
  "img": {
    "sheet": "18",
    "x": 5,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 220,
    "busy": false,
    "magics": [{
      "id": 10
    }],
    "magic": 50,
    "total_defense": 300,
    "total_strength": 1,
    "total_accuracy": 300,
    "magic_block": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 285,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 659,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 480,
      "chance": 0.0025
    }, {
      "id": 86,
      "chance": 0.03
    }, {
      "id": 194,
      "chance": 0.004
    }, {
      "id": 195,
      "chance": 0.0025
    }, {
      "id": 1014,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 787,
      "chance": 0.01
    }],
    "combat_level": 270
  },
  "name": "Diamond Plant",
  "img": {
    "sheet": "17",
    "x": 5,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 350,
    "total_strength": 130,
    "total_accuracy": 350,
    "melee_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 286,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 290,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 101,
      "chance": 0.02
    }, {
      "id": 702,
      "chance": 0.0025
    }, {
      "id": 229,
      "chance": 0.05
    }, {
      "id": 1015,
      "chance": 0.05
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 267,
      "chance": 0.05
    }, {
      "id": 981,
      "chance": 0.003
    }, {
      "id": 1014,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 669,
      "chance": 0.0025
    }],
    "combat_level": 298
  },
  "name": "Hydra Dragon",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 290,
    "busy": false,
    "total_defense": 382,
    "total_strength": 170,
    "total_accuracy": 350,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 287,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Ancient Magician",
  "img": {
    "hash": "18 0 88 52 72 1 0 54 168 17 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 348,
      "count": 5,
      "spawn": true
    }, {
      "id": 349,
      "count": 5,
      "spawn": true
    }, {
      "id": 350,
      "count": 5,
      "spawn": true
    }, {
      "id": 351,
      "count": 5,
      "spawn": true
    }, {
      "id": 352,
      "count": 5,
      "spawn": true
    }, {
      "id": 866,
      "count": 0
    }, {
      "id": 858,
      "count": 0
    }, {
      "id": 862,
      "count": 0
    }, {
      "id": 1075,
      "count": 0
    }, {
      "id": 454,
      "count": 0
    }, {
      "id": 483,
      "count": 0
    }, {
      "id": 451,
      "count": 0
    }, {
      "id": 867,
      "count": 0
    }, {
      "id": 859,
      "count": 0
    }, {
      "id": 863,
      "count": 0
    }, {
      "id": 985,
      "count": 0
    }, {
      "id": 987,
      "count": 0
    }, {
      "id": 980,
      "count": 0
    }, {
      "id": 986,
      "count": 0
    }, {
      "id": 979,
      "count": 0
    }, {
      "id": 984,
      "count": 0
    }, {
      "id": 467,
      "count": 0
    }, {
      "id": 468,
      "count": 0
    }, {
      "id": 469,
      "count": 0
    }, {
      "id": 470,
      "count": 0
    }, {
      "id": 465,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 288,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 230,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 153,
      "chance": 0.0025
    }, {
      "id": 268,
      "chance": 0.1
    }, {
      "id": 983,
      "chance": 0.003
    }, {
      "id": 981,
      "chance": 0.003
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 376,
      "chance": 0.0025
    }, {
      "id": 682,
      "chance": 0.0025
    }, {
      "id": 266,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 59,
      "chance": 0.008
    }],
    "combat_level": 230
  },
  "name": "Observer Overseer",
  "img": {
    "sheet": "15",
    "x": 2,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 230,
    "busy": false,
    "total_defense": 250,
    "total_strength": 90,
    "total_accuracy": 350
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 289,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Ancient Furniture Master",
  "img": {
    "hash": "18 0 79 50 72 0 0 0 0 51 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 836,
      "count": 0
    }, {
      "id": 842,
      "count": 0
    }, {
      "id": 848,
      "count": 0
    }, {
      "id": 770,
      "count": 0
    }, {
      "id": 771,
      "count": 0
    }, {
      "id": 772,
      "count": 0
    }, {
      "id": 835,
      "count": 0
    }, {
      "id": 841,
      "count": 0
    }, {
      "id": 847,
      "count": 0
    }, {
      "id": 837,
      "count": 0
    }, {
      "id": 843,
      "count": 0
    }, {
      "id": 849,
      "count": 0
    }, {
      "id": 838,
      "count": 0
    }, {
      "id": 844,
      "count": 0
    }, {
      "id": 850,
      "count": 0
    }, {
      "id": 839,
      "count": 0
    }, {
      "id": 845,
      "count": 0
    }, {
      "id": 851,
      "count": 0
    }, {
      "id": 840,
      "count": 0
    }, {
      "id": 846,
      "count": 0
    }, {
      "id": 852,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 290,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Guild Shopkeeper Level",
  "img": {
    "sheet": "18",
    "x": 4,
    "y": 10
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 63,
      "count": 0
    }, {
      "id": 173,
      "count": 0
    }, {
      "id": 174,
      "count": 0
    }, {
      "id": 175,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 291,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 18,
    "radius": 9,
    "no_dungeon": true,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 494,
      "chance": 0.1
    }, {
      "id": 204,
      "chance": 0.02
    }, {
      "id": 200,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.02
    }, {
      "id": 196,
      "chance": 0.02
    }, {
      "id": 1144,
      "chance": 0.0025
    }, {
      "id": 384,
      "chance": 0.025
    }, {
      "id": 383,
      "chance": 0.025
    }, {
      "id": 1146,
      "chance": 0.0025
    }, {
      "id": 424,
      "chance": 0.0025
    }]
  },
  "name": "Rudolph",
  "img": {
    "sheet": "34",
    "x": 8,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 18,
    "busy": false,
    "total_defense": 17,
    "total_strength": 17,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 292,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 18,
    "radius": 9,
    "no_dungeon": true,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 494,
      "chance": 0.1
    }, {
      "id": 784,
      "chance": 0.02
    }, {
      "id": 200,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.02
    }, {
      "id": 196,
      "chance": 0.02
    }, {
      "id": 384,
      "chance": 0.025
    }, {
      "id": 383,
      "chance": 0.025
    }, {
      "id": 1145,
      "chance": 0.0025
    }, {
      "id": 1146,
      "chance": 0.0025
    }, {
      "id": 424,
      "chance": 0.0025
    }]
  },
  "name": "Snowman",
  "img": {
    "sheet": "34",
    "x": 9,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 18,
    "busy": false,
    "total_defense": 17,
    "total_strength": 17,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 293,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 18,
    "radius": 9,
    "no_dungeon": true,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 1158,
      "chance": 0.025
    }, {
      "id": 320,
      "chance": 0.05
    }, {
      "id": 200,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.02
    }, {
      "id": 196,
      "chance": 0.02
    }, {
      "id": 384,
      "chance": 0.025
    }, {
      "id": 383,
      "chance": 0.025
    }, {
      "id": 1154,
      "chance": 0.0055
    }, {
      "id": 1156,
      "chance": 0.0025
    }, {
      "id": 424,
      "chance": 0.0025
    }]
  },
  "name": "Unhappy Cupid",
  "img": {
    "sheet": "15",
    "x": 6,
    "y": 6
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 18,
    "busy": false,
    "total_defense": 17,
    "total_strength": 17,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 294,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 7350,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 175,
      "chance": 0.05
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.06
    }, {
      "id": 1306,
      "chance": 0.06
    }, {
      "id": 664,
      "chance": 0.04
    }, {
      "id": 320,
      "chance": 0.05
    }, {
      "id": 200,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.02
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 981,
      "chance": 0.003
    }, {
      "id": 188,
      "chance": 0.0025
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 376,
      "chance": 0.0025
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 66,
      "chance": 0.0025
    }, {
      "id": 805,
      "chance": 0.0025
    }, {
      "id": 815,
      "chance": 0.0025
    }, {
      "id": 141,
      "chance": 0.0025
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1641,
      "chance": 0.015
    }, {
      "id": 1659,
      "chance": 0.015
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 147,
      "chance": 0.07
    }, {
      "id": 143,
      "chance": 0.04
    }, {
      "id": 450,
      "chance": 0.05
    }, {
      "id": 465,
      "chance": 0.04
    }, {
      "id": 620,
      "chance": 0.04
    }, {
      "id": 867,
      "chance": 0.03
    }, {
      "id": 1077,
      "chance": 0.03
    }, {
      "id": 653,
      "chance": 0.04
    }, {
      "id": 593,
      "chance": 0.03
    }, {
      "id": 378,
      "chance": 0.05
    }, {
      "id": 477,
      "chance": 0.05
    }],
    "combat_level": 2100
  },
  "name": "[BOSS] Cannibal Plant",
  "img": {
    "sheet": "51",
    "x": 3,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 7350,
    "busy": false,
    "total_defense": 400,
    "total_strength": 180,
    "total_accuracy": 470
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 295,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 18,
    "radius": 9,
    "no_dungeon": true,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 1172,
      "chance": 0.025
    }, {
      "id": 1173,
      "chance": 0.005
    }, {
      "id": 1024,
      "chance": 0.03
    }, {
      "id": 200,
      "chance": 0.0025
    }, {
      "id": 247,
      "chance": 0.1
    }, {
      "id": 20,
      "chance": 0.15
    }, {
      "id": 27,
      "chance": 0.05
    }, {
      "id": 198,
      "chance": 0.0025
    }, {
      "id": 196,
      "chance": 0.0025
    }, {
      "id": 185,
      "chance": 0.03
    }, {
      "id": 184,
      "chance": 0.01
    }]
  },
  "name": "Leprechaun",
  "img": {
    "sheet": "38",
    "x": 10,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 18,
    "busy": false,
    "total_defense": 17,
    "total_strength": 17,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 296,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dorpat Breeding Master",
  "img": {
    "hash": "18 0 25 60 72 0 1 36 0 15 12 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1166,
      "count": 0
    }, {
      "id": 1179,
      "count": 0
    }, {
      "id": 1230,
      "count": 0
    }, {
      "id": 1168,
      "count": 0
    }, {
      "id": 1167,
      "count": 0
    }, {
      "id": 1245,
      "count": 0
    }, {
      "id": 1229,
      "count": 0
    }, {
      "id": 1247,
      "count": 0
    }, {
      "id": 1246,
      "count": 0
    }, {
      "id": 1249,
      "count": 0
    }, {
      "id": 1216,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 297,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Reval Breeding Master",
  "img": {
    "hash": "18 0 87 57 72 0 1 37 0 46 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1244,
      "count": 0
    }, {
      "id": 1169,
      "count": 0
    }, {
      "id": 1236,
      "count": 0
    }, {
      "id": 1234,
      "count": 0
    }, {
      "id": 1235,
      "count": 0
    }, {
      "id": 1206,
      "count": 0
    }, {
      "id": 1207,
      "count": 0
    }, {
      "id": 1205,
      "count": 0
    }, {
      "id": 1199,
      "count": 0
    }, {
      "id": 1255,
      "count": 0
    }, {
      "id": 1184,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 298,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cesis Breeding Master",
  "img": {
    "hash": "18 0 47 30 72 0 0 0 0 51 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1252,
      "count": 0
    }, {
      "id": 1209,
      "count": 0
    }, {
      "id": 1180,
      "count": 0
    }, {
      "id": 1217,
      "count": 0
    }, {
      "id": 1251,
      "count": 0
    }, {
      "id": 1250,
      "count": 0
    }, {
      "id": 1196,
      "count": 0
    }, {
      "id": 1256,
      "count": 0
    }, {
      "id": 1211,
      "count": 0
    }, {
      "id": 1233,
      "count": 0
    }, {
      "id": 1198,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 299,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Narwa Breeding Master",
  "img": {
    "hash": "18 0 81 36 72 0 1 33 0 39 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1227,
      "count": 0
    }, {
      "id": 1226,
      "count": 0
    }, {
      "id": 1204,
      "count": 0
    }, {
      "id": 1194,
      "count": 0
    }, {
      "id": 1195,
      "count": 0
    }, {
      "id": 1253,
      "count": 0
    }, {
      "id": 1200,
      "count": 0
    }, {
      "id": 1208,
      "count": 0
    }, {
      "id": 1190,
      "count": 0
    }, {
      "id": 1238,
      "count": 0
    }, {
      "id": 1192,
      "count": 0
    }, {
      "id": 1191,
      "count": 0
    }, {
      "id": 1185,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 300,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Legendary Breeding Master",
  "img": {
    "hash": "17 0 37 25 20 2 0 0 153 31 5 0 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1242,
      "count": 0
    }, {
      "id": 1241,
      "count": 0
    }, {
      "id": 1218,
      "count": 0
    }, {
      "id": 1219,
      "count": 0
    }, {
      "id": 1181,
      "count": 0
    }, {
      "id": 1237,
      "count": 0
    }, {
      "id": 1182,
      "count": 0
    }, {
      "id": 1215,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 301,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Legendary Breeding Master",
  "img": {
    "hash": "17 0 37 25 20 2 0 0 176 49 5 0 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1254,
      "count": 0
    }, {
      "id": 1183,
      "count": 0
    }, {
      "id": 1186,
      "count": 0
    }, {
      "id": 1189,
      "count": 0
    }, {
      "id": 1239,
      "count": 0
    }, {
      "id": 1201,
      "count": 0
    }, {
      "id": 1202,
      "count": 0
    }, {
      "id": 1223,
      "count": 0
    }, {
      "id": 1212,
      "count": 0
    }, {
      "id": 1203,
      "count": 0
    }, {
      "id": 1193,
      "count": 0
    }, {
      "id": 1232,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 302,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Dragons Breeding Master",
  "img": {
    "hash": "17 0 37 25 20 2 0 0 50 9 5 0 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1225,
      "count": 0
    }, {
      "id": 1187,
      "count": 0
    }, {
      "id": 1188,
      "count": 0
    }, {
      "id": 1224,
      "count": 0
    }, {
      "id": 1221,
      "count": 0
    }, {
      "id": 1213,
      "count": 0
    }, {
      "id": 1220,
      "count": 0
    }, {
      "id": 1214,
      "count": 0
    }, {
      "id": 1222,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 303,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 200,
      "chance": 0.005
    }, {
      "id": 270,
      "chance": 0.1
    }, {
      "id": 264,
      "chance": 0.1
    }, {
      "id": 230,
      "chance": 0.05
    }, {
      "id": 1424,
      "chance": 0.0025
    }, {
      "id": 1197,
      "chance": 0.002
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 0,
      "chance": 0.02
    }, {
      "id": 185,
      "chance": 0.01
    }, {
      "id": 184,
      "chance": 0.005
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 146,
      "chance": 0.0025
    }],
    "combat_level": 108
  },
  "name": "Giant Troll",
  "img": {
    "sheet": "37",
    "x": 4,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "total_defense": 130,
    "total_strength": 70,
    "total_accuracy": 140,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 304,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 23,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 14,
      "chance": 0.05
    }, {
      "id": 15,
      "chance": 0.1
    }, {
      "id": 213,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 1422,
      "chance": 0.0025
    }, {
      "id": 1170,
      "chance": 0.0025
    }, {
      "id": 19,
      "chance": 0.01
    }],
    "combat_level": 20
  },
  "name": "Kobalos",
  "img": {
    "sheet": "38",
    "x": 11,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 23,
    "busy": false,
    "total_defense": 20,
    "total_strength": 20,
    "total_accuracy": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 305,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 4,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [],
    "combat_level": 1
  },
  "name": "Training Dummy",
  "img": {
    "sheet": "15",
    "x": 1,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 4,
    "busy": false,
    "total_defense": 0,
    "total_strength": 0,
    "total_accuracy": 0
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 306,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Magic Instructor",
  "img": {
    "hash": "18 0 90 54 72 1 0 54 166 46 12 5"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 307,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Alchemy Instructor",
  "img": {
    "hash": "17 0 42 26 72 2 0 0 160 0 9 0"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 308,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 1100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 174,
      "chance": 0.05
    }, {
      "id": 178,
      "chance": 0.05
    }, {
      "id": 1127,
      "chance": 0.05
    }, {
      "id": 1305,
      "chance": 0.05
    }, {
      "id": 363,
      "chance": 0.06
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 167,
      "chance": 0.06
    }, {
      "id": 651,
      "chance": 0.04
    }, {
      "id": 481,
      "chance": 0.06
    }, {
      "id": 497,
      "chance": 0.07
    }, {
      "id": 710,
      "chance": 0.02
    }, {
      "id": 593,
      "chance": 0.02
    }, {
      "id": 476,
      "chance": 0.05
    }],
    "combat_level": 450
  },
  "name": "[BOSS] Giant Cyclops",
  "img": {
    "sheet": "51",
    "x": 2,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1100,
    "busy": false,
    "total_defense": 250,
    "total_strength": 100,
    "total_accuracy": 350,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 309,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 174,
      "chance": 0.05
    }, {
      "id": 178,
      "chance": 0.05
    }, {
      "id": 1127,
      "chance": 0.05
    }, {
      "id": 1305,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.07
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 167,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 455,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.07
    }, {
      "id": 339,
      "chance": 0.08
    }, {
      "id": 710,
      "chance": 0.02
    }, {
      "id": 593,
      "chance": 0.02
    }, {
      "id": 476,
      "chance": 0.05
    }],
    "combat_level": 435
  },
  "name": "[BOSS] Cave Crawler",
  "img": {
    "sheet": "34",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 260,
    "total_strength": 120,
    "total_accuracy": 360
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 310,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 1400,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 174,
      "chance": 0.05
    }, {
      "id": 178,
      "chance": 0.05
    }, {
      "id": 1127,
      "chance": 0.05
    }, {
      "id": 1305,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.08
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 167,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 130,
      "chance": 0.08
    }, {
      "id": 806,
      "chance": 0.05
    }, {
      "id": 803,
      "chance": 0.07
    }, {
      "id": 1070,
      "chance": 0.06
    }, {
      "id": 710,
      "chance": 0.02
    }, {
      "id": 593,
      "chance": 0.02
    }, {
      "id": 476,
      "chance": 0.05
    }],
    "combat_level": 545
  },
  "name": "[BOSS] Venus Flytrap",
  "img": {
    "sheet": "34",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1400,
    "busy": false,
    "total_defense": 280,
    "total_strength": 120,
    "total_accuracy": 380
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 311,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Party Quest Instructor",
  "img": {
    "hash": "0 0 18 17 72 0 0 0 0 14 9 0"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 312,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "PVP Shopkeeper",
  "img": {
    "hash": "19 0 63 7 72 0 0 0 0 0 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [],
    "general": 0.4
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 313,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Traitor",
  "img": {
    "hash": "18 0 88 52 70 0 0 0 123 51 6 7 1"
  },
  "type": 4,
  "activities": ["Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 314,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 45,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 200,
      "chance": 0.005
    }, {
      "id": 30,
      "chance": 0.1
    }, {
      "id": 31,
      "chance": 0.05
    }, {
      "id": 205,
      "chance": 0.1
    }, {
      "id": 212,
      "chance": 0.05
    }, {
      "id": 419,
      "chance": 0.0025
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 457,
      "chance": 0.0025
    }, {
      "id": 285,
      "chance": 0.005
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 48,
      "chance": 0.005
    }, {
      "id": 146,
      "chance": 0.0025
    }],
    "combat_level": 50
  },
  "name": "Earth Elemental",
  "img": {
    "sheet": "14",
    "x": 5,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 45,
    "busy": false,
    "total_defense": 55,
    "total_strength": 20,
    "total_accuracy": 80,
    "magic_block": 25,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 315,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 55,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 200,
      "chance": 0.005
    }, {
      "id": 30,
      "chance": 0.1
    }, {
      "id": 31,
      "chance": 0.05
    }, {
      "id": 205,
      "chance": 0.1
    }, {
      "id": 212,
      "chance": 0.05
    }, {
      "id": 420,
      "chance": 0.0025
    }, {
      "id": 856,
      "chance": 0.0025
    }, {
      "id": 857,
      "chance": 0.0025
    }, {
      "id": 285,
      "chance": 0.005
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 48,
      "chance": 0.005
    }, {
      "id": 426,
      "chance": 0.0025
    }],
    "combat_level": 85
  },
  "name": "Water Elemental",
  "img": {
    "sheet": "14",
    "x": 6,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 55,
    "busy": false,
    "total_defense": 80,
    "total_strength": 45,
    "total_accuracy": 160,
    "melee_block": 25,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 316,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 75,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 196,
      "chance": 0.005
    }, {
      "id": 30,
      "chance": 0.1
    }, {
      "id": 31,
      "chance": 0.05
    }, {
      "id": 205,
      "chance": 0.1
    }, {
      "id": 212,
      "chance": 0.05
    }, {
      "id": 420,
      "chance": 0.0025
    }, {
      "id": 450,
      "chance": 0.0015
    }, {
      "id": 455,
      "chance": 0.0025
    }, {
      "id": 285,
      "chance": 0.005
    }, {
      "id": 249,
      "chance": 0.05
    }, {
      "id": 48,
      "chance": 0.005
    }, {
      "id": 436,
      "chance": 0.0025
    }],
    "combat_level": 130
  },
  "name": "Ice Elemental",
  "img": {
    "sheet": "14",
    "x": 7,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 75,
    "busy": false,
    "total_defense": 120,
    "total_strength": 25,
    "total_accuracy": 300,
    "melee_block": 25,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 317,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 120,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 153,
      "chance": 0.0025
    }, {
      "id": 862,
      "chance": 0.0015
    }, {
      "id": 655,
      "chance": 0.0025
    }, {
      "id": 194,
      "chance": 0.0015
    }, {
      "id": 193,
      "chance": 0.0025
    }, {
      "id": 430,
      "chance": 0.0025
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 440,
      "chance": 0.0025
    }, {
      "id": 156,
      "chance": 0.003
    }],
    "combat_level": 220
  },
  "name": "Rock Golem",
  "img": {
    "sheet": "14",
    "x": 8,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 120,
    "busy": false,
    "total_defense": 450,
    "total_strength": 60,
    "total_accuracy": 250,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 318,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 60,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 34,
    "drops": [{
      "id": 198,
      "chance": 0.005
    }, {
      "id": 200,
      "chance": 0.005
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 265,
      "chance": 0.005
    }, {
      "id": 1072,
      "chance": 0.0025
    }, {
      "id": 993,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 100
  },
  "name": "Draman",
  "img": {
    "sheet": "14",
    "x": 2,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 60,
    "busy": false,
    "total_defense": 0,
    "total_strength": 40,
    "total_accuracy": 300
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 319,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 88,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 198,
      "chance": 0.005
    }, {
      "id": 200,
      "chance": 0.005
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 992,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 122
  },
  "name": "Raaz",
  "img": {
    "sheet": "14",
    "x": 3,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 88,
    "busy": false,
    "total_defense": 0,
    "total_strength": 50,
    "total_accuracy": 350
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 320,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 90,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 198,
      "chance": 0.005
    }, {
      "id": 196,
      "chance": 0.005
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 120
  },
  "name": "Gor-gin",
  "img": {
    "sheet": "14",
    "x": 4,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 90,
    "busy": false,
    "magics": [{
      "id": 5
    }],
    "magic": 85,
    "total_defense": 1,
    "total_strength": 1,
    "total_accuracy": 390
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 321,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 60,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 198,
      "chance": 0.005
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 203,
      "chance": 0.005
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 125
  },
  "name": "Verme",
  "img": {
    "sheet": "14",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 60,
    "busy": false,
    "total_defense": 0,
    "total_strength": 40,
    "total_accuracy": 400
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 322,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 72,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 36,
    "drops": [{
      "id": 194,
      "chance": 0.0025
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 203,
      "chance": 0.005
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 125
  },
  "name": "Iphar",
  "img": {
    "sheet": "14",
    "x": 8,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 72,
    "busy": false,
    "total_defense": 0,
    "total_strength": 30,
    "total_accuracy": 400
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 323,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 130,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 194,
      "chance": 0.0025
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 203,
      "chance": 0.005
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 595,
      "chance": 0.005
    }, {
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 1073,
      "chance": 0.0025
    }, {
      "id": 996,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 200
  },
  "name": "Ent",
  "img": {
    "sheet": "14",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 130,
    "busy": false,
    "total_defense": 300,
    "total_strength": 70,
    "total_accuracy": 300
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 324,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 140,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 194,
      "chance": 0.0025
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 657,
      "chance": 0.0015
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 497,
      "chance": 0.0025
    }, {
      "id": 664,
      "chance": 0.0015
    }, {
      "id": 996,
      "chance": 0.0025
    }, {
      "id": 452,
      "chance": 0.0025
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 210
  },
  "name": "Summoned Skull",
  "img": {
    "sheet": "14",
    "x": 4,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 140,
    "busy": false,
    "total_defense": 300,
    "total_strength": 50,
    "total_accuracy": 350
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 325,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 140,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 42,
    "drops": [{
      "id": 194,
      "chance": 0.0015
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 657,
      "chance": 0.0015
    }, {
      "id": 266,
      "chance": 0.005
    }, {
      "id": 498,
      "chance": 0.0025
    }, {
      "id": 994,
      "chance": 0.0025
    }, {
      "id": 465,
      "chance": 0.0015
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 250
  },
  "name": "Ancient Golem",
  "img": {
    "sheet": "14",
    "x": 5,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 140,
    "busy": false,
    "total_defense": 450,
    "total_strength": 60,
    "total_accuracy": 350,
    "melee_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 326,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 60,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 93,
      "chance": 0.05
    }, {
      "id": 994,
      "chance": 0.0035
    }, {
      "id": 176,
      "chance": 0.005
    }, {
      "id": 231,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 198,
      "chance": 0.008
    }, {
      "id": 188,
      "chance": 0.0025
    }],
    "combat_level": 95
  },
  "name": "Alligator",
  "img": {
    "sheet": "14",
    "x": 3,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 60,
    "busy": false,
    "total_defense": 120,
    "total_strength": 20,
    "total_accuracy": 180
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 327,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 194,
      "chance": 0.0025
    }, {
      "id": 291,
      "chance": 0.005
    }, {
      "id": 657,
      "chance": 0.0015
    }, {
      "id": 1013,
      "chance": 0.0025
    }, {
      "id": 498,
      "chance": 0.0025
    }, {
      "id": 994,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 432,
      "chance": 0.0015
    }, {
      "id": 283,
      "chance": 0.05
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 435,
      "chance": 0.0025
    }],
    "combat_level": 162
  },
  "name": "Necromancer",
  "img": {
    "hash": "69 0 103 75 30 32 0 0 70 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "magics": [{
      "id": 6
    }],
    "magic": 85,
    "total_defense": 230,
    "total_strength": 1,
    "total_accuracy": 340,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 328,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 92,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "drops": [{
      "id": 194,
      "chance": 0.0025
    }, {
      "id": 291,
      "chance": 0.005
    }, {
      "id": 186,
      "chance": 0.0035
    }, {
      "id": 1013,
      "chance": 0.0025
    }, {
      "id": 498,
      "chance": 0.0025
    }, {
      "id": 994,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 432,
      "chance": 0.0015
    }, {
      "id": 692,
      "chance": 0.0025
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 467,
      "chance": 0.0025
    }],
    "combat_level": 98
  },
  "name": "Gravekeeper",
  "img": {
    "sheet": "14",
    "x": 2,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 92,
    "busy": false,
    "magics": [{
      "id": 7
    }],
    "magic": 80,
    "total_defense": 130,
    "total_strength": 1,
    "total_accuracy": 170
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 329,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 194,
      "chance": 0.008
    }, {
      "id": 291,
      "chance": 0.005
    }, {
      "id": 186,
      "chance": 0.0035
    }, {
      "id": 133,
      "chance": 0.0025
    }, {
      "id": 39,
      "chance": 0.0025
    }, {
      "id": 994,
      "chance": 0.0025
    }, {
      "id": 995,
      "chance": 0.0025
    }, {
      "id": 163,
      "chance": 0.0015
    }, {
      "id": 692,
      "chance": 0.0025
    }, {
      "id": 247,
      "chance": 0.05
    }, {
      "id": 40,
      "chance": 0.0025
    }],
    "combat_level": 200
  },
  "name": "Undead Paladin",
  "img": {
    "hash": "69 0 124 75 71 30 15 0 200 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 100,
    "busy": false,
    "total_defense": 250,
    "total_strength": 50,
    "total_accuracy": 400,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 330,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Broceliande Forest Magician",
  "img": {
    "hash": "0 0 90 54 68 0 0 0 0 44 14 3 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 482,
      "count": 5,
      "spawn": true
    }, {
      "id": 450,
      "count": 5,
      "spawn": true
    }, {
      "id": 456,
      "count": 5,
      "spawn": true
    }, {
      "id": 612,
      "count": 0
    }, {
      "id": 1074,
      "count": 0
    }, {
      "id": 858,
      "count": 0
    }, {
      "id": 862,
      "count": 0
    }, {
      "id": 866,
      "count": 0
    }, {
      "id": 1075,
      "count": 0
    }, {
      "id": 856,
      "count": 0
    }, {
      "id": 860,
      "count": 0
    }, {
      "id": 864,
      "count": 0
    }, {
      "id": 1071,
      "count": 0
    }, {
      "id": 483,
      "count": 0
    }, {
      "id": 451,
      "count": 0
    }, {
      "id": 454,
      "count": 0
    }, {
      "id": 1076,
      "count": 0
    }, {
      "id": 859,
      "count": 0
    }, {
      "id": 863,
      "count": 0
    }, {
      "id": 867,
      "count": 0
    }, {
      "id": 1077,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 331,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Broceliande Forest Spellcaster",
  "img": {
    "hash": "0 0 88 54 71 2 0 0 172 44 14 3 1"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 413,
      "count": 5,
      "spawn": true
    }, {
      "id": 412,
      "count": 15,
      "spawn": true
    }, {
      "id": 414,
      "count": 0
    }, {
      "id": 415,
      "count": 0
    }, {
      "id": 416,
      "count": 0
    }, {
      "id": 417,
      "count": 0
    }, {
      "id": 418,
      "count": 0
    }, {
      "id": 419,
      "count": 0
    }, {
      "id": 420,
      "count": 0
    }, {
      "id": 421,
      "count": 0
    }, {
      "id": 459,
      "count": 0
    }, {
      "id": 458,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 332,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Traitor",
  "img": {
    "hash": "0 0 88 52 70 0 1 33 0 51 14 3 1"
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 333,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 650,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 190,
      "chance": 0.1
    }, {
      "id": 173,
      "chance": 0.1
    }, {
      "id": 177,
      "chance": 0.1
    }, {
      "id": 193,
      "chance": 0.1
    }, {
      "id": 1304,
      "chance": 0.1
    }, {
      "id": 1126,
      "chance": 0.1
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 437,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.07
    }, {
      "id": 18,
      "chance": 0.05
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }],
    "next_cathedral_npc_id": 352,
    "respawn_time": 5
  },
  "name": "[Boss] Air Priest",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 650,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 8
    }],
    "magic": 70,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 65,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 334,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 360,
    "respawn_time": 5,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 190,
      "chance": 0.1
    }, {
      "id": 173,
      "chance": 0.1
    }, {
      "id": 177,
      "chance": 0.1
    }, {
      "id": 193,
      "chance": 0.1
    }, {
      "id": 1304,
      "chance": 0.1
    }, {
      "id": 1126,
      "chance": 0.1
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 437,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.07
    }, {
      "id": 18,
      "chance": 0.05
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Boss] Earth Priestess",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 10
    }],
    "magic": 66,
    "cooldown": 0.6,
    "total_strength": 1,
    "total_accuracy": 70,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 335,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1050,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "no_dungeon": true,
    "next_cathedral_npc_id": 369,
    "speed": 100,
    "respawn_time": 5,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 342,
      "chance": 0.05
    }, {
      "id": 426,
      "chance": 0.05
    }, {
      "id": 455,
      "chance": 0.05
    }, {
      "id": 424,
      "chance": 0.05
    }, {
      "id": 457,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 1298,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 441,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Boss] Water Priest",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1050,
    "busy": false,
    "total_defense": 222,
    "magics": [{
      "id": 9
    }],
    "magic": 84,
    "cooldown": 0.6,
    "total_strength": 1,
    "total_accuracy": 70,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 336,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1300,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 378,
    "respawn_time": 5,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 342,
      "chance": 0.05
    }, {
      "id": 426,
      "chance": 0.05
    }, {
      "id": 455,
      "chance": 0.05
    }, {
      "id": 424,
      "chance": 0.05
    }, {
      "id": 457,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 1298,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 441,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Boss] Fire Priestess",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1300,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 11
    }],
    "magic": 94,
    "cooldown": 0.6,
    "total_strength": 1,
    "total_accuracy": 70,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 337,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 387,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 154,
      "chance": 0.05
    }, {
      "id": 155,
      "chance": 0.05
    }, {
      "id": 302,
      "chance": 0.05
    }, {
      "id": 143,
      "chance": 0.05
    }, {
      "id": 144,
      "chance": 0.05
    }, {
      "id": 303,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Boss] Cathedral Guardian",
  "img": {
    "sheet": "45",
    "x": 4,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 200,
    "total_strength": 60,
    "total_accuracy": 369,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 338,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1800,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 396,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 154,
      "chance": 0.05
    }, {
      "id": 155,
      "chance": 0.05
    }, {
      "id": 302,
      "chance": 0.05
    }, {
      "id": 143,
      "chance": 0.05
    }, {
      "id": 144,
      "chance": 0.05
    }, {
      "id": 303,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Boss] God's Eye",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1800,
    "busy": false,
    "total_defense": 300,
    "magics": [{
      "id": 17
    }],
    "magic": 80,
    "cooldown": 0.6,
    "total_strength": 1,
    "total_accuracy": 270,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 339,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 2000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 405,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": [{
      "id": 363,
      "chance": 0.05
    }, {
      "id": 932,
      "chance": 0.05
    }, {
      "id": 936,
      "chance": 0.05
    }, {
      "id": 1271,
      "chance": 0.05
    }, {
      "id": 200,
      "chance": 0.05
    }, {
      "id": 198,
      "chance": 0.05
    }, {
      "id": 450,
      "chance": 0.05
    }, {
      "id": 456,
      "chance": 0.05
    }, {
      "id": 482,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.05
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1306,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.05
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 1066,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 962,
      "chance": 0.05
    }, {
      "id": 969,
      "chance": 0.05
    }, {
      "id": 977,
      "chance": 0.05
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 1080,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Boss] Zombie Lord",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 2000,
    "busy": false,
    "total_defense": 325,
    "total_strength": 40,
    "total_accuracy": 405,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 340,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 2000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 414,
    "respawn_time": 5,
    "att_anim": 40,
    "drops": [{
      "id": 363,
      "chance": 0.05
    }, {
      "id": 932,
      "chance": 0.05
    }, {
      "id": 936,
      "chance": 0.05
    }, {
      "id": 1271,
      "chance": 0.05
    }, {
      "id": 200,
      "chance": 0.05
    }, {
      "id": 198,
      "chance": 0.05
    }, {
      "id": 450,
      "chance": 0.05
    }, {
      "id": 456,
      "chance": 0.05
    }, {
      "id": 482,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.05
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1306,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.05
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.05
    }, {
      "id": 1663,
      "chance": 0.03
    }, {
      "id": 1645,
      "chance": 0.03
    }, {
      "id": 1647,
      "chance": 0.02
    }, {
      "id": 1665,
      "chance": 0.02
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 1066,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 962,
      "chance": 0.05
    }, {
      "id": 969,
      "chance": 0.05
    }, {
      "id": 977,
      "chance": 0.05
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 1080,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Boss] Holy Knight",
  "img": {
    "sheet": "45",
    "x": 7,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 2000,
    "busy": false,
    "total_defense": 320,
    "magics": [{
      "id": 17
    }],
    "magic": 94,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 290,
    "magic_block": 30
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 341,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 3000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 423,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": [{
      "id": 483,
      "chance": 0.05
    }, {
      "id": 451,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 462,
      "chance": 0.05
    }, {
      "id": 664,
      "chance": 0.05
    }, {
      "id": 661,
      "chance": 0.05
    }, {
      "id": 379,
      "chance": 0.08
    }, {
      "id": 440,
      "chance": 0.05
    }, {
      "id": 394,
      "chance": 0.05
    }, {
      "id": 430,
      "chance": 0.05
    }, {
      "id": 375,
      "chance": 0.08
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 1663,
      "chance": 0.03
    }, {
      "id": 1645,
      "chance": 0.03
    }, {
      "id": 1647,
      "chance": 0.02
    }, {
      "id": 1665,
      "chance": 0.02
    }, {
      "id": 618,
      "chance": 0.05
    }, {
      "id": 666,
      "chance": 0.05
    }, {
      "id": 968,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.08
    }, {
      "id": 179,
      "chance": 0.08
    }, {
      "id": 1306,
      "chance": 0.08
    }, {
      "id": 1128,
      "chance": 0.08
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 364,
      "chance": 0.05
    }, {
      "id": 974,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 1032,
      "chance": 0.1
    }, {
      "id": 392,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.08
    }, {
      "id": 812,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.08
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 1080,
      "chance": 0.08
    }, {
      "id": 972,
      "chance": 0.1
    }]
  },
  "name": "[Boss] Saint Richard",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 3000,
    "busy": false,
    "total_defense": 550,
    "total_strength": 70,
    "total_accuracy": 480,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 342,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 3000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 434,
    "respawn_time": 5,
    "drops": [{
      "id": 483,
      "chance": 0.05
    }, {
      "id": 451,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 462,
      "chance": 0.05
    }, {
      "id": 664,
      "chance": 0.05
    }, {
      "id": 661,
      "chance": 0.05
    }, {
      "id": 379,
      "chance": 0.08
    }, {
      "id": 440,
      "chance": 0.05
    }, {
      "id": 394,
      "chance": 0.05
    }, {
      "id": 430,
      "chance": 0.05
    }, {
      "id": 375,
      "chance": 0.08
    }, {
      "id": 618,
      "chance": 0.05
    }, {
      "id": 666,
      "chance": 0.05
    }, {
      "id": 968,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.08
    }, {
      "id": 179,
      "chance": 0.08
    }, {
      "id": 1306,
      "chance": 0.08
    }, {
      "id": 1128,
      "chance": 0.08
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 364,
      "chance": 0.05
    }, {
      "id": 974,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 1032,
      "chance": 0.1
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 1663,
      "chance": 0.03
    }, {
      "id": 1645,
      "chance": 0.03
    }, {
      "id": 1647,
      "chance": 0.02
    }, {
      "id": 1665,
      "chance": 0.02
    }, {
      "id": 392,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.08
    }, {
      "id": 812,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.08
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 1080,
      "chance": 0.08
    }, {
      "id": 972,
      "chance": 0.1
    }]
  },
  "name": "[Boss] High Priest",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 0
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 3000,
    "busy": false,
    "total_defense": 508,
    "magics": [{
      "id": 24
    }, {
      "id": 22
    }],
    "magic": 78,
    "cooldown": 0.8,
    "magic_block": 35,
    "total_strength": 1,
    "total_accuracy": 492
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 343,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 344,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 1",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 160,
    "total_strength": 20,
    "total_accuracy": 200,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 344,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 345,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 2",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 162,
    "total_strength": 20,
    "total_accuracy": 203,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 345,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 346,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 3",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 165,
    "total_strength": 20,
    "total_accuracy": 205,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 346,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 347,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 4",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 175,
    "total_strength": 20,
    "total_accuracy": 209,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 347,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 450,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 348,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 190,
      "chance": 0.1
    }, {
      "id": 173,
      "chance": 0.1
    }, {
      "id": 177,
      "chance": 0.1
    }, {
      "id": 193,
      "chance": 0.1
    }, {
      "id": 1304,
      "chance": 0.1
    }, {
      "id": 1126,
      "chance": 0.1
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 437,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.07
    }, {
      "id": 18,
      "chance": 0.05
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Lion Turtle",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 450,
    "busy": false,
    "total_defense": 205,
    "total_strength": 10,
    "total_accuracy": 220,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 348,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 349,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 5",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 2
    }],
    "magic": 80,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 60,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 349,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 350,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 6",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 2
    }],
    "magic": 85,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 58,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 350,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 351,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 7",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 2
    }],
    "magic": 88,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 55,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 351,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 333,
    "respawn_time": 5,
    "att_anim": 44,
    "drops": []
  },
  "name": "Harpy 8",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 2
    }],
    "magic": 89,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 60,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 352,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 353,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 1",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 3
    }],
    "magic": 74,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 353,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 354,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 2",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 3
    }],
    "magic": 77,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 354,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 355,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 3",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 3
    }],
    "magic": 78,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 62
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 355,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 356,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 4",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 3
    }],
    "magic": 78,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 65
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 356,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 357,
    "respawn_time": 5,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 190,
      "chance": 0.1
    }, {
      "id": 173,
      "chance": 0.1
    }, {
      "id": 177,
      "chance": 0.1
    }, {
      "id": 193,
      "chance": 0.1
    }, {
      "id": 1304,
      "chance": 0.1
    }, {
      "id": 1126,
      "chance": 0.1
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 437,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.07
    }, {
      "id": 18,
      "chance": 0.05
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Capricorn",
  "img": {
    "sheet": "45",
    "x": 7,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 5
    }],
    "magic": 78,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 65,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 357,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 358,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 5",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 185,
    "total_strength": 18,
    "total_accuracy": 220
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 358,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 359,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 6",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 188,
    "total_strength": 20,
    "total_accuracy": 223
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 359,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 432,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 7",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 192,
    "total_strength": 20,
    "total_accuracy": 226
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 360,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 361,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 1",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 222,
    "total_strength": 22,
    "total_accuracy": 241
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 361,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 362,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 2",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 228,
    "total_strength": 22,
    "total_accuracy": 247
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 362,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 363,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 3",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 235,
    "total_strength": 22,
    "total_accuracy": 255
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 363,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 364,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 4",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 239,
    "total_strength": 22,
    "total_accuracy": 260
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 364,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 750,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 365,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 342,
      "chance": 0.05
    }, {
      "id": 426,
      "chance": 0.05
    }, {
      "id": 455,
      "chance": 0.05
    }, {
      "id": 424,
      "chance": 0.05
    }, {
      "id": 457,
      "chance": 0.05
    }, {
      "id": 1298,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 441,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Giant",
  "img": {
    "sheet": "45",
    "x": 4,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 750,
    "busy": false,
    "total_defense": 242,
    "total_strength": 22,
    "total_accuracy": 268,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 365,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 366,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 5",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 192,
    "magics": [{
      "id": 4
    }],
    "magic": 90,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 65
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 366,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 367,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 6",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 212,
    "magics": [{
      "id": 4
    }],
    "magic": 90,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 74
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 367,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 368,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 7",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 222,
    "magics": [{
      "id": 4
    }],
    "magic": 93,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 74
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 368,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 410,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 335,
    "respawn_time": 5,
    "att_anim": 36,
    "drops": []
  },
  "name": "Ogre 8",
  "img": {
    "sheet": "45",
    "x": 2,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 410,
    "busy": false,
    "total_defense": 229,
    "magics": [{
      "id": 4
    }],
    "magic": 94,
    "cooldown": 0.5,
    "total_strength": 1,
    "total_accuracy": 74
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 369,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 370,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 1",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 269,
    "magics": [{
      "id": 7
    }],
    "magic": 90,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 172
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 370,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 371,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 2",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 269,
    "magics": [{
      "id": 7
    }],
    "magic": 95,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 172
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 371,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 372,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 3",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 269,
    "magics": [{
      "id": 7
    }],
    "magic": 100,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 172
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 372,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 373,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 4",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 272,
    "magics": [{
      "id": 7
    }],
    "magic": 100,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 186
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 373,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 900,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 374,
    "respawn_time": 5,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 342,
      "chance": 0.05
    }, {
      "id": 426,
      "chance": 0.05
    }, {
      "id": 455,
      "chance": 0.05
    }, {
      "id": 424,
      "chance": 0.05
    }, {
      "id": 457,
      "chance": 0.05
    }, {
      "id": 1298,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 387,
      "chance": 0.05
    }, {
      "id": 441,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 497,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 139,
      "chance": 0.05
    }, {
      "id": 138,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Spider Queen",
  "img": {
    "sheet": "45",
    "x": 4,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 900,
    "busy": false,
    "total_defense": 250,
    "magics": [{
      "id": 8
    }],
    "magic": 90,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 186,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 374,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 375,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 5",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 272,
    "magics": [{
      "id": 7
    }],
    "magic": 105,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 186
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 375,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 376,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 6",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 272,
    "magics": [{
      "id": 7
    }],
    "magic": 108,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 190
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 376,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 377,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 7",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 272,
    "magics": [{
      "id": 7
    }],
    "magic": 112,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 190
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 377,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 550,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 336,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Water Elf 8",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 550,
    "busy": false,
    "total_defense": 272,
    "magics": [{
      "id": 7
    }],
    "magic": 115,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 190
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 378,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 379,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 1",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 250,
    "total_strength": 50,
    "total_accuracy": 320
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 379,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 380,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 2",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 260,
    "total_strength": 50,
    "total_accuracy": 330
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 380,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 381,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 3",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 275,
    "total_strength": 50,
    "total_accuracy": 350
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 381,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 382,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 4",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 275,
    "total_strength": 50,
    "total_accuracy": 360
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 382,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1100,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 383,
    "respawn_time": 5,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 154,
      "chance": 0.05
    }, {
      "id": 155,
      "chance": 0.05
    }, {
      "id": 302,
      "chance": 0.05
    }, {
      "id": 143,
      "chance": 0.05
    }, {
      "id": 144,
      "chance": 0.05
    }, {
      "id": 303,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.05
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Poseidon",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1100,
    "busy": false,
    "total_defense": 302,
    "magics": [{
      "id": 15
    }],
    "magic": 85,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 190,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 383,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 384,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 5",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 285,
    "total_strength": 50,
    "total_accuracy": 362
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 384,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 385,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 6",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 285,
    "total_strength": 50,
    "total_accuracy": 364
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 385,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 386,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 7",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 285,
    "total_strength": 40,
    "total_accuracy": 367
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 386,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 670,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 337,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Wisp 8",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 670,
    "busy": false,
    "total_defense": 289,
    "total_strength": 40,
    "total_accuracy": 369
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 387,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 388,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 1",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 50,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 388,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 389,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 2",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 54,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 389,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 390,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 3",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 58,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 390,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 391,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 4",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 62,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 391,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1300,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 392,
    "respawn_time": 5,
    "att_anim": 40,
    "drops": [{
      "id": 149,
      "chance": 0.05
    }, {
      "id": 154,
      "chance": 0.05
    }, {
      "id": 155,
      "chance": 0.05
    }, {
      "id": 302,
      "chance": 0.05
    }, {
      "id": 143,
      "chance": 0.05
    }, {
      "id": 144,
      "chance": 0.05
    }, {
      "id": 303,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.1
    }, {
      "id": 178,
      "chance": 0.1
    }, {
      "id": 1305,
      "chance": 0.1
    }, {
      "id": 1127,
      "chance": 0.1
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1286,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 764,
      "chance": 0.05
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 498,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Headless Knight",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1300,
    "busy": false,
    "total_defense": 308,
    "total_strength": 35,
    "total_accuracy": 370,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 392,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 393,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 5",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 66,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 393,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 394,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 6",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 70,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 394,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 395,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 7",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 74,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 395,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 630,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 338,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Swamp Monkey 8",
  "img": {
    "sheet": "45",
    "x": 3,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 630,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 14
    }],
    "magic": 78,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 396,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 397,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 1",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 309,
    "total_strength": 40,
    "total_accuracy": 389
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 397,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 398,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 2",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 309,
    "total_strength": 40,
    "total_accuracy": 394
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 398,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 399,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 3",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 315,
    "total_strength": 40,
    "total_accuracy": 394
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 399,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 400,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 4",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 315,
    "total_strength": 40,
    "total_accuracy": 399
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 400,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 401,
    "respawn_time": 5,
    "att_anim": 40,
    "drops": [{
      "id": 363,
      "chance": 0.05
    }, {
      "id": 932,
      "chance": 0.05
    }, {
      "id": 936,
      "chance": 0.05
    }, {
      "id": 1271,
      "chance": 0.05
    }, {
      "id": 200,
      "chance": 0.05
    }, {
      "id": 198,
      "chance": 0.05
    }, {
      "id": 450,
      "chance": 0.05
    }, {
      "id": 456,
      "chance": 0.05
    }, {
      "id": 482,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.05
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1306,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.05
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 1066,
      "chance": 0.05
    }, {
      "id": 962,
      "chance": 0.05
    }, {
      "id": 969,
      "chance": 0.05
    }, {
      "id": 977,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 1080,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Wood Elf",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 325,
    "total_strength": 40,
    "total_accuracy": 405,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 401,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 402,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 5",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 320,
    "total_strength": 40,
    "total_accuracy": 404
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 402,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 403,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 6",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 320,
    "total_strength": 40,
    "total_accuracy": 409
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 403,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 404,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 7",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 328,
    "total_strength": 40,
    "total_accuracy": 409
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 404,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 790,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 339,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Basilisk 8",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 790,
    "busy": false,
    "total_defense": 335,
    "total_strength": 40,
    "total_accuracy": 409
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 405,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 406,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 1",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 300,
    "magics": [{
      "id": 17
    }],
    "magic": 78,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 406,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 407,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 2",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 304,
    "magics": [{
      "id": 17
    }],
    "magic": 80,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 407,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 408,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 3",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 307,
    "magics": [{
      "id": 17
    }],
    "magic": 83,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 408,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 409,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 4",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 310,
    "magics": [{
      "id": 17
    }],
    "magic": 87,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 409,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1300,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 410,
    "respawn_time": 5,
    "drops": [{
      "id": 363,
      "chance": 0.05
    }, {
      "id": 932,
      "chance": 0.05
    }, {
      "id": 936,
      "chance": 0.05
    }, {
      "id": 1271,
      "chance": 0.05
    }, {
      "id": 200,
      "chance": 0.025
    }, {
      "id": 198,
      "chance": 0.025
    }, {
      "id": 450,
      "chance": 0.05
    }, {
      "id": 456,
      "chance": 0.05
    }, {
      "id": 482,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.05
    }, {
      "id": 179,
      "chance": 0.05
    }, {
      "id": 1306,
      "chance": 0.05
    }, {
      "id": 1128,
      "chance": 0.05
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 129,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 558,
      "chance": 0.1
    }, {
      "id": 807,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.05
    }, {
      "id": 488,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.05
    }, {
      "id": 1066,
      "chance": 0.05
    }, {
      "id": 962,
      "chance": 0.05
    }, {
      "id": 969,
      "chance": 0.05
    }, {
      "id": 977,
      "chance": 0.05
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 1080,
      "chance": 0.05
    }, {
      "id": 163,
      "chance": 0.15
    }]
  },
  "name": "[Elite] Ice Golem",
  "img": {
    "sheet": "45",
    "x": 7,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1300,
    "busy": false,
    "total_defense": 275,
    "magics": [{
      "id": 23
    }],
    "magic": 78,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 410,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 411,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 5",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 310,
    "magics": [{
      "id": 17
    }],
    "magic": 89,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 411,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 412,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 6",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 316,
    "magics": [{
      "id": 17
    }],
    "magic": 89,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 412,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 413,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 7",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 316,
    "magics": [{
      "id": 17
    }],
    "magic": 92,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 413,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 850,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 340,
    "respawn_time": 5,
    "drops": []
  },
  "name": "Crusader 8",
  "img": {
    "sheet": "45",
    "x": 6,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 850,
    "busy": false,
    "total_defense": 318,
    "magics": [{
      "id": 17
    }],
    "magic": 94,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 414,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 415,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 1",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 530,
    "total_strength": 40,
    "total_accuracy": 430,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 415,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 416,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 2",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 535,
    "total_strength": 40,
    "total_accuracy": 435,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 416,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 417,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 3",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 540,
    "total_strength": 40,
    "total_accuracy": 440,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 417,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 418,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 4",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 540,
    "total_strength": 40,
    "total_accuracy": 455,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 418,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1700,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 419,
    "respawn_time": 5,
    "drops": [{
      "id": 483,
      "chance": 0.05
    }, {
      "id": 451,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 462,
      "chance": 0.05
    }, {
      "id": 1687,
      "chance": 0.05
    }, {
      "id": 664,
      "chance": 0.05
    }, {
      "id": 661,
      "chance": 0.05
    }, {
      "id": 379,
      "chance": 0.08
    }, {
      "id": 440,
      "chance": 0.05
    }, {
      "id": 394,
      "chance": 0.05
    }, {
      "id": 430,
      "chance": 0.05
    }, {
      "id": 375,
      "chance": 0.08
    }, {
      "id": 618,
      "chance": 0.05
    }, {
      "id": 666,
      "chance": 0.05
    }, {
      "id": 968,
      "chance": 0.025
    }, {
      "id": 175,
      "chance": 0.08
    }, {
      "id": 179,
      "chance": 0.08
    }, {
      "id": 1306,
      "chance": 0.08
    }, {
      "id": 1128,
      "chance": 0.08
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 364,
      "chance": 0.05
    }, {
      "id": 974,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 1032,
      "chance": 0.1
    }, {
      "id": 392,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.08
    }, {
      "id": 812,
      "chance": 0.05
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.08
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 1080,
      "chance": 0.08
    }, {
      "id": 972,
      "chance": 0.1
    }]
  },
  "name": "[Elite] Lava Golem",
  "img": {
    "sheet": "45",
    "x": 0,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1700,
    "busy": false,
    "total_defense": 360,
    "magics": [{
      "id": 21
    }],
    "magic": 110,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 419,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 420,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 5",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 550,
    "total_strength": 40,
    "total_accuracy": 455,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 420,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 421,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 6",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 550,
    "total_strength": 40,
    "total_accuracy": 460,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 421,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 422,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 7",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 550,
    "total_strength": 45,
    "total_accuracy": 460,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 422,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1000,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 341,
    "respawn_time": 5,
    "att_anim": 42,
    "drops": []
  },
  "name": "Defender 8",
  "img": {
    "sheet": "45",
    "x": 8,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1000,
    "busy": false,
    "total_defense": 550,
    "total_strength": 50,
    "total_accuracy": 460,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 423,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 424,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 1",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 500,
    "total_strength": 60,
    "total_accuracy": 620,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 424,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 425,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 2",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 505,
    "total_strength": 62,
    "total_accuracy": 630,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 425,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 426,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 3",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 510,
    "total_strength": 64,
    "total_accuracy": 636,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 426,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 427,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 4",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 513,
    "total_strength": 64,
    "total_accuracy": 640,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 427,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1900,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 428,
    "respawn_time": 5,
    "drops": [{
      "id": 483,
      "chance": 0.05
    }, {
      "id": 451,
      "chance": 0.05
    }, {
      "id": 454,
      "chance": 0.05
    }, {
      "id": 462,
      "chance": 0.05
    }, {
      "id": 1687,
      "chance": 0.05
    }, {
      "id": 664,
      "chance": 0.05
    }, {
      "id": 661,
      "chance": 0.05
    }, {
      "id": 379,
      "chance": 0.08
    }, {
      "id": 440,
      "chance": 0.05
    }, {
      "id": 394,
      "chance": 0.05
    }, {
      "id": 430,
      "chance": 0.05
    }, {
      "id": 375,
      "chance": 0.08
    }, {
      "id": 618,
      "chance": 0.05
    }, {
      "id": 666,
      "chance": 0.05
    }, {
      "id": 968,
      "chance": 0.05
    }, {
      "id": 175,
      "chance": 0.08
    }, {
      "id": 179,
      "chance": 0.08
    }, {
      "id": 1306,
      "chance": 0.08
    }, {
      "id": 1128,
      "chance": 0.08
    }, {
      "id": 952,
      "chance": 0.05
    }, {
      "id": 1293,
      "chance": 0.05
    }, {
      "id": 389,
      "chance": 0.05
    }, {
      "id": 364,
      "chance": 0.05
    }, {
      "id": 974,
      "chance": 0.05
    }, {
      "id": 765,
      "chance": 0.1
    }, {
      "id": 1032,
      "chance": 0.1
    }, {
      "id": 392,
      "chance": 0.05
    }, {
      "id": 808,
      "chance": 0.08
    }, {
      "id": 812,
      "chance": 0.05
    }, {
      "id": 500,
      "chance": 0.08
    }, {
      "id": 1601,
      "chance": 0.05
    }, {
      "id": 1579,
      "chance": 0.05
    }, {
      "id": 182,
      "chance": 0.08
    }, {
      "id": 1074,
      "chance": 0.08
    }, {
      "id": 1080,
      "chance": 0.08
    }, {
      "id": 972,
      "chance": 0.1
    }]
  },
  "name": "[Elite] Demon Unicorn",
  "img": {
    "sheet": "45",
    "x": 9,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1900,
    "busy": false,
    "total_defense": 360,
    "magics": [{
      "id": 25
    }],
    "magic": 110,
    "cooldown": 0.8,
    "total_strength": 1,
    "total_accuracy": 250,
    "magic_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 428,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 429,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 5",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 513,
    "total_strength": 60,
    "total_accuracy": 650,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 429,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 430,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 6",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 513,
    "total_strength": 60,
    "total_accuracy": 660,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 430,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 431,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 7",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 513,
    "total_strength": 58,
    "total_accuracy": 665,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 431,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 1500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 342,
    "respawn_time": 5,
    "att_anim": 38,
    "drops": []
  },
  "name": "Gladiator 8",
  "img": {
    "sheet": "45",
    "x": 1,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1500,
    "busy": false,
    "total_defense": 513,
    "total_strength": 55,
    "total_accuracy": 670,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 432,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 320,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "next_cathedral_npc_id": 334,
    "respawn_time": 5,
    "att_anim": 46,
    "drops": []
  },
  "name": "Dragonbat 8",
  "img": {
    "sheet": "45",
    "x": 5,
    "y": 1
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 320,
    "busy": false,
    "total_defense": 195,
    "total_strength": 20,
    "total_accuracy": 229
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 433,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Survivor",
  "img": {
    "hash": "0 0 46 30 72 2 1 37 111 10 19 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 95,
      "count": 20,
      "spawn": true
    }, {
      "id": 93,
      "count": 20,
      "spawn": true
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 434,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 500,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "no_dungeon": true,
    "respawn_time": 5,
    "drops": [{
      "id": 1033,
      "chance": 1
    }]
  },
  "name": "Gate",
  "img": {
    "sheet": "1",
    "x": 2,
    "y": 10
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 500,
    "busy": false,
    "total_defense": 500,
    "magics": [{
      "id": 17
    }],
    "magic": 89,
    "cooldown": 0.8,
    "total_accuracy": 999,
    "magic_block": 75,
    "melee_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 435,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 65,
    "radius": 9,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 242,
      "chance": 0.8
    }],
    "combat_level": 102
  },
  "name": "Orange shroom",
  "img": {
    "sheet": "52",
    "x": 3,
    "y": 2
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 65,
    "busy": false,
    "total_defense": 70,
    "total_strength": 25,
    "total_accuracy": 250
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 436,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Cow",
  "img": {
    "sheet": "34",
    "x": 3,
    "y": 0
  },
  "type": 4,
  "activities": ["Talk", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": []
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 437,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 80,
    "radius": 9,
    "no_dungeon": true,
    "move_radius": 10,
    "aggressive": false,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 494,
      "chance": 0.15
    }, {
      "id": 1031,
      "chance": 0.003
    }]
  },
  "name": "Cow King",
  "img": {
    "hash": "72 0 129 100 2 50 23 0 251 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 80,
    "busy": false,
    "total_defense": 75,
    "total_strength": 75,
    "total_accuracy": 75
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 438,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Wittensten Fishing Master",
  "img": {
    "hash": "18 0 44 26 72 2 0 0 80 0 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 122,
      "count": 0
    }, {
      "id": 123,
      "count": 0
    }, {
      "id": 1384,
      "count": 0
    }, {
      "id": 1385,
      "count": 0
    }, {
      "id": 1378,
      "count": 0
    }, {
      "id": 1379,
      "count": 0
    }, {
      "id": 1380,
      "count": 0
    }, {
      "id": 1372,
      "count": 0
    }, {
      "id": 1373,
      "count": 0
    }, {
      "id": 116,
      "count": 0
    }, {
      "id": 117,
      "count": 0
    }, {
      "id": 1374,
      "count": 0
    }, {
      "id": 1375,
      "count": 0
    }, {
      "id": 114,
      "count": 0
    }, {
      "id": 115,
      "count": 0
    }, {
      "id": 120,
      "count": 0
    }, {
      "id": 121,
      "count": 0
    }, {
      "id": 1392,
      "count": 0
    }, {
      "id": 1393,
      "count": 0
    }, {
      "id": 1394,
      "count": 0
    }, {
      "id": 1395,
      "count": 0
    }, {
      "id": 112,
      "count": 0
    }, {
      "id": 113,
      "count": 0
    }, {
      "id": 118,
      "count": 0
    }, {
      "id": 119,
      "count": 0
    }, {
      "id": 1386,
      "count": 0
    }, {
      "id": 1387,
      "count": 0
    }, {
      "id": 1388,
      "count": 0
    }, {
      "id": 1389,
      "count": 0
    }, {
      "id": 1381,
      "count": 0
    }, {
      "id": 1382,
      "count": 0
    }, {
      "id": 1383,
      "count": 0
    }, {
      "id": 1390,
      "count": 0
    }, {
      "id": 1391,
      "count": 0
    }, {
      "id": 1376,
      "count": 0
    }, {
      "id": 1377,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 439,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Moche Shopkeeper",
  "img": {
    "hash": "18 0 81 52 72 0 1 33 0 39 0 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 6,
      "count": 35,
      "spawn": true
    }, {
      "id": 5,
      "count": 2,
      "spawn": true
    }, {
      "id": 21,
      "count": 2,
      "spawn": true
    }, {
      "id": 47,
      "count": 0
    }, {
      "id": 20,
      "count": 0
    }, {
      "id": 260,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 440,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Moche Blacksmith",
  "img": {
    "hash": "18 0 16 66 72 0 0 0 181 17 6 6"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 36,
      "count": 5,
      "spawn": true
    }, {
      "id": 23,
      "count": 5,
      "spawn": true
    }, {
      "id": 31,
      "count": 25,
      "spawn": true
    }, {
      "id": 50,
      "count": 0
    }, {
      "id": 254,
      "count": 0
    }, {
      "id": 173,
      "count": 0
    }, {
      "id": 177,
      "count": 0
    }, {
      "id": 932,
      "count": 5,
      "spawn": true
    }, {
      "id": 933,
      "count": 0
    }, {
      "id": 934,
      "count": 0
    }, {
      "id": 935,
      "count": 0
    }, {
      "id": 936,
      "count": 0
    }, {
      "id": 937,
      "count": 0
    }, {
      "id": 938,
      "count": 5,
      "spawn": true
    }, {
      "id": 939,
      "count": 0
    }, {
      "id": 940,
      "count": 0
    }, {
      "id": 941,
      "count": 0
    }, {
      "id": 942,
      "count": 0
    }, {
      "id": 943,
      "count": 0
    }, {
      "id": 944,
      "count": 0
    }, {
      "id": 945,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 441,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99
  },
  "name": "Moche Alchemist",
  "img": {
    "hash": "18 0 64 48 72 1 0 0 61 0 0 7"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [{
      "id": 1016,
      "count": 10,
      "spawn": true
    }, {
      "id": 260,
      "count": 0
    }, {
      "id": 206,
      "count": 0
    }, {
      "id": 233,
      "count": 0
    }, {
      "id": 261,
      "count": 0
    }, {
      "id": 269,
      "count": 0
    }, {
      "id": 275,
      "count": 0
    }, {
      "id": 1433,
      "count": 0
    }, {
      "id": 1434,
      "count": 0
    }, {
      "id": 1435,
      "count": 0
    }, {
      "id": 246,
      "count": 0
    }]
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 442,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 99,
    "desc": "She buys all your items for 10% of their value"
  },
  "name": "Moche General Shopkeeper",
  "img": {
    "hash": "33 0 63 37 72 0 0 0 0 0 0 0"
  },
  "type": 4,
  "activities": ["Trade with", "Inspect"],
  "temp": {
    "health": 99,
    "total_defense": 99,
    "total_strength": 99,
    "total_accuracy": 99,
    "content": [],
    "general": 0.1
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 443,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 106,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 134,
      "chance": 0.001
    }, {
      "id": 92,
      "chance": 0.1
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 133,
      "chance": 0.0025
    }, {
      "id": 370,
      "chance": 0.005
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 300,
      "chance": 0.0025
    }, {
      "id": 166,
      "chance": 0.0025
    }, {
      "id": 215,
      "chance": 0.05
    }],
    "combat_level": 121
  },
  "name": "Dracula",
  "img": {
    "hash": "86 0 48 17 5 0 0 0 0 0 11 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 106,
    "busy": false,
    "total_defense": 158,
    "total_strength": 50,
    "total_accuracy": 170,
    "melee_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 444,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 115,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 46,
    "drops": [{
      "id": 134,
      "chance": 0.001
    }, {
      "id": 92,
      "chance": 0.1
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 377,
      "chance": 0.0025
    }, {
      "id": 370,
      "chance": 0.005
    }, {
      "id": 855,
      "chance": 0.002
    }, {
      "id": 1351,
      "chance": 0.0025
    }, {
      "id": 173,
      "chance": 0.005
    }, {
      "id": 300,
      "chance": 0.0025
    }, {
      "id": 166,
      "chance": 0.0025
    }, {
      "id": 215,
      "chance": 0.05
    }, {
      "id": 161,
      "chance": 0.0025
    }, {
      "id": 1125,
      "chance": 0.005
    }, {
      "id": 1303,
      "chance": 0.005
    }, {
      "id": 176,
      "chance": 0.005
    }],
    "combat_level": 128
  },
  "name": "Dracula's Messenger",
  "img": {
    "hash": "90 0 48 17 5 30 16 60 0 0 11 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 115,
    "busy": false,
    "total_defense": 157,
    "total_strength": 40,
    "total_accuracy": 200,
    "melee_block": 25,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 445,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 72,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 201,
      "chance": 0.0025
    }, {
      "id": 49,
      "chance": 0.005
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 92,
      "chance": 0.003
    }],
    "combat_level": 84
  },
  "name": "Undead Demon",
  "img": {
    "hash": "90 0 96 96 15 30 15 0 95 0 11 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 72,
    "busy": false,
    "total_defense": 100,
    "total_strength": 34,
    "total_accuracy": 130,
    "melee_block": 15,
    "magic_block": 15
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 446,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 72,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 201,
      "chance": 0.0025
    }, {
      "id": 49,
      "chance": 0.005
    }, {
      "id": 1906,
      "chance": 0.0025
    }, {
      "id": 1903,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 202,
      "chance": 0.005
    }, {
      "id": 271,
      "chance": 0.01
    }, {
      "id": 92,
      "chance": 0.003
    }],
    "combat_level": 89
  },
  "name": "Hell Demon",
  "img": {
    "hash": "90 0 96 96 40 31 15 0 96 0 11 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 72,
    "busy": false,
    "total_defense": 110,
    "total_strength": 44,
    "total_accuracy": 130,
    "melee_block": 15,
    "magic_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 447,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 1200,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 363,
      "chance": 0.05
    }, {
      "id": 1904,
      "chance": 0.05
    }, {
      "id": 1901,
      "chance": 0.05
    }, {
      "id": 1907,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 174,
      "chance": 0.05
    }, {
      "id": 178,
      "chance": 0.05
    }, {
      "id": 190,
      "chance": 0.05
    }, {
      "id": 194,
      "chance": 0.005
    }, {
      "id": 202,
      "chance": 0.03
    }, {
      "id": 203,
      "chance": 0.03
    }, {
      "id": 258,
      "chance": 0.04
    }, {
      "id": 1127,
      "chance": 0.05
    }, {
      "id": 1626,
      "chance": 0.04
    }, {
      "id": 1305,
      "chance": 0.05
    }, {
      "id": 167,
      "chance": 0.05
    }, {
      "id": 651,
      "chance": 0.03
    }, {
      "id": 481,
      "chance": 0.06
    }, {
      "id": 497,
      "chance": 0.07
    }, {
      "id": 710,
      "chance": 0.015
    }, {
      "id": 593,
      "chance": 0.015
    }, {
      "id": 476,
      "chance": 0.025
    }],
    "combat_level": 470
  },
  "name": "[BOSS] Demon Overlord",
  "img": {
    "hash": "90 0 96 96 28 30 15 0 136 8 11 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 1200,
    "busy": false,
    "total_defense": 235,
    "total_strength": 70,
    "total_accuracy": 375
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 448,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 96,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 221,
      "chance": 0.02
    }, {
      "id": 49,
      "chance": 0.025
    }, {
      "id": 143,
      "chance": 0.025
    }, {
      "id": 1900,
      "chance": 0.025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 228,
      "chance": 0.1
    }, {
      "id": 74,
      "chance": 0.08
    }],
    "combat_level": 98
  },
  "name": "Mutated Knight",
  "img": {
    "hash": "0 0 96 99 0 26 13 0 137 6 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 96,
    "busy": false,
    "total_defense": 16,
    "total_strength": 80,
    "total_accuracy": 200,
    "magic_block": 50,
    "melee_block": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 449,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 126,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 221,
      "chance": 0.02
    }, {
      "id": 49,
      "chance": 0.025
    }, {
      "id": 808,
      "chance": 0.025
    }, {
      "id": 809,
      "chance": 0.025
    }, {
      "id": 143,
      "chance": 0.025
    }, {
      "id": 1900,
      "chance": 0.025
    }, {
      "id": 1909,
      "chance": 0.025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 228,
      "chance": 0.1
    }, {
      "id": 74,
      "chance": 0.08
    }],
    "combat_level": 119
  },
  "name": "Mutated Baron",
  "img": {
    "hash": "0 0 94 99 0 28 14 61 150 6 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 126,
    "busy": false,
    "total_defense": 50,
    "total_strength": 50,
    "total_accuracy": 250,
    "magic_block": 60,
    "melee_block": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 450,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 180,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 221,
      "chance": 0.02
    }, {
      "id": 808,
      "chance": 0.025
    }, {
      "id": 809,
      "chance": 0.025
    }, {
      "id": 143,
      "chance": 0.025
    }, {
      "id": 1900,
      "chance": 0.025
    }, {
      "id": 291,
      "chance": 0.025
    }, {
      "id": 305,
      "chance": 0.025
    }, {
      "id": 1909,
      "chance": 0.025
    }, {
      "id": 1906,
      "chance": 0.025
    }, {
      "id": 225,
      "chance": 0.005
    }, {
      "id": 228,
      "chance": 0.1
    }, {
      "id": 74,
      "chance": 0.08
    }],
    "combat_level": 145
  },
  "name": "Mutated Earl",
  "img": {
    "hash": "0 0 95 99 0 26 13 61 189 15 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 180,
    "busy": false,
    "total_defense": 50,
    "total_strength": 50,
    "total_accuracy": 300,
    "magic_block": 70,
    "melee_block": 70
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 451,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 120,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 298,
      "chance": 0.0025
    }, {
      "id": 1065,
      "chance": 0.0015
    }, {
      "id": 376,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 180,
      "chance": 0.0025
    }, {
      "id": 217,
      "chance": 0.05
    }, {
      "id": 207,
      "chance": 0.1
    }, {
      "id": 216,
      "chance": 0.01
    }],
    "combat_level": 155
  },
  "name": "Royal Cyclops",
  "img": {
    "hash": "60 0 78 99 0 28 14 12 205 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 120,
    "busy": false,
    "total_defense": 200,
    "total_strength": 50,
    "total_accuracy": 250,
    "magic_block": 15,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 452,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 186,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 298,
      "chance": 0.0025
    }, {
      "id": 1065,
      "chance": 0.0015
    }, {
      "id": 376,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 180,
      "chance": 0.0025
    }, {
      "id": 217,
      "chance": 0.05
    }, {
      "id": 207,
      "chance": 0.1
    }, {
      "id": 216,
      "chance": 0.01
    }],
    "combat_level": 139
  },
  "name": "Cyclops Battlemage",
  "img": {
    "hash": "60 0 89 99 0 27 13 51 234 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 186,
    "busy": false,
    "magics": [{
      "id": 9
    }],
    "magic": 100,
    "total_defense": 150,
    "total_strength": 40,
    "total_accuracy": 180,
    "magic_block": 15,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 453,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 240,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 108,
      "chance": 0.02
    }, {
      "id": 469,
      "chance": 0.0025
    }, {
      "id": 258,
      "chance": 0.05
    }, {
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 378,
      "chance": 0.0025
    }, {
      "id": 129,
      "chance": 0.0025
    }, {
      "id": 467,
      "chance": 0.0025
    }, {
      "id": 248,
      "chance": 0.05
    }, {
      "id": 194,
      "chance": 0.01
    }],
    "combat_level": 247
  },
  "name": "Burning Cyclops",
  "img": {
    "hash": "60 0 83 109 62 49 30 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 240,
    "busy": false,
    "magics": [{
      "id": 16
    }],
    "magic": 200,
    "total_defense": 400,
    "total_strength": 50,
    "total_accuracy": 300,
    "magic_block": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 454,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 300,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 110,
      "chance": 0.02
    }, {
      "id": 469,
      "chance": 0.0025
    }, {
      "id": 258,
      "chance": 0.05
    }, {
      "id": 169,
      "chance": 0.0025
    }, {
      "id": 378,
      "chance": 0.0025
    }, {
      "id": 129,
      "chance": 0.0025
    }, {
      "id": 467,
      "chance": 0.0025
    }, {
      "id": 248,
      "chance": 0.05
    }, {
      "id": 1907,
      "chance": 0.01
    }, {
      "id": 1909,
      "chance": 0.0025
    }, {
      "id": 194,
      "chance": 0.01
    }],
    "combat_level": 297
  },
  "name": "Burning Cyclops Lord",
  "img": {
    "hash": "60 0 89 109 53 49 30 0 0 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 300,
    "busy": false,
    "magics": [{
      "id": 16
    }],
    "magic": 200,
    "total_defense": 460,
    "total_strength": 80,
    "total_accuracy": 350,
    "magic_block": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 455,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 330,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 1661,
      "chance": 0.0015
    }, {
      "id": 1707,
      "chance": 0.0025
    }, {
      "id": 1582,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 1602,
      "chance": 0.0015
    }],
    "combat_level": 355
  },
  "name": "Demonic Minotaur",
  "img": {
    "hash": "59 0 100 74 28 28 13 0 134 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 330,
    "busy": false,
    "total_defense": 500,
    "total_strength": 100,
    "total_accuracy": 490,
    "magic_block": 35,
    "melee_block": 35
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 456,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 580,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 947,
      "chance": 0.0015
    }, {
      "id": 1684,
      "chance": 0.0015
    }, {
      "id": 1707,
      "chance": 0.0025
    }, {
      "id": 1582,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 1449,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 1602,
      "chance": 0.0015
    }],
    "combat_level": 390
  },
  "name": "Death Guardian",
  "img": {
    "hash": "59 0 104 76 32 26 13 0 123 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 580,
    "busy": false,
    "total_defense": 350,
    "total_strength": 50,
    "total_accuracy": 580,
    "magic_block": 45,
    "melee_block": 45
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 457,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 38540,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 44,
    "drops": [{
      "id": 175,
      "chance": 0.06
    }, {
      "id": 179,
      "chance": 0.06
    }, {
      "id": 1128,
      "chance": 0.06
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 1068,
      "chance": 0.01
    }, {
      "id": 1687,
      "chance": 0.02
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 1697,
      "chance": 0.02
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 972,
      "chance": 0.02
    }, {
      "id": 974,
      "chance": 0.02
    }, {
      "id": 1702,
      "chance": 0.01
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 1032,
      "chance": 0.02
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 1306,
      "chance": 0.06
    }, {
      "id": 183,
      "chance": 0.03
    }, {
      "id": 478,
      "chance": 0.05
    }, {
      "id": 1682,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 584,
      "chance": 0.03
    }, {
      "id": 624,
      "chance": 0.02
    }, {
      "id": 649,
      "chance": 0.03
    }, {
      "id": 593,
      "chance": 0.05
    }],
    "combat_level": 10000
  },
  "name": "[BOSS] Blood Eagle",
  "img": {
    "sheet": "37",
    "x": 9,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38540,
    "busy": false,
    "magics": [{
      "id": 32
    }],
    "magic": 800,
    "total_defense": 642,
    "total_strength": 70,
    "total_accuracy": 750,
    "cooldown": 0.45,
    "magic_block": 25,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 458,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "multi_combat": true,
    "health": 38430,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 175,
      "chance": 0.06
    }, {
      "id": 179,
      "chance": 0.06
    }, {
      "id": 1128,
      "chance": 0.06
    }, {
      "id": 1626,
      "chance": 0.05
    }, {
      "id": 1602,
      "chance": 0.02
    }, {
      "id": 1606,
      "chance": 0.02
    }, {
      "id": 966,
      "chance": 0.01
    }, {
      "id": 1687,
      "chance": 0.02
    }, {
      "id": 1610,
      "chance": 0.02
    }, {
      "id": 1614,
      "chance": 0.02
    }, {
      "id": 1697,
      "chance": 0.02
    }, {
      "id": 964,
      "chance": 0.02
    }, {
      "id": 972,
      "chance": 0.02
    }, {
      "id": 1938,
      "chance": 0.01
    }, {
      "id": 974,
      "chance": 0.02
    }, {
      "id": 1702,
      "chance": 0.01
    }, {
      "id": 1455,
      "chance": 0.02
    }, {
      "id": 1032,
      "chance": 0.02
    }, {
      "id": 1467,
      "chance": 0.02
    }, {
      "id": 1487,
      "chance": 0.02
    }, {
      "id": 1502,
      "chance": 0.02
    }, {
      "id": 1639,
      "chance": 0.02
    }, {
      "id": 1953,
      "chance": 0.01
    }, {
      "id": 1306,
      "chance": 0.06
    }, {
      "id": 1457,
      "chance": 0.02
    }, {
      "id": 478,
      "chance": 0.05
    }, {
      "id": 1682,
      "chance": 0.05
    }, {
      "id": 982,
      "chance": 0.05
    }, {
      "id": 710,
      "chance": 0.03
    }, {
      "id": 584,
      "chance": 0.03
    }, {
      "id": 624,
      "chance": 0.02
    }, {
      "id": 649,
      "chance": 0.03
    }, {
      "id": 593,
      "chance": 0.05
    }],
    "combat_level": 10015
  },
  "name": "[BOSS] Titan Minotaur",
  "img": {
    "sheet": "37",
    "x": 8,
    "y": 3
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 38430,
    "busy": false,
    "total_defense": 732,
    "total_strength": 90,
    "total_accuracy": 810,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 459,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 160,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 298,
      "chance": 0.0025
    }, {
      "id": 1065,
      "chance": 0.0015
    }, {
      "id": 376,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 1600,
      "chance": 0.0015
    }, {
      "id": 217,
      "chance": 0.05
    }, {
      "id": 207,
      "chance": 0.1
    }, {
      "id": 216,
      "chance": 0.01
    }],
    "combat_level": 170
  },
  "name": "Cyclops Ghost",
  "img": {
    "hash": "60 0 102 96 0 26 13 0 20 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 160,
    "busy": false,
    "total_defense": 230,
    "total_strength": 50,
    "total_accuracy": 240
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 460,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 250,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 659,
      "chance": 0.0025
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 480,
      "chance": 0.0025
    }, {
      "id": 1697,
      "chance": 0.0015
    }, {
      "id": 86,
      "chance": 0.03
    }, {
      "id": 194,
      "chance": 0.002
    }, {
      "id": 195,
      "chance": 0.0025
    }, {
      "id": 1014,
      "chance": 0.0025
    }, {
      "id": 1015,
      "chance": 0.01
    }, {
      "id": 787,
      "chance": 0.01
    }],
    "combat_level": 277
  },
  "name": "Soul Eater",
  "img": {
    "hash": "69 0 104 96 49 26 13 0 20 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 250,
    "busy": false,
    "total_defense": 350,
    "total_strength": 130,
    "total_accuracy": 380,
    "magic_block": 10
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 461,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 200,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 198,
      "chance": 0.01
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 298,
      "chance": 0.0025
    }, {
      "id": 1065,
      "chance": 0.0015
    }, {
      "id": 376,
      "chance": 0.0025
    }, {
      "id": 1126,
      "chance": 0.005
    }, {
      "id": 1602,
      "chance": 0.0015
    }, {
      "id": 217,
      "chance": 0.05
    }, {
      "id": 207,
      "chance": 0.1
    }, {
      "id": 216,
      "chance": 0.01
    }],
    "combat_level": 187
  },
  "name": "Death Shadow",
  "img": {
    "hash": "69 0 83 96 41 28 13 73 70 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 200,
    "busy": false,
    "magics": [{
      "id": 16
    }],
    "magic": 100,
    "total_defense": 250,
    "total_strength": 50,
    "total_accuracy": 250,
    "melee_block": 50
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 462,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 220,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 364,
      "chance": 0.0025
    }, {
      "id": 157,
      "chance": 0.0025
    }, {
      "id": 90,
      "chance": 0.02
    }, {
      "id": 981,
      "chance": 0.003
    }, {
      "id": 52,
      "chance": 0.0025
    }, {
      "id": 152,
      "chance": 0.0025
    }, {
      "id": 1012,
      "chance": 0.01
    }, {
      "id": 327,
      "chance": 0.0025
    }, {
      "id": 324,
      "chance": 0.0025
    }, {
      "id": 1599,
      "chance": 0.0025
    }, {
      "id": 1697,
      "chance": 0.0015
    }],
    "combat_level": 215
  },
  "name": "Death Energy",
  "img": {
    "hash": "69 0 79 96 28 28 13 73 220 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 220,
    "busy": false,
    "magics": [{
      "id": 17
    }],
    "magic": 200,
    "total_defense": 300,
    "total_strength": 40,
    "total_accuracy": 300,
    "magic_block": 25,
    "melee_block": 25
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 463,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 450,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 947,
      "chance": 0.0015
    }, {
      "id": 396,
      "chance": 0.0025
    }, {
      "id": 397,
      "chance": 0.0025
    }, {
      "id": 398,
      "chance": 0.0025
    }, {
      "id": 39,
      "chance": 0.0025
    }, {
      "id": 1707,
      "chance": 0.0025
    }, {
      "id": 1614,
      "chance": 0.0025
    }, {
      "id": 1582,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 1449,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 1489,
      "chance": 0.0025
    }, {
      "id": 1602,
      "chance": 0.0015
    }],
    "combat_level": 350
  },
  "name": "Dragon Hunter",
  "img": {
    "hash": "59 0 52 98 70 28 13 64 42 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 450,
    "busy": false,
    "total_defense": 330,
    "total_strength": 170,
    "total_accuracy": 450,
    "melee_block": 60
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 464,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 450,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 40,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 947,
      "chance": 0.0015
    }, {
      "id": 1606,
      "chance": 0.0025
    }, {
      "id": 1707,
      "chance": 0.0025
    }, {
      "id": 1582,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 1453,
      "chance": 0.0015
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 1455,
      "chance": 0.0015
    }],
    "combat_level": 350
  },
  "name": "Blood Minotaur",
  "img": {
    "hash": "59 0 96 98 71 26 13 0 190 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 450,
    "busy": false,
    "total_defense": 300,
    "total_strength": 200,
    "total_accuracy": 450,
    "melee_block": 20,
    "magic_block": 20
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 465,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 450,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "att_anim": 38,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 947,
      "chance": 0.0015
    }, {
      "id": 1469,
      "chance": 0.0025
    }, {
      "id": 1707,
      "chance": 0.0025
    }, {
      "id": 327,
      "chance": 0.0025
    }, {
      "id": 1582,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 1449,
      "chance": 0.0025
    }, {
      "id": 328,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 183,
      "chance": 0.0025
    }, {
      "id": 1602,
      "chance": 0.0015
    }],
    "combat_level": 340
  },
  "name": "Holy Minotaur",
  "img": {
    "hash": "59 0 110 98 67 26 13 0 201 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 450,
    "busy": false,
    "total_defense": 300,
    "total_strength": 100,
    "total_accuracy": 510,
    "magic_block": 40
  },
  "fn": {},
  "blocking": true
}, {
  "id": -1,
  "b_i": 466,
  "b_t": "4",
  "i": -1,
  "j": -1,
  "params": {
    "health": 450,
    "radius": 9,
    "move_radius": 10,
    "aggressive": true,
    "speed": 100,
    "drops": [{
      "id": 100,
      "chance": 0.02
    }, {
      "id": 1031,
      "chance": 0.0015
    }, {
      "id": 436,
      "chance": 0.0025
    }, {
      "id": 1643,
      "chance": 0.0015
    }, {
      "id": 951,
      "chance": 0.0025
    }, {
      "id": 1684,
      "chance": 0.0015
    }, {
      "id": 1707,
      "chance": 0.0025
    }, {
      "id": 1582,
      "chance": 0.0025
    }, {
      "id": 616,
      "chance": 0.0025
    }, {
      "id": 1449,
      "chance": 0.0025
    }, {
      "id": 1404,
      "chance": 0.0025
    }, {
      "id": 905,
      "chance": 0.0025
    }, {
      "id": 1645,
      "chance": 0.0025
    }, {
      "id": 1610,
      "chance": 0.0015
    }],
    "combat_level": 340
  },
  "name": "Ice Minotaur",
  "img": {
    "hash": "59 0 112 98 68 28 13 73 215 0 0 0"
  },
  "type": 3,
  "activities": ["Attack", "Inspect"],
  "temp": {
    "health": 450,
    "busy": false,
    "magics": [{
      "id": 33
    }],
    "magic": 100,
    "total_defense": 300,
    "total_strength": 100,
    "total_accuracy": 510,
    "magic_block": 50
  },
  "fn": {},
  "blocking": true
}]


var IMAGE_SHEET = {
  "1": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgiso32_anvil.gif?f61f376221c3fe1dea3f4bb8c39207f2rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "2": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/ground.gif?30b533254c058f47580c3124c2412d85rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 34,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 17
  },
  "3": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/townactions.gif?d2cabb3b664c5c76559f5b7b99e1dcbarpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "4": {
    "url": "https://1239889624.rsc.cdn77.org/gui.png?b5e9e0f058021a7bc8208462effe8004rpg.mo.ee",
    "tile_width": 854,
    "tile_height": 24,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 427,
    "tile_half_height_floor": 12
  },
  "5": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgweapon32.gif?81e225ef3de2f587fa7ab3896d21c506rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "6": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_armor32.gif?e08751280df8e9bdd01c4e40aa2b08afrpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "7": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_food32.gif?854d8e1eb2ec3ea7258b6a2a5c8590e3rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "8": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/tools.gif?2608d40bd7b7819c585bb8f198b6a186rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "9": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/fish_new32.gif?7cc807d2c52911c282d6f78a8dad2827rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "10": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgmisc32.gif?8d67a4167baf31ccf7f38f17ad3c3e92rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "11": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_jewls32.gif?677f120da51c1accc52e4a1ff75895b8rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "12": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/big_stuff.gif?5e2a64a066d8d049cfa797ffd403e65frpg.mo.ee",
    "tile_width": 54,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 32
  },
  "13": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_dragon32.gif?3126ec8f0a0a4d819c8fd5868c5568b6rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "14": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_monster732.gif?1d83cd94fa15a0b7124db3c88dfc01f5rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "15": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_uniques32.gif?96298a798beeb7bda53e8ccc4592e669rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "16": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/alchemyitems2.gif?186013859984e4effce0e2f98e37c95frpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "17": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_monster532.gif?fee48d8a692498521f20c2b8051cfe91rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "18": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_monster332.gif?7f655fead6c6683c6b6c07b8f8ad1e35rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "19": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/heads.gif?95faece78ccfec7db3e0b54c65611642rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "20": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/facial_hair.gif?1b389be5a4f135a351c31be20ce01b98rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "21": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/bodys.gif?38be12b157c099ce1ca7ab16641e1c1brpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "22": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/pants.gif?8837711e176db44f23cbceaac958ca6crpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "23": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/capes.gif?b6b99b93dd53b00593667103925418f4rpg.mo.ee",
    "tile_width": 64,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 32,
    "tile_half_height_floor": 32
  },
  "24": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/left_hands.gif?df8a79feebde2d266723af805596e1adrpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "25": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/right_hands.gif?f85cd9b933485a062b9e58420dc5884arpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "26": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/shields.gif?595d4867fed08d5ea32f474bdb5c9a83rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "27": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/weapons.gif?b9c01f69677b64aaf86bf8815fdae2dcrpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "28": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/helmets.gif?e3479a12e54ce8161e54cf514716be67rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "29": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/boots.gif?87ba9a3a6addb57c75833f07fac84488rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "30": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/magic.gif?a574113fc8cb0561ef7832f47cdce37arpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "31": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/mspell.gif?b5935341a8a9573bea672642886ca352rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "32": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/sicos.gif?3a49127a54e8383ed92fcd22438e8a89rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "33": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/mweapons.gif?f568811d9caac7ba9049559e2c8a0ad7rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "34": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/animals.gif?c6fe6b90dea1ae0d769db4a17a98d6ffrpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "35": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/newworld2.gif?0d1827c3f861deb381b2ce18b5094204rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "36": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/ground_tops.gif?a55dadc6afeb2aa6f7f675c9ce65bd94rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "37": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/boss.gif?88bbf0eb9415979d89e721022e4e135erpg.mo.ee",
    "tile_width": 64,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 32,
    "tile_half_height_floor": 32
  },
  "38": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/pets.gif?ce81f547b81fccfc0f93525b0cb36bd5rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "39": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/pots_crates.gif?6638d2f1c06f95bccfbc7473f03ae434rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "40": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/big_pyramid.gif?5a98089c5906eb4d729986654a44bdd5rpg.mo.ee",
    "tile_width": 576,
    "tile_height": 335,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 288,
    "tile_half_height_floor": 167
  },
  "41": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/house.gif?9fa66ff575efc5bcff397c52fb60e241rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "42": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/house_inv.gif?86583c8cd7352bf2a8abce17940ea10crpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "43": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/farming_products.gif?261b5b8a20c30ced8c4b69b4ffd4babfrpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "44": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/weapons2h.gif?66fc732b4593b41382b5855e85f73237rpg.mo.ee",
    "tile_width": 46,
    "tile_height": 46,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 23,
    "tile_half_height_floor": 23
  },
  "45": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/halloween.gif?f0cb8b948f34abd9e2b99baac244c6d3rpg.mo.ee",
    "tile_width": 64,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 32,
    "tile_half_height_floor": 32
  },
  "46": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/ground2.gif?109f2318c4949c61c7b0d4528a000ca4rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 34,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 17
  },
  "47": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/cathedral.gif?262ea93f911e987b4752325368d46b0crpg.mo.ee",
    "tile_width": 596,
    "tile_height": 544,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 298,
    "tile_half_height_floor": 272
  },
  "48": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/newworld3.gif?6b5eb2a2d7145e12db75f15c1d0e5a21rpg.mo.ee",
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "49": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/boss2.gif?cd5e52ca6dee8ee06d551150790a51f5rpg.mo.ee",
    "tile_width": 64,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 32,
    "tile_half_height_floor": 32
  },
  "50": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/boss3.gif?0fc5e8d38832e198acfbe3708d6388ebrpg.mo.ee",
    "tile_width": 64,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 32,
    "tile_half_height_floor": 32
  },
  "51": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/boss4.gif?367ad629bd58725acaf98734fc8d233drpg.mo.ee",
    "tile_width": 64,
    "tile_height": 64,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 32,
    "tile_half_height_floor": 32
  },
  "52": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgmisc2.gif?8b0a5331a8e1c422733e409eac131b77rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "53": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgmisc3.gif?189c3b9da3a5aeb43226147eca291891rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "54": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgmisc4.gif?0175772c4218e5936e1d28229e3e53f2rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "55": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgmisc5.gif?d30f1b761d24627899fe15ae1b1fbed7rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "56": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dg_armor2.gif?299bfe752b459e3af8891d8aad02bc40rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "57": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/dgweapon2.gif?a5f152014df31a18308427843b67e960rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "58": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/left_hands_female.gif?9db6f92cb1a729648ba0d17ec2698b1erpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "59": {
    "url": "https://1239889624.rsc.cdn77.org/sheet/wearable/right_hands_female.gif?e0813d35d898a77b00f5a651e98f35f3rpg.mo.ee",
    "tile_width": 32,
    "tile_height": 32,
    "filters": false,
    "img": [{}],
    "tile_half_width_floor": 16,
    "tile_half_height_floor": 16
  },
  "FIRST": "1",
  "NEWLAND": "2",
  "ACTIONS": "3",
  "GUI": "4",
  "WEAPONS": "5",
  "ARMOR": "6",
  "FOOD": "7",
  "TOOLS": "8",
  "FISH": "9",
  "MISC": "10",
  "JEWELRY": "11",
  "BIG_STUFF": "12",
  "DRAGONS": "13",
  "MONSTER732": "14",
  "UNIQUES": "15",
  "ALCHEMY": "16",
  "MONSTER532": "17",
  "MONSTER332": "18",
  "HEADS": "19",
  "FACIAL_HAIR": "20",
  "BODIES": "21",
  "PANTS": "22",
  "CAPES": "23",
  "LEFT_HANDS": "24",
  "RIGHT_HANDS": "25",
  "SHIELDS": "26",
  "WEPS": "27",
  "HELMETS": "28",
  "BOOTS": "29",
  "MAGIC": "30",
  "MSPELL": "31",
  "SICOS": "32",
  "MWEAPONS": "33",
  "ANIMALS": "34",
  "NEWWORLD": "35",
  "NEWLAND_TOPS": "36",
  "BOSS": "37",
  "PETS": "38",
  "POTS_CRATES": "39",
  "BIG_PYRAMID": "40",
  "HOUSE": "41",
  "HOUSE_INV": "42",
  "FARMING_PRO": "43",
  "WEPS2": "44",
  "HALLOWEEN": "45",
  "NEWLAND2": "46",
  "CATHEDRAL": "47",
  "NEWWORLD3": "48",
  "BOSS2": "49",
  "BOSS3": "50",
  "BOSS4": "51",
  "MISC2": "52",
  "MISC3": "53",
  "MISC4": "54",
  "MISC5": "55",
  "ARMOR2": "56",
  "WEAPONS2": "57",
  "LEFT_HANDS_FEMALE": "58",
  "RIGHT_HANDS_FEMALE": "59",
  "guild_buildings.png": {
    "sprite": {
      "srcArray": {
        "frames": [{
          "filename": "barracks_1.png",
          "frame": {
            "x": 990,
            "y": 2,
            "w": 108,
            "h": 97
          }
        }, {
          "filename": "barracks_2.png",
          "frame": {
            "x": 803,
            "y": 131,
            "w": 122,
            "h": 120
          }
        }, {
          "filename": "barracks_3.png",
          "frame": {
            "x": 665,
            "y": 131,
            "w": 136,
            "h": 120
          }
        }, {
          "filename": "barracks_4.png",
          "frame": {
            "x": 602,
            "y": 2,
            "w": 137,
            "h": 127
          }
        }, {
          "filename": "barracks_5.png",
          "frame": {
            "x": 741,
            "y": 2,
            "w": 137,
            "h": 127
          }
        }, {
          "filename": "blue.png",
          "frame": {
            "x": 466,
            "y": 138,
            "w": 54,
            "h": 27
          }
        }, {
          "filename": "crystal_1.png",
          "frame": {
            "x": 1251,
            "y": 99,
            "w": 54,
            "h": 50
          }
        }, {
          "filename": "estonian_flag.png",
          "frame": {
            "x": 1259,
            "y": 2,
            "w": 38,
            "h": 80
          }
        }, {
          "filename": "graveyard_candle.png",
          "frame": {
            "x": 1251,
            "y": 151,
            "w": 54,
            "h": 49
          }
        }, {
          "filename": "hall_1.png",
          "frame": {
            "x": 880,
            "y": 2,
            "w": 108,
            "h": 120
          }
        }, {
          "filename": "hall_2.png",
          "frame": {
            "x": 466,
            "y": 2,
            "w": 134,
            "h": 134
          }
        }, {
          "filename": "hall_3.png",
          "frame": {
            "x": 330,
            "y": 2,
            "w": 134,
            "h": 172
          }
        }, {
          "filename": "hall_4.png",
          "frame": {
            "x": 2,
            "y": 2,
            "w": 162,
            "h": 179
          }
        }, {
          "filename": "hall_5.png",
          "frame": {
            "x": 166,
            "y": 2,
            "w": 162,
            "h": 179
          }
        }, {
          "filename": "meteor_altar.png",
          "frame": {
            "x": 461,
            "y": 176,
            "w": 54,
            "h": 64
          }
        }, {
          "filename": "mine_1.png",
          "frame": {
            "x": 2,
            "y": 183,
            "w": 125,
            "h": 67
          }
        }, {
          "filename": "mine_2.png",
          "frame": {
            "x": 517,
            "y": 167,
            "w": 146,
            "h": 82
          }
        }, {
          "filename": "mine_3.png",
          "frame": {
            "x": 1100,
            "y": 99,
            "w": 149,
            "h": 95
          }
        }, {
          "filename": "mine_4.png",
          "frame": {
            "x": 1100,
            "y": 2,
            "w": 157,
            "h": 95
          }
        }, {
          "filename": "mine_5.png",
          "frame": {
            "x": 927,
            "y": 124,
            "w": 157,
            "h": 97
          }
        }, {
          "filename": "npc.png",
          "frame": {
            "x": 522,
            "y": 138,
            "w": 54,
            "h": 27
          }
        }, {
          "filename": "red.png",
          "frame": {
            "x": 578,
            "y": 138,
            "w": 54,
            "h": 27
          }
        }, {
          "filename": "shrine_1.png",
          "frame": {
            "x": 1086,
            "y": 196,
            "w": 108,
            "h": 56
          }
        }, {
          "filename": "shrine_2.png",
          "frame": {
            "x": 1196,
            "y": 202,
            "w": 93,
            "h": 48
          }
        }, {
          "filename": "shrine_3.png",
          "frame": {
            "x": 240,
            "y": 183,
            "w": 108,
            "h": 66
          }
        }, {
          "filename": "shrine_4.png",
          "frame": {
            "x": 129,
            "y": 183,
            "w": 109,
            "h": 67
          }
        }, {
          "filename": "shrine_5.png",
          "frame": {
            "x": 350,
            "y": 176,
            "w": 109,
            "h": 77
          }
        }],
        "meta": {
          "image": "guild_buildings.png",
          "smartupdate": "$TexturePacker:SmartUpdate:d66f2f5498b82820c9264cb2d75a5900:4f5d7a74b3769696ac017f0005ea39ff:0f0f9722c326bb0f11aeb60586e881e2$"
        }
      },
      "spriteSheetLocation": "https://1239889624.rsc.cdn77.org/sheet/guild_buildings.png?dac10099a5f56049d954ee04588fec23",
      "imgs": {
        "barracks_1.png": {},
        "barracks_2.png": {},
        "barracks_3.png": {},
        "barracks_4.png": {},
        "barracks_5.png": {},
        "blue.png": {},
        "crystal_1.png": {},
        "estonian_flag.png": {},
        "graveyard_candle.png": {},
        "hall_1.png": {},
        "hall_2.png": {},
        "hall_3.png": {},
        "hall_4.png": {},
        "hall_5.png": {},
        "meteor_altar.png": {},
        "mine_1.png": {},
        "mine_2.png": {},
        "mine_3.png": {},
        "mine_4.png": {},
        "mine_5.png": {},
        "npc.png": {},
        "red.png": {},
        "shrine_1.png": {},
        "shrine_2.png": {},
        "shrine_3.png": {},
        "shrine_4.png": {},
        "shrine_5.png": {}
      },
      "SpriteSheet": {}
    },
    "tile_width": 0,
    "tile_height": 0
  },
  "top_24": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_25": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_26": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_27": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_28": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_29": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_30": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_31": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_32": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_33": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_34": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_35": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_36": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_37": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_39": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_40": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_41": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_42": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_43": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_44": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_45": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_46": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_47": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_48": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_49": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_50": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_51": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_52": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_53": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_54": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_55": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_56": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_59": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_60": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_61": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_145": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_146": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_147": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_148": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_149": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_150": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_151": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_152": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_153": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_154": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_155": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_156": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_157": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_158": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_159": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_160": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_161": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_162": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_163": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_164": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_165": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_166": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_167": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_168": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_169": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_170": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_171": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_172": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_173": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_174": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_175": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_176": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_177": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_178": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_179": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_180": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_181": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_182": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_183": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_184": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_185": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_186": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_187": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_188": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_189": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_190": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_191": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_192": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_193": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_194": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_195": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_196": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_197": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_198": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_199": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_200": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_201": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_202": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_203": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_204": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_205": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_206": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_207": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_208": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_209": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_210": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_211": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_212": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_213": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_214": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_215": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_216": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_217": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_218": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_219": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_220": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_221": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_222": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_223": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_224": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_225": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_226": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_227": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_228": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_229": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_230": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_231": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_232": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_233": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_234": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_235": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_236": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_237": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_238": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_239": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_240": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_241": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_242": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_243": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_244": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_245": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_246": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_247": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_248": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_249": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_250": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_251": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_252": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_287": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_288": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_289": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_290": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_291": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_292": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_299": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_300": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_301": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_304": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_305": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_306": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_307": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_308": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_309": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  },
  "top_310": {
    "img": [{}],
    "tile_width": 54,
    "tile_height": 49,
    "filters": false,
    "tile_half_width_floor": 27,
    "tile_half_height_floor": 24
  }
};
