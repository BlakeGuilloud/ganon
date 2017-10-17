function median(list) {
    const sortedList = list.sort();

    if (sortedList.length % 2 !== 0) {
        return sortedList[(sortedList.length - 1) / 2];
    } else {
        const a = sortedList[sortedList.length / 2];
        const b = sortedList[sortedList.length / 2 - 1];
        return (a + b) / 2;
    }
}

module.exports = median;