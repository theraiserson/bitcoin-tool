var mouseover_box = document.createElement('table');
mouseover_box.style.display = "none";
mouseover_box.textContent = "";
mouseover_box.style.display = "block";
mouseover_box.style.position = "absolute";
mouseover_box.style.backgroundColor = "#fff";
mouseover_box.style.color = "000";
mouseover_box.style.font = "message-box";
mouseover_box.style.fontSize = "18px";
mouseover_box.style.textAlign = "left";
document.body.appendChild(mouseover_box);

var api_url;


document.addEventListener('mouseover', async function (show) {
    var x = show.pageX;
    var y = show.pageY;
    var timer;
    var srcElement = show.target;
    if (srcElement.attributes.class.nodeValue === 'sc-1r996ns-0 fLwyDF sc-1tbyx6t-1 kCGMTY iklhnl-0 eEewhk') {
        mouseover_box.style.top = (y + 10) + "px";
        mouseover_box.style.left = (x + 10) + "px";
        console.log(mouseover_box.style.display + x + y);
        console.log(convertBTC(80000));
        timer = setTimeout(showInfobox, 500);
        api_url = "https://blockchain.info/rawaddr/" + srcElement.textContent;
        console.log(api_url);
    }
    srcElement.addEventListener('mouseleave', function () {
        mouseover_box.style.display = "none";
        clearTimeout(timer)
    }
    )


}
)

async function showInfobox() {
    console.log("Show Infobox after 0,5 seconds.")
    if (mouseover_box.style.display === "none") {
        mouseover_box.style.display = "block"
    }
    getBlockchainDetails(api_url);
}

async function getBlockchainDetails(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            var aggregated_details = "<tr><th>Number of Transactions:</th><td>" + response.n_tx + "</td></tr>";
            aggregated_details += "<tr><th>Total Received:</th><td>" + convertBTC(response.total_received) + "</td></tr>";
            aggregated_details += "<tr><th>Total Sent:</th><td>" + convertBTC(response.total_sent) + "</td></tr>";
            aggregated_details += "<tr><th>Final Balance:</th><td>" + convertBTC(response.final_balance) + "</td></tr>";
            mouseover_box.innerHTML = aggregated_details;
        })
        .catch((error) => {
            console.error("Error:", error);
            mouseover_box.innerHTML = "ERROR:" + error + "!";
        });
}

function convertBTC(unformattedValue) {
    //We need this, beacuse the blockchain.com-API returns the BTC wihtout a . or ,
    var pre = Math.floor((unformattedValue / 100000000));
    var post = unformattedValue % 100000000;
    if (post < 10000000) {
        var formattingString = String(unformattedValue);
        var i = formattingString.length
        for (; i < 8; i++) {
            formattingString = "0" + formattingString;
        }
        post = formattingString;
    }
    return pre + "." + post;
}