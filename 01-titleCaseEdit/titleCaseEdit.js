function titleCaseEdit(title) {
  // Insert code here;
  splitTitle = title.split(" ");
  for(i = 0; i<splitTitle.length; i++){
    splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substr(1).toLowerCase();
  }
  title = splitTitle.join(" ");
  return title;
}
console.log(titleCaseEdit("hello world"));

// Do not edit this line;
module.exports = titleCaseEdit;