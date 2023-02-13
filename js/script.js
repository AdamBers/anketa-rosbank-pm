const form = document.getElementById('myForm')

function goTo(element) {
    setTimeout(function () {
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }, 500)
}

function q1Handler(e) {
    if (e.target.id === "notFamiliar" || e.target.id === "diffToAnswer") {
        document.getElementById("q-5").classList.remove("hidden")
        document.getElementById("err-2").classList.add("hidden")
        document.getElementById("err-3").classList.add("hidden")
        document.getElementById("err-4").classList.add("hidden")
        goTo("q-5")
    } else {
        document.getElementById("q-2").classList.remove("hidden")
        goTo("q-2")
    }
    document.getElementById("err-1").classList.add("hidden")

}

function q2Handler(e) {
    if (e.target.value.length > 0) {
        document.getElementById("q-3").classList.remove("hidden");
        goTo("q-3")
    }
    document.getElementById("err-2").classList.add("hidden")
}

function q3RangeHandler(e) {
    if (e.target.value <= 6) {
        console.log(e)
        document.getElementById("q-3-1").classList.remove('hidden')
        document.getElementById("q-3-2").classList.add('hidden')
        document.getElementById("q-3-3").classList.add('hidden')
        goTo("q-3-1")
    }
    if (e.target.value == 7 || e.target.value == 8) {
        document.getElementById("q-3-1").classList.add('hidden')
        document.getElementById("q-3-2").classList.remove('hidden')
        document.getElementById("q-3-3").classList.add('hidden')
        goTo("q-3-2")
    }
    if (e.target.value == 9 || e.target.value == 10) {
        document.getElementById("q-3-1").classList.add('hidden')
        document.getElementById("q-3-2").classList.add('hidden')
        document.getElementById("q-3-3").classList.remove('hidden')
        goTo("q-3-3")
    }
    document.getElementById("err-3").classList.add("hidden")
    // document.getElementById("err-4").classList.remove("hidden")
}

function subQuestionHandler(e) {
    document.getElementById("q-4").classList.remove('hidden')
    document.getElementById("err-4").classList.add("hidden")

    goTo("q-4")
}

function q4Handler(e) {
    document.getElementById("q-5").classList.remove('hidden')
    goTo("q-5")
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("q-5").addEventListener("change", () => {
        document.getElementById("err-5").classList.add("hidden")
    })


})




form.onsubmit = function (e) {
    // e.preventDefault()
    // var condition = Boolean(
    //     document.querySelector('input[name="familiarity"]:checked').id === "notFamiliar" ||
    //     document.querySelector('input[name="familiarity"]:checked').id === "diffToAnswer" &&
    //     document.querySelector('input[name="canCall"]:checked').id !== "yes" &&
    //     document.querySelector('input[name="canCall"]:checked').id !== "no")
    // let checked = document.querySelectorAll('input[type=radio]')

    // checked.map(el => console.log(el.checked))

}







// var condition = Boolean(
//     document.querySelector('input[name="familiarity"]:checked').id === "notFamiliar" ||
//     document.querySelector('input[name="familiarity"]:checked').id === "diffToAnswer" &&
//     document.querySelector('input[name="canCall"]:checked').id !== "yes" &&
//     document.querySelector('input[name="canCall"]:checked').id !== "no")

// if (document.querySelector('input[name="familiarity"]:checked').id === "notFamiliar" ||
//     document.querySelector('input[name="familiarity"]:checked').id === "diffToAnswer" &&
//     document.querySelector('input[name="canCall"]:checked').id === "yes" ||
//     document.querySelector('input[name="canCall"]:checked').id === "no") {
//     document.getElementById("myForm").submit()
// }












// if (document.querySelector('input[name="familiarity"]:checked')?.id === "notFamiliar" ||
//     document.querySelector('input[name="familiarity"]:checked')?.id === "diffToAnswer" &&
//     document.querySelector('input[name="canCall"]:checked') === null) {
//     e.preventDefault()
// }










// if (condition) {
//     document.getElementById("err-5").classList.remove("hidden")
//     e.preventDefault()
// }


// if (!condition) {
//     e.preventDefault()
//     if (document.querySelector('input[name="canCall"]:checked') === null) {
//         document.getElementById("err-5").classList.remove("hidden")
//         goTo("q-5")
//         e.preventDefault()
//     }

//     if (document.querySelector('input[name="sadFor"]:checked') === null &&
//         document.querySelector('input[name="scale"]:checked') !== null) {
//         document.getElementById("err-4").classList.remove("hidden")
//         goTo("q-4")
//         e.preventDefault()
//     }

//     if (document.querySelector('input[name="scale"]:checked') === null) {
//         document.getElementById("err-3").classList.remove("hidden")
//         goTo("q-3")
//         e.preventDefault()
//     }

//     if (document.getElementById("namePM").value.length === 0) {
//         document.getElementById("err-2").classList.remove("hidden")
//         goTo("q-2")
//         e.preventDefault()
//     }

//     if (document.querySelector('input[name="familiarity"]:checked') === null) {
//         document.getElementById("err-1").classList.remove("hidden")
//         goTo("q-1")
//         e.preventDefault()
//     }
// }
// e.preventDefault()


















// window.onload = (event) => {
//     setTimeout(function () {
//         document.getElementById("q-1").style.backgroundColor = "#c5c5c5"
//     }, 100)
//     setTimeout(function () {
//         document.getElementById("q-1").style.backgroundColor = "transparent"
//     }, 300)
// };












// const errorMessage = document.getElementById('error-message')
// const error_2 = document.getElementById('error_2')
// const error_3 = document.getElementById('error_3')
// const form = document.getElementById('myForm')
// const comment_div = document.getElementById('comment_div')
// var currentGrade = ''
// var comment = document.getElementById('comment')
// var commentValue = ''
// const send = document.getElementById('send')
// const another = document.getElementById('another')
// let checked = document.querySelectorAll('input[type=checkbox]')

// document.addEventListener('gesturestart', function (e) {
//     e.preventDefault();
// });

// checked.forEach(function (item) {
//     item.checked === false
//     item.addEventListener('click', function () {
//         error_2.classList.add('hidden')
//     })
// })
// form.onsubmit = function (e) {
//     if (currentGrade === '') {
//         console.log(currentGrade)
//         errorMessage.classList.remove('hidden')
//         e.preventDefault()
//     }
//     let checked = document.querySelectorAll('input[type=checkbox]:checked')
//     if (checked.length === 0 && (currentGrade === 'star2' || currentGrade === 'star3' || currentGrade === 'star4' || currentGrade === 'star5')) {
//         error_2.classList.remove('hidden')
//         e.preventDefault()
//     }
//     if (commentValue.length < 1 && (another.checked === true)) {
//         console.log(commentValue)
//         error_3.classList.remove('hidden')
//         e.preventDefault()
//     }
// }

// function handleStar(event) {
//     const label1 = document.getElementById('star1label')
//     const label2 = document.getElementById('star2label')
//     const label3 = document.getElementById('star3label')
//     const label4 = document.getElementById('star4label')
//     const label5 = document.getElementById('star5label')
//     const question1 = document.getElementById('question1')
//     const errorMessage = document.getElementById('error-message')
//     error_2.classList.add('hidden')
//     send.classList.remove('hidden')
//     document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
//     currentGrade = event.target.id
//     errorMessage.classList.add('hidden')
//     label1.style.color = '#E5E7EA'
//     label2.style.color = '#E5E7EA'
//     label3.style.color = '#E5E7EA'
//     label4.style.color = '#E5E7EA'
//     label5.style.color = '#E5E7EA'
//     if (event.target.id === 'star5') {
//         label5.style.color = '#E40038'
//         question1.classList.remove('hidden')

//     }
//     if (event.target.id === 'star4') {
//         label5.style.color = '#E40038'
//         label4.style.color = '#E40038'
//         question1.classList.remove('hidden')
//     }
//     if (event.target.id === 'star3') {
//         label5.style.color = '#E40038'
//         label4.style.color = '#E40038'
//         label3.style.color = '#E40038'
//         question1.classList.remove('hidden')
//     }
//     if (event.target.id === 'star2') {
//         label5.style.color = '#E40038'
//         label4.style.color = '#E40038'
//         label3.style.color = '#E40038'
//         label2.style.color = '#E40038'
//         question1.classList.remove('hidden')
//     }
//     if (event.target.id === 'star1') {
//         label5.style.color = '#E40038'
//         label4.style.color = '#E40038'
//         label3.style.color = '#E40038'
//         label2.style.color = '#E40038'
//         label1.style.color = '#E40038'
//         question1.classList.add('hidden')
//         comment.classList.add('hidden')
//         comment_div.classList.add('hidden')
//     }
// }

// function handleComment(e) {
//     commentValue = e.target.value
//     error_3.classList.add("hidden")
// }

// function auto_grow(element) {
//     element.style.height = "42px";
//     element.style.height = (element.scrollHeight) + "px";
// }

// function toggleComment() {
//     comment_div.classList.toggle('hidden')
// }


// function inputChange() {
//     error_3.classList.add("hidden")
// }