export function render(generations) {
    generations.forEach(renderGeneration)
}

function renderGeneration(generation) {
    if (generation.length < 50) {
        console.log(generation.join(''))
    } else {
        console.table(countStats(generation));
    }
}

function countStats(array) {
    return array.reduce((stats, cur) => {
        stats[cur] = stats[cur] ? stats[cur] + 1 : 1;
        return stats;
    }, {});
}
