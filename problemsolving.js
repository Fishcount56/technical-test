//1
const firstCase = (e) => {
    let total = 0
    for(let i = 0; i < e.length; i++)
    {
        total += e[i]
    }
    let withoutLowest = total - Math.min(...e)
    let withoutHighest = total - Math.max(...e)
    return { withoutLowest, withoutHighest }
}

//2
const secondCase = (arr) => {
    let positiveValue = arr.filter(x => x > 0)
    let negativeValue = arr.filter(x => x < 0)
    let zeroValue = arr.filter(x => x == 0)

    positiveProportion = positiveValue.length / arr.length
    negativeProportion = negativeValue.length / arr.length
    zeroProportion = zeroValue.length / arr.length

    return { positiveProportion, negativeProportion, zeroProportion }
}

//3
const thirdCase = (e) => {
    const timeSystem = e.slice(-2)
    let hours = Number(e.slice(0, 2))
    let time = e.slice(0, -2)
    if(timeSystem == 'AM')
    {
        if (hours === 12)
        {
            return time.replace(e.slice(0, 2), '00')
        }
        return time
    } 
    else if (timeSystem === 'PM')
    {
        if(hours !== 12)
        {
            return time.replace(e.slice(0, 2), String(hours + 12))
        }
        return time
    }
}

console.log(thirdCase('12:30:00PM'))
console.log(secondCase([-2,5,3,1,-7,0]))
console.log(firstCase([1,2,3,4,5]))