// document.body.style.border = "5px solid red";<a href="https://www.blockchain.com/btc/address/bc1qp9m3phxcl6tluprlkh5vw54k4qq3sykdf7fnf2" class="sc-1r996ns-0 fLwyDF sc-1tbyx6t-1 kCGMTY iklhnl-0 eEewhk" opacity="1">bc1qp9m3phxcl6tluprlkh5vw54k4qq3sykdf7fnf2</a> 
    document.addEventListener('mouseover', function(show) {
        var srcElement = show.target;
        if (srcElement.attributes.class.nodeValue === 'sc-1r996ns-0 fLwyDF sc-1tbyx6t-1 kCGMTY iklhnl-0 eEewhk') {
            console.log("Yes!");
            if (srcElement.style.display === "none") {
                srcElement.style.display = "block"
            } else {
                srcElement.style.display = "none"
            }
        }
    }
    )