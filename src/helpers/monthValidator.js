export const validateMonth = (tm) => {
    let month = '';
    if (tm === '01') {
        month = 'Jan';
    }
    if (tm === '02') {
        month = 'Feb';
    }
    if (tm === '03') {
        month = 'Mar';
    }
    if (tm === '04') {
        month = 'Apr';
    }
    if (tm === '05') {
        month = 'May';
    }
    if (tm === '06') {
        month = 'Jun';
    }
    if (tm === '07') {
        month = 'Jul';
    }
    if (tm === '08') {
        month = 'Aug';
    }
    if (tm === '09') {
        month = 'Sep';
    }
    if (tm === '10') {
        month = 'Oct';
    }
    if (tm === '11') {
        month = 'Nov';
    }
    if (tm === '12') {
        month = 'Dec';
    }
    return month;
};
