function browserHistory(obj, arr) {

    arr.forEach(el => {
        if (el !== 'Clear History and Cache') {
            let [action, website] = el.split(' ');

            switch(action) {
                case 'Open':
                    if (!obj['Open Tabs'].includes(website)) {
                        obj['Open Tabs'].push(website);
                        obj['Browser Logs'].push(el);
                    }
                    break;
                case 'Close':
                    if (obj['Open Tabs'].includes(website)) {
                        let websiteIndex = obj['Open Tabs'].indexOf(website);
                        let closedWebsite = obj['Open Tabs'].splice(websiteIndex, 1);
                        obj['Recently Closed'].push(closedWebsite);
                        obj['Browser Logs'].push(el);
                    }
                    break;
            }
        } else {
            obj['Open Tabs'] = [];
            obj['Browser Logs'] = [];
            obj['Recently Closed'] = [];
        }
    });

    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

// browserHistory({
//     "Browser Name":"Mozilla Firefox", 
//     "Open Tabs":["YouTube"], 
//     "Recently Closed":["Gmail", "Dropbox"], 
//     "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]}, 
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);