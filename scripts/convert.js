var text = '信息板通知日历电子邮件课程讨论板活动项目我的课程我的活动我的项目学习足迹热门话题与我相关特别关注个人资料成绩单个性特点热点活动及热门项目';
var result = '';

for(i = 0; i < text.length; i++) {
  if(text.charCodeAt(i)>127)
    result += '    result += [0x' + text.charCodeAt(i).toString('16') + ']\n';
}

console.log(result);
