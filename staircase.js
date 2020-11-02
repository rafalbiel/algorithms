function staircase(n) {
    let counter = 1;
    let line = '';
    let columnCounter = n;
    do {
        for (let i = 0; i < columnCounter-1; i++) {
            line = line + ' ';
        }
        for (let j = 0; j < counter; j++) {
            line = line + '#';
        }
        line = line + '\n';
        counter++;
        columnCounter--;
    } while (counter <= n);
    console.log(line);
}
staircase(10);