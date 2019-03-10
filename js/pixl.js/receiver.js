// List of eddystone devices
var eddystone = {};
// List of votes
var votes = {};

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
    // now display on the screen
    g.clear();
    g.setFontVector(40);
    g.setFontAlign(0, 0);
    g.drawString(0 | votes["A"], g.getWidth() / 4, g.getHeight() / 2);
    g.drawString(0 | votes["B"], 3 * g.getWidth() / 4, g.getHeight() / 2);
    g.flip();
}, 500);