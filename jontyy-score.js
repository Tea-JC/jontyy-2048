var data = {
    isAdmin: true,
    score: [['jontyy',100], ['dqy',99], ['yl',98], ['hjt',97], ['syb',96], ['ckb',95], ['lcq',94], ['ctt',93], ['wpx',92], ['lhz',91]]
};
var html = template('test', data);
console.log()
document.getElementById('final').innerHTML = html;