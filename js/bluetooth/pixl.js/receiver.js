// List of eddystone devices
var eddystone = {};
// List of votes
var votes = {};
var option = "A";
var menuOn = false;

const menu = {
    '': { title: 'Setting' },
    'Backlight On': () => LED1.set(),
    'Backlight Off': () => LED1.reset(),
    'Exit': () => { menuOn = false; Pixl.menu(); },
};

setWatch(function () {
    menuOn = true;
    Pixl.menu(menu);
}, BTN, { edge: "rising", debounce: 50, repeat: true });

// Start scanning for devices
NRF.setScan(function (dev) {
    if (dev.serviceData && dev.serviceData.feaa)
        eddystone[dev.id] = dev;
});

/* Every so often, scan over the list of devices
we have and tally up the votes */
setInterval(function () {
    // reset votes
    votes = {};
    // tally them up
    for (var id in eddystone) {
        var dev = eddystone[id];
        if (!dev.age) dev.age = 0;
        dev.age++;
        // only use votes from devices we heard from recently
        if (dev.age < 40) {
            // if the URL contains a hash, the vote is what comes after
            var url = E.toString(dev.serviceData.feaa).substr(3);
            var hash = url.lastIndexOf("#");
            if (hash) {
                var vote = url.substr(hash + 1);
                if (vote in votes)
                    votes[vote]++;
                else
                    votes[vote] = 1;
            }
        }
    }
    if (!menuOn) {
        // now display on the screen
        g.clear();
        g.setFontVector(40);
        g.setFontAlign(0, 0);
        g.drawString(option, g.getWidth() / 4, g.getHeight() / 2);
        g.drawString(0 | votes[option], 3 * g.getWidth() / 4, g.getHeight() / 2);
        g.flip();
    }
}, 250);