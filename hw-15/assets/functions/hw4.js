// homework 4
// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів:


 export function getPairs(boys, girls){
    const pairs = [];
    for (let i = 0; i < boys.length; i++) {
        pairs[i] = [boys[i], girls[i]];
    }
    return pairs;
}