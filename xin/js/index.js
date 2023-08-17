var content = document.getElementById("answer-content");

// 设置答题框的高度
var getViewPortSize = function() {
    var w = window;
    if (w.innerWidth != null) return { x: w.innerWidth, y: w.innerHeight };
    var d = w.document;
    // 表明是标准模式
    if (document.compatMode == "CSS1Compat") {
        return {
            x: d.documentElement.clientWidth,
            y: d.documentElement.clientHeight
        }
    }
    // 怪异模式
    return { x: d.body.clientWidth, y: d.body.clientHeight }
}

this.clientHeight = getViewPortSize().y;
this.clientWidth = getViewPortSize().x;

content.style.height = this.clientHeight - this.clientWidth / 2 + 'px'

var addClass = function(element, className) {
    var classNames = element.className.split(/\s+/);
    if (classNames.indexOf(className) == -1) {
        classNames.push(className);
    }
    element.className = classNames.join(' ')
}

// 打字效果
var arr = [
    { type: 'text', text: '我家小蚕蚕，又名小肚肚，是个十足的女神经病，嗯？' },
    { type: 'wait', time: 900 },
    { type: 'delete', num: 5 },
    { type: 'text', text: '，嗯!' },
    { type: 'br' },
    { type: 'text', text: '她温柔美丽，善良大方' },
    { type: 'text', text: '，国色天香，沉鱼落雁，如花似玉，闭月羞花，贤良淑德，花容月貌，秋水伊人，一笑倾城，冰清玉洁，娇俏佳人，朱颜玉润，玉骨冰肌，窈窕淑女，美若天仙，一顾倾城，才智国人，出水芙蓉，阿娇金屋，闭月羞花，逞娇呈美，春暖花香，春色满园……', time: 50 },
    { type: 'br' },
    { type: 'text', text: '是不是美美哒~' },
	{ type: 'br' },
	{ type: 'text', text: '刚认识小蚕蚕的时候觉得小蚕蚕是一个正常的人，是一个自律聪明热爱生活特别有意思的人…… 后来才发现小蚕蚕是一个不正常的人' },
	{ type: 'wait', time: 900 },
	{ type: 'delete', num: 5 },
	{ type: 'text', text: '不一般的人。' },
	{ type: 'br' },
	{ type: 'text', text: '她温柔美丽，善良大方' }
]

var autoType = new AutoType(content, arr);
autoType.once("end", function() {
    addClass(content, 'end')
})