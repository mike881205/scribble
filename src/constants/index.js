const Constants = {
    generateLetters: () => {
        const letters = [
            {
                letter: 'blank',
                points: 0,
                count: 2
            },
            {
                letter: 'A',
                points: 1,
                count: 9
            },
            {
                letter: 'E',
                points: 1,
                count: 12
            },
            {
                letter: 'I',
                points: 1,
                count: 9
            },
            {
                letter: 'L',
                points: 1,
                count: 4
            },
            {
                letter: 'N',
                points: 1,
                count: 6
            },
            {
                letter: 'O',
                points: 1,
                count: 8
            },
            {
                letter: 'R',
                points: 1,
                count: 6
            },
            {
                letter: 'S',
                points: 1,
                count: 4
            },
            {
                letter: 'T',
                points: 1,
                count: 6
            },
            {
                letter: 'U',
                points: 1,
                count: 4
            },
            {
                letter: 'D',
                points: 2,
                count: 4
            },
            {
                letter: 'G',
                points: 2,
                count: 3
            },
            {
                letter: 'B',
                points: 3,
                count: 2
            },
            {
                letter: 'C',
                points: 3,
                count: 2
            },
            {
                letter: 'M',
                points: 3,
                count: 2
            },
            {
                letter: 'P',
                points: 3,
                count: 2
            },
            {
                letter: 'F',
                points: 4,
                count: 2
            },
            {
                letter: 'H',
                points: 4,
                count: 2
            },
            {
                letter: 'V',
                points: 4,
                count: 2
            },
            {
                letter: 'W',
                points: 4,
                count: 2
            },
            {
                letter: 'Y',
                points: 4,
                count: 2
            },
            {
                letter: 'K',
                points: 5,
                count: 1
            },
            {
                letter: 'J',
                points: 8,
                count: 1
            },
            {
                letter: 'X',
                points: 8,
                count: 1
            },
            {
                letter: 'Q',
                points: 10,
                count: 1
            },
            {
                letter: 'Z',
                points: 10,
                count: 1
            }
        ]
        return letters;
    },
    generatePlayers: num => {
        const players = []
        for (let i = 0; i<num; i++) {
            players.push({player: (i+1), hand: []});
        };
        return players;
    }
};

export default Constants;