/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)



var concepts = joinList(conceptList);

// Write your code here...

function joinList(arrayConcept) {
  var resultConcept = "";
  for (var i = 0; i < arrayConcept.length; i++) {
    if (i === arrayConcept.length - 1) {
      resultConcept = resultConcept + arrayConcept[i];
   } else {
     resultConcept += arrayConcept[i] + ", ";
   }
 }
  return resultConcept;
}



console.log("Today I learned about " + concepts + ".");

