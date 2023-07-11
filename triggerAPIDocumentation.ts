// THIS IS GENERATED FILE. DO NOT MODIFY.

export interface SignatureEntry { description?: string; signature?: string; }
export interface IEntry { description?: string; signatures?: SignatureEntry[]; }
export interface IEntries {[name: string]: IEntry; }
export interface IClassEntries { [name: string]: IEntries; }

export const triggerAPIs: IEntries = {
	"Texture": {
		signatures: [
			{
				description: "Register a used sprite. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `texture` the sprite name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#texture-1)",
				signature: "(string texture) : string"
			},
		]
	},
	"WildCastleDownloadRemoteImages": {
		signatures: [
			{
				description: "Register remote images that uploaded to [platform site](https://platform.wildsky.dev) under the \"Remote Images\" field of the \"Request Build\" section of your project management page. Only supports .png files. Image name will be the key, which must be unique. Cannot delete images uploaded.\n \n\n- *int* `projectId` the id of the project that uploaded remote images. (id can be found in project page url)\n- *List\\<string>* `remoteImages` list of image names without .png extension.\n- *TypedCallback\\<List\\<string>>* `callback` When remote images finish loading, this function will be called with a parameter, which is a list of all successfully loaded remote  images. NOTE: Some remote images may fail to load, so the list passed to callback may not be the same as remoteImages passed to this api.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#wildcastledownloadremoteimages-3)",
				signature: "(int projectId, List<string> remoteImages, TypedCallback<List<string>> callback) : void"
			},
		]
	},
	"Actor": {
		signatures: [
			{
				description: "Register a used actor.\n\n- *string* `actor` the actor name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#actor-1)",
				signature: "(string actor) : string"
			},
		]
	},
	"Unit": {
		signatures: [
			{
				description: "Register a used unit. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `unit` the unit name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#unit-1)",
				signature: "(string unit) : string"
			},
		]
	},
	"SimpleUnit": {
		signatures: [
			{
				description: "See [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#simpleunit-1)",
				signature: "(string unit) : string"
			},
		]
	},
	"Effect": {
		signatures: [
			{
				description: "Register a used effect. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `effect` the effect name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#effect-1)",
				signature: "(string effect) : string"
			},
		]
	},
	"Behavior": {
		signatures: [
			{
				description: "Register a used behavior. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `behavior` the actor name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#behavior-1)",
				signature: "(string behavior) : string"
			},
		]
	},
	"Sound": {
		signatures: [
			{
				description: "Register a used sound. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `sound` the sound name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#sound-1)",
				signature: "(string sound) : string"
			},
		]
	},
	"Tag": {
		signatures: [
			{
				description: "Register a used tag. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `tag` the tag name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#tag-1)",
				signature: "(string tag) : string"
			},
		]
	},
	"Upgrade": {
		signatures: [
			{
				description: "Register a used upgrade. This is mostly just used in Wild Sky. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `upgrade` the upgrade name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#upgrade-1)",
				signature: "(string upgrade) : string"
			},
		]
	},
	"Font": {
		signatures: [
			{
				description: "Register a used font. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `font` the font name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#font-1)",
				signature: "(string font) : string"
			},
		]
	},
	"Ability": {
		signatures: [
			{
				description: "Register a used ability. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `ability` the ability name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#ability-1)",
				signature: "(string ability) : string"
			},
		]
	},
	"Weapon": {
		signatures: [
			{
				description: "Register a used weapon. Data used in Lua has to be registered in order for it to be loaded in-game. \n\n- *string* `weapon` the weapon name to register.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#weapon-1)",
				signature: "(string weapon) : string"
			},
		]
	},
	"Particle": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#particle-1)",
				signature: "(string particle) : string"
			},
		]
	},
	"LogMessage": {
		signatures: [
			{
				description: "Prints the given message to the [Play Settings Log](https://wiki.funovus.com/development/Data-Play-Settings). Useful for debugging.\n\n- *string* `message` The string to output.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logmessage-1)",
				signature: "(string message) : void"
			},
		]
	},
	"LogWarning": {
		signatures: [
			{
				description: "Similar to [LogMessage()](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logmessage-1), but the output text color is orange.\n\n- *string* `message` The string to output.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logwarning-1)",
				signature: "(string message) : void"
			},
		]
	},
	"LogError": {
		signatures: [
			{
				description: "Similar to [LogMessage()](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logmessage-1), but the output text color is red.\n\n- *string* `message` The string to output.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logerror-1)",
				signature: "(string message) : void"
			},
		]
	},
	"DebugPause": {
		signatures: [
			{
				description: "Triggers a game pause. Useful when you need to debug the game state at a certain point. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Debug#debugpause-0)",
				signature: "() : void"
			},
		]
	},
	"SetScreenSleep": {
		signatures: [
			{
				description: "If set to false, disable screen auto sleep; if set to true, use system screen sleep setting.\n\n- *bool* `flag` the screen sleep state to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#setscreensleep-1)",
				signature: "(bool flag) : void"
			},
		]
	},
	"GetGameTime": {
		signatures: [
			{
				description: "Returns the time passed since the game has started (in seconds).\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getgametime-0)",
				signature: "() : float"
			},
		]
	},
	"SetSimpleUnitMapBounds": {
		signatures: [
			{
				description: "When simple units leave the map bounds, they are automatically removed. Includes a filter for player ID so that only units owned by a certain player will be removed. \n\n- *[SimpleUnitMapBoundOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunitmapboundoptions)* `options` options for setting simple unit map bounds.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#setsimpleunitmapbounds-1)",
				signature: "(SimpleUnitMapBoundOptions options) : void"
			},
		]
	},
	"GetPlayerCount": {
		signatures: [
			{
				description: "Returns the number of players in the game.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getplayercount-0)",
				signature: "() : int"
			},
		]
	},
	"GetCurrentPlayerId": {
		signatures: [
			{
				description: "Get the current player's id. Only useful in multiplayer.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getcurrentplayerid-0)",
				signature: "() : int"
			},
		]
	},
	"GetMultiplayerGamePlayerDisplayName": {
		signatures: [
			{
				description: "Return the display name for certain player. It is mostly your Funovus alias.\n\n- *int* `idx` the ID of the player to get the display name for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Multiplayer#getmultiplayergameplayerdisplayname-1)",
				signature: "(int idx) : string"
			},
		]
	},
	"GetMultiplayerGamePlayerId": {
		signatures: [
			{
				description: "Get player id for a certain player. \n\n- *int* `idx` the in-game player index (1, 2, 3, etc.) of the player to get the server player ID.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Multiplayer#getmultiplayergameplayerid-1)",
				signature: "(int idx) : int"
			},
		]
	},
	"DefaultHero": {
		signatures: [
			{
				description: "Wild Sky only. Returns the default hero. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#defaulthero-0)",
				signature: "() : string"
			},
		]
	},
	"GetValueFromDataPath": {
		signatures: [
			{
				description: "Returns a value from fields defined in the data editor, stored at the given data path. For example, if in the editor you’ve defined an Ability `\"Hero Marksman Ability\"` with a base mana cost of 20, then in code you can read that base mana cost via `DCEI.GetValueFromDataPath({ \"abilities\", \"Hero Marksman Ability\", \"cost\", \"mana\" })`\n\n[See Notion guide on this feature.](https://funovus.notion.site/Getting-Data-Values-In-Script-b56f5be31fb246d488b8fbc529bec701)\n\n This can only return either a string or integer. You can find a data object's json path names in the JSON view of Data Window and use them directly with the API. You can also right click any field in the editor and select \"Copy Data Path\" to copy the field's data path to the clipboard.\n\n- *String[]* `paths` the paths to retrieve values from. Accepts both lowerCamelCase and snake_case.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getvaluefromdatapath-1)",
				signature: "(String[] paths) : object"
			},
		]
	},
	"ValidateDataPath": {
		signatures: [
			{
				description: "Returns true if value stored at the given data path is a string or integer. You can find a data object's json path names in the JSON view of Data Window and use them directly with the API. You can also right click any field in the editor and select \"Copy Data Path\" to copy the field's data path to the clipboard.\n\n- *String[]* `paths` the paths to validate. Accepts both lowerCamelCase and snake_case.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#validatedatapath-1)",
				signature: "(String[] paths) : bool"
			},
		]
	},
	"TriggerAddSimulationCommandEvent": {
		signatures: [
			{
				description: "Use in conjunction with `DCEI.SendSimulationCommand` to allow Presentation.lua.txt script to run a function within the simulation layer by sending a payload that `TriggerAddSimulationCommandEvent` can receive. \n\nSee `SendPresentationCommand` & `TriggerAddPresentationCommandEvent` to do the opposite (send an event from simulation script to presentation script)\n\nSee [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)\n\n- *int* `player` player id of the triggering player\n- *TypedCallback\\<string, object>* `callback` the callback function that is run when the event is triggered. The string parameter is the command sent from presentation script, usually json encoded for more info.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#triggeraddsimulationcommandevent-2)",
				signature: "(int player, TypedCallback<string, object> callback) : void"
			},
		]
	},
	"SendSimulationCommand": {
		signatures: [
			{
				description: "Use in conjunction with `DCEI.TriggerAddSimulationCommandEvent` to allow Presentation.lua.txt script to run a function within the simulation layer by sending a payload that `TriggerAddSimulationCommandEvent` can receive. \n\nSee `SendPresentationCommand` & `TriggerAddPresentationCommandEvent` to do the opposite (send an event from simulation script to presentation script)\n\nSee [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)\n\n- *string* `command` the command sent to simulation script, usually json encoded to contain more information\n- *object* `context` a Lua table (or function). Use this to keep track of the context info for a sequence of actions spreading across simulation and presentation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#sendsimulationcommand-2)",
				signature: "(string command, object context) : void"
			},
		]
	},
	"TriggerAddPresentationCommandEvent": {
		signatures: [
			{
				description: "This establishes a function to run within `Presentation.lua.txt` script when receiving an event from simulation `Trigger.lua.txt` sent with the `DCEI.SendPresentationCommand` API.  \n\nSee `SendSimulationCommand` & `TriggerAddSimulationCommandEvent` to do the opposite (send an event from presentation script to simulation script)\n\nSee [Presentation vs Simulation scripts for more information about the two scripting layers.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)\n\n- *TypedCallback\\<string, object>* `callback` the callback function that is run when the event is triggered. the string parameter is the command sent to presentation scrip, usually json encoded for more info.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#triggeraddpresentationcommandevent-1)",
				signature: "(TypedCallback<string, object> callback) : void"
			},
		]
	},
	"SendPresentationCommand": {
		signatures: [
			{
				description: "Send a payload of information in the simulation `Trigger.lua.txt` that will be received in `Presentation.lua.txt` script by the `TriggerAddPresentationCommandEvent` API. \n\nSee `SendSimulationCommand` & `TriggerAddSimulationCommandEvent` to do the opposite (send an event from presentation script to simulation script)\n\nSee [Presentation vs Simulation scripts for more information about the two scripting layers.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)\n\n- *int* `player` player id of the triggering player\n- *string* `command` the command sent to simulation script, usually json encoded to contain more information\n- *object* `simulationContext` a Lua table (or function). Use this to keep track of the context info for a sequence of actions spreading across simulation and presentation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#sendpresentationcommand-3)",
				signature: "(int player, string command, object simulationContext) : void"
			},
		]
	},
	"ShareDataWithPresentation": {
		signatures: [
			{
				description: "The data argument is a Lua table that needs to be accessed from presentation layer, and key is a string identifier. \n\nSee [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)\n\n- *string* `key` string identifier. Use with GetSharedDataFromSimulation to retrieve data in presentation script.\n- *object* `data` a Lua table to share with presentation layer with DCEI.GetSharedDataFromSimulation\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#sharedatawithpresentation-2)",
				signature: "(string key, object data) : void"
			},
		]
	},
	"GetSharedDataFromSimulation": {
		signatures: [
			{
				description: "If a Lua table data is shared from simulation with the given key, this API returns a read-only view of that data, accessed like a regular Lua table. When the original Lua table is updated in simulation, the view will reflect the updated values as well. \n\nSee [Presentation vs Simulation scripts.](https://www.notion.so/funovus/Presentation-vs-Simulation-Script-02155b2974e549c6afe3b3128ba841fb)\n\n- *string* `key` key used to retrieve value shared by `DCEI.ShareDataWithPresentation`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getshareddatafromsimulation-1)",
				signature: "(string key) : object"
			},
		]
	},
	"TriggerAddUpdateEvent": {
		signatures: [
			{
				description: "Run the callback function every presentation frame, which is way higher than simulation frame (16 fps fixed for now). This can be used to create smooth UI animations.\n\n- *TypedCallback\\<float>* `callback` the callback function that is run every presentation frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#triggeraddupdateevent-1)",
				signature: "(TypedCallback<float> callback) : void"
			},
		]
	},
	"GetEffectType": {
		signatures: [
			{
				description: "Returns the effect type of an effect as a string.\n\n- *string* `effectName` the name of the effect to check the type of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#geteffecttype-1)",
				signature: "(string effectName) : string"
			},
		]
	},
	"CreateCustomIapProductData": {
		signatures: [
			{
				description: "Returns a table for custom in-app product data.  Most games should use the [Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod) to handle IAP.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#createcustomiapproductdata-0)",
				signature: "() : object"
			},
		]
	},
	"CreateCustomIapProduct": {
		signatures: [
			{
				description: "Returns a custom in-app product with the values given.  Most games should use the [Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod) to handle IAP.\n\n- *string* `productId` the product ID.\n- *float* `price` the price for the product.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#createcustomiapproduct-2)",
				signature: "(string productId, float price) : object"
			},
		]
	},
	"AddCustomIapProduct": {
		signatures: [
			{
				description: "Combines the custom in app product data and product returned from the above functions and returns a whole product. Most games should use the [Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod) to handle IAP.\n\n- *CustomIapProductData* `data` data structure created from CreateCustomIapProductData(),\n- *CustomIapProduct* `product` product structure created from CreateCustomIapProduct().\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#addcustomiapproduct-2)",
				signature: "(CustomIapProductData data, CustomIapProduct product) : object"
			},
		]
	},
	"ExtraHeros": {
		signatures: [
			{
				description: "Wild Sky only. Returns other heroes players have equipped. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#extraheros-0)",
				signature: "() : object"
			},
		]
	},
	"CreateUnitFilter": {
		signatures: [
			{
				description: "Creates a filter for a specific unit type, which can be used with any trigger event API (like `DCEI.TriggerAddUnitSelectedEvent`) that accepts a unit as a parameter. This filter will then cause the event to register only for this specific unit type rather than all unit types. See [Using Trigger Event Filters](https://www.notion.so/Using-Trigger-Event-Filters-3e948c57edf24bacbc69b521c12a4550)\n\n- *[UnitFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unitfilter)* `filter` the unit filter to create.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createunitfilter-1)",
				signature: "(UnitFilter filter) : unit"
			},
		]
	},
	"CreateUnit": {
		signatures: [
			{
				description: "Creates a unit at the specified location using default facing.\n\n- *int* `teamId` which team to create the unit for. Use `1` for local player and `-1` for enemy.\n- *int* `playerId` which player to create the unit for. Use `1` for local player and `-1` for enemy.\n- *string* `unitType` name of data for the unit type to create\n- *float* `x` the x coordinate of where to create the unit.\n- *float* `z` the y coordinate of where to create the unit.\n- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.\n- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createunit-7)",
				signature: "(int teamId, int playerId, string unitType, float x, float z, float dx = 0, float dz = 1) : unit"
			},
		]
	},
	"CreateSimpleUnit": {
		signatures: [
			{
				description: "Creates a simple unit moving in a given direction. Simple units are more perform better, allowing for higher unit counts while still maintaining good FPS on mobile devices, but they support less functionality. Features such as behaviors and complex path-finding don't work on simple units. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *int* `playerId` which player to create the unit for. Use `1` for local player and `-1` for enemy.\n- *[SimpleUnitOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunitoptions)* `unitOptions` table of options that includes `{type_name, max_health}`\n- *[CollisionOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisionoptions)* `collisionOptions` table of options that includes `{\n- *float* `x` the x coordinate of where to create the unit\n- *float* `z` the y coordinate of where to create the unit.\n- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.\n- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.\n- *float* `vx` a value that indicates the movement velocity along the x-axis.\n- *float* `vz` a value that indicates the movement velocity along the y-axis.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createsimpleunit-9)",
				signature: "(int playerId, SimpleUnitOptions unitOptions, CollisionOptions collisionOptions, float x, float z, float dx = 0, float dz = 1, float vx = 0, float vz = 0) : unit"
			},
		]
	},
	"GetPlayerStats": {
		signatures: [
			{
				description: "This is used in conjunction with simple units to improve performance. Ordinary methods of getting damaged dealt or tracking XP are not performant enough or don't work with simple units. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- Enemy playerId is 0, player playerId is 1\n- statsId 0 is total damage dealt (collision damage(unit owner) + simple damage(caster owner))\n- statsId 1 is total experience gained\n- Returns 0 if playerId or statsId not found\n\n- *int* `playerId` player to get stat for. `0 = enemy`, `1 = player`\n- *int* `statsId` which stat to get. `0 = damage dealt`, `1 = experience`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getplayerstats-2)",
				signature: "(int playerId, int statsId) : float"
			},
		]
	},
	"ResetPlayerStats": {
		signatures: [
			{
				description: "Resets the stats tracking from `DCEI.GetPlayerStats`\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#resetplayerstats-0)",
				signature: "() : void"
			},
		]
	},
	"SetUnitMass": {
		signatures: [
			{
				description: "Set a unit's mass. This affects how units behave whrn [Simple Force](https://wiki.funovus.com/development/Data-Effect-Simple-Force) is applied. Bigger mass value means higher inertia. Units that don't have mass se default to 1 mass. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` unit to set mass value for.\n- *float* `massValue` mass value to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitmass-2)",
				signature: "(unit unit, float massValue) : void"
			},
		]
	},
	"SetSimpleHealthData": {
		signatures: [
			{
				description: "Set Simple Health Component for simple or normal unit. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` unit to set simple health options for.\n- *[SimpleHealthOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simplehealthoptions)* `options` set the current and max health values: `{value = 10, max = 10}`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimplehealthdata-2)",
				signature: "(unit unit, SimpleHealthOptions options) : void"
			},
		]
	},
	"SetSimpleUnitMoveTargetUnit": {
		signatures: [
			{
				description: "Set a given simple unit to move to the target unit. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `targetUnit` target unit for the move command\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimpleunitmovetargetunit-2)",
				signature: "(unit unit, unit targetUnit) : void"
			},
		]
	},
	"SetSimpleUnitMoveTargetWorldPosition2D": {
		signatures: [
			{
				description: "Set Simple Unit Move Target Location. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to\n- *float* `x` the x coordinate of the target position\n- *float* `y` the y coordinate of the target position\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimpleunitmovetargetworldposition2d-3)",
				signature: "(unit unit, float x, float y) : void"
			},
		]
	},
	"SetSimpleUnitMoveTargetDirection": {
		signatures: [
			{
				description: "Set simple unit move target direction. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to\n- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to move along the x-axis.\n- *float* `dy` a value between -1.0 and 1.0 that indicates the relative direction to move along the y-axis.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimpleunitmovetargetdirection-3)",
				signature: "(unit unit, float dx, float dy) : void"
			},
		]
	},
	"SetSimpleUnitTeamId": {
		signatures: [
			{
				description: "Set the team ID for an existing simple unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to change the team ownership of\n- *int* `teamId` team id to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimpleunitteamid-2)",
				signature: "(unit unit, int teamId) : void"
			},
		]
	},
	"ApplyTransformAnimationToSimpleUnit": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applytransformanimationtosimpleunit-2)",
				signature: "(unit unit, SimpleUnitTransformAnimationOptions options) : void"
			},
		]
	},
	"ApplyTintColorAnimationToSimpleUnit": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applytintcoloranimationtosimpleunit-2)",
				signature: "(unit unit, SimpleUnitTintColorAnimationOptions options) : void"
			},
		]
	},
	"AddKillTimerToSimpleUnit": {
		signatures: [
			{
				description: "Kill simple unit after some time.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to kill.\n- *float* `seconds` seconds until the unit is killed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addkilltimertosimpleunit-2)",
				signature: "(unit unit, float seconds) : void"
			},
		]
	},
	"AddRemoveTimerToSimpleUnit": {
		signatures: [
			{
				description: "Remove simple unit after some time.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to remove.\n- *float* `seconds` seconds until the unit is removed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addremovetimertosimpleunit-2)",
				signature: "(unit unit, float seconds) : void"
			},
		]
	},
	"ApplySimpleMoverGuided": {
		signatures: [
			{
				description: "Applies a guided simple mover to a simple unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to apply the mover to.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` target unit.\n- *float* `speed` missile speed.\n- *float* `accelerationMagnitude` acceleration magnituide.\n- *float* `startSeconds` duration before the acceleration begins.\n- *float* `endSeconds` time when the acceleration will end. e.g. The total duration will be `endSeconds` - `startSeconds`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applysimplemoverguided-6)",
				signature: "(unit unit, unit target, float speed, float accelerationMagnitude, float startSeconds, float endSeconds) : void"
			},
		]
	},
	"ApplySimpleMoverUniformAcceleration": {
		signatures: [
			{
				description: "Applies a simple mover to a simple unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to apply the mover to.\n- *float* `velocityX` initial x velocity.\n- *float* `velocityY` initial y velocity.\n- *float* `accelerationX` x acceleration.\n- *float* `accelerationY` y acceleration.\n- *float* `startSeconds` duration before the acceleration begins.\n- *float* `endSeconds` time when the acceleration will end. e.g. The total duration will be `endSeconds` - `startSeconds`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applysimplemoveruniformacceleration-7)",
				signature: "(unit unit, float velocityX, float velocityY, float accelerationX, float accelerationY, float startSeconds, float endSeconds) : void"
			},
		]
	},
	"ApplySimpleMoverSineWave": {
		signatures: [
			{
				description: "Applies a sine simple mover to a simple unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to apply the mover to.\n- *float* `amplitude` the depth of the sine wave curves.\n- *float* `periodSeconds` the distance between peaks in the sine wave.\n- *float* `startSeconds` duration before the mover begins.\n- *float* `endSeconds` time when the mover will end. e.g. The total duration will be `endSeconds` - `startSeconds`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applysimplemoversinewave-5)",
				signature: "(unit unit, float amplitude, float periodSeconds, float startSeconds, float endSeconds) : void"
			},
		]
	},
	"SetCollisionDamageData": {
		signatures: [
			{
				description: "Enable applying damage on collision for a given unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to\n- *[CollisionDamageApplierOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisiondamageapplieroptions)* `options` a table of options with timing, cooldown, and deal_damage_value\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setcollisiondamagedata-2)",
				signature: "(unit unit, CollisionDamageApplierOptions options) : void"
			},
		]
	},
	"SetCollisionForceData": {
		signatures: [
			{
				description: "Enable applying force on collision for a given unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to\n- *[CollisionForceApplierOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisionforceapplieroptions)* `options` a table of options with timing, cooldown, and deal_damage_value\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setcollisionforcedata-2)",
				signature: "(unit unit, CollisionForceApplierOptions options) : void"
			},
		]
	},
	"SetCollisionStatsData": {
		signatures: [
			{
				description: "Enable applying stats on collision for unit\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` simple unit to issue move command to\n- *[CollisionStatsApplierOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisionstatsapplieroptions)* `options` a table of options stats_id, delta_value\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setcollisionstatsdata-2)",
				signature: "(unit unit, CollisionStatsApplierOptions options) : void"
			},
		]
	},
	"SetSimpleUnitToDestroySelfOnCollision": {
		signatures: [
			{
				description: "Set simple unit to destroy self on collision. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` target unit to enable self-destruction on collision\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimpleunittodestroyselfoncollision-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"SetCollisionComponentData": {
		signatures: [
			{
				description: "Enable collision for unit, with options \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` target unit to enable self-destruction on collision\n- *[CollisionOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisionoptions)* `options` table of collision options, including radius, take_damage, and collision layers\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setcollisioncomponentdata-2)",
				signature: "(unit unit, CollisionOptions options) : void"
			},
		]
	},
	"RegisterSimpleUnitType": {
		signatures: [
			{
				description: "Register a simple unit type.\n\n- *string* `name` name of simple unit type\n- *[SimpleUnitTypeOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunittypeoptions)* `options` table of simple unit type options.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#registersimpleunittype-2)",
				signature: "(string name, SimpleUnitTypeOptions options) : void"
			},
		]
	},
	"RegisterSimpleDamageNumberStyles": {
		signatures: [
			{
				description: "Register a simple damage number style. These text settings will be used when this style is used when calling `DCEI.ShowSimpleDamageNumber`\n\n- *[SimpleDamageNumberStyleOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpledamagenumberstyleoptions)* `options` the settings for this style.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#registersimpledamagenumberstyles-1)",
				signature: "(SimpleDamageNumberStyleOptions options) : void"
			},
		]
	},
	"SetDefaultSimpleDamageNumberStyle": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setdefaultsimpledamagenumberstyle-1)",
				signature: "(SimpleDamageNumberStyleOptions options) : void"
			},
		]
	},
	"AddTransformAnimationToSimpleDamageNumberStyle": {
		signatures: [
			{
				description: "Add a transform animation to an simple number style registered with `DCEI.RegisterSimpleDamageNumberStyles` \n\n- *int* `idx` index of the style to add the transform to.\n- *[SimpleUnitTransformAnimationOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunittransformanimationoptions)* `options` the settings for the transform animation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addtransformanimationtosimpledamagenumberstyle-2)",
				signature: "(int idx, SimpleUnitTransformAnimationOptions options) : void"
			},
		]
	},
	"AddTintColorAnimationToSimpleDamageNumberStyle": {
		signatures: [
			{
				description: "Add a tint animation to an simple number style registered with `DCEI.RegisterSimpleDamageNumberStyles` \n\n- *int* `idx` index of the style to add the tint animation to.\n- *[SimpleUnitTintColorAnimationOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunittintcoloranimationoptions)* `options` the settings for the tint animation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addtintcoloranimationtosimpledamagenumberstyle-2)",
				signature: "(int idx, SimpleUnitTintColorAnimationOptions options) : void"
			},
		]
	},
	"ShowSimpleDamageNumber": {
		signatures: [
			{
				description: "Display a simple damage number over a unit, using a style registered with `DCEI.RegisterSimpleDamageNumberStyles`.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit for the damage number to appear above.\n- *int* `styleType` the style registered with `DCEI.RegisterSimpleDamageNumberStyles`.\n- *float* `damageValue` number value to display in the damage text.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#showsimpledamagenumber-3)",
				signature: "(unit unit, int styleType, float damageValue) : void"
			},
		]
	},
	"RegisterSimpleParticle": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#registersimpleparticle-1)",
				signature: "(SimpleParticleSpawnOptions options) : void"
			},
		]
	},
	"CreateSimpleUnitAsync": {
		signatures: [
			{
				description: "Create instances of Simple Unit Type that has been registered with `RegisterSimpleUnitType`\n\n- *string* `name` name of simple unit type registered with `RegisterSimpleUnitType`\n- *[SimpleUnitInstanceOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunitinstanceoptions)* `options` unit creation options\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createsimpleunitasync-2)",
				signature: "(string name, SimpleUnitInstanceOptions options) : void"
			},
		]
	},
	"RegisterSimpleLoot": {
		signatures: [
			{
				description: "Register loot with a name, owning player, simple unit options, and collision options. Registered loot can then be dropped by simple units by setting the simple unit loot data on creation/registration or after creation with `SetSimpleUnitLootData`. \n\n- *string* `name` name of simple unit type.\n- *int* `owningPlayerId` owning player.\n- *[SimpleUnitOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#simpleunitoptions)* `unitOptions` simple unit options.\n- *[CollisionOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisionoptions)* `collisionOptions` collision options.\n- *[CollisionStatsApplierOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#collisionstatsapplieroptions)* `statsOptions` collision stats.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#registersimpleloot-5)",
				signature: "(string name, int owningPlayerId, SimpleUnitOptions unitOptions, CollisionOptions collisionOptions, CollisionStatsApplierOptions statsOptions) : int"
			},
		]
	},
	"SetSimpleUnitLootData": {
		signatures: [
			{
				description: "Set simple unit to have a chance to drop loot that was previously registered with the same name using `DCEI.RegisterSimpleLoot`. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add the chance of dropping loot to\n- *string* `name` name index of loot, previously registered with `DCEI.RegisterSimpleLoot`\n- *float* `dropRate` the chance to drop loot\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setsimpleunitlootdata-3)",
				signature: "(unit unit, string name, float dropRate) : void"
			},
		]
	},
	"CreateUnitAsync": {
		signatures: [
			{
				description: "Creates a unit at the specified location using default facing. Asynchronous, meaning the unit may not finish initializing until the next frame. Wait a full frame before trying to reference the created unit with other APIs.  \n\n- *int* `teamId` which team to create the unit for. Use `1` for local player and `-1` for enemy.\n- *int* `playerId` which player to create the unit for. Use `1` for local player and `-1` for enemy.\n- *string* `unitType` name of data for the unit type to create\n- *float* `x` the x coordinate of where to create the unit.\n- *float* `z` the y coordinate of where to create the unit.\n- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.\n- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createunitasync-7)",
				signature: "(int teamId, int playerId, string unitType, float x, float z, float dx = 0, float dz = 1) : unit"
			},
		]
	},
	"CreateChildUnit": {
		signatures: [
			{
				description: "Creates a child unit for a parent unit. Used for Wild Sky to create pets that follow and defend parent units.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `parent` parent unit to create this unit under.\n- *string* `unitType` name of data for the unit type to create\n- *float* `x` the x coordinate of where to create the unit.\n- *float* `z` the y coordinate of where to create the unit.\n- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.\n- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createchildunit-6)",
				signature: "(unit parent, string unitType, float x, float z, float dx = 0, float dz = 1) : unit"
			},
		]
	},
	"CreateChildUnitAsync": {
		signatures: [
			{
				description: "Creates a child unit for a parent unit. Used for Wild Sky to create pets that follow and defend parent units. Asynchronous, meaning the unit may not be created/initialized on the same frame. Wait a full frame before trying to reference the created unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `parent` parent unit to create this unit under.\n- *string* `unitType` name of data for the unit type to create\n- *float* `x` the x coordinate of where to create the unit.\n- *float* `z` the y coordinate of where to create the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#createchildunitasync-4)",
				signature: "(unit parent, string unitType, float x, float z) : unit"
			},
		]
	},
	"KillUnit": {
		signatures: [
			{
				description: "Kills a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to kill.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#killunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"StartWaves": {
		signatures: [
			{
				description: "Force the Wild Sky TD wave to start, as if the \"Call Wave\" button had been pressed.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#startwaves-0)",
				signature: "() : void"
			},
		]
	},
	"RemoveUnit": {
		signatures: [
			{
				description: "Removes a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#removeunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"RemoveSimpleUnit": {
		signatures: [
			{
				description: "Remove a simple unit, without triggering death effects. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#removesimpleunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"KillSimpleUnit": {
		signatures: [
			{
				description: "Kill simple unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to kill.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#killsimpleunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"GetUnitType": {
		signatures: [
			{
				description: "Returns the unit name as a string.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the name of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunittype-1)",
				signature: "(unit unit) : string"
			},
		]
	},
	"GetUnitTypeHealth": {
		signatures: [
			{
				description: "Returns the maximum health for a unit type.\n\n- *string* `unitType` the unit type to get the health of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunittypehealth-1)",
				signature: "(string unitType) : double"
			},
		]
	},
	"GetAllCustomData": {
		signatures: [
			{
				description: "Returns a table of all the custom data.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-Data#getallcustomdata-0)",
				signature: "() : object"
			},
		]
	},
	"GetCustomDataByType": {
		signatures: [
			{
				description: "Returns a table of all the custom data of the given type.\n\n- *string* `typeName` the name of the type.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-Data#getcustomdatabytype-1)",
				signature: "(string typeName) : object"
			},
		]
	},
	"GetDefaultCustomDataByType": {
		signatures: [
			{
				description: "Returns a table of all the default custom data of the given type.\n\n- *string* `typeName` the name of the type.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-Data#getdefaultcustomdatabytype-1)",
				signature: "(string typeName) : object"
			},
		]
	},
	"GetCustomDataByInstance": {
		signatures: [
			{
				description: "Returns a table of all the custom data of the given type of a specific instance.\n\n- *string* `typeName` the name of the type.\n- *string* `instanceName` the name of the instance of an object.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-Data#getcustomdatabyinstance-2)",
				signature: "(string typeName, string instanceName) : object"
			},
		]
	},
	"GetUnitDisplayName": {
		signatures: [
			{
				description: "Returns the [Display Name](https://wiki.funovus.com/development/Data-Unit#display-name) of a unit as a string.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit whose display name to get.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitdisplayname-1)",
				signature: "(unit unit) : string"
			},
		]
	},
	"GetUnitBehaviorStackCount": {
		signatures: [
			{
				description: "Returns the stack count of a behavior on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to count the behavior stack count on.\n- *string* `behaviorName` the name of the behavior to get the stack count of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#getunitbehaviorstackcount-2)",
				signature: "(unit unit, string behaviorName) : int"
			},
		]
	},
	"GetUnitCategory": {
		signatures: [
			{
				description: "Returns the unit category of a unit as a string (Unit, Missile, or Structure).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit whose unit category to get.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitcategory-1)",
				signature: "(unit unit) : string"
			},
		]
	},
	"CreateEffectAtSelf": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#createeffectatself-2)",
				signature: "(string effectName, unit target) : void"
			},
		]
	},
	"CreateEffectAtTarget": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#createeffectattarget-4)",
				signature: "(string effectName, unit target, unit caster, unit source = default) : void"
			},
		]
	},
	"CreateEffectAtPosition": {
		signatures: [
			{
				description: "Creates an effect from a unit targeting a point.\n\n- *string* `effectName` the name of the effect to create.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit that is considered to be the caster of the effect.\n- *float* `x` the x-axis coordinate to cast the ability at.\n- *float* `z` the z-axis coordinate to cast the ability at.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#createeffectatposition-4)",
				signature: "(string effectName, unit caster, float x, float z) : void"
			},
		]
	},
	"AttachUnit": {
		signatures: [
			{
				description: "Attach two units. \n\nYou can use AttachUnit to attach a [\"Simple\"](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f) unit to a \"Normal\" unit. It's bridge for Simple/Complex units working together. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `childUnit` the child unit in attach.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `parentUnit` the parent unit in attach.\n- *[AttachOffsetOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#attachoffsetoptions)* `option` options to customize how units attach.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#attachunit-3)",
				signature: "(unit childUnit, unit parentUnit, AttachOffsetOptions option) : void"
			},
		]
	},
	"DetachUnit": {
		signatures: [
			{
				description: "If unit is attached to a parent unit, detach this unit from it's parent unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to detach.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#detachunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"Move": {
		signatures: [
			{
				description: "Issues an order for a unit to move to a target point.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit instance to issue the move command to.\n- *float* `x` the x-axis coordinate to move towards.\n- *float* `z` the z-axis coordinate to move towards.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#move-3)",
				signature: "(unit unit, float x, float z) : void"
			},
		]
	},
	"Attack": {
		signatures: [
			{
				description: "Issues an order for a unit to attack another unit, causing it to move to get in range if necessary.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the attacking unit.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to attack.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#attack-2)",
				signature: "(unit unit, unit target) : void"
			},
		]
	},
	"DirectionalMove": {
		signatures: [
			{
				description: "Issues an order for the unit to move in a specified direction.\n\n**Notes:** The unit will not attempt to navigate around units or obstacles when using Directional Move. This function only runs for a single frame. To have the unit continue to move in a specific direction, this function must be run each frame. This useful for games with that use WASD or joystick movement to control units.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to move.\n- *float* `right` a value between -1.0 and 1.0 that indicates the relative speed and direction to move along the x-axis.\n- *float* `up` a value between -1.0 and 1.0 that indicates the relative speed and direction to move along the y-axis.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#directionalmove-3)",
				signature: "(unit target, float right, float up) : void"
			},
		]
	},
	"TurnUnitTowards": {
		signatures: [
			{
				description: "Turns a unit to face towards a specified direction. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to turn.\n- *float* `dx` a value between -1.0 and 1.0 that indicates the relative direction to face along the x-axis.\n- *float* `dz` a value between -1.0 and 1.0 that indicates the relative direction at to face along y-axis.\n- *float* `duration` duration of time the turning takes\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#turnunittowards-4)",
				signature: "(unit unit, float dx, float dz, float duration = 0) : void"
			},
		]
	},
	"SetEnabledCameraClamp": {
		signatures: [
			{
				description: "Toggles camera clamping. When clamped, camera movement will be restricted to inside the red square border displayed in the Terrain Window. In order to move the camera outside of this square, the camera must be unclamped first.\n\n- *bool* `set` if true, enables camera clamping.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setenabledcameraclamp-1)",
				signature: "(bool set) : void"
			},
		]
	},
	"SetEnabledCameraClampForPlayer": {
		signatures: [
			{
				description: "Toggles camera clamping for the given player. When clamped, camera movement will be restricted to inside the red square border displayed in the Terrain Window. In order to move the camera outside of this square, the camera must be unclamped first.\n\n- *int* `player` the player to set camera clamping for.\n- *bool* `set` if true, enables camera clamping.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setenabledcameraclampforplayer-2)",
				signature: "(int player, bool set) : void"
			},
		]
	},
	"ShowFeedbackMessage": {
		signatures: [
			{
				description: "Shows a in-game feedback message in the center of the player's screen.\n\n- *string* `message` the message to display.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showfeedbackmessage-1)",
				signature: "(string message) : void"
			},
		]
	},
	"GetHealth": {
		signatures: [
			{
				description: "Returns the current health of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#gethealth-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"AddHealth": {
		signatures: [
			{
				description: "Increases the current health of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add health to.\n- *float* `value` the amount of health to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addhealth-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"AddHealthAsync": {
		signatures: [
			{
				description: "Increases the current health of a unit. Async, meaning it may not happen on this exact frame.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add health to.\n- *float* `value` the amount of health to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addhealthasync-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetHealth": {
		signatures: [
			{
				description: "Sets the current health of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the health of.\n- *float* `value` the amount to set it to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#sethealth-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetUnitOwner": {
		signatures: [
			{
				description: "Sets the owner of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to change ownership of.\n- *int* `playerId` the player to give the unit to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitowner-2)",
				signature: "(unit unit, int playerId) : void"
			},
		]
	},
	"SetUnitTeamId": {
		signatures: [
			{
				description: "Sets the team id of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to change ownership of.\n- *int* `teamId` the team ID to assign to the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitteamid-2)",
				signature: "(unit unit, int teamId) : void"
			},
		]
	},
	"SetPlayerTeamId": {
		signatures: [
			{
				description: "Used to set a player's team id.\n\n- *int* `playerId` the ID of the player to be switched.\n- *int* `teamId` the ID of the player's new team.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#setplayerteamid-2)",
				signature: "(int playerId, int teamId) : void"
			},
		]
	},
	"GetPlayerTeamId": {
		signatures: [
			{
				description: "Returns a player's team id.\n\n- *int* `playerId` the ID of the player.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getplayerteamid-1)",
				signature: "(int playerId) : int"
			},
		]
	},
	"SetHealthValueAsync": {
		signatures: [
			{
				description: "Sets the current health of a unit. Asynchronous, so may not happen on this exact frame. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the health of.\n- *float* `amount` the amount to set it to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#sethealthvalueasync-2)",
				signature: "(unit unit, float amount) : void"
			},
		]
	},
	"GetMana": {
		signatures: [
			{
				description: "Returns the current mana of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getmana-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"AddMana": {
		signatures: [
			{
				description: "Increases the current mana of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.\n- *float* `value` the amount to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addmana-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"AddManaAsync": {
		signatures: [
			{
				description: "Increases the current mana of a unit. Asychronous, so may not occur on this frame. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.\n- *float* `value` the amount to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addmanaasync-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetMana": {
		signatures: [
			{
				description: "Sets the current mana of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.\n- *float* `value` the amount to set it to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmana-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetManaValueAsync": {
		signatures: [
			{
				description: "Sets the current mana of a unit. Asynchronous, so may take a simulation frame to occur. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add mana to.\n- *float* `amount` the amount to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmanavalueasync-2)",
				signature: "(unit unit, float amount) : void"
			},
		]
	},
	"AddGold": {
		signatures: [
			{
				description: "Adds gold to a player. Maximum gold value for a player is 2,147,483,647 (2^31-1).\n\n- *int* `playerId` the ID of the player.\n- *int* `amount` the amount of gold to be added. Use negative values to subtract gold.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#addgold-2)",
				signature: "(int playerId, int amount) : void"
			},
		]
	},
	"AddGoldAsync": {
		signatures: [
			{
				description: "Adds a specified amount of gold to the player. Primarily used for Wild Sky; as most other games implement custom currencies via Lua rather than use the hard-coded engine gold currency. Maximum gold value for a player is 2,147,483,647 (2^31-1).\n\n- *int* `playerId` the ID of the player.\n- *int* `amount` the amount of gold to be added. Use negative values to subtract gold.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#addgoldasync-2)",
				signature: "(int playerId, int amount) : void"
			},
		]
	},
	"SetGold": {
		signatures: [
			{
				description: "Sets a player's gold value. Maximum gold value for a player is 2,147,483,647 (2^31-1).\n\n- *int* `playerId` the ID of the player.\n- *int* `amount` the amount of gold to be set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#setgold-2)",
				signature: "(int playerId, int amount) : void"
			},
		]
	},
	"SetGoldAsync": {
		signatures: [
			{
				description: "Sets a player's gold value. Maximum gold value for a player is 2,147,483,647 (2^31-1).\n\n- *int* `playerId` the ID of the player.\n- *int* `amount` the amount of gold to be set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#setgoldasync-2)",
				signature: "(int playerId, int amount) : void"
			},
		]
	},
	"GetGold": {
		signatures: [
			{
				description: "Returns a player's gold value.\n\n- *int* `playerId` the ID of the player.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getgold-1)",
				signature: "(int playerId) : int"
			},
		]
	},
	"GetMouseWorldPosition2D": {
		signatures: [
			{
				description: "Returns the map coordinates of the mouse.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#getmouseworldposition2d-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetTouchWorldPosition2D": {
		signatures: [
			{
				description: "Returns the map coordinates of the last touch input. Only works on mobile.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#gettouchworldposition2d-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetSwipeScreenPosition": {
		signatures: [
			{
				description: "Return the swipe position based on screen coordinates in pixels.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#getswipescreenposition-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetUnitFacing2D": {
		signatures: [
			{
				description: "Returns the facing of a unit as a vector with X and Y coordinates. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the position of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitfacing2d-1)",
				signature: "(unit unit) : Float2"
			},
		]
	},
	"GetUnitBounty": {
		signatures: [
			{
				description: "Returns the [SetGoldBounty](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the bounty of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitbounty-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"GetUnitBehaviorList": {
		signatures: [
			{
				description: "Returns a list of behaviors on a unit along with their stack count.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the list of behaviors from.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitbehaviorlist-1)",
				signature: "(unit unit) : object"
			},
		]
	},
	"GetUnitWeaponList": {
		signatures: [
			{
				description: "Returns a list of weapons on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the list of weapons from.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitweaponlist-1)",
				signature: "(unit unit) : object"
			},
		]
	},
	"GetUnitAbilityList": {
		signatures: [
			{
				description: "Returns a list of abilities on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the list of abilities from.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitabilitylist-1)",
				signature: "(unit unit) : object"
			},
		]
	},
	"ApplyTag": {
		signatures: [
			{
				description: "Applies a set number of tags to a unit for a set duration.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the tags to.\n- *string* `tagName` the name of the tag to apply.\n- *float* `duration` the length of time to apply the tag for. A value of `-1` applies it permanently.\n- *int* `stackCount` the number of tags to apply.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applytag-4)",
				signature: "(unit unit, string tagName, float duration, int stackCount) : void"
			},
		]
	},
	"RemoveTag": {
		signatures: [
			{
				description: "Removes a set number of tags from a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the tags from.\n- *string* `tagName` the name of the tag to remove.\n- *int* `stackCount` the number of tags to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#removetag-3)",
				signature: "(unit unit, string tagName, int stackCount = 0) : void"
			},
		]
	},
	"GetUnitTagCount": {
		signatures: [
			{
				description: "Returns the tag count of a given tag on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to count the tags on.\n- *string* `tagName` the name of the tag to count.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunittagcount-2)",
				signature: "(unit unit, string tagName) : int"
			},
		]
	},
	"GetUnitTagList": {
		signatures: [
			{
				description: "Returns a list of tags on a unit\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the total damage of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunittaglist-1)",
				signature: "(unit unit) : object"
			},
		]
	},
	"GetUnitTotalDamage": {
		signatures: [
			{
				description: "Returns the total amount of damage a unit has dealt.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the total damage of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunittotaldamage-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"GetUnitRallyPoint": {
		signatures: [
			{
				description: "Get the unit's rally point target, for Wild Sky units using a rally point ability. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the rally point for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitrallypoint-1)",
				signature: "(unit unit) : Float2"
			},
		]
	},
	"GetUnitPlayerId": {
		signatures: [
			{
				description: "Returns the player ID of the owner of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to return the player ID of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getunitplayerid-1)",
				signature: "(unit unit) : int"
			},
		]
	},
	"GetUnitTeamId": {
		signatures: [
			{
				description: "Returns the team ID of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to return the team ID of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getunitteamid-1)",
				signature: "(unit unit) : int"
			},
		]
	},
	"GetUnitWaypointNodeIndex": {
		signatures: [
			{
				description: "Wild Sky only. Gets the index for the current node along a waypoint path that a unit is traveling, if the unit is currently travelling along a waypoint path. This can then be used with API's like `ApplyWaypoint` to make sure the unit resumes the waypoint at the same position it left it, if you temporarily interrupt the unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the waypoint node index for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitwaypointnodeindex-1)",
				signature: "(unit unit) : int"
			},
		]
	},
	"GetProtectedValue": {
		signatures: [
			{
				description: "Returns a protected value from its key. \n\nProtected values are encoded to make it harder for cheaters using a simple memory reader to find and modify the value. Be sure not to store the value ever in a Lua variable. This would defeat the purpose, by still allowing cheaters to easy read and modify the value before/after using Get/SetProtected value. \n\nWhen you no longer need a protected value, it's good practice to call ClearProtectedValue.\n\n- *string* `key` key associated with the value.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getprotectedvalue-1)",
				signature: "(string key) : float"
			},
		]
	},
	"ClearProtectedValue": {
		signatures: [
			{
				description: "Clears the protected value pair of a given key.\n\nProtected values are encoded to make it harder for cheaters using a simple memory reader to find and modify the value. Be sure not to store the value ever in a Lua variable. This would defeat the purpose, by still allowing cheaters to easy read and modify the value before/after using Get/SetProtected value. \n\nWhen you no longer need a protected value, it's good practice to call ClearProtectedValue.\n\n- *string* `key` the key to clear.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#clearprotectedvalue-1)",
				signature: "(string key) : void"
			},
		]
	},
	"SetProtectedValue": {
		signatures: [
			{
				description: "Sets a protected value pair.\n\nProtected values are encoded to make it harder for cheaters using a simple memory reader to find and modify the value. Be sure not to store the value ever in a Lua variable. This would defeat the purpose, by still allowing cheaters to easy read and modify the value before/after using Get/SetProtected value. \n\nWhen you no longer need a protected value, it's good practice to call ClearProtectedValue.\n\n- *string* `key` the key of the pair.\n- *float* `value` the value of the pair.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#setprotectedvalue-2)",
				signature: "(string key, float value) : void"
			},
		]
	},
	"GetUnitPosition2D": {
		signatures: [
			{
				description: "Returns the [position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2) of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the position of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitposition2d-1)",
				signature: "(unit unit) : Float2"
			},
		]
	},
	"GetUnitPosition3D": {
		signatures: [
			{
				description: "Returns the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the position of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitposition3d-1)",
				signature: "(unit unit) : Float3"
			},
		]
	},
	"SetUnitPosition2D": {
		signatures: [
			{
				description: "Sets the [position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2) of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition2d-3)",
				signature: "(unit unit, float x, float z) : void"
			},
		]
	},
	"SetUnitPosition3D": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `y` the y-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition3d-4)",
				signature: "(unit unit, float x, float y, float z) : void"
			},
		]
	},
	"SetUnitPosition2DWithInterpolation": {
		signatures: [
			{
				description: "Sets the [position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2) of a unit while causing it to seemingly leap to that position.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition2dwithinterpolation-3)",
				signature: "(unit unit, float x, float z) : void"
			},
		]
	},
	"SetUnitPosition3DWithInterpolation": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a unit while causing it to seemingly leap to that position.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `y` the y-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition3dwithinterpolation-4)",
				signature: "(unit unit, float x, float y, float z) : void"
			},
		]
	},
	"SetUnitPosition2DAsync": {
		signatures: [
			{
				description: "Sets the [position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2) of a unit. Asynchronous, so may not occur this simulation frame.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition2dasync-3)",
				signature: "(unit unit, float x, float z) : void"
			},
		]
	},
	"SetUnitPosition3DAsync": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a unit. Asynchronous so may not occur this simulation frame. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `y` the y-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition3dasync-4)",
				signature: "(unit unit, float x, float y, float z) : void"
			},
		]
	},
	"SetUnitPosition2DWithInterpolationAsync": {
		signatures: [
			{
				description: "Sets the [position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2) of a unit while causing it to seemingly leap to that position. Async so may not happen this simulation frame. Recommended you use the non-Async version. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition2dwithinterpolationasync-3)",
				signature: "(unit unit, float x, float z) : void"
			},
		]
	},
	"SetUnitPosition3DWithInterpolationAsync": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a unit while causing it to seemingly leap to that position. Async so may not occur this frame. Recommended you use the non-async version of this API.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the position of.\n- *float* `x` the x-axis coordinate of the new position.\n- *float* `y` the y-axis coordinate of the new position.\n- *float* `z` the z-axis coordinate of the new position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitposition3dwithinterpolationasync-4)",
				signature: "(unit unit, float x, float y, float z) : void"
			},
		]
	},
	"GetUnitRotationEuler": {
		signatures: [
			{
				description: "Returns the [3d facing](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a unit as a set of [Euler Angles](https://en.wikipedia.org/wiki/Euler_angles).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to get the facing of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getunitrotationeuler-1)",
				signature: "(unit unit) : Float3"
			},
		]
	},
	"SetUnitRotationEuler": {
		signatures: [
			{
				description: "Sets the facing of a unit using [Euler Angles](https://en.wikipedia.org/wiki/Euler_angles).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the facing of of.\n- *float* `x` the x-axis rotation.\n- *float* `y` the y-axis rotation.\n- *float* `z` the z-axis rotation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setunitrotationeuler-4)",
				signature: "(unit unit, float x, float y, float z) : void"
			},
		]
	},
	"MoveAttack": {
		signatures: [
			{
				description: "Issues an order for a unit to move to a target point while attacking any enemies they come across while moving.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` unit to issue the attack-move command to.\n- *float* `x` the x-axis coordinate of the target point.\n- *float* `z` the z-axis coordinate of the target point.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#moveattack-3)",
				signature: "(unit target, float x, float z) : void"
			},
		]
	},
	"Random": {
		signatures: [
			{
				description: "Returns a float between the min and max values. Use `math.random(min, max)` for integer values.\n\n- *float* `min` the minimum value for the new random float.\n- *float* `max` the maximum value for the new random float.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Math#random-2)",
				signature: "(float min, float max) : float"
			},
		]
	},
	"UnitExists": {
		signatures: [
			{
				description: "Returns true is a units exists.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#unitexists-1)",
				signature: "(unit unit) : bool"
			},
		]
	},
	"SimpleUnitExists": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#simpleunitexists-1)",
				signature: "(unit unit) : bool"
			},
		]
	},
	"UnitIsAlive": {
		signatures: [
			{
				description: "Returns true if a unit is alive.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#unitisalive-1)",
				signature: "(unit unit) : bool"
			},
		]
	},
	"UnitIsMoving": {
		signatures: [
			{
				description: "Returns true if a unit is moving.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#unitismoving-1)",
				signature: "(unit unit) : bool"
			},
		]
	},
	"PauseCallWaveTimer": {
		signatures: [
			{
				description: "Pause the countdown until the next Wild Sky TD wave begins. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#pausecallwavetimer-0)",
				signature: "() : void"
			},
		]
	},
	"GetTotalWaveCount": {
		signatures: [
			{
				description: "Get the number of Wild Sky TD creep spawn waves that are currently initialized.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#gettotalwavecount-0)",
				signature: "() : int"
			},
		]
	},
	"ResumeCallWaveTimer": {
		signatures: [
			{
				description: "Resume the countdown until the next Wild Sky TD wave begins. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#resumecallwavetimer-0)",
				signature: "() : void"
			},
		]
	},
	"CallNextWave": {
		signatures: [
			{
				description: "Force the Wild Sky TD wave to start, as if the \"Call Wave\" button had been pressed.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#callnextwave-0)",
				signature: "() : bool"
			},
		]
	},
	"SetDisableWaveAutoStart": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#setdisablewaveautostart-1)",
				signature: "(bool disable) : void"
			},
		]
	},
	"EnableUnitSelection": {
		signatures: [
			{
				description: "Enables selection for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to enable selection on.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#enableunitselection-1)",
				signature: "(unit target) : void"
			},
		]
	},
	"DisableUnitSelection": {
		signatures: [
			{
				description: "Disables selection for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to disable selection on.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#disableunitselection-1)",
				signature: "(unit target) : void"
			},
		]
	},
	"GetLevel": {
		signatures: [
			{
				description: "Get the name of the level being played\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Map#getlevel-0)",
				signature: "() : string"
			},
		]
	},
	"GetLevelName": {
		signatures: [
			{
				description: "Returns the published name of the map.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Map#getlevelname-0)",
				signature: "() : string"
			},
		]
	},
	"PlayLevel": {
		signatures: [
			{
				description: "Loads and plays the given map. The map to load must be within the same project.\n\n- *string* `path` the path to the map, or just the map name if both maps are in the same folder.\n- *string* `data` any data that is passed to the new level.\n- *object* `usedUnits` a table declaring any units used by the new level, if not declared locally already.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Map#playlevel-4)",
				signature: "(string path, string projectName, string data = null, object usedUnits = null) : void"
			},
		]
	},
	"GetPlayLevelData": {
		signatures: [
			{
				description: "Returns the play level data.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Map#getplayleveldata-0)",
				signature: "() : string"
			},
		]
	},
	"GetCurrentWaveId": {
		signatures: [
			{
				description: "Returns the current wave ID. Wild Sky TD only. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#getcurrentwaveid-0)",
				signature: "() : int"
			},
		]
	},
	"CreateRegion": {
		signatures: [
			{
				description: "Creates a dynamic region.\n\n- *float* `x` the x coordinate of the new region.\n- *float* `z` the z coordinate of the new region.\n- *float* `w` the width of the new region.\n- *float* `h` the height of the new region.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#createregion-4)",
				signature: "(float x, float z, float w, float h) : Region"
			},
		]
	},
	"RemoveRegion": {
		signatures: [
			{
				description: "Removes a region.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` region to remove\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#removeregion-1)",
				signature: "(Region region) : void"
			},
		]
	},
	"FindRegion": {
		signatures: [
			{
				description: "Returns a region by name. Currently only works for regions pre-placed in the Terrain Window.\n\n- *string* `name` the name of the existing region to return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#findregion-1)",
				signature: "(string name) : Region"
			},
		]
	},
	"RegionExists": {
		signatures: [
			{
				description: "Returns true if the region exists. Currently only works for regions pre-placed in the Terrain Window.\n\n- *string* `name` name of the region to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#regionexists-1)",
				signature: "(string name) : bool"
			},
		]
	},
	"GetRegionName": {
		signatures: [
			{
				description: "Returns the name of a region. Currently only works for regions pre-placed in the Terrain Window.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to get the name of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#getregionname-1)",
				signature: "(Region region) : string"
			},
		]
	},
	"GetRandomPointInRegion": {
		signatures: [
			{
				description: "Returns the coordinates of a random point in the region.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to find a random point in.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#getrandompointinregion-1)",
				signature: "(Region region) : Float2"
			},
		]
	},
	"GetCenterOfRegion": {
		signatures: [
			{
				description: "Returns the coordinates of the center point of the region.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the center point of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#getcenterofregion-1)",
				signature: "(Region region) : Float2"
			},
		]
	},
	"GetSizeOfRegion": {
		signatures: [
			{
				description: "Returns the X and Y dimensions of the region.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the dimensions of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#getsizeofregion-1)",
				signature: "(Region region) : Float2"
			},
		]
	},
	"CheckPointInRegion": {
		signatures: [
			{
				description: "Returns true if coordinates are within the region.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the dimensions of.\n- *float* `x` the x coordinate of the point.\n- *float* `z` the z coordinate of the point.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#checkpointinregion-3)",
				signature: "(Region region, float x, float z) : bool"
			},
		]
	},
	"GetUnitsInRegion": {
		signatures: [
			{
				description: "Returns a table of the units within the region.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to find the units within.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#getunitsinregion-1)",
				signature: "(Region region) : object"
			},
		]
	},
	"HideRegion": {
		signatures: [
			{
				description: "Obscures the region on the map from the player.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to obscure (creates fog of war).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#hideregion-1)",
				signature: "(Region region) : void"
			},
		]
	},
	"RevealRegion": {
		signatures: [
			{
				description: "Reveals a previously hidden region on the map to the player (clears fog of war).\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to reveal.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#revealregion-1)",
				signature: "(Region region) : void"
			},
		]
	},
	"MoveRegion": {
		signatures: [
			{
				description: "Moves the center of the region to the specified coordinates.\n\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region to move.\n- *float* `x` the x coordinate to move the region to.\n- *float* `z` the z coordinate to move the region to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Region#moveregion-3)",
				signature: "(Region region, float x, float z) : void"
			},
		]
	},
	"SetUpgradeLevelAsync": {
		signatures: [
			{
				description: "Sets the level of an upgrade (for all players).\n\n- *string* `name` the name of the upgrade.\n- *int* `level` the level to set the upgrade to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Upgrade#setupgradelevelasync-2)",
				signature: "(string name, int level) : void"
			},
		]
	},
	"TriggerAddUnitSelectedEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is selected.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitselectedevent-2)",
				signature: "(unit unit, TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddUnitDeselectedEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is deselected.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdeselectedevent-2)",
				signature: "(unit unit, TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddUnitDamageEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is damaged. Inputs the damage done to the unit into the trigger as the first parameter, and passes the target unit to the second parameter.\n\n**Note:** DCEI.Wait is explicitly disabled in callbacks for TriggerAddUnitDamageEvent, TriggerAddUnitCriticalDamageEvent, TriggerAddUnitHealEvent as these triggers may each fire multiple times per second and DCEI.Wait is relatively costly. To circumvent this, you should wrap trigger into a DCEI.TriggerAddTimerEventElapsed (or Core.Timer).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<float, unit>* `trigger` the callback function that is run when the event is triggered.\n- *[CriticalFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#criticalfilter)* `filter` whether this event is triggered on all damage event, or just critical ones, or just non-critical ones.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdamageevent-3)",
				signature: "(unit unit, TypedCallback<float, unit> trigger, CriticalFilter filter = default) : void"
			},
		]
	},
	"TriggerAddUnitCriticalDamageEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is damaged by a critical hit from a weapon. Inputs the damage done to the unit into the trigger as the first parameter, and passes the target unit to the second parameter.\n\n**Note:** DCEI.Wait is explicitly disabled in callbacks for TriggerAddUnitDamageEvent, TriggerAddUnitCriticalDamageEvent, TriggerAddUnitHealEvent as these triggers may each fire multiple times per second and DCEI.Wait is relatively costly. To circumvent this, you should wrap trigger into a DCEI.TriggerAddTimerEventElapsed (or Core.Timer).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<float, unit>* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitcriticaldamageevent-2)",
				signature: "(unit unit, TypedCallback<float, unit> trigger) : void"
			},
		]
	},
	"TriggerAddUnitHealEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is healed. Inputs the amount healed by the unit into the trigger as the first parameter, and passes the target unit to the second parameter.\n\n**Note:** DCEI.Wait is explicitly disabled in callbacks for TriggerAddUnitDamageEvent, TriggerAddUnitCriticalDamageEvent, TriggerAddUnitHealEvent as these triggers may each fire multiple times per second and DCEI.Wait is relatively costly. To circumvent this, you should wrap trigger into a DCEI.TriggerAddTimerEventElapsed (or Core.Timer).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<float, unit>* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunithealevent-2)",
				signature: "(unit unit, TypedCallback<float, unit> trigger) : void"
			},
		]
	},
	"TriggerAddUnitSpawnEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is spawned.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitspawnevent-3)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False) : void"
			},
		]
	},
	"TriggerAddTimerEventElapsed": {
		signatures: [
			{
				description: "This event triggers when the timer has elapsed. Particularly if you need to pause or destroy a timer before it elapses, you will want to use [Core timers](https://wiki.funovus.com/development/Mods-Core#addduration) instead.\n\nFor more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) \n\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *float* `time` the amount of time the timer runs for.\n- *bool* `useRealTime` if true, uses real time instead of game time.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Timer#triggeraddtimereventelapsed-4)",
				signature: "(TypedCallback trigger, float time, bool useRealTime = False, bool simple = False) : void"
			},
		]
	},
	"OnMapStart": {
		signatures: [
			{
				description: "This event triggers on map start.\n\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Timer#onmapstart-1)",
				signature: "(TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddTimerEventPeriodic": {
		signatures: [
			{
				description: "This event triggers periodically on a timer, for the given number of times. In most cases, you will want to use [Core timers](https://wiki.funovus.com/development/Mods-Core#addduration) instead.\n\nFor more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) \n\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *float* `period` the amount of time between each trigger call.\n- *int* `lifeCount` the number of times the trigger is called.\n- *bool* `useRealTime` if true, uses real time instead of game time.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Timer#triggeraddtimereventperiodic-5)",
				signature: "(TypedCallback trigger, float period, int lifeCount, bool useRealTime = False, bool simple = False) : void"
			},
		]
	},
	"TriggerAddTimerEventPeriodicIndefinite": {
		signatures: [
			{
				description: "This event triggers periodically on a timer, for an indefinite number of times. In most cases, you will want to use [Core timers](https://wiki.funovus.com/development/Mods-Core#addduration) instead.\n\nFor more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) \n\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *float* `period` the amount of time between each trigger call.\n- *bool* `useRealTime` if true, uses real time instead of game time.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Timer#triggeraddtimereventperiodicindefinite-4)",
				signature: "(TypedCallback trigger, float period, bool useRealTime = False, bool simple = False) : void"
			},
		]
	},
	"TriggerAddUnitDiedEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit dies.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<unit>* `trigger` the callback function that is run when the event is triggered. This function can also pass the killing unit as a parameter to the callback function.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdiedevent-3)",
				signature: "(unit unit, TypedCallback<unit> trigger, bool simple = False) : void"
			},
		]
	},
	"TriggerAddUnitMoveCommandEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit **starts** moving. Inputs the destination into the first parameter of the trigger as a float2 value.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<Float2>* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitmovecommandevent-2)",
				signature: "(unit unit, TypedCallback<Float2> trigger) : void"
			},
		]
	},
	"TriggerAddOnUnitIdleEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit goes into the idle state (no commands queued). \n\n**Note:** The unit must be set, [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) does not work for this event.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddonunitidleevent-2)",
				signature: "(unit unit, TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddUnitRemovedEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit is removed.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not utilize DCEI.Wait() at all.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitremovedevent-3)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False) : void"
			},
		]
	},
	"TriggerAddWaveStatusChangeEvent": {
		signatures: [
			{
				description: "Fires an event when the wave status changes. \n\nThere are two relevant APIs:\n\n- *int* `DCEI.TriggeringWaveId` returns the number id of the wave. \n- *string* `DCEI.TriggeringWaveStatus` the current status of the wave. \n  \nThe types of statuses:\n\n- None,\n- NotStarted,\nDelay time defined in data, will not show Call Wave Button. Will start count down when this reaches 0\n- Delay,\nCount down time to show Call Wave Button. Will spawn when this reaches 0\n- CountDown,\n- Spawning,\n- Finished\n\n- *TypedCallback* `trigger` the lua function to run when the event is triggered\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Tower-Defense#triggeraddwavestatuschangeevent-1)",
				signature: "(TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddCallWaveEvent": {
		signatures: [
			{
				description: "Register an event to trigger a callback whenever a spawn wave is called.\n\n- *TypedCallback\\<float>* `trigger` the lua function to run when the event is triggered\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Tower-Defense#triggeraddcallwaveevent-1)",
				signature: "(TypedCallback<float> trigger) : void"
			},
		]
	},
	"TriggerAddCastAbilityEvent": {
		signatures: [
			{
				description: "This event triggers when an ability has completed its cast. This function can also pass the target unit and target location as parameters to the callback function (if target is only a location, target unit will return nil). You can also set up an [Ability Filter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter) to make this only trigger for certain ability.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback\\<unit, Float2>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeraddcastabilityevent-4)",
				signature: "(unit unit, TypedCallback<unit, Float2> trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddMouseDownEvent": {
		signatures: [
			{
				description: "This event triggers when the specified mouse button down occurs. Using this event will disable unit selection as well as all other built-in mouse functions tied to the given mouse button id including any [TriggerAddMouseUpEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddmouseupevent-2). This function can also pass the mouse cursor position as a parameter to the callback function.\n\n- *int* `mouseButtonId` the mouse button; mouseButtonId 0: left mouse, mouseButtonId 1: right mouse.\n- *TypedCallback\\<Float2, unit>* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddmousedownevent-2)",
				signature: "(int mouseButtonId, TypedCallback<Float2, unit> trigger) : void"
			},
		]
	},
	"TriggerAddMouseUpEvent": {
		signatures: [
			{
				description: "This event triggers when the specified mouse button up occurs. Using this event will disable unit commands as well as all other built-in mouse functions tied to the given mouse button id including any [TriggerAddMouseDownEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddmousedownevent-2).\n\n- *int* `mouseButtonId` the mouse button; mouseButtonId 0: left mouse, mouseButtonId 1: right mouse.\n- *TypedCallback\\<Float2, unit>* `trigger` the callback function that is run when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddmouseupevent-2)",
				signature: "(int mouseButtonId, TypedCallback<Float2, unit> trigger) : void"
			},
		]
	},
	"TriggerAddSwipeTouchDownEvent": {
		signatures: [
			{
				description: "This event triggers when the start of a screen swipe input has been detected. Only works on mobile. Using this event will disable camera pan as well as all other built-in touch functions including TriggerAddTouchUpEvent. \n\n- *TypedCallback\\<Float2>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Swipe input was started.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddswipetouchdownevent-1)",
				signature: "(TypedCallback<Float2> trigger) : void"
			},
		]
	},
	"TriggerAddSwipeTouchUpEvent": {
		signatures: [
			{
				description: "This event triggers when the end of a screen swipe input has been detected. Only works on mobile. Using this event will disable camera pan as well as all other built-in touch functions including TriggerAddTouchUpEvent. \n\n- *TypedCallback\\<Float2>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Swipe input has ended.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddswipetouchupevent-1)",
				signature: "(TypedCallback<Float2> trigger) : void"
			},
		]
	},
	"TriggerAddFastForwardEvent": {
		signatures: [
			{
				description: "Register an event to trigger a callback whenever fast forward is toggled.\n\n- *TypedCallback\\<bool>* `trigger` the lua function to run when the event is triggered\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Tower-Defense#triggeraddfastforwardevent-1)",
				signature: "(TypedCallback<bool> trigger) : void"
			},
		]
	},
	"TriggerAddTouchDownEvent": {
		signatures: [
			{
				description: "This event triggers when the start of a touch input is detected. Only works on mobile. Using this event will disable unit selection as well as all other built-in touch functions including TriggerAddSwipeTouchDownEvent. \n\n- *TypedCallback\\<Float2, unit>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Touch input occurred.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddtouchdownevent-1)",
				signature: "(TypedCallback<Float2, unit> trigger) : void"
			},
		]
	},
	"TriggerAddTouchUpEvent": {
		signatures: [
			{
				description: "This event triggers when the end of a touch input is detected. Only works on mobile. Using this event will disable unit selection as well as all other built-in touch functions including TriggerAddSwipeTouchDownEvent. \n\n- *TypedCallback\\<Float2, unit>* `trigger` the trigger to run when this event occurs. Parameter `point` denotes the point in screenspace (not worldspace), where the Touch input occurred.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddtouchupevent-1)",
				signature: "(TypedCallback<Float2, unit> trigger) : void"
			},
		]
	},
	"TriggerAddJoystickEvent": {
		signatures: [
			{
				description: "Creates an on-screen joystick and that triggers this event when moved. Uses default [JoystickOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#joystickoptions).\n\n- *TypedCallback* `trigger` the trigger to run when this event occurs.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickevent-1)",
				signature: "(TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddJoystickEventWithJoystickOptions": {
		signatures: [
			{
				description: "Creates an on-screen joystick and that triggers this event when moved. Uses default [JoystickOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#joystickoptions).\n\nBy default, the joystick can be used with WASD, arrow keys, or by click-dragging the joystick button.\n\n- *TypedCallback* `trigger` the trigger to run when this event occurs.\n- *[JoystickOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#joystickoptions)* `options` see [JoystickOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#joystickoptions)\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickeventwithjoystickoptions-2)",
				signature: "(TypedCallback trigger, JoystickOptions options) : void"
			},
		]
	},
	"TriggerAddJoystickTapEvent": {
		signatures: [
			{
				description: "This event triggers when a joystick is tapped.\n\n- *TypedCallback* `trigger` the trigger to run when this event occurs.\n- *int* `joystickId` the ID of the joystick to register the event for.\n- *float* `validDuration` the time window where interacting with the joystick will register as a tap. This is also the time window before the joystick will accept input regularly. If the joystick tap location exits the deadzone given in the next parameter, this duration will immediately end.\n- *float* `validRadius` the deadzone where interacting with the joystick will register as a tap. Accepted values are from 0-1, corresponding to the radius of the joystick (measured from the center). Tapping the joystick outside this deadzone will not trigger the event.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoysticktapevent-4)",
				signature: "(TypedCallback trigger, int joystickId, float validDuration, float validRadius) : void"
			},
		]
	},
	"TriggerAddJoystickSwipeEvent": {
		signatures: [
			{
				description: "This event triggers when a joystick is swiped.\n\n- *TypedCallback* `trigger` the trigger to run when this event occurs.\n- *int* `joystickId` the ID of the joystick to register the event for.\n- *float* `validDuration` the time window where interacting with the joystick will register as a swipe. This time window starts counting when the joystick is interacted with, even if it is within the deadzone of a [TriggerAddJoystickTapEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoysticktapevent-4).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickswipeevent-3)",
				signature: "(TypedCallback trigger, int joystickId, float validDuration) : void"
			},
		]
	},
	"TriggerAddJoystickReleaseEvent": {
		signatures: [
			{
				description: "This event triggers when a joystick is released.\n\n- *TypedCallback* `trigger` the trigger to run when this event occurs.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickreleaseevent-1)",
				signature: "(TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddJoystickReleaseEventWithId": {
		signatures: [
			{
				description: "This event triggers when the given joystick is released.\n\n- *TypedCallback* `trigger` the trigger to run when this event occurs.\n- *int* `joystickId` the ID of the joystick to register the event for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickreleaseeventwithid-2)",
				signature: "(TypedCallback trigger, int joystickId) : void"
			},
		]
	},
	"TriggerAddUseWeaponEvent": {
		signatures: [
			{
				description: "This event is triggered whenever a weapon is used. This function can also pass the the target unit and target location as parameters to the callback function.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<unit, Float2>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[WeaponFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#weaponfilter)* `filter` could make this event only trigger on certain weapons\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Weapon#triggeradduseweaponevent-4)",
				signature: "(unit unit, TypedCallback<unit, Float2> trigger, bool simple = False, WeaponFilter filter = default) : void"
			},
		]
	},
	"TriggerAddUseAbilityEvent": {
		signatures: [
			{
				description: "This event triggers when an ability exits the finish phase. This function can also pass the target unit and target location as parameters to the callback function (if target is only a location, target unit will return nil). You can also set up an [Ability Filter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter) to make this only trigger for certain ability.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback\\<unit, Float2>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeradduseabilityevent-4)",
				signature: "(unit unit, TypedCallback<unit, Float2> trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddActivateAbilityEvent": {
		signatures: [
			{
				description: "This event triggers when an ability activates. You can also set up an [Ability Filter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter) to make this only trigger for certain ability.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeraddactivateabilityevent-4)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddUnitAbilityOnOffEvent": {
		signatures: [
			{
				description: "This event triggers when an ability goes on or off cooldown. For abilities with charges, the event will only trigger when the charge count decreases to 0 or increases to at least 1.\n\nThe first parameter of the callback function is a boolean that indicates whether the ability has become available (true) or unavailable (false).\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback\\<bool>* `trigger` the callback function that is run when the event is triggered. This first parameter of this function will return `true` when the ability goes off cooldown and `false` when the ability enters cooldown.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeraddunitabilityonoffevent-4)",
				signature: "(unit unit, TypedCallback<bool> trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddUnitAbilityOnEvent": {
		signatures: [
			{
				description: "This event triggers when an ability goes on cooldown. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback\\<bool>* `trigger` the callback function that is run when the event is triggered. This first parameter of this function will return `true` when the ability goes off cooldown and `false` when the ability enters cooldown.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeraddunitabilityonevent-4)",
				signature: "(unit unit, TypedCallback<bool> trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddUnitAbilityOffEvent": {
		signatures: [
			{
				description: "This event triggers when an ability goes off cooldown. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback\\<bool>* `trigger` the callback function that is run when the event is triggered. This first parameter of this function will return `true` when the ability goes off cooldown and `false` when the ability enters cooldown.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeraddunitabilityoffevent-4)",
				signature: "(unit unit, TypedCallback<bool> trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddDeactivateAbilityEvent": {
		signatures: [
			{
				description: "This event triggers when an ability exits targeting mode for the unit. \n\n**Note:** This is event is triggered regardless of method by which the targeting mode was exited, whether it was canceled or a target was set.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event when any unit uses an ability.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[AbilityFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#abilityfilter)* `filter` this filter allows you to only trigger this event on certain abilities\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Ability#triggeradddeactivateabilityevent-4)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False, AbilityFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorStackIncreaseEvent": {
		signatures: [
			{
				description: "This event triggers when a behavior's stack count increase. This function can also pass the effect context and stack count delta as parameters to the callback function.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<EffectContext, int>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviorstackincreaseevent-4)",
				signature: "(unit unit, TypedCallback<EffectContext, int> trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorStackDecreaseEvent": {
		signatures: [
			{
				description: "This event triggers when a behavior's stack count decrease. This function can also pass the effect context and stack count delta as parameters to the callback function.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<EffectContext, int>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviorstackdecreaseevent-4)",
				signature: "(unit unit, TypedCallback<EffectContext, int> trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorAddEvent": {
		signatures: [
			{
				description: "This event triggers when a behavior is added to a unit. This function can also pass the effect context as a parameter to the callback function.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback\\<EffectContext>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehavioraddevent-4)",
				signature: "(unit unit, TypedCallback<EffectContext> trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorExpireEvent": {
		signatures: [
			{
				description: "This event triggers when a behavior expires on a unit. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviorexpireevent-4)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorDisabledEvent": {
		signatures: [
			{
				description: "This event triggers when a unit has a behavior on it is disabled. Use [TriggeringBehaviorName](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname) to get the behavior that triggered the event.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviordisabledevent-4)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorEnabledEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit has a behavior on it enabled. Use [TriggeringBehaviorName](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname) to figure out which behavior triggered the event.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviorenabledevent-4)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddBehaviorRemoveEvent": {
		signatures: [
			{
				description: "This event is triggered when a unit has a behavior on it removed.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that triggers this event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *TypedCallback* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n- *[BehaviorFilter](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviorfilter)* `filter` could make this event only trigger on certain behaviors\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Behavior#triggeraddbehaviorremoveevent-4)",
				signature: "(unit unit, TypedCallback trigger, bool simple = False, BehaviorFilter filter = default) : void"
			},
		]
	},
	"TriggerAddEffectEvent": {
		signatures: [
			{
				description: "This event is triggered when an effect occurs. Use [TriggeringEffectName](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringeffectname) and [TriggeringEffectContext](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringeffectcontext) to get the name and context of the effect. This function can also pass the effect context as a parameter to the callback function.\n\n- *string* `effectName` the name of the effect which triggers the event.\n- *TypedCallback\\<EffectContext>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true if the trigger does not use DCEI.Wait().\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Effect#triggeraddeffectevent-3)",
				signature: "(string effectName, TypedCallback<EffectContext> trigger, bool simple = False) : void"
			},
		]
	},
	"TriggerAddEffectHookEvent": {
		signatures: [
			{
				description: "Effect hooks allow you to intercept an effect and modify the data before executing it during Lua run-time.  In the following example, this effect hook intercepts a launch missile effect to make it use the very unit it’s attacking as the missile for the Launch Missile effect. See [Using Effect Hooks](https://www.notion.so/funovus/Using-Effect-Hooks-14bc65d3472b4b1a93b65b30deed1aa9)\n\n- *string* `effectName` the name of the effect which triggers the event.\n- *TypedCallback\\<EffectContext>* `trigger` the callback function that is run when the event is triggered.\n- *bool* `simple` this flag reduces overhead by preventing the usage of DCEI.Wait() within the trigger. You should only set this to true\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Effect#triggeraddeffecthookevent-3)",
				signature: "(string effectName, TypedCallback<EffectContext> trigger, bool simple = False) : void"
			},
		]
	},
	"EvaluateEffectHookExpression": {
		signatures: [
			{
				description: "Added effect hook trigger APIs that let you customize effect data at runtime for each effect instance.\n\n- *string* `name` the name of the expression to evaluate\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#evaluateeffecthookexpression-1)",
				signature: "(string name) : double"
			},
		]
	},
	"GetEffectHookFieldValue": {
		signatures: [
			{
				description: "Added effect hook trigger APIs that let you customize effect data at runtime for each effect instance.\n\n- *String[]* `path` field path for the value to get.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#geteffecthookfieldvalue-1)",
				signature: "(String[] path) : object"
			},
		]
	},
	"SetEffectHookFieldValue": {
		signatures: [
			{
				description: "Added effect hook trigger APIs that let you customize effect data at runtime for each effect instance.\n\n- *String[]* `path` field path for the value to set.\n- *object* `value` the value to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Effect#seteffecthookfieldvalue-2)",
				signature: "(String[] path, object value) : void"
			},
		]
	},
	"SetEffectFieldValueForPlayer": {
		signatures: [
			{
				description: "Set effect field value for player with playerId. This is similar to effect hooks but faster because it doesn't need to run lua every time the effect runs, and  result can be cached. \n\n- *int* `playerId` player id\n- *string* `effectName` name of the effect to modify\n- *String[]* `path` field path to modify. You can right-click on a field in the data editor and select \"copy data path\" to find the correct path to input.\n- *object* `value` the value to set the effect field to for this player.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#seteffectfieldvalueforplayer-4)",
				signature: "(int playerId, string effectName, String[] path, object value) : void"
			},
		]
	},
	"TriggerAddTextCommandEvent": {
		signatures: [
			{
				description: "This event triggers when a text command is entered.\n\n- *TypedCallback\\<string>* `trigger` the callback function for the chat command. Parameter `text_command` is the text command entered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddtextcommandevent-1)",
				signature: "(TypedCallback<string> trigger) : void"
			},
		]
	},
	"TriggerAddJoystickButtonEvent": {
		signatures: [
			{
				description: "Creates an on-screen button corresponding to the given buttonId.\n\n- *int* `buttonId` which joystick button index to use. Accepted values: `[0, 3]` (see below).\n```\nButton Ids\n-------------------\n|                 |\n|             (3) |\n|          (2)    |\n|       (1)   (0) |\n|-----------------|\n```\n- *TypedCallback* `trigger` the callback function for when the joystick button is used.\n- *[JoystickButtonOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#joystickbuttonoptions)* `options` [accepted values](https://wiki.funovus.com/development/JoystickButtonOptions)\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickbuttonevent-3)",
				signature: "(int buttonId, TypedCallback trigger, JoystickButtonOptions options) : void"
			},
		]
	},
	"TriggerAddMappedKeyDownEvent": {
		signatures: [
			{
				description: "This event triggers when the corresponding key is pressed. Key mappings are defined in [input settings](https://wiki.funovus.com/development/Data-ProjectSetting#key-mappings). \n\n- *string* `keyEventName` the mapped key event that will trigger this event.\n- *TypedCallback\\<string>* `trigger` the trigger to run when this event occurs.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddmappedkeydownevent-2)",
				signature: "(string keyEventName, TypedCallback<string> trigger) : void"
			},
		]
	},
	"TriggerAddMappedKeyUpEvent": {
		signatures: [
			{
				description: "This event triggers when the corresponding key is released. Key mappings are defined in [input settings](https://wiki.funovus.com/development/Data-ProjectSetting#key-mappings). \n\n- *string* `keyEventName` the mapped key event that will trigger this event.\n- *TypedCallback\\<string>* `trigger` the trigger to run when this event occurs.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddmappedkeyupevent-2)",
				signature: "(string keyEventName, TypedCallback<string> trigger) : void"
			},
		]
	},
	"TriggerAddOnMouseWorldPositionTrackingEvent": {
		signatures: [
			{
				description: "Tracks mouse position every frame when StartMouseTracking is called. StopMouseTracking will end it. \n\n- *TypedCallback\\<int, Float2>* `trigger` function to run when event is called\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddonmouseworldpositiontrackingevent-1)",
				signature: "(TypedCallback<int, Float2> trigger) : void"
			},
		]
	},
	"TriggerAddOnGoldChangeEvent": {
		signatures: [
			{
				description: "This event triggers when the player's gold changes. This function can also pass the player gaining gold and the net change in gold as parameters to the callback function.\n\n- *TypedCallback\\<int, int>* `trigger` the callback function that is run when the event is triggered. [DCEI.TriggeringPlayerId](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringplayerid) will not get the triggering player ID.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Player#triggeraddongoldchangeevent-1)",
				signature: "(TypedCallback<int, int> trigger) : void"
			},
		]
	},
	"TriggerAddUnitEnterRegionEvent": {
		signatures: [
			{
				description: "This event is triggered when the specified unit enters the specified region. You can use [DCEI.TriggeringUnit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringunit)/[DCEI.TriggeringRegion](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringregion) to get the event unit/region in the trigger callback.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to trigger the event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region for the unit to enter. Use [DCEI.RegionAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#regionany) to trigger this event for any region.\n- *TypedCallback* `trigger` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Region#triggeraddunitenterregionevent-3)",
				signature: "(unit unit, Region region, TypedCallback trigger) : void"
			},
		]
	},
	"TriggerAddUnitLeaveRegionEvent": {
		signatures: [
			{
				description: "This event is triggered when the specified unit leaves the specified region. You can use [DCEI.TriggeringUnit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringunit)/[DCEI.TriggeringRegion](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringregion) to get the event unit/region in the trigger callback.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to trigger the event. Use [DCEI.UnitAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany) to trigger this event for any unit.\n- *[Region](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#region)* `region` the region for the unit to leave. Use [DCEI.RegionAny](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#regionany) to trigger this event for any region.\n- *TypedCallback* `trigger` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Region#triggeraddunitleaveregionevent-3)",
				signature: "(unit unit, Region region, TypedCallback trigger) : void"
			},
		]
	},
	"GetMaxShield": {
		signatures: [
			{
				description: "Returns the maximum shields of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getmaxshield-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"SetMaxShield": {
		signatures: [
			{
				description: "Sets the maximum shields for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.\n- *float* `value` the new maximum for the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmaxshield-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetMaxShieldAsync": {
		signatures: [
			{
				description: "Sets the maximum shields for a unit. Async version of API; may not occur until a simulation frame tick after it's called. Recommended you use the non-async version of this API. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.\n- *float* `value` the new maximum for the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmaxshieldasync-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"GetShield": {
		signatures: [
			{
				description: "Returns the current shields of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getshield-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"AddShield": {
		signatures: [
			{
				description: "Increases the current shields of a unit by a set amount up to its maximum.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.\n- *float* `value` amount of shields to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addshield-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetShield": {
		signatures: [
			{
				description: "Set the current shields of a unit to a set amount up to its maximum.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.\n- *float* `value` the amount of shields to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setshield-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"AddShieldAsync": {
		signatures: [
			{
				description: "Increases the current shields of a unit by a set amount up to its maximum. Async so may not occur on the same simulation frame as it's called. Recommended you use the non-async version of this API.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.\n- *float* `value` amount of shields to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#addshieldasync-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetShieldValueAsync": {
		signatures: [
			{
				description: "Set the current shields of a unit to a set amount up to its maximum. Async so may not occur util after the current simulation frame. Recommended you use the non-async API instead.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to add shields to.\n- *float* `amount` amount of shields to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setshieldvalueasync-2)",
				signature: "(unit unit, float amount) : void"
			},
		]
	},
	"GetMaxHealth": {
		signatures: [
			{
				description: "Returns the maximum health of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getmaxhealth-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"SetMaxHealth": {
		signatures: [
			{
				description: "Sets the maximum health for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.\n- *float* `value` the new maximum for the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmaxhealth-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetMaxHealthAsync": {
		signatures: [
			{
				description: "Sets the maximum health for a unit. Async, so may not occur until next simulation frame. Recommended you use the non-async version of this API.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.\n- *float* `value` the new maximum for the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmaxhealthasync-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"GetMaxMana": {
		signatures: [
			{
				description: "Returns the maximum mana of a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getmaxmana-1)",
				signature: "(unit unit) : float"
			},
		]
	},
	"SetMaxMana": {
		signatures: [
			{
				description: "Sets the maximum mana for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.\n- *float* `value` the new maximum for the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmaxmana-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"SetMaxManaAsync": {
		signatures: [
			{
				description: "Sets the maximum mana for a unit. Async, so may not occur until next simulation frame. Recommended you use the non-async API. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to modify.\n- *float* `value` the new maximum for the unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setmaxmanaasync-2)",
				signature: "(unit unit, float value) : void"
			},
		]
	},
	"IsUnitWeaponEnabled": {
		signatures: [
			{
				description: "Returns true if a weapon is enabled for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.\n- *string* `weaponName` the name of the weapon to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#isunitweaponenabled-2)",
				signature: "(unit unit, string weaponName) : bool"
			},
		]
	},
	"ApplyModifier": {
		signatures: [
			{
				description: "Applies a behavior modifier to a value, returning the scaled/modified value. This makes it easier to mimic value scaling in Lua the same way these values would be scaled via data. \n\n- *[BehaviorModifier](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviormodifier)* `modifier` behavior modifier to apply.\n- *float* `value` base value to scale by the BehaviorModifier.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#applymodifier-2)",
				signature: "(BehaviorModifier modifier, float value) : float"
			},
		]
	},
	"GetUnitWeaponDamageModifier": {
		signatures: [
			{
				description: "Returns a [BehaviorModifier](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviormodifier) for the damage modifiers on the given weapon.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.\n- *string* `weaponName` the name of the weapon to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#getunitweapondamagemodifier-2)",
				signature: "(unit unit, string weaponName) : BehaviorModifier"
			},
		]
	},
	"GetUnitWeaponCriticalChanceModifier": {
		signatures: [
			{
				description: "Returns a [BehaviorModifier](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviormodifier) for the critical chance modifiers on the given weapon.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.\n- *string* `weaponName` the name of the weapon to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#getunitweaponcriticalchancemodifier-2)",
				signature: "(unit unit, string weaponName) : BehaviorModifier"
			},
		]
	},
	"GetUnitWeaponAttackSpeedModifier": {
		signatures: [
			{
				description: "Returns a [BehaviorModifier](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#behaviormodifier) for the attack speed modifiers on the given weapon.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the weapon.\n- *string* `weaponName` the name of the weapon to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#getunitweaponattackspeedmodifier-2)",
				signature: "(unit unit, string weaponName) : BehaviorModifier"
			},
		]
	},
	"GetUnitWeaponCriticalChance": {
		signatures: [
			{
				description: "Returns the given weapon's critical chance.\n\n- *string* `weaponName` the name of the weapon to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#getunitweaponcriticalchance-1)",
				signature: "(string weaponName) : float"
			},
		]
	},
	"GetUnitWeaponAttackSpeed": {
		signatures: [
			{
				description: "Returns the given weapon's attack speed.\n\n- *string* `weaponName` the name of the weapon to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#getunitweaponattackspeed-1)",
				signature: "(string weaponName) : float"
			},
		]
	},
	"AddUnitWeapon": {
		signatures: [
			{
				description: "Adds the given weapon to the unit type.\n\n- *string* `unitType` the name of the type of unit to add the weapon to.\n- *string* `weaponName` the name of the weapon to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#addunitweapon-2)",
				signature: "(string unitType, string weaponName) : void"
			},
		]
	},
	"RemoveUnitWeapon": {
		signatures: [
			{
				description: "Removes the given weapon from the unit type.\n\n- *string* `unitType` the name of the type of unit to remove the weapon from.\n- *string* `weaponName` the name of the weapon to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Weapon#removeunitweapon-2)",
				signature: "(string unitType, string weaponName) : void"
			},
		]
	},
	"IsUnitAbilityEnabled": {
		signatures: [
			{
				description: "Returns true if the ability is enabled on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for ability status.\n- *string* `abilityName` the name of the ability to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#isunitabilityenabled-2)",
				signature: "(unit unit, string abilityName) : bool"
			},
		]
	},
	"GetUnitAbilityCooldown": {
		signatures: [
			{
				description: "Returns the remaining cooldown of a unit's ability. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for ability cooldown.\n- *string* `abilityName` the name of the ability to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#getunitabilitycooldown-2)",
				signature: "(unit unit, string abilityName) : float"
			},
		]
	},
	"GetAbilityCost": {
		signatures: [
			{
				description: "Returns the cost of an ability as a table.\n\n- *string* `abilityName` the name of the ability to get the cost of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#getabilitycost-1)",
				signature: "(string abilityName) : AbilityCost"
			},
		]
	},
	"UnitHasAbility": {
		signatures: [
			{
				description: "Returns whether a unit has an ability or not.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for the ability.\n- *string* `abilityName` the name of the ability to check for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#unithasability-2)",
				signature: "(unit unit, string abilityName) : bool"
			},
		]
	},
	"UnitTypeHasAbility": {
		signatures: [
			{
				description: "Returns true if a unit type has an ability.\n\n- *string* `unitType` the unit type to check for the ability.\n- *string* `abilityName` the name of the ability to check for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#unittypehasability-2)",
				signature: "(string unitType, string abilityName) : bool"
			},
		]
	},
	"GetUnitAbilityCurrentCharge": {
		signatures: [
			{
				description: "Returns the number of charges a unit has left for an ability.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check for charge count.\n- *string* `abilityName` the name of the ability to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#getunitabilitycurrentcharge-2)",
				signature: "(unit unit, string abilityName) : int"
			},
		]
	},
	"SetUnitAbilityCooldown": {
		signatures: [
			{
				description: "Sets the current remaining cooldown of an ability on a unit to a specified time in seconds.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the ability's cooldown.\n- *string* `abilityName` the name of the ability to set the cooldown for.\n- *float* `seconds` the time in seconds to set the cooldown of the ability to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#setunitabilitycooldown-3)",
				signature: "(unit unit, string abilityName, float seconds) : void"
			},
		]
	},
	"SetUnitAbilityMaxCooldown": {
		signatures: [
			{
				description: "Sets the maximum cooldown of an ability on a unit to a specified time in seconds.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the ability's maximum cooldown.\n- *string* `abilityName` the name of the ability to set the maximum cooldown for.\n- *float* `seconds` the time in seconds to set the maximum cooldown of the ability to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#setunitabilitymaxcooldown-3)",
				signature: "(unit unit, string abilityName, float seconds) : void"
			},
		]
	},
	"StartMouseTracking": {
		signatures: [
			{
				description: "Start tracking mouse. Notice this is very costy especially in multiplayer mode. So only use it for short time (follow mouse laser for example)\n\n- *int* `playerId` id of player to track\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#startmousetracking-1)",
				signature: "(int playerId) : void"
			},
		]
	},
	"StopMouseTracking": {
		signatures: [
			{
				description: "Stop mouse tracking for certain player. \n\n- *int* `playerId` id of player to track\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#stopmousetracking-1)",
				signature: "(int playerId) : void"
			},
		]
	},
	"CastAbilityAtUnit": {
		signatures: [
			{
				description: "Issues the order for a unit to cast an ability targeting another unit. For an instant ability, this will ignore the target parameter and simply cast the ability.\n\n- *string* `abilityName` the name of the ability to cast.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit to cast the ability.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to target with the ability.\n- *bool* `immediate` if true, the unit will attempt to cast the ability in the same frame that it's ordered, rather than queuing the command.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#castabilityatunit-4)",
				signature: "(string abilityName, unit caster, unit target, bool immediate = False) : void"
			},
		]
	},
	"CastAbilityEffect": {
		signatures: [
			{
				description: "Immediately casts the given ability's linked effect with the context provided. Unlike [CastAbilityAtUnit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#castabilityatunit-4), the unit does not need to have the ability bound in order for the effect to fire.\n\n- *string* `abilityName` the name of the ability to cast the effect of.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit to cast the ability.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to target with the ability.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#castabilityeffect-3)",
				signature: "(string abilityName, unit caster, unit target) : void"
			},
		]
	},
	"CancelAbilities": {
		signatures: [
			{
				description: "Cancels all ability orders a unit has queued.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to cancel abilities for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#cancelabilities-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"EnterTargetingMode": {
		signatures: [
			{
				description: "Enters targeting mode for a unit's ability. Only works for targeted abilities.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to enter targeting mode for.\n- *string* `abilityName` the name of the ability to enter the targeting mode for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#entertargetingmode-2)",
				signature: "(unit unit, string abilityName) : void"
			},
		]
	},
	"ExitTargetingMode": {
		signatures: [
			{
				description: "Exits targeting mode for any abilities currently in targeting mode.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#exittargetingmode-0)",
				signature: "() : void"
			},
		]
	},
	"AddUnitAbility": {
		signatures: [
			{
				description: "Adds an ability to a unit type.\n\n- *string* `unitType` the unit type to add the ability to.\n- *string* `abilityName` the name of the ability to add.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#addunitability-2)",
				signature: "(string unitType, string abilityName) : void"
			},
		]
	},
	"RemoveUnitAbility": {
		signatures: [
			{
				description: "Removes an ability from a unit type.\n\n- *string* `unitType` the unit type to remove the ability from.\n- *string* `abilityName` the name of the ability to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#removeunitability-2)",
				signature: "(string unitType, string abilityName) : void"
			},
		]
	},
	"SetGoldBounty": {
		signatures: [
			{
				description: "Sets the [SetGoldBounty](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) for a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the bounty on.\n- *float* `amount` the amount of gold the unit is worth.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2)",
				signature: "(unit unit, float amount) : void"
			},
		]
	},
	"SetGoldBountyAsync": {
		signatures: [
			{
				description: "Sets the [SetGoldBounty](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) for a unit. Async so may not occur until the next simulation frame. Recommended you use the non-async version instead. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set the bounty on.\n- *float* `amount` the amount of gold the unit is worth.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setgoldbountyasync-2)",
				signature: "(unit unit, float amount) : void"
			},
		]
	},
	"ApplyWaypoint": {
		signatures: [
			{
				description: "Make a unit follow a waypoint using a certain dispersal. Wild Sky only. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply waypoints to.\n- *string* `waypointName` the name of the waypoint path as defined in the terrain editor.\n- *float* `waypointDispersal` distance offset from the center of the waypoint path the unit should walk.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applywaypoint-3)",
				signature: "(unit unit, string waypointName, float waypointDispersal) : void"
			},
			{
				description: "Make a unit follow a waypoint using additional options. Wild Sky only. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply waypoints to.\n- *[WaypointOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#waypointoptions)* `option` waypoint options including waypoint name, dispersal, use natural dispersal flag, and node index.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#applywaypoint-2)",
				signature: "(unit unit, WaypointOptions option) : void"
			},
		]
	},
	"GetWaypointPaths": {
		signatures: [
			{
				description: "Wild Sky feature. Get all waypoint paths defined in the terrain editor.\n\n- *bool* `includeRallyDisabledLanes` if true, includes waypoint paths with the \"rallyDisabled\" flag checked.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getwaypointpaths-1)",
				signature: "(bool includeRallyDisabledLanes) : object"
			},
		]
	},
	"GetWaypointPathStartPosition": {
		signatures: [
			{
				description: "Wild Sky feature. Get the starting point of a given waypoint path. \n\n- *string* `name` name of the waypoint path to get the starting coordinants for.\n- *float* `dispersal` range of dispersal from the center of the waypoint path.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#getwaypointpathstartposition-2)",
				signature: "(string name, float dispersal = 0.5) : Float2"
			},
		]
	},
	"CastAbilityAtPosition": {
		signatures: [
			{
				description: "Issues the order for a unit to cast an ability targeting another unit. For an instant ability, this will ignore the target parameter and simply cast the ability.\n\n- *string* `abilityName` the name of the ability to cast.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit which will cast the ability.\n- *float* `x` the x-axis coordinate to cast the ability at.\n- *float* `z` the z-axis coordinate to cast the ability at.\n- *bool* `immediate` if true, the unit will attempt to cast the ability in the same frame that it's ordered, rather than queuing the command.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#castabilityatposition-5)",
				signature: "(string abilityName, unit caster, float x, float z, bool immediate = False) : void"
			},
		]
	},
	"CastAbilityEffectAtPosition": {
		signatures: [
			{
				description: "Immediately casts the given ability's linked effect at a location with the context provided. Unlike [CastAbilityAtPosition()](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#castabilityatposition-5), the unit does not need to have the ability bound in order for the effect to fire.\n\n- *string* `abilityName` the name of the ability to cast the effect of.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit to cast the ability.\n- *float* `x` the X coordinate.\n- *float* `z` the Z coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#castabilityeffectatposition-4)",
				signature: "(string abilityName, unit caster, float x, float z) : void"
			},
		]
	},
	"SetAbilityCurrentCharge": {
		signatures: [
			{
				description: "Sets the current number of charges for an ability on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to set ability charges for.\n- *string* `abilityName` the name of the ability to set the charges for.\n- *int* `chargeCount` the number of charges to set the ability to.\n- *bool* `clampChargeCount` if true, the number of charges is clamped to the maximum charge count set for the ability.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Ability#setabilitycurrentcharge-4)",
				signature: "(unit unit, string abilityName, int chargeCount, bool clampChargeCount) : void"
			},
		]
	},
	"SetCameraFocusUnit": {
		signatures: [
			{
				description: "Sets a persistent camera focus on the given unit. Does not override previous focus, use [ClearCameraFocusUnit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#clearcamerafocusunit-0) to clear previous focus before setting a new focus.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to focus the camera on.\n- *float* `delay` controls how long the camera takes to recenter on the unit if it is manually moved. A delay of 0 will cause the camera to instantly snap back.\n- *float* `offsetX` the X-axis offset from the unit for the camera focus.\n- *float* `offsetY` the Z-axis offset from the unit for the camera focus.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerafocusunit-4)",
				signature: "(unit unit, float delay, float offsetX = 0, float offsetY = 0) : void"
			},
		]
	},
	"ClearCameraFocusUnit": {
		signatures: [
			{
				description: "Removes any active camera focus.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#clearcamerafocusunit-0)",
				signature: "() : void"
			},
		]
	},
	"SetCameraFocusUnitForPlayer": {
		signatures: [
			{
				description: "Sets a persistent camera focus on the given unit for the given player. Does not override previous focus, use [ClearCameraFocusUnitForPlayer](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#clearcamerafocusunitforplayer-1) to clear previous focus before setting a new focus.\n\n- *int* `player` the player to set camera focus for.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to focus the camera on.\n- *float* `delay` controls how long the camera takes to recenter on the unit if it is manually moved. A delay of 0 will cause the camera to instantly snap back.\n- *float* `offsetX` the X-axis offset from the unit for the camera focus.\n- *float* `offsetY` the Z-axis offset from the unit for the camera focus.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerafocusunitforplayer-5)",
				signature: "(int player, unit unit, float delay, float offsetX = 0, float offsetY = 0) : void"
			},
		]
	},
	"ClearCameraFocusUnitForPlayer": {
		signatures: [
			{
				description: "Removes any active camera focus for the given player.\n\n- *int* `player` the player to clear the camera focus for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#clearcamerafocusunitforplayer-1)",
				signature: "(int player) : void"
			},
		]
	},
	"ShowSystemUi": {
		signatures: [
			{
				description: "Shows a specific built-in UI frame. These UI frames are shown by default.\n\n- *int* `typeId` accepted values:\n`0` for wave indicator\n`1` for gold display\n`2` for speed up button\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showsystemui-1)",
				signature: "(int typeId) : void"
			},
		]
	},
	"HideSystemUi": {
		signatures: [
			{
				description: "Hides a specific built-in UI frame.\n\n- *int* `typeId` accepted values:\n`0` for wave indicator\n`1` for gold display\n`2` for speed up button\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hidesystemui-1)",
				signature: "(int typeId) : void"
			},
		]
	},
	"ShowAbilitiesUi": {
		signatures: [
			{
				description: "Shows the UI for the specified ability on the given unit. A specific ability can only be bound to one slot, even if multiple units have the ability. \n\n- *int* `id` the ID of the ability on the unit.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showabilitiesui-2)",
				signature: "(int id, unit unit) : void"
			},
		]
	},
	"ShowAbilitiesUiInSlot": {
		signatures: [
			{
				description: "Shows the built-in UI for the specified ability on the given unit in a specific UI slot.\n\n- *int* `id` the ID of the ability on the unit.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.\n- *int* `slotKey` the ability UI slot key.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showabilitiesuiinslot-3)",
				signature: "(int id, unit unit, int slotKey) : void"
			},
		]
	},
	"HideAbilitiesUi": {
		signatures: [
			{
				description: "Hides the built-in UI for the specified ability on the given unit.\n\n- *int* `id` the ID of the ability on the unit.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideabilitiesui-2)",
				signature: "(int id, unit unit) : void"
			},
		]
	},
	"ShowAbilitiesUiForPlayer": {
		signatures: [
			{
				description: "Shows the built-in UI for the specified ability on the given unit for the given player.\n\n- *int* `id` the ID of the ability on the unit.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.\n- *int* `player` the player to show the UI for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showabilitiesuiforplayer-3)",
				signature: "(int id, unit unit, int player) : void"
			},
		]
	},
	"HideAbilitiesUiForPlayer": {
		signatures: [
			{
				description: "Hides the built-in UI for the specified ability on the given unit for the given player.\n\n- *int* `id` the ID of the ability on the unit.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.\n- *int* `player` the player to hide the UI for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideabilitiesuiforplayer-3)",
				signature: "(int id, unit unit, int player) : void"
			},
		]
	},
	"ShowUnitStatusUi": {
		signatures: [
			{
				description: "Shows the built-in status UI for the given unit.\n\n- *int* `id` the status UI to show. [List of values.](https://wiki.funovus.com/development/UnitStatusUi-ids)\n```\n2 - Large HP bar\n3 - Slightly larger than default HP bar, bottom right corner \"hero unit\" UI\n4 - Animated big hand pointer at the unit\n5 - Top center HP bar with percent current HP\n6 - Default speech bubble\n7 - Nothing\n8 - Yellow boxes/resource bar\n9 - Yellow boxes as HP bar\n10 - Nothing\n11 - Top center HP bar with fractional current HP\n```\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the status UI for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showunitstatusui-2)",
				signature: "(int id, unit unit) : void"
			},
		]
	},
	"ShowUnitStatusUiForPlayer": {
		signatures: [
			{
				description: "Shows the built-in status UI for the given unit for the given player.\n\n- *int* `id` the status UI to show. [List of values.](https://wiki.funovus.com/development/UnitStatusUi-ids)\n`2` - Large HP bar\n`3` - Slightly larger than default HP bar, bottom right corner \"hero unit\" UI\n`4` - Animated big hand pointer at the unit\n`5` - Top center HP bar with percent current HP\n`6` - Default speech bubble\n`7` - Nothing\n`8` - Yellow boxes/resource bar\n`9` - Yellow boxes as HP bar\n`10` - Nothing\n`11` - Top center HP bar with fractional current HP\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the status UI for.\n- *int* `player` the player to show the UI for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showunitstatusuiforplayer-3)",
				signature: "(int id, unit unit, int player) : void"
			},
		]
	},
	"SetUnitHealthBarUiScale": {
		signatures: [
			{
				description: "Sets the scale of the unit health bar UI.\n\n- *float* `scale` the scale of the unit health bar. A value of `0` will hide the health bar, useful when using [ShowUnitStatusUi](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showunitstatusui-2) or custom frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#setunithealthbaruiscale-1)",
				signature: "(float scale) : void"
			},
		]
	},
	"SetGoldRewardTextScale": {
		signatures: [
			{
				description: "Sets the scale of the gold reward text, displayed when units with a [SetGoldBounty](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#setgoldbounty-2) are killed.\n\n- *float* `scale` the scale of the gold reward text. A value of `0` will hide the gold reward text.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#setgoldrewardtextscale-1)",
				signature: "(float scale) : void"
			},
		]
	},
	"ShowSpeechBubble": {
		signatures: [
			{
				description: "Displays a speech bubble for the given unit. Speech bubble will disappear if the unit dies. Will not overwrite previous speech bubbles attached to the unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the speech bubble to.\n- *int* `width` theoretically, the width of the speech bubble. Appears to instead control the offset of the bubble containing the text from the arrow.\n- *string* `content` the content of the speech bubble.\n- *string* `title` the title of the speech bubble. Commonly used to show speaker name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showspeechbubble-4)",
				signature: "(unit unit, int width, string content, string title) : void"
			},
			{
				description: "Displays a speech bubble for the given unit. Speech bubble will disappear if the unit dies. Will not overwrite previous speech bubbles attached to the unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the speech bubble to.\n- *int* `width` theoretically, the width of the speech bubble. Appears to instead control the offset of the bubble containing the text from the arrow.\n- *string* `content` the content of the speech bubble.\n- *string* `title` the title of the speech bubble. Commonly used to show speaker name.\n- *[TextOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#textoptions)* `options` the text options for the speech bubble. This controls the offset of the entire speech bubble.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showspeechbubble-5)",
				signature: "(unit unit, int width, string content, string title, TextOptions options) : void"
			},
		]
	},
	"ShowUnitLabel": {
		signatures: [
			{
				description: "Shows a text tag attached to a unit. Will not overwrite existing labels.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit show to a label for.\n- *string* `content` the text to display.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showunitlabel-2)",
				signature: "(unit unit, string content) : void"
			},
			{
				description: "Shows a text tag attached to a unit. Will not overwrite existing labels.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit show to a label for.\n- *string* `content` the text to display.\n- *[UnitLabelOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unitlabeloptions)* `options` accepted values:\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showunitlabel-3)",
				signature: "(unit unit, string content, UnitLabelOptions options) : void"
			},
		]
	},
	"HideUnitLabel": {
		signatures: [
			{
				description: "Hides a text tag attached to a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the label on.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideunitlabel-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"ShowFloatingText": {
		signatures: [
			{
				description: "Displays floating text at the specified location. Text will immediately start to fade away.\n\n- *float* `x` the X coordinate.\n- *float* `y` the Y coordinate.\n- *float* `z` the Z coordinate.\n- *string* `content` the content of the floating text.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showfloatingtext-4)",
				signature: "(float x, float y, float z, string content) : void"
			},
			{
				description: "Displays floating text at the specified location.\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the position for the floating text.\n- *string* `content` the content of the floating text.\n- *float* `stayDuration` the duration of the floating text. There is a short, fixed fade in and our duration at the start and end, respectively. If duration this is longer than the `animationDuration`, this duration will be used.\n- *int* `animationType` the animation of the floating text: `0 - Text pops in`  `1 - text slowly floats upwards`\n- *float* `animationDuration` The duration of the animation. If this duration is longer than the `stayDuration`, this duration will be used.\n- *[TextOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#textoptions)* `options` the text options for floating text.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showfloatingtext-6)",
				signature: "(Float3 pos, string content, float stayDuration, int animationType, float animationDuration, TextOptions options) : void"
			},
		]
	},
	"ShowFloatingTextWithOptions": {
		signatures: [
			{
				description: "Displays floating text at the specified location.\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the position for the floating text.\n- *string* `content` the content of the floating text.\n- *float* `stayDuration` the duration of the floating text. There is a short, fixed fade in and our duration at the start and end, respectively. If duration this is longer than the `animationDuration`, this duration will be used.\n- *int* `animationType` the animation of the floating text: `0 - Text pops in`  `1 - text slowly floats upwards`\n- *float* `animationDuration` The duration of the animation. If this duration is longer than the `stayDuration`, this duration will be used.\n- *[TextOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#textoptions)* `options` the text options for floating text.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showfloatingtextwithoptions-6)",
				signature: "(Float3 pos, string content, float stayDuration, int animationType, float animationDuration, TextOptions options) : void"
			},
		]
	},
	"ShowFloatingTextAtUnit": {
		signatures: [
			{
				description: "Displays floating text at the specified unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the floating text at.\n- *string* `content` the content of the floating text.\n- *float* `stayDuration` the duration of the floating text. There is a short, fixed fade in and our duration at the start and end, respectively. If duration this is longer than the `animationDuration`, this duration will be used.\n- *int* `animationType` the animation of the floating text: `0 - Text pops in`  `1 - text slowly floats upwards`\n- *float* `animationDuration` The duration of the animation. If this duration is longer than the `stayDuration`, this duration will be used.\n- *[UnitLabelOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unitlabeloptions)* `options` accepted values:\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showfloatingtextatunit-6)",
				signature: "(unit unit, string content, float stayDuration, int animationType, float animationDuration, UnitLabelOptions options) : void"
			},
		]
	},
	"HideSpeechBubble": {
		signatures: [
			{
				description: "Hides a speech bubble attached to the given unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the speech bubble for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hidespeechbubble-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"ShowDotManaBar": {
		signatures: [
			{
				description: "Show a dot-style mana bar. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the mana bar for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showdotmanabar-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"ShowDotHealthBar": {
		signatures: [
			{
				description: "Show a dot-style health bar. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the health bar for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showdothealthbar-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"ShowShipHealthBar": {
		signatures: [
			{
				description: "Show a ship-style health bar.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to create the health bar for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showshiphealthbar-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"ShowUnitStatusUiInSlot": {
		signatures: [
			{
				description: "Shows the built-in status UI for the given unit in the specified slot.\n\n- *int* `id` the status UI to show. [List of values.](https://wiki.funovus.com/development/UnitStatusUi-ids)\n`2` - Large HP bar\n`3` - Slightly larger than default HP bar, bottom right corner \"hero unit\" UI\n`4` - Animated big hand pointer at the unit\n`5` - Top center HP bar with percent current HP\n`6` - Default speech bubble\n`7` - Nothing\n`8` - Yellow boxes/resource bar\n`9` - Yellow boxes as HP bar\n`10` - Nothing\n`11` - Top center HP bar with fractional current HP\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the status UI for.\n- *int* `slotKey` the slot key to bind the status UI to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showunitstatusuiinslot-3)",
				signature: "(int id, unit unit, int slotKey) : void"
			},
		]
	},
	"SetHeroStatusUiVisibility": {
		signatures: [
			{
				description: "Set Hero Status UI visible or not\n\n- *bool* `visible` if true, the UI is shown. If false, the UI is hidden.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#setherostatusuivisibility-1)",
				signature: "(bool visible) : void"
			},
		]
	},
	"HideUnitStatusUi": {
		signatures: [
			{
				description: "Hides the given built-in status UI for a given unit.\n\n- *int* `id` the status UI to hide.\n`2` - Large HP bar\n`3` - Slightly larger than default HP bar, bottom right corner \"hero unit\" UI\n`4` - Animated big hand pointer at the unit\n`5` - Top center HP bar with percent current HP\n`6` - Default speech bubble\n`7` - Nothing\n`8` - Yellow boxes/resource bar\n`9` - Yellow boxes as HP bar\n`10` - Nothing\n`11` - Top center HP bar with fractional current HP\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the status UI for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideunitstatusui-2)",
				signature: "(int id, unit unit) : void"
			},
		]
	},
	"HideUnitStatusUiForPlayer": {
		signatures: [
			{
				description: "Hides the given built-in status UI for a given unit, for the given player.\n\n- *int* `id` the status UI to hide.\n`2` - Large HP bar\n`3` - Slightly larger than default HP bar, bottom right corner \"hero unit\" UI\n`4` - Animated big hand pointer at the unit\n`5` - Top center HP bar with percent current HP\n`6` - Default speech bubble\n`7` - Nothing\n`8` - Yellow boxes/resource bar\n`9` - Yellow boxes as HP bar\n`10` - Nothing\n`11` - Top center HP bar with fractional current HP\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to hide the status UI for.\n- *int* `player` the player to hide the status UI for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideunitstatusuiforplayer-3)",
				signature: "(int id, unit unit, int player) : void"
			},
		]
	},
	"OnUnitSpawning": {
		signatures: [
			{
				description: "Tells the hardcoded Hero Portrait UI to display a countdown duration on the hero portrait until the hero revives.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the hero unit which died.\n- *float* `duration` the duration until the hero revives.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#onunitspawning-2)",
				signature: "(unit unit, float duration) : void"
			},
		]
	},
	"SetUpdateFrequency": {
		signatures: [
			{
				description: "Changes how frequently a simulation update is called. The default of 1 means 16 FPS. Regardless what frequency is used, each simulation update will advance game time by 0.0625 unless [SetSpeedFactor](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setspeedfactor-1) is also used.\n\n- *float* `value` the frequency with which simulation updates are called. Supported values are [1/4, 1/2, 1, 2].\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setupdatefrequency-1)",
				signature: "(float value) : void"
			},
		]
	},
	"ClearUpdateFrequency": {
		signatures: [
			{
				description: "Resets update frequency to the default frequency of 1, meaning 16 FPS.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#clearupdatefrequency-0)",
				signature: "() : void"
			},
		]
	},
	"GetUpdateFrequency": {
		signatures: [
			{
				description: "Returns the update frequency.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#getupdatefrequency-0)",
				signature: "() : float"
			},
		]
	},
	"SetSpeedFactor": {
		signatures: [
			{
				description: "Sets the speed factor for the simulation. The speed factor applies a multiplier to delta time in simulation updates, affecting how much time is processed in each simulation update. This will affect simulation results so it's recommended to only use it for slow motion effects with values like 1/64, 1/128, etc. Simulation update rate is now defaulted to 16 FPS with exactly 0.0625 delta time between updates.\n\n- *float* `value` the multiplier for how much time is processed on each game update.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setspeedfactor-1)",
				signature: "(float value) : void"
			},
		]
	},
	"GetSpeedFactor": {
		signatures: [
			{
				description: "Returns the speed factor.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#getspeedfactor-0)",
				signature: "() : float"
			},
		]
	},
	"SetCameraFocus": {
		signatures: [
			{
				description: "Moves camera focus to the given coordinates.Use Game Time by default\n\n- *float* `x` the X coordinate for the camera focus point.\n- *float* `y` the Z coordinate for the camera focus point.\n- *float* `duration` the duration of the camera transition to the given point. A duration of 0 will cause the camera to instantly snap to the given point.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerafocus-4)",
				signature: "(float x, float y, float duration = 1, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraFocusSmoothOvertimeForPlayer": {
		signatures: [
			{
				description: "Moves camera focus to the given coordinates for the given player with game time. Only use in multiplayer\n\n- *int* `player` the player to move the camera for.\n- *float* `x` the X coordinate for the camera focus point.\n- *float* `y` the Z coordinate for the camera focus point.\n- *float* `duration` the duration of the camera transition to the given point. A duration of 0 will cause the camera to instantly snap to the given point.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerafocussmoothovertimeforplayer-5)",
				signature: "(int player, float x, float y, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraDistance": {
		signatures: [
			{
				description: "Sets the camera zoom distance with smooth transition under certain duration of time. \n\n- *float* `targetDistance` the camera distance to transition to.\n- *float* `duration` the duration of the camera transition to the given distance.\n- *bool* `useRealTime` if true, uses real time instead of game time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameradistance-3)",
				signature: "(float targetDistance, float duration = 1, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraOrthographicSize": {
		signatures: [
			{
				description: "Sets the camera's orthographic size. Note that this only works if the camera is set to orthographic mode in map settings.\n\n- *float* `targetSize` the size of the orthographic camera.\n- *float* `duration` the duration of the camera transition.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameraorthographicsize-3)",
				signature: "(float targetSize, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraMinOrthographicSize": {
		signatures: [
			{
				description: "Sets the camera's min orthographic size. Note that this only works if the camera is set to orthographic mode in map settings.\n\n- *float* `targetSize` the min size of the orthographic camera.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameraminorthographicsize-1)",
				signature: "(float targetSize) : void"
			},
		]
	},
	"SetCameraMaxOrthographicSize": {
		signatures: [
			{
				description: "Sets the camera's max orthographic size. Note that this only works if the camera is set to orthographic mode in map settings.\n\n- *float* `targetSize` the max size of the orthographic camera.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameramaxorthographicsize-1)",
				signature: "(float targetSize) : void"
			},
		]
	},
	"GetCameraOrthographicSize": {
		signatures: [
			{
				description: "Returns the camera's orthographic size.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameraorthographicsize-0)",
				signature: "() : float"
			},
		]
	},
	"SetCameraDistanceSmoothOvertimeForPlayer": {
		signatures: [
			{
				description: "Sets the camera zoom distance for the given player.\n\n- *int* `player` the player to set the camera for.\n- *float* `targetDistance` the distance for the camera.\n- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new distance.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameradistancesmoothovertimeforplayer-4)",
				signature: "(int player, float targetDistance, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraPitchSmoothOvertime": {
		signatures: [
			{
				description: "Sets the camera pitch.\n\n- *float* `targetPitchDeg` the pitch of the camera. Acceptable values range from 11-90. Values over or under will be clamped.\n- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new pitch.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerapitchsmoothovertime-3)",
				signature: "(float targetPitchDeg, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraPitchSmoothOvertimeForPlayer": {
		signatures: [
			{
				description: "Sets the camera pitch for the given player.\n\n- *int* `player` the player to set the camera for.\n- *float* `targetPitchDeg` the pitch of the camera. Acceptable values range from 11-90. Values over or under will be clamped.\n- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new pitch.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerapitchsmoothovertimeforplayer-4)",
				signature: "(int player, float targetPitchDeg, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraYawSmoothOvertime": {
		signatures: [
			{
				description: "Sets the camera yaw to the given angle.\n\n- *float* `targetYawDeg` the degrees of Yaw to target.\n- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new yaw.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerayawsmoothovertime-3)",
				signature: "(float targetYawDeg, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"SetCameraYawSmoothOvertimeForPlayer": {
		signatures: [
			{
				description: "Sets the camera yaw to the given angle for the given player.\n\n- *int* `player` the player to set the camera for.\n- *float* `targetYawDeg` the yaw of the camera in degrees. A positive value produces a clockwise spin, while a negative value produces a counterclockwise spin. This value is not capped. Excessively high values with short durations may be inadvisable.\n- *float* `duration` the duration of the camera transition. A duration of 0 will cause the camera to instantly snap to the new yaw.\n- *bool* `useRealTime` if true, the duration is tracked via real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcamerayawsmoothovertimeforplayer-4)",
				signature: "(int player, float targetYawDeg, float duration, bool useRealTime = False) : void"
			},
		]
	},
	"GetCameraPitch": {
		signatures: [
			{
				description: "Returns the camera pitch.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcamerapitch-0)",
				signature: "() : float"
			},
		]
	},
	"GetCameraYaw": {
		signatures: [
			{
				description: "Returns the camera yaw.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcamerayaw-0)",
				signature: "() : float"
			},
		]
	},
	"GetCameraMaxDistance": {
		signatures: [
			{
				description: "Returns the camera's maximum zoom distance.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameramaxdistance-0)",
				signature: "() : float"
			},
		]
	},
	"GetCameraMinDistance": {
		signatures: [
			{
				description: "Returns the camera's minimum zoom distance.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameramindistance-0)",
				signature: "() : float"
			},
		]
	},
	"GetCameraCurrentFocalPoint": {
		signatures: [
			{
				description: "Returns the coordinates of the camera's focal point.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameracurrentfocalpoint-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetCameraBoundsCenterPoint": {
		signatures: [
			{
				description: "Returns the coordinates of the camera bounds' center point.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameraboundscenterpoint-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetCameraBoundsHeight": {
		signatures: [
			{
				description: "Return the camera bounds height.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameraboundsheight-0)",
				signature: "() : float"
			},
		]
	},
	"GetCameraBoundsWidth": {
		signatures: [
			{
				description: "Returns the camera bounds width.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameraboundswidth-0)",
				signature: "() : float"
			},
		]
	},
	"GetCameraTargetPointMaxDistance": {
		signatures: [
			{
				description: "Returns the maximum distance the camera can be from the given coordinates.\n\n- *float* `x` the X-axis coordinate.\n- *float* `y` the Z-axis coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#getcameratargetpointmaxdistance-2)",
				signature: "(float x, float y) : float"
			},
		]
	},
	"BlockCameraInput": {
		signatures: [
			{
				description: "Toggles camera manipulation from player input.\n\n- *bool* `set` if true, disables camera manipulation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#blockcamerainput-1)",
				signature: "(bool set) : void"
			},
		]
	},
	"BlockCameraInputForPlayer": {
		signatures: [
			{
				description: "Toggles camera manipulation from player input for the given player.\n\n- *int* `player` the player to toggle camera manipulation for.\n- *bool* `set` if true, disables camera manipulation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#blockcamerainputforplayer-2)",
				signature: "(int player, bool set) : void"
			},
		]
	},
	"SetVictory": {
		signatures: [
			{
				description: "Ends the game in a victory.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setvictory-0)",
				signature: "() : void"
			},
		]
	},
	"SetDefeat": {
		signatures: [
			{
				description: "Ends the game in a defeat.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setdefeat-0)",
				signature: "() : void"
			},
		]
	},
	"SetVictoryForPlayer": {
		signatures: [
			{
				description: "End the game in a victory for given player, with the given result.\n\n- *int* `player` integer corresponding to the player.\n- *string* `result` the result.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setvictoryforplayer-2)",
				signature: "(int player, string result = null) : void"
			},
		]
	},
	"SetDefeatForPlayer": {
		signatures: [
			{
				description: "End the game in a defeat for given player, with the given result.\n\n- *int* `player` integer corresponding to the player.\n- *string* `result` the result.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setdefeatforplayer-2)",
				signature: "(int player, string result = null) : void"
			},
		]
	},
	"SetCameraVisibleAreaCenter": {
		signatures: [
			{
				description: "Moves the center of the camera visible area. This will move the players' camera(s) accordingly. This does not change the size of the camera's visible area. This can also 'overwrite' the effects of [SetEnabledCameraClamp](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setenabledcameraclamp-1) if the new visible area covers previously blocked by camera clamping.\n\n- *float* `x` the X-axis coordinate.\n- *float* `y` the Z-axis coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareacenter-2)",
				signature: "(float x, float y) : void"
			},
		]
	},
	"SetCameraVisibleAreaWidth": {
		signatures: [
			{
				description: "Sets the camera visible area's width. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaLength](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-1).\n\n- *float* `width` the new width for the camera visible area.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidth-1)",
				signature: "(float width) : void"
			},
			{
				description: "Sets the camera visible area's width. Should be accompanied by [SetCameraVisibleAreaLength](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-1).\n\n- *float* `width` the new width for the camera visible area.\n- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidth-2)",
				signature: "(float width, bool updateMaxDistance) : void"
			},
		]
	},
	"SetCameraVisibleAreaLength": {
		signatures: [
			{
				description: "Sets the camera visible area's length. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaWidth](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidth-1).\n\n- *float* `length` the new length for the camera visible area.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-1)",
				signature: "(float length) : void"
			},
			{
				description: "Sets the camera visible area's length. Should be accompanied by [SetCameraVisibleAreaWidth()](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera1void-setcameravisibleareawidthfloat-width).\n\n- *float* `length` the new length for the camera visible area.\n- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-2)",
				signature: "(float length, bool updateMaxDistance) : void"
			},
		]
	},
	"SetCameraVisibleAreaCenterForPlayer": {
		signatures: [
			{
				description: "Moves the center of the camera visible area for the given player. This will move the player's camera(s) accordingly. This does not change the size of the camera's visible area. This can also 'overwrite' the effects of [SetEnabledCameraClamp](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setenabledcameraclamp-1) if the new visible area covers previously blocked by camera clamping.\n\n- *int* `player` the player to set the camera for.\n- *float* `x` the X-axis coordinate.\n- *float* `y` the Z-axis coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareacenterforplayer-3)",
				signature: "(int player, float x, float y) : void"
			},
		]
	},
	"SetCameraVisibleAreaWidthForPlayer": {
		signatures: [
			{
				description: "Sets the camera visible area's width for the given player. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaLengthForPlayer](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealengthforplayer-2).\n\n- *int* `player` the player to set the camera for.\n- *float* `width` the new width for the camera visible area.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidthforplayer-2)",
				signature: "(int player, float width) : void"
			},
			{
				description: "Sets the camera visible area's width for the given player. Should be accompanied by [SetCameraVisibleAreaLength](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealength-1).\n\n- *int* `player` the player to set the camera for.\n- *float* `width` the new width for the camera visible area.\n- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance immediately. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidthforplayer-3)",
				signature: "(int player, float width, bool updateMaxDistance) : void"
			},
		]
	},
	"SetCameraVisibleAreaLengthForPlayer": {
		signatures: [
			{
				description: "Sets the camera visible area's length for the given player. Functions as if `bool updateMaxDistance` is set to true in the next function. Should be accompanied by [SetCameraVisibleAreaWidthForPlayer](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidthforplayer-2).\n\n- *int* `player` the player to set the camera for.\n- *float* `length` the new length for the camera visible area.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealengthforplayer-2)",
				signature: "(int player, float length) : void"
			},
			{
				description: "Sets the camera visible area's length for the given player. Should be accompanied by [SetCameraVisibleAreaWidthForPlayer](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisibleareawidthforplayer-2).\n\n- *int* `player` the player to set the camera for.\n- *float* `length` the new length for the camera visible area.\n- *bool* `updateMaxDistance` if true, updates and sets the camera's max distance. Will instantly snap to the new max distance if true, otherwise the camera will attempt to zoom in to the new distance slowly. The most recent update will override any pervious updates.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Camera#setcameravisiblearealengthforplayer-3)",
				signature: "(int player, float length, bool updateMaxDistance) : void"
			},
		]
	},
	"ShowWaveIndicatorHelper": {
		signatures: [
			{
				description: "Show helping hand pointing at the Call Wave indicator for Wild Sky waves.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#showwaveindicatorhelper-0)",
				signature: "() : void"
			},
		]
	},
	"HideWaveIndicatorHelper": {
		signatures: [
			{
				description: "Hide helping hand pointing at the Call Wave indicator for Wild Sky waves.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#hidewaveindicatorhelper-0)",
				signature: "() : void"
			},
		]
	},
	"IsWaveSpawning": {
		signatures: [
			{
				description: "Returns if a wild sky TD creep wave is currently spawning or not.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#iswavespawning-0)",
				signature: "() : bool"
			},
		]
	},
	"ShowMessageWithButtonText": {
		signatures: [
			{
				description: "Displays a pop-up message with a button. Displays up to 3 images.\n\n- *string* `title` the title of the message pop-up.\n- *string* `content` the text of the message.\n- *string* `button` the text on the button.\n- *string* `image1` the name or link to the first image.\n- *string* `image2` the name or link to the second image.\n- *string* `image3` the name or link to the third image.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showmessagewithbuttontext-6)",
				signature: "(string title, string content, string button, string image1, string image2, string image3) : void"
			},
		]
	},
	"HideJoystick": {
		signatures: [
			{
				description: "Hides the given joystick.\n\n- *int* `joystickId` the ID of the joystick to hide.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#hidejoystick-1)",
				signature: "(int joystickId = 0) : void"
			},
		]
	},
	"ShowJoystick": {
		signatures: [
			{
				description: "Shows the given joystick.\n\n- *int* `joystickId` the ID of the joystick to show. Use [TriggerAddJoystickEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickevent-1) or [TriggerAddJoystickEventWithJoystickOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickeventwithjoystickoptions-2) to create a joystick.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#showjoystick-1)",
				signature: "(int joystickId = 0) : void"
			},
		]
	},
	"HideJoystickButton": {
		signatures: [
			{
				description: "Hides the given joystick button.\n\n- *int* `joystickButtonId` the ID of the joystick button to hide.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#hidejoystickbutton-1)",
				signature: "(int joystickButtonId) : void"
			},
		]
	},
	"ShowJoystickButton": {
		signatures: [
			{
				description: "Shows the given joystick button. Use [TriggerAddJoystickButtonEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#triggeraddjoystickbuttonevent-3) to create the joystick button.\n\n- *int* `joystickButtonId` the ID of the joystick button to show.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#showjoystickbutton-1)",
				signature: "(int joystickButtonId) : void"
			},
		]
	},
	"SetQuestionButton": {
		signatures: [
			{
				description: "Shows a help button that runs a function when clicked, commonly combined with a message box to give gameplay tips.\n\n- *TypedCallback* `callback` function to call when the question button is pressed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setquestionbutton-1)",
				signature: "(TypedCallback callback) : void"
			},
		]
	},
	"SetBackButton": {
		signatures: [
			{
				description: "This event triggers when the back button on mobile devices is used.\n\n- *TypedCallback* `callback` lua function to run when the back button is pressed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setbackbutton-1)",
				signature: "(TypedCallback callback) : void"
			},
		]
	},
	"ShowBigHeadMessage": {
		signatures: [
			{
				description: "Displays a \"big head\" message. You can view a list of accepted images [here](https://gist.github.com/coffee8479/063ddb5fbd710969f58499aabf295974).\n\n- *string* `title` the title of the big head message.\n- *string* `message` the text of the big head message.\n- *string* `image` the big head image. Note that specific big head images must be used.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showbigheadmessage-3)",
				signature: "(string title, string message, string image) : void"
			},
			{
				description: "Displays a \"big head\" message with additional options. Will not overwrite an existing big head message. You can view a list of accepted images [here](https://gist.github.com/coffee8479/063ddb5fbd710969f58499aabf295974).\n\n- *string* `title` the title of the big head message.\n- *string* `message` the text of the big head message.\n- *string* `image` the big head image. Note that specific big head images must be used.\n- *[BigHeadMessageOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#bigheadmessageoptions)* `options` the additional options for a big head message.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showbigheadmessage-4)",
				signature: "(string title, string message, string image, BigHeadMessageOptions options) : void"
			},
		]
	},
	"HideBigHeadMessage": {
		signatures: [
			{
				description: "Hides any big head messages.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hidebigheadmessage-0)",
				signature: "() : void"
			},
		]
	},
	"ShowObjectiveText": {
		signatures: [
			{
				description: "Show objective text.\n\n- *string* `text` the text of the objective.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showobjectivetext-1)",
				signature: "(string text) : void"
			},
		]
	},
	"HideObjective": {
		signatures: [
			{
				description: "Hides any active objectives.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideobjective-0)",
				signature: "() : void"
			},
		]
	},
	"FollowUnit": {
		signatures: [
			{
				description: "Commands a unit to follow another unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to command.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `targetUnit` the unit to follow.\n- *float* `offsetX` x offset from the target unit.\n- *float* `offsetY` y offset from the target unit.\n- *float* `distanceMax` if the distance between the units becomes larger than this, the follower unit will move towards the target unit, using the given offsets.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#followunit-5)",
				signature: "(unit unit, unit targetUnit, float offsetX, float offsetY, float distanceMax) : void"
			},
		]
	},
	"FollowUnitWithOffset": {
		signatures: [
			{
				description: "Commands a unit to follow another unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to command.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `targetUnit` the unit to follow.\n- *float* `offset` offset distance from the target unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#followunitwithoffset-3)",
				signature: "(unit unit, unit targetUnit, float offset) : void"
			},
		]
	},
	"ClearFollowUnit": {
		signatures: [
			{
				description: "Clears the order for a unit to follow another unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to command.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#clearfollowunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"SelectUnit": {
		signatures: [
			{
				description: "Selects a unit for the player.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to select.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#selectunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"DeselectUnit": {
		signatures: [
			{
				description: "Deselects a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to deselect.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#deselectunit-1)",
				signature: "(unit unit) : void"
			},
		]
	},
	"FindUnit": {
		signatures: [
			{
				description: "Attempts to return an existing unit from its name. \n\n- *string* `name` the name of the unit type to find.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findunit-1)",
				signature: "(string name) : unit"
			},
		]
	},
	"FindUnitsByPlayerId": {
		signatures: [
			{
				description: "Returns a list of all units owned by a player.\n\n- *int* `playerId` the player id to search for units by.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findunitsbyplayerid-1)",
				signature: "(int playerId) : object"
			},
		]
	},
	"FindUnitsByTeamId": {
		signatures: [
			{
				description: "Returns a list of all units that belong to the specified team.\n\n- *int* `teamId` the team id to search for units by.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findunitsbyteamid-1)",
				signature: "(int teamId) : object"
			},
		]
	},
	"FindSimpleUnitsByName": {
		signatures: [
			{
				description: "Find all simple units by unit type name. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *string* `name` the name of the simple unit type to find\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findsimpleunitsbyname-1)",
				signature: "(string name) : object"
			},
		]
	},
	"FindSimpleUnitsByPlayerId": {
		signatures: [
			{
				description: "Find all simple units by owner player ID. For more info about simple units, see [Simple Units Guide.](https://funovus.notion.site/Simple-Units-Introduction-8a39c47f07d64f4c9549c5947c2c281f)\n\n- *int* `playerId` the player ID to fetch  table of units for\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findsimpleunitsbyplayerid-1)",
				signature: "(int playerId) : object"
			},
		]
	},
	"FindUnits": {
		signatures: [
			{
				description: "Returns a list of all units with the specified unit name.\n\n- *string* `name` the name of the unit type to find.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findunits-1)",
				signature: "(string name) : object"
			},
		]
	},
	"FindUnitAtPosition": {
		signatures: [
			{
				description: "Returns the unit with the given name closest to the given coordinates.\n\n- *string* `name` the name of the unit type to find.\n- *float* `x` the x-coordinate of the point to search for the unit at.\n- *float* `z` the y-coordinate of the point to search for the unit at.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#findunitatposition-3)",
				signature: "(string name, float x, float z) : unit"
			},
		]
	},
	"ShowWorldPositionHelper": {
		signatures: [
			{
				description: "Shows the position helper hand at the specified coordinates. This will replace previous position helpers.\n\n- *float* `x` the X coordinate.\n- *float* `z` the Z coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#showworldpositionhelper-2)",
				signature: "(float x, float z) : void"
			},
		]
	},
	"HideWorldPositionHelper": {
		signatures: [
			{
				description: "Hides the position helper.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#hideworldpositionhelper-0)",
				signature: "() : void"
			},
		]
	},
	"ShowCallWaveIndicators": {
		signatures: [
			{
				description: "Show the call wave indicator for the next Wild Sky creep wave. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showcallwaveindicators-0)",
				signature: "() : void"
			},
		]
	},
	"HideCallWaveIndicators": {
		signatures: [
			{
				description: "Hide the call wave indicator for the next Wild Sky creep wave. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hidecallwaveindicators-0)",
				signature: "() : void"
			},
		]
	},
	"ShowTowerMenuHelper": {
		signatures: [
			{
				description: "Shows a \"big hand\" pointing at an icon for a specific ability on a tower build menu. Wild Sky only.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to show the helper hand on.\n- *string* `abilityName` the ability to show the helper hand on.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showtowermenuhelper-2)",
				signature: "(unit unit, string abilityName) : void"
			},
		]
	},
	"HideTowerMenuHelper": {
		signatures: [
			{
				description: "Hide any currently active \"big hand\" pointing at an icon for a specific ability on a tower build menu. Wild Sky only.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hidetowermenuhelper-0)",
				signature: "() : void"
			},
		]
	},
	"ShowShipSpellHelper": {
		signatures: [
			{
				description: "Show a big hand pointing at a ship ability icon.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit that has the ability.\n- *string* `abilityName` the name of the ability to highlight.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showshipspellhelper-2)",
				signature: "(unit unit, string abilityName) : void"
			},
		]
	},
	"HideShipSpellHelper": {
		signatures: [
			{
				description: "Hide any big hand pointing at a ship ability icon.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hideshipspellhelper-0)",
				signature: "() : void"
			},
		]
	},
	"ShowHeroHelper": {
		signatures: [
			{
				description: "Show a finger pointing at the in-game UI for a hero button.\n\n- *int* `slot` which hero slot to point at.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showherohelper-1)",
				signature: "(int slot) : void"
			},
		]
	},
	"HideHeroHelper": {
		signatures: [
			{
				description: "Hide helper finger pointing at the in-game UI for a hero button.\n\n- *int* `slot` which hero slot to stop pointing at.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hideherohelper-1)",
				signature: "(int slot) : void"
			},
		]
	},
	"ShowHeroSkillHelper": {
		signatures: [
			{
				description: "Helper pointer for a hero's skill button.\n\n- *int* `slot` which hero slot to stop pointing at.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showheroskillhelper-1)",
				signature: "(int slot) : void"
			},
		]
	},
	"HideHeroSkillHelper": {
		signatures: [
			{
				description: "Hide helper pointer for a hero's skill button.\n\n- *int* `slot` which hero slot to stop pointing at.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hideheroskillhelper-1)",
				signature: "(int slot) : void"
			},
		]
	},
	"ApplyBehaviorToSelf": {
		signatures: [
			{
				description: "Applies a behavior to a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.\n- *string* `behaviorName` the name of the behavior to apply.\n- *int* `count` the number of stacks of the chosen behavior to apply.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#applybehaviortoself-3)",
				signature: "(unit unit, string behaviorName, int count = 1) : void"
			},
		]
	},
	"ApplyBehaviorToUnit": {
		signatures: [
			{
				description: "Applies a behavior to a unit with source and caster references\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `caster` the unit that the behavior is considered to be the caster and owner of the applied behavior.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `source` the unit that the behavior is considered to have originated from.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `target` the unit to apply the behavior to.\n- *string* `behaviorName` the name of the behavior to apply.\n- *int* `count` the number of stacks of the chosen behavior to apply.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#applybehaviortounit-5)",
				signature: "(unit caster, unit source, unit target, string behaviorName, int count = 1) : void"
			},
		]
	},
	"RemoveBehavior": {
		signatures: [
			{
				description: "Removes a behavior from a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the behavior from.\n- *string* `behaviorName` the name of the behavior to remove.\n- *int* `count` the number of stacks of the chosen behavior to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#removebehavior-3)",
				signature: "(unit unit, string behaviorName, int count = 0) : void"
			},
		]
	},
	"SetBehaviorDuration": {
		signatures: [
			{
				description: "Sets the duration of a behavior currently on a unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit with the behavior on it.\n- *string* `behaviorName` the name of the behavior to set the duration for.\n- *float* `duration` the duration to set the behavior to.\n- *bool* `extendDuration` if true, the duration of the behavior is extended by the duration instead of set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#setbehaviorduration-4)",
				signature: "(unit unit, string behaviorName, float duration, bool extendDuration) : void"
			},
		]
	},
	"ApplyBehaviorAsync": {
		signatures: [
			{
				description: "Applies a behavior to a unit. Asynchronous.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.\n- *string* `behaviorName` the name of the behavior to apply.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#applybehaviorasync-2)",
				signature: "(unit unit, string behaviorName) : void"
			},
		]
	},
	"RemoveBehaviorAsync": {
		signatures: [
			{
				description: "Removes a behavior from a unit. Asynchronous.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the behavior from.\n- *string* `behaviorName` the name of the behavior to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#removebehaviorasync-2)",
				signature: "(unit unit, string behaviorName) : void"
			},
		]
	},
	"ApplyBehaviorCountAsync": {
		signatures: [
			{
				description: "Applies a behavior to a unit. Async version of API. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.\n- *string* `behaviorName` the name of the behavior to apply.\n- *int* `count` the number of stacks of the chosen behavior to apply.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#applybehaviorcountasync-3)",
				signature: "(unit unit, string behaviorName, int count) : void"
			},
		]
	},
	"RemoveBehaviorCountAsync": {
		signatures: [
			{
				description: "Removes a behavior from a unit. Async version. \n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to remove the behavior from.\n- *string* `behaviorName` the name of the behavior to remove.\n- *int* `count` the number of stacks of the chosen behavior to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#removebehaviorcountasync-3)",
				signature: "(unit unit, string behaviorName, int count) : void"
			},
		]
	},
	"ApplyBehaviorWithDurationAsync": {
		signatures: [
			{
				description: "Applies a behavior to a unit. Asynchronous.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to apply the behavior to.\n- *string* `behaviorName` the name of the behavior to apply.\n- *float* `duration` duration of the behavior.\n- *bool* `extendDuration` extend existing duration or set as new duration.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Behavior#applybehaviorwithdurationasync-4)",
				signature: "(unit unit, string behaviorName, float duration, bool extendDuration) : void"
			},
		]
	},
	"IsUnitSelected": {
		signatures: [
			{
				description: "Returns true if the unit is selected.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Unit#isunitselected-1)",
				signature: "(unit unit) : bool"
			},
		]
	},
	"IsPointOnNavMesh": {
		signatures: [
			{
				description: "Returns true if the given coordinates are on the nav mesh.\n\n- *float* `x` the x coordinate.\n- *float* `z` the z coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#ispointonnavmesh-2)",
				signature: "(float x, float z) : bool"
			},
		]
	},
	"GetClosestPointOnNavMesh": {
		signatures: [
			{
				description: "Returns the closest coordinates on the nav mesh to the given coordinates.\n\n- *float* `x` the x coordinate.\n- *float* `z` the z coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getclosestpointonnavmesh-2)",
				signature: "(float x, float z) : Float2"
			},
		]
	},
	"AddNavmeshCut": {
		signatures: [
			{
				description: "Add a navmesh cut according to prop's tag, the navmesh cut will share the same position, rotation and shape of this prop.\n\n- *string* `prop_tag` the prop's tag.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#addnavmeshcut-1)",
				signature: "(string prop_tag) : void"
			},
		]
	},
	"SetPropVisibility": {
		signatures: [
			{
				description: "Set the visibility of prop according to prop tag.\n\n- *string* `prop_tag` the prop's tag.\n- *bool* `visibility` if true, make the prop visible.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#setpropvisibility-2)",
				signature: "(string prop_tag, bool visibility) : void"
			},
		]
	},
	"EnableNavmeshCut": {
		signatures: [
			{
				description: "Enable/disable a navmesh cut according to prop tag.\n\n- *string* `prop_tag` the prop's tag.\n- *bool* `enable` if true, enable the navmesh cut.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#enablenavmeshcut-2)",
				signature: "(string prop_tag, bool enable = True) : void"
			},
		]
	},
	"ShowScreenMask": {
		signatures: [
			{
				description: "Shows a screen mask (overlay tint). This will block interaction with everything. This will also overwrite previous screen masks.\n\n- *float* `alpha` the alpha of the screen mask.\n- *[ScreenBackgroundOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#screenbackgroundoptions)* `options` lua dictionary `{color, duration}`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showscreenmask-2)",
				signature: "(float alpha = 0, ScreenBackgroundOptions options = default) : void"
			},
		]
	},
	"HideScreenMask": {
		signatures: [
			{
				description: "Hides any active screen mask.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hidescreenmask-0)",
				signature: "() : void"
			},
		]
	},
	"FindClosestPointOnRoad": {
		signatures: [
			{
				description: "Returns a point on the closest waypoint path to the given coordinants. \n\n- *float* `x` x coordinant of point to find nearest path point to\n- *bool* `ignoreRallyDisabledLanes` if true, ignores waypoint paths with the \"rallyDisabled\" flag checked.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#findclosestpointonroad-3)",
				signature: "(float x, float z, bool ignoreRallyDisabledLanes) : Float2"
			},
		]
	},
	"IsMusicEnabled": {
		signatures: [
			{
				description: "Returns if the music is enabled or not.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#ismusicenabled-0)",
				signature: "() : bool"
			},
		]
	},
	"IsSoundEnabled": {
		signatures: [
			{
				description: "Returns if the sound is enabled.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#issoundenabled-0)",
				signature: "() : bool"
			},
		]
	},
	"SetMasterVolume": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#setmastervolume-1)",
				signature: "(float volume) : void"
			},
		]
	},
	"GetMasterVolume": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#getmastervolume-0)",
				signature: "() : float"
			},
		]
	},
	"PlayMusic": {
		signatures: [
			{
				description: "Plays the specified song on repeat. This will replace the default music played. Music must be declared by register api [Sound](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#sound-1).\n\n- *string* `name` the name of the music asset to play. Accepted music names:\n\n```\nBattle1\nBattle2\nBattle3\nHometown1\nBoss1\n```\n\n- *bool* `smoothTransition` if we want a smooth transition from current music to this one\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#playmusic-2)",
				signature: "(string name, bool smoothTransition = False) : void"
			},
		]
	},
	"SetMusicVolume": {
		signatures: [
			{
				description: "Sets the music volume.\n\n- *float* `volume` the new music volume.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#setmusicvolume-1)",
				signature: "(float volume) : void"
			},
		]
	},
	"GetMusicVolume": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#getmusicvolume-0)",
				signature: "() : float"
			},
		]
	},
	"PauseMusic": {
		signatures: [
			{
				description: "Pauses the music currently playing. Cannot be used on the game's first frame as the music hasn't initialized yet.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#pausemusic-0)",
				signature: "() : void"
			},
		]
	},
	"ResumeMusic": {
		signatures: [
			{
				description: "Resumes paused music. If music is currently not paused, restarts the music currently playing.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#resumemusic-0)",
				signature: "() : void"
			},
		]
	},
	"PlaySound": {
		signatures: [
			{
				description: "Plays the given sound at the given volume. A given volume of 0 will playback at the default volume. While volume doesn't have an explicit maximum value, it's recommended to keep this under 5.\n\n- *string* `nameOrPath` the name of the sound or path to the sound.\n- *float* `volume` the playback volume for the sound.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#playsound-2)",
				signature: "(string nameOrPath, float volume = 1) : void"
			},
		]
	},
	"SetSoundVolume": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#setsoundvolume-1)",
				signature: "(float volume) : void"
			},
		]
	},
	"GetSoundVolume": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#getsoundvolume-0)",
				signature: "() : float"
			},
		]
	},
	"PlaySoundForPlayer": {
		signatures: [
			{
				description: "Play sound for a specific player. Only useful in multiplayer.\n\n- *string* `nameOrPath` the name of the sound or path to the sound.\n- *int* `playerId` the playback volume for the sound.\n- *float* `volume` the playback volume for the sound.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Sound#playsoundforplayer-3)",
				signature: "(string nameOrPath, int playerId, float volume = 1) : void"
			},
		]
	},
	"TakeScreenShot": {
		signatures: [
			{
				description: "Takes a screenshot of the game. On Windows PCs, this file is saved in `C:\\Users\\#YOUR_USER_NAME\\AppData\\Local\\Temp\\Wild Sky Dev\\Wild Arcade`\n\n- *string* `fileName` the name of the screenshot file\n- *float* `delay` delay before taking screenshot\n- *int* `quality` accepts integers 1 or higher. Higher values multiply the number of pixels in the image.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#takescreenshot-3)",
				signature: "(string fileName, float delay = 0, int quality = 1) : void"
			},
		]
	},
	"TakeScreenShotWildSky": {
		signatures: [
			{
				description: "Takes a screenshot of the game. Returns ID of screenshot taken.\n\n- *float* `delay` delay before taking screenshot\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#takescreenshotwildsky-1)",
				signature: "(float delay = 0) : int"
			},
		]
	},
	"DeleteScreenShot": {
		signatures: [
			{
				description: "Delete a screenshot from `TakeScreenShotWildSky`\n\n- *int* `key` id of screenshot to delete, from `TakeScreenShotWildSky`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#deletescreenshot-1)",
				signature: "(int key) : bool"
			},
		]
	},
	"ShowVictoryContinueHelper": {
		signatures: [
			{
				description: "Show Wild Sky victory continue helper\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showvictorycontinuehelper-0)",
				signature: "() : void"
			},
		]
	},
	"ShowDefeatReplayHelper": {
		signatures: [
			{
				description: "Show helper on Wild Sky defeat replay button\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showdefeatreplayhelper-0)",
				signature: "() : void"
			},
		]
	},
	"HideFastForwardButton": {
		signatures: [
			{
				description: "Hides the fast forward button.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hidefastforwardbutton-0)",
				signature: "() : void"
			},
		]
	},
	"DisableQuitButton": {
		signatures: [
			{
				description: "Disable the quit button.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#disablequitbutton-0)",
				signature: "() : void"
			},
		]
	},
	"HideShipSpellMenu": {
		signatures: [
			{
				description: "Hide Wild Sky ship spell menu. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hideshipspellmenu-0)",
				signature: "() : void"
			},
		]
	},
	"HideShipSpellMenuAnimated": {
		signatures: [
			{
				description: "Animate the hiding of the wild sky ship spell menu.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hideshipspellmenuanimated-0)",
				signature: "() : void"
			},
		]
	},
	"ShowShipSpellMenu": {
		signatures: [
			{
				description: "Show the Wild Sky ship spell menu.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showshipspellmenu-0)",
				signature: "() : void"
			},
		]
	},
	"ShowShipSpellMenuAnimated": {
		signatures: [
			{
				description: "Animate showing the Wild Sky ship spell menu.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showshipspellmenuanimated-0)",
				signature: "() : void"
			},
		]
	},
	"UnblockShipSpell": {
		signatures: [
			{
				description: "Unblock a wild sky ship spell button. \n\n- *string* `abilityName` the name of the ability to unblock.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#unblockshipspell-1)",
				signature: "(string abilityName) : void"
			},
		]
	},
	"BlockAllShipSpells": {
		signatures: [
			{
				description: "Blocks all Wild Sky ship spell buttons. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#blockallshipspells-0)",
				signature: "() : void"
			},
		]
	},
	"UnblockAllShipSpells": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#unblockallshipspells-0)",
				signature: "() : void"
			},
		]
	},
	"ShowMessageClickHelper": {
		signatures: [
			{
				description: "Show Wild Sky message click helper\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#showmessageclickhelper-0)",
				signature: "() : void"
			},
		]
	},
	"HideMessageClickHelper": {
		signatures: [
			{
				description: "Hide Wild Sky message click helper\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#hidemessageclickhelper-0)",
				signature: "() : void"
			},
		]
	},
	"SetSpeedTurbo": {
		signatures: [
			{
				description: "Toggles the built-in 2x speed button. Commonly used to disable the 2x speed during a tutorial and cinematic and/or resume it again after the tutorial/cinematic ends.\n\n- *bool* `turbo` if true, enable turbo (2x) speed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#setspeedturbo-1)",
				signature: "(bool turbo) : void"
			},
		]
	},
	"GetDataContextValue": {
		signatures: [
			{
				description: "Used by Wild Sky to get some level data context, such as difficulty or if the level has already been completed by players or not. \n\n- *string* `key` the key for the data index to retrieve.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getdatacontextvalue-1)",
				signature: "(string key) : object"
			},
		]
	},
	"GetPlayerDeckCards": {
		signatures: [
			{
				description: "Wild Sky specific. Returns a lua table of the equipped cards from the meta. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Player#getplayerdeckcards-0)",
				signature: "() : object"
			},
		]
	},
	"GetConsumableItemCount": {
		signatures: [
			{
				description: "Get Wild Sky consumable item quantity from the players meta inventory. \n\n- *string* `key` the consumable's name/ID.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#getconsumableitemcount-1)",
				signature: "(string key) : int"
			},
		]
	},
	"AddConsumableItem": {
		signatures: [
			{
				description: "Add Wild Sky consumable item quantity from the players meta inventory. \n\n- *string* `key` the consumable's name/ID.\n- *int* `amount` the amount to increase consumable by.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#addconsumableitem-2)",
				signature: "(string key, int amount) : void"
			},
		]
	},
	"ReduceConsumableItem": {
		signatures: [
			{
				description: "Reduce Wild Sky consumable item quantity from the players meta inventory. \n\n- *string* `key` the consumable's name/ID.\n- *int* `amount` the amount to decrease consumable by.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#reduceconsumableitem-2)",
				signature: "(string key, int amount) : void"
			},
		]
	},
	"OverwriteShipHp": {
		signatures: [
			{
				description: "A Wild Sky specific API for overwriting the Ship HP reported to the meta-game victory/defeat screen. \n\n- *int* `hp` The amount of health\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#overwriteshiphp-1)",
				signature: "(int hp) : void"
			},
		]
	},
	"LogEvent": {
		signatures: [
			{
				description: "Log an event for Wild Sky. May be used for Amplitude statistics, or be used by the meta-game layer. \n\n- *string* `name` The id for the log event\n- *string* `json` A string of json data to report with the event.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logevent-2)",
				signature: "(string name, string json) : void"
			},
		]
	},
	"LogEndGameStringValue": {
		signatures: [
			{
				description: "Wild Sky only. Used for logging certain game-values for the meta-game to reference. \n\n- *string* `name` The log name.\n- *string* `value` The string data to log.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logendgamestringvalue-2)",
				signature: "(string name, string value) : void"
			},
		]
	},
	"LogEndGameNumberValue": {
		signatures: [
			{
				description: "Wild Sky only. Used for logging certain game-values for the meta-game to reference, such as mine health or co-op damage values. \n\n- *string* `name` The log name.\n- *double* `value` The number value to log.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logendgamenumbervalue-2)",
				signature: "(string name, double value) : void"
			},
		]
	},
	"LogEndGameBooleanValue": {
		signatures: [
			{
				description: "Wild Sky only. Used for logging certain game-values for the meta-game to reference. \n\n- *string* `name` The log name.\n- *bool* `value` The bool value to log.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logendgamebooleanvalue-2)",
				signature: "(string name, bool value) : void"
			},
		]
	},
	"RecordShipHp": {
		signatures: [
			{
				description: "Records the ship's HP for Wild Sky; for the meta side to utilize. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#recordshiphp-0)",
				signature: "() : bool"
			},
		]
	},
	"LogEndGameUnitsTotalHp": {
		signatures: [
			{
				description: "Wild Sky only. Used for logging certain game-values for the meta-game to reference, such as mine health or co-op damage values. \n\n- *string* `name` The log name.\n- *IEnumerable\\<string>* `unitNames` A list of unit names\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logendgameunitstotalhp-2)",
				signature: "(string name, IEnumerable<string> unitNames) : void"
			},
		]
	},
	"LogEndGameUnitHps": {
		signatures: [
			{
				description: "Wild Sky only. Used for logging certain game-values for the meta-game to reference. \n\n- *string* `name` The log name.\n- *IEnumerable\\<string>* `unitNames` A list of unit names\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logendgameunithps-2)",
				signature: "(string name, IEnumerable<string> unitNames) : void"
			},
		]
	},
	"LogEndGameUnitHpPercentage": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Log#logendgameunithppercentage-2)",
				signature: "(string name, unit u) : void"
			},
		]
	},
	"GetTranslationText": {
		signatures: [
			{
				description: "Returns a localized string from localization data using the specified key. Additional parameters can be used for replacement text.\n\nYou can change what language is used in the editor in [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n- *string* `key` the localization key to use.\n- *Dictionary\\<string, object>* `parameters` (optional) a table of replacement text keys.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#gettranslationtext-2)",
				signature: "(string key, Dictionary<string, object> parameters) : string"
			},
		]
	},
	"SetTranslationText": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#settranslationtext-2)",
				signature: "(string key, string text) : void"
			},
		]
	},
	"DisableGameEndDetection": {
		signatures: [
			{
				description: "Disables automatic defeat on Ship death in Wild Sky, with callbacks to handle what should occur on Victory and Defeat. \n\n- *object* `victoryCallback` lua function to run on victory.\n- *object* `defeatCallback` lua function to run on defeat.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#disablegameenddetection-2)",
				signature: "(object victoryCallback = null, object defeatCallback = null) : void"
			},
		]
	},
	"EnableGameEndDetection": {
		signatures: [
			{
				description: "Re-enable automatic end-game detection for Wild Sky, if previously disabled with `DCEI.DisableGameEndDetection`\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#enablegameenddetection-0)",
				signature: "() : void"
			},
		]
	},
	"BlockGameWorld": {
		signatures: [
			{
				description: "Blocks the player from interacting with the game world. Removes any active whitelist(s). An exception to this is joystick input.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#blockgameworld-0)",
				signature: "() : void"
			},
		]
	},
	"WhitelistUnit": {
		signatures: [
			{
				description: "Whitelists a unit for player selection while normal input is blocked with `DCEI.BlockGameWorld()`. In isolation, this will allow a player to select a unit but not issue movement or other commands to it.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `u` the unit to whitelist.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#whitelistunit-1)",
				signature: "(unit u) : void"
			},
		]
	},
	"WhitelistWorldPosition": {
		signatures: [
			{
				description: "Whitelists a map position for player interaction while normal input is blocked with `DCEI.BlockGameWorld()`.\n\n- *float* `x` the X coordinate.\n- *float* `z` the Z coordinate.\n- *float* `radius` the radius of the area whitelisted for player interaction.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#whitelistworldposition-3)",
				signature: "(float x, float z, float radius) : void"
			},
		]
	},
	"WhitelistUi": {
		signatures: [
			{
				description: "Whitelists the given UI element while normal input is blocked with `DCEI.BlockGameWorld()`\n\n- *InGameUILayoutComponent* `ui` the UI element to whitelist.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#whitelistui-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"UnblockGameWorld": {
		signatures: [
			{
				description: "Unblocks the game world, allowing user interaction again.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tutorial#unblockgameworld-0)",
				signature: "() : void"
			},
		]
	},
	"UseBossWaveIndicator": {
		signatures: [
			{
				description: "Use the boss wave indicator.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#usebosswaveindicator-0)",
				signature: "() : void"
			},
		]
	},
	"ExitTargetingModeAndDeselectUnits": {
		signatures: [
			{
				description: "Exits the targeting phase of ability casting, and deselects units. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#exittargetingmodeanddeselectunits-0)",
				signature: "() : void"
			},
		]
	},
	"RegisterSpawnGroup": {
		signatures: [
			{
				description: "This function is used to generate [Spawn Groups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups) which can then be used in dynamic spawn waves. Note that this is optional, as you can also use spawn groups defined in data or simply a unit type and pattern. For more information see [Subgroups](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-waves).\n\n- *string* `name` Used to reference the spawn group when adding to the spawn wave later.\n- *List\\<SpawnGroupUnit>* `units` A list of unit types, delays, and offsets that make up a spawn group, just like spawn groups in data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#registerspawngroup-2)",
				signature: "(string name, List<SpawnGroupUnit> units) : void"
			},
		]
	},
	"RegisterSpawnPattern": {
		signatures: [
			{
				description: "Register a Wild Sky creep wave \"Spawn Pattern\"\n\n- *string* `name` name of the spawn pattern\n- *float* `intervalMin` minimum wait between spawns\n- *float* `intervalMax` maximum wait between spawns\n- *float* `dispersalMin` minimum positional offset on the path\n- *float* `dispersalMax` maximum positional offset on the path\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#registerspawnpattern-5)",
				signature: "(string name, float intervalMin, float intervalMax, float dispersalMin, float dispersalMax) : void"
			},
		]
	},
	"AddSpawnWave": {
		signatures: [
			{
				description: "This function is used to describe waves. The `options` parameter accepts a table with many specific attributes that match the same parameters available in [Spawn Waves](https://wiki.funovus.com/master/Tower-Defense-Feature-Overview#spawn-groups) data. It additionally accepts a `behaviors = {}` property, which can be used to apply stacks of behaviors to units as they spawn, which is useful in creating infinitely scaling waves (as you can increase health/damage infinitely based on wave number).\n\n- *[SpawnWaveOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#spawnwaveoptions)* `options` spawn wave options.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#addspawnwave-1)",
				signature: "(SpawnWaveOptions options) : void"
			},
		]
	},
	"AddDynamicSpawnWaves": {
		signatures: [
			{
				description: "This function is what actually adds dynamic waves to the game.\n\n- *int* `count` How many waves to generate (-1 for infinite waves) by calling the callback function this many times.\n- *object* `callback` callback function that should include `AddSpawnWave()`.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#adddynamicspawnwaves-2)",
				signature: "(int count, object callback) : void"
			},
		]
	},
	"RemoveTowerBuildLimit": {
		signatures: [
			{
				description: "Disable the wild sky tower build limit.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#removetowerbuildlimit-0)",
				signature: "() : void"
			},
		]
	},
	"CreateRandomGenerator": {
		signatures: [
			{
				description: "Returns a new random generator given a seed.\n\n- *int* `seed` the new random seed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Math#createrandomgenerator-1)",
				signature: "(int seed) : object"
			},
		]
	},
	"NextRandomInteger": {
		signatures: [
			{
				description: "Returns the next random integer between 1 and the given `max` value, given a random generator.\n\n- *object* `generator` a random generator created by [CreateRandomGenerator](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Math#createrandomgenerator-1).\n- *int* `max` the bounds on the value that can be generated. This number can be negative.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Math#nextrandominteger-2)",
				signature: "(object generator, int max) : int"
			},
		]
	},
	"IncreaseTowerBuildLimit": {
		signatures: [
			{
				description: "Increase the wild sky tower build limit.\n\n- *int* `value` How much to increase the tower build limit by.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Tower-Defense#increasetowerbuildlimit-1)",
				signature: "(int value) : void"
			},
		]
	},
	"ShowSlowMotionEffect": {
		signatures: [
			{
				description: "Shows the slow motion effect on the screen.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#showslowmotioneffect-0)",
				signature: "() : void"
			},
		]
	},
	"HideSlowMotionEffect": {
		signatures: [
			{
				description: "Hides the slow motion effect on the screen.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-UI#hideslowmotioneffect-0)",
				signature: "() : void"
			},
		]
	},
	"GetAnimationClipId": {
		signatures: [
			{
				description: "Get animation clip Id according to the clip name.\n\n- *string* `name` animation clip name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Actor#getanimationclipid-1)",
				signature: "(string name) : int"
			},
		]
	},
	"CompileActorAction": {
		signatures: [
			{
				description: "Compiles the given action for an actor and returns a corresponding integer ID.\n\n- *string* `action` the action to compile, as a JSON string.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Actor#compileactoraction-1)",
				signature: "(string action) : int"
			},
		]
	},
	"SendActorAction": {
		signatures: [
			{
				description: "Sends the compiled actor action to the given actor on the given unit.\n\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to send the actor action to.\n- *int* `compiledActorActionId` the actor action ID generated by [CompileActorAction](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Actor#compileactoraction-1)\n- *string* `targetActorName` (optional) the actor to execute the compiled actor action. Must belong to the unit's actor scope. If no target actor is given, the unit's actor will be used instead.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Actor#sendactoraction-3)",
				signature: "(unit unit, int compiledActorActionId, string targetActorName = null) : void"
			},
		]
	},
	"SetVfxPriorityLevel": {
		signatures: [
			{
				description: "Discard some VFX for better performance on low-end devices. The priority levels are 1, 2, and 3, and all VFX with priority lower than the priority level will not display. The actor's priority can be set in the editor's actor data tab. \n\n- *int* `level` the level of VFX to discard.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Actor#setvfxprioritylevel-1)",
				signature: "(int level) : void"
			},
		]
	},
	"EnableRoute": {
		signatures: [
			{
				description: "Enable/disable a waypoints route according to route name.\n\n- *string* `routeName` the name of the route.\n- *bool* `enable` if true, enabel the route.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#enableroute-2)",
				signature: "(string routeName, bool enable) : void"
			},
		]
	},
	"GetMapSize": {
		signatures: [
			{
				description: "Returns the X and Z dimensions of the map.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getmapsize-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetMapCenterPoint": {
		signatures: [
			{
				description: "Returns the X and Z coordinates of the center of the map.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getmapcenterpoint-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetTerrainTypeAtPoint": {
		signatures: [
			{
				description: "Returns the terrain type at the given point. Returns 0-4 depending on the texture painted at the point, with 0 being the default texture. Ignores terrain features such as cliffs, borders, and water - this returns the texture that would otherwise be painted on the tile.\n\n- *float* `x` the X coordinate of the point.\n- *float* `z` the Z coordinate of the point.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getterraintypeatpoint-2)",
				signature: "(float x, float z) : int"
			},
		]
	},
	"GetTerrainHeightAtPoint": {
		signatures: [
			{
				description: "Returns the terrain height at the given point. Values can range from 5 to -5. Default terrain height is 0, border height defaults to -1. Ignores water height.\n\n- *float* `x` the X coordinate of the point.\n- *float* `z` the Z coordinate of the point.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getterrainheightatpoint-2)",
				signature: "(float x, float z) : float"
			},
		]
	},
	"ChangePropLayerDisplay": {
		signatures: [
			{
				description: "Enables or disables the display of a prop player.\n\n- *string* `layerName` the name of the layer.\n- *bool* `display` if true, display the prop layer, otherwise hide the prop layer.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#changeproplayerdisplay-2)",
				signature: "(string layerName, bool display) : void"
			},
		]
	},
	"LoadPropLayer": {
		signatures: [
			{
				description: "Loads the prop layer into memory. If prop layer has already been loaded, does nothing. Layers may need to be unloaded via [UnloadPropLayer](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#unloadproplayer-1) first.\n\n- *string* `layerName` the name of the layer.\n- *bool* `initialDisplay` set to true/false to show or hide the prop layer initially.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#loadproplayer-2)",
				signature: "(string layerName, bool initialDisplay) : void"
			},
		]
	},
	"UnloadPropLayer": {
		signatures: [
			{
				description: "Unloads the given prop layer from memory, preventing it from being displayed. Prop layers unloaded can be reloaded via [LoadPropLayer](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#loadproplayer-2).\n\n- *string* `layerName` the name of the layer.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#unloadproplayer-1)",
				signature: "(string layerName) : void"
			},
		]
	},
	"GetPropLayerLoadStatus": {
		signatures: [
			{
				description: "Returns true if given prop layer is loaded.\n\n- *string* `layerName` the name of the layer.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getproplayerloadstatus-1)",
				signature: "(string layerName) : bool"
			},
		]
	},
	"GetTerrainChunkPosition": {
		signatures: [
			{
				description: "Returns the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk.\n\n- *string* `chunkName` the name of the terrain chunk.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getterrainchunkposition-1)",
				signature: "(string chunkName) : Float3"
			},
		]
	},
	"SetTerrainChunkPosition": {
		signatures: [
			{
				description: "Sets the [position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2) of a terrain chunk. Returns true if the terrain chunk position was set successfully. \n\n- *string* `chunkName` the name of the terrain chunk.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setterrainchunkposition-2)",
				signature: "(string chunkName, Float3 pos) : bool"
			},
		]
	},
	"SetTerrainChunkPositionWithInterpolation": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk while animating it to that position. Returns true if the position was set successfully.\n\n- *string* `chunkName` the name of the terrain chunk.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk.\n- *float* `duration` the time taken for the terrain chunk to reach its destination.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setterrainchunkpositionwithinterpolation-3)",
				signature: "(string chunkName, Float3 pos, float duration) : bool"
			},
		]
	},
	"InstantiateTerrainChunk": {
		signatures: [
			{
				description: "Instantiates a terrain chunk at the given location and returns the instanceId of the terrain chunk instance. Returns 0 on failure.\n\n- *string* `chunkName` the name of the terrain chunk to create an instance of.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the coordinates for the center of the terrain chunk instance.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#instantiateterrainchunk-2)",
				signature: "(string chunkName, Float3 pos) : int"
			},
		]
	},
	"DestroyTerrainChunkInstance": {
		signatures: [
			{
				description: "Destroys a terrain chunk instance.\n\n- *int* `instanceId` the instanceId assigned to the terrain chunk instance.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#destroyterrainchunkinstance-1)",
				signature: "(int instanceId) : void"
			},
		]
	},
	"GetTerrainChunkInstancePosition": {
		signatures: [
			{
				description: "Returns the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk instance.\n\n- *int* `instanceId` the instanceId assigned to the terrain chunk instance.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getterrainchunkinstanceposition-1)",
				signature: "(int instanceId) : Float3"
			},
		]
	},
	"SetTerrainChunkInstancePosition": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk instance. Returns true if the position was set successfully.\n\n- *int* `instanceId` the instanceId assigned to the terrain chunk instance.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk instance.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setterrainchunkinstanceposition-2)",
				signature: "(int instanceId, Float3 pos) : bool"
			},
		]
	},
	"SetTerrainChunkInstancePositionWithInterpolation": {
		signatures: [
			{
				description: "Sets the [3D position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a terrain chunk instance while animating it to that position. Returns true if the position was set successfully.\n\n- *int* `instanceId` the instanceId assigned to the terrain chunk instance.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `pos` the new coordinates for the center of the terrain chunk instance.\n- *float* `duration` the time taken for the terrain chunk instance to reach its destination.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setterrainchunkinstancepositionwithinterpolation-3)",
				signature: "(int instanceId, Float3 pos, float duration) : bool"
			},
		]
	},
	"GetWeather": {
		signatures: [
			{
				description: "Returns an integer corresponding to the weather. Does not detect the heatwave option.\n0 - None\n1 - Rain\n2 - Snow\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getweather-0)",
				signature: "() : int"
			},
		]
	},
	"SetWeather": {
		signatures: [
			{
				description: "Sets a weather status over the given duration. Use 0 for an instant transition. Cannot set the heatwave option.\n0 - None\n1 - Rain\n2 - Snow\n\n- *int* `weatherStatus` the integer corresponding to a weather status.\n- *float* `duration` the transition duration.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setweather-2)",
				signature: "(int weatherStatus, float duration = 4) : void"
			},
		]
	},
	"GetTimeOfTheDay": {
		signatures: [
			{
				description: "Returns an integer corresponding to the time of the day.\n0 - Noon\n1 - Night\n2 - Void\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#gettimeoftheday-0)",
				signature: "() : int"
			},
		]
	},
	"SetTimeOfTheDay": {
		signatures: [
			{
				description: "Sets a time of the day over the given duration. Use 0 for an instant transition.\n0 - Noon\n1 - Night\n2 - Void\n\n- *int* `timeOfTheDay` the integer corresponding to a timeOfTheDay.\n- *float* `duration` the transition duration.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#settimeoftheday-2)",
				signature: "(int timeOfTheDay, float duration = 4) : void"
			},
		]
	},
	"GetCurrentLightColor": {
		signatures: [
			{
				description: "Get the current light's RGB value\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#getcurrentlightcolor-0)",
				signature: "() : ColorRGB"
			},
		]
	},
	"SetOverrideLightColor": {
		signatures: [
			{
				description: "Set light color RGB value for a period of time\n\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the color. Also accepts hex values such as `\"#32a852\"`\n- *float* `duration` duration of time over which the transition from the current color to the new color will occur\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setoverridelightcolor-2)",
				signature: "(ColorRGB color, float duration) : void"
			},
		]
	},
	"SetSkyboxColor": {
		signatures: [
			{
				description: "Set skybox RGB color value for a period of time.\n\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the color. Also accepts hex values such as `\"#32a852\"`\n- *float* `duration` duration of time over which the transition from the current color to the new color will occur\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setskyboxcolor-2)",
				signature: "(ColorRGB color, float duration) : void"
			},
		]
	},
	"ResetSkyboxColor": {
		signatures: [
			{
				description: "Resets the skybox color to the default over the given duration. Use 0 for an instant transition.\n\n- *float* `duration` the transition duration.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#resetskyboxcolor-1)",
				signature: "(float duration) : void"
			},
		]
	},
	"SetCustomLightColor": {
		signatures: [
			{
				description: "Change a custom light's color gradually over duration time.\n\n- *string* `name` the name of the light.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `\"#32a852\"`\n- *float* `duration` the duration of this change.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Lighting#setcustomlightcolor-3)",
				signature: "(string name, ColorRGB color, float duration) : void"
			},
		]
	},
	"SetCustomLightIntensity": {
		signatures: [
			{
				description: "Change a custom light's intensity gradually over duration time.\n\n- *string* `name` the name of the light.\n- *float* `intensity` thew new intensity of the light.\n- *float* `duration` the duration of this change.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Lighting#setcustomlightintensity-3)",
				signature: "(string name, float intensity, float duration) : void"
			},
		]
	},
	"SetCustomLightPosition": {
		signatures: [
			{
				description: "Change a custom light's position gradually over duration time.\n\n- *string* `name` the name of the light.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `position` the position of the light.\n- *float* `duration` the duration of this change.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Lighting#setcustomlightposition-3)",
				signature: "(string name, Float3 position, float duration) : void"
			},
		]
	},
	"GetCustomLightColor": {
		signatures: [
			{
				description: "Get the current RGB value of the light.\n\n- *string* `name` the name of the light.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Lighting#getcustomlightcolor-1)",
				signature: "(string name) : ColorRGB"
			},
		]
	},
	"AddLine": {
		signatures: [
			{
				description: "Draws a line on the terrain, with color! Returns the lineId of the created line if successful.\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `startPos` the starting coordinates for the line.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `endPos` the ending coordinates for the line.\n- *float* `width` the width of the line, in terms of tiles.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n- *bool* `rectCap` if true, the ends of the line are rectangular instead of rounded.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#addline-5)",
				signature: "(Float3 startPos, Float3 endPos, float width, ColorRGBA color, bool rectCap = False) : int"
			},
		]
	},
	"AddLineWithSprite": {
		signatures: [
			{
				description: "Draws a line on the terrain using repeating sprites. Returns the lineId of the created line if successful.\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `startPos` the starting coordinates for the line.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `endPos` the ending coordinates for the line.\n- *float* `width` the width of the line, in terms of tiles.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n- *string* `spriteName` the name of the sprite to draw.\n- *float* `tex_multiplier` the multiplier for sprite scaling.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#addlinewithsprite-6)",
				signature: "(Float3 startPos, Float3 endPos, float width, ColorRGBA color, string spriteName, float tex_multiplier = 1) : int"
			},
		]
	},
	"RemoveLine": {
		signatures: [
			{
				description: "Removes a line.\n\n- *int* `lineId` the ID of the line to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#removeline-1)",
				signature: "(int lineId) : void"
			},
		]
	},
	"MoveLineWithInterpolation": {
		signatures: [
			{
				description: "Moves a line's start and end points (and thus the line itself) to new locations over the given duration.\n\n- *int* `lineId` the ID of the line to move.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `startPos` the new starting coordinates for the line.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `endPos` the new ending coordinates for the line.\n- *float* `duration` the duration of the line's movement.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#movelinewithinterpolation-4)",
				signature: "(int lineId, Float3 startPos, Float3 endPos, float duration) : void"
			},
		]
	},
	"RemoveAllLines": {
		signatures: [
			{
				description: "Removes all lines.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#removealllines-0)",
				signature: "() : void"
			},
		]
	},
	"ChangeLineColor": {
		signatures: [
			{
				description: "Changes a line's color.\n\n- *int* `lineId` the ID of the line.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#changelinecolor-2)",
				signature: "(int lineId, ColorRGBA color) : void"
			},
		]
	},
	"ChangeLineDisplay": {
		signatures: [
			{
				description: "Toggles the display of a line.\n\n- *int* `lineId` the ID of the line.\n- *bool* `display` if true, displays the line.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#changelinedisplay-2)",
				signature: "(int lineId, bool display) : void"
			},
		]
	},
	"AddGrid": {
		signatures: [
			{
				description: "Draws a grid with lines. Returns a gridId integer if successful.\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `center` the coordinates for the center of the grid.\n- *float* `width` the width of the grid (in tiles).\n- *float* `height` the height of the grid (in tiles).\n- *int* `xCount` the number of columns (along the x axis).\n- *int* `zCount` the number of rows (along the z axis).\n- *float* `lineWidth` the width of the grid lines.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n- *bool* `rectCap` if true, the ends of the grid lines are rectangular instead of rounded.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#addgrid-8)",
				signature: "(Float3 center, float width, float height, int xCount, int zCount, float lineWidth, ColorRGBA color, bool rectCap = False) : int"
			},
		]
	},
	"AddGridWithSprite": {
		signatures: [
			{
				description: "Draws a grid with lines made of repeating sprites. Returns a gridId integer if successful.\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `center` the coordinates for the center of the grid.\n- *float* `width` the width of the grid (in tiles).\n- *float* `height` the height of the grid (in tiles).\n- *int* `xCount` the number of columns (along the x axis).\n- *int* `zCount` the number of rows (along the z axis).\n- *float* `lineWidth` the width of the grid lines.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n- *string* `spriteName` the name of the sprite to draw.\n- *float* `tex_multiplier` the multiplier for sprite scaling.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#addgridwithsprite-9)",
				signature: "(Float3 center, float width, float height, int xCount, int zCount, float lineWidth, ColorRGBA color, string spriteName, float tex_multiplier = 1) : int"
			},
		]
	},
	"RemoveGrid": {
		signatures: [
			{
				description: "Removes a grid.\n\n- *int* `gridId` the ID of the grid to remove.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#removegrid-1)",
				signature: "(int gridId) : void"
			},
		]
	},
	"SetBlurredScreenCaptureAsBackground": {
		signatures: [
			{
				description: "Toggles a blurred version of your terrain in the background. Note that this background renders underneath the terrain, so you may need to move your game camera to see it.\n\n- *bool* `set` if true, enables the blurred background.\n- *float* `duration` the transition duration.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Terrain#setblurredscreencaptureasbackground-2)",
				signature: "(bool set, float duration) : void"
			},
		]
	},
	"WaitForUiUpdateToComplete": {
		signatures: [
			{
				description: "Runs the callback after engine finishes updating UI layout but before the updated layout is shown on the screen.\n\n- *TypedCallback* `callback` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#waitforuiupdatetocomplete-1)",
				signature: "(TypedCallback callback) : void"
			},
		]
	},
	"GetUiRootFrame": {
		signatures: [
			{
				description: "Returns the root UI frame.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getuirootframe-0)",
				signature: "() : InGameUILayoutComponent"
			},
		]
	},
	"GetUiCanvasSize": {
		signatures: [
			{
				description: "Returns the UI canvas size.\n\n- *bool* `ignoreSafeArea` if true, ignores any safe areas.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getuicanvassize-1)",
				signature: "(bool ignoreSafeArea = False) : Float2"
			},
		]
	},
	"SetUiSizeMultiplier": {
		signatures: [
			{
				description: "Applies a multiplier to all size parameters of all custom UI frames. This was added to help migrate legacy maps to portrait mode, due to the canvas scaling change.\n\n- *float* `multiplier` the global multiplier to apply to all custom UI.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setuisizemultiplier-1)",
				signature: "(float multiplier) : float"
			},
		]
	},
	"GetUiRootFrameForPlayer": {
		signatures: [
			{
				description: "Returns the root UI frame for the given player.\n\n- *int* `player` the player to return the root UI frame for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getuirootframeforplayer-1)",
				signature: "(int player) : InGameUILayoutComponent"
			},
		]
	},
	"DestroyFrame": {
		signatures: [
			{
				description: "Destroys the given UI frame and all its children.\n\n- *InGameUILayoutComponent* `ui` the UI frame to destroy.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#destroyframe-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"FrameExists": {
		signatures: [
			{
				description: "Returns true if the given UI exists.\n\n- *InGameUILayoutComponent* `ui` the UI frame to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#frameexists-1)",
				signature: "(InGameUILayoutComponent ui) : bool"
			},
		]
	},
	"GetParentFrame": {
		signatures: [
			{
				description: "Returns the parent frame of the given UI frame.\n\n- *InGameUILayoutComponent* `item` the UI frame to return the parent frame of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getparentframe-1)",
				signature: "(InGameUILayoutComponent item) : InGameUILayoutComponent"
			},
		]
	},
	"CreateFrame": {
		signatures: [
			{
				description: "Creates and returns a new frame as a child of the given a parent frame. This frame has a default height/width of 0 and expands to fit any children.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"GetFrameWidth": {
		signatures: [
			{
				description: "Returns the width of a UI frame. Note that UI frame size changes are applied at the end of a game update, so you'd need to wait a frame after changing the size of a UI frame to get the new dimensions.\n\n- *InGameUILayoutComponent* `ui` the UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframewidth-1)",
				signature: "(InGameUILayoutComponent ui) : float"
			},
		]
	},
	"GetFrameHeight": {
		signatures: [
			{
				description: "Returns the height of a UI frame. Note that UI frame size changes are applied at the end of a game update, so you'd need to wait a frame after changing the size of a UI frame to get the new dimensions.\n\n- *InGameUILayoutComponent* `ui` the UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeheight-1)",
				signature: "(InGameUILayoutComponent ui) : float"
			},
		]
	},
	"SetFrameUseImageSizeRatio": {
		signatures: [
			{
				description: "Makes the given UI frame set its sized based on the texture used for it's background image. This ratio determines the rendering size of the frame, where `1` will use the original dimensions of the texture. Once set, setting either height or width (but not both) will adjust the other dimension proportionally to match the size ratio.\n\n- *InGameUILayoutComponent* `ui` the UI frame.\n- *float* `ratio` the image size ratio.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeuseimagesizeratio-2)",
				signature: "(InGameUILayoutComponent ui, float ratio) : void"
			},
		]
	},
	"SetFrameAlpha": {
		signatures: [
			{
				description: "Sets the transparency for the given UI frame and all of its children. This option with have a compounding effect with an alpha value set by [SetFrameImageColor](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolor-2). Child frames cannot be made less transparent than their parent with this function.\n\n- *InGameUILayoutComponent* `ui` the UI frame.\n- *float* `alpha` the frame transparency, from 0 to 1, where 0 is transparent and 1 is opaque.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframealpha-2)",
				signature: "(InGameUILayoutComponent ui, float alpha) : void"
			},
		]
	},
	"CreateMaskFrame": {
		signatures: [
			{
				description: "Creates a mask. Masks can be used to 'crop' child frames to the masks size/shape. If given a background image, the opaque white pixels will be used to determine the shape of the effect. By default, this frame type attempts to fill its parent size unless given explicit dimensions.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createmaskframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateStencilMaskFrame": {
		signatures: [
			{
				description: "Creates a stencil mask. Stencil masks can be used to 'cut holes' in a parent mask frame. Similar to a mask frame, if given a background image, the white/opaque values will be used to determine the shape of the effect. A stencil mask will also cut through any of its sibling frames. By default, this frame type attempts to fill its parent size unless given explicit dimensions.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createstencilmaskframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateHighlightFrame": {
		signatures: [
			{
				description: "Creates a highlight frame. If the highlight is given a background image, it will animate a highlight effect across the texture; otherwise the highlight will display a simple animation around its border. This frame type has a default size of 0 and expands to fit any children.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhighlightframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateCameraFrame": {
		signatures: [
			{
				description: "Creates a new camera frame. Camera frames can be used to project views of the game world onto a UI frame. This can be used to make animated portraits using in-game models, among other uses. Requires the use of helper functions to set default values.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createcameraframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateVStackFrame": {
		signatures: [
			{
				description: "Creates a new vertical stack. This frame will arrange child frames vertically within it. By default, child frames are stacked from top to bottom. This frame type has a default size of 0 and expands to fit any children.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateHStackFrame": {
		signatures: [
			{
				description: "Creates a new horizontal stack. This frame will arrange child frames horizontally within it. By default, child frames are stacked from left to right. This frame type has a default size of 0 and expands to fit any children. If this frame is assigned a set size, oversized child frames will overflow.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateGridFrame": {
		signatures: [
			{
				description: "Creates a new grid. This frame will arrange child frames in a grid by determining the number of rows/columns automatically from the cellWidth and cellHeight properties. This should be followed by [SetGridFrameCellHeight](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframecellheight-2) and [SetGridFrameCellWidth](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframecellwidth-2) to set the aforementioned properties, as it does not have default values for either.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#creategridframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"SetGridFrameLeftAlignment": {
		signatures: [
			{
				description: "Sets left alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframeleftalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetGridFrameRightAlignment": {
		signatures: [
			{
				description: "Sets right alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframerightalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetGridFrameHorizontalCenterAlignment": {
		signatures: [
			{
				description: "Sets horizontal center alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframehorizontalcenteralignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetGridFrameTopAlignment": {
		signatures: [
			{
				description: "Sets top alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframetopalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetGridFrameBottomAlignment": {
		signatures: [
			{
				description: "Sets bottom alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframebottomalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetGridFrameVerticalCenterAlignment": {
		signatures: [
			{
				description: "Sets vertical center alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframeverticalcenteralignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"CreateHScrollFrame": {
		signatures: [
			{
				description: "Creates a new horizontal scrolling frame. This frame functions similarly to a [CreateHStackFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1), in that it will arrange its child frames horizontally, however this frame also supports horizontal scrolling if the contents would be larger than the size of the scroll frame. Do not place content inside this frame directly, instead use [GetScrollFrameContent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1) to fetch the content frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateVScrollFrame": {
		signatures: [
			{
				description: "Creates a new vertically scrolling frame. This frame functions similarly to a [CreateVStackFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1), in that it will arrange its child frames vertically, however this frame also supports vertical scrolling if the contents would be larger than the size of the scroll frame. Do not place content inside this frame directly, instead use [GetScrollFrameContent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1) to fetch the content frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateScrollFrame": {
		signatures: [
			{
				description: "Creates a horizontally and vertically scrolling frame. Useful for making scrollable maps. Do not place content inside this frame directly, instead use [GetScrollFrameContent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1)] to fetch the content frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"GetFrameIndexInParent": {
		signatures: [
			{
				description: "Returns the given UI frame's child index in its parent UI frame. This can be useful for getting an item's position from within a stack.\n\n- *InGameUILayoutComponent* `item` the UI frame to return the child index of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeindexinparent-1)",
				signature: "(InGameUILayoutComponent item) : int"
			},
		]
	},
	"SetFrameIndexInParent": {
		signatures: [
			{
				description: "Sets the given UI frame's child index in its parent UI frame. If the new index already has a UI frame assigned to it, the frame will be inserted at the new position and its siblings indices will update to match the new order. Indices must be contiguous, trying to set a child's index to a non-contiguous index will just set it to the last contiguous index. The frame index is by default the order in which the child frames were created within the parent.\n\n- *InGameUILayoutComponent* `item` the UI frame to set the child index of.\n- *int* `index` the new child index.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeindexinparent-2)",
				signature: "(InGameUILayoutComponent item, int index) : void"
			},
		]
	},
	"GetChildrenFrameCount": {
		signatures: [
			{
				description: "Returns the number of child frames.\n\n- *InGameUILayoutComponent* `parent` the UI frame to get the child frame count for. This can be called on the main scroll frame to get the number of child frames attached to its content frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getchildrenframecount-1)",
				signature: "(InGameUILayoutComponent parent) : int"
			},
		]
	},
	"CreateButtonFrame": {
		signatures: [
			{
				description: "Creates a new button frame. By default, new buttons use a [SetFramePadding](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepadding-2) of 12 and `btn_green` as their [SetFrameImage](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimage-2). This frame type has a default size of 0 and expands to fit any children.\n\n- *InGameUILayoutComponent* `parent` the parent UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createbuttonframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateTextFrame": {
		signatures: [
			{
				description: "Creates a new text frame. This frame type has a default size of 0 and expand to fit any children.\n\n- *InGameUILayoutComponent* `parent` the parent UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateUserInputTextFrame": {
		signatures: [
			{
				description: "Creates a new text frame that handles user inputted text with support for local keyboard data. This should be used to display any text that results from user input, such as a user-created username. This frame type has a default size of 0 and expand to fit any children.\n\n- *InGameUILayoutComponent* `parent` the parent UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createuserinputtextframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateInputFrame": {
		signatures: [
			{
				description: "Creates an input UI frame. By default, this frame type attempts to fill its parent size unless given explicit dimensions.\n\n- *InGameUILayoutComponent* `parent` the parent UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createinputframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"CreateFrameFromXml": {
		signatures: [
			{
				description: "Creates new UI frame given an XML UI element name. XML UI elements are created in the UI Editor Window.\n\n- *InGameUILayoutComponent* `parent` the parent UI frame.\n- *string* `name` the name of the XML UI element to create the UI from.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createframefromxml-2)",
				signature: "(InGameUILayoutComponent parent, string name) : InGameUILayoutComponent"
			},
		]
	},
	"UpdateFrame": {
		signatures: [
			{
				description: "Used to help safely update inactive UI frames. Creating new UI frames should only be done when the parent frame (and all of its ancestors) are active to ensure the child's internal state is properly initialized. This API helps by enabling the given UI frame (and all of its ancestors), running the given callback function, and then restoring the original active state of the given UI frame. \n\n- *InGameUILayoutComponent* `ui` the UI frame to update.\n- *object* `callback` the callback function to run.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#updateframe-2)",
				signature: "(InGameUILayoutComponent ui, object callback) : void"
			},
		]
	},
	"GetFrameState": {
		signatures: [
			{
				description: "Returns the XML UI [state](https://wiki.funovus.com/development/Ui-XML-State) as a table for the given UI element. Updating the table values in script will update the state of the UI element.\n\n- *InGameUILayoutComponent* `ui` the UI frame to get the state of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframestate-1)",
				signature: "(InGameUILayoutComponent ui) : object"
			},
		]
	},
	"GetFrameController": {
		signatures: [
			{
				description: "See [UI Controllers](https://funovus.notion.site/Animation-Previews-with-UI-Controllers-538d53a156174cfb949d05b561b78b28). Gets the Lua script responsible for controlling UI frame.\n\n- *InGameUILayoutComponent* `ui` the UI frame to get the controller of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframecontroller-1)",
				signature: "(InGameUILayoutComponent ui) : object"
			},
		]
	},
	"GetChildFrameById": {
		signatures: [
			{
				description: "Returns XML UI frames by their ID. Useful for accessing child frames of an XML UI frame.\n\n- *InGameUILayoutComponent* `ui` the parent XML UI frame.\n- *string* `id` the type of the child UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getchildframebyid-2)",
				signature: "(InGameUILayoutComponent ui, string id) : InGameUILayoutComponent"
			},
		]
	},
	"GetXmlConstant": {
		signatures: [
			{
				description: "Gets the value of a constant, as defined in the UI xml data. \n\n- *string* `name` name of the XML UI data constant.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getxmlconstant-1)",
				signature: "(string name) : string"
			},
		]
	},
	"GetXmlFrames": {
		signatures: [
			{
				description: "Returns a table of all XML UI frames defined in the Data Window. Note that this only returns the top level frames and not their children.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getxmlframes-0)",
				signature: "() : object"
			},
		]
	},
	"GetChildrenFramesIdAndFrameType": {
		signatures: [
			{
				description: "Returns a table of child XML UI frames.\n\n- *InGameUILayoutComponent* `ui` the parent XML UI frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getchildrenframesidandframetype-1)",
				signature: "(InGameUILayoutComponent ui) : object"
			},
		]
	},
	"IsUiRootFrame": {
		signatures: [
			{
				description: "Returns true if the given UI frame is a top-level XML UI frame.\n\n- *InGameUILayoutComponent* `ui` the XMl UI frame to check.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#isuirootframe-1)",
				signature: "(InGameUILayoutComponent ui) : bool"
			},
		]
	},
	"SetCameraFrameViewportSize": {
		signatures: [
			{
				description: "Sets the resolution of a camera frame UI. The resolution values are not capped, but excessively high resolutions will consume large amounts of RAM. The default resolution is 0.\n\n- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.\n- *int* `x` the X resolution.\n- *int* `y` the Y resolution.\n- *bool* `discardDepth` if true, discards the camera depth. This parameter is optional, and defaults to false.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportsize-4)",
				signature: "(InGameUILayoutComponent ui, int x, int y, bool discardDepth = False) : void"
			},
		]
	},
	"SetCameraFrameViewportWorldPosition": {
		signatures: [
			{
				description: "Sets the position of a camera frame UI. The default position for a new camera frame is {0, 0, 0}.\n\n- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.\n- *float* `x` the new X coordinate.\n- *float* `y` the new Y coordinate.\n- *float* `z` the new Z coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportworldposition-4)",
				signature: "(InGameUILayoutComponent ui, float x, float y, float z) : void"
			},
		]
	},
	"SetCameraFrameViewportRotation": {
		signatures: [
			{
				description: "Sets the rotation of a camera frame UI. The default rotation for a new camera frame is {0, 0, 0}.\n\n- *InGameUILayoutComponent* `ui` the camera frame UI to set the rotation of.\n- *float* `x` the rotation about the X axis in degrees. A value of 180 will make the camera face backwards and be flipped vertically.\n- *float* `y` the rotation about the Y axis in degrees. A value of 180 will make the camera face backwards.\n- *float* `z` the rotation about the Z axis rotation in degrees. A value of 180 will make the camera be flipped vertically.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportrotation-4)",
				signature: "(InGameUILayoutComponent ui, float x, float y, float z) : void"
			},
		]
	},
	"SetGridFrameCellWidth": {
		signatures: [
			{
				description: "Sets the cell width for a grid.\n\n- *InGameUILayoutComponent* `ui` the grid UI frame.\n- *float* `width` the width of a grid cell.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframecellwidth-2)",
				signature: "(InGameUILayoutComponent ui, float width) : void"
			},
		]
	},
	"SetGridFrameCellHeight": {
		signatures: [
			{
				description: "Sets the cell height for a grid.\n\n- *InGameUILayoutComponent* `ui` the grid UI frame.\n- *float* `height` the height of a grid cell.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setgridframecellheight-2)",
				signature: "(InGameUILayoutComponent ui, float height) : void"
			},
		]
	},
	"AnimateCameraFrameViewportWorldPosition": {
		signatures: [
			{
				description: "Animates a camera frame UI to a new position. Returns the UI animation for use in [SetFrameAnimationLoops](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3) and [StopFrameAnimationLoops](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2).\n\n- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.\n- *float* `x` the new X coordinate.\n- *float* `y` the new Y coordinate.\n- *float* `z` the new Z coordinate.\n- *float* `duration` the duration of the camera frame animation. A duration of 0 will make the animation instant.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportworldposition-6)",
				signature: "(InGameUILayoutComponent ui, float x, float y, float z, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateCameraFrameViewportRotation": {
		signatures: [
			{
				description: "- *InGameUILayoutComponent* `ui` the camera frame UI to set the size of.\n- *float* `x` the new X coordinate.\n- *float* `y` the new Y coordinate.\n- *float* `z` the new Z coordinate.\n- *float* `duration` the duration of the camera frame animation. A duration of 0 will make the animation instant.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeviewportrotation-6)",
				signature: "(InGameUILayoutComponent ui, float x, float y, float z, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateCameraFrameOrthographicViewportSize": {
		signatures: [
			{
				description: "Animates a camera frame UI to a new orthographic size. Returns the UI animation for use in [SetFrameAnimationLoops](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3) and [StopFrameAnimationLoops](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2).\n\n- *InGameUILayoutComponent* `ui` the camera frame UI to set the rotation of.\n- *float* `size` the new orthographic size.\n- *float* `duration` the duration of the camera frame animation. A duration of 0 will make the animation instant.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animatecameraframeorthographicviewportsize-4)",
				signature: "(InGameUILayoutComponent ui, float size, float duration, Ease ease) : Tweener"
			},
		]
	},
	"SetCameraFrameCullingMask": {
		signatures: [
			{
				description: "Sets a culling mask for a camera frame that can be used to remove rendering layers from a camera frame.\n\n- *InGameUILayoutComponent* `ui` the camera frame.\n- *int* `mask` the culling mask to apply. Odd values will remove the terrain, even values will remove everything.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframecullingmask-2)",
				signature: "(InGameUILayoutComponent ui, int mask) : void"
			},
		]
	},
	"SetCameraFrameBackgroundColor": {
		signatures: [
			{
				description: "Set background color for a camera frame.\n\n- *InGameUILayoutComponent* `ui` the camera frame.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values. Also accepts hex codes, such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframebackgroundcolor-2)",
				signature: "(InGameUILayoutComponent ui, ColorRGBA color) : void"
			},
		]
	},
	"SetCameraFrameViewportOrthographic": {
		signatures: [
			{
				description: "Enables orthographic view for a camera frame. Note that orthographic camera size must be set independently using DCEI.SetCameraFrameOrthographicViewportSize().\n\n- *InGameUILayoutComponent* `ui` the camera frame.\n- *bool* `set` if true, enables orthographic view.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeviewportorthographic-2)",
				signature: "(InGameUILayoutComponent ui, bool set) : void"
			},
		]
	},
	"SetCameraFrameOrthographicViewportSize": {
		signatures: [
			{
				description: "Sets the orthographic size for a camera frame.\n\n- *InGameUILayoutComponent* `ui` the camera frame.\n- *float* `size` the orthographic size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeorthographicviewportsize-2)",
				signature: "(InGameUILayoutComponent ui, float size) : void"
			},
		]
	},
	"CreateMiniMapFrame": {
		signatures: [
			{
				description: "Creates a minimap frame. Use `CameraFrame` functions to modify the frame. The default resolution for the minimap is 1x1.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n- *bool* `hideTerrain` if true, hides the terrain.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createminimapframe-2)",
				signature: "(InGameUILayoutComponent parent, bool hideTerrain = False) : InGameUILayoutComponent"
			},
		]
	},
	"SetCameraFrameEffectColor": {
		signatures: [
			{
				description: "Set effect color for a camera frame.\n\n- *InGameUILayoutComponent* `ui` the camera frame.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values. Also accepts hex values such as `\"#32a852\"`\n- *float* `saturation` the saturation of color effect.\n- *float* `contrast` the contrast of color effect.\n- *float* `brightness` the brightness of color effect.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setcameraframeeffectcolor-5)",
				signature: "(InGameUILayoutComponent ui, ColorRGB color, float saturation, float contrast, float brightness) : void"
			},
		]
	},
	"GetScrollFrameContent": {
		signatures: [
			{
				description: "Returns the content frame of a scroll frame.\n\n- *InGameUILayoutComponent* `parent` the scroll frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"SetScrollFrameScrollPosition": {
		signatures: [
			{
				description: "Sets the scroll position for an [CreateHScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1) or [CreateVScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1) frames.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *float* `position` the offset to set the scroll to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollposition-2)",
				signature: "(InGameUILayoutComponent ui, float position) : void"
			},
		]
	},
	"GetScrollFrameScrollPosition": {
		signatures: [
			{
				description: "Returns the position of a scroll frame.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframescrollposition-1)",
				signature: "(InGameUILayoutComponent ui) : float"
			},
		]
	},
	"SetScrollFrameScrollPosition2D": {
		signatures: [
			{
				description: "Sets the position of a [CreateScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1) frame.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *[Float2](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2)* `position` the new scroll position.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollposition2d-2)",
				signature: "(InGameUILayoutComponent ui, Float2 position) : void"
			},
		]
	},
	"GetScrollFrameScrollPosition2D": {
		signatures: [
			{
				description: "Returns the position of a [CreateScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1) frame.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframescrollposition2d-1)",
				signature: "(InGameUILayoutComponent ui) : Float2"
			},
		]
	},
	"SetScrollFrameScrollInertia": {
		signatures: [
			{
				description: "Sets the inertia for a scroll frame. This is supported for all scroll frame types.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *bool* `value` if true, the frame's content will decelerate instead of stopping when scrolling stops. This is true by default for newly created scroll frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollinertia-2)",
				signature: "(InGameUILayoutComponent ui, bool value) : void"
			},
		]
	},
	"SetScrollFrameScrollEnable": {
		signatures: [
			{
				description: "Sets whether scrolling is enabled. This is supported for all scroll frame types.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *bool* `value` if true, enables scrolling for the scroll element. This is true by default for newly created scroll frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollenable-2)",
				signature: "(InGameUILayoutComponent ui, bool value) : void"
			},
		]
	},
	"SetScrollFrameScrollDecelerationRate": {
		signatures: [
			{
				description: "Sets the deceleration rate for scroll inertia. A value of 0 will cause instant deceleration (equivalent to setting the inertia to false). Values between 0 and 1 will cause deceleration. A value of 1 will cause no deceleration. A value greater than 1 will cause acceleration. A negative value will break the scroll element. This is supported for all scroll frame types.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *float* `value` the scroll deceleration rate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrolldecelerationrate-2)",
				signature: "(InGameUILayoutComponent ui, float value) : void"
			},
		]
	},
	"SetScrollFrameScrollContentAlignment": {
		signatures: [
			{
				description: "Sets the alignment for scroll content. The value determines where the initial display location of the scroll content is.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *string* `value` the alignment. Possible values: HScroll: `left (default), right` VScroll: `top (default), bottom` Scroll: `left, right, top, bottom, (top|bottom)-(left|right)`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframescrollcontentalignment-2)",
				signature: "(InGameUILayoutComponent ui, string value) : void"
			},
		]
	},
	"SetScrollFrameSnapEnabled": {
		signatures: [
			{
				description: "Toggles scroll frame snapping on or off. When enabled, there are a suite of other APIs for adjusting the snap step size, step count, threshold, and speed. These APIs are useful if your scroll frame contains items of discrete sizes and you want your scroll frame to always snap to these elements rather then end up partially between two items. \n  \n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *bool* `value` set scroll frame snapping to true or false.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframesnapenabled-2)",
				signature: "(InGameUILayoutComponent ui, bool value) : void"
			},
		]
	},
	"SetScrollFrameSnapStepSize": {
		signatures: [
			{
				description: "Sets the size of steps between snap points on scroll frame snapping. Most likely, you'll want to set this to the width of individual items within the scroll frame. \n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *float* `value` sets the step size for the snapping behavior, e.g. width of snapping steps.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframesnapstepsize-2)",
				signature: "(InGameUILayoutComponent ui, float value) : void"
			},
		]
	},
	"SetScrollFrameSnapStepCount": {
		signatures: [
			{
				description: "Sets the number of steps. In the most common use case, you would want to set this to the number of children items, most likely by using GetChildrenFrameCount. \n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *int* `value` the number of steps the frame can snap to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframesnapstepcount-2)",
				signature: "(InGameUILayoutComponent ui, int value) : void"
			},
		]
	},
	"SetScrollFrameSnapThreshold": {
		signatures: [
			{
				description: "Sets the threshold for scroll frame snapping. The threshold his how close a user has to scroll to the next step before they will snap to that step instead of the previous one.\n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *float* `value` this sets the threshold for how close to the next step will cause the snapping to occur. If set to half of the step width, for an example, scrolling halfway to the next step will result in snapping to that step.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframesnapthreshold-2)",
				signature: "(InGameUILayoutComponent ui, float value) : void"
			},
		]
	},
	"SetScrollFrameSnapSpeed": {
		signatures: [
			{
				description: "Set how fast the snapping to the next step will occur for scroll frames with snapping enabled. \n\n- *InGameUILayoutComponent* `ui` the scroll frame (not the scroll content frame).\n- *float* `value` how fast the scroll will snap to the next step.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setscrollframesnapspeed-2)",
				signature: "(InGameUILayoutComponent ui, float value) : void"
			},
		]
	},
	"SetTextFrameRtlSupport": {
		signatures: [
			{
				description: "Sets RTL (right to left) support for a text frame. When true, this text will be displayed from right-to-left when using RTL languages (such as Arabic). You typically want to disable this for numeric text, which is still displayed as left-to-right in such languages. This is enabled by default on all text frames.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *bool* `value` if true, enables RTL support.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframertlsupport-2)",
				signature: "(InGameUILayoutComponent text, bool value) : void"
			},
		]
	},
	"SetTextFrameAlignment": {
		signatures: [
			{
				description: "Sets the text alignment for a text frame.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *string* `alignment` the text alignment. Possible values: `start, end, top, bottom, (top|bottom)-(start|end)`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframealignment-2)",
				signature: "(InGameUILayoutComponent text, string alignment) : void"
			},
		]
	},
	"SetTextFrameWrapping": {
		signatures: [
			{
				description: "Sets text wrapping for a text frame.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *bool* `enable` if true, enables text wrapping. This is true by default for newly created text frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframewrapping-2)",
				signature: "(InGameUILayoutComponent text, bool enable) : void"
			},
		]
	},
	"SetTextFrameOverflow": {
		signatures: [
			{
				description: "Sets text overflow for a text frame.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *bool* `enable` if true, enables text overflow. This is true by default for newly created text frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoverflow-2)",
				signature: "(InGameUILayoutComponent text, bool enable) : void"
			},
		]
	},
	"SetTextFrameText": {
		signatures: [
			{
				description: "Sets the text of a text frame. Supports rich text tags See: http://digitalnativestudios.com/textmeshpro/docs/rich-text/ Use `\\n` for newline.\n\n- *InGameUILayoutComponent* `text` the text frame to set the text of.\n- *string* `content` the text to set. Supports rich text.Supports the following parameters from bound units:\n```\nunit.Info.Icon\nunit.Info.Name\nunit.Health.Current\nunit.Health.Max\nunit.Health.Percentage\nunit.Health.Fraction\nunit.Health.Regeneration\nunit.Shield.Current\nunit.Shield.Max\nunit.Shield.Percentage\nunit.Shield.Fraction\nunit.Shield.Regeneration\nunit.Mana.Current\nunit.Mana.Max\nunit.Mana.Percentage\nunit.Mana.Fraction\nunit.Mana.Regeneration\nunit.Ability.ability_name.CooldownRatio\nunit.Ability.ability_name.MaxCharge\nunit.Ability.ability_name.ChargeCount\nunit.Expression.some_named_expression\n```\nData bound values can be formatted to specific decimal values by appending the expression such as `:F2`.\n(You can find more documentation [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings))\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetext-2)",
				signature: "(InGameUILayoutComponent text, string content) : void"
			},
		]
	},
	"SetTextFrameTextExpression": {
		signatures: [
			{
				description: "Sets a text expression in a text frame. Unlike other UI expressions, text expressions must be surrounded with curly brackets `{}`. These brackets are used so the expression string can be concatenated with regular text. For a list of fields that can be accessed after the unit is bound, see [Data-Binding](https://wiki.funovus.com/development/Data-Binding). \n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `text` the text frame to set the text of.\n- *string* `content` the text to set. See [Data-Binding](https://wiki.funovus.com/development/Data-Binding).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframetextexpression-2)",
				signature: "(InGameUILayoutComponent text, string content) : void"
			},
		]
	},
	"SetTextFrameFontSize": {
		signatures: [
			{
				description: "Sets the font size for a text frame. The default font size is 22.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `size` the new text size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsize-2)",
				signature: "(InGameUILayoutComponent text, float size) : void"
			},
		]
	},
	"SetTextFrameFontSizeMin": {
		signatures: [
			{
				description: "Sets a minimum font size for a text frame. To enable dynamic font sizing, a text frame needs a minium and maximum font size and either a maximum height or width. Does not work if there is a set font size. \n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `size` the new minimum text size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsizemin-2)",
				signature: "(InGameUILayoutComponent text, float size) : void"
			},
		]
	},
	"SetTextFrameFontSizeMax": {
		signatures: [
			{
				description: "Sets a maximum font size for a text frame. To enable dynamic font sizing, a text frame needs a minium and maximum font size and either a maximum height or width. Does not work if there is a set font size. \n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `size` the new maximum text size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsizemax-2)",
				signature: "(InGameUILayoutComponent text, float size) : void"
			},
		]
	},
	"SetTextFrameColor": {
		signatures: [
			{
				description: "Sets the color of text for a text frame.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframecolor-2)",
				signature: "(InGameUILayoutComponent text, ColorRGB color) : void"
			},
		]
	},
	"SetTextFrameOutline": {
		signatures: [
			{
				description: "Sets the outline for a text frame's text.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *bool* `outline` if true, enables the text outline. This is true by default for newly created text frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutline-2)",
				signature: "(InGameUILayoutComponent text, bool outline) : void"
			},
		]
	},
	"SetTextFrameShadow": {
		signatures: [
			{
				description: "Sets the shadow for a text frame's text. Disabling the text shadow will also disable the outline.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *bool* `enableShadow` if true, enables the text shadow. This is true by default for newly created text frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadow-2)",
				signature: "(InGameUILayoutComponent text, bool enableShadow) : void"
			},
		]
	},
	"SetTextFrameOutlineOutside": {
		signatures: [
			{
				description: "Sets the outline for a text frame's text.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *bool* `outside` if true, enables the text's outside outline. This is true by default for newly created text frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlineoutside-2)",
				signature: "(InGameUILayoutComponent text, bool outside) : void"
			},
		]
	},
	"SetTextFrameOutlineColor": {
		signatures: [
			{
				description: "Sets the outline color for a text frame's text.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlinecolor-2)",
				signature: "(InGameUILayoutComponent text, ColorRGBA color) : void"
			},
		]
	},
	"SetTextFrameOutlineWidth": {
		signatures: [
			{
				description: "Sets the width for a text frame's text outline.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `width` the width of the outline.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlinewidth-2)",
				signature: "(InGameUILayoutComponent text, float width) : void"
			},
		]
	},
	"SetTextFrameOutlineSoftness": {
		signatures: [
			{
				description: "Set the softness for a text frame's text outline.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `softness` the softness of the outline, scaled from 0-1.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeoutlinesoftness-2)",
				signature: "(InGameUILayoutComponent text, float softness) : void"
			},
		]
	},
	"SetTextFrameShadowWidth": {
		signatures: [
			{
				description: "Sets the width for a text frame's text shadow.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `width` the width of the shadow. A value of -1 will remove the shadow without removing the outline.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowwidth-2)",
				signature: "(InGameUILayoutComponent text, float width) : void"
			},
		]
	},
	"SetTextFrameShadowColor": {
		signatures: [
			{
				description: "- *Transform* `text` the text frame.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowcolor-2)",
				signature: "(InGameUILayoutComponent text, ColorRGBA color) : void"
			},
		]
	},
	"SetTextFrameShadowSoftness": {
		signatures: [
			{
				description: "Set the softness for a text frame's text shadow.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `softness` the softness of the shadow, scaled from 0-1.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowsoftness-2)",
				signature: "(InGameUILayoutComponent text, float softness) : void"
			},
		]
	},
	"SetTextFrameShadowDirection": {
		signatures: [
			{
				description: "Sets the direction for a text frame's text shadow. The coordinate's direction is based on the unit circle. The magnitude of the offset has a small effect on the shadow length.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *float* `x` the X coordinate.\n- *float* `y` the Y coordinate.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframeshadowdirection-3)",
				signature: "(InGameUILayoutComponent text, float x, float y) : void"
			},
		]
	},
	"GetInputFrameText": {
		signatures: [
			{
				description: "Returns the text entered into an input text frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getinputframetext-1)",
				signature: "(InGameUILayoutComponent text) : string"
			},
		]
	},
	"SetInputFrameText": {
		signatures: [
			{
				description: "Sets the text for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *string* `content` the text to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframetext-2)",
				signature: "(InGameUILayoutComponent text, string content) : void"
			},
		]
	},
	"SetInputFrameFontSize": {
		signatures: [
			{
				description: "Sets the text size for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *float* `size` the new text size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframefontsize-2)",
				signature: "(InGameUILayoutComponent text, float size) : void"
			},
		]
	},
	"SetInputFrameColor": {
		signatures: [
			{
				description: "Sets the text color for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframecolor-2)",
				signature: "(InGameUILayoutComponent text, ColorRGB color) : void"
			},
		]
	},
	"SetInputFrameWrapping": {
		signatures: [
			{
				description: "Sets text wrapping for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *bool* `enable` if true, enables text wrapping. This is false by default for newly created input frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframewrapping-2)",
				signature: "(InGameUILayoutComponent text, bool enable) : void"
			},
		]
	},
	"SetInputFramePlaceholder": {
		signatures: [
			{
				description: "Sets the text placeholder for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *string* `content` the text placeholder to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholder-2)",
				signature: "(InGameUILayoutComponent text, string content) : void"
			},
		]
	},
	"SetInputFramePlaceholderFontSize": {
		signatures: [
			{
				description: "Sets the placeholder text size for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *float* `size` the font size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholderfontsize-2)",
				signature: "(InGameUILayoutComponent text, float size) : void"
			},
		]
	},
	"SetInputFramePlaceholderColor": {
		signatures: [
			{
				description: "Sets the text placeholder's color for an input frame.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholdercolor-2)",
				signature: "(InGameUILayoutComponent text, ColorRGB color) : void"
			},
		]
	},
	"SetInputFramePlaceholderOutline": {
		signatures: [
			{
				description: "Sets the text placeholder's outline for an input frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *bool* `outline` if true, displays the outline. This is false by default for newly created input frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setinputframeplaceholderoutline-2)",
				signature: "(InGameUILayoutComponent text, bool outline) : void"
			},
		]
	},
	"SetUserInputTextFrameText": {
		signatures: [
			{
				description: "Sets the text for a user input text frame.\n\n- *InGameUILayoutComponent* `text` the user input text frame.\n- *string* `content` the text to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setuserinputtextframetext-2)",
				signature: "(InGameUILayoutComponent text, string content) : void"
			},
		]
	},
	"SetUserInputTextFrameFontSize": {
		signatures: [
			{
				description: "Sets the text size for a user input text frame.\n\n- *InGameUILayoutComponent* `text` the user input text frame.\n- *float* `size` the new text size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setuserinputtextframefontsize-2)",
				signature: "(InGameUILayoutComponent text, float size) : void"
			},
		]
	},
	"SetUserInputTextFrameColor": {
		signatures: [
			{
				description: "Sets the text color for a user input text frame.\n\n- *InGameUILayoutComponent* `text` the text frame.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setuserinputtextframecolor-2)",
				signature: "(InGameUILayoutComponent text, ColorRGB color) : void"
			},
		]
	},
	"SetUserInputTextFrameWrapping": {
		signatures: [
			{
				description: "Sets text wrapping for a user input text frame.\n\n- *InGameUILayoutComponent* `text` the input frame.\n- *bool* `enable` if true, enables text wrapping. This is false by default for newly created user input text frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setuserinputtextframewrapping-2)",
				signature: "(InGameUILayoutComponent text, bool enable) : void"
			},
		]
	},
	"SetFrameMinSize": {
		signatures: [
			{
				description: "Sets the minimum size of a frame. The frame will still expand to fit its content if larger than this minimum size.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `width` the new minimum width of the frame.\n- *float* `height` the new minimum height of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeminsize-3)",
				signature: "(InGameUILayoutComponent ui, float width, float height) : void"
			},
		]
	},
	"SetFrameMinWidth": {
		signatures: [
			{
				description: "Sets the minimum width of a frame. The frame will still expand to fit its content if larger than this minimum width.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `width` the new minimum width of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeminwidth-2)",
				signature: "(InGameUILayoutComponent ui, float width) : void"
			},
		]
	},
	"SetFrameMinHeight": {
		signatures: [
			{
				description: "Sets the minimum height of a frame. The frame will still expand to fit its content if larger than this minimum height.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `height` the new minimum height of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeminheight-2)",
				signature: "(InGameUILayoutComponent ui, float height) : void"
			},
		]
	},
	"SetFrameMaxSize": {
		signatures: [
			{
				description: "Sets the maximum size of a frame. The frame will still shrink to fit its content if smaller than this maximum size.\n\nCan be used with [CreateTextFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createtextframe-1) to create dynamic text scaling (with [SetTextFrameFontSizeMin](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsizemin-2)/[SetTextFrameFontSizeMax](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#settextframefontsizemax-2)).\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `width` the new maximum width of the frame.\n- *float* `height` the new maximum height of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemaxsize-3)",
				signature: "(InGameUILayoutComponent ui, float width, float height) : void"
			},
		]
	},
	"SetFrameMaxWidth": {
		signatures: [
			{
				description: "Sets the maximum width of a frame. The frame will still expand to fit its content if larger than this maximum width.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `width` the new maximum width of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemaxwidth-2)",
				signature: "(InGameUILayoutComponent ui, float width) : void"
			},
		]
	},
	"SetFrameMaxHeight": {
		signatures: [
			{
				description: "Sets the maximum height of a frame. The frame will still expand to fit its content if larger than this maximum height.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `height` the new maximum height of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemaxheight-2)",
				signature: "(InGameUILayoutComponent ui, float height) : void"
			},
		]
	},
	"SetFrameSize": {
		signatures: [
			{
				description: "Sets the absolute size of a frame that will not expand/shrink to accommodate its children.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `width` the new width of the frame.\n- *float* `height` the new height of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframesize-3)",
				signature: "(InGameUILayoutComponent ui, float width, float height) : void"
			},
		]
	},
	"CreateListFrame": {
		signatures: [
			{
				description: "Create a virtualized list frame.\n\n- *InGameUILayoutComponent* `parent` the parent frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createlistframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"SetListFrameItemName": {
		signatures: [
			{
				description: "Set the XML name for virtualized list's item.\n\n- *InGameUILayoutComponent* `ui` the virtualized list frame.\n- *string* `itemName` the XML name of item frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemname-2)",
				signature: "(InGameUILayoutComponent ui, string itemName) : void"
			},
		]
	},
	"SetListFrameItemSize": {
		signatures: [
			{
				description: "Set the size for virtualized list's item.\n\n- *InGameUILayoutComponent* `ui` the virtualized list frame.\n- *float* `itemSize` the size of item frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemsize-2)",
				signature: "(InGameUILayoutComponent ui, float itemSize) : void"
			},
		]
	},
	"SetListFrameItemDataCallback": {
		signatures: [
			{
				description: "Tell the virtual list how to create new items as well as how to bind the data to each item.\n\n- *InGameUILayoutComponent* `ui` the virtualized list frame.\n- *TypedCallback\\<InGameUILayoutComponent, int>* `itemDataCallback` the callback function to bind the data to item.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemdatacallback-2)",
				signature: "(InGameUILayoutComponent ui, TypedCallback<InGameUILayoutComponent, int> itemDataCallback) : void"
			},
		]
	},
	"SetListFrameItemCount": {
		signatures: [
			{
				description: "Tell the virtual list we have more items and the list to manage item creation if needed.\n\n- *InGameUILayoutComponent* `ui` the virtualized list frame.\n- *int* `itemCount` the count of list's items.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemcount-2)",
				signature: "(InGameUILayoutComponent ui, int itemCount) : void"
			},
		]
	},
	"RefreshListFrameItems": {
		signatures: [
			{
				description: "Refresh a range of list items when their underlying data has changed. The data callback registered with DCEI.[SetListFrameItemDataCallback](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setlistframeitemdatacallback-2)() will be called for each visible list item in the specified range to rebind data to UI.\n\n- *InGameUILayoutComponent* `ui` the virtual list frame to update.\n- *int* `startIndex` the index of the first item to be refreshed.\n- *int* `endIndex` the index of the last item to be refreshed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#refreshlistframeitems-3)",
				signature: "(InGameUILayoutComponent ui, int startIndex, int endIndex) : void"
			},
		]
	},
	"CreateSpineFrame": {
		signatures: [
			{
				description: "Creates a frame for Spine animations. See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d)\n\n- *InGameUILayoutComponent* `parent` the parent frame under which to create this frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createspineframe-1)",
				signature: "(InGameUILayoutComponent parent) : InGameUILayoutComponent"
			},
		]
	},
	"SetSpineFrameAsset": {
		signatures: [
			{
				description: "See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d)\n\n- *InGameUILayoutComponent* `ui` the Spine frame to set the asset on.\n- *string* `name` the name of the Spine asset to be used.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setspineframeasset-2)",
				signature: "(InGameUILayoutComponent ui, string name) : void"
			},
		]
	},
	"GetSpineFrameAnimations": {
		signatures: [
			{
				description: "See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d)\n\n- *InGameUILayoutComponent* `ui` the Spine frame to get the Spine animations from.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getspineframeanimations-1)",
				signature: "(InGameUILayoutComponent ui) : object"
			},
		]
	},
	"PlaySpineFrameAnimation": {
		signatures: [
			{
				description: "See [Spine animations](https://funovus.notion.site/Using-Spine-Animations-12292a90d9be4ea29a383e2f6d22577d)\n\n- *InGameUILayoutComponent* `ui` the Spine ui frame.\n- *string* `name` the name of the Spine animation.\n- *bool* `loop` loop the animation or not.\n- *int* `track` which track of the animation to play.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#playspineframeanimation-4)",
				signature: "(InGameUILayoutComponent ui, string name, bool loop = False, int track = 0) : void"
			},
		]
	},
	"SetFrameWidth": {
		signatures: [
			{
				description: "Sets the absolute width of a frame that will not expand/shrink to accommodate its children.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `width` the new width of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframewidth-2)",
				signature: "(InGameUILayoutComponent ui, float width) : void"
			},
		]
	},
	"SetFrameHeight": {
		signatures: [
			{
				description: "Sets the absolute height of a frame that will not expand/shrink to accommodate its children.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *float* `height` the new height of the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeheight-2)",
				signature: "(InGameUILayoutComponent ui, float height) : void"
			},
		]
	},
	"FlipFrameHorizontal": {
		signatures: [
			{
				description: "Flips the given UI frame and its children horizontally. Does not work on the root UI.\n\n- *InGameUILayoutComponent* `ui` the UI frame to flip.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#flipframehorizontal-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"FlipFrameVertical": {
		signatures: [
			{
				description: "Flips the given UI frame and its children vertically. Does not work on the root UI.\n\n- *InGameUILayoutComponent* `ui` the UI frame to flip.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#flipframevertical-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameMatchParent": {
		signatures: [
			{
				description: "Sets the dimensions of a UI frame to match that of its parent.\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *bool* `matchWidth` whether to set the frame's width to that of its parent.\n- *bool* `matchHeight` whether to set the frame's height to that of its parent.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframematchparent-3)",
				signature: "(InGameUILayoutComponent ui, bool matchWidth, bool matchHeight) : void"
			},
		]
	},
	"SetFramePadding": {
		signatures: [
			{
				description: "Sets the padding for a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set padding for.\n- *float* `padding` the padding to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepadding-2)",
				signature: "(InGameUILayoutComponent ui, float padding) : void"
			},
		]
	},
	"SetFramePaddingLeft": {
		signatures: [
			{
				description: "Sets the left padding for a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set left padding for.\n- *float* `padding` the left padding to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepaddingleft-2)",
				signature: "(InGameUILayoutComponent ui, float padding) : void"
			},
		]
	},
	"SetFramePaddingRight": {
		signatures: [
			{
				description: "Sets the right padding for a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set right padding for.\n- *float* `padding` the right padding to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepaddingright-2)",
				signature: "(InGameUILayoutComponent ui, float padding) : void"
			},
		]
	},
	"SetFramePaddingTop": {
		signatures: [
			{
				description: "Sets the top padding for a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set top padding for.\n- *float* `padding` the top padding to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepaddingtop-2)",
				signature: "(InGameUILayoutComponent ui, float padding) : void"
			},
		]
	},
	"SetFramePaddingBottom": {
		signatures: [
			{
				description: "Sets the bottom padding for a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set bottom padding for.\n- *float* `padding` the bottom padding to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepaddingbottom-2)",
				signature: "(InGameUILayoutComponent ui, float padding) : void"
			},
		]
	},
	"SetFrameSpacing": {
		signatures: [
			{
				description: "Sets the spacing between child elements for a UI frame. This function affects frames that automatically position their children, such as stacks or scrolls. For scrolls, this function should be called on the content frame returned by [GetScrollFrameContent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscrollframecontent-1).\n\n- *InGameUILayoutComponent* `ui` the frame to set spacing for.\n- *float* `spacing` the spacing to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframespacing-2)",
				signature: "(InGameUILayoutComponent ui, float spacing) : void"
			},
		]
	},
	"SetFrameLeftAlignment": {
		signatures: [
			{
				description: "Sets left alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeleftalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameRightAlignment": {
		signatures: [
			{
				description: "Sets right alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframerightalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameTopAlignment": {
		signatures: [
			{
				description: "Sets top alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetopalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameBottomAlignment": {
		signatures: [
			{
				description: "Sets bottom alignment for a UI frame's contents.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframebottomalignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameCenterAlignment": {
		signatures: [
			{
				description: "Sets center alignment for a UI frame's contents. This is the default alignment.\n\n- *InGameUILayoutComponent* `ui` the frame to set content alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframecenteralignment-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameLeftAlignmentInParent": {
		signatures: [
			{
				description: "Aligns a frame to its parent's left edge.\n\nNote that setting left/right alignment won't work for frames that have their horizontal alignment determined by another source (ex, the children frames of an HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeleftalignmentinparent-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameRightAlignmentInParent": {
		signatures: [
			{
				description: "Aligns a frame to its parent's right edge.\n\nNote that setting left/right alignment won't work for frames that have their horizontal alignment determined by another source (ex, the children frames of a HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframerightalignmentinparent-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameTopAlignmentInParent": {
		signatures: [
			{
				description: "Aligns a frame to its parent's top edge.\n\nNote that setting top/bottom alignment won't work for frames that have their vertical alignment determined by another source (ex, the children frames of a VStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetopalignmentinparent-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameBottomAlignmentInParent": {
		signatures: [
			{
				description: "Aligns a frame to its parent's bottom edge.\n\nNote that setting top/bottom alignment won't work for frames that have their vertical alignment determined by another source (ex, the children frames of a VStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframebottomalignmentinparent-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameCenterAlignmentInParent": {
		signatures: [
			{
				description: "Aligns a frame to its parent's center. This is the default alignment.\n\nNote that setting top/bottom alignment won't work for frames that have their alignment determined by another source (ex, the children frames of a VStack or HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set alignment for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframecenteralignmentinparent-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameHorizontalOffsetInParent": {
		signatures: [
			{
				description: "Offsets a frame horizontally from its starting position in its parent.\n\nNote that setting an offset won't work for frames that have their alignment determined by another source (ex, the children frames of a VStack or HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set the offset for.\n- *float* `value` the offset distance.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframehorizontaloffsetinparent-2)",
				signature: "(InGameUILayoutComponent ui, float value) : void"
			},
		]
	},
	"SetFrameVerticalOffsetInParent": {
		signatures: [
			{
				description: "Offsets a frame vertically from its starting position in its parent.\n\nNote that setting an offset won't work for frames that have their alignment determined by another source (ex, the children frames of a VStack or HStack). This can be worked around by wrapping the frame you want to reposition inside a blank frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set the offset for.\n- *float* `value` the offset distance.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeverticaloffsetinparent-2)",
				signature: "(InGameUILayoutComponent ui, float value) : void"
			},
		]
	},
	"SetFrameReverseChildrenFrameOrder": {
		signatures: [
			{
				description: "Reverses the order in which frames are added to a [CreateHStackFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhstackframe-1), [CreateVStackFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvstackframe-1), [CreateHScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1), or [CreateVScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1). This will affect newly added child frames as well as any child frames that have already been added.\n\n- *InGameUILayoutComponent* `ui` the frame to reverse the layout order for.\n- *bool* `value` if true, reverses the layout order.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframereversechildrenframeorder-2)",
				signature: "(InGameUILayoutComponent ui, bool value) : void"
			},
		]
	},
	"IsFrameUsingFlexLayout": {
		signatures: [
			{
				description: "Check if a given frame is using Flex layouts. For the difference between Flex and Legacy layouts, see [this notion guide.](https://www.notion.so/funovus/Using-Flex-Layouts-7b4216836da249dfa568c99c23b704fd?pvs=4)\n\n- *InGameUILayoutComponent* `ui` the frame to check if using flex layout rather than legacy layout.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#isframeusingflexlayout-1)",
				signature: "(InGameUILayoutComponent ui) : bool"
			},
		]
	},
	"SetFrameFlexDirection": {
		signatures: [
			{
				description: "Sets the frames Flex Direction. Flex direction controls the direction in which children of a node are laid out. \n\nFor more info (including visualizations of each property) see [flexDirection XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexdirection)\n\n- *InGameUILayoutComponent* `ui` the frame to set the flexDirection attribute on.\n- *[YogaFlexDirection](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogaflexdirection)* `direction` the flexDirection value to set. Values: `column, column-reverse, row, row-reverse`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeflexdirection-2)",
				signature: "(InGameUILayoutComponent ui, YogaFlexDirection direction) : void"
			},
		]
	},
	"SetFrameFlexGrow": {
		signatures: [
			{
				description: "flexGrow describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flexGrow values specified by its children.\n\nFor more info (including visualizations of each property) see [flexGrow XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexgrow)\n\n- *InGameUILayoutComponent* `ui` the frame to set the flexGrow attribute on.\n- *float* `grow` what percent of availible space the frame can grow to fit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeflexgrow-2)",
				signature: "(InGameUILayoutComponent ui, float grow) : void"
			},
		]
	},
	"SetFrameFlexShrink": {
		signatures: [
			{
				description: "`flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. \n\nFor more info (including visualizations of each property) see [flexShrink XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexshrink)\n\n- *InGameUILayoutComponent* `ui` the frame to set the flexShrink attribute on.\n- *float* `shrink` what percent of availible space the frame can grow to fit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeflexshrink-2)",
				signature: "(InGameUILayoutComponent ui, float shrink) : void"
			},
		]
	},
	"SetFrameFlexWrap": {
		signatures: [
			{
				description: "By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.\n\nFor more info (including visualizations of each property) see [flexWrap XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#flexwrap)\n\n- *InGameUILayoutComponent* `ui` the frame to set the flexWrap attribute on.\n- *[YogaWrap](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogawrap)* `wrap` the type of wrapping to use: `wrap, wrap-reverse, no-wrap`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeflexwrap-2)",
				signature: "(InGameUILayoutComponent ui, YogaWrap wrap) : void"
			},
		]
	},
	"SetFrameJustifyContent": {
		signatures: [
			{
				description: "This defines the alignment along the main axis. For more info (including visualizations of each property) see [justifyContent XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#justifycontent)\n\n- *InGameUILayoutComponent* `ui` the frame to set the justifyContent attribute on.\n- *[YogaJustify](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogajustify)* `justifyContent` the type of justification to use: `center, flex-end, flex-start, flex-start, space-around, space-between`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframejustifycontent-2)",
				signature: "(InGameUILayoutComponent ui, YogaJustify justifyContent) : void"
			},
		]
	},
	"SetFrameAlignItems": {
		signatures: [
			{
				description: "This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). \n\nFor more info (including visualizations of each property) see [alignItems XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#alignitems)\n\n- *InGameUILayoutComponent* `ui` the frame to set the alignItems attribute on.\n- *[YogaAlign](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogaalign)* `alignItems` the type of justification to use: `baseline, center, flex-end, flex-start, stretch`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframealignitems-2)",
				signature: "(InGameUILayoutComponent ui, YogaAlign alignItems) : void"
			},
		]
	},
	"SetFrameAlignContent": {
		signatures: [
			{
				description: "This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.\n\nNote: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.\n\nFor more info (including visualizations of each property) see [alignContent XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#aligncontent)\n\n- *InGameUILayoutComponent* `ui` the frame to set the alignContent attribute on.\n- *[YogaAlign](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogaalign)* `alignContent` the type of justification to use: `baseline, center, flex-end, flex-start, stretch`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframealigncontent-2)",
				signature: "(InGameUILayoutComponent ui, YogaAlign alignContent) : void"
			},
		]
	},
	"SetFrameAlignSelf": {
		signatures: [
			{
				description: "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.\n\nFor more info (including visualizations of each property) see [alignSelf XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#alignself)\n\n- *InGameUILayoutComponent* `ui` the frame to set the alignSelf attribute on.\n- *[YogaAlign](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogaalign)* `alignSelf` the type of justification to use: `baseline, center, flex-end, flex-start, stretch`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframealignself-2)",
				signature: "(InGameUILayoutComponent ui, YogaAlign alignSelf) : void"
			},
		]
	},
	"SetFrameMarginLeft": {
		signatures: [
			{
				description: "Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.\n\nFor more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)\n\n- *InGameUILayoutComponent* `ui` the frame to set the marginLeft attribute on.\n- *float* `marginLeft` the amount of left margin\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemarginleft-2)",
				signature: "(InGameUILayoutComponent ui, float marginLeft) : void"
			},
		]
	},
	"SetFrameMarginRight": {
		signatures: [
			{
				description: "Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.\n\nFor more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)\n\n- *InGameUILayoutComponent* `ui` the frame to set the marginRight attribute on.\n- *float* `marginRight` the amount of right margin\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemarginright-2)",
				signature: "(InGameUILayoutComponent ui, float marginRight) : void"
			},
		]
	},
	"SetFrameMarginTop": {
		signatures: [
			{
				description: "Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.\n\nFor more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)\n\n- *InGameUILayoutComponent* `ui` the frame to set the marginTop attribute on.\n- *float* `marginTop` the amount of top margin\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemargintop-2)",
				signature: "(InGameUILayoutComponent ui, float marginTop) : void"
			},
		]
	},
	"SetFrameMarginBottom": {
		signatures: [
			{
				description: "Margin effects the spacing around the outside of a node. A node with margin will offset itself from the bounds of its parent but also offset the location of any siblings. The margin of a node contributes to the total size of its parent if the parent is auto sized.\n\nFor more info (including visualizations of each property) see [margin XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#margins)\n\n- *InGameUILayoutComponent* `ui` the frame to set the marginBottom attribute on.\n- *float* `marginBottom` the amount of bottom margin\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframemarginbottom-2)",
				signature: "(InGameUILayoutComponent ui, float marginBottom) : void"
			},
		]
	},
	"SetFrameWidthPercent": {
		signatures: [
			{
				description: "This defines a frame's width as a percentage of it's parent's width. For more info see [widthPercent XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#widthpercent)\n\n- *InGameUILayoutComponent* `ui` the frame to set the widthPercent attribute on.\n- *float* `widthPercent` a frame's width as a percentage of it's parent's width\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframewidthpercent-2)",
				signature: "(InGameUILayoutComponent ui, float widthPercent) : void"
			},
		]
	},
	"SetFrameHeightPercent": {
		signatures: [
			{
				description: "This defines a frame's height as a percentage of it's parent's height. For more info see [heightPercent XML attributes.](https://wiki.funovus.com/master/Ui-FlexLayouts#heightpercent)\n\n- *InGameUILayoutComponent* `ui` the frame to set the heightPercent attribute on.\n- *float* `heightPercent` a frame's height as a percentage of it's parent's height\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeheightpercent-2)",
				signature: "(InGameUILayoutComponent ui, float heightPercent) : void"
			},
		]
	},
	"SetFramePosition": {
		signatures: [
			{
				description: "Position `Relative` or `Absolute`.\n\n`Relative`  By default an element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements.\n\n`Absolute` When positioned absolutely an element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values.\n\nFor more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)\n\n- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.\n- *[YogaPositionType](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#yogapositiontype)* `position` position `Relative` or `Absolute`.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeposition-2)",
				signature: "(InGameUILayoutComponent ui, YogaPositionType position) : void"
			},
		]
	},
	"SetFrameLeft": {
		signatures: [
			{
				description: "Offset position left, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.\n\nFor more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)\n\n- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.\n- *float* `left` left position offset amount\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeleft-2)",
				signature: "(InGameUILayoutComponent ui, float left) : void"
			},
		]
	},
	"SetFrameRight": {
		signatures: [
			{
				description: "Offset position right, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.\n\nFor more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)\n\n- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.\n- *float* `right` right position offset amount\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeright-2)",
				signature: "(InGameUILayoutComponent ui, float right) : void"
			},
		]
	},
	"SetFrameTop": {
		signatures: [
			{
				description: "Offset position top, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.\n\nFor more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)\n\n- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.\n- *float* `top` top position offset amount\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetop-2)",
				signature: "(InGameUILayoutComponent ui, float top) : void"
			},
		]
	},
	"SetFrameBottom": {
		signatures: [
			{
				description: "Offset position bottom, relative to the frames normal position if the position type is `relative`. If position type is `absolute`, this is the offset from the center of the parent frame rather than from this frames normal position in the flow of the frame.\n\nFor more info see [position XML attribute.](https://wiki.funovus.com/master/Ui-FlexLayouts#position)\n\n- *InGameUILayoutComponent* `ui` the frame to set the position attribute on.\n- *float* `bottom` bottom position offset amount\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframebottom-2)",
				signature: "(InGameUILayoutComponent ui, float bottom) : void"
			},
		]
	},
	"SetFrameAspectRatio": {
		signatures: [
			{
				description: "Set a Flex frame's aspect ratio. \n\nFor more info see [aspectRatio XML attribute.](https://wiki.funovus.com/master/Ui-XML-CommonAttributes#aspectratio)\n\n- *InGameUILayoutComponent* `ui` the frame to set the aspect ratio attribute on.\n- *float* `aspectRatio` aspectRatio amount\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeaspectratio-2)",
				signature: "(InGameUILayoutComponent ui, float aspectRatio) : void"
			},
		]
	},
	"SetFrameImage": {
		signatures: [
			{
				description: "Sets the background image of a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image for.\n- *string* `name` the image name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimage-2)",
				signature: "(InGameUILayoutComponent ui, string name) : void"
			},
		]
	},
	"SetFrameImageExpression": {
		signatures: [
			{
				description: "Sets the background image of a frame to the given expression. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2). \n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image for.\n- *string* `expression` the expression.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimageexpression-2)",
				signature: "(InGameUILayoutComponent ui, string expression) : void"
			},
		]
	},
	"SetFrameImageGrayScaleExpression": {
		signatures: [
			{
				description: "Sets the background image of a frame to the given expression in gray scale. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2).\n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image for.\n- *string* `expression` the expression. The expression should evaluate out to a `0` or `1`, corresponding to a `false` or `true`, respectively. Does not accept `true` or `false` by itself.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagegrayscaleexpression-2)",
				signature: "(InGameUILayoutComponent ui, string expression) : void"
			},
		]
	},
	"SetButtonDefaultClickAnimationEnabled": {
		signatures: [
			{
				description: "Enable or disable a Button frame's default click animation. This is the animation that makes buttons bounce a little when click/tapped. \n\n- *InGameUILayoutComponent* `ui` the button frame to enable/disable the animation for.\n- *bool* `enable` enable animation with `true`, disable with `false`.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttondefaultclickanimationenabled-2)",
				signature: "(InGameUILayoutComponent ui, bool enable) : void"
			},
		]
	},
	"GetButtonDefaultClickAnimationEnabled": {
		signatures: [
			{
				description: "Get current state (enabled or disabled) of a Button frame's default click animation. This is the animation that makes buttons bounce a little when click/tapped. \n\n- *InGameUILayoutComponent* `ui` the button frame to get the enable/disabled on click animation stat for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getbuttondefaultclickanimationenabled-1)",
				signature: "(InGameUILayoutComponent ui) : bool"
			},
		]
	},
	"SetButtonFrameEnableExpression": {
		signatures: [
			{
				description: "Sets an expression to enable a button. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2).\n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the button to enable.\n- *string* `expression` the expression. The expression should evaluate out to a `0` or `1`, corresponding to a `false` or `true`, respectively. Does not accept `true` or `false` by itself.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframeenableexpression-2)",
				signature: "(InGameUILayoutComponent ui, string expression) : void"
			},
		]
	},
	"SetFrameImageTiled": {
		signatures: [
			{
				description: "Sets the tiling of the background image for a UI frame. If tiling is disabled, the image is stretched to fill the frame. You can adjust the tiling resolution with [SetFramePixelsPerUnitMultiplier](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepixelsperunitmultiplier-2).\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image for.\n- *bool* `setTiled` if true, enables background image tiling (with the original resolution of the background image). This is false by default for newly created frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagetiled-2)",
				signature: "(InGameUILayoutComponent ui, bool setTiled) : void"
			},
		]
	},
	"SetFramePixelsPerUnitMultiplier": {
		signatures: [
			{
				description: "Sets the pixels per unit multiplier for a UI frame. This multiplier is the ratio between screen units and image pixels. This can be used to adjust the tiling resolution of frames using [SetFrameImageTiled](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagetiled-2) and the edge/corner resolution of nineslice textures.\n\n- *InGameUILayoutComponent* `ui` the frame to set the multiplier for.\n- *float* `pixelsPerUnitMultiplier` the pixels per unit multiplier.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframepixelsperunitmultiplier-2)",
				signature: "(InGameUILayoutComponent ui, float pixelsPerUnitMultiplier) : void"
			},
		]
	},
	"SetFrameImageFillAmount": {
		signatures: [
			{
				description: "Sets the fill amount for the background image.\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image fill amount for.\n- *float* `fill` the fill amount (between 0 and 1).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamount-2)",
				signature: "(InGameUILayoutComponent ui, float fill) : void"
			},
		]
	},
	"GetFrameImageFillAmount": {
		signatures: [
			{
				description: "Returns the background image fill amount.\n\n- *InGameUILayoutComponent* `ui` the frame to get the background image fill amount of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframeimagefillamount-1)",
				signature: "(InGameUILayoutComponent ui) : float"
			},
		]
	},
	"SetFrameImageFillHorizontal": {
		signatures: [
			{
				description: "Sets the background image fill for a frame to be horizontal. This is the default fill direction.\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image fill direction for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillhorizontal-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameImageFillVertical": {
		signatures: [
			{
				description: "Sets the background image fill for a frame to be vertical. The default fill direction is horizontal.\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image fill direction for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillvertical-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameImageFillRadial": {
		signatures: [
			{
				description: "Sets the background image fill for a frame to be radial. This is useful for making circular progress bars. The default fill direction is horizontal.\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image fill direction for.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillradial-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetFrameImageFillOrigin": {
		signatures: [
			{
				description: "Sets the fill progress orientation of a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to modify.\n- *int* `origin` the fill mode to apply. Accepted values: `[0, 1] for horizontal or vertical fills ([left, right] and [bottom, top])` `[0, 1, 2, 3] for radial fills ([bottom, right, top, left])`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillorigin-2)",
				signature: "(InGameUILayoutComponent ui, int origin) : void"
			},
		]
	},
	"SetFrameImageFillAmountExpression": {
		signatures: [
			{
				description: "Sets the fill amount for the background image. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2).\n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image fill amount for.\n- *string* `expression` an expression for the fill amount (between 0 and 1).\n- *bool* `inverse` if true, inverts the fill amount (does 1-expression).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagefillamountexpression-3)",
				signature: "(InGameUILayoutComponent ui, string expression, bool inverse = False) : void"
			},
		]
	},
	"SetFrameWidthExpression": {
		signatures: [
			{
				description: "Sets the width of a UI frame. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2).\n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the frame to set the width for.\n- *string* `expression` an expression for the width.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframewidthexpression-2)",
				signature: "(InGameUILayoutComponent ui, string expression) : void"
			},
		]
	},
	"SetFrameHeightExpression": {
		signatures: [
			{
				description: "Sets the height of a UI frame. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2).\n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the frame to set the height for.\n- *string* `expression` an expression for the height.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeheightexpression-2)",
				signature: "(InGameUILayoutComponent ui, string expression) : void"
			},
		]
	},
	"SetFrameImageColor": {
		signatures: [
			{
				description: "Applies a tint color to the frame using RGBA values (valid values are between 0 and 1). Note that frames without background images can be tinted a solid color. Alpha 1 is completely opaque, alpha 0 is completely transparent.\n\n- *InGameUILayoutComponent* `ui` the frame to tint.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `color` the RGBA values for the line.  Also accepts hex codes, such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolor-2)",
				signature: "(InGameUILayoutComponent ui, ColorRGBA color) : void"
			},
		]
	},
	"SetFrameImageColorExpression": {
		signatures: [
			{
				description: "Applies a tint color to the frame using RGBA values (valid values are between 0 and 1). Note that frames without background images can be tinted a solid color. Alpha 1 is completely opaque, alpha 0 is completely transparent. Expressions use data bound by [BindLuaTable](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2) or [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2).\n\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *InGameUILayoutComponent* `ui` the frame to tint.\n- *string* `r` an expression for the red value of the tint color (between 0 and 1).\n- *string* `g` an expression for the green value of the tint color (between 0 and 1).\n- *string* `b` an expression for the blue value of the tint color (between 0 and 1).\n- *string* `a` an expression for the alpha value of the tint color (between 0 and 1).\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolorexpression-5)",
				signature: "(InGameUILayoutComponent ui, string r, string g, string b, string a) : void"
			},
		]
	},
	"SetFrameImageGrayScale": {
		signatures: [
			{
				description: "Sets if the background image is rendered in gray scale for a UI frame.\n\n- *InGameUILayoutComponent* `ui` the frame to set the background image gray scale for.\n- *bool* `isGrayScale` if true, renders the background image in gray scale. The default value is false for newly created frames.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagegrayscale-2)",
				signature: "(InGameUILayoutComponent ui, bool isGrayScale) : void"
			},
		]
	},
	"SetFrameTooltipText": {
		signatures: [
			{
				description: "Sets the tooltip text for a UI frame. Child frame tooltips will display over parent frame tooltips.\n\n- *InGameUILayoutComponent* `ui` the frame to set the tooltip text for.\n- *string* `text` the text of the tooltip.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptext-2)",
				signature: "(InGameUILayoutComponent ui, string text) : void"
			},
		]
	},
	"SetFrameTooltipOffset": {
		signatures: [
			{
				description: "Sets the tooltip offset from the cursor. This will affect all tooltips.\n\n- *int* `offset` the offset from the cursor. Negative numbers will cause the tooltip to flicker.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipoffset-1)",
				signature: "(int offset) : void"
			},
		]
	},
	"SetFrameTooltipStyle": {
		signatures: [
			{
				description: "Sets the tooltip style. This will affect all tooltips. By default, tooltips are displayed next to the cursor.\n\n- *int* `style` the style. A value of `0` will display the tooltip next to the cursor (default). A value of `1` will display the tooltip next to the frame.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipstyle-1)",
				signature: "(int style) : void"
			},
		]
	},
	"SetFrameTooltipPosition": {
		signatures: [
			{
				description: "Sets the tooltip position. This will affect all tooltips.\n\n- *int* `position` the position of the tooltip. A value of `0` will display the tooltip to the right of the frame. A value of `1` will display the tooltip at the top.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipposition-1)",
				signature: "(int position) : void"
			},
		]
	},
	"SetFrameTooltipImage": {
		signatures: [
			{
				description: "Sets a background image for tooltips. This will affect all tooltips.\n\n- *string* `name` the name of the background image.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipimage-1)",
				signature: "(string name) : void"
			},
		]
	},
	"SetFrameTooltipFontSize": {
		signatures: [
			{
				description: "Sets the tooltip font size. This will affect all tooltips.\n\n- *int* `size` the font size.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipfontsize-1)",
				signature: "(int size) : void"
			},
		]
	},
	"SetFrameTooltipPadding": {
		signatures: [
			{
				description: "Sets the tooltip padding. This will affect all tooltips.\n\n- *int* `left` the left padding.\n- *int* `right` the right padding.\n- *int* `top` the top padding.\n- *int* `bottom` the bottom padding.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltippadding-4)",
				signature: "(int left, int right, int top, int bottom) : void"
			},
		]
	},
	"SetFrameTooltipMaxWidth": {
		signatures: [
			{
				description: "Sets the tooltip max width. Tooltip text that exceeds this width will wrap. This will affect all tooltips.\n\n- *int* `width` the max width.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltipmaxwidth-1)",
				signature: "(int width) : void"
			},
		]
	},
	"SetFrameTooltipTextColor": {
		signatures: [
			{
				description: "Sets the tooltip text color. This will affect all tooltips.\n\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `color` the RGB values for the line. Also accepts hex values such as `\"#32a852\"`\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframetooltiptextcolor-1)",
				signature: "(ColorRGB color) : void"
			},
		]
	},
	"SetOnMouseEnterCallback": {
		signatures: [
			{
				description: "Register a callback to occur when the player's mouse hovers over a UI frame. \n\n- *InGameUILayoutComponent* `ui` the UI frame that will trigger the mouse enter callback.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonmouseentercallback-2)",
				signature: "(InGameUILayoutComponent ui, TypedCallback trigger) : void"
			},
		]
	},
	"SetOnMouseExitCallback": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonmouseexitcallback-2)",
				signature: "(InGameUILayoutComponent ui, TypedCallback trigger) : void"
			},
		]
	},
	"SetOnDownCallback": {
		signatures: [
			{
				description: "This event triggers when the given button is pressed down. This can feel more responsive than [SetOnUpCallback](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonupcallback-2).\n\n- *InGameUILayoutComponent* `ui` the button that triggers the event.\n- *object* `callback` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setondowncallback-2)",
				signature: "(InGameUILayoutComponent ui, object callback) : void"
			},
		]
	},
	"SetOnUpCallback": {
		signatures: [
			{
				description: "This event triggers when the given button press is released. This is functionally similar to [SetOnClickCallback](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonclickcallback-2) but the event will fire regardless of input position when the button is released.\n\nThis can be combined with [SetOnDownCallback](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setondowncallback-2) to make something happen when a button is held down.\n\n- *InGameUILayoutComponent* `ui` the button that triggers the event.\n- *object* `callback` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonupcallback-2)",
				signature: "(InGameUILayoutComponent ui, object callback) : void"
			},
		]
	},
	"SetOnClickCallback": {
		signatures: [
			{
				description: "This event triggers when the specified UI button frame is clicked. This is functionally similar to [DCEI.SetOnUpCallback()](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setonupcallback-2) with one key difference--this event will only fire if the input position is still over the button when released.\n\n- *InGameUILayoutComponent* `ui` the button that triggers the event.\n- *object* `callback` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonclickcallback-2)",
				signature: "(InGameUILayoutComponent ui, object callback) : void"
			},
		]
	},
	"SetOnClickOutsideCallback": {
		signatures: [
			{
				description: "Registers a callback to run when a click/touch happens outside of the specified UI frame while the frame is active. Unlike DCEI.[SetOnClickCallback](https://wiki.funovus.com/development/void-SetOnClickCallbackTransform-ui-object-callback)(), this API works on any frame type. You can enable \"Custom UI Inspector\" in the in-game dev panel to check what UI frames are under the current mouse position to better understand what's considered outside of a frame by the engine.\n\n- *InGameUILayoutComponent* `ui` the ui that triggers the event.\n- *object* `callback` the callback function that is called when the event is triggered.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setonclickoutsidecallback-2)",
				signature: "(InGameUILayoutComponent ui, object callback) : void"
			},
		]
	},
	"HasUserInput": {
		signatures: [
			{
				description: "Returns true if the current frame has user input.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Input#hasuserinput-0)",
				signature: "() : bool"
			},
		]
	},
	"SetButtonFrameClickSound": {
		signatures: [
			{
				description: "Sets the click sound for the given button.\n\n- *InGameUILayoutComponent* `ui` the button.\n- *string* `path` the sound file.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframeclicksound-2)",
				signature: "(InGameUILayoutComponent ui, string path) : void"
			},
		]
	},
	"SetButtonFrameEnable": {
		signatures: [
			{
				description: "Enables or disables a button. Disabled buttons don't accept mouse input and have their background image tinted darker unless given a [SetButtonFrameDisabledImage](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframedisabledimage-2).\n\n- *InGameUILayoutComponent* `ui` the button frame.\n- *bool* `enable` if true, enables the button. This is true by default for newly created buttons.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframeenable-2)",
				signature: "(InGameUILayoutComponent ui, bool enable) : void"
			},
		]
	},
	"SetButtonFrameDisabledImage": {
		signatures: [
			{
				description: "Sets the background image for a button while it is disabled.\n\n- *InGameUILayoutComponent* `ui` the button frame.\n- *string* `name` the name of the background image.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setbuttonframedisabledimage-2)",
				signature: "(InGameUILayoutComponent ui, string name) : void"
			},
		]
	},
	"SetFrameRotation": {
		signatures: [
			{
				description: "Sets the rotation for a UI frame and its children.\n\n- *InGameUILayoutComponent* `ui` the UI frame to rotate.\n- *float* `degrees` the degrees to rotate counterclockwise. Negative values will cause clockwise rotation.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframerotation-2)",
				signature: "(InGameUILayoutComponent ui, float degrees) : void"
			},
		]
	},
	"SetFrameRotation3D": {
		signatures: [
			{
				description: "Rotates a frame and its children in 3D space. ```DCEI.SetFrameRotation3D(ui, 0, 180, 0)``` will flip an image horizontally.\n\n- *InGameUILayoutComponent* `ui` the frame to rotate.\n- *float* `x` the angle to rotate the frame in the \"x\" plane.\n- *float* `y` the angle to rotate the frame in the \"y\" plane.\n- *float* `z` the angle to rotate the frame in the \"z\" plane.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframerotation3d-4)",
				signature: "(InGameUILayoutComponent ui, float x, float y, float z) : void"
			},
		]
	},
	"BindUnitData": {
		signatures: [
			{
				description: "Bind a given unit to a key, allowing the unit's attributes to be accessed by expressions. \n* [Accessible data bound values.](https://wiki.funovus.com/development/Data-Binding)\n* For more information, see the [notion guide on Data Binding.](https://funovus.notion.site/Data-Binding-Text-Expressions-3cf526b1dccb413c89b9e4d66370c2fa)\n\n- *string* `name` the string to bind the unit to.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit.. Unit attributes list:\n\n```\nunit.Info.Icon\nunit.Info.Name\nunit.Health.Current\nunit.Health.Max\nunit.Health.Percentage\nunit.Health.Fraction\nunit.Health.Regeneration\nunit.Shield.Current\nunit.Shield.Max\nunit.Shield.Percentage\nunit.Shield.Fraction\nunit.Shield.Regeneration\nunit.Mana.Current\nunit.Mana.Max\nunit.Mana.Percentage\nunit.Mana.Fraction\nunit.Mana.Regeneration\nunit.Ability.ability_name.CooldownRatio\nunit.Ability.ability_name.MaxCharge\nunit.Ability.ability_name.ChargeCount\nunit.Expression.some_named_expression\n```\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2)",
				signature: "(string name, unit unit) : void"
			},
		]
	},
	"BindLuaTable": {
		signatures: [
			{
				description: "Binds a lua table to a string, allowing the data inside to be accessed by expressions. Updating the bound table values will update any UI that reference these values in an expression. Some expressions evaluate `1` and `0` as `true` and `false`, respectively. See also [BindUnitData](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindunitdata-2)\n\n- *string* `name` the string to bind the data to.\n- *object* `value` the lua table.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#bindluatable-2)",
				signature: "(string name, object value) : void"
			},
		]
	},
	"IsFrameActive": {
		signatures: [
			{
				description: "Returns whether the given UI frame is active.\n\n- *InGameUILayoutComponent* `ui` the UI frame to return the status of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#isframeactive-1)",
				signature: "(InGameUILayoutComponent ui) : bool"
			},
		]
	},
	"SetFrameActive": {
		signatures: [
			{
				description: "Sets whether the given UI frame and its children are active. Inactive frames are not displayed.\n\nCreating new UI frames under inactive parent frames can cause issues and should be avoided. You can use [UpdateFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#updateframe-2) to safely create new frames under inactive parents.\n\n- *InGameUILayoutComponent* `ui` the UI frame to set the status of.\n- *bool* `value` if true, sets the frame to active. Newly created frames are active by default.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeactive-2)",
				signature: "(InGameUILayoutComponent ui, bool value) : void"
			},
		]
	},
	"SetFrameBlockInput": {
		signatures: [
			{
				description: "Makes a UI frame block all input. Requires a [SetFrameImage](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimage-2) to be set (but it can be made [SetFrameImageColor](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeimagecolor-2)).\n\n- *InGameUILayoutComponent* `ui` the frame to adjust.\n- *bool* `value` whether or not the frame blocks input.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeblockinput-2)",
				signature: "(InGameUILayoutComponent ui, bool value) : void"
			},
		]
	},
	"AttachFrameToUnit": {
		signatures: [
			{
				description: "Attaches a UI frame to a unit, useful for creating custom health and status bars.\n\n- *InGameUILayoutComponent* `ui` the frame to attach.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the frame to.\n- *[UnitLabelOptions](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unitlabeloptions)* `options` [accepted values](https://wiki.funovus.com/development/UnitLabelOptions)\n- *bool* `useCurrentUiRoot` (optional) when true, uses the existing UI root for the attached UI layer. Otherwise the attached UI will be rendered beneath UI root.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#attachframetounit-4)",
				signature: "(InGameUILayoutComponent ui, unit unit, UnitLabelOptions options, bool useCurrentUiRoot = False) : void"
			},
		]
	},
	"SetMouseCursorFrame": {
		signatures: [
			{
				description: "Using an UI to replace current cursor image\n\n- *InGameUILayoutComponent* `ui` the frame to attach.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setmousecursorframe-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetMouseCursorFrameForPlayer": {
		signatures: [
			{
				description: "Set cursor image only for a specific player. Only useful in multiplayer.\n\n- *int* `player` player id\n- *InGameUILayoutComponent* `ui` the frame to attach.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setmousecursorframeforplayer-2)",
				signature: "(int player, InGameUILayoutComponent ui) : void"
			},
		]
	},
	"AttachOffscreenUnitIndicatorFrame": {
		signatures: [
			{
				description: "Attaches a UI frame as an offscreen indicator to a unit. This frame will only be visible if the related unit is off screen for the viewing player.\n\n- *InGameUILayoutComponent* `ui` the UI frame to use as an offscreen indicator.\n- *[unit](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#unit)* `unit` the unit to attach the indicator to.\n- *InGameUILayoutComponent* `rotatingPointerChildFrame` (optional) if set, this frame will rotate towards the direction of the offscreen unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#attachoffscreenunitindicatorframe-3)",
				signature: "(InGameUILayoutComponent ui, unit unit, InGameUILayoutComponent rotatingPointerChildFrame = null) : void"
			},
		]
	},
	"SetOffscreenUnitIndicatorFrameCanvasOffset": {
		signatures: [
			{
				description: "Adjusts the offset of the frame that has been attached using the AttachOffscreenUnitIndicatorFrame API.  \n\n- *InGameUILayoutComponent* `ui` the UI frame used as an offscreen indicator.\n- *[Float2](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2)* `offset` the offset distance from the screen.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setoffscreenunitindicatorframecanvasoffset-2)",
				signature: "(InGameUILayoutComponent ui, Float2 offset) : void"
			},
		]
	},
	"MoveFrameToTop": {
		signatures: [
			{
				description: "Moves a UI frame (and all of its parents) above all sibling UI frames.\n\n- *InGameUILayoutComponent* `ui` the UI frame to move to the top.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#moveframetotop-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"MoveFrameToBottom": {
		signatures: [
			{
				description: "Moves a UI frame (and all of its parents) below all sibling UI frames.\n\n- *InGameUILayoutComponent* `ui` the UI frame to move to the bottom.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#moveframetobottom-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseButtonFrame": {
		signatures: [
			{
				description: "Sets a button to be used as the game's pause button. Setting this will replace the default pause button in the top right corner (hiding the default UI).\n\n- *InGameUILayoutComponent* `ui` the button frame to set as the pause button.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausebuttonframe-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseMenuFrame": {
		signatures: [
			{
				description: "Sets a UI frame to be the pause menu, replacing the default pause menu UI and functionality.\n\n- *InGameUILayoutComponent* `ui` the UI frame to set as the pause menu.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframe-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"ShowPauseMenuFrame": {
		signatures: [
			{
				description: "Show current pause menu\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#showpausemenuframe-0)",
				signature: "() : void"
			},
		]
	},
	"HidePauseMenuFrame": {
		signatures: [
			{
				description: "Hide the pause menu frame.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#hidepausemenuframe-0)",
				signature: "() : void"
			},
		]
	},
	"SetPauseMenuCallback": {
		signatures: [
			{
				description: "This event is triggered when a custom pause menu is opened or closed. Setting this callback will overwrite the default pause menu functionality of stopping game time, so you will need to re-add that in your own implementation if desired.\n\n- *TypedCallback\\<bool>* `callback` the callback function that is called when the pause menu is opened or closed.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Input#setpausemenucallback-1)",
				signature: "(TypedCallback<bool> callback) : void"
			},
		]
	},
	"SetPauseMenuFrameMusicButton": {
		signatures: [
			{
				description: "Replace default music button to this UI.\n\n- *InGameUILayoutComponent* `ui` the target UI.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframemusicbutton-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseMenuFrameSoundButton": {
		signatures: [
			{
				description: "Replace default sound button to this UI.\n\n- *InGameUILayoutComponent* `ui` the target UI.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframesoundbutton-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseMenuFrameResumeButton": {
		signatures: [
			{
				description: "Sets the pause menu resume button. This button will exit the pause menu.\n\n- *InGameUILayoutComponent* `ui` the button to set as the resume button.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeresumebutton-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseMenuFrameQuitButton": {
		signatures: [
			{
				description: "Sets the pause menu quit button. This button will exit the game.\n\n- *InGameUILayoutComponent* `ui` the button to set as the quit button.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframequitbutton-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseMenuFrameRestartButton": {
		signatures: [
			{
				description: "Sets the pause menu restart button. This button will restart the game.\n\n- *InGameUILayoutComponent* `ui` the button to set as the restart button.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframerestartbutton-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SetPauseMenuFramePlayLevelButton": {
		signatures: [
			{
				description: "Sets the pause menu play level button. This button will play the specified level, exiting the current one.\n\n- *InGameUILayoutComponent* `ui` the button to set as the play level button.\n- *string* `path` the level's path.\n- *string* `displayName` the name to display for the level.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframeplaylevelbutton-3)",
				signature: "(InGameUILayoutComponent ui, string path, string displayName) : void"
			},
		]
	},
	"SetPauseMenuFrameSettingsButton": {
		signatures: [
			{
				description: "Sets the pause menu settings button. Note that the settings menu only appears in standalone builds--nothing will happen if this button is used in editor play mode.\n\n- *InGameUILayoutComponent* `ui` the button to set as the settings button.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setpausemenuframesettingsbutton-1)",
				signature: "(InGameUILayoutComponent ui) : void"
			},
		]
	},
	"SuppressPauseMenuOnApplicationPause": {
		signatures: [
			{
				description: "Suppresses the pause menu on application pause. This is necessary if your game features in-game ads, as the ads screen will pause the application and show the pause menu by default.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#suppresspausemenuonapplicationpause-0)",
				signature: "() : void"
			},
		]
	},
	"GetFrameCanvasPosition3D": {
		signatures: [
			{
				description: "Returns the [3D Position](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3) of a UI frame. Similar to other UI getters, you may need to wait a frame after any UI adjustments to get the latest position.\n\n- *InGameUILayoutComponent* `ui` the button to get the position of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getframecanvasposition3d-1)",
				signature: "(InGameUILayoutComponent ui) : Float3"
			},
		]
	},
	"GetCanvasPositionFromWorldPosition": {
		signatures: [
			{
				description: "Transfomr world position to UI position\n\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `worldPosition` the world position\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getcanvaspositionfromworldposition-1)",
				signature: "(Float3 worldPosition) : Float3"
			},
		]
	},
	"MoveFrameToCanvasPosition": {
		signatures: [
			{
				description: "Move a certain UI to new position\n\n- *InGameUILayoutComponent* `ui` the ui that moves\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `canvasPosition` the canvas position\n- *[Offset](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#offset)* `offset` final offset of the position\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#moveframetocanvasposition-3)",
				signature: "(InGameUILayoutComponent ui, Float3 canvasPosition, Offset offset = default) : void"
			},
		]
	},
	"SetFrameAnimationLoops": {
		signatures: [
			{
				description: "Plays a given UI animation a specified number of loops.\n\n- *Tweener* `tweener` the UI animation.\n- *int* `loops` the number of loops to play. If loops is set to -1 it will loop infinitely, until stopped with [StopFrameAnimationLoops](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2).\n- *[LoopType](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#looptype)* `loopType` the type of loop.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#setframeanimationloops-3)",
				signature: "(Tweener tweener, int loops, LoopType loopType) : void"
			},
		]
	},
	"StopFrameAnimationLoops": {
		signatures: [
			{
				description: "Stops an animation loop.\n\n- *Tweener* `tweener` the UI animation.\n- *bool* `waitAnimationComplete` if true, waits for the current animation to complete before stopping the loop.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#stopframeanimationloops-2)",
				signature: "(Tweener tweener, bool waitAnimationComplete = False) : void"
			},
		]
	},
	"AnimateFrameImageColor": {
		signatures: [
			{
				description: "Animates a UI frame's color.\n\n- *InGameUILayoutComponent* `ui` which frame to animate.\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `start` the initial RGBA values.  Also accepts hex codes, such as `\"#32a852\"`\n\n- *[ColorRGBA](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgba)* `end` the final RGBA values.  Also accepts hex codes, such as `\"#32a852\"`\n\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframeimagecolor-5)",
				signature: "(InGameUILayoutComponent ui, ColorRGBA start, ColorRGBA end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateTextFrameColor": {
		signatures: [
			{
				description: "Animates a UI text frame's text color.\n\n- *InGameUILayoutComponent* `ui` which frame to animate.\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `start` the initial RGB values. Also accepts hex values such as `\"#32a852\"`\n- *[ColorRGB](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#colorrgb)* `end` the final RGB values. Also accepts hex values such as `\"#32a852\"`\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animatetextframecolor-5)",
				signature: "(InGameUILayoutComponent ui, ColorRGB start, ColorRGB end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameScale": {
		signatures: [
			{
				description: "Animates a UI frame's scale over time.\n\n- *InGameUILayoutComponent* `ui` which frame to animate.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `start` the initial scale of the frame animation as `{x = 1, y = 1, z = 1}`.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `end` the final scale of the frame animation as `{x = 1, y = 1, z = 1}`.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframescale-5)",
				signature: "(InGameUILayoutComponent ui, Float3 start, Float3 end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameImageFillAmount": {
		signatures: [
			{
				description: "Animates a UI frame's background image fill. Requires a background image to be set, a background image color alone does not work.\n\n- *InGameUILayoutComponent* `ui` the UI frame to animate background image fill for.\n- *float* `start` the starting fill, from 0-1.\n- *float* `end` the ending fill, from 0-1.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframeimagefillamount-5)",
				signature: "(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameRotation": {
		signatures: [
			{
				description: "Animates a UI frame's rotation.\n\n- *InGameUILayoutComponent* `ui` the UI frame to animate the rotation for.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `start` the starting rotation.\n- *[Float3](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float3)* `end` the ending rotation.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframerotation-5)",
				signature: "(InGameUILayoutComponent ui, Float3 start, Float3 end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameAlpha": {
		signatures: [
			{
				description: "Animates a UI frame's alpha.\n\n- *InGameUILayoutComponent* `ui` the UI frame to animate the alpha for.\n- *float* `start` the starting alpha, from 0-1.\n- *float* `end` the ending alpha, from 0-1.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframealpha-5)",
				signature: "(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameHorizontalOffset": {
		signatures: [
			{
				description: "Animates a UI frame's horizontal offset.\n\n- *InGameUILayoutComponent* `ui` the UI frame to animate the horizontal offset for.\n- *float* `start` the starting offset.\n- *float* `end` the ending offset.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframehorizontaloffset-5)",
				signature: "(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameVerticalOffset": {
		signatures: [
			{
				description: "Animates a UI frame's vertical offset.\n\n- *InGameUILayoutComponent* `ui` the UI frame to animate the vertical offset for.\n- *float* `start` the starting offset.\n- *float* `end` the ending offset.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframeverticaloffset-5)",
				signature: "(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameScrollPosition": {
		signatures: [
			{
				description: "Animates a scroll frame's scroll position. This function is for [CreateHScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createhscrollframe-1) and [CreateVScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createvscrollframe-1).\n\n- *InGameUILayoutComponent* `ui` the scroll frame to animate the scroll position for.\n- *float* `start` the starting position.\n- *float* `end` the ending position.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframescrollposition-5)",
				signature: "(InGameUILayoutComponent ui, float start, float end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"AnimateFrameScrollPosition2D": {
		signatures: [
			{
				description: "Animates a scroll frame's scroll position. This function is for [CreateScrollFrame](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#createscrollframe-1).\n\n- *InGameUILayoutComponent* `ui` the scroll frame to animate the scroll position for.\n- *[Float2](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2)* `start` the starting position.\n- *[Float2](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#float2)* `end` the ending position.\n- *float* `duration` the duration of the animation.\n- *[Ease](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#ease)* `ease` the easing function to use for the animation. See https://easings.net/en for examples.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#animateframescrollposition2d-5)",
				signature: "(InGameUILayoutComponent ui, Float2 start, Float2 end, float duration, Ease ease) : Tweener"
			},
		]
	},
	"GetScreenSizeInPixel": {
		signatures: [
			{
				description: "Returns the screen size in pixels.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscreensizeinpixel-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetScreenSafeAreaOffsetInPixel": {
		signatures: [
			{
				description: "Returns the screen safe area offset in pixels.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscreensafeareaoffsetinpixel-0)",
				signature: "() : Float2"
			},
		]
	},
	"GetScreenSafeAreaSizeInPixel": {
		signatures: [
			{
				description: "Returns the screen safe area in pixels.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Custom-UI#getscreensafeareasizeinpixel-0)",
				signature: "() : Float2"
			},
		]
	},
	"IsAdsReady": {
		signatures: [
			{
				description: "Returns true if ads are ready.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#isadsready-0)",
				signature: "() : bool"
			},
		]
	},
	"SetEndgamePause": {
		signatures: [
			{
				description: "Toggles on and off pausing on victory/defeat. \n\n- *bool* `toPause` true to pause, false to not pause.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Game#setendgamepause-1)",
				signature: "(bool toPause) : void"
			},
		]
	},
	"ShowAds": {
		signatures: [
			{
				description: "Attempts to show ads in published mobile and web games. If successful, the first parameter of the callback function will return true. This can be simulated in [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n- *TypedCallback\\<bool>* `callback` this callback function is called once ShowAds() has resolved. If watching ads was successful, the first parameter of this callback function will return true.\n- *bool* `fallbackToUnityAds` if true, uses unity ads as a fallback.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#showads-2)",
				signature: "(TypedCallback<bool> callback, bool fallbackToUnityAds = False) : void"
			},
		]
	},
	"IsOnline": {
		signatures: [
			{
				description: "Returns true if the user currently has internet access. This can be simulated in [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#isonline-0)",
				signature: "() : bool"
			},
		]
	},
	"IsDev": {
		signatures: [
			{
				description: "Returns true if the user currently has developer access. This can be simulated in [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#isdev-0)",
				signature: "() : bool"
			},
		]
	},
	"ShowSettings": {
		signatures: [
			{
				description: "Show the game settings menu. Only works on mobile.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#showsettings-0)",
				signature: "() : void"
			},
		]
	},
	"GetSaveDataHistory": {
		signatures: [
			{
				description: "Attempts to fetch the player's save history. If successful, the callback will return with the save history as a table as its first parameter.\n\n- *int* `count` the number of save data instances to include in the callback table, with the most recent saves returned first. Max 10.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned save data instances.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getsavedatahistory-2)",
				signature: "(int count, TypedCallback<object> callback) : void"
			},
		]
	},
	"ResetSavedMapDataByIndex": {
		signatures: [
			{
				description: "Attempts to resets the saved map data at the given index.\n\n- *int* `index` the saved map data index to reset.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#resetsavedmapdatabyindex-1)",
				signature: "(int index) : void"
			},
		]
	},
	"GetMail": {
		signatures: [
			{
				description: "Attempts to fetch the player's mail. If successful, the callback will return with the save history as a table as its first parameter.\n\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned mail.\n- *bool* `forceFetch` if true, forces a fetch.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getmail-2)",
				signature: "(TypedCallback<object> callback, bool forceFetch) : void"
			},
		]
	},
	"DeleteMail": {
		signatures: [
			{
				description: "Attempts to delete the mail with the given ID.\n\n- *int* `instanceId` the ID of the mail to delete.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#deletemail-1)",
				signature: "(int instanceId) : void"
			},
		]
	},
	"ScheduleNotification": {
		signatures: [
			{
				description: "Schedules a notification and returns the ID of said notification. Only works on mobile.\n\n- *string* `title` the title of the notification.\n- *string* `body` the body text of the notification.\n- *double* `timeInSeconds` the duration to wait before triggering the notification.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#schedulenotification-3)",
				signature: "(string title, string body, double timeInSeconds) : int"
			},
		]
	},
	"CancelNotification": {
		signatures: [
			{
				description: "Cancels a notification from the given id. Only works on mobile.\n\n- *int* `id` the ID of the notification to cancel.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#cancelnotification-1)",
				signature: "(int id) : void"
			},
		]
	},
	"GetLastNotificationId": {
		signatures: [
			{
				description: "Returns the last notification ID. Only works on mobile.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getlastnotificationid-0)",
				signature: "() : object"
			},
		]
	},
	"ShowSendSMS": {
		signatures: [
			{
				description: "Shows the SMS invitation screen. Only works on mobile or web builds.\n\n- *int* `platform` the platform used to send the SMS. Use 1 for Android and 2 for iOS.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#showsendsms-1)",
				signature: "(int platform) : void"
			},
		]
	},
	"RestartApplication": {
		signatures: [
			{
				description: "Restarts the application. Only works on mobile.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#restartapplication-0)",
				signature: "() : void"
			},
		]
	},
	"QuitApplication": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#quitapplication-0)",
				signature: "() : void"
			},
		]
	},
	"SetResolution": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#setresolution-3)",
				signature: "(int width, int height, FullScreenMode mode) : void"
			},
		]
	},
	"GetCurrentResolution": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getcurrentresolution-0)",
				signature: "() : object"
			},
		]
	},
	"GetSupportedResolutions": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getsupportedresolutions-0)",
				signature: "() : object"
			},
		]
	},
	"OpenUrl": {
		signatures: [
			{
				description: "Opens a web url in the user's default browser.\n\n- *string* `url` the url to open.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#openurl-1)",
				signature: "(string url) : void"
			},
		]
	},
	"ShareText": {
		signatures: [
			{
				description: "Share some text with other applications. It's up to the other applications to decide how to use the shared text. \n\n- *string* `text` the text to share with other apps.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#sharetext-1)",
				signature: "(string text) : void"
			},
		]
	},
	"RequestAppStoreReview": {
		signatures: [
			{
				description: "Requests an app store review. Only works on iOS devices.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#requestappstorereview-0)",
				signature: "() : void"
			},
		]
	},
	"RequestInAppReview": {
		signatures: [
			{
				description: "Requests an in-app review. Only works on iOS devices.\n\n- *Action* `successCallback` the action that is taken on a successful review.\n- *Action* `failureCallback` the action that is taken on a failed review.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#requestinappreview-2)",
				signature: "(Action successCallback, Action failureCallback) : void"
			},
		]
	},
	"GetServerTime": {
		signatures: [
			{
				description: "Attempts to return the server time as the first parameter of a callback function. If it fails, returns 0. \n\n- *TypedCallback\\<int>* `callback` the callback function that handles the server time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getservertime-1)",
				signature: "(TypedCallback<int> callback) : void"
			},
		]
	},
	"GetServerData": {
		signatures: [
			{
				description: "Fetches from the server a list of key/value pairs configured by designers. Its primary use case is to let designers configure which client version is supported and inform users on old versions to upgrade. To configure these values, make changes to a configs git repo (ask engineers to gain access).\n\n- *TypedCallback\\<object>* `callback` the callback function that handles the returned list of key/value pairs.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getserverdata-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"CallServerFunction": {
		signatures: [
			{
				description: "This enables you to call a lua function stored on the server, passing it some data and getting data in return. The primary use case is to combat cheating and hacking especially with PvP game modes. This requires setting up the server script on the backend for an already published game project (like Wild Castle). Most likely, designers would not be utilizing this feature without first discussing the application with the engineering team.\n\n- *string* `name` the name of the Lua script on the server to call\n- *string* `request` json encoded data to pass to the server function\n- *TypedCallback\\<object>* `callback` the callback function that handles the returned data\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#callserverfunction-3)",
				signature: "(string name, string request, TypedCallback<object> callback) : void"
			},
		]
	},
	"GetUserId": {
		signatures: [
			{
				description: "Returns the player's internal user ID. This can be simulated in [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getuserid-0)",
				signature: "() : string"
			},
		]
	},
	"GetUserName": {
		signatures: [
			{
				description: "Returns the player's username.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getusername-0)",
				signature: "() : string"
			},
		]
	},
	"GetUserTag": {
		signatures: [
			{
				description: "Returns the player's tag.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getusertag-0)",
				signature: "() : string"
			},
		]
	},
	"GetReferralCode": {
		signatures: [
			{
				description: "Get the referral code of the current player. If successful, the callback will be called with a Lua table {code = string, count = number} where code is the referral code and count is the number of players who have used the referral code. The count value should be persisted in the save data. Rewards should be given the player when the server returned count value is larger than the one in save data.\n\n- *TypedCallback\\<object>* `callback` the callback function for getting the referral code. If successful, the callback will be called with a Lua table {code = string, count = number} where code is the referral code and count is the number of players who have used the referral code.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getreferralcode-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"UseReferralCode": {
		signatures: [
			{
				description: " Use a referral code from another player. If successful, the callback will be called with a Lua table {code = string, count = number}. The returned referral code should be persisted in save data along with the referral rewards.\n\n- *string* `code` the referral code from another player to use.\n- *TypedCallback\\<object>* `callback` the callback function for getting the referral code. If successful, the callback will be called with a Lua table {code = string, count = number} where code is the referral code and count is the number of players who have used the referral code.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#usereferralcode-2)",
				signature: "(string code, TypedCallback<object> callback) : void"
			},
		]
	},
	"GenerateDeepLink": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#generatedeeplink-2)",
				signature: "(string payload, TypedCallback<string> callback) : void"
			},
		]
	},
	"TriggerAddDeepLinkEvent": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#triggeradddeeplinkevent-1)",
				signature: "(TypedCallback<string> callback) : void"
			},
		]
	},
	"WildCastleCreateGuild": {
		signatures: [
			{
				description: "Create a new guild. Callback parameter returns the [guild](https://wiki.funovus.com/development/Guild-System).\n\n- *string* `guildName` name of the guild to create\n- *TypedCallback\\<object>* `callback` the callback function for when the guild is created\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlecreateguild-2)",
				signature: "(string guildName, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleLeaveGuild": {
		signatures: [
			{
				description: "Causes player to leave their guild. \n\n- *TypedCallback\\<object>* `callback` the callback function for when the guild is left\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleleaveguild-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePullGuild": {
		signatures: [
			{
				description: "Pulls player current guild info. Callback parameter returns the [guild](https://wiki.funovus.com/development/Guild-System).\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepullguild-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleSearchGuild": {
		signatures: [
			{
				description: "Searches for a guild; return list of possible results. Callback parameter returns table of [guilds](https://wiki.funovus.com/development/Guild-System).\n\n- *string* `guildNameOrTag` the search term to look for\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlesearchguild-2)",
				signature: "(string guildNameOrTag, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleApplyForGuild": {
		signatures: [
			{
				description: "Apply to join a certain guild, then guild leader will have to approve/deny. Callback returns true/false result. \n\n- *string* `guildId` guild to apply to\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleapplyforguild-2)",
				signature: "(string guildId, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePullGuildApplicants": {
		signatures: [
			{
				description: "Get list of players who have applied to your guild. Callback parameter returns table of [members](https://wiki.funovus.com/development/Guild-System#member).\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepullguildapplicants-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleResponseToJoinGuild": {
		signatures: [
			{
				description: "Accept/deny a request to join your guild from another user. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *string* `targetPlayerUuid` the player ID to accept/deny\n- *bool* `accept` true to accept, false to deny the guild join request\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleresponsetojoinguild-3)",
				signature: "(string targetPlayerUuid, bool accept, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleKickOutGuildMember": {
		signatures: [
			{
				description: "Kick a member out of the guild. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *string* `targetPlayerUuid` the player ID to kick\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlekickoutguildmember-2)",
				signature: "(string targetPlayerUuid, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleUpdateGuildSettings": {
		signatures: [
			{
				description: "Update your guild settings. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleupdateguildsettings-3)",
				signature: "(string announcement, int guildJoinType, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleUpdateGuildBadge": {
		signatures: [
			{
				description: "Update ther player's guild badge. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleupdateguildbadge-4)",
				signature: "(int background, int pattern, int icon, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleUpdatePlayerBadge": {
		signatures: [
			{
				description: "Update player badge. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleupdateplayerbadge-4)",
				signature: "(int background, int pattern, int icon, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePostContribution": {
		signatures: [
			{
				description: "Post player contribution to the guild board. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepostcontribution-2)",
				signature: "(int contribution, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePromoteGuildMember": {
		signatures: [
			{
				description: "Promote guild member to higher rank. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *string* `targetPlayerUuid` player's ID\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepromoteguildmember-2)",
				signature: "(string targetPlayerUuid, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleDemoteGuildMember": {
		signatures: [
			{
				description: "Demote rank of guild member. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *string* `targetPlayerUuid` player's ID\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastledemoteguildmember-2)",
				signature: "(string targetPlayerUuid, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleUpdateGuildSkill": {
		signatures: [
			{
				description: "Update skill ranking of specified guild. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *string* `key` the name of the guild to update\n- *int* `level` skill level to set the guild to\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleupdateguildskill-3)",
				signature: "(string key, int level, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePullMessages": {
		signatures: [
			{
				description: "Pull chat messages for the player's guild. Passes table of [messages](https://wiki.funovus.com/development/Guild-System#message) result to callback function.\n\n- *int* `limit` number of chat messages to pull\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepullmessages-2)",
				signature: "(int limit, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleClaimPuzzleChest": {
		signatures: [
			{
				description: "Claim a chest puzzle. Passes [inventory](https://wiki.funovus.com/development/Guild-System#inventory) result to callback function.\n\n- *Dictionary\\<string, int>* `items` possile puzzle items to unlock\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastleclaimpuzzlechest-2)",
				signature: "(Dictionary<string, int> items, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastleSendItemsToPlayer": {
		signatures: [
			{
				description: "Player send items to another player. Passes [inventory](https://wiki.funovus.com/development/Guild-System#inventory) result to callback function.\n\n- *string* `targetPlayerUuid` player's ID to send the items to\n- *Dictionary\\<string, int>* `items` items to send\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlesenditemstoplayer-3)",
				signature: "(string targetPlayerUuid, Dictionary<string, int> items, TypedCallback<object> callback) : void"
			},
		]
	},
	"RegisterWildCastleCreateGuildCallback": {
		signatures: [
			{
				description: "Register a callback to occur any time a guild is created. Passes [guild](https://wiki.funovus.com/development/Guild-System#guild) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#registerwildcastlecreateguildcallback-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"RegisterWildCastleClaimPuzzleChestCallback": {
		signatures: [
			{
				description: "Register a callback to occur any time a puzzle chest is claimed. Passes [inventory](https://wiki.funovus.com/development/Guild-System#inventory) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#registerwildcastleclaimpuzzlechestcallback-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"RegisterWildCastleSendItemsToPlayerCallback": {
		signatures: [
			{
				description: "Register a callback to occur any time a player sends items. Passes [inventory](https://wiki.funovus.com/development/Guild-System#inventory) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#registerwildcastlesenditemstoplayercallback-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"StandaloneGetItemInventory": {
		signatures: [
			{
				description: "Get quantity of a certain item type from players inventory. Passes [item](https://wiki.funovus.com/development/Guild-System#item) result to callback function.\n\n- *string* `key` the key for the type of item to fetch quantity from player's inventory\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#standalonegetiteminventory-2)",
				signature: "(string key, TypedCallback<object> callback) : void"
			},
		]
	},
	"StandaloneGetUserItemInventory": {
		signatures: [
			{
				description: "Get player's complete inventory. Passes [inventory](https://wiki.funovus.com/development/Guild-System#inventory) result to callback function.\n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#standalonegetuseriteminventory-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePostRequestItemMessage": {
		signatures: [
			{
				description: "Post a message to the players guild requesting an item. Passes table of [messages](https://wiki.funovus.com/development/Guild-System#message) result to callback function.\n\n- *string* `key` key for item type to request\n- *int* `value` number of items to ask for\n- *int* `limit` maximum amount to recieve\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepostrequestitemmessage-4)",
				signature: "(string key, int value, int limit, TypedCallback<object> callback) : void"
			},
		]
	},
	"WildCastlePostGuildChatMessage": {
		signatures: [
			{
				description: "Send a player message to the player's guild chat. \n\n- *string* `content` message content to send\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#wildcastlepostguildchatmessage-2)",
				signature: "(string content, TypedCallback<object> callback) : void"
			},
		]
	},
	"StandalonePostChatMessage": {
		signatures: [
			{
				description: "Send a player message directly to another player\n\n- *string* `targetPlayerUuid` player's ID to send the message to\n- *string* `content` message content to send\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#standalonepostchatmessage-3)",
				signature: "(string targetPlayerUuid, string content, TypedCallback<object> callback) : void"
			},
		]
	},
	"StandalonePullChatMessages": {
		signatures: [
			{
				description: "Pull player chat messages (direct messages) returned as a lua table of messages. \n\n- *string* `targetPlayerUuid` player's ID to get the messages for\n- *int* `limit` number of chat messages to pull\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#standalonepullchatmessages-3)",
				signature: "(string targetPlayerUuid, int limit, TypedCallback<object> callback) : void"
			},
		]
	},
	"StandaloneRegisterOnReceiveMessageCallback": {
		signatures: [
			{
				description: "Register a callback to run when the player recieves a message. \n\n- *TypedCallback\\<object>* `callback` the callback function for when the API is successful\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#standaloneregisteronreceivemessagecallback-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"GetLeaderBoardScore": {
		signatures: [
			{
				description: "Attempts to fetch the leaderboard score for the player as the first parameter in the callback function.\n\n- *string* `type` the leaderboard score to fetch.\n- *TypedCallback\\<object>* `callback` the callback function to handle the score.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getleaderboardscore-2)",
				signature: "(string type, TypedCallback<object> callback) : void"
			},
		]
	},
	"GetLeaderBoardScoreList": {
		signatures: [
			{
				description: "Attempts to fetch the leaderboard score list as the first parameter in the callback function, from the given parameters.\n\n- *string* `type` the leaderboard score to fetch.\n- *int* `skip` the number of entries to skip.\n- *int* `limit` the number of entries to return after the skip.\n- *TypedCallback\\<object>* `callback` the callback function to handle the score list.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getleaderboardscorelist-4)",
				signature: "(string type, int skip, int limit, TypedCallback<object> callback) : void"
			},
		]
	},
	"GetLeaderBoardSurroundingUsers": {
		signatures: [
			{
				description: "Attempts to fetch the leaderboard scores for the current player and the users surrounding them, as the first parameter of the callback function.\n\n- *string* `type` the leaderboard to fetch from.\n- *int* `count` the number of users to return, including the player themselves.\n- *TypedCallback\\<object>* `callback` the callback function to handle the score list.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getleaderboardsurroundingusers-3)",
				signature: "(string type, int count, TypedCallback<object> callback) : void"
			},
		]
	},
	"GetLeaderBoardUserScores": {
		signatures: [
			{
				description: "Returns leader board info for a list of users. Leader board entries returned by leader board APIs now have two additional fields: tag and name.\n\n- *string* `type` the leaderboard to fetch from.\n- *List\\<string>* `uuids` players' uuids\n- *TypedCallback\\<object>* `callback` the callback function to handle the score list.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getleaderboarduserscores-3)",
				signature: "(string type, List<string> uuids, TypedCallback<object> callback) : void"
			},
		]
	},
	"InitializeInAppPurchaseWithProductId": {
		signatures: [
			{
				description: "Initializes an in-app purchase. This will pass the product IDs to both callback functions.\n\n- *TypedCallback\\<string>* `purchaseCallback` the callback function on a successful purchase.\n- *List\\<string>* `productIds` a table containing the in-app product IDs.\n- *TypedCallback\\<bool>* `initializationCallback` the callback function for\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#initializeinapppurchasewithproductid-3)",
				signature: "(TypedCallback<string> purchaseCallback, List<string> productIds, TypedCallback<bool> initializationCallback = default) : void"
			},
		]
	},
	"InitializeInAppPurchaseWithProductData": {
		signatures: [
			{
				description: "Initializes an in-app purchase. This will pass the product's ID to both callback functions.\n\n- *TypedCallback\\<string>* `purchaseCallback` the callback function on a successful purchase.\n- *CustomIapProductData* `customIapProductData` the custom in-app product data to be purchased.\n- *TypedCallback\\<bool>* `initializationCallback` the callback function for initialization.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#initializeinapppurchasewithproductdata-3)",
				signature: "(TypedCallback<string> purchaseCallback, CustomIapProductData customIapProductData, TypedCallback<bool> initializationCallback = default) : void"
			},
		]
	},
	"PurchaseIapProduct": {
		signatures: [
			{
				description: "Begin the purchase of an in-app product. If successful, it will call the `InitializeInAppPurchase` from `DCEI.InitializeInAppPurchase()` with the product id as the first parameter. Typically used in conjunction with the [IAP Shop Mod](https://wiki.funovus.com/master/Mods-IAP-Shop-Mod). \n\n- *string* `productId` the ID of the product to be purchased.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#purchaseiapproduct-1)",
				signature: "(string productId) : void"
			},
		]
	},
	"GetIapProductLocalizedPrice": {
		signatures: [
			{
				description: "Returns the in-app product's localized price, given its ID.\n\n- *string* `productId` the ID of the product to return the localized price of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getiapproductlocalizedprice-1)",
				signature: "(string productId) : string"
			},
		]
	},
	"PostLeaderBoardScore": {
		signatures: [
			{
				description: "Attempts to post the player's score to the given leaderboard.\n\n- *string* `type` the leaderboard to post to.\n- *double* `score` the score to post.\n- *string* `payload` any additional information.\n- *int* `spentGems` the amount of gems spent as part of an anti-cheat measure.\n- *TypedCallback\\<object>* `callback` the callback function that handles a return. Passes the user's leaderboard score as per [GetLeaderBoardScore](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#getleaderboardscore-2) as a parameter.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#postleaderboardscore-5)",
				signature: "(string type, double score, string payload, int spentGems, TypedCallback<object> callback) : void"
			},
		]
	},
	"SetUserName": {
		signatures: [
			{
				description: "Attempts to set a player's username.\n\n- *string* `name` the new username to assign to the player.\n- *TypedCallback\\<int>* `callback` the callback function that is run after the name is changed. Passes the number of times the player has changed their username as a parameter.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Service#setusername-2)",
				signature: "(string name, TypedCallback<int> callback) : void"
			},
		]
	},
	"GetCardDamageStats": {
		signatures: [
			{
				description: "Returns a table containing the card damage stats. Damage effects in the data editor need a \"card\" field for this damage stacking to be properly counted. When counted, the in-game dev menu can be set to display these damage counts.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getcarddamagestats-0)",
				signature: "() : object"
			},
		]
	},
	"ResetCardDamageStats": {
		signatures: [
			{
				description: "Resets the card damage stats.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#resetcarddamagestats-0)",
				signature: "() : void"
			},
		]
	},
	"TriggerOnFocusChange": {
		signatures: [
			{
				description: "This triggers the callback function on focus change (for the game window).\n\n- *TypedCallback\\<bool>* `callback` the callback function that is run.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#triggeronfocuschange-1)",
				signature: "(TypedCallback<bool> callback) : void"
			},
		]
	},
	"GarbageCollect": {
		signatures: [
			{
				description: "Runs the garbage collector.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#garbagecollect-0)",
				signature: "() : void"
			},
		]
	},
	"GetLuaMemorySize": {
		signatures: [
			{
				description: "Returns the lua memory size.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getluamemorysize-0)",
				signature: "() : int"
			},
		]
	},
	"GetLevelDataLoadingTime": {
		signatures: [
			{
				description: "Returns the level data loading time.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#getleveldataloadingtime-0)",
				signature: "() : double"
			},
		]
	},
	"Save.Set": {
		signatures: [
			{
				description: "Sets the specified key-value pair in the save data. Save data must be committed with `DCEI.Save.Commit()` to actually save the data.\n\n- *string* `key` the key of the pair.\n- *object* `value` the value of the pair.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#set-2)",
				signature: "(string key, object value) : void"
			},
		]
	},
	"Save.Get": {
		signatures: [
			{
				description: "Returns the value associated with the given key.\n\n- *string* `key` the key to return the value of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#get-1)",
				signature: "(string key) : object"
			},
		]
	},
	"Save.Commit": {
		signatures: [
			{
				description: "Writes the current save data to the user's save data. You can view the editor's local save data under [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#commit-0)",
				signature: "() : void"
			},
		]
	},
	"Save.SetMapEntry": {
		signatures: [
			{
				description: "Sets the map entry in save data. Only works in mobile or web builds. Useful if your game has a series of maps to progress through instead of always loading the same entry map. \n\n- *string* `entry` the map entry name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#setmapentry-1)",
				signature: "(string entry) : void"
			},
		]
	},
	"Event.Log": {
		signatures: [
			{
				description: "Logs an event.\n\n- *string* `key` the key for the event.\n- *object* `table` a table with the event data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Event#log-2)",
				signature: "(string key, object table) : void"
			},
		]
	},
	"Event.SetUserProperty": {
		signatures: [
			{
				description: "Logs a user property.\n\n- *string* `key` the key for the user property.\n- *object* `value` the value for the user property.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Event#setuserproperty-2)",
				signature: "(string key, object value) : void"
			},
		]
	},
	"Event.SetGameState": {
		signatures: [
			{
				description: "Sets the user's game state. Useful for doing things like tracking the amount of time users spend in a particular game mode or game state, to gather relevant data and make charts on Amplitude. \n\n- *string* `state` the string to set the state to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Event#setgamestate-1)",
				signature: "(string state) : void"
			},
		]
	},
	"Settings.SetSelectedLanguage": {
		signatures: [
			{
				description: "Set the selected game language. Note: New selected language will be applied after restart.\nSupported languages:\n\n* English\n* French\n* German\n* Spanish\n* Portuguese\n* Russian\n* Chinese (Simplified)\n* Chinese (Traditional)\n* Japanese\n* Korean\n* Italian\n* Thai\n* Arabic\n\n- *string* `language` the language to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setselectedlanguage-1)",
				signature: "(string language) : void"
			},
		]
	},
	"Settings.GetSelectedLanguage": {
		signatures: [
			{
				description: "Get the selected game language. Note: New selected language will be applied after restart, so the language returned by this api may differ from the current display language.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getselectedlanguage-0)",
				signature: "() : string"
			},
		]
	},
	"Settings.GetDisplayLanguage": {
		signatures: [
			{
				description: "Get the current display game language.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getdisplaylanguage-0)",
				signature: "() : string"
			},
		]
	},
	"Settings.GetSaveDataHistory": {
		signatures: [
			{
				description: "Attempts to fetch the player's save history. If successful, the callback will return with the save history as a table as its first parameter.\n\n- *int* `count` the number of save data instances to include in the callback table, with the most recent saves returned first. Max 10.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned save data instances.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getsavedatahistory-2)",
				signature: "(int count, TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.RestoreSaveDataByIndex": {
		signatures: [
			{
				description: "Attempts to resets the saved map data at the given index.\n\n- *int* `index` the saved map data index to reset.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoresavedatabyindex-1)",
				signature: "(int index) : void"
			},
		]
	},
	"Settings.UploadSaveData": {
		signatures: [
			{
				description: "Attempts to upload player's saved map data.\n\n- *TypedCallback\\<object>* `callback` the callback function that will get called after upload.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#uploadsavedata-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.GetResolutionLevel": {
		signatures: [
			{
				description: "Get current game resolution level. 0 -> low, 1 -> medium, 2 -> high.  The level will be clamp to (0, max_level), and this max level depends on user's device, 1 for low end, 2 for high end.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getresolutionlevel-0)",
				signature: "() : int"
			},
		]
	},
	"Settings.SetResolutionLevel": {
		signatures: [
			{
				description: "Set the game resolution level. Note: New resolution level will be applied after restart.\n\n0 -> low, 1 -> medium, 2 -> high.  The level will be clamp to (0, max_level), and this max level depends on user's device, 1 for low end, 2 for high end.\n\n- *int* `level` the resolution level to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setresolutionlevel-1)",
				signature: "(int level) : void"
			},
		]
	},
	"Settings.IsDynamicShadowEnabled": {
		signatures: [
			{
				description: "Get the Dynamic Shadow enable state.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isdynamicshadowenabled-0)",
				signature: "() : bool"
			},
		]
	},
	"Settings.SetDynamicShadowEnabled": {
		signatures: [
			{
				description: "Enable/Disable Dynamic Shadow.  Note: New dynamic shadow setting will be applied after restart.\n\n- *bool* `enable` the state to set\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setdynamicshadowenabled-1)",
				signature: "(bool enable) : void"
			},
		]
	},
	"Settings.IsFps30": {
		signatures: [
			{
				description: "Get if the game is set to 30 FPS.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isfps30-0)",
				signature: "() : bool"
			},
		]
	},
	"Settings.SetFps30Enabled": {
		signatures: [
			{
				description: "Enable/Disable game FPS 30 setting.  Note: New fps setting will be applied after restart.\n\n- *bool* `enable` the state to set\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setfps30enabled-1)",
				signature: "(bool enable) : void"
			},
		]
	},
	"Settings.IsFacebookConnected": {
		signatures: [
			{
				description: "Whether player has link the account to Facebook.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isfacebookconnected-0)",
				signature: "() : bool"
			},
		]
	},
	"Settings.ConnectFacebook": {
		signatures: [
			{
				description: "Try connect player's account to a Facebook account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectfacebook-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.DisconnectFacebook": {
		signatures: [
			{
				description: "Try disconnect player's account to a Facebook account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#disconnectfacebook-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.RestoreAccountByFacebook": {
		signatures: [
			{
				description: "Try restore player's account by facebook. Only call this api when [Settings.ConnectFacebook](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectfacebook-1) api return \"used\".\n\nNote: if restore succeed, the game will restart automatically and the callback won't be called.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoreaccountbyfacebook-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.IsGoogleConnected": {
		signatures: [
			{
				description: "Whether player has link the account to Google.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isgoogleconnected-0)",
				signature: "() : bool"
			},
		]
	},
	"Settings.ConnectGoogle": {
		signatures: [
			{
				description: "Try connect player's account to a Google account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectgoogle-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.DisconnectGoogle": {
		signatures: [
			{
				description: "Try disconnect player's account to a Google account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#disconnectgoogle-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.RestoreAccountByGoogle": {
		signatures: [
			{
				description: "Try restore player's account by facebook. Only call this api when [Settings.ConnectGoogle](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectgoogle-1) api return \"used\".\nNote: if restore succeed, the game will restart automatically and the callback won't be called.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoreaccountbygoogle-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.IsAppleConnected": {
		signatures: [
			{
				description: "Whether player has link the account to Apple.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isappleconnected-0)",
				signature: "() : bool"
			},
		]
	},
	"Settings.ConnectApple": {
		signatures: [
			{
				description: "Try connect player's account to a Apple account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectapple-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.DisconnectApple": {
		signatures: [
			{
				description: "Try disconnect player's account to a Apple account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#disconnectapple-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.RestoreAccountByApple": {
		signatures: [
			{
				description: "Try restore player's account by Apple. Only call this api when [Settings.ConnectApple](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectapple-1) api return \"used\".\nNote: if restore succeed, the game will restart automatically and the callback won't be called.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoreaccountbyapple-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"Settings.SendSupportEmail": {
		signatures: [
			{
				description: "Sends a email to the game's support email address.\n\n- *string* `subject` title of the email.\n- *string* `content` body message text of the email.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#sendsupportemail-2)",
				signature: "(string subject, string content) : void"
			},
		]
	},
	"Video.StartRecording": {
		signatures: [
			{
				description: "Starts the recording process. Returns true/false if successful or not. \n\n- *string* `filename` the file name\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#startrecording-1)",
				signature: "(string filename) : bool"
			},
		]
	},
	"Video.CancelRecording": {
		signatures: [
			{
				description: "Cancels recording. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#cancelrecording-0)",
				signature: "() : void"
			},
		]
	},
	"Video.StopRecording": {
		signatures: [
			{
				description: "Stops recording.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#stoprecording-0)",
				signature: "() : void"
			},
		]
	},
	"Video.ViewRecording": {
		signatures: [
			{
				description: "View the recorded video\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#viewrecording-0)",
				signature: "() : void"
			},
		]
	},
	"Video.ShareRecording": {
		signatures: [
			{
				description: "The device will attempt to share the video recording. The result depends on how the users device (or chosen app) responds to the request.\n\n- *string* `text` text to share along with the video recording\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#sharerecording-1)",
				signature: "(string text) : void"
			},
		]
	},
	"AsyncPvp.GetCurrentSeasonInfo": {
		signatures: [
			{
				description: "Returns the latest season information in a Lua table, formatted as:\n```lua\n{\n  id = string,\n  status = number, -- 0 => not started, 1 => running, 2 => finished\n  start_time = seconds since unix epoch,\n  end_time = seconds since unix epoch,\n  next_season_start_time = seconds since unix epoch, -- set when status is 2.\n}\n```\nYou can use Lua “os.time” to get the current time in seconds from unix epoch and compare it against the start/end time to know how long the season has started and how long it will end. Use Lua “os.date” to format the time into human-readable strings.\n\nThe season “id” returned from this API is required for all following `AsyncPvp` API calls\n\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned season info.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getcurrentseasoninfo-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.GetCurrentUserInfo": {
		signatures: [
			{
				description: "The season id from `AsyncPvp.GetCurrentSeasonInfo` is required. This API returns the info about the current user in the specified season:\n```lua\n{\n  elo = number,\n  board = string, -- You may want to check if board is empty or not\n  season_rank = number,\n  daily_rank = number,\n}\n```\nEach user belongs to a group; both season rank and daily rank are for that group. The group info is transparent to the users, and client APIs do not include that info.\n\n- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned user info.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getcurrentuserinfo-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.SetDefenseBoard": {
		signatures: [
			{
				description: "Set the defense board of the user. The API returns an empty table when successful.\n\nA new user can only start to participate in async-pvp after they set a defense board. Before that, they can’t start async-pvp sessions, can’t be attacked by others, and won’t appear in the leaderboards. \n\n- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *string* `board` An arbitrary string to assign to the player; the server doesn't do anything with this besides return it with the other player info in other APIs. Use this to store player-specific info that your own Lua script interprets, such as a players card collection, army layout, or board arrangement.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned user info. Results parameter includes `next_season_start_time`  field if the current season has finished.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#setdefenseboard-3)",
				signature: "(string season, string board, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.GetDefenseHistory": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getdefensehistory-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.SetDefenseProtectionTime": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#setdefenseprotectiontime-3)",
				signature: "(string season, int timestamp, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.NewSession": {
		signatures: [
			{
				description: "This API should only be called when the season is still active.\n\nStart a new async-pvp session. This API returns the following:\n\n```lua\n{\n  id = string,\n  start_time = seconds since unix epoch,\n  finished_opponents = number,\n  current_opponent = {\n    uuid = string, tag = string, name = string, elo = number, board = string\n  }\n}\n```\n\nThe server will create a new session and find the first opponent to return in the “current_opponent” field. The opponent will be selected based on the server’s async-pvp configuration and the position of the opponent. If no opponent can be found, the “current_opponent” field will be nil.\n\nNOTE: if a session hasn’t been finished with the FinishSeason API, NewSession() will return that session instead of creating a new one. The “finished_opponents” field will be set to the number of finished matches so the client knows how many matches are left.\n\n- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#newsession-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.SwitchOpponent": {
		signatures: [
			{
				description: "If the player doesn’t like the current selected opponent, the client can call this API to select a different opponent.\n\n```lua\n{\n  opponent = {\n    uuid = string, tag = string, name = string, elo = number, board = string\n  }\n}\n```\n\nSimilar to NewSession, the “opponent” field may be nil if the server can’t find a match (e.g., the client has called this API many times and all available opponents have been skipped).\n\n- *string* `session` The session id\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#switchopponent-2)",
				signature: "(string session, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.FinishOpponent": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#finishopponent-4)",
				signature: "(string session, int result, string payload, TypedCallback<object> callback) : void"
			},
			{
				description: "Use this API to send the result of a match. This should only be called if the current opponent is not nil. The “result” parameter is a number. 1 = win, -1 = lose, 0 = other.\n\nThe server will return the following in the callback:\n\n```lua\n{\n  next_opponent = {\n    uuid = string, tag = string, name = string, elo = number, board = string\n  }\n}\n```\n\nThe server will return a Lua table {next_opponent={uuid, tag, name, board, elo}}. If there are no more matches or no opponents can be found, \"next_opponent\" will be nil.\n\n- *string* `session` The session id\n- *int* `result` The result of the match.  1 = win, -1 = lose, 0 = other.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#finishopponent-3)",
				signature: "(string session, int result, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.UseBotOpponent": {
		signatures: [
			{
				description: "If the server cannot find an opponent for the player, the client should generate a bot and use this API to send the bot info to the server. The “bot” parameter should be a Lua table in the following format:\n\n```lua\n{\n   uuid = string, tag = string, name = string, elo = number, board = string\n}\n```\n\nThe “uuid” field must have the prefix “bot:” for the server to distinguish the generated bot from actual players.\n\n- *string* `session` The session id\n- *[AsyncPvpBot](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#asyncpvpbot)* `bot` The bot table of info: `{ uuid = string, tag = string, name = string, elo = number, board = string }`\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#usebotopponent-3)",
				signature: "(string session, AsyncPvpBot bot, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.FinishSession": {
		signatures: [
			{
				description: "This API should only be called when the season is still active.\n\nFinish a session and apply elo rating changes. This can be called anytime as long as the session and season are both active. Usually you will call it after finishing 5 matches, but it can also be called sooner (e.g., when the user decide to quit the remaining matches).\n\nThe API will returned a Lua table with the updated elo for the current user: {elo = number}.\n\nNOTE: if a session has timed out, it’s up to the client to report the result with FinishSession. The server doesn’t enforce any session timeout rules (except that when the season has finished).\n\n- *string* `session` The session id\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#finishsession-2)",
				signature: "(string session, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.GetLeaderBoard": {
		signatures: [
			{
				description: "Get the top 50 players of the season that belong to the same group as the current user. `type` can be either “season” or “today” to get the season leaderboard or daily leaderboard. Note that the daily leaderboard resets at the same time as the season start time (e.g., if each season starts at 7:00 AM, the daily leaderboard will reset 7:00 AM everyday).\n\nThe API returns the following format:\n\n```lua\n{\n  players = {\n    {uuid = string, tag = string, name = string, elo = number, board = string},\n    {uuid = string, tag = string, name = string, elo = number, board = string},\n    {uuid = string, tag = string, name = string, elo = number, board = string},\n    ... up to 50 ...\n  }\n}\n```\n\nNOTE: order of players with the same elo is undefined.\n\n- *string* `season` the season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *string* `type` an be either `“season”` or `“today”` to get the season leaderboard or daily leaderboard\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned data\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getleaderboard-3)",
				signature: "(string season, string type, TypedCallback<object> callback) : void"
			},
		]
	},
	"AsyncPvp.GetDailyRankHistory": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getdailyrankhistory-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
		]
	},
	"Steam.UnlockAchievement": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Steam#unlockachievement-1)",
				signature: "(string achievementId) : void"
			},
		]
	},
	"Steam.IsAchievementUnlocked": {
		signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Steam#isachievementunlocked-1)",
				signature: "(string achievementId) : bool"
			},
		]
	},
	"Wait": {
		signatures: [
			{
				description: "Waits for the given amount of time. Note that Wait cannot be used inside [TriggerAddUnitSpawnEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitspawnevent-3) callback functions or main body. \n\nThis type of Wait will hold up all following code in the thread, even code in another function. Sometimes this behavior is necessary. However, when it is not, such behavior can make your code more difficult to troubleshoot and more prone to unexpected behavior, so other types of timers like [Core timers](https://wiki.funovus.com/release/Mods-Core#addduration) should be used. \n\nFor more examples of when different times of waits or timers should be used, see [this notion guide.](https://www.notion.so/funovus/Timers-Waits-ade2f0f581aa4c42a231c1e0e2545a3f?pvs=4) \n\n- *float* `time` the amount of time to wait.\n- *bool* `useRealTime` if true, uses real time.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-General#wait-2)",
				signature: "(float time, bool useRealTime) : void"
			},
		]
	},
	Platform: {
		description: "Returns the platform that the game is played on as one of the following string values:\n- WindowsPlayer\n- WebGLPlayer\n- Android\n- IPhonePlayer\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#platform)"
	},
	Version: {
		description: "Returns the current game version number. In editor play mode and arcade mode it will return editor/engine version.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#version)"
	},
	UnitAny: {
		description: "Returns an any unit, useful for binding generic trigger events.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#unitany)"
	},
	TriggeringUnit: {
		description: "Returns the triggering unit.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringunit)"
	},
	TriggeringEffectContext: {
		description: "Returns the triggering effect's effect context.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringeffectcontext)"
	},
	TriggeringEffectId: {
		description: "Returns the triggering effect's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringeffectid)"
	},
	TriggeringEffectName: {
		description: "Returns the triggering effect's name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringeffectname)"
	},
	TriggeringEffectIsCritical: {
		description: "Returns if the damage is a critical damage. Only works in [TriggerAddUnitDamageEvent](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Events-Unit#triggeraddunitdamageevent-3)\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringeffectiscritical)"
	},
	TriggeringWaveId: {
		description: "Returns the triggering wave ID for events such as `TriggerAddWaveStatusChangeEvent`. \n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringwaveid)"
	},
	TriggeringWaveStatus: {
		description: "Returns the triggering wave status for events such as `TriggerAddWaveStatusChangeEvent`. \n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringwavestatus)"
	},
	TriggeringAbilityId: {
		description: "Returns the triggering ability's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringabilityid)"
	},
	TriggeringAbilityName: {
		description: "Returns the triggering ability's name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringabilityname)"
	},
	TriggeringWeaponId: {
		description: "Returns the triggering weapon's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringweaponid)"
	},
	TriggeringWeaponName: {
		description: "Return the triggering weapon's name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringweaponname)"
	},
	TriggeringBehaviorId: {
		description: "Return the triggering behavior's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringbehaviorid)"
	},
	TriggeringBehaviorName: {
		description: "Returns the triggering behavior's name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringbehaviorname)"
	},
	TriggeringRegion: {
		description: "Returns the triggering region.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringregion)"
	},
	RegionAny: {
		description: "Returns an any region, useful for binding generic trigger events.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#regionany)"
	},
	TriggeringJoystickAxes: {
		description: "Returns the triggering joystick axes.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringjoystickaxes)"
	},
	TriggeringJoystickId: {
		description: "Returns the triggering joystick's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringjoystickid)"
	},
	TriggeringJoystickButtonId: {
		description: "Return the triggering joystick button's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringjoystickbuttonid)"
	},
	TriggeringJoystickButtonEventType: {
		description: "Returns the trigger joystick button event type. Button event 0 is for ButtonDown, event 1 is for ButtonUp.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringjoystickbuttoneventtype)"
	},
	TriggeringPlayerId: {
		description: "Returns the triggering player's id.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Variables#triggeringplayerid)"
	},
};
export const subClassTriggerAPIs: IClassEntries = {
	Save: {
		"Set": {
			signatures: [
			{
				description: "Sets the specified key-value pair in the save data. Save data must be committed with `DCEI.Save.Commit()` to actually save the data.\n\n- *string* `key` the key of the pair.\n- *object* `value` the value of the pair.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#set-2)",
				signature: "(string key, object value) : void"
			},
			]
		},
		"Get": {
			signatures: [
			{
				description: "Returns the value associated with the given key.\n\n- *string* `key` the key to return the value of.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#get-1)",
				signature: "(string key) : object"
			},
			]
		},
		"Commit": {
			signatures: [
			{
				description: "Writes the current save data to the user's save data. You can view the editor's local save data under [Play Settings](https://wiki.funovus.com/development/Data-Play-Settings).\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#commit-0)",
				signature: "() : void"
			},
			]
		},
		"SetMapEntry": {
			signatures: [
			{
				description: "Sets the map entry in save data. Only works in mobile or web builds. Useful if your game has a series of maps to progress through instead of always loading the same entry map. \n\n- *string* `entry` the map entry name.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Save#setmapentry-1)",
				signature: "(string entry) : void"
			},
			]
		},
	},
	Event: {
		"Log": {
			signatures: [
			{
				description: "Logs an event.\n\n- *string* `key` the key for the event.\n- *object* `table` a table with the event data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Event#log-2)",
				signature: "(string key, object table) : void"
			},
			]
		},
		"SetUserProperty": {
			signatures: [
			{
				description: "Logs a user property.\n\n- *string* `key` the key for the user property.\n- *object* `value` the value for the user property.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Event#setuserproperty-2)",
				signature: "(string key, object value) : void"
			},
			]
		},
		"SetGameState": {
			signatures: [
			{
				description: "Sets the user's game state. Useful for doing things like tracking the amount of time users spend in a particular game mode or game state, to gather relevant data and make charts on Amplitude. \n\n- *string* `state` the string to set the state to.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Event#setgamestate-1)",
				signature: "(string state) : void"
			},
			]
		},
	},
	Settings: {
		"SetSelectedLanguage": {
			signatures: [
			{
				description: "Set the selected game language. Note: New selected language will be applied after restart.\nSupported languages:\n\n* English\n* French\n* German\n* Spanish\n* Portuguese\n* Russian\n* Chinese (Simplified)\n* Chinese (Traditional)\n* Japanese\n* Korean\n* Italian\n* Thai\n* Arabic\n\n- *string* `language` the language to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setselectedlanguage-1)",
				signature: "(string language) : void"
			},
			]
		},
		"GetSelectedLanguage": {
			signatures: [
			{
				description: "Get the selected game language. Note: New selected language will be applied after restart, so the language returned by this api may differ from the current display language.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getselectedlanguage-0)",
				signature: "() : string"
			},
			]
		},
		"GetDisplayLanguage": {
			signatures: [
			{
				description: "Get the current display game language.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getdisplaylanguage-0)",
				signature: "() : string"
			},
			]
		},
		"GetSaveDataHistory": {
			signatures: [
			{
				description: "Attempts to fetch the player's save history. If successful, the callback will return with the save history as a table as its first parameter.\n\n- *int* `count` the number of save data instances to include in the callback table, with the most recent saves returned first. Max 10.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned save data instances.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getsavedatahistory-2)",
				signature: "(int count, TypedCallback<object> callback) : void"
			},
			]
		},
		"RestoreSaveDataByIndex": {
			signatures: [
			{
				description: "Attempts to resets the saved map data at the given index.\n\n- *int* `index` the saved map data index to reset.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoresavedatabyindex-1)",
				signature: "(int index) : void"
			},
			]
		},
		"UploadSaveData": {
			signatures: [
			{
				description: "Attempts to upload player's saved map data.\n\n- *TypedCallback\\<object>* `callback` the callback function that will get called after upload.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#uploadsavedata-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"GetResolutionLevel": {
			signatures: [
			{
				description: "Get current game resolution level. 0 -> low, 1 -> medium, 2 -> high.  The level will be clamp to (0, max_level), and this max level depends on user's device, 1 for low end, 2 for high end.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#getresolutionlevel-0)",
				signature: "() : int"
			},
			]
		},
		"SetResolutionLevel": {
			signatures: [
			{
				description: "Set the game resolution level. Note: New resolution level will be applied after restart.\n\n0 -> low, 1 -> medium, 2 -> high.  The level will be clamp to (0, max_level), and this max level depends on user's device, 1 for low end, 2 for high end.\n\n- *int* `level` the resolution level to set.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setresolutionlevel-1)",
				signature: "(int level) : void"
			},
			]
		},
		"IsDynamicShadowEnabled": {
			signatures: [
			{
				description: "Get the Dynamic Shadow enable state.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isdynamicshadowenabled-0)",
				signature: "() : bool"
			},
			]
		},
		"SetDynamicShadowEnabled": {
			signatures: [
			{
				description: "Enable/Disable Dynamic Shadow.  Note: New dynamic shadow setting will be applied after restart.\n\n- *bool* `enable` the state to set\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setdynamicshadowenabled-1)",
				signature: "(bool enable) : void"
			},
			]
		},
		"IsFps30": {
			signatures: [
			{
				description: "Get if the game is set to 30 FPS.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isfps30-0)",
				signature: "() : bool"
			},
			]
		},
		"SetFps30Enabled": {
			signatures: [
			{
				description: "Enable/Disable game FPS 30 setting.  Note: New fps setting will be applied after restart.\n\n- *bool* `enable` the state to set\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#setfps30enabled-1)",
				signature: "(bool enable) : void"
			},
			]
		},
		"IsFacebookConnected": {
			signatures: [
			{
				description: "Whether player has link the account to Facebook.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isfacebookconnected-0)",
				signature: "() : bool"
			},
			]
		},
		"ConnectFacebook": {
			signatures: [
			{
				description: "Try connect player's account to a Facebook account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectfacebook-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"DisconnectFacebook": {
			signatures: [
			{
				description: "Try disconnect player's account to a Facebook account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#disconnectfacebook-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"RestoreAccountByFacebook": {
			signatures: [
			{
				description: "Try restore player's account by facebook. Only call this api when [Settings.ConnectFacebook](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectfacebook-1) api return \"used\".\n\nNote: if restore succeed, the game will restart automatically and the callback won't be called.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoreaccountbyfacebook-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"IsGoogleConnected": {
			signatures: [
			{
				description: "Whether player has link the account to Google.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isgoogleconnected-0)",
				signature: "() : bool"
			},
			]
		},
		"ConnectGoogle": {
			signatures: [
			{
				description: "Try connect player's account to a Google account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectgoogle-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"DisconnectGoogle": {
			signatures: [
			{
				description: "Try disconnect player's account to a Google account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#disconnectgoogle-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"RestoreAccountByGoogle": {
			signatures: [
			{
				description: "Try restore player's account by facebook. Only call this api when [Settings.ConnectGoogle](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectgoogle-1) api return \"used\".\nNote: if restore succeed, the game will restart automatically and the callback won't be called.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoreaccountbygoogle-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"IsAppleConnected": {
			signatures: [
			{
				description: "Whether player has link the account to Apple.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#isappleconnected-0)",
				signature: "() : bool"
			},
			]
		},
		"ConnectApple": {
			signatures: [
			{
				description: "Try connect player's account to a Apple account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectapple-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"DisconnectApple": {
			signatures: [
			{
				description: "Try disconnect player's account to a Apple account.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#disconnectapple-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"RestoreAccountByApple": {
			signatures: [
			{
				description: "Try restore player's account by Apple. Only call this api when [Settings.ConnectApple](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#connectapple-1) api return \"used\".\nNote: if restore succeed, the game will restart automatically and the callback won't be called.\n\n- *TypedCallback\\<object>* `callback` the callback function that handles a return.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#restoreaccountbyapple-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"SendSupportEmail": {
			signatures: [
			{
				description: "Sends a email to the game's support email address.\n\n- *string* `subject` title of the email.\n- *string* `content` body message text of the email.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Settings#sendsupportemail-2)",
				signature: "(string subject, string content) : void"
			},
			]
		},
	},
	Video: {
		"StartRecording": {
			signatures: [
			{
				description: "Starts the recording process. Returns true/false if successful or not. \n\n- *string* `filename` the file name\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#startrecording-1)",
				signature: "(string filename) : bool"
			},
			]
		},
		"CancelRecording": {
			signatures: [
			{
				description: "Cancels recording. \n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#cancelrecording-0)",
				signature: "() : void"
			},
			]
		},
		"StopRecording": {
			signatures: [
			{
				description: "Stops recording.\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#stoprecording-0)",
				signature: "() : void"
			},
			]
		},
		"ViewRecording": {
			signatures: [
			{
				description: "View the recorded video\n\n\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#viewrecording-0)",
				signature: "() : void"
			},
			]
		},
		"ShareRecording": {
			signatures: [
			{
				description: "The device will attempt to share the video recording. The result depends on how the users device (or chosen app) responds to the request.\n\n- *string* `text` text to share along with the video recording\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Video#sharerecording-1)",
				signature: "(string text) : void"
			},
			]
		},
	},
	AsyncPvp: {
		"GetCurrentSeasonInfo": {
			signatures: [
			{
				description: "Returns the latest season information in a Lua table, formatted as:\n```lua\n{\n  id = string,\n  status = number, -- 0 => not started, 1 => running, 2 => finished\n  start_time = seconds since unix epoch,\n  end_time = seconds since unix epoch,\n  next_season_start_time = seconds since unix epoch, -- set when status is 2.\n}\n```\nYou can use Lua “os.time” to get the current time in seconds from unix epoch and compare it against the start/end time to know how long the season has started and how long it will end. Use Lua “os.date” to format the time into human-readable strings.\n\nThe season “id” returned from this API is required for all following `AsyncPvp` API calls\n\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned season info.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getcurrentseasoninfo-1)",
				signature: "(TypedCallback<object> callback) : void"
			},
			]
		},
		"GetCurrentUserInfo": {
			signatures: [
			{
				description: "The season id from `AsyncPvp.GetCurrentSeasonInfo` is required. This API returns the info about the current user in the specified season:\n```lua\n{\n  elo = number,\n  board = string, -- You may want to check if board is empty or not\n  season_rank = number,\n  daily_rank = number,\n}\n```\nEach user belongs to a group; both season rank and daily rank are for that group. The group info is transparent to the users, and client APIs do not include that info.\n\n- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned user info.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getcurrentuserinfo-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
			]
		},
		"SetDefenseBoard": {
			signatures: [
			{
				description: "Set the defense board of the user. The API returns an empty table when successful.\n\nA new user can only start to participate in async-pvp after they set a defense board. Before that, they can’t start async-pvp sessions, can’t be attacked by others, and won’t appear in the leaderboards. \n\n- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *string* `board` An arbitrary string to assign to the player; the server doesn't do anything with this besides return it with the other player info in other APIs. Use this to store player-specific info that your own Lua script interprets, such as a players card collection, army layout, or board arrangement.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned user info. Results parameter includes `next_season_start_time`  field if the current season has finished.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#setdefenseboard-3)",
				signature: "(string season, string board, TypedCallback<object> callback) : void"
			},
			]
		},
		"GetDefenseHistory": {
			signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getdefensehistory-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
			]
		},
		"SetDefenseProtectionTime": {
			signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#setdefenseprotectiontime-3)",
				signature: "(string season, int timestamp, TypedCallback<object> callback) : void"
			},
			]
		},
		"NewSession": {
			signatures: [
			{
				description: "This API should only be called when the season is still active.\n\nStart a new async-pvp session. This API returns the following:\n\n```lua\n{\n  id = string,\n  start_time = seconds since unix epoch,\n  finished_opponents = number,\n  current_opponent = {\n    uuid = string, tag = string, name = string, elo = number, board = string\n  }\n}\n```\n\nThe server will create a new session and find the first opponent to return in the “current_opponent” field. The opponent will be selected based on the server’s async-pvp configuration and the position of the opponent. If no opponent can be found, the “current_opponent” field will be nil.\n\nNOTE: if a session hasn’t been finished with the FinishSeason API, NewSession() will return that session instead of creating a new one. The “finished_opponents” field will be set to the number of finished matches so the client knows how many matches are left.\n\n- *string* `season` The season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#newsession-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
			]
		},
		"SwitchOpponent": {
			signatures: [
			{
				description: "If the player doesn’t like the current selected opponent, the client can call this API to select a different opponent.\n\n```lua\n{\n  opponent = {\n    uuid = string, tag = string, name = string, elo = number, board = string\n  }\n}\n```\n\nSimilar to NewSession, the “opponent” field may be nil if the server can’t find a match (e.g., the client has called this API many times and all available opponents have been skipped).\n\n- *string* `session` The session id\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#switchopponent-2)",
				signature: "(string session, TypedCallback<object> callback) : void"
			},
			]
		},
		"FinishOpponent": {
			signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#finishopponent-4)",
				signature: "(string session, int result, string payload, TypedCallback<object> callback) : void"
			},
			]
		},
		"FinishOpponent": {
			signatures: [
			{
				description: "Use this API to send the result of a match. This should only be called if the current opponent is not nil. The “result” parameter is a number. 1 = win, -1 = lose, 0 = other.\n\nThe server will return the following in the callback:\n\n```lua\n{\n  next_opponent = {\n    uuid = string, tag = string, name = string, elo = number, board = string\n  }\n}\n```\n\nThe server will return a Lua table {next_opponent={uuid, tag, name, board, elo}}. If there are no more matches or no opponents can be found, \"next_opponent\" will be nil.\n\n- *string* `session` The session id\n- *int* `result` The result of the match.  1 = win, -1 = lose, 0 = other.\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#finishopponent-3)",
				signature: "(string session, int result, TypedCallback<object> callback) : void"
			},
			]
		},
		"UseBotOpponent": {
			signatures: [
			{
				description: "If the server cannot find an opponent for the player, the client should generate a bot and use this API to send the bot info to the server. The “bot” parameter should be a Lua table in the following format:\n\n```lua\n{\n   uuid = string, tag = string, name = string, elo = number, board = string\n}\n```\n\nThe “uuid” field must have the prefix “bot:” for the server to distinguish the generated bot from actual players.\n\n- *string* `session` The session id\n- *[AsyncPvpBot](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Types#asyncpvpbot)* `bot` The bot table of info: `{ uuid = string, tag = string, name = string, elo = number, board = string }`\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#usebotopponent-3)",
				signature: "(string session, AsyncPvpBot bot, TypedCallback<object> callback) : void"
			},
			]
		},
		"FinishSession": {
			signatures: [
			{
				description: "This API should only be called when the season is still active.\n\nFinish a session and apply elo rating changes. This can be called anytime as long as the session and season are both active. Usually you will call it after finishing 5 matches, but it can also be called sooner (e.g., when the user decide to quit the remaining matches).\n\nThe API will returned a Lua table with the updated elo for the current user: {elo = number}.\n\nNOTE: if a session has timed out, it’s up to the client to report the result with FinishSession. The server doesn’t enforce any session timeout rules (except that when the season has finished).\n\n- *string* `session` The session id\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned session data.\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#finishsession-2)",
				signature: "(string session, TypedCallback<object> callback) : void"
			},
			]
		},
		"GetLeaderBoard": {
			signatures: [
			{
				description: "Get the top 50 players of the season that belong to the same group as the current user. `type` can be either “season” or “today” to get the season leaderboard or daily leaderboard. Note that the daily leaderboard resets at the same time as the season start time (e.g., if each season starts at 7:00 AM, the daily leaderboard will reset 7:00 AM everyday).\n\nThe API returns the following format:\n\n```lua\n{\n  players = {\n    {uuid = string, tag = string, name = string, elo = number, board = string},\n    {uuid = string, tag = string, name = string, elo = number, board = string},\n    {uuid = string, tag = string, name = string, elo = number, board = string},\n    ... up to 50 ...\n  }\n}\n```\n\nNOTE: order of players with the same elo is undefined.\n\n- *string* `season` the season id from `AsyncPvp.GetCurrentSeasonInfo`\n- *string* `type` an be either `“season”` or `“today”` to get the season leaderboard or daily leaderboard\n- *TypedCallback\\<object>* `callback` the callback function to handle the returned data\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getleaderboard-3)",
				signature: "(string season, string type, TypedCallback<object> callback) : void"
			},
			]
		},
		"GetDailyRankHistory": {
			signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-AsyncPvp#getdailyrankhistory-2)",
				signature: "(string season, TypedCallback<object> callback) : void"
			},
			]
		},
	},
	Steam: {
		"UnlockAchievement": {
			signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Steam#unlockachievement-1)",
				signature: "(string achievementId) : void"
			},
			]
		},
		"IsAchievementUnlocked": {
			signatures: [
			{
				description: "\n\n[Wiki Page](https://wiki.funovus.com/development/Trigger-API-Reference-DCEI-Functions-Steam#isachievementunlocked-1)",
				signature: "(string achievementId) : bool"
			},
			]
		},
	},
};
