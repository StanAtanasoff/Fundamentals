function tseamAccount(input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play') {
            break;
        } else if (command === "Install" && games.includes(newGame) === false) {
            games.push(newGame);
        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }
 
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!',
])



// function nonDecreasingSubset(arr) {
//     let max = arr[0];
//     let result = arr.filter(el => {
//         if (el >= max) {
//             max = el;
//         }
//         return el >= max;
//     });
//     console.log(result.join(' '));
// }
// nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])