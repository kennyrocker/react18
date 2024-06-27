

export const formatCurrency = (n: number): string => {
    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });
    return currency.format(n) || '';
}

export const getTimeAgo = (ts: number): string => {
    let curr = new Date().getTime();
    let ms_Min = 60 * 1000; // milliseconds in Minute
    let ms_Hour = ms_Min * 60; // milliseconds in Hour
    let ms_Day = ms_Hour * 24; // milliseconds in day
    let ms_Mon = ms_Day * 30; // milliseconds in Month
    let ms_Yr = ms_Day * 365; // milliseconds in Year
    let diff = curr - ts; //difference between dates.
    // If the diff is less then milliseconds in a minute
    if (diff < ms_Min) {
        return Math.round(diff / 1000) + ' seconds ago';
        // If the diff is less then milliseconds in a Hour
    } else if (diff < ms_Hour) {
        return Math.round(diff / ms_Min) + ' minutes ago';
        // If the diff is less then milliseconds in a day
    } else if (diff < ms_Day) {
        return Math.round(diff / ms_Hour) + ' hours ago';
        // If the diff is less then milliseconds in a Month
    } else if (diff < ms_Mon) {
        return Math.round(diff / ms_Day) + ' days ago';
        // If the diff is less then milliseconds in a year
    } else if (diff < ms_Yr) {
        return Math.round(diff / ms_Mon) + ' months ago';
    } else {
        return Math.round(diff / ms_Yr) + ' years ago';
    }
    return '';
}