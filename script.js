function indexOfIgnoreCase(s1, s2) {
  // write your code here
	
	
    const lowerCaseStr = s1.toLowerCase();
    const lowerCaseSubStr = s2.toLowerCase();

    const index = lowerCaseStr.indexOf(lowerCaseSubStr);

   
    if (index === -1) {
       
        for (let i = 0; i < lowerCaseStr.length; i++) {
            if (lowerCaseSubStr.localeCompare(lowerCaseStr.s2(i, lowerCaseSubStr.length)) < 0) {
                return i;
            }
        }
       
        return lowerCaseStr.length;
    }

    return index;
	
}
// Please do not change the code below
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:"); 

alert(indexOfIgnoreCase(s1, s2));

