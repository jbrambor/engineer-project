function getCurrentDate() {
    let newDate = new Date();
    let day = newDate.getDate() +2;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
}

function getNextDate() {
    let newDate = new Date();
    let day = newDate.getDate() + 3;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
}

export const currentDates = {
    currentDate: getCurrentDate(),
    nextDate: getNextDate()
};
