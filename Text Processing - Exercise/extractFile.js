function extractFile(input) {

    let lastDot = input.lastIndexOf('.');
    let lastbackSlach = input.lastIndexOf("\\");
    let fileExtension = input.slice(lastDot + 1);
    let fileName = input.slice(lastbackSlach + 1, lastDot);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');