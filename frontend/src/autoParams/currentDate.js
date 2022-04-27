function getCurrentDate() {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
}

function getNextDate() {
    let newDate = new Date();
    let day = newDate.getDate() + 1;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
}

export const currentDates = {
    currentDate: getCurrentDate(),
    nextDate: getNextDate()
}
