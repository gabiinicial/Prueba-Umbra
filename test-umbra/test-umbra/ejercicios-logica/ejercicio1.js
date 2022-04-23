const n = 40;

function assemble() {
    const character = "#";
    const space = " ";
    let ladder = [];
    for (let i = 1; i < n; i++) {
        const missingSpaces = n - i;
        ladder.push(space.repeat(missingSpaces) + character.repeat(i));
    }
    ladder.push(character.repeat(n));
    // console.log(ladder);
}

assemble(n);
