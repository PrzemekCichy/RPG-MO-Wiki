declare var socket, addChatText, Mods, objects_data, switchWorldBugFix, Inventory, createElem, players, Notification, timestamp, getElem, options_audio, COLOR;

module notifications {
    //Socket
    (function () {
        var socketAction = function () {
            socket.on("message", function (data) {
                selectAction(data);
            });//socket end
        }

        socketAction();
        var switchWorldBugFixOld = switchWorldBugFix;
        switchWorldBugFix = function () {
            switchWorldBugFixOld();
            socketAction();
        }
    })();

    //Interval for dirty-checking
    (function () {
        var inventoryWait = false;
        setInterval(function () {

            if (Inventory.is_full(players[0]) && inventoryWait === false) {
                spawnNotification("Inventory Full", "http://hydra-media.cursecdn.com/evoland.gamepedia.com/thumb/9/99/Inventory1.png/100px-Inventory1.png", "InventoryFull");
                inventoryWait = true;
            } else if (Inventory.is_full(players[0]) === false) {
                inventoryWait = false;

            }
        }, 1000);
    })()

    //Find event to notify
    function selectAction(data) {
        if (typeof data === "object" && data.action) {

            //boss
            if (data.action == "monster_invisible" && objects_data[data.target_id].name.match(/BOSS/g)) {
                addChatText((objects_data[data.target_id].name + " spawns in " + Math.round(data.duration / 10 / 60) / 100 + " minutes"), false, COLOR.RED);
            }

            //chat
            var date;
            if (data.action == "message") {
                date = new Date(timestamp());
                if (data.data.type == "chat") {
                    console.log("(" + date.toLocaleTimeString() + ") [" + data.data.message.lang + "] <" + data.data.message.user + ">:\t" + data.data.message.text + "\n");
                } else if (data.data.type == "whisper") {
                    console.log("(" + date.toLocaleTimeString() + ") <" + data.data.name + "> to <" + data.data.to + ">:" + data.data.message + " \n");
                }
            } else if (data.action === "join") {
                date = new Date(timestamp());
                console.log(data.name + " has joined World " + data.world + " at " + date.toLocaleTimeString());
            } else if (data.action === "leave") {
                date = new Date(timestamp());
                console.log(data.name + " left at " + date.toLocaleTimeString());
            }

            //egg
            if (data.action == "message" && data.data.type !== "chat") {
                var _message = data.data.message;

                if (_message.match(/Scavenger hunt/g)) {
                    spawnNotification(data.data.message, "http://images.all-free-download.com/images/graphiclarge/easter_eggs_clip_art_11010.jpg", "Scavenger Hunt!");
                }
            }
        }
    }



    //Notifications
    Notification.requestPermission();
    function spawnNotification(Body, Icon, Title) {
        var options = {
            body: Body,
            icon: Icon

        }
        if (Mods.Miscmd.invSoundEnabled) {
            audio.play();
        }
        var n = new Notification(Title, options);
        n.onclick = function () {
            window.focus();
        };
    }

    //audio
    var audio;
    (function () {
        audio = new Audio('https://dl.dropboxusercontent.com/s/t3xqbmi7jw5vy8v/glass_ping-Go445-1207030150.mp3');
        audio.volume = 0.2;
        //Save user option to LocalStorage
        localStorage["invsound"] = localStorage["invsound"] || JSON.stringify(1);
        Mods.Miscmd.invSoundEnabled = JSON.parse(localStorage["invsound"]);
        Mods.Miscmd.invSoundEnabled -= 1;

        //Create entry in Audio Menu
        createElem("div", options_audio, {
            innerHTML: "<span class='wide_link pointer settings' id='InvSound' onclick='toggleInvSound()'>Full Inventory Sound(On)</s>"
        });

        //Toggle switch change state
        var s = getElem("InvSound");
        var toggleInvSound = function () {
            switch (!Mods.Miscmd.invSoundEnabled) {
                case false:
                    s.innerHTML = "Full Inventory Sound(Off)";
                    Mods.Miscmd.invSoundEnabled = false;
                    break;
                default:
                    s.innerHTML = "Full Inventory Sound(On)";
                    Mods.Miscmd.invSoundEnabled = true;
                    break;
            }
            localStorage["invsound"] = JSON.stringify(Mods.Miscmd.invSoundEnabled);
        }
        toggleInvSound();
    })();
}