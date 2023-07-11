
// -----1-----


const btn = document.querySelector(".btn")



btn.addEventListener("click", ()=> {
    const enter1 = document.querySelector(".enter1")
    const enter2 = document.querySelector(".enter2")

    const full1 = enter1.value
    const full2 = enter2.value


if (full1 !== "" && full2 !== "") {
    console.log('Обидва поля заповнені');
  } else {
    console.log('Не всі поля заповнені')
  }

})

// -----2-----


const btnwithnumb = document.querySelector("#btnNumb")

btnwithnumb.addEventListener("click", ()=> {

const numberInput1 = document.querySelector("#numb1").value
const numberInput2 = document.querySelector("#numb2").value

const sum = parseInt(numberInput1) + parseInt(numberInput2);

if (sum > 10){
    console.log('Сума більша за 10');
} else {
    console.log('Сума менша або дорівнює 10');
  }
}
)

// -----3-----

const btnWithStr = document.querySelector("#btnWithStr")

btnWithStr.addEventListener("click", ()=> {
const justStr = document.querySelector("#justStr").value

if (justStr.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript")
}
else {
    console.log("Текст не містить слово JavaScript")
}
})

// -----4-----

const btnNumbDiapazon = document.querySelector("#btnNumbDiapazon")

btnNumbDiapazon.addEventListener("click", ()=> {
const numberDiapazon = parseInt(document.querySelector("#numberDiapazon").value)

if (20 > numberDiapazon && numberDiapazon > 10){
    console.log("в діпазоні від 10 до 20");
} 
else {
    console.log("не в діапазоні від 10 до 20");
  }
}
)

// -----5-----

const btnLogIn = document.querySelector("#btnLogIn")

btnLogIn.addEventListener("click", ()=> {
const name = document.querySelector("#name").value
const mail = document.querySelector("#mail").value
const password = document.querySelector("#password").value

const nameLentgh = name.length

const passwordLentgh = password.length

if (nameLentgh >= 3 && mail.includes("@") && mail.includes(".") && passwordLentgh >= 6) {
    window.location.href = "https://en.wikipedia.org/wiki/Cat";
}
else {
    console.log("Сталась помилка!")
}

})

