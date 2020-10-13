var students = [{ firstName: 'еіма', lastName: 'Варчук', rating: 60 },
{ firstName: 'чіма', lastName: 'Варчук', rating: 64 },
{ firstName: 'аіма', lastName: 'Варчук', rating: 61 },
{ firstName: 'ьіма', lastName: 'Варчук', rating: 47 },
{ firstName: 'ліма', lastName: 'Варчук', rating: 70 },
{ firstName: 'Дяіма', lastName: 'Варчук', rating: 10 },
{ firstName: 'яма', lastName: 'Варчук', rating: 39 },
{ firstName: 'йіма', lastName: 'Варчук', rating: 100 },
{ firstName: 'юіма', lastName: 'Варчук', rating: 90 },
]
console.log(students);
function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
console.log(students.sort(dynamicSort('firstName')))
console.log(students.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)))
var maxRat = 0;
function max() {
    for (i = 0; i < students.length; i++) {

        if (maxRat < students[i].rating)
            maxRat = students[i].rating;
    }
    for (var i = 0; i < students.length; i++) {
        if (students[i].rating === maxRat) {
            return students[i];
        }
    }
}
console.log(max());
function min() {
    for (i = 0; i < students.length; i++) {

        if (maxRat > students[i].rating)
            maxRat = students[i].rating;
    }
    for (var i = 0; i < students.length; i++) {
        if (students[i].rating === maxRat) {
            return students[i];
        }
    }
}
console.log(min());
function findMid() {
    var sum = 0;
    var array = [];
    for (let i = 0; i < students.length; i++) {
        sum += students[i].rating;
    }
    var mid = Math.round(sum / students.length);
    for (let i = 0; i < students.length; i++) {
        array.push(Math.abs(mid - students[i].rating));
    }
    var min = array[0];
    var minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(students[findMid()]);


var students1 = [
    { firstName: 'еіма', lastName: 'Варчук', rating: 60, rate: 100 },
    { firstName: 'чіма', lastName: 'Варчук', rating: 64, rate: 100 },
    { firstName: 'аіма', lastName: 'Варчук', rating: 61, rate: 100 },
    { firstName: 'ьіма', lastName: 'Варчук', rating: 47, rate: 100 },
    { firstName: 'ліма', lastName: 'Варчук', rating: 70, rate: 100 },
    { firstName: 'Дяіма', lastName: 'Варчук', rating: 10, rate: 100 },
    { firstName: 'яма', lastName: 'Варчук', rating: 39, rate: 100 },
    { firstName: 'йіма', lastName: 'Варчук', rating: 98, rate: 100 },
    { firstName: 'юіма', lastName: 'Варчук', rating: 90, rate: 100 },
]
function FindRate() {
    var maxrating = students1[0].rating;

    for (i = 0; i < students1.length; i++) {

        if (maxrating < students1[i].rating)
            maxrating = students1[i].rating;

    }

    for (i = 0; i < students1.length; i++) {

        students1[i].rate = students1[i].rating * 100 / maxrating;
        students1[i].rate = 100 - Math.round(students1[i].rate);
    }
    return students1;
}
console.log(FindRate());