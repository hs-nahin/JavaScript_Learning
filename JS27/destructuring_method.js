const getSomething = () => {
    return [25, 35]
}

// const [first, second] = getSomething();
const value = getSomething();
console.log(value[0], value[1]);