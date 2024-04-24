function findLRU(time) {
    let minimum = time[0];
    let pos = 0;
    for (let i = 1; i < time.length; ++i) {
        if (time[i] < minimum) {
            minimum = time[i];
            pos = i;
        }
    }
    return pos;
}

function main() {
    const frames = [];
    const time = [];
    let faults = 0;
    let counter = 0;
    const framesInput = document.getElementById("frames").value;
    const pagesInput = document.getElementById("pages").value;
    const pageInputsDiv = document.getElementById("pageInputs");
    const outputDiv = document.getElementById("output");

    pageInputsDiv.innerHTML = "";

    for (let i = 0; i < framesInput; ++i) {
        frames.push(-1);
    }

    for (let i = 0; i < pagesInput; ++i) {
        const pageInput = prompt("Enter reference string for page " + (i + 1) + ":");
        const page = parseInt(pageInput, 10);

        let flag1 = 0;
        let flag2 = 0;

        for (let j = 0; j < framesInput; ++j) {
            if (frames[j] === page) {
                counter++;
                time[j] = counter;
                flag1 = 1;
                flag2 = 1;
                break;
            }
        }

        if (flag1 === 0) {
            for (let j = 0; j < framesInput; ++j) {
                if (frames[j] === -1) {
                    counter++;
                    faults++;
                    frames[j] = page;
                    time[j] = counter;
                    flag2 = 1;
                    break;
                }
            }
        }

        if (flag2 === 0) {
            const pos = findLRU(time);
            counter++;
            faults++;
            frames[pos] = page;
            time[pos] = counter;
        }

        const frameDisplay = frames.join('\t');
        pageInputsDiv.innerHTML += `<div>Page ${page}: ${frameDisplay}</div>`;
    }

    outputDiv.innerText = "Total Page Faults = " + faults;
}
