<<<<<<< HEAD
function sort(method) {
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if (method == 'bubble') {
        logs = bubbleSort(origin)
    } else if (method == 'insert') {
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
=======
function sort(method) {
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if (method == 'bubble') {
        logs = bubbleSort(origin)
    } else if (method == 'insert') {
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
>>>>>>> 3a7b3e6a0d2fa484046bfb8fec4de35479091f43
}