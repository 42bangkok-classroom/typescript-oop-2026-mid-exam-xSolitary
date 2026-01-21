export{};
const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  const ftword = comment.split(' ');
  const ft2word = ftword.filter(word => word.length >= 5 && word.length <= 10)
  const newstring = ft2word.join(' ');
  return newstring
}
console.log(shortenComment(comment))