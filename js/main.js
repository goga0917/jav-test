// console.log("")= Browser consolida natijani ko'rsatish
// console.log("Assalomu alaykum");
// console.log("bugun java darslari");

// // variable 
// age = 28
// firstname = "Goga"
// console.log(firstname, age, "yoshda")

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
// let msg = "hello Javascript"
// msg = "Hello Goga" Let bilan o'zgsruvchini qayta elon qilish mumkin emas

// console.log(msg) //ammo qayta Tayinlash mumkin (Assignment)

// const
// const x = 36 //const bilan berilgan o'zgaruvchini qayta o'zgartirib bo'lmaydi.

// console.log(x)

// string va number
// string => bu matnli malumot turi "qo'shtirnoq ichida e'lon qilinadi"

// let surname = "Artikov"
// console.log(surname)

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
// let FirstName = "Goga"
// let LastName = "Artikov"
// console.log(FirstName, LastName)
// let middle_name = "Rashidilloyevich"
// console.log(middle_name)
// // camelCace
// let iMarried = true
// kebab-case
// let first-name = "artikov" not supported
// arifmetik operator
// + qo'shish - ayirish *ko'paytirish /bo'lish
// console.log(3+4)
// console.log(3-4)
// console.log(8*3)
// console.log(48/8)
// // darajaga ko'tarish
// // 3ning 4-darajasi=>3*3*
// console.log(45/7)
// console.log(5*6)

// iincrement pre va post

// let l = 5
// console.log(l++)
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

// let a = null
// let x 
// console.log(x, a)

//ternary operator

// let shart = false
// let natija = shart ? "goga" : " soatmurod"
// console.log(natija)

// let age = 14 
// let natija = age >= 18 ? "voyaga yetgan" : "voyaga yetmagan"
// console.log(natija)

// let pi = Math.E
// console.log(pi)

// and=> Mantiqiy ko'paytirish
// let result = true && true && false && true
// //yoki =>Mantiqiy qo'shish
// let natija = true || false || true || false
// console.log(result, natija)

// let a = 257
// let yuzlik = parseInt(a/100)

// let k = Math.round(9.5)
// let k = Math.trunc(-9.5)
// let k = Math.ceil(9.1)
// let k = Math.floor(9.999)
// let k = Math.pow(3,4)
// console.log(Math.sqrt(64))
// console.log(Math.abs(3))
// console.log(Math.min(78, 89, 34, 65))
// console.log(Math.max(78, 89, 34, 65))
// let tasodifiy = Math.trunc(65*Math.random())
// console.log(tasodifiy)

// let k = Number.isInteger(9.6)
// k = Number.isSafeInteger((2**53+1))
// k = Number.parseInt(9.6)
// k = parseFloat("9.564")
// console.log(k.toString())
// console.log((5).toString(2))

// let son = "goga"
// console.log(Number(son))
// console.log(+son)
// console.log(1*son)
// let A = 4, B = 5, C = 8;
// let Y = Math.sqrt((A+B+C)** 2 - (A-B-C)**2)
// console.log(Y)

// let shart = true
// if(shart){
//     console.log("1")
// }
// else{
//     console.log("2")
// }

//iff 1 
// let c = -18
// if(c > 0){
//     c++;
// }
// else{
//     c =c -2 
// }
// console.log(c)

// let a = 2, b = -5, c = -5;
// let count = 0
// if (a > 0) {
//     count++
// }
// if (b > 0) {
//     count++
// }
// if (c > 0) {
//     count++
// }
// console.log(count, 3-count)

// let x = 10 
// let y = null
// if (x < 0){
//     y = -x
// }
// else if (x > 0 && x < 2){
//     y = x**2
// }
// else {
//     y=4
// }
// console.log(y)

// let oy = 9
// switch (oy){
//     case 1:
//         console.log("Yanvar")
//         break;
//     case 2:
//         console.log("Fevral")
//         break;
//     case 3:
//         console.log("Mart")
//         break;
//     case 4:
//         console.log("Aprel")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("Iyun")
//         break;
//     case 7:
//         console.log("Iyul")
//         break;
//     case 8:
//         console.log("Avgust")
//         break;
//     case 9:
//         console.log("Sentabr")
//         break;
//     case 10:
//         console.log("Oktabr")
//         break;
//     case 11:
//         console.log("Noyabr")
//         break;
//     case 12:
//         console.log("Dekabr")
//         break;
//      default:
//          console.log("Bunday oy mavjud emas")
// }

// let sum = 0 
// for(let i=1; i<=20; i++){
//     sum += i
// }
// console.log(sum)

// let j = 1
// for (;j<=10;j++){
//     console.log(j)
// }

// for (let i=1; i<10; i++){
//     console.log(i)

// }

// UYGA VAZIFA

// if-1

// let son = 7
// if (son > 0){
//     son = son +1
// }
// console.log(son)

// if-2

// let son = 5;
// if (son > 0) {
//     son = son + 1;
// } else if (son < 0) {
//     son = son - 2;
// } else {
//     son = 10;
// }
// console.log(son);

// if-3

// let a = 3;
// let b = -2;
// let c = 5;

// let count = 0;
// if (a > 0) {
//     count++;
// }
// if (b > 0) {
//     count++;
// }
// if (c > 0) {
//     count++;
// }
// console.log(count);

// if-4

// let a = 5;
// let b = 9;
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if-5

// let a = 10;
// let b = 3;

// if (a < b) {
//     console.log(1);
// } else if (b < a) {
//     console.log(2);
// } else {
//     console.log("teng");
// }

// if-6

// let a = 3;
// let b = 7;

// if (a > b) {
//     console.log(a);
//     console.log(b);
// } else {
//     console.log(b);
//     console.log(a);
// }

// if-7

// let A = 8;
// let B = 3;
// if (A > B) {
//     let temp = A;
//     A = B;
//     B = temp;
// }
// console.log("A =", A);
// console.log("B =", B);

// if-8

// let A = 3;
// let B = 5;
// if (A !== B) {
//     let sum = A + B;
//     A = sum;
//     B = sum;
// } else {
//     A = 0;
//     B = 0;
// }
// console.log("A =", A);
// console.log("B =", B);

// if-9

// let A = 3;
// let B = 7;
// if (A !== B) {
//     let max = A > B ? A : B;
//     A = max;
//     B = max;
// } else {
//     A = 0;
//     B = 0;
// }
// console.log(A, B);

// if-10

// let a = 5;
// let b = 2;
// let c = 8;
// let min;
// if (a <= b && a <= c) {
//     min = a;
// } else if (b <= a && b <= c) {
//     min = b;
// } else {
//     min = c;
// }
// console.log( min);

// if-11

// let a = 5;
// let b = 2;
// let c = 8;
// let midle;
// if ((a > b && a < c) || (a < b && a > c)) {
//     midle = a;
// } else if ((b > a && b < c) || (b < a && b > c)) {
//     midle = b;
// } else {
//     midle = c;
// }
// console.log(midle);

// if-12

// let a = 5;
// let b = 2;
// let c = 8;

// let min;

// if (a <= b && a <= c) {
//     min = a;
// } else if (b <= a && b <= c) {
//     min = b;
// } else {
//     min = c;
// }

// if (min === a) {
//     console.log(b, c);
// } else if (min === b) {
//     console.log(a, c);
// } else {
//     console.log(a, b);
// }

// if-13

// Case 1

// let K = 4;

// switch (K) {
//     case 1:
//         console.log("yomon");
//         break;
//     case 2:
//         console.log("qoniqarsiz");
//         break;
//     case 3:
//         console.log("qoniqarli");
//         break;
//     case 4:
//         console.log("yaxshi");
//         break;
//     case 5:
//         console.log("a'lo");
//         break;
//     default:
//         console.log("xato");
// }

// Case 2

// let oy = 1;

// switch (oy) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("qish");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("bahor");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("yoz");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("kuz");
//         break;

//     default:
//         console.log("xato");
// }

// Case 3

// let oy = 2
// switch (oy) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 kun");
//         break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 kun");
//         break;

//     case 2:
//         console.log("28 kun");
//         break;
//     default:
//         console.log("xato");
// }








const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input
}
function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "Error";
    }
}