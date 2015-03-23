// Roll 20 Script
function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function checkCommand(msg, api_call, call_type) {
    if(msg.type == "api" && msg.content.indexOf(api_call) !== -1) {
        log(msg)
        if(msg.selected !== undefined && msg.selected.length >0 ){
            if(findObjs(msg.selected[0]).length = 0) return;
            
            var selected = findObjs(msg.selected[0])[0]
            if(selected ===undefined || selected == "") return;
            
            var type = getAttrByName(selected.get("represents"), "sheet_type");
            if(type == call_type ){
                var content =msg.content.substr(msg.content.indexOf(' ')+1);
                content = replaceAll(content, "[", "[[")
                content = replaceAll(content, "]", "]]") 
                sendChat(msg.who, content)  
            }
        }
      }
  }
  
  
  

on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  
  
  checkCommand(msg, "!pc ", "pc");
  checkCommand(msg, "!npc ", "npc");
  
});