var IO_Mode = 0;
// 0:		Off
// 1:		Export
// 2:		Import

// Copy Import String here
var importedCharJSON = "[{\"name\":\"Goblin\",\"abilities\":[{\"name\":\"Scimitar\",\"action\":\"%{selected|NPCAction1}\",\"istokenaction\":true},{\"name\":\"Shortbow\",\"action\":\"%{selected|NPCAction2}\",\"istokenaction\":true},{\"name\":\"Nimble-Escape\",\"action\":\"%{selected|NPCAction3}\",\"istokenaction\":false}],\"attributes\":[{\"name\":\"tab\",\"current\":\"99\",\"max\":\"\"},{\"name\":\"is_npc\",\"current\":\"1\",\"max\":\"\"},{\"name\":\"npc_strength\",\"current\":\"8\",\"max\":\"\"},{\"name\":\"npc_constitution\",\"current\":\"10\",\"max\":\"\"},{\"name\":\"npc_dexterity\",\"current\":\"14\",\"max\":\"\"},{\"name\":\"npc_intelligence\",\"current\":\"10\",\"max\":\"\"},{\"name\":\"npc_wisdom\",\"current\":\"8\",\"max\":\"\"},{\"name\":\"npc_charisma\",\"current\":\"8\",\"max\":\"\"},{\"name\":\"npc_type\",\"current\":\"Goblin\",\"max\":\"\"},{\"name\":\"npc_size\",\"current\":\"Small\",\"max\":\"\"},{\"name\":\"race\",\"current\":\"Goblin\",\"max\":\"\"},{\"name\":\"npc_challenge\",\"current\":\"1/4\",\"max\":\"\"},{\"name\":\"npc_xp\",\"current\":\"50\",\"max\":\"\"},{\"name\":\"npc_senses\",\"current\":\"Darkvision 60ft\",\"max\":\"\"},{\"name\":\"npc_traits\",\"current\":\"Nimble Escape. The goblin can take the Disengage or Hide action as a bonus action on each of its turns.\",\"max\":\"\"},{\"name\":\"npc_AC\",\"current\":\"15\",\"max\":\"\"},{\"name\":\"npc_HP\",\"current\":\"7\",\"max\":\"7\"},{\"name\":\"npc_HP_hit_dice\",\"current\":\"2d6\",\"max\":\"\"},{\"name\":\"npc_speed\",\"current\":\"30\",\"max\":\"\"},{\"name\":\"npc_languages\",\"current\":\"Common, Goblin\",\"max\":\"\"},{\"name\":\"npc_alignment\",\"current\":\"Neutral Evil\",\"max\":\"\"},{\"name\":\"npc_action_effect1\",\"current\":\"Hit: [[1d6 + 2]] Slashingdamage.\",\"max\":\"\"},{\"name\":\"npc_action_effect2\",\"current\":\"Hit: [[1d6 + 2]] piercing damage.\",\"max\":\"\"},{\"name\":\"npc_action_description1\",\"current\":\"Melee Weapon Attack: [[d20+4]] to hit, reach 5 ft., one target.\",\"max\":\"\"},{\"name\":\"npc_action_name1\",\"current\":\"Scimitar\",\"max\":\"\"},{\"name\":\"npc_action_description3\",\"current\":\"The goblin can take the Disengage or Hide action as a bonus action on each of its turns.\",\"max\":\"\"},{\"name\":\"npc_multiattack\",\"current\":\"None\",\"max\":\"\"},{\"name\":\"npc_action_description2\",\"current\":\"Ranged Weapon Attack: [[d20+4]] to hit, range 80/320 ft., one target. \",\"max\":\"\"},{\"name\":\"npc_action_name2\",\"current\":\"Shortbow\",\"max\":\"\"},{\"name\":\"npc_AC_note\",\"current\":\"(leather armor, shield)\",\"max\":\"\"},{\"name\":\"npc_action_name3\",\"current\":\"Nimble Escape\",\"max\":\"\"},{\"name\":\"npc_action_type3\",\"current\":\"(Bonus Action) \",\"max\":\"\"},{\"name\":\"sheet_type\",\"current\":\"npc\",\"max\":\"\"}],\"bio\":\"Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings.<br>Individually weak, they gather in large numbers to torment other creatures.<br><br>Hidden away in every corner of darkness, lurking in every corner of the dark forest, scurrying down every back alley and occupying every cave and tunnel they can, goblins are found everywhere. They are perhaps the most common of all the races, the most adaptable and the most varied of them all. Though small and young, the goblins have a remarkably tenacity and cleverness to succeed even in defeat and keep surviving in a world that seems driven to destroy them.<br>\",\"gmnotes\":\"<strong></strong><strong>Skills </strong>Stealth +6<br><strong>Senses </strong>darkvision 60 ft., passive Perception 9<br><strong>Languages </strong>Common, Goblin<br><strong>Challenge </strong>1/4 (50 XP)<br><br><strong>Nimble Escape. </strong>The goblin can take the Disengage or Hide<br>action as a bonus action on each of its turns.<br>Actions<br><br><strong>Scimitar</strong>. Melee Weapon Attack: +4 to hit, reach 5 ft., one<br>target. Hit: 5 (1d6 + 2) slashing damage.<br><br><strong>Shortbow.</strong> Ranged Weapon Attack: +4 to hit, range 80/320 ft.,<br>one target. Hit: 5 (1d6 + 2) piercing damage.<br><br>\"},{\"name\":\"Ghoul\",\"abilities\":[{\"name\":\"Bite\",\"action\":\"%{selected|NPCAction1}\",\"istokenaction\":true},{\"name\":\"Claws\",\"action\":\"%{selected|NPCAction2}\",\"istokenaction\":true}],\"attributes\":[{\"name\":\"is_npc\",\"current\":\"1\",\"max\":\"\"},{\"name\":\"npc_type\",\"current\":\"Undead\",\"max\":\"\"},{\"name\":\"npc_alignment\",\"current\":\"Chaotic Evil\",\"max\":\"\"},{\"name\":\"npc_size\",\"current\":\"Med\",\"max\":\"\"},{\"name\":\"npc_HP\",\"current\":\"22\",\"max\":\"22\"},{\"name\":\"npc_speed\",\"current\":\"30\",\"max\":\"\"},{\"name\":\"race\",\"current\":\"Undead\",\"max\":\"\"},{\"name\":\"class\",\"current\":\"\",\"max\":\"\"},{\"name\":\"npc_challenge\",\"current\":\"1\",\"max\":\"\"},{\"name\":\"npc_xp\",\"current\":\"200\",\"max\":\"\"},{\"name\":\"npc_languages\",\"current\":\"Common\",\"max\":\"\"},{\"name\":\"npc_action_description1\",\"current\":\"Melee Weapon Attack: [[d20+2]] to hit, reach 5 ft., one creature.\",\"max\":\"\"},{\"name\":\"npc_action_name1\",\"current\":\"Bite\",\"max\":\"\"},{\"name\":\"npc_action_effect1\",\"current\":\"Hit: [[2d6 + 2]] piercing damage.\",\"max\":\"\"},{\"name\":\"npc_ac\",\"current\":\"12\",\"max\":\"\"},{\"name\":\"npc_initiative\",\"current\":\"\",\"max\":\"\"},{\"name\":\"npc_traits\",\"current\":\"\",\"max\":\"\"},{\"name\":\"npc_dexterity\",\"current\":\"15\",\"max\":\"\"},{\"name\":\"npc_constitution\",\"current\":\"10\",\"max\":\"\"},{\"name\":\"npc_intelligence\",\"current\":\"7\",\"max\":\"\"},{\"name\":\"npc_wisdom\",\"current\":\"10\",\"max\":\"\"},{\"name\":\"npc_charisma\",\"current\":\"6\",\"max\":\"\"},{\"name\":\"npc_HP_hit_dice\",\"current\":\"5d8\",\"max\":\"\"},{\"name\":\"npc_senses\",\"current\":\"Darkvision 60ft\",\"max\":\"\"},{\"name\":\"npc_AC_note\",\"current\":\"\",\"max\":\"\"},{\"name\":\"npc_damage_vulnerability\",\"current\":\"\",\"max\":\"\"},{\"name\":\"npc_damage_immunity\",\"current\":\"Poison\",\"max\":\"\"},{\"name\":\"npc_condition_immunity\",\"current\":\"Charmed, Exhaustion, Poisoned\",\"max\":\"\"},{\"name\":\"npc_action_name2\",\"current\":\"Claws\",\"max\":\"\"},{\"name\":\"npc_action_description2\",\"current\":\"Melee Weapon Attack: [[d20+4]] to hit, reach 5 ft., one target.\",\"max\":\"\"},{\"name\":\"npc_action_effect2\",\"current\":\"Hit: [[2d4 + 2]] slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\",\"max\":\"\"},{\"name\":\"npc_strength\",\"current\":\"13\",\"max\":\"\"},{\"name\":\"npc_strength_save_bonus\",\"current\":\"0\",\"max\":\"\"},{\"name\":\"npc_action_description3\",\"current\":\"\",\"max\":\"\"},{\"name\":\"npc_constitution_save_bonus\",\"current\":\"1\",\"max\":\"\"},{\"name\":\"npc_dexterity_save_bonus\",\"current\":\"0\",\"max\":\"\"},{\"name\":\"sheet_type\",\"current\":\"npc\",\"max\":\"\"}],\"bio\":\"With their razor-sharp teeth and jagged claws, ghouls<br>roam the night in packs, driven by an insatiable hunger<br>for humanoid flesh.<br>\",\"gmnotes\":\"<strong>Damage Immunities </strong>poison<br><strong>Condition Immunities</strong> charmed, exhaustion, poisoned<br><strong>Senses </strong>darkvision 60 ft., passive Perception 10<br><strong>Languages </strong>Common<br><strong>Challenge</strong> 1 (200 XP)<hr><strong>Bite</strong>. Melee Weapon Attack: +2 to hit, reach 5 ft., one creature.<br>Hit: 9 (2d6 + 2) piercing damage.<br><br><strong>Claws</strong>. Melee Weapon Attack: +4 to hit, reach 5 ft., one target.<br>Hit: 7 (2d4 + 2) slashing damage. If the target is a creature<br>other than an elf or undead, it must succeed on a DC 10<br>Constitution saving throw or be paralyzed for 1 minute. The<br>target can repeat the saving throw at the end of each of its<br>turns, ending the effect on itself on a success.<br>\"}]"

//Do Not Edit Bellow This Line
on("ready", function() {
	if( IO_Mode == 1)	
		exportAll()
	else if( IO_Mode == 2)
		importAll()
});

function exportAll(){
	var exported = []
	var characters = findObjs({_type: "character"})

	for(var i in characters) {
		c = characters[i]
		e = exportChar(c)
		
		if(e != null)
			exported.push( e )
	}
   

	var checkIfComplete = setInterval(function(){ 
		numReady = 0;
		
		for(var i in exported){			
			if(exported[i].pending === undefined)
				numReady++
		}
		
		if(numReady >= exported.length){
			clearInterval(checkIfComplete)
			log("Export complete")
			log("---- COPY the following LINE ----")
			log( JSON.stringify(exported) )
			return
		}
		
		log("Exported "+numReady+" of "+exported.length)
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

	var characters = JSON.parse(importedCharJSON);

	for(var i in characters)
	{
		processChar(characters[i])
	}
	
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