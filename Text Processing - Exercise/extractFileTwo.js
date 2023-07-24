function solve(input) {

    let lastDotIndex = input.lastIndexOf('.');
    let extension = input.substring(lastDotIndex + 1);
    let lastSlashIndex = input.lastIndexOf('\\');
    let fileName = input.substring(lastSlashIndex + 1, lastDotIndex);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.bak.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');