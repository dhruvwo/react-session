export const getNewName = () => {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const numberOfSyllables = Math.floor(Math.random() * 3) + 1; // Random number of syllables between 1 and 3
  let name = "";

  for (let i = 0; i < numberOfSyllables; i++) {
    // Randomly choose a consonant and a vowel for each syllable
    const consonant = consonants.charAt(
      Math.floor(Math.random() * consonants.length)
    );
    const vowel = vowels.charAt(Math.floor(Math.random() * vowels.length));

    // Combine the consonant and vowel to form a syllable
    const syllable = consonant + vowel;

    // Add the syllable to the name
    name += syllable;
  }
  return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter of the name
};

export function generateRandomId(length = 4) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
}
