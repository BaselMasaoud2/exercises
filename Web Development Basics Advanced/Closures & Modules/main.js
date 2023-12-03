const createPerson = function(name, age){
    const person = {
        personName: name, 
        personAge: age
    }

    return person
}

const person = createPerson("Elon", 42)
console.log(person)


const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}
const math = mathOperations()
console.log(math(1,2))

console.log("----------------------------------------------------")

const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  const baz = foo() //out here, x doesn't exist
   baz() //but when we invoke baz, we're printing x!
   console.log("----------------------------------------------------")

   const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()
  console.log("----------------------------------------------------")


  
  const Family = function () {
    const members = []

    const birth = function (name) {
        members.push(name)
        console.log(members)
    }

    return birth
}

const giveBirth = Family()
giveBirth("Clarissa")
giveBirth("Mayana")


console.log("----------------------------------------------------")
console.log("----------------------------------------------------")
console.log("----------------------------------------------------")
console.log("----------------------------------------------------")
console.log("----------------------------------------------------")
console.log("----------------------------------------------------")


// const StringFormatter = function() {
//   const capitalizeFirst = function (str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   }
//   const toSkewerCase = function (str) {
//     return str.replace(/\s+/g, '-');
//   }
//   return {capitalizeFirst: capitalizeFirst,
//   toSkewerCase:toSkewerCase}
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy"))
// console.log(formatter.toSkewerCase("blue box")) 

// -------------------------------------

// const Bank = function (){

//   let privtMony = 500;

//   const depositCash = function (cash){
//     privtMony += cash;
//   }
  
//   const checkBalance = function (){
//      console.log(`Your current balance is $${privtMony}.`);
//   }
   
//   return {deposit:depositCash,
//     showBalance:checkBalance}
//   }

//   const bank = Bank()
//   bank.deposit(200)
//   bank.deposit(250)
//   bank.showBalance() 



// ---------------------------------------



const SongsManager = function(){
    
  const _song = {}
  const _youtubeBase = "https://www.youtube.com/watch?v="
  
  const addSong = function(name, url){
    _song[name] =url.slice(32);
  }
  
  const getSong = function (name){
    return  _youtubeBase + _song[name]
  }

  return {addSong:addSong, getSong:getSong}
}


 const songsManager = SongsManager()
 songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
 songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
 songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

 console.log(songsManager.getSong("sax"))