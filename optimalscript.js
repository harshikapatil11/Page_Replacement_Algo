function optimal() {
    let no_of_frames = parseInt(document.getElementById('frames').value);
    let no_of_pages = parseInt(document.getElementById('pages').value);
    let frames = new Array(no_of_frames).fill(-1);
    let pages = [];
    let temp = new Array(no_of_frames).fill(-1);
    let faults = 0;
    let output = "";

    for (let i = 0; i < no_of_pages; ++i) {
        pages.push(parseInt(prompt("Enter page number:")));
    }

    for (let i = 0; i < no_of_pages; ++i) {
        let flag1 = 0;
        let flag2 = 0;
        let flag3 = 0;
        let max = -1;
        let pos = -1;

        for (let j = 0; j < no_of_frames; ++j) {
            if (frames[j] === pages[i]) {
                flag1 = flag2 = 1;
                break;
            }
        }

        if (flag1 === 0) {
            for (let j = 0; j < no_of_frames; ++j) {
                if (frames[j] === -1) {
                    faults++;
                    frames[j] = pages[i];
                    flag2 = 1;
                    break;
                }
            }

            if (flag2 === 0) {
                for (let j = 0; j < no_of_frames; ++j) {
                    temp[j] = -1;
                    for (let k = i + 1; k < no_of_pages; ++k) {
                        if (frames[j] === pages[k]) {
                            temp[j] = k;
                            break;
                        }
                    }
                }

                for (let j = 0; j < no_of_frames; ++j) {
                    if (temp[j] === -1) {
                        pos = j;
                        flag3 = 1;
                        break;
                    }
                }

                if (flag3 === 0) {
                    max = temp[0];
                    pos = 0;

                    for (let j = 1; j < no_of_frames; ++j) {
                        if (temp[j] > max) {
                            max = temp[j];
                            pos = j;
                        }
                    }
                }

                frames[pos] = pages[i];
                faults++;
            }
        }

        output += "Frames: " + frames.join("\t") + "\n";
    }

    document.getElementById('output').innerText = "Total Page Faults = " + faults + "\n" + output;
}
