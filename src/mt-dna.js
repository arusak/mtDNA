import {getRandomNumberOfDaughters} from './randomizer.js';

export function createGenerations(initial, number) {
    let res = [createFirstGeneration(initial)];
    for (let i = 1; i <= number; i++) {
        res.push(createNextGeneration(res[i - 1]));
    }
    return res;
}

function createFirstGeneration(number) {
    return 'x'.repeat(number).split('').map((v, idx) => String.fromCharCode(65 + idx));
}

function createNextGeneration(previous) {
    return previous.reduce((res, cur) => {
        let children = cur.repeat(getRandomNumberOfDaughters()).split('');
        return res.concat(children);
    }, []);
}

