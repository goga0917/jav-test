// console.log("")= Browser consolida natijani ko'rsatish
console.log("Assalomu alaykum");
console.log("bugun java darslari");

// variable 
age = 28
firstname = "Goga"
console.log(firstname, age, "yoshda")

// type of variables = var, let, const
// var real = "Real Madrid"
// var a = 45 //o'zgaruvchini elon qilish
// var b = 67
// console.log(a + b)
// var a = 89 //redeclare
// console.log(a + b)
// var a = 96 //redeclare
// console.log(a + b)
// var k; //declare
// k = 45; //initialization
// k = 34; //assignment
// console.log(k, k) //output

// let
let msg = "hello Javascript"
// msg = "Hello Goga" Let bilan o'zgsruvchini qayta elon qilish mumkin emas

console.log(msg) //ammo qayta Tayinlash mumkin (Assignment)

// const
// const x = 36 //const bilan berilgan o'zgaruvchini qayta o'zgartirib bo'lmaydi.

// console.log(x)

// string va number
// string => bu matnli malumot turi "qo'shtirnoq ichida e'lon qilinadi"

let surname = "Artikov"
console.log(surname)

// let f = 56
// console.log(f)
// //typeof
// console.log(typeof "artikov")
// console.log(typeof 45)

//  let A = 10
//  let B = 20 
//  // A=20 B=10
//  let swap = A; //swap =10
//  A = B //a=20
//  B = swap //b=10
//  console.log(A, B)

//  PascalCase
let FirstName = "Goga"
let LastName = "Artikov"
console.log(FirstName, LastName)
let middle_name = "Rashidilloyevich"
console.log(middle_name)
// camelCace
let iMarried = true
// kebab-case
// let first-name = "artikov" not supported
// arifmetik operator
// + qo'shish - ayirish *ko'paytirish /bo'lish
console.log(3+4)
console.log(3-4)
console.log(8*3)
console.log(48/8)
// darajaga ko'tarish
// 3ning 4-darajasi=>3*3*
console.log(45/7)
console.log(5*6)

// iincrement pre va post

let l = 5
console.log(l++)
// console.log(++l)
// console.log(l++)

// 1-masala

// let R = 10
// let = pi = 3.14
// let L = 2 * pi * R
// let S = pi*R**2
// console.log(L, S)

//begin5 
// let a = 3
// let b = 4
// let c = (a**2 + b**2) ** 0.5
// let P = a+b+c
// console.log(c, P)
// //string
// let text = "salom"
// let message = 'hello "men" world'
// let bactics = `hello soatmurod ${text} ${message}`
// console.log(bactics)
// // number 
// let num = 45
// console.log(num)
// //typeof operatori
// let res = typeof text
// console.log(res)

// //undefined
// let k
// console.log(k)
 
// //null
// let product = null
// console.log(product)

// //booLean

// let response = 8>5
// let falsy = 7>9
// console.log(response, falsy)

// let number = 946
// let birlik = number%10
// let unlik = parseInt(number/10)%10
// let yuzlik = parseInt(number/100)
// console.log(birlik, unlik, yuzlik)


// begin 1
// let a = 5
// let b = 3
// let S = a * b 
// let P = 2 * (a + b)

// console.log(S, P)

// Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to
// aniqlansin.
// V = a^3
// S = 6 * a^2

// let a = 2.5
// let V = a**3
// let S = 6 * (a ** 2) 
// console.log(V, S)

// Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti
// Sni aniqlansin.
// V = a * b * c
// S = 2 * (a * b + b * c + a * c)

// let a = 4
// let b = 5
// let c = 6
// let V = a * b * c
// let S = 2 * (a * b + b * c + a * c)
// console.log(V, S)

// Begin5. Ikkita son a va b berilgan. ularning o'rta arifmetigi M aniqlansin M = (a + b) / 2

// let a = 2
// let b = 3
// let M = (a + b) / 2
// console.log(M)

// Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2).
// Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// S1 = π * r1
// S2 = π * r2
// S = π * (r1^2 − r2^2).

// let r1 = 8
// let r2 = 7
// let S1 = Math.PI * r1
// let S2 = Math.PI * r2
// let S = Math.PI * (r1**2 - r2**2)
// console.log(S)

// let A = 39
// let res = A%2==1
// console.log(res)

// Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2 * π * R
// S = π * R^2
// π = 3.14



// and=> Mantiqiy ko'paytirish
let result = true && true && false && true
//yoki =>Mantiqiy qo'shish
let natija = true || false || true || false
console.log(result, natija)

let a = 257
let yuzlik = parseInt(a/100)














const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input
}
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}