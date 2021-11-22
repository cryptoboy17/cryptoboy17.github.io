// function gradingStudents(grades) {
//     // Write your code here
//     grades.forEach(grade => {
//         console.log(Math.round(grade))
//         let result = (Math.round(grade) - grade) < 3 ? Math.round(grade) : grade
//         console.log(result)
//     })
// }

// gradingStudents([4, 73, 67, 38, 33])


function reverseArray(a) {
    let result = []
    for (let i = a.length - 1; i >= 0; i--) {
        result.push(a[i])
    }
    return result
}

console.log(reverseArray([1, 2, 3, 4, 5]))