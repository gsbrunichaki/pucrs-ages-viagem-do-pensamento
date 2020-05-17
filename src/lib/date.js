import Moment from 'moment'

export default class Date {
    static dmY2Ymd(date) {
        const newDate = date.split('/');
        const formattedDate = `${newDate[2]}-${newDate[1]}-${newDate[0]}`

        return Moment(formattedDate).toDate()
    }

    static DateToTime(date) {
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime
    }

    static DateToDate(date) {
        // Hours part from the timestamp
        var day = date.getDate();
        // Minutes part from the timestamp
        var month = "0" + (date.getMonth() + 1);
        // Seconds part from the timestamp
        var year = date.getFullYear();

        // Will display time in 10:30:23 format
        var formattedTime = day + '/' + month + '/' + year;
        return formattedTime
    }

    static formatDate(date) {
        return Moment(date).format("DD/MM/YYYY")
    }

    static humanizeSeconds(seconds) {
        var hour = parseInt(seconds / 3600);
        var min = parseInt(seconds % 3600 / 60)
        var sec = parseInt(seconds % 3600 % 60)

		if (hour < 1) hour = ''
        else hour += 'h '
        
        if (min < 10)
            min = '0' + min

        if (sec < 10)
            sec = '0' + sec

        return hour + min + 'm ' + sec + 's'
    }

    static TimestampToDate(timestamp){
        let date = timestamp.toDate();
        var day;
        if(date.getDate() > 9)
            day = date.getDate();
        else
            day = "0" + date.getDate();        

        var month = (date.getMonth() + 1);

        var year = date.getFullYear();

        // Will display time in 10:30:23 format
        var formattedTime = day + '/' + month + '/' + year;
        return formattedTime
    }
}