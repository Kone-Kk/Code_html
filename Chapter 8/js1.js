function $$(id) { 
    return document.getElementById(id); 
   } 
   var strOrigin = "http://localhost"; 
   //自定义页面加载函数
   function pageload() { 
    window.addEventListener('message', 
    function(event) { 
    if (event.origin == strOrigin) { 
    $$("pStatus").style.display = "block"; 
    $$("pStatus").innerHTML += event.data; 
    } 
    }, 
    false); 
   } 
   //点击"请求"按钮时调用的函数
   function btnSend_Click() { 
    //获取发送内容
    var strTxtValue = $$("txtNum").value; 
    if (strTxtValue.length > 0) { 
    var targetOrigin = strOrigin; 
    $$("ifrA").contentWindow.postMessage(strTxtValue, targetOrigin); 
    $$("txtNum").value = ""; 
    } 
}   