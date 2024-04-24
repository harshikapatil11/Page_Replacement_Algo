function fifo() {
    let f = parseInt(document.getElementById('frames').value);
    let p = parseInt(document.getElementById('pages').value);
    let pages = [];

    for (let i = 0; i < p; i++) {
        let input = prompt("Enter page number:");
        pages.push(parseInt(input));
    }

    let num = 0;
    let pageHit = 0;
    let frame = new Array(f).fill(-1);
    let output = "";

    for (let i = 0; i < p; i++) {
        let flag = true;
        let page = pages[i];

        for (let j = 0; j < f; j++) {
            if (frame[j] === page) {
                flag = false;
                pageHit++;
                break;
            }
        }

        if (num === f) {
            num = 0;
        }

        if (flag) {
            frame[num] = page;
            num++;
        }

        output += "frame : " + frame.join(" ") + "\n";
    }

    output += "No. of page hit : " + pageHit;
    document.getElementById('output').innerText = output;
}