// Kiểu dữ liệu

// var a = 1

// const b = 2
// let c = 3
// b = 5

// Kiểu dữ liệu: (key: value)
// string
// const a = 'hkajlsdfhgaks3284790sr273812'
// //number
// const number = 6.86
// //Boolean
// const boolean = false
// const boolean1 = true
// //null
// const anull = null
// //undefined
// JSON
// Object
// const obj = {
//     name: 'truong',
//     age: 24
// }

// console.log(obj)

// Array

// const arr = ['truong',18,null, undefined, true,obj ]
// console.log(arr)


// HÀM

// function showName(){
//     console.log('truong')
// }
// showName()

// cách 3: arrow function
// const showName = (name, age) => {
//     // logic
//     console.log(`ten toi la ${name}, tuoi: ${age}`)
// }
// showName('truong', 18)


// const me = () => {
//     console.log('toi ne')
//     showName({name: 'truong', age: 18})
// }
// me()

// const showName = ({name, age}) => {
//     // logic
//     console.log(`ten toi la ${name}, tuoi: ${age}`)
// }

//PURE FUNCTION - hàm thuần khiết

// const tinhtien = (soluong) => {
//     const gia = 100
//     const tongtien = soluong * gia
//     return tongtien
// }

// const travaoday = tinhtien(5)

// const verify = (age) => {
//     let du18tuoi = true
//     if(age < 18){
//         du18tuoi = false
//     }
//     return du18tuoi
// }

// const people = [
//     {
//         name: 'truong',
//         age: 24
//     },
//     {
//         name: 'vinh',
//         age: 17 
//     }
// ]

// console.log(people.length)

// console.log('a' === 'a')

// for (let i = 0; i < people.length; i++) {
//     const item = people[i]
//     const enough = verify(item.age)
    
//     if(enough === true){
//         console.log('Bạn lớn rồi')
//     }else{
//         console.log('chưa lớn')
//     }
// }







// Phạm vi hoạt động của biến


// Biến toàn cục

// const a = 10;

// const showA = () =>{
//     console.log(a)
// }
// showA()


// const showA = () =>{
//     const a = 10;

// }
// console.log(a)



// Biến cục bộ

// const home = () =>{
//     const ketsat = 10;
//     console.log(ketsat)
// }
// home()

// CLASS : OOP (hướng đối tượng - object oriented programing)

// class Home {
//     //contructor :: cấu trúc - để định nghĩa biến của class
//     constructor(diachi){
//         this.address = diachi
//     }

//     showAddress(){
//         return console.log(this.address)
//     }
// }

// const nhatoi = new Home('xom 9 giao tien')

// console.log(nhatoi.showAddress())



// CÂU LỆNH ĐIỀU KIỆN

// const age = 22

// if(age < 18){
//     console.log('zeeeee');
// }
// else if(age === 18){
//     console.log('Bạn đang 18 tuổi')
// }
// else{
//     console.log('ko đủ 18')
// }

// so sánh bằng ( == )

// const a = 1
// const b = '1'
// // a: Number, b: string

// console.log(a === b)

// const a = {
//     name: 'truong'
// }
// const b = {
//     name: 'truong'
// }

// console.log(a === b)



// CODE thể hiện ý nghĩa cua RETURN


// const checkAge = (age) =>{

//     if(age < 6){
//         return console.log('Nhỏ hơn 6 tuổi')
//     }
    
//     if( age < 14){
//         return console.log('Nhỏ hơn 14 tuổi')
//     }
// }
// // const checkAge = (age) =>{
// //     if(age < 6){
// //         return console.log('Nhỏ hơn 6 tuổi')
// //     }else if( age < 14){
// //         return console.log('Nhỏ hơn 14 tuổi')
// //     }else{
// //         return console.log('Không biết nữa')
// //     }
// // }

// checkAge(4)




// Viết hàm tính diện tích hình chữ nhật


const people = [
    {
        name: 'truong',
        age: 24
    },
    {
        name: 'vinh',
        age: 17 
    },
    {
        name: "Thu vu",
        age: 42
    }
]

let max = people[0].age
let nguoilontuoinhat

people.forEach( (item, index) => {
    const age = item.age
    console.log(item)

    if(age > max){
        // Nếu lớn hơn max thì cập nhật lại : max , nguoilontuoinhat

        max = age

        nguoilontuoinhat = item
    }

} )
console.log(`tuổi lớn nhất:`, max)
console.log(`Tên người lớn tuổi nhất:`, nguoilontuoinhat.name)
