var data = {
    isAdmin: true,
    // score: [['jontyy',100], ['dqy',99], ['yl',98], ['hjt',97], ['syb',96], ['ckb',95], ['lcq',94], ['ctt',93], ['wpx',92], ['lhz',91]]
    score :JSON.parse(storge.getItem('list'))
    // score :[{name :'jontyy',
    //     score:100
    // },{name:'dqy',
    //     score:99
    // },{name:'yl',
    //     score:98
    // },{name:'hjt',
    //     score:97
    // },{name:'syb',
    //     score:96
    // },{name:'ckb',
    //     score:95
    // },{name:'lcq',
    //     score:94
    // },{name:'ctt',
    //     score:93
    // },{name:'wpx',
    //     score:92
    // },{name:'lhz',
    //     score:91
    // }]
};

function run(){
    var html = template('test', data);
    document.getElementById('final').innerHTML = html;
}
