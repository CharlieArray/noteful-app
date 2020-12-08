export default function getCurrentDate(space=' '){

    let newDate = new Date()
    let hours = newDate.getHours();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let timeAMorPM;
        if (hours > 0 && hours < 12){
            timeAMorPM = "AM";
        }
        else timeAMorPM = "PM";
    
    return `${month<10?`0${month}`:`${month}`} / ${date} / ${year} - ${hours} ${timeAMorPM}`
    }