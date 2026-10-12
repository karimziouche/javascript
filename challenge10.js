'use.stict';

// Here are our Astro signs provided as a string.

const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;

  // In Western Astrology there are 12 signs, organized by Earth Elements (Eart, Water, Air, Fire)  //
// You are going to manipulate the following arrays along with this challenge:  //

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [gemini, libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

/* –––––––––––––––––– */

/*  🏁 Add one final element to an array 
    
    Sagittarius is missing from fire signs please add it at the END of the array
    and verify the result.

*/

fireSigns.push(sagittarius);
console.log(fireSigns);

console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);


/* 🏁 Remove the last element of an array

      Sagittarius should not be on earth Signs, please remove Sagittarius from the array, and verify
      the result.
*/

earthSigns.pop();
console.log(earthSigns);

console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 
    🏁  Initialize an empty array in javascript
     Please initialize an empty array and store it in a let variable called zodiacSigns

 */
let zodiacSigns = [];

/*  
     🏁 🏁 Merge Fire, Earth, Water, and Air arrays into zodiacSigns (in that order), using the concat methods 
*/

zodiacSigns = fireSigns.concat(earthSigns, waterSigns, airSigns);

console.log(
  (zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒")
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);
/*  
    🏁 Please print dynamically in console how many elements you have now in the zodiacSigns array
 */

console.log(`There is ${zodiacSigns.length} signs in the zodiac`);

