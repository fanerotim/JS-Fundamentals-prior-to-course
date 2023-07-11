function softUniStudents(arr) {

    let result = {};

    for (let item of arr) {

        if (item.includes(':')) {
            let [course, capacity] = item.split(': ');
            capacity = Number(capacity);

            if (!result.hasOwnProperty(course)) {
                result[course] = { capacity, students: [] };
            } else {
                result[course].capacity += Number(capacity);
            }
        } else {
            item = item.split(' ');
            let usernameAndCredits = item.shift();
            usernameAndCredits = usernameAndCredits.split(']').join('').split('[');

            let username = usernameAndCredits.shift();
            let credits = Number(usernameAndCredits.shift());
            course = item.pop();
            let email = item[2];

            if (result.hasOwnProperty(course)) {

                if (result[course].capacity > 0) {
                    result[course].students.push({ credits, username, email });
                    result[course].capacity--;
                }
            }
        }
    }
    
    let finalResult;
    result = Object.entries(result).sort((a, b) => b[1].students.length - a[1].students.length);
    for (let item of result) {
        finalResult = Object.entries(item[1].students).sort((a, b) => b[1].credits - a[1].credits);
        console.log(`${item[0]}: ${item[1].capacity} places left`);
        for (let el of finalResult) {
            console.log(`--- ${el[1].credits}: ${el[1].username}, ${el[1].email}`);
        }
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with emailuser2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);

// softUniStudents([
//     'JavaBasics: 15',
//     'user1[26] with email user1@user.com joins JavaBasics',
//     'user2[36] with email user11@user.com joins JavaBasics',
//     'JavaBasics: 5',
//     'C#Advanced: 5',
//     'user1[26] with email user1@user.com joins C#Advanced',
//     'user2[36] with email user11@user.com joins C#Advanced',
//     'user3[6] with email user3@user.com joins C#Advanced',
//     'C#Advanced: 1',
//     'JSCore: 8',
//     'user23[62] with email user23@user.com joins JSCore']);

// softUniStudents([
//     'JavaBasics: 2',
//     'C#Advanced: 3',
//     'JSCore: 4',
//     'JSCore: 2',
//     'user13[50] with email user13@user.com joins JSCore',
//     'user1[25] with email user1@user.com joins JSCore',
//     'user8[18] with email user8@user.com joins C#Advanced',
//     'user6[85] with email user6@user.com joins JSCore',
//     'user11[3] with email user11@user.com joins JavaBasics',
//     'user45[105] with email user45@user.com joins JSCore',
//     'user007[20] with email user007@user.com joins JSCore',
//     'user700[29] with email user700@user.com joins JSCore',
//     'user900[88] with email user900@user.com joins JSCore']);