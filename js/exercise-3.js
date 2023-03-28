import _Error from 'isotropic-error';

const _exercise3 = {
    baseUrl: 'http://api.aladhan.com',
    async fetchJoke () {
        try {
            const today = new Date();

            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const date = today.getDate();

            const newDate = `${today.getDate()} ${today.toLocaleString('default', { month: 'short' })} ${today.getFullYear()}`;

            const res = await fetch(`${this.baseUrl}/v1/calendarByCity/${year}/${month}?city=London&country=Canada&method=2`);

            if (!res.ok) {
                throw new _Error(`Error: ${res.status} - ${res.statusText}`);
            }

            const fetchJokesData = await res.json();

            const todayPrayerTimes = fetchJokesData.data.find(item => item.date.readable === newDate);

            const removeFajrEDT = todayPrayerTimes.timings.Fajr.split(' ');
            const removeDhuhrEDT = todayPrayerTimes.timings.Dhuhr.split(' ');
            const removeAsrEDT = todayPrayerTimes.timings.Asr.split(' ');
            const removeMaghribEDT = todayPrayerTimes.timings.Maghrib.split(' ');
            const removeIshaEDT = todayPrayerTimes.timings.Isha.split(' ');

            const hours = today.getHours();
            const minutes = today.getMinutes();

            const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

            if (time === removeFajrEDT[0]) {
                return removeFajrEDT[0];
            }

            if (time === removeDhuhrEDT[0]) {
                return removeFajrEDT[0];
            }

            if (time === removeAsrEDT[0]) {
                return removeFajrEDT[0];
            }

            if (time === removeMaghribEDT[0]) {
                return removeFajrEDT[0];
            }

            if (time === removeIshaEDT[0]) {
                return removeFajrEDT[0];
            }
            const holdArray = (JSON.stringify(todayPrayerTimes.timings)).split(',');
            
            return holdArray.map(item => item);
        } catch (err) {
            console.error(`Error while fetching joke with ID: ${err}`);
        }
    }
};

export default _exercise3;

