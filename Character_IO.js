/*
	Roll 20 - Script 
  
	Title:		Character IO
	Author:		Michael Nekrasov
	Description:
		Imports/Exports Roll 20 Characters as JSON objects. You can export all your characters
		and share them with other Roll 20 Users. 
		
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

var IO_Mode = 0
// 0:		Off
// 1:		Export
// 2:		Import

// --------------------------
// Copy Imported String HERE:
var importedJSON = {}

// ------------------------------------------
// ------ Do Not Edit Bellow This Line ------ 
// ------------------------------------------
var IO_Version = 1.0

on("ready", function() {
	if( IO_Mode == 1)	
		exportAll()
	else if( IO_Mode == 2)
		importAll()
});

function exportAll(){
	var exported = {version: IO_Version, characters:[]}
	var characters = findObjs({_type: "character"})

	for(var i in characters) {
		c = characters[i]
		e = exportChar(c)
		
		if(e != null)
			exported.characters.push(e)
	}
   
	var checkIfComplete = setInterval(function(){ 
		numReady = 0;
		
		exportedChar = exported.characters
		for(var i in exportedChar){			
			if(exportedChar[i].pending === undefined)
				numReady++
		}
		
		if(numReady >= exportedChar.length){
			clearInterval(checkIfComplete)
			log("Export complete")
			log("---- COPY the following LINE ----")
			log( exported )
			return
		}
		
		log("Exported "+numReady+" of "+exportedChar.length)
	},1000)
	
	function exportChar( character){
		var exported = {};
		exported.name = character.get('name');
		
		//Filter npc and set CR
		var regEx = /\s*\(CR\s*(\d+)\)/g
		var searchCR = regEx.exec(exported.name)
		if(searchCR == null) return;
		exported.name = exported.name.replace(regEx, "")
		
		exported.abilities = exportAbilities(character.get("_id"));
		exported.attributes = exportAttributes(character.get("_id"));
		
		exported.pending = true
		
		character.get("bio", function(bio){
			exported.bio = bio
			character.get("gmnotes", function(gmnotes){
				exported.gmnotes = gmnotes
				delete exported["pending"]
				log("Exported: "+exported.name);
			})
		})	
		return exported;
	}

	function exportAbilities( charID ){
		var abilities = findObjs({_type: "ability", _characterid: charID}); 
		var exported = [];
		
		for(var i in abilities)
		{
			a = abilities[i];
			
			exported.push({ 
				"name": a.get("name"),
				"action": a.get("action"),
				"istokenaction": a.get("istokenaction")
			});

		}
		return exported;
	}

	function exportAttributes( charID ){
		var attributes = findObjs({_type: "attribute", _characterid: charID}); 
		var exported = [];
		

		for(var i in attributes)
		{
			a = attributes[i];
			
			exported.push({ 
				"name": a.get("name"),
				"current": a.get("current"),
				"max": a.get("max")
			});

		}
		return exported;
	}

}

function importAll(){

	if(importedJSON.characters === undefined){
		log("No Character data to import")
		return
	}
	
	var characters = importedJSON.characters
	
	for(var i in characters) {
		processChar(characters[i])
	}
	
	log("----")
	log("Import Complete!") 
	
	function processChar(imported){
		var character = createObj("character", {name: imported.name} );
		
		character.set("bio", imported.bio);
		character.set("gmnotes", imported.gmnotes);
		processAbilities(character.get("id"), imported.abilities)
		processAttribute(character.get("id"), imported.attributes);

		log("Imported "+imported.name) 
	}

	function processAbilities(charID, imported){
		  
		for(var i in imported)
		{
			var a = imported[i]
			var aN = createObj("ability", {_characterid: charID} )
			
			aN.set("name", a.name)
			aN.set("action", a.action)
			aN.set("istokenaction", a.istokenaction)
		}
	}

	function processAttribute(charID, imported){
		  
		for(var i in imported)
		{
			var a = imported[i]
			var aN = createObj( "attribute", {_characterid: charID} )
			
			aN.set("name", a.name)
			aN.set("current", a.current)
			aN.set("max", a.max)
		}
	}
}