const arr = ['sunday','monday','tuesday','wenesday']
for (let day of arr) {
    day = day.charAt(0).toUpperCase() + day.substring(1)
    console.log(day);
}