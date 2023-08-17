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
    { type: 'text', text: '是不是美美哒~' },
	{ type: 'br' },
	{ type: 'text', text: '刚认识小蚕蚕的时候觉得小蚕蚕是一个正常的人，是一个自律聪明热爱生活特别有意思的人…… 后来才发现小蚕蚕是一个不正常的人',time: 100 },
	{ type: 'wait', time: 900 },
	{ type: 'delete', num: 5 },
	{ type: 'text', text: '不一般的人。' },
	{ type: 'br' },
	{ type: 'text', text: '当小蚕蚕看到这里的时候肯定想吼我' },
	{ type: 'wait', time: 900 },
	{ type: 'delete', num: 2 },
	{ type: 'text', text: '亲我一下。蚕蚕肯定特别的感动。。。。。。。。' },
	{ type: 'br' },
	{ type: 'text', text: '时间过的真快，和小蚕蚕在一起四舍五入已经4年了，从刚开始一个星期见一次就够了，到后边一个星期要见很多次，再到后边天天见还是想腻再一起，最后变成天天平淡的在一起。' },
	{ type: 'text', text: '不是感情变淡了，而是习惯了和蚕蚕在一起，喜欢小蚕蚕变成了一种习惯。蚕蚕变成了空气，无处不在但是又不能缺少。' },
	{ type: 'br' },
	{ type: 'text', text: '这一年发生了很多事，我和小蚕蚕更加的了解对方了，也学会照顾对方的情绪了，更重要的是现在的小蚕蚕已经变成梁太太了。。。' },
	{ type: 'text', text: '小蚕蚕从一只张牙舞抓的小怪兽变成了一直凶凶的大脑斧，又变成了一直不怎么凶的小喵喵。就算小喵喵还是好凶，但是很快就会变好了。我们正在慢慢的变的越来越合适' },
	{ type: 'text', text: '虽然有时候小蚕蚕凶起来我不想理小蚕蚕，但是如果我不理小蚕蚕，小蚕蚕肯定会更伤心更生气更凶的。小蚕蚕特别害怕我不喜欢她，总觉得我对小蚕蚕的爱变少了……所以我要更爱小蚕蚕。' },
	{ type: 'text', text: '小蚕蚕说很遗憾没有早点遇到我，我也觉得我们没有早点遇到浪费了好多时间，要是能早点遇到小蚕蚕肯定会和小蚕蚕一起变的更好，好在我们还有好多时间可以在一起磨合，我们会越来越合适。' },
	{ type: 'br' },
	{ type: 'text', text: '' },
	{ type: 'text', text: '' },
	{ type: 'text', text: '' },
]

var autoType = new AutoType(content, arr);
autoType.once("end", function() {
    addClass(content, 'end')
})
