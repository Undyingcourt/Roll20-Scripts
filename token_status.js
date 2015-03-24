/*
	Roll 20 - Script 
  
	Title:		Token Status
	Author:		Michael Nekrasov
	Description:
		Sets status to bloodied/dead based on HP 
		
	How to Use:
	
	To Export:
	1. Set IO_Mode Variable to 1
	2. Save script, wait for it to run and copy the resulting string {"version":1,"characters":[{"name":" ....
	3. If Satisfied Set IO_Mode Variable back to 0
	
	To Import:
	1. Set IO_Mode Variable to 2
	2. Copy the string you want to Import to the variable importedJSON
	3. Save script, wait for it to run and import characters, and give complete log message
	4. If Satisfied Set IO_Mode Variable to 0
	
*/
on("change:token", function(obj) {

    if( obj.get("bar3_max") === undefined) return;
    if( obj.get("bar3_value") === undefined) return;
    
    var maxValue = parseInt(obj.get("bar3_max"));
    var curValue = parseInt(obj.get("bar3_value"));	

    if (maxValue != NaN && maxValue > 0 && curValue != NaN) {
        var ratio = curValue / maxValue;
        if (curValue <= 0) {
            obj.set("status_dead", true);
        }
        else if (ratio <= 0.5) {
            obj.set("status_half-heart", true);
        }
        else {
             obj.set("status_dead", false);
             obj.set("status_half-heart", false);
        }
    }
    
});