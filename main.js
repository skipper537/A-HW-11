"use strict"

async function getRandomChinese(length) {
   let result = "";
   for (let i = 0; i < length; i++) {
      let sign = String.fromCharCode(Date.now().toString());
      result += sign.slice(-5);
      await new Promise(res => setTimeout(() => res(), 50));
   };
   console.log(result);
};
getRandomChinese(4);