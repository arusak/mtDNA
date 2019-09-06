let limits;

export function setupBirthDistribution(cases) {
    limits = getLimits(cases);
}

export function getRandomNumberOfDaughters() {
    if (!limits) throw new Error('Call setupBirthDistribution first');

    let rnd = Math.random();
    let num = 0;
    while (limits[num] < rnd) {
        num++
    }
    return num;
}

function getLimits(cases) {
    const sum = cases.reduce((acc, val) => acc += val, 0);
    const probabilities = cases.map(c => c / sum);

    return probabilities.reduce((res, cur, idx) => {
        res[idx] = idx === 0 ? cur : cur + res[idx - 1];
        return res;
    }, []);
}
