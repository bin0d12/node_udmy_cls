let outerFun = (a) => {
    let b =10;
    const innerFun = () => {
        console.log(a + b);
    }
    innerFun()
}
outerFun(5)