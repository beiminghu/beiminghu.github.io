
document.onkeydown = function(){
    // 屏蔽 f12
    if(window.event && window.event.keyCode == 123) {
        alert("想干啥，就不给你看。");
        event.keyCode=0;
        event.returnValue=false;
    }
    //  屏蔽Alt
    if (window.event.altKey){
        alert('别按alt!他有毒');
        return false;
    }
    //  禁止按Shift键
    if(event.shiftKey){
        alert("Shift有毒");
    }
    //  禁止按ctrl键
    if (event.ctrlKey)
    {
        alert("按ctrl想干啥");
        event.returnValue=false;
    }

    // if(window.event){
    //     alert("不给你看就是不给你看");
    // }

}


//  屏蔽 鼠标右键
document.oncontextmenu = function (event){
    if(window.event){
        event = window.event;
        alert("想干啥，想干啥，快给我合上。");
    }try{
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
            return false;
        }
        return true;
    }catch (e){
        return false;
    }
}





