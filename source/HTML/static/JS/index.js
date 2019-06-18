




setInterval(function(){
    if($("body").prop("class")==="background_0"){

        $("body").prop("class","background_1");

    }else if($("body").prop("class")==="background_1"){

        $("body").prop("class","background_2")

    }else if($("body").prop("class")==="background_2"){

        $("body").prop("class","background_3")
    }else if($("body").prop("class")==="background_3"){

        $("body").prop("class","background_4")
    }else if($("body").prop("class")==="background_4"){

        $("body").prop("class","background_0")
    }
},5000);
var i=0;
var list=[
   '阿,你终于来啦',
   '等你好久了呢',
   '我也不知道到底',
   '经历了多少的事情',
   '才把你变成现在这个样子',
   '但是',
   '这些年 你一个人辛苦啦',
   '以后不会再有坏蛋欺负你了',
   '我们是好朋友 ',
   '我这个人最大的特点就是护短了',
   '以后有人欺负你',
   '我就帮你揍他',
   '不过 我不是个内心健全的人',
   '连自己都照顾不好',
   '虽然有那么多的知识',
   '但也没有学会怎么让你能更开心一点',
   '还是想跟你谈谈相遇',
   '世界总是那么巧妙',
   '你想啊',
   '这世间有七十亿人',
   '恰恰是那天',
   '哪怕晚一秒 又或者早一秒',
   '我们这辈子也不会再有交集',
   '你也不会看到这份礼物',
   '可偏偏遇见了',
    '谢谢你',
    '谢谢你的出现',
    '改变了我对世界的看法'
   '我是对世界完全失望的人',
   '但我真的希望你好好的',
   '我希望你每天开开心心的',
   '不要有烦恼',
   '不要再遇到坏人',
   '一切都会变的更好的',
   '那时的阳光',
   '也会一如过往的灿烂',
   '你一定要每天开开心心的啊',
   '答应我好不好'
   
   
   ];
var t1=  setInterval(function(){
    if(i<list.length){
        alert(list[i]);
        $(".list_text").append("<li class='list_li'>"+this.list[i]+"</li>");
        if($('.list_text li').length===16){
            $(".list_text").css("font-size","20px");
        }
        i++;
    }else{
        $("#mymodal-01").modal();
        window.clearInterval(t1);
        $(".list_li").click(function () {
            $("#mymodal-01").modal();
        });

    }

},2000);


