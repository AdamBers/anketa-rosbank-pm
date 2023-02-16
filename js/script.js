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
        document.getElementById("q-2").classList.add("hidden")
        document.getElementById("q-3").classList.add("hidden")
        document.getElementById("q-4").classList.add("hidden")
        goTo("q-5")
    } else {
        document.getElementById("q-2").classList.remove("hidden")
        goTo("q-2")
    }
    document.getElementById("err-1").classList.add("hidden")
    document.getElementById("yes").checked = false
    document.getElementById("no").checked = false
}

function q2Handler(e) {
    if (e.target.value.length > 0) {
        document.getElementById("q-3").classList.remove("hidden");
        goTo("q-3")
    }
    document.getElementById("err-2").classList.add("hidden")
    document.getElementById("namePM").blur()
}

const descrItems = [
    "Ужасно",
    "Очень плохо",
    "Плохо",
    "Не удовлетворительно",
    "Удовлетворительно",
    "Средне",
    "Чуть выше среднего",
    "Скорее хорошо",
    "Хорошо",
    "Отлично",
    "Превосходно"
]

function q3RangeHandler(e) {
    document.getElementById("incompetence").checked = false
    document.getElementById("badChoice").checked = false
    document.getElementById("notFast").checked = false
    document.getElementById("diffToCall").checked = false
    document.getElementById("getBetter").checked = false
    document.getElementById("getBetterChoice").checked = false
    document.getElementById("getBetterSpeed").checked = false
    document.getElementById("getBetterCall").checked = false
    document.getElementById("gladForProfeccionality").checked = false
    document.getElementById("gladForChoice").checked = false
    document.getElementById("gladForAnswers").checked = false
    document.getElementById("gladForEasyCall").checked = false


    document.getElementById("rateDescription").innerHTML = descrItems[e.target.value]
    document.getElementById("rateDescription").classList.remove("hidden")
    const rangeWidth = document.getElementById("range").offsetWidth - 40
    const elementWidth = document.getElementById("rateDescription").offsetWidth
    let leftOffset = ((rangeWidth / 10) * e.target.value) - ((elementWidth / 2))
    document.getElementById("rateDescription").style.left = leftOffset + 26 + "px"
    if (leftOffset < 0) {
        document.getElementById("rateDescription").style.left = '0px'
    }

    if (rangeWidth < leftOffset + elementWidth - 26) {
        document.getElementById("rateDescription").style.left = rangeWidth - elementWidth + 50 + "px"
    }

    if (e.target.value <= 6) {
        document.getElementById("q-3-1").classList.remove('hidden')
        document.getElementById("q-3-2").classList.add('hidden')
        document.getElementById("q-3-3").classList.add('hidden')
    }
    if (e.target.value == 7 || e.target.value == 8) {
        document.getElementById("q-3-1").classList.add('hidden')
        document.getElementById("q-3-2").classList.remove('hidden')
        document.getElementById("q-3-3").classList.add('hidden')
    }
    if (e.target.value == 9 || e.target.value == 10) {
        document.getElementById("q-3-1").classList.add('hidden')
        document.getElementById("q-3-2").classList.add('hidden')
        document.getElementById("q-3-3").classList.remove('hidden')
    }
    document.getElementById("err-3").classList.add("hidden")
    goTo("q-3-1")
    goTo("q-3-2")
    goTo("q-3-3")
}

function subQuestionHandler() {
    // document.getElementById("q-4").classList.remove('hidden')
    document.getElementById("err-4").classList.add("hidden")
    document.getElementById("q-4").classList.remove('hidden')
    document.getElementById("q-5").classList.remove('hidden')

    goTo("q-4")
}

function q4Handler(e) {
    document.getElementById("q-5").classList.remove('hidden')
    goTo("q-5")
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("q-5").addEventListener("change", () => {
        document.getElementById("err-5").classList.add("hidden")
        document.getElementById("send").classList.remove("hidden")
        goTo("send")
    })
})

form.onsubmit = function (e) {
    if ((document.getElementById("notFamiliar").checked === true ||
        document.getElementById("diffToAnswer").checked === true) &&
        (document.getElementById("yes").checked === true || document.getElementById("no").checked === true)) {
        document.getElementById("namePM").value = ''
        document.querySelector('input[name="scale"]:checked') = false
        document.querySelector('input[name="sadFor"]:checked') = false
        document.querySelector('input[name="makeBetter"]:checked') = false
        document.querySelector('input[name="gladFor"]:checked') = false
        submit()
    }
    if ((document.getElementById("notFamiliar").checked === true ||
        document.getElementById("diffToAnswer").checked === true) && (document.getElementById("yes").checked === false && document.getElementById("no").checked === false)) {
        document.getElementById("err-5").classList.remove("hidden")
        e.preventDefault()
    }

    const condition = Boolean((document.getElementById("notFamiliar").checked === true ||
        document.getElementById("diffToAnswer").checked === true)
    )

    if (!condition) {
        if (document.querySelector('input[name="canCall"]:checked') === null) {
            document.getElementById("err-5").classList.remove("hidden")
            goTo("q-5")
            e.preventDefault()
        }

        if ((document.querySelector('input[name="sadFor"]:checked') === null && document.querySelector('input[name="makeBetter"]:checked') === null) && document.querySelector('input[name="gladFor"]:checked') === null) {
            document.getElementById("err-4").classList.remove("hidden")
            goTo("q-4")
            e.preventDefault()
        }

        if (document.querySelector('input[name="scale"]:checked') === null) {
            document.getElementById("err-3").classList.remove("hidden")
            goTo("q-3")
            e.preventDefault()
        }

        if (document.getElementById("namePM").value.length === 0) {
            document.getElementById("err-2").classList.remove("hidden")
            goTo("q-2")
            e.preventDefault()
        }

        if (document.querySelector('input[name="familiarity"]:checked') === null) {
            document.getElementById("err-1").classList.remove("hidden")
            goTo("q-1")
            e.preventDefault()
        }
    }
}