let testPara = "Hello there, here is a word. The objective is to replace word with a different word each time Word appears in this paragraph."

// Method 1: replace first match using the replace method
testPara.replace("word", "new word");

// Method 2: literal notation for replace that isn't case sensitive
testPara.replace(/word/g, 'new word');

// method 2: RegExp object for replace that isn't case sensitive
testPara.replace(new RegExp('word', 'g'), 'new word');

// method 1: literal notation for replace that is case sensitive
testPara.replace(/word/gi, 'new word');

// method 2: RegExp object for replace that is case sensitive
testPara.replace(new RegExp('word', 'gi'), 'new word');
