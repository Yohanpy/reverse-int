module.exports = function reverse (n) {

    let rev = (Math.abs(n)).toString().split('').reverse().join('');
    return rev;
    }
