let currentDate = new Date();
function getCurrentDate() {
    let newDate = new Date(currentDate.getTime() + 86400000);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
}

function getNextDate() {
    let newDate = new Date(currentDate.getTime() + 3 * 86400000);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
}

export const currentDates = {
    currentDate: getCurrentDate(),
    nextDate: getNextDate()
};
