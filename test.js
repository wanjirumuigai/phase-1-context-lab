

function findEmployeeByFirstName(scrArray, firstName) {
    for(const element of scrArray) {
        if (element == firstName) {
            console.log(element)
        }
    }
}
findEmployeeByFirstName(["Thor", "Odinsson", "Electrical Engineer", 45], 'Loki')