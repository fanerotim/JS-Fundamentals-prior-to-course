function comments(arr) {

    let users = {};
    let articles = {};
    let curUser;
    let curArticle;

    let result = {};

    for (let item of arr) {
        
        if (item.includes('user')) {
            item = item.split(' ');
            curUser = item.pop();
            users[curUser] = curUser;      
        } else if (item.includes('article')) {
            item = item.split(' ');
            curArticle = item.pop();
            articles[curArticle] = curArticle;
        } else {
            let splittedItem = item.split(': ');
            let usrAndArticle = splittedItem.shift();
            [curUser, curArticle] = usrAndArticle.split(' posts on ');
            
            if (users.hasOwnProperty(curUser) && articles.hasOwnProperty(curArticle)) {
                if (!result.hasOwnProperty(curArticle)) {
                    result[curArticle] = [];
                }
                splittedItem = splittedItem.join(' ');
                let [title, content] = splittedItem.split(', ')
                
                let innerObj = {
                    user: curUser,
                    title: title,
                    content: content
                }
                result[curArticle].push(innerObj);
            }
        }
    }
    result = Object.entries(result);

    for (let i = 0; i < result.length; i++) {
        let nestedArr = result[i];
        for (let j = 0; j < nestedArr.length; j++) {
            result[i].push(nestedArr[1].length);
            break;
        }  
    }
    result.sort((a, b) => b[2] - a[2]);
    
    for (let currentArticle of result) {
        console.log(`Comments on ${currentArticle[0]}`);
        let strToPrint = '--- From user '
        let moviesArr = currentArticle[1];
        let inArr = Object.entries(moviesArr).sort((a, b) => a[1].user.localeCompare(b[1].user))
        
        for (let curItem of inArr) {
            let curObj = curItem[1]
            for (let key in curObj) {
                strToPrint += `${curObj.user}: ${curObj.title} - ${curObj.content}`
                console.log(strToPrint);
                strToPrint = '--- From user '
                break;  
            }  
        }  
    }
}

// comments([
//     'user aUser123', 
//     'someUser posts on someArticle: NoTitle, stupidComment', 
//     'article Books', 
//     'article Movies', 
//     'article Shopping', 
//     'user someUser', 
//     'user uSeR4', 
//     'user lastUser', 
//     'uSeR4 posts on Books: I like books, I do really like them', 
//     'uSeR4 posts on Movies: I also like movies, I really do', 
//     'someUser posts on Shopping: title, I go shopping every day', 
//     'someUser posts on Movies: Like, I also like movies very much']);

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])