const arabicNumbers = "۰۱۲۳۴۵۶۷۸۹"
export function convertNumberToLetter(num) {
  let result = ""
  const str = num.toString();
  for(let c of str){
    result += arabicNumbers.charAt(c)
  }
  return result
}
console.log(convertNumberToLetter(4))