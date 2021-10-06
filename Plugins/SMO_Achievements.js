/*:
* @plugindesc v1.04 - NOT SHARED Adds an achievements mechanic.
* @author SMO
*
* @param Use Editor
* @type boolean
* @desc If ON, the menu's settings will be saved on a custom file
* and you'll only be able to change them through the editor.
* @default true
*
* @param Hide Totally
* @type boolean
* @desc If ON, "Hidden" achievements won't be part of the total progress calculation.
* @default false
*
* @param Categories And Trophies
* @type struct<categories>[]
* @desc Add/edit the categories you want here. Leave it empty
* if you don't want to use categories.
* @default ["{\"Category Name\":\"Battle\",\"Category Background\":\"\",\"Trophy\":\"----------\",\"Hide Trophy\":\"false\",\"Trophy Description\":\"\\\"This is a description.\\\"\",\"Trophy Image\":\"\",\"On Unlock\":\"\"}"]
*
* @param Achievements Data
* @type struct<data>[]
* @desc Create/edit the data of each achievement here.
* @default ["{\"Name\":\"Slime Slayer\",\"Category\":\"Battle\",\"Description\":\"\\\"Kill 10 Slimes.\\\"\",\"Visibility\":\"Visible from start\",\"Background Image\":\"\",\"Pop Up Image\":\"\",\"Requirements\":\"[\\\"{\\\\\\\"Type\\\\\\\":\\\\\\\"Switch\\\\\\\",\\\\\\\"Item ID\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"Comparison\\\\\\\":\\\\\\\"≥\\\\\\\",\\\\\\\"Required Value\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"Alias\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Alias Icon\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Advanced\\\\\\\":\\\\\\\"------\\\\\\\",\\\\\\\"Current Value\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Final Value\\\\\\\":\\\\\\\"\\\\\\\"}\\\"]\",\"Rewards\":\"\",\"Icons\":\"------\",\"Locked Icon\":\"-2\",\"Unlocked Icon\":\"-2\",\"Secret Icon\":\"-2\"}"]
*
* @param Menu Settings
* @type struct<menuSets>
* @desc Define the settings for the windows on the achievements
* menu.
* @default {"Scene Name":"{\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.width\",\"Height\":\"80\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\"}","Categories":"{\"X\":\"0\",\"Y\":\"80\",\"Width\":\"Graphics.width / 3\",\"Height\":\"Graphics.height - 80\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Columns\":\"1\",\"Item Height\":\"72\"}","Trophies":"{\"Enabled\":\"true\",\"X\":\"0\",\"Y\":\"80\",\"Width\":\"Graphics.width * 2/3\",\"Height\":\"Graphics.height - 80\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Lines\":\"2\",\"Columns\":\"2\",\"Selector\":\"Grow\",\"Selector's Image\":\"\"}","Achievements":"{\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.width\",\"Height\":\"Graphics.height - 80\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"18\",\"Columns\":\"Math.floor(Graphics.width / 200)\",\"Item Height\":\"144\"}","Achievs Info":"{\"X\":\"Graphics.width / 4\",\"Y\":\"auto\",\"Width\":\"Graphics.width / 2\",\"Height\":\"auto\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\"}","Pop Up":"{\"Enabled\":\"true\",\"X\":\"Graphics.width - PopUp.width\",\"Y\":\"0\",\"Width\":\"140\",\"Height\":\"106\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"18\",\"Button\":\"true\",\"Fade Effect\":\"Fade In and Out\",\"Move In\":\"From the right\",\"Move In Easing\":\"Quadratic\",\"Move In Custom-Easing\":\"\",\"Move Out\":\"Go right\",\"Move Out Easing\":\"Quadratic\",\"Move Out Custom-Easing\":\"\"}","Sort Option":"{\"Enabled\":\"true\",\"X\":\"15\",\"Y\":\"25\",\"Width\":\"120\",\"Cell Height\":\"30\",\"Opacity\":\"255\",\"Font Face\":\"GameFont\",\"Font Size\":\"18\",\"Options\":\"[\\\"{\\\\\\\"Symbol\\\\\\\":\\\\\\\"A-z\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"main = unlocked.concat(locked);\\\\\\\\\\\\\\\\nmain.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\\\\\\\\\\\\\nmain.push(...secrets);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol\\\\\\\":\\\\\\\"Locked\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"unlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\\\\\\\\\\\\\nlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\\\\\\\\\\\\\nmain = locked.concat(unlocked, secrets);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol\\\\\\\":\\\\\\\"Unlocked\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"unlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\\\\\\\\\\\\\nlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\\\\\\\\\\\\\nmain = unlocked.concat(locked, secrets);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol\\\\\\\":\\\\\\\"Recent\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"unlocked.sort((a, b) => SMO.AM.compareAchievsDates(a, b));\\\\\\\\\\\\\\\\nlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\\\\\\\\\\\\\nmain = unlocked.concat(locked, secrets);\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"--- IMAGES ---\":\"--------------------\",\"Button Img\":\"\",\"List Img\":\"\",\"Selector Img\":\"\"}"}
*
* @param On Unlock
* @type note
* @desc Use JS to write a script, this script will be called every
* time an achievement is unlocked.
* @default "AudioManager.playMe({\n  name: 'Fanfare1',\n  pan: 0,\n  pitch: 100,\n  volume: 30\n});"
*
* @param ---- Global Settings ----
* @desc Define the settings for the global mode.
* @default --------------------
*
* @param Global Mode
* @parent ---- Global Settings ----
* @type boolean
* @desc If ON, unlocked achievements will keep unlocked through
* save files, check the help section for more info.
* @default false
*
* @param Global Rewards
* @parent ---- Global Settings ----
* @type boolean
* @desc If ON, the player will gain all the unlocked achievements'
* rewards when starting a new game.
* @default true
*
* @param Global Auto Reset
* @parent ---- Global Settings ----
* @type boolean
* @desc Clears the global data on each playtest session.
* This won't affect deployed projects.
* @default false
*
* @param ---- Achievs Update -----
* @desc These settings define the way the achievements are updated.
* @default --------------------
*
* @param Auto Refresh
* @parent ---- Achievs Update -----
* @type boolean
* @on YES
* @off NO
* @desc Do you wish to check for unlocked achievements 
* automatically?
* @default true
*
* @param Update Interval
* @parent ---- Achievs Update -----
* @type number
* @min 30
* @desc Defines the interval between updates, in frames. 
* (1 sec = 60 frames). A smaller interval may cause lag.
* @default 60

* @param Refresh After Transfer
* @parent ---- Achievs Update -----
* @type boolean
* @desc If ON, the achievements will be automatically
* refreshed after transfering between maps.
* @default true
*
* @param --- Menu Command (MC) ---
* @desc Define the settings for the menu command.
* @default --------------------
*
* @param MC Active
* @parent --- Menu Command (MC) ---
* @type boolean
* @on YES
* @off NO
* @desc Do you wish to add a command on the menu to show the achievements?
* @default true
*
* @param MC Show Switch
* @parent --- Menu Command (MC) ---
* @type switch
* @desc Use this switch to show/hide the menu command. If this switch is ON, the command is visible.
* @default 0
*
* @param MC Position
* @parent --- Menu Command (MC) ---
* @type number
* @min 1
* @desc Choose the menu command's position on the menu list.
* @default 4
*
* @param MC Name
* @parent --- Menu Command (MC) ---
* @desc This name will appear on the menu.
* @default Achievements
*
* @param -- Title Command (TC) ---
* @desc Define the settings for the title command.
* Available only on Global Mode.
* @default --------------------
*
* @param TC Active
* @parent -- Title Command (TC) ---
* @type boolean
* @on YES
* @off NO
* @desc Do you wish to add a command on the title to show the
* achievements? (Only on Global Mode)
* @default true
*
* @param TC Position
* @parent -- Title Command (TC) ---
* @type number
* @min 1
* @desc Choose the position for this command on the title.
* (Only on Global Mode)
* @default 3
*
* @param TC Name
* @parent -- Title Command (TC) ---
* @desc The command will appear on the title with this name.
* (Only on Global Mode)
* @default Achievements
*
* @param -------- Images ---------
* @desc These images will be used when no other is specified.
* @default --------------------
*
* @param Menu Background
* @parent -------- Images ---------
* @type file
* @dir img/achievements
* @require 1
* @desc Choose a file on the img/achievements folder to be the background of the achievement's menu.
*
* @param Locked Trophy Img
* @parent -------- Images ---------
* @type file
* @dir img/achievements
* @require 1
* @desc This image will be drawn for all locked trophies when no
* other image is specified on "Categories And Trophies".
* @default
*
* @param Locked Achievement Img
* @parent -------- Images ---------
* @type file
* @dir img/achievements
* @require 1
* @desc Default image for locked (non secret) achievements.
* @default
*
* @param Secret Achievement Img
* @parent -------- Images ---------
* @type file
* @dir img/achievements
* @require 1
* @desc Default image for secret achievements.
* @default
*
* @param -------- Icons ----------
* @desc These icons will be used when no other is specified.
* @default --------------------
*
* @param Locked Icon
* @parent -------- Icons ----------
* @type number
* @min -1
* @desc This icon will be drawn if the achievement is locked.
* Set it to -1 if you don't want to use an icon.
* @default 160
*
* @param Unlocked Icon
* @parent -------- Icons ----------
* @type number
* @min -1
* @desc This icon will be drawn if the achievement is unlocked.
* Set it to -1 if you don't want to use an icon.
* @default 164
*
* @param Secret Icon
* @parent -------- Icons ----------
* @type number
* @min -1
* @desc This icon will be drawn if the achievement is secret.
* Set it to -1 if you don't want to use an icon.
* @default 166
*
* @param Gold Icon
* @parent -------- Icons ----------
* @type number
* @min -1
* @desc Choose an icon for your currency. Use -1 if you don't wanna
* use this.
* @default 314
*
* @param Recent Unlock
* @parent -------- Icons ----------
* @type number
* @min -1
* @desc This icon will be shown on recently unlocked achievements. 
* Use -1 if you don't wanna use it.
* @default 191 
*          
* @help
*==============================================================================
* SMO_Achievements.js
*==============================================================================
* Hi there!
*
* This plugin will help you create your own achievements menu! You'll find
* some helpful information about how to use it below.
*
*------------------------------------------------------------------------------
* THE BASICS
*------------------------------------------------------------------------------
* ACHIEVEMENTS
* To add/change your achievements use the parameter "Achievements Data". You
* can customize their name, description, icon, image, etc.
*
* CATEGORIES
* With the parameter "Categories And Trophies" you can customize your
* categories' names/images and the trophies' in general.
*
* If you don't want to use categories you can erase all data inside this
* parameter, but then the trophies window will also disappear.
*
* What's a Trophy?
* After completing all the achievements of a specific category the player
* unlocks a trophy, a custom image will be shown at the achievements menu
* with an also custom message.
*
* An achievement may have multiple categories, use the "Achievements Data"
* parameter edit it. Separate each category with a comma.
*
* CUSTOM IMAGES
* Any custom image shall be placed on "img/achievements". You can set custom
* images for each achievement, trophy and for the achievement menu. You can
* use the same image for different objects.
*
* IMPORTANT: Avoid naming two different achievements/categories with the 
* same name.
*
*------------------------------------------------------------------------------
* ACHIEVEMENTS DATA
*------------------------------------------------------------------------------
* Like said before, this parameter is where you add/change or remove your
* achievements.
*
* A simple setup for this parameter would be like:
* 1 {achievement data} -> this achievement will have ID 1
* 2 {achievement data} -> ID 2
* 3 {achievement data} -> ID 3
*
* The numbers on the left are the lines, if you don't add any custom line they
* will also match the achievement id. For organization pourposes you can add
* custom texts inside this structure (but only on this one), if you do so it'll
* look like this:
* 1 Custom text -> ignored by the plugin
* 2 Custom text -> ignored by the plugin
* 3 {achievement data} -> ID 1
* 4 {achievement data} -> ID 2
* 5 Custom text -> ignored by the plugin
* 6 {achievement data} -> ID 3
*
* As you can see the lines do not match the achievements' ids anymore, the
* id's are given based on the achievements order on the list ignoring the
* custom texts. Any line can be a custom text, as long as it doesn't start
* with a "{".
*
* Check this plugin's demo to see an example of setup for this parameter.
*
*------------------------------------------------------------------------------
* REQUIREMENTS and REWARDS
*------------------------------------------------------------------------------
* TYPE
* The first step is to select a Type (Switch, Variable, Steps, etc);
*
* ITEM ID
* The parameter "Item ID" is only necessary if the chosen type is Switch,
* Variable, Item, Weapon, Armor or Party Member, if the chosen type is not
* between the ones mentioned the "Item ID" will be ignored.
*
* COMPARISON
* It's recommended to leave the "Comparison" in "≥". 
* While using "≥", the achievement's unlock progress will be calculated based
* on this requirement's current/required value, when using other comparisons
* the progress will be based on whether the requirement has been met or not.
*
* Example:
* Requirement: Walk 10 steps.
* After walking 5 steps you'll have: Steps 5/10.
* This will show 50% if the comparison is "≥", but if it's not, it'll show 0%
* until the you reach the 10 steps, then it'll change to 100%.
*
* REQUIRED VALUE
* It's gonna be compared with the current value of the selected item. That's
* the target value.
*
* For example, let's say that you've chosen:
* Type           = Variable 
* Item ID        = 1
* Comparison     = ≥
* Required Value = 10
*
* This requirement will be met only when the variable 1's value is equal or 
* bigger than 10.
*
* ALIAS
* If you don't wanna show this requirement's default name you can give it a
* custom name using this parameter.
* You can make use of the following text codes:
* <CurrentValue>  -> replaced by this item's "Current Value";
* <RequiredValue> -> replaced by this item's "Required Value" (or by the
* "Final Value" if you're using a Custom(Advanced) type);
*
* Each item Type has a default word in case you don't use an Alias:
* Custom(Advanced): Custom
* Switch:           The switch's name
* Variable:         The variable's name
* Item:             The item's name
* Weapon:           The weapon's name
* Armor:            The armor's name
* Gold:             (Gold Icon)
* Party Member:     The party member's name
* All the others are replaced by the item type.
*
* You can also select an icon to be drawn next to your alias by using the
* parameter ALIAS ICON.
* 
* ADVANCED
* To have more control over the requirements you can use JavaScript codes
* to define the current and final values for this requirement.
*
* To create an advanced requirement choose the item type "Custom(Advanced)",
* then add a script to "Current Value", this script shall return the current
* value for this requirement, not the comparison.
* Examples of script on "Current Value":
* $gameVariables.value(1) -> Returns the variable 1's value.
* $gameSwitches.value(1) -> Returns the switch 1's value.
* $gameParty.gold() -> Returns the party's gold.
*
* The comparison is made based on the "Comparison" parameter, don't forget
* to check it out.
*
* Finally, the "Final Value" will be compared to the "Current Value" to unlock
* (or not) the achievement. Adding a script on "Final Value" is not required
* though, if you leave it empty the "Required Value" parameter will be used 
* instead.
*
* Example 1:
* Current Value: $gameVariables.value(1)
* Comparison:    ≥
* Final Value:   $gameVariables.value(2)
* This requirement will be met when the variable 1's value is equal or
* bigger than the variable 2's value.
*
* Example 2:
* Current Value: $gameMap.mapId()
* Comparison:    =
* Final Value:   12
* Met when the player arrives on the map with ID 12.
*
* Example 3
* Current Value: $gameSwitches.value(1) || $gameSwitches.value(2)
* Comparison:    =
* Final Value:   true
* Met when the switch 1 or the switch 2 is ON.
*
* Example 4 (using YEP_JobPoints):
* Current Value: $gameActors.actor(1).jp()
* Comparison:    ≥
* Final Value:   500
* Met at if the actor 1 has 500 JP or more on it's current class.
*
* It's recommended that you use the "Alias" parameter to customize this
* requirement's name. If you don't, the word "Custom" will be used as
* a default name.
*
* REWARDS
* The rewards are similar to the requirements with a few differences.
*
* The "Advanced" parameter is a script call called when the achievement is
* unlocked, it works with any item type not only with custom.
*
*------------------------------------------------------------------------------
* RANGE
*------------------------------------------------------------------------------
*  - Local:
* The Achievements must be unlocked on each playthrough, unlocked achievements
* are saved with the save file.
*
* - Global:
* Once unlocked, an achievement will only change it's state if you use a plugin
* command or a script call, unlocked achievements are saved on a json file.
* IMPORTANT: if you choose this mode make sure you have a file called
* Achievements.json inside your data folder (data/Achievements.json), don't
* write anything on it, this plugin will automatically fill it with encrypted
* data when you start a playtest.
*
*------------------------------------------------------------------------------
* TEXTS AND COLORS
*------------------------------------------------------------------------------
* On this parameter you'll find most of texts drawn on the achievements menu,
* some colors may also be customized here, like the color of an unlocked
* achievement's text, which is green for default.
*
* UNLOCKED ON
* This plugin saves the date on which any achievement is unlocked and you
* can show it for the player by using this parameter, to do so use the following
* text codes:
* <Hour> or <HourA>   -> replaced by the hour (24h style);
* <HourB>  -> replaced by the hour (AM/PM style);
* <Phase>  -> replaced by the phase of the day (AM or PM);
* <Min>    -> replaced by the minutes;
* <Sec>    -> replaced by the seconds;
* <Day> or <DayA>     -> replaced by the day (number);
* <DayB>   -> replaced by the day of the week;
* <DayC>   -> replaced by the abbreviation of the day of the week;
* Examples: Saturday -> Sat, Sunday -> Sun, Monday -> Mon
* <Month> or <MonthA> -> replaced by the month (number);
* <MonthB> -> replaced by the month's name;
* <MonthC> -> replaced by the abbreviation of the month's name;
* Examples: January -> Jun, February -> Feb, December -> Dec
* <Year>   -> replaced by the year (number);
* <Date>   -> replaced by the date (day/month/year);
* <Time>   -> replaced by the time (hour:min:sec);
*
* Examples:
* Unlocked on <date> at <time> --> Unlocked on 19/05/2020 at 19:29:30
* Unlocked on <MonthC> <day>, at <HourB>:<min>:<sec> <phase> -->
*    Unlocked on May 19, at 07:29:30 PM
* Unlocked on <DayC> <MonthC> <year> --> Unlocked on Tue May 2020
*
* Notice that using upper/lower case is irrelevant, you can write
* <Date> or <date> or <DATE> or any other way you want.
*
*------------------------------------------------------------------------------
* USE TROPHIES
*------------------------------------------------------------------------------
* If you don't want to use trophies, you can deactivate this parameter, the
* trophies window will show the latest achievements unlocked instead. If you
* do so, you may also want to change the "Trophies" and the "Trophies
* Description" texts on the "Texts and Colors" parameter.
*
* In order to hide a specific trophy check the parameter "Hide Trophy"
* inside "Categories And Trophies".
*
* Selecting Trophies
* To select a trophy on the achievs menu make use of the left and right
* arrow keys, hold them to move the selector faster. It's also possible
* to click on the trophies to select them.
* 
*------------------------------------------------------------------------------
* POP UP WINDOW
*------------------------------------------------------------------------------
* This plugin allows you to show a Pop Up when an achievement is unlocked.
* When many achievements are unlocked at once they enter a queue.
* You can customize this window's properties using the plugin's parameters
* or even deactivate it changing the "Pop Up Window" parameter.
*
* Position
* When writing formulas for the X and Y coodinates, one can use PopUp.width and
* PopUp.height to refer to the Pop Up Window's width and height respectively.
*
* Button Pop Up
* This window may also become a button, if so, by clicking on it the player
* will be taken to the achievement's menu. This feature is also optional.
*
* Custom Images
* For default, achievements will show their background image (the same image
* you see on the menu) on the pop up, but you can make it show another image
* using the parameter "Pop Up Image" inside "Achievements Data". In any case,
* the image chosen will be resized to fit inside the pop up.
*
* Custom text
* It's also possible to write a text above the custom image using the parameter
* "Pop Up Text", this text allows text codes like \c[x] and \i[x] and others,
* but not only that, it have some customized text codes you may use:
* <AchievName>       -> replaced by the achievement's name;
* <AchievID>         -> replaced by the achievement's ID;
* <AchievIcon>       -> it'll draw the achievement's icon;
* <AchievCategory:n> -> replaced by the achievement's n-th category;
* <center>           -> centralizes this line of text;
* <right>            -> aligns this line of text to the right of the window;
* The left alignment is default, so there's no code for that.
*
* Example:
* Let's say you just unlocked the following achievement:
* Name:     "Beginner"
* Category: "All,Gameplay"
* ID:       6
*
* If you setup your pop up's text to:
* Unlocked: <AchievName> (<AchievID>)
* Cat: <AchievCategory:2>
* <center>Good Job!
*
* The pop up will show:
* Unlocked: Beginner (6)
* Cat: Gameplay
*      Good Job!
*
* These codes are case insensitive, which means that you can write <center>,
* <Center>, <CENTER> or any other way you want.
*
*------------------------------------------------------------------------------
* DEFAULT ICONS
*------------------------------------------------------------------------------
* These will be the icons used by default when no icon is specified on the
* achievement's data. Use -1 if you don't want to use an icon.
*
*------------------------------------------------------------------------------
* SORT OPTIONS
*------------------------------------------------------------------------------
* You may notice an option on the upper left corner of the achievements menu
* (A-z), this option may be used to order all the achievements in a specific
* way. To open this option you may just click on it, once open click in one of
* the options to re-order the achievements, clicking outside the box will
* cancel the selection.
*
* The keyboard and the gamepad may also be used to command the sort option,
* press "Shift" to open it, the arrow keys to select a new option and "Ok"
* (Z or Enter) to confirm or "Cancel" (X or Esc) to cancel.
*
* You can add/edit or even remove the sort options with this parameter.
* By removing all the options you'll deactivate it. You'll need some JavaScript
* knowledge to create or edit those options.
*
* In order to edit the file, one can make use of some variables:
*
* locked -> an array which stores all the locked (non secret) achievements;
*
* unlocked -> an array which stores all the unlocked achievements;
*
* secrets -> an array which stores all the secret achievements. Keep in mind
* that those are also locked, if a secret achievement is unlocked it'll be
* part of the unlocked array.
*
* main -> an empty array which will be returned as the new list of achievements
* for the achievements menu, so make sure to concat the other arrays into
* this one.
*
* all -> an array containing all the achievements, just like the other arrays,
* this one is filtered by the selected category. Also, no hidden achievement 
* will appear on any array, but once a hidden achievement is unlocked it'll be 
* part of the unlocked array.
*
* Examples:
*
* main = all;
* The example above will return the achievements with the same order as the
* database.
*
* main = main.concat(locked, unlocked, secrets);
* With the script above the achievements will also be at the same order as the
* database, except that the locked achievements will appear first, followed
* by the unlocked ones and at last the secret ones.
*
* You can use sort() to order the achievents, check the default value on
* "Sort Options" to see some examples.
*
*------------------------------------------------------------------------------
* YEP_MainMenuManager Compatibility
*------------------------------------------------------------------------------
* In case you want to use YEP_MainMenuManager you can turn the "Menu Command"
* parameter OFF and use the following settings:
*
*       Name: "Achievements"
*     Symbol: achievements
*       Show: true
*    Enabled: true
*        Ext:
*  Main Bind: this.commandAchievements.bind(this)
* Actor Bind:
*
* You can customize the "Name", "Show" and "Enabled" options.
*
*------------------------------------------------------------------------------
* PLUGIN COMMANDS
*------------------------------------------------------------------------------
* Command 1:
* ShowAchievements
*
* Action:
* Opens the achievements menu.
*
*  -  -  -  -  -  -  -  -  -  -
* Command 2:
* ShowAchievements categoryName
*
* Action:
* Opens the achievements menu on a specific category.
*
* Example:
* ShowAchievements Battle
*
*  -  -  -  -  -  -  -  -  -  -
* Command 3:
* RefreshAchievements
*
* Action:
* Manually refreshes the locked achievements, unlocking them in case their
* requirements are met.
*
*  -  -  -  -  -  -  -  -  -  -
* Command 4:
* ResetAchievementsData
*
* Action:
* Locks all the achievements and trophies.
*
*------------------------------------------------------------------------------
* SCRIPT CALLS
*------------------------------------------------------------------------------
* The id of an achievement is the number that appears next to it's data on
* the "Achievements Data" parameter, it's based on their order on that list
* so the first data will have id = 1, the second id = 2 and so on.
*
* Script 1:
* $gameSystem.achievement(id)
*
* Action:
* Returns the data of this achievement or null if there's no achievement
* with this id.
*
* Examples:
* $gameSystem.achievement(1);
* $gameSystem.achievement('Slime Slayer');
*
*  -  -  -  -  -  -  -  -  -  -
* Script 2:
* $gameSystem.achievement(id).isUnlocked()
*
* Action:
* Returns a boolean (true or false).
*
*  -  -  -  -  -  -  -  -  -  -
* Script 3:
* $gameSystem.achievement(id).isSecret()
*
* Action:
* Returns a boolean (true or false).
*
*  -  -  -  -  -  -  -  -  -  -
* Script 4:
* $gameSystem.achievement(id).isHidden()
*
* Action:
* Returns a boolean (true or false).
*
*  -  -  -  -  -  -  -  -  -  -
* Script 5:
* $gameSystem.achievement(id).unlock()
*
* Action:
* Forces this achievement to unlock.
*
*  -  -  -  -  -  -  -  -  -  -
* Script 6:
* $gameSystem.achievement(id).lock()
*
* Action:
* Locks the achievement again.
*
*  -  -  -  -  -  -  -  -  -  -
* Script 7:
* $gameSystem.unlockedAchievsCount()
*
* Action:
* Returns the number of achievements unlocked so far.
*
*  -  -  -  -  -  -  -  -  -  -
* Script 8:
* $gameSystem.lockedAchievsCount()
*
* Action:
* Returns the number of achievements still locked.
*
*  -  -  -  -  -  -  -  -  -  -
* Script 9:
* $gameSystem.isTrophyUnlocked(id)
*
* Action:
* Returns a boolean (true or false). You can use the category's name or ID.
*
* Examples:
* $gameSystem.isTrophyUnlocked(1);
* $gameSystem.isTrophyUnlocked('Battle');
*
*------------------------------------------------------------------------------
* Changelog
*------------------------------------------------------------------------------
* V 1.04 NEW
*    - General improvements on the plugin's script;
*    - Auto-refresh after transfer is now optional, check out the "Refresh
*    After Transfer" parameter;
*    - Added text codes to the parameters, "Categories Names",
*    and "Total Progress", check out the help section for more info;
*    - Added the Achievements' editor (ACHIEVENATOR);
*    - Added compatibility with YEP_MessageCore;
*    - Added compatibility with translation plugins: SRD_TranslationEngine,
*    KDTools_Localization and Iavra Localization - Core;
*    - When using the Global range, creating an Achievements.json file inside 
*    the "data" folder won't be necessary anymore, in case it doesn't exist,
*    an achievs.rpgsave file will be created automatically inside the "save"
*    folder;
*    - Fixed bug where unlocking an achievement with no background would still
*    show the "locked" image as background;
*    - Fixed bug where loading a game saved while the pop up is visible would
*    show the same pop up without background when that game is loaded;
*    - Fixed bug where the trophies could be misplaced when using the "Grow"
*    selector;
*
* V 1.03 
*    - The info window now open/close instead of just appearing/disappearing;
*    - Improved wrap text mechanic, and it also works on the info window now;
*    - Improved performance on the menu;
*    - Achievements are now refreshed after transfering;
*    - Parameter "Unlocked In" changed to "Unlocked On";
*    - New parameters for trophies on "Categories and Trophies": "Hide Trophy",
*    "Trophy Image" and "On Unlock";
*    - New parameter inside "Use Trophies": "Trophy Selector";
*    - Added option to select images for locked and secret achievements (check
*    out "Locked Achiev Background" and "Secret Achiev Background";
*    - Added text codes for the pop up's text and for the "Unlocked On" text;
*    - Added possibility to set custom images for categories;
*    - It's possible to set a different image for the pop up for each achiev,
*    check out "Pop Up Image" inside "Achievements Data";
*    - Fixed bug where advanced requirements were not working properly;
*
* V 1.02 
*    - Fixed bug with plugin commands;
*    - Fixed bug where achievements unlocked with script calls were not
*    being saved on global range;
*
* V 1.01 
*    - New parameter added: Global Rewards;
*
* V 1.00 
*    - Plugin released!
*
*------------------------------------------------------------------------------
* END OF THE HELP FILE
*------------------------------------------------------------------------------
*/
//==========================================================================================
// Categories Structure
//==========================================================================================
/*~struct~categories:
*
* @param Category Name
* @desc Choose a name for this category.
* @default Battle
*
* @param New Scene Name
* @desc Choose a new name for the menu when this category is selected.
* @default
*
* @param Category Background
* @type file
* @dir img/achievements
* @require 1
* @desc This image will appear behind the category's name when
* selecting categories.
* @default
*
* @param New Menu Background
* @type file
* @dir img/achievements
* @require 1
* @desc This image will be the menu's background when this category
* is selected.
* @default
*
* @param Locked Achiev Image
* @type file
* @dir img/achievements
* @require 1
* @desc Locked achievements on this category will have this image
* as background by default.
* @default
*
* @param Secret Achiev Image
* @type file
* @dir img/achievements
* @require 1
* @desc Secret achievements on this category will have this image
* as background by default.
* @default
*
* @param Auto Color
* @type struct<catAutoColor>
* @desc Options to auto color the names of the achievements on this category.
* @default {"Color":"","AC Category Name":"true","AC Scene Name":"true","AC Achievs Names":"true","AC Pop Up":"true"}
*
* @param --- Trophy ---
* @default --------------------
*
* @param Hide Trophy
* @parent --- Trophy ---
* @type boolean
* @desc If ON, this trophy won't appear on the menu, but the player can still unlock it.
* @default false
*
* @param Trophy Description
* @parent --- Trophy ---
* @type note
* @desc Write a description for this category's trophy.
* @default "This is a description."
*
* @param Trophy Image
* @parent --- Trophy ---
* @type file
* @dir img/achievements
* @require 1
* @desc This image will be drawn on the achievements menu while this
* trophy is unlocked.
* @default
*
* @param Locked Trophy Image
* @parent --- Trophy ---
* @type file
* @dir img/achievements
* @require 1
* @desc This image will be drawn on the achievements menu while this
* trophy is locked.
* @default
*
* @param On Unlock
* @parent --- Trophy ---
* @type note
* @desc This script will be called once this trophy is unlocked.
* @default
*
*/

//==========================================================================================
// Category Auto Color Structure
//==========================================================================================
/*~struct~catAutoColor:
*
* @param Color
* @desc This color represents this category.
* @default
*
* @param AC Category Name
* @type boolean
* @on YES
* @off NO
* @desc Auto color the category's name on category selection?
* @default true
*
* @param AC Scene Name
* @type boolean
* @on YES
* @off NO
* @desc Auto color the scene name when this category is selected?
* @default true
*
* @param AC Achievs Names
* @type boolean
* @on YES
* @off NO
* @desc Auto color the achievements' names on this category?
* @default true
*
* @param AC Pop Up (AchievName)
* @type boolean
* @on YES
* @off NO
* @desc Auto color the achievement's name on the pop up?
* @default true
*
* @param AC Pop Up (AchievCat)
* @type boolean
* @on YES
* @off NO
* @desc Auto color the category's name on the pop up?
* @default true
*
* @param AC Pop Up (Borders)
* @type boolean
* @on YES
* @off NO
* @desc Auto color the pop up's borders?
* @default true
*
*/
//==========================================================================================
// Data Structure
//==========================================================================================
/*~struct~data:
*
* @param Name
* @desc Defines the name of this achievement.
* This name will appear when selecting achievements.
* @default Slime Slayer
*
* @param Category
* @desc Define the category of this achievement. You can set
* multiple categories, separate each one with a comma.
* @default Battle
*
* @param Description
* @type note
* @desc This text will be shown on this achievement's body.
* Maximum of 3 lines.
* @default "Kill 10 Slimes."
*
* @param Visibility
* @type select
* @option Visible from start
* @option Secret
* @option Hidden
* @desc Secret: You'll see this achievement with question marks.
* Hidden: You won't see this achievement on the menu.
* @default Visible from start
*
* @param Background Image
* @type file
* @dir img/achievements
* @require 1
* @desc Choose an image to serve as background for this achievement.
* @default
*
* @param Pop Up Image
* @type file
* @dir img/achievements
* @require 1
* @desc This image will be the pop up's background when this achievement is unlocked.
* @default
*
* @param Requirements
* @type struct<requirements>[]
* @desc Defines what is required to unlock this achievement.
* @default ["{\"Type\":\"Switch\",\"Item ID\":\"1\",\"Comparison\":\"≥\",\"Value\":\"1\",\"Alias\":\"\",\"Advanced\":\"------\",\"Current Value\":\"\",\"Final Value\":\"\"}"]
*
* @param Rewards
* @type struct<rewards>[]
* @desc Make a list with the rewards for unlocking this achievement.
* @default
*
* @param Icons
* @desc These icons will be drawn next to this achievement's name.
* They will overwrite the "Default Icons".
* @default ------
*
* @param Locked Icon
* @parent Icons
* @type number
* @min -2
* @desc -1 -> No icon at all;
* -2 -> Replaced the equivalent "Global Icon".
* @default -2
*
* @param Unlocked Icon
* @parent Icons
* @type number
* @min -2
* @desc -1 -> No icon at all; 
* -2 -> Replaced the equivalent "Global Icon".
* @default -2
*
* @param Secret Icon
* @parent Icons
* @type number
* @min -2
* @desc -1 -> No icon at all;
* -2 -> Replaced the equivalent "Global Icon".
* @default -2
*
*/
//==========================================================================================
// Requirements Structure
//==========================================================================================
/*~struct~requirements:
*
* @param Type
* @type select
* @option Custom(Advanced)
* @option Switch
* @option Variable
* @option Item
* @option Weapon
* @option Armor
* @option Gold
* @option Steps
* @option Playtime
* @option Save Count
* @option Battle Count
* @option Win Count
* @option Escape Count
* @option Party Member
* @option Party Level
* @option Party Size
* @desc Choose the requirement type.
* @default Switch
*
* @param Item ID
* @type Number
* @min 1
* @desc The ID of the Switch, Variable, Item, Weapon, Armor or
* Party Member.
* @default 1
*
* @param Comparison
* @type select
* @option =
* @option >
* @option ≥
* @option <
* @option ≤
* @option ≠
* @desc This will be used for comparison between the current
* value and the required one.
* @default ≥
*
* @param Required Value
* @desc This is the value required to unlock this achievement.
* @default 1
*
* @param Alias
* @desc This name will override the item's name.
* Read the help section to learn about it.
* @default
*
* @param Alias Icon
* @parent Alias
* @type number
* @min -1
* @desc The icon drawn next to your "Alias" name.
* Use -1 if you don't want to use an icon.
* @default -1
*
* @param Advanced
* @desc For custom items only.
* Check the parameters below.
* @default ------
*
* @param Current Value
* @parent Advanced
* @type note
* @desc Use JS to define this requirement's current value.
* Read the help section to learn about it.
* @default
*
* @param Final Value
* @parent Advanced
* @type note
* @desc Use JS to define this requirement's final value.
* Read the help section to learn about it.
* @default
*
*/
//==========================================================================================
// Rewards Structure
//==========================================================================================
/*~struct~rewards:
*
* @param Type
* @type select
* @option Custom(Advanced)
* @option Gold
* @option Item
* @option Weapon
* @option Armor
* @desc Select the item type.
* @default Gold
*
* @param Item ID
* @type number
* @min 1
* @desc Select the Item ID (ignore this if you selected Gold).
* @default 1
*
* @param Amount
* @type Number
* @min 1
* @desc Defines the amount of the selected item to be given
* to the player.
* @default 1
*
* @param Advanced
* @type note
* @desc Use JS to code a script, this script will be called once
* this achievement is unlocked. Works with all item types.
* @default
*
* @param Alias
* @desc This name will override the item's name.
* Read the help section to learn about it.
* @default
*
* @param Alias Icon
* @parent Alias
* @type number
* @min -1
* @desc The icon drawn next to your "Alias" name.
* Use -1 if you don't want to use an icon.
* @default -1
*
*/
//==========================================================================================
// Menu Settings Structure
//==========================================================================================
/*~struct~menuSets:
*
* @param Scene Name
* @type struct<sceneNameSets>
* @desc Settings of the window at the top of the menu.
* @default {"X":"0","Y":"0","Width":"Graphics.width","Height":"80","Opacity":"255","Font Face":"GameFont","Font Size":"28"}
*
* @param Categories
* @type struct<categoriesSets>
* @desc Settings for the categories' window.
* @default {"X":"0","Y":"80","Width":"Graphics.width / 3","Height":"Graphics.height - 80","Opacity":"255","Font Face":"GameFont","Font Size":"28","Columns":"1","Item Height":"72"}
*
* @param Trophies
* @type struct<trophiesSets>
* @desc Settings for the trophies' window.
* @default {"Enabled":"true","X":"0","Y":"80","Width":"Graphics.width * 2/3","Height":"Graphics.height - 80","Opacity":"255","Font Face":"GameFont","Font Size":"28","Lines":"2","Columns":"2","Selector":"Grow","Selector's Image":""}
*
* @param Achievements
* @type struct<achievementsSets>
* @desc Settings for the achievements' window.
* @default {"X":"0","Y":"0","Width":"Graphics.width","Height":"Graphics.height - 80","Opacity":"255","Font Face":"GameFont","Font Size":"18","Columns":"Math.floor(Graphics.width / 200)","Item Height":"144"}
*
* @param Achievs Info
* @type struct<achievsInfoSets>
* @desc Settings for the achievement's info window.
* @default {"X":"Graphics.width / 4","Y":"auto","Width":"Graphics.width / 2","Height":"auto","Opacity":"255","Font Face":"GameFont","Font Size":"28"}
*
* @param Pop Up
* @type struct<popUpSets>
* @desc Settings for the info window.
* @default {"Enabled":"true","X":"Graphics.width - PopUp.width","Y":"0","Width":"140","Height":"106","Opacity":"255","Font Face":"GameFont","Font Size":"28","Button":"true","Fade Effect":"Fade In and Out","Move In":"From the right","Move In Easing":"Quadratic","Move In Custom-Easing":"","Move Out":"Go right","Move Out Easing":"Quadratic","Move Out Custom-Easing":""}
*
* @param Sort Option
* @type struct<sortOptSets>
* @desc Settings for the sort option.
* @default
*
*/
//==========================================================================================
// Scene Name Settings Structure
//==========================================================================================
/*~struct~sceneNameSets:
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default 0
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 0
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default Graphics.width
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default 80
*
* @param ------- Texts --------
* @default --------------------
*
* @param Title
* @parent ------- Texts --------
* @desc The default text drawn on this window.
* @default Achievements
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 28
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param Window Skin
* @parent ----- Appearence -----
* @type file
* @dir img/system
* @require 1
* @desc The image used to draw this window. Notice that this one is
* loaded from img/system, NOT from img/achievements.
*
* @param ------- Colors -------
* @default --------------------
*
* @param Text Color
* @parent ------- Colors -------
* @desc The default color used to draw this window's text.
* You can use Hexadecimal or rgba colors.
* @default #ffffff
*
*/
//==========================================================================================
// Categories Settings Structure
//==========================================================================================
/*~struct~categoriesSets:
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default 0
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 80
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default Graphics.width / 3
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default Graphics.height - 80
*
* @param ------- Texts --------
* @default --------------------
*
* @param Text
* @parent ------- Texts --------
* @desc Defines the style of the category's name.
* @default <name> (<unlocked>/<all>)
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 28
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param Window Skin
* @parent ----- Appearence -----
* @type file
* @dir img/system
* @require 1
* @desc The image used to draw this window. Notice that this one is
* loaded from img/system, NOT from img/achievements.
*
* @param Columns
* @parent ----- Appearence -----
* @desc Define the amount of columns for the categories.
* @default 1
*
* @param ------- Items --------
* @default --------------------
*
* @param Item Height
* @parent ------- Items --------
* @desc Defines the height for each category.
* @default 72
*
* @param Draw Rectangle
* @parent ------- Items --------
* @type Boolean
* @on YES
* @off NO
* @desc Do you want to draw a rectangle behind the
* categories' names when no image is selected?
* @default true
*
* @param Rect Border Size
* @parent Draw Rectangle
* @type number
* @min 0
* @max 10
* @desc Define the border's thickness.
* Leave it at zero if you don't want borders.
* @default 1
*
* @param Rect Border Color
* @parent Draw Rectangle
* @desc Define a color for the rectangle's borders.
* You can use hexadecimal or rgba colors.
* @default rgba(255,255,255,1)
*
*/
//==========================================================================================
// Trophies Settings Structure
//==========================================================================================
/*~struct~trophiesSets:
*
* @param Enabled
* @type boolean
* @desc If OFF, the trophies will be disabled.
* @default true
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default Graphics.width / 3
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 80
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default Graphics.width * 2 / 3
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default Graphics.height - 80
*
* @param ------- Texts --------
* @default --------------------
*
* @param Title
* @parent ------- Texts --------
* @desc This name will appear above the tophies.
* @default TROPHIES
*
* @param Description
* @parent ------- Texts --------
* @type note
* @desc This text will be right below the trophies' title.
* @default "Unlock trophies by completing achievements. Each category unlocks a different trophy."
*
* @param Locked
* @parent ------- Texts --------
* @desc This text will be shown when selecting a locked trophy.
* @default LOCKED
*
* @param Locked Sign
* @parent ------- Texts --------
* @desc This is the sign drawn over a locked trophy.
* @default ?
*
* @param Total Progress
* @parent ------- Texts --------
* @desc This is the text showed at the end of the trophies'
* window, below the progress gauge.
* @default Total Progress: <unlocked>/<all>
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 28
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param Window Skin
* @parent ----- Appearence -----
* @type file
* @dir img/system
* @require 1
* @desc The image used to draw this window. Notice that this one is
* loaded from img/system, NOT from img/achievements.
*
* @param Lines
* @parent ----- Appearence -----
* @type number
* @min 1
* @max 7
* @desc Define the number of columns on this window.
* @default 2
*
* @param Columns
* @parent ----- Appearence -----
* @type number
* @min 1
* @max 7
* @desc Define the number of columns on this window.
* @default 2
*
* @param ------- Colors -------
* @default --------------------
*
* @param Progress Gauge C1
* @parent ------- Colors -------
* @desc The first color for the total progress gauge.
* You can use hexadecimal or rgba colors. Default: rgba(20,255,20,1)
* @default #aa8300
*
* @param Progress Gauge C2
* @parent ------- Colors -------
* @desc The second color for the total progress gauge.
* You can use hexadecimal or rgba colors. Default: rgba(100,255,100,1)
* @default #ffa500
*
* @param ------- Items --------
* @default --------------------
*
* @param Item Height
* @parent ------- Items --------
* @desc Defines the height for each item on this window.
* @default 72
*
* @param ------ Selector ------
* @default --------------------
*
* @param Selector
* @parent ------ Selector ------
* @type select
* @option Grow
* @option Cursor
* @desc Grow -> The trophy will grow in size when selected.
* Cursor -> An image will appear around the trophy.
* @default Grow
*
* @param Selector Color
* @parent ------ Selector ------
* @desc The color of the selector.
* You can use hexadecimal or rgba colors. Default: #ff9900
* @default #ff9900
*
* @param Selector Image
* @parent ------ Selector ------
* @type file
* @dir img/achievements
* @require 1
* @desc Choose a custom image to use as the selector.
* @default
*/
//==========================================================================================
// Achievements Settings Structure
//==========================================================================================
/*~struct~achievementsSets:
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default 0
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 80
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default Graphics.width
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default Graphics.height - 80
*
* @param ------- Texts --------
* @default --------------------
*
* @param Secret Sign
* @parent ------- Texts --------
* @desc This text will replace the achievement's name in case it's secret.
* @default ???
*
* @param Secret Description
* @parent ------- Texts --------
* @type note
* @desc This text will be shown when selecting a secret achievement.
* @default "This is a secret achievement. It'll be revealed once it's requirements are met."
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 18
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param Window Skin
* @parent ----- Appearence -----
* @type file
* @dir img/system
* @require 1
* @desc The image used to draw this window. Notice that this one is
* loaded from img/system, NOT from img/achievements.
*
* @param Columns
* @parent ----- Appearence -----
* @desc Define the number of columns on this window.
* @default Math.floor(Graphics.width / 200)
*
* @param ------- Colors -------
* @default --------------------
*
* @param Unlocked Color
* @parent ------- Colors -------
* @desc The color of unlocked achievements' texts and borders.
* You can use hexadecimal or rgba colors. Default: #00ff00
* @default #00ff00
*
* @param Progress Gauge C1
* @parent ------- Colors -------
* @desc The first color for the achievements progress gauge.
* You can use hexadecimal or rgba colors. Default: rgba(20,255,20,1)
* @default rgba(20,255,20,1)
*
* @param Progress Gauge C2
* @parent ------- Colors -------
* @desc The second color for the achievements progress gauge.
* You can use hexadecimal or rgba colors. Default: rgba(100,255,100,1)
* @default rgba(100,255,100,1)
*
* @param ------- Items --------
* @default --------------------
*
* @param Item Height
* @parent ------- Items --------
* @desc Defines the height for each item on this window.
* @default 144
*
*/
//==========================================================================================
// Achievements Info Settings Structure //aqui
//==========================================================================================
/*~struct~achievsInfoSets:
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default 0
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 0
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default 100
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default 100
*
* @param ------- Texts --------
* @default --------------------
*
* @param Unlocked On
* @parent ------- Texts --------
* @desc Shown on the info window when the selected achievement is
* unlocked. Learn more about it on the Help section.
* @default Unlocked on <date> at <time>
*
* @param Requirements
* @parent ------- Texts --------
* @desc This text is shown above the requirements.
* @default Requirements:
*
* @param Rewards
* @parent ------- Texts --------
* @desc This text is shown above the rewards.
* @default Rewards:
*
* @param None
* @parent ------- Texts --------
* @desc This text appears when there's no requirements/rewards to be shown.
* @default None
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 28
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param Window Skin
* @parent ----- Appearence -----
* @type file
* @dir img/system
* @require 1
* @desc The image used to draw this window. Notice that this one is
* loaded from img/system, NOT from img/achievements.
*
*/
//==========================================================================================
// Pop Up Settings Structure
//==========================================================================================
/*~struct~popUpSets:
*
* @param Enabled
* @type boolean
* @desc If OFF, the pop up will be disabled.
* @default true
*
* @param Button
* @type boolean
* @desc If ON, the Pop Up will be a clickable button,
* which will take the player to the achievs menu.
* @default true
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default Graphics.width - 160
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 0
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default 160
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default 106
*
* @param ------- Texts --------
* @default --------------------
*
* @param Text
* @parent ------- Texts --------
* @type note
* @desc The text shown on the pop up window, text codes are allowed.
* @default "<center>\\c[1]\\}Unlocked:\n<center>\\c[0]\\{<achievName>"
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 28
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param ------- Border -------
* @default --------------------
*
* @param Border Size
* @parent ------- Border -------
* @type number
* @min 0
* @max 10
* @desc Define the border's thickness.
* Leave it at zero if you don't want borders.
* @default 1
*
* @param Border Color
* @parent ------- Border -------
* @desc The color for used on pop up's borders.
* You can use hexadecimal or rgba colors.
* @default #ff9900
*
* @param ----- Animation ------
* @default --------------------
*
* @param Fade Effect
* @parent ----- Animation ------
* @type select
* @option None
* @option Fade In
* @option Fade Out
* @option Both
* @desc Define the fade effect when the pop up appears/disappears.
* @default Both
*
* @param Move In
* @parent ----- Animation ------
* @type select
* @option None
* @option From above
* @option From the right
* @option From below
* @option From the left
* @desc Define the pop up's movement when it appears.
* @default From the right
*
* @param Move In Easing
* @parent Move In
* @type select
* @option Constant
* @option Quadratic
* @option Cubic
* @option Custom
* @desc The pop up's movement will follow this function.
* @default Quadratic
*
* @param Move In Custom-Easing
* @parent Move In
* @desc Define a custom formula for the pop up's movement.
* Use "t" as the time variable;
* @default
*
* @param Move Out
* @parent ----- Animation ------
* @type select
* @option None
* @option Go up
* @option Go right
* @option Go down
* @option Go left
* @desc Define the pop up's movement when it disappears.
* @default Go right
*
* @param Move Out Easing
* @parent Move Out
* @type select
* @option Constant
* @option Quadratic
* @option Cubic
* @option Custom
* @desc The pop up's movement will follow this function.
* @default Quadratic
*
* @param Move Out Custom-Easing
* @parent Move Out
* @desc Define a custom formula for the pop up's movement.
* Use "t" as the time variable;
* @default
*
* @param Size Change on Pop
* @parent ----- Animation ------
* @type select
* @option No size change
* @option Size Increase - Const
* @option Size Increase - Quad
* @option Size Increase - Cubic
* @option Size Increase - Custom
* @option Size Decrease - Const
* @option Size Decrease - Quad
* @option Size Decrease - Cubic
* @option Size Decrease - Custom
* @desc How the pop up's size should change once it appears.
* @default No size change
*
* @param Custom Size on Pop
* @parent Size Change on Pop
* @desc Define a custom formula for the pop up's movement.
* Use "t" as the time variable;
* @default
*
* @param Size Change on Hide
* @parent ----- Animation ------
* @type select
* @option No size change
* @option Size Increase - Const
* @option Size Increase - Quad
* @option Size Increase - Cubic
* @option Size Increase - Custom
* @option Size Decrease - Const
* @option Size Decrease - Quad
* @option Size Decrease - Cubic
* @option Size Decrease - Custom
* @desc How the pop up's size should change once it appears.
* @default No size change
*
* @param Custom Size on Hide
* @parent Size Change on Hide
* @desc Define a custom formula for the pop up's movement.
* Use "t" as the time variable;
* @default
*/
//==========================================================================================
// Sort Option Settings Structure
//==========================================================================================
/*~struct~sortOptSets:
*
* @param Enabled
* @type boolean
* @desc If OFF, the trophies will be disabled.
* @default true
*
* @param ------ Position ------
* @default --------------------
*
* @param X
* @parent ------ Position ------
* @desc Define the X position for this window.
* @default 15
*
* @param Y
* @parent ------ Position ------
* @desc Define the Y position for this window.
* @default 25
*
* @param -------- Size --------
* @default --------------------
*
* @param Width
* @parent -------- Size --------
* @desc Define the width for this window.
* @default 120
*
* @param Height
* @parent -------- Size --------
* @desc Define the Height for this window.
* @default 30
*
* @param ------- Texts --------
* @default --------------------
*
* @param Options
* @parent ------- Texts --------
* @type struct<sort>[]
* @desc Use JS to create new options, or just delete the ones you don't want.
* @default ["{\"Symbol\":\"A-z\",\"Script\":\"\\\"main = unlocked.concat(locked);\\\\nmain.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\nmain.push(...secrets);\\\"\"}","{\"Symbol\":\"Locked\",\"Script\":\"\\\"unlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\nlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\nmain = locked.concat(unlocked, secrets);\\\"\"}","{\"Symbol\":\"Unlocked\",\"Script\":\"\\\"unlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\nlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\nmain = unlocked.concat(locked, secrets);\\\"\"}","{\"Symbol\":\"Recent\",\"Script\":\"\\\"unlocked.sort((a, b) => SMO.AM.compareAchievsDates(a, b));\\\\nlocked.sort((a, b) => a.tname.localeCompare(b.tname, 'en', { sensitivity: 'base' }));\\\\nmain = unlocked.concat(locked, secrets);\\\"\"}"]
*
* @param -------- Font --------
* @default --------------------
*
* @param Font Face
* @parent -------- Font --------
* @desc Define the font used on this window.
* @default GameFont
*
* @param Font Size
* @parent -------- Font --------
* @type number
* @min 12
* @max 100
* @desc Define the default font size for this window.
* @default 18
*
* @param ----- Appearence -----
* @default --------------------
*
* @param Opacity
* @parent ----- Appearence -----
* @type number
* @min 0
* @max 255
* @desc Define the opacity of this window.
* @default 255
*
* @param ------- Images -------
* @default --------------------
*
* @param Button Img
* @parent ------- Images -------
* @type file
* @dir img/achievements
* @require 1
* @desc Here you may select a custom image to use on the sort option.
* @default
*
* @param List Img
* @parent ------- Images -------
* @type file
* @dir img/achievements
* @require 1
* @desc This image will be shown when you open the options list.
* @default
*/
//==========================================================================================
// Sort Option Structure
//==========================================================================================
/*~struct~sort:
* @param Symbol
* @desc This will be the name of this option.
* @default A-z
*
* @param Script
* @type note
* @desc The script called to sort the achievements. Check the @help section for more info.
* @default "main = unlocked.concat(locked);\nmain.sort((a, b) => a.Name.localeCompare(b.Name, 'en', { sensitivity: 'base' }));"
*
*/
var Imported = Imported || {};
var SMO = SMO || {};
SMO.AM = {};
Imported.SMO_Achievements = true;

var $dataAchievsMenuSets = null; //Menu settings
var $dataAchievsExtras = null; //Achievements created on the editor
SMO.AM.DataDynamic = null; //Locked and unlocked achievs (recent and unlocked dates too)
SMO.AM.DataCategories = null; //Categories and Trophies
SMO.AM.DataAchievements = null; //All achievements' data
SMO.AM.DefaultMenuSettings = ''; //Menu settings' backup
SMO.AM.unlockList = []; //Used to unlock many achievements at once
SMO.AM.currentCategory = { id: 0 }; //Current category on screen
SMO.AM.FrameCount = { lastValue: 0, value: 0 }; //Frame count (used for global mode)

//===========================================================================================
// PLAYTEST //edit
//===========================================================================================
SMO.log = function(text, color) {
	text = '%c' + String(text);
	color = color ? `color: ${color}` : '';
	return console.log(text, color);
};

SMO.AM.Ruler = null;
SMO.AM.getHorzRuler = function() {
	var Data = { width: Graphics.width, height: 30 };
	SMO.AM.Ruler = new Sprite_Grabbable(Data);
	SMO.AM.Ruler.bitmap.fillAll('rgba(0,0,0,0.4)');
	SMO.AM.Ruler.bitmap.fontSize = 8;
	SMO.AM.Ruler.bitmap.fillRect(0, 9, Graphics.width, 1, '#ffffff');
	SMO.AM.Ruler.bitmap.fillRect(0, 10, 1, 5, '#ffffff');
	for (var a = 2; a < Graphics.width; a++) {
		var text = String(a + 1);
		if (text[text.length - 1] === '0') {
			SMO.AM.Ruler.bitmap.fillRect(a, 10, 1, 8, '#ffffff');
			SMO.AM.Ruler.bitmap.drawText(a + 1, a - 4, 0, 8, 8, 'left');
			continue;
  		}
		if ((a + 1) % 5 === 0) {
			SMO.AM.Ruler.bitmap.fillRect(a, 10, 1, 5, '#ffffff');
			continue;
		}
		if (a % 2 === 0) {
			SMO.AM.Ruler.bitmap.fillRect(a, 10, 1, 2, '#ffffff');
		}
	}
	SMO.AM.Ruler.setFullGrabBox();
	SceneManager._scene.addChild(SMO.AM.Ruler);
};

SMO.AM.compare = function() {
	var count = 0;
	console.time('easy');
	while (count++ < 50) {
		SMO.AM.textWidthEx('12345678901234567890', 15, true);
	}
	count = 0;
	console.timeEnd('easy');

	console.time('ex');
	while (count++ < 50) {
		SMO.AM.textWidthEx('12345678901234567890', 15);
	}
	console.timeEnd('ex');

	console.time('new');
	while (count++ < 50) {
		SMO.AM.textWidthEasy('12345678901234567890', 15);
	}
	console.timeEnd('new');
};

SMO.AM.textWidthEasy = function(text, fontSize) {
	var text_w = 0;
	var letter_w = SMO.AM.textWidthEx('A', fontSize, true); //letter width
	var isFontOdd = (fontSize % 2) === 1;

	//Find the biggest line and measure it
	var lines = text.split('\n');
	var line_l = lines[0].length; //line lenght
	for (var i = 1; i < lines.length; i++) {
		if (lines[l].length <= line_l) {
			continue;
		}
		line_l = lines[l].length;
	}
	text_w = line_l * letter_w; //text width
	if (isFontOdd) {
		text_w -= Math.floor(line_l / 2);
	}
	return text_w;

};

//===========================================================================================
// Basics
//===========================================================================================
//Easing functions from: easings.net
function easeInBack(x) {
	const c1 = 1.70158;
	const c3 = c1 + 1;

	return c3 * x * x * x - c1 * x * x;
};

function easeOutBack(x) {
	const c1 = 1.70158;
	const c3 = c1 + 1;

	return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

if (!Array.prototype.last) {
	Array.prototype.last = function() {
		return this[this.length - 1];
	};
}

if (!Array.prototype.delete) {
	Array.prototype.delete = function(value) {
		if (value) {
			var index = this.indexOf(value);
			if (index > -1) {
				this.splice(index, 1);
			}
		}
		return this;
	};
}

if (!Array.prototype.deleteAll) {
	Array.prototype.deleteAll = function(value) {
		if (value == null) {
			this.splice(0, this.length);
		} else {
			while (this.contains(value)) {
				this.splice(this.indexOf(value), 1);
			}
		}
		return this;
	};
}

Number.toNatural = function(n) {
	return n > 0 ? Math.round(n) : 0;
};

//===========================================================================================
// Bitmap
//===========================================================================================
//Draws the rectangle with a gradation (you can use "n" colors)
Bitmap.prototype.gradientFillRectS = function(x, y, width, height, colors, vertical) {
	if (Object.prototype.toString.call(colors) !== '[object Array]') return;
	if (colors.length < 2) return;
	var context = this._context;
	var grad;
	if (vertical) {
		grad = context.createLinearGradient(x, y, x, y + height);
	} else {
		grad = context.createLinearGradient(x, y, x + width, y);
	}
	for (var c = 0; c < colors.length; c++) {
		var stop = c / (colors.length - 1);
		grad.addColorStop(stop, colors[c]);
	}
	context.save();
	context.fillStyle = grad;
	context.fillRect(x, y, width, height);
	context.restore();
	this._setDirty();
};

Bitmap.prototype.getContextGradient = function(context, x, y, width, height, colors, vertical) {
	if (!Array.isArray(colors)) return colors;
	var grad = vertical ? context.createLinearGradient(x, y, x, y + height) : context.createLinearGradient(x, y, x + width, y);
	for (var c = 0; c < colors.length; c++) {
		var stop = c / (colors.length - 1);
		grad.addColorStop(stop, colors[c]);
	}
	return grad;
};

//Draws a triangle
// Number: x -> x coordinate for the top left corner
// Number: y -> y coordinate for the top left corner
// Number: base -> the width of the triangle's base
// Number: height -> the height of the triangle
// String: direction -> the side it'll be pointed at ('left', 'right', 'up' or 'down')
// String: color -> Hexadecimal ("#ffffff") or rgba ("rgba(255,255,255,1)")
Bitmap.prototype.drawTriangleS = function(x, y, base, height, direction, color) {
	if (!(base > 0) || !(height > 0)) return;
	var p1, p2, p3;
	switch(direction) {
	case 'left':
		p1 = {x: x, y: y + base / 2};
		p2 = {x: x + height, y: y};
		p3 = {x: x + height, y: y + base};
		break;
	case 'right':
		p1 = {x: x + height, y: y + base / 2};
		p2 = {x: x, y: y};
		p3 = {x: x, y: y + base};
		break;
	case 'up':
		p1 = {x: x + base / 2, y: y};
		p2 = {x: x, y: y + height};
		p3 = {x: x + base, y: y + height};
		break;
	default:
		p1 = {x: x + base / 2, y: y + height};
		p2 = {x: x, y: y};
		p3 = {x: x + base, y: y};
		break;
	}
	color = color || "#ffffff";
	var context = this._context;
	context.save();
	context.fillStyle = color;
	context.beginPath();
	context.moveTo(p1.x, p1.y);
	context.lineTo(p2.x, p2.y);
	context.lineTo(p3.x, p3.y);
	context.fill();
	context.restore();
	this._setDirty();
};

//Draws a rectangle with borders
// Number: x -> x coordinate for the top left corner
// Number: y -> y coordinate for the top left corner
// Number: width -> the rectangle's width
// Number: height -> the rectangle's height
// Number: borderSize -> the thickness for the border
// String: borderColor -> color for the borders
// String: backColor -> color for the background
// String: backImg -> the path for the image used as background (EG: "achievements/Book") 
// Colors may be hexadecimal (EG: "#ffffff") or rgba (EG: "rgba(255,255,255,1)")
Bitmap.prototype.drawBorderedRect = function(x, y, width, height, borderSize, borderColor, backColor, backImg) {
	this.drawRectBorders(x, y, width, height, borderSize, borderColor);
	this.drawRectBackground(x, y, width, height, borderSize, backColor, backImg);
};

Bitmap.prototype.drawRectBorders = function(x, y, width, height, thickness, color) {
	if (!(thickness > 0)) return;
	var size = thickness;
	var isGradient = Array.isArray(color);
	if (isGradient) {
		var colors = color.clone();
		var vertical = false;
		var index = colors.indexOf('vertical');
		if (index > -1) {
			vertical = true;
			colors.splice(index, 1);
		}
		colors[0] = colors[0] || '#ffffff';
		colors[1] = colors[1] || '#ffffff';
		this.gradientFillRectS(x, y, width, height, colors, vertical);
		this.clearRect(x + size, y + size, width - size * 2, height - size * 2);
	} else {
		color = color || '#ffffff';
		this.fillRect(x, y, width, height, color);
		this.clearRect(x + size, y + size, width - size * 2, height - size * 2);
	}
};

Bitmap.prototype.drawRectBackground = function(x, y, width, height, borderSize, color, img) {
	if (color == null && img == null) return;
	var bds = borderSize || 0;
	x += bds;
	y += bds;
	width -= bds * 2;
	height -= bds * 2;
	if (img) {
		var index = img.lastIndexOf('/') + 1;
		var filename = img.slice(index, img.length);
		var path = 'img/' + img.slice(0, index);
		var bitmap = ImageManager.loadBitmap(path, filename, 0, true);
		return this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, width, height);
	}

	var isGradient = Array.isArray(color);
	if (isGradient) {
		var colors = color.clone();
		var vertical = false;
		var index = colors.indexOf('vertical');
		if (index > -1) {
			vertical = true;
			colors.splice(index, 1);
		}
		colors[0] = colors[0] || 'rgba(0,0,0,0)';
		colors[1] = colors[1] || 'rgba(0,0,0,0)';
		this.gradientFillRectS(x, y, width, height, colors, vertical);
	} else {
		color = color || 'rgba(0,0,0,0)';
		this.fillRect(x, y, width, height, color);
	}
};

Bitmap.prototype.drawBorderedAndRoundedRect = function(x, y, width, height, radius, borderSize, 
												borderColor, backColor) {
	//Drawing borders
	this.drawRoundedRect(x, y, width, height, radius, borderColor);
	x += borderSize;
	y += borderSize;
	width -= borderSize * 2;
	height -= borderSize * 2;
	radius -= borderSize;
	this.clearRoundRect(x, y, width, height, radius);
	//Drawing background
	this.drawRoundedRect(x, y, width, height, radius, backColor);
};

Bitmap.prototype.drawRoundedBorders = function(x, y, width, height, radius, thickness, color) {
	var bitmap = new Bitmap(width, height);
	bitmap.drawRoundedRect(0, 0, width, height, radius, color);
	var x2 = x + thickness;
	var y2 = y + thickness;
	var w2 = width - thickness * 2;
	var h2 = height - thickness * 2;
	radius -= thickness;
	bitmap.clearRoundRect(x2, y2, w2, h2, radius);
	this.blt(bitmap, 0, 0, width, height, x, y, width, height);
};

// Method: "drawRoundedRect"
// * Draws a rectangle with rounded corners
// Number: x -> x coordinate for the top left corner
// Number: y -> y coordinate for the top left corner
// Number: width -> the rectangle's width
// Number: height -> the rectangle's height
// Number: radius -> the radius of the corners
// String: color -> color for the background
// Colors may be hexadecimal (EG: "#ffffff") or rgba (EG: "rgba(255,255,255,1)")
Bitmap.prototype.drawRoundedRect = function(x, y, width, height, radius, color, image) {
	if (image) {
		var index = image.lastIndexOf('/') + 1;
		var filename = image.slice(index, image.length);
		var path = 'img/' + image.slice(0, index);
		var source = ImageManager.loadBitmap(path, filename, 0, true);
		return this.drawRoundedImage(source, x, y, width, height, radius);
	}
	var r = radius;
	var d = r * 2;
	//The radius can't be bigger than the width or the height
	if (!(width >= d) || !(height >= d)) return;
	color = color || 'rgba(0,0,0,0.6)';

	var context = this._context;
	var vertical = false;
	if (Array.isArray(color)) { //Gradient
		var colors = color.clone();
		var index = colors.indexOf('vertical');
		if (index > -1) {
			vertical = true;
			colors.splice(index, 1);
		}
		colors[0] = colors[0] || 'rgba(0,0,0,0)';
		colors[1] = colors[1] || 'rgba(0,0,0,0)';
		color = this.getContextGradient(context, x, y, width, height, colors, vertical);
	}

	context.save();
	context.fillStyle = color;
	context.beginPath();
	//Top left corner
	context.moveTo(x, y + r);
	context.arc(x + r, y + r, radius, Math.PI, Math.PI * 3/2, false);
	context.lineTo(x + width - r, y);
	//Top right corner
	context.arc(x + width - r, y + r, radius, Math.PI * 3/2, Math.PI * 2, false);
	context.lineTo(x + width, y + height - r);
	//Bottom right corner
	context.arc(x + width - r, y + height - r, radius, 0, Math.PI * 1/2, false);
	context.lineTo(x - r, y + height);
	//Bottom left corner
	context.arc(x + r, y + height - r, radius, Math.PI * 1/2, Math.PI, false);
	context.lineTo(x, y + r);
	context.fill();
	context.restore();
	this._setDirty();
};

Bitmap.prototype.clearRoundRect = function(x, y, width, height, radius) {
	var r = radius;
	var d = r * 2;
	var context = this._context;
	context.save();
	context.beginPath();
	context.fillStyle = '#ffffff';
	context.globalCompositeOperation = 'xor';

	//Start drawing
	context.moveTo(x, y + r);
	//Top left corner
	context.arc(x + r, y + r, radius, Math.PI, Math.PI * 3/2, false);
	context.lineTo(x + width - r, y);
	//Top right corner
	context.arc(x + width - r, y + r, radius, Math.PI * 3/2, Math.PI * 2, false);
	context.lineTo(x + width, y + height - r);
	//Bottom right corner
	context.arc(x + width - r, y + height - r, radius, 0, Math.PI * 1/2, false);
	context.lineTo(x - r, y + height);
	//Bottom left corner
	context.arc(x + r, y + height - r, radius, Math.PI * 1/2, Math.PI, false);
	context.lineTo(x, y + r);
	//End drawing
	context.fill();

	context.globalCompositeOperation = 'source-over';
	context.restore();
	this._setDirty();
};

//Method: "drawRoundedImage"
// * Draws an image with rounded corners
// Object: source -> instanceof Bitmap
// Number: x -> x coordinate for the top left corner of the drawing
// Number: y -> y coordinate for the top left corner of the drawing
// Number: width -> the image's final width
// Number: height -> the image's final height
// Number: radius -> the radius of the corners
Bitmap.prototype.drawRoundedImage = function(source, x, y, width, height, radius) {
	//Draw a rounded-rect shape on another bitmap
	var bitmap = new Bitmap(width, height);
	bitmap.drawRoundedRect(0, 0, width, height, radius, '#ff0000');
	//Draw the image inside the drawn shape
	var sw = source.width;
	var sh = source.height;
	var context = bitmap._context;
	context.globalCompositeOperation = 'source-in';
	context.drawImage(source._canvas, 0, 0, sw, sh, 0, 0, width, height);
	context.globalCompositeOperation = 'source-over';
	bitmap._setDirty();
	//Draw the bitmap with the drawn image on this one
	this.blt(bitmap, 0, 0, width, height, x, y, width, height);
};

//Draws a rectangle with specific rounded corners
// Array: rounded -> what corners are rounded? [bool, bool, bool, bool]
// Number: x -> x coordinate for the top left corner
// Number: y -> y coordinate for the top left corner
// Number: width -> the rectangle's width
// Number: height -> the rectangle's height
// Number: radius -> the radius for the borders
// String: color -> color for the background
// Colors may be hexadecimal (EG: "#ffffff") or rgba (EG: "rgba(255,255,255,1)")
Bitmap.prototype.drawRoundedRectB = function(rounded, x, y, width, height, radius, color) {
	if (!rounded || Object.prototype.toString.call(rounded) != '[object Array]') {
		return this.drawRoundedRect(x, y, width, height, radius, backColor);
	}
	var r = radius;
	var r1 = rounded[0] ? r : 0; //top left corner
	var r2 = rounded[1] ? r : 0; //top right corner
	var r3 = rounded[2] ? r : 0; //bottom right corner
	var r4 = rounded[3] ? r : 0; //bottom left corner
	var d = r * 2;
	if (!(width > d) || !(height > d)) return;
	color = color || 'rgba(0,0,0,0.6)';
	var context = this._context;
	context.save();
	context.fillStyle = color;
	context.beginPath();
	context.moveTo(x, y + r1);
	if (r1) {
		context.arc(x + r1, y + r1, radius, Math.PI, Math.PI * 3/2, false);
	}
	context.lineTo(x + width - r2, y);
	if (r2) {
		context.arc(x + width - r2, y + r2, radius, Math.PI * 3/2, Math.PI * 2, false);
	}
	context.lineTo(x + width, y + height - r3);
	if (r3) {
		context.arc(x + width - r3, y + height - r3, radius, 0, Math.PI * 1/2, false);
	}
	context.lineTo(x - r4, y + height);
	if (r4) {
		context.arc(x + r4, y + height - r4, radius, Math.PI * 1/2, Math.PI, false);
	}
	context.fill();
	context.restore();
	this._setDirty();
};

//Method: "drawCircumference"
// * Draws a circumference with the given thickness
// Number: x -> x coordinate for the center of the circumference
// Number: y -> y coordinate for the center of the circumference
// Number: radius -> the circumference's radius
// String: color -> the color used to draw it
Bitmap.prototype.drawCircumference = function(x, y, radius, thickness, color) {
	var diameter = radius * 2;
	var bitmap = new Bitmap(diameter, diameter);
	bitmap.drawCircle(radius, radius, radius, color);
	x -= radius;
	y -= radius;
	var r2 = radius - thickness;
	bitmap.clearCircle(radius, radius, r2);
	this.blt(bitmap, 0, 0, diameter, diameter, x, y, diameter, diameter);
};

Bitmap.prototype.drawCircleBackground = function(x, y, radius, color, image) {
	if (!image) return this.drawCircle(x, y, radius, color);
	x -= radius;
	y -= radius;
	var index = image.lastIndexOf('/') + 1;
	var filename = image.slice(index, image.length);
	var path = 'img/' + image.slice(0, index);
	var source = ImageManager.loadBitmap(path, filename, 0, true);
	this.drawCircleImage(source, x, y, radius);
};

Bitmap.prototype.drawCircleImage = function(source, x, y, radius) {
	var diameter = radius * 2;
	//Draw a rounded-rect shape on another bitmap
	var bitmap = new Bitmap(diameter, diameter);
	bitmap.drawCircle(radius, radius, radius, '#ff0000');
	//Draw the image inside the drawn shape
	var sw = source.width;
	var sh = source.height;
	var context = bitmap._context;
	context.globalCompositeOperation = 'source-in';
	context.drawImage(source._canvas, 0, 0, sw, sh, 0, 0, diameter, diameter);
	context.globalCompositeOperation = 'source-over';
	bitmap._setDirty();
	//Draw the bitmap with the drawn image on this one
	this.blt(bitmap, 0, 0, diameter, diameter, x, y, diameter, diameter);
}

Bitmap.prototype.clearCircle = function(x, y, radius) {
	var context = this._context;
	context.save();
	context.beginPath();
	context.fillStyle = '#ff0000';
	context.globalCompositeOperation = 'xor';
	context.arc(x, y, radius, 0, Math.PI * 2, false);
	context.fill();
	context.globalCompositeOperation = 'source-over';
	context.restore();
	this._setDirty();
};

//==========================================================================================
// Plugin Parameters
//============================== ============================================================
SMO.AM.parse = function(text) {
	if (!text) return '';
	return JSON.parse(text);
};

SMO.AM.toBool = function(str) {
	return String(str) === 'true' ? true : false;
};

SMO.Params = PluginManager.parameters('SMO_Achievements');
SMO.AM.isGlobalMode = SMO.AM.toBool(SMO.Params['Global Mode']);
SMO.AM.isGlobalRewards = SMO.AM.isGlobalMode ? SMO.AM.toBool(SMO.Params['Global Rewards']) : false;
SMO.AM.isGlobalAutoReset = SMO.AM.isGlobalMode ? SMO.AM.toBool(SMO.Params['Global Auto Reset']) : false;
SMO.AM.isEditorEnabled = SMO.AM.toBool(SMO.Params['Use Editor']);
SMO.AM.autoRefresh = SMO.AM.toBool(SMO.Params['Auto Refresh']);
SMO.AM.transferRefresh = SMO.AM.toBool(SMO.Params['Refresh After Transfer']);
SMO.AM.updateInterval = Number(SMO.Params['Update Interval']);
SMO.AM.onUnlockScript = SMO.AM.parse(SMO.Params['On Unlock']);
SMO.AM.hideTotally = SMO.AM.toBool(SMO.Params['Hide Totally']);

//------------------------------------------------------------------------------------------
// Getting the images' names

SMO.AM.Images = {
	menu: String(SMO.Params['Menu Background']), //Menu background
	locked: String(SMO.Params['Locked Achievement Img']), //Locked achievements
	secret: String(SMO.Params['Secret Achievement Img']), //Secret achievements
	lockedTrophy: String(SMO.Params['Locked Trophy Img']), //Locked trophies
	all: {} //All images
};

if (String(SMO.Params['Menu Background'])) {
	SMO.AM.Images.all[String(SMO.Params['Menu Background'])] = true;
}
if (String(SMO.Params['Locked Achievement Img'])) {
	SMO.AM.Images.all[String(SMO.Params['Locked Achievement Img'])] = true;
}
if (String(SMO.Params['Secret Achievement Img'])) {
	SMO.AM.Images.all[String(SMO.Params['Secret Achievement Img'])] = true;
}
if (String(SMO.Params['Locked Trophy Img'])) {
	SMO.AM.Images.all[String(SMO.Params['Locked Trophy Img'])] = true;
}

//------------------------------------------------------------------------------------------
// Getting structures' data

(function() {
	//--------------------------------------------------------------------------------------
	// Get Menu Settings

	var MenuSettings, selector, enabled, options, numbers;
	var Texts, text;
	var Categories;
	var SortOption;

	//Formatting the properties' names (EG: "Font Size" becomes "fontSize")
	// String: prop -> the property's name
	// Boolean: lowerCase -> should the first letter be lower case?
	function FormatProp(prop, lowerCase) {
		//Removing empty spaces
		var p = prop.replace(/\s/g, '');
		//Turning the first letter lower case
		p = lowerCase ? p.replace(prop[0], prop[0].toLowerCase()) : p;
		return p;
	};

	//Menu Settings' version
	//If you change a parameter's name or add another parameter -> increase this number
	$dataAchievsMenuSets = { 
		info: {
			version: 0.115
		}
	};

	numbers = ['opacity', 'fontSize']; //number type parameters
	MenuSettings = JSON.parse(SMO.Params['Menu Settings']);
	for (var i in MenuSettings) {
		var i2 = FormatProp(i);
		$dataAchievsMenuSets[i2] = {};
		var obj = JSON.parse(MenuSettings[i]);
		for (var j in obj) {
			//Checking if this line should be ignored
			if (j[0] === '-') {
				continue;
			}

			var j2 = FormatProp(j, true);
			var value = numbers.contains(j2) ? Number(obj[j]) : obj[j];
			$dataAchievsMenuSets[i2][j2] = value;
		}
	}

	//Formatting some properties' values
	var Menu = $dataAchievsMenuSets;

	//Achievements
	Menu.Achievements.secretDescription = SMO.AM.parse(Menu.Achievements.secretDescription);

	//Trophies
	Menu.Trophies.enabled = SMO.AM.toBool(Menu.Trophies.enabled);
	Menu.Trophies.selector = Menu.Trophies.selector === 'Grow' ? 'grow' : 'cursor';
	Menu.Trophies.description = SMO.AM.parse(Menu.Trophies.description);

	//Pop Up
	Menu.PopUp.enabled = SMO.AM.toBool(Menu.PopUp.enabled);
	$dataAchievsMenuSets.PopUp.preselect = 0;
	$dataAchievsMenuSets.PopUp.isClickTriggered = false;

	//Sort Option
	Menu.SortOption.enabled = SMO.AM.toBool(Menu.SortOption.enabled);
	if (Menu.SortOption.options) {
		options = JSON.parse(Menu.SortOption.options);
		Menu.SortOption.options = [];
		options.forEach(function(o) {
			var parse = JSON.parse(o);
			Menu.SortOption.options.push({
				symbol: parse.Symbol,
				script: SMO.AM.parse(parse.Script)
			});
		});
	} else {
		//There are no options - deactivate the sort option
		Menu.SortOption.options = [];
		Menu.SortOption.enabled = false;
	}
	SMO.AM.DefaultMenuSettings = JSON.stringify($dataAchievsMenuSets);

	//--------------------------------------------------------------------------------------
	// Get Categories

	SMO.AM.DataCategories = [];
	Categories = SMO.AM.parse(SMO.Params['Categories And Trophies']) || [];
	for (var c = 0; c < Categories.length; c++) {
		if (c > 98) {
			console.warn('You reached the maximun of 99 categories, extra categories removed.');
			break;
		}

		var data = JSON.parse(Categories[c]);
		SMO.AM.DataCategories.push({
			id: c + 1,
			img: String(data['Category Background']),
			menuImg: String(data['New Menu Background']),
			lockedAchievImg: String(data['Locked Achiev Image']),
			secretAchievImg: String(data['Secret Achiev Image']),
			name: String(data['Category Name']),
			sceneName: String(data['New Scene Name']),
			autoColor: null,
			Trophy: {
				id: c + 1,
				img: data['Image'] || data['Trophy Image'],
				lockedImg: String(data['Locked Trophy Image']),
				description: SMO.AM.parse(data['Trophy Description']),
				hidden: SMO.AM.toBool(data['Hide Trophy']),
				onUnlock: SMO.AM.parse(data['On Unlock']),
				isUnlocked: function() {
					return SMO.AM.DataDynamic.trophies.unlocked.contains(this.id);
				},
				imageName: function() {
					return this.isUnlocked() ? this.img : this.lockedImg || SMO.AM.Images.lockedTrophy;
				}
			}
		});

		var Category = SMO.AM.DataCategories[c];
		if (data['Auto Color']) {
			var autoColor = JSON.parse(data['Auto Color']);
			Category.autoColor = {
				color: autoColor.Color,
				category: SMO.AM.toBool(autoColor['AC Category Name']),
				scene: SMO.AM.toBool(autoColor['AC Scene Name']),
				achievs: SMO.AM.toBool(autoColor['AC Achievs Names']),
				popUpAchiev: SMO.AM.toBool(autoColor['AC Pop Up (AchievName)']),
				popUpCat: SMO.AM.toBool(autoColor['AC Pop Up (AchievCat)']),
				popUpBorders: SMO.AM.toBool(autoColor['AC Pop Up (Borders)'])
			};
		}

		var Images = [
			Category.img,
			Category.menuImg,
			Category.lockedAchievImg,
			Category.secretAchievImg,
			Category.Trophy.img,
			Category.Trophy.lockedImg
		];
		for (var i = 0; i < Images.length; i++) {
			if (Images[i]) {
				SMO.AM.Images.all[Images[i]] = true;
			}
		}
	};

})();

//Get achievements' data from the plugin's parameters
SMO.AM.getAchievementsData = function() {
	SMO.AM.DataAchievements = [];
	var ignored = 0;
	var allData = JSON.parse(SMO.Params['Achievements Data']);
	for (var d = 0; d < allData.length; d++) {
		if (allData[d][0] !== '{') {
			//This is a custom line, ignore it
			ignored++;
			continue;
		}
		
		var singleData = JSON.parse(allData[d]);
		var id = d + 1 - ignored;
		SMO.AM.DataAchievements.push(new Achievement_Data(id, singleData));
	}
	if ($dataAchievsExtras) {
		SMO.AM.DataAchievements.push(...$dataAchievsExtras);
	}

	//Editor Data -> Used on as default data on the editor
	//when no other achievement has been unlocked
	var editorData = {"Name":"Slime Slayer","Category":"Battle","Description":"\"Kill 10 Slimes.\"","Visibility":"Visible from start","Background Image":"","Pop Up Image":"","Requirements":"[\"{\\\"Type\\\":\\\"Switch\\\",\\\"Item ID\\\":\\\"1\\\",\\\"Comparison\\\":\\\"≥\\\",\\\"Value\\\":\\\"1\\\",\\\"Alias\\\":\\\"\\\",\\\"Advanced\\\":\\\"------\\\",\\\"Current Value\\\":\\\"\\\",\\\"Final Value\\\":\\\"\\\"}\"]","Rewards":"","Icons":"------","Locked Icon":"-2","Unlocked Icon":"-2","Secret Icon":"-2"};
	SMO.AM.EditorAchievement = new Achievement_Data(d + 1 - ignored, editorData);//aqui
};

//Menu Command
SMO.AM.MenuCommand = {
	enabled: SMO.AM.toBool(SMO.Params['MC Active']),
	name: String(SMO.Params['MC Name']),
	switchId: Number(SMO.Params['MC Show Switch']),
	position: Number(SMO.Params['MC Position'])
};

//Title command
SMO.AM.TitleCommand = {
	enabled: SMO.AM.toBool(SMO.Params['TC Active']),
	name: String(SMO.Params['TC Name']),
	position: Number(SMO.Params['TC Position'])
};

//Default Icons
SMO.AM.Icons = {
	locked: SMO.Params['Locked Icon'] ? Number(SMO.Params['Locked Icon']) : -1,
	unlocked: SMO.Params['Unlocked Icon'] ? Number(SMO.Params['Unlocked Icon']) : -1,
	secret: SMO.Params['Secret Icon'] ? Number(SMO.Params['Secret Icon']) : -1,
	gold: SMO.Params['Gold Icon'] ? Number(SMO.Params['Gold Icon']) : -1,
	recentUnlock: SMO.Params['Recent Unlock'] ? Number(SMO.Params['Recent Unlock']) : -1
};

//==========================================================================================
// Other SMO.AM Methods
//==========================================================================================
//Setup the dynamic data when a new game is started
SMO.AM.onNewGame = function() {
	$gameSystem.setupAchievs();

	if (SMO.AM.isGlobalRewards) {
		//Give all the global rewards to the player
		SMO.AM.DataDynamic.achievs.unlocked.forEach(function(a) {
			$gameSystem.achievement(a).gainRewards();
		});
	}
	SMO.AM.FrameCount.lastValue = 0;
};


SMO.AM.loadDefaultSettings = function() {
	$dataAchievsMenuSets = JSON.parse(SMO.AM.DefaultMenuSettings);
	if (DataManager.saveAchievsMenu()) {
		var scene = SceneManager._scene;
		if (scene instanceof Scene_Achievements) {
			scene.setCurrentCategory();
			SceneManager.pop();
		}
		return true;
	}
	return false;
};

//Defining a setting for a window ("this" points to that window's object)
SMO.AM.defineWindowSetting = function(windowName, parameter, value, refresh) {
	if (value == null) return;
	if ($dataAchievsMenuSets[windowName] == null) {
		return console.warn('The following window does not exist: ' + windowName);
	}
	if ($dataAchievsMenuSets[windowName][parameter] == null) return;
	$dataAchievsMenuSets[windowName][parameter] = value;
	if (refresh) {
		SMO.AM.refreshWindowSetting.call(this, windowName, parameter);
	}
};

SMO.AM.refreshWindowSetting = function(windowName, parameter) {
	switch(parameter) {
	case 'x':
	case 'y':
		this[parameter] = eval($dataAchievsMenuSets[windowName][parameter]);
		break;
	case 'width':
	case 'height':
		this[parameter] = eval($dataAchievsMenuSets[windowName][parameter]);
		//Recreate the bitmap
		if (this.createContents) {
			this.createContents();
		} else if (this.onResize) {//edit
			this.onResize();
		} else {//edit
			console.warn(`The window "${windowName}" doesn't have a "this.onResize" method.`)
		}
		this.refresh();
		break;
	case 'fontSize':
	case 'fontFace':
	case 'textColor':
		this.contents[parameter] = $dataAchievsMenuSets[windowName][parameter];
		this.refresh(); //Redraw the text
		break;
	case 'windowSkin':
		this.windowskin = ImageManager.loadSystem($dataAchievsMenuSets[windowName].windowSkin);
		break;
	case 'opacity':
		this.opacity = $dataAchievsMenuSets[windowName].opacity;
		break;
	case 'title':
	case 'text':
	case 'locked':
	case 'secretSign':
	case 'secretDescription':
	case 'description':
	case 'totalProgress':
	case 'progressGaugeC1':
	case 'progressGaugeC2':
		this.refresh(); //Redraw the text
	}
};

SMO.AM.isAchievementsScene = function() {
	var scene = SceneManager._scene;
	return !!scene && (scene instanceof Scene_Achievements);
};

SMO.AM.refreshAchievementsScene = function(easy, unlocking) {
	if (!this.isAchievementsScene()) return;
	if (easy) return SceneManager._scene.easyRefresh(unlocking);
	return SceneManager._scene.fullRefresh();
};

SMO.AM.refreshGoldWindow = function() {
	SMO.AM.refreshWindow('_goldWindow');
};

SMO.AM.refreshItemWindow = function() {
	SMO.AM.refreshWindow('_itemWindow');
};

SMO.AM.refreshWindow = function(windowName) {
	var Scene = SceneManager._scene;
	if (!Scene) return;
	if (!Scene[windowName]) return;
	if (!Scene[windowName].refresh) return;
	Scene[windowName].refresh();
};

SMO.AM.refreshUnlockedTrophies = function(forceSave) {
	var updated = false;
	var Trophies = SMO.AM.DataDynamic.trophies;
	for (var id = 1; id < SMO.AM.DataCategories.length + 1; id++) {
		//if this trophy is already unlocked -> continue
		if (Trophies.unlocked.contains(id)) {
			continue;
		}
		let Category = SMO.AM.DataCategories[id - 1];
		let Achievements = SMO.AM.getAchievsByCategory(Category.name);
		//if this trophy's category has any achievement not unlocked -> continue
		if (Achievements.some(a => !a.isUnlocked())) {
			continue;
		}

		//Unlocking Trophy
		Trophies.unlocked.push(id);
		Trophies.locked.delete(id);
		if (Category.Trophy.onUnlock) {
			try {
				eval(Category.Trophy.onUnlock);
			} catch (e) {
				console.error(`Error on trophy's unlock script (${Category.name}).`);
				console.error(e);
			}
		}
		updated = true;
	}
	if (updated || forceSave) {
		DataManager.saveGlobalAchievements();
	}
};

SMO.AM.isPlaytest = function() {
	return $gameTemp ? $gameTemp.isPlaytest() : Utils.isOptionValid('test');
};

//---------------------------------------------------------------------------------------
// Time Management

//Get an obj with date info
SMO.AM.getDate = function() {
	var date = new Date(); //the date will be like "Sat Jul 18 2020 10:52:06"
	var arr = date.toString().split(' ');

	var hours = arr[4].split(':');
	var hour = String(hours[0].padZero(2));
	var hourA = hour;
	var hourB = Math.max(0, Number(hours[0]) - 12);
	hourB = String(hourB).padZero(2);
	var phase = Number(hours[0]) >= 12 ? 'PM' : 'AM';
	var min = String(hours[1].padZero(2));
	var sec = String(hours[2].padZero(2));

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var day_week = date.getDay();
	var day = String(arr[2].padZero(2));
	var dayA = day;
	var dayB = days[day_week];
	var dayC = arr[0];

	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
		'September', 'October', 'November', 'December'];
	var month_id = date.getMonth() + 1;
	var month = String(month_id.padZero(2));
	var monthA = month;
	var monthB = months[month_id];
	var monthC = arr[1];
	var year = arr[3];
	var now = date.getTime();

	var Data = {
		//"ab" stands for "abbreviated"
		hour, //hour (24h)
		hourA, //hour (24h)
		hourB, //hour (AM/PM)
		phase, //AM or PM
		min, //min
		sec, //sec
		day, //day (1 - 31)
		dayA, //day (1 - 31)
		dayB, //day of the week
		dayC, //day of the week (ab)
		month, //month (1 - 12)
		monthA, //month (1 - 12)
		monthB, //month's name
		monthC, //month's name (ab)
		year, //year
		now //date now
	};
	Data.date =  `${day}/${month}/${year}`;
	Data.time = `${hour}:${min}:${sec}`;
	return Data;
};

//Check which of the given achievs was unlocked first (for a sort() function)
SMO.AM.compareAchievsDates = function(achiev1, achiev2) {
	var v1 = achiev1.getUnlockDateNow();
	var v2 = achiev2.getUnlockDateNow();
	if (!v1 || !v2) return 0;
	if (v1 === v2) return 0;

	return v1 < v2 ? 1 : -1;
};

SMO.AM.playtime = function() {
	return SMO.AM.isGlobalMode ? Math.floor(SMO.AM.FrameCount.value / 60) : $gameSystem.playtime();
};

//---------------------------------------------------------------------------------------
// Text Management

//Create a hidden <textarea> to use on my TextInput buttons
SMO.AM.TextArea = {
	element: null,
	refreshValue: function() {
		if (!SceneManager._scene.isTextInputSelected()) return this.deleteTextArea();
		var Button = SceneManager._scene.selectedButton();
		this.createTextArea();
		var text = '';
		var value = Button._data.value;
		this.element.value = text;
		this.element.select();
	},
	createTextArea: function() {
		if (this.element) return;
		this.element = document.createElement('textarea');
		this.element.style.position = 'absolute';
		this.element.style.left = '-200px';
		document.body.appendChild(this.element);
	},
	deleteTextArea: function() {
		if (!this.element) return;
		document.body.removeChild(this.element);
		this.element = null;
	}
};

SMO.AM.getTextColor = function(n) {;
	var bitmap = new Bitmap(1, 1);
	bitmap = ImageManager.loadSystem('Window');
	var px = 96 + (n % 8) * 12 + 6;
	var py = 144 + Math.floor(n / 8) * 12 + 6;
	return bitmap.getPixel(px, py);
};

//The TextWindow is used to measure texts
SMO.AM.createTextWindow = function() {
	if (this.TextWindow) return;
	this.TextWindow = new Window_Base();
	this.TextWindow.resetFontSettings = function() {};
};

//Get height from a text state
SMO.AM.textStateHeight = function(textState, fontSize, all) {
	this.createTextWindow();
	this.TextWindow.contents.fontSize = fontSize || 28;
	return this.TextWindow.calcTextHeight(textState, all);
};

//Method: SMO.AM.textWidthEx
// * Gets a given text's width
// String: text
// Number: fontSize
// Boolean: easy - Common text => true | Text with text codes => false
// Number: font rate - The rate the font is changed when using the text codes \{ and \}
// Boolean: keepFont - Continue to use the last font size used?
SMO.AM.textWidthEx = function (text, fontSize, easy, fontRate, keepFont) {
	if (text == null) return 0;
	text = String(text);
	var method, isMultiLine, lines, textWidth, line_w;
	SMO.AM.createTextWindow();
	var TW = this.TextWindow;

	if (!easy) {
		fontRate = fontRate > 0 ? fontRate : 12;
		TW.makeFontBigger = function() {
			if (this.contents.fontSize <= 96) {
				this.contents.fontSize += fontRate;
			}
		}
		TW.makeFontSmaller = function() {
			if (this.contents.fontSize >= 24) {
				this.contents.fontSize -= fontRate;
			}
		}
	}
	if (!keepFont) {
		TW.contents.fontSize = fontSize > 4 ? fontSize : 28;
	}

	method = easy ? 'textWidth' : 'textWidthEx';
	isMultLine = text.indexOf('\n') > -1;
	if (!isMultLine) return Math.ceil(TW[method](text));
	
	//Measure the width of all lines and return the higher value found
	lines = text.split('\n');
	textWidth = TW[method](lines[0]);
	for (var i = 1; i < lines.length; i++) {
		line_w = TW[method](lines[i]);
		if (line_w > textWidth) {
			textWidth = line_w;
		}
	}
	return Math.ceil(textWidth);
};

SMO.AM.removeTextCodes = function(text) {
	if (text == null) return '';
	text = String(text);
	text = text.replace(/\\/g, '\x1b');
	text = text.replace(/\x1b\x1b/g, '\\');
	text = text.replace(/\x1bV\[\d+\]/gi, '');
	text = text.replace(/\x1bN\[\d+\]/gi, '');
	text = text.replace(/\x1bP\[\d+\]/gi, '');
	text = text.replace(/\x1bG/gi, '');
	text = text.replace(/\x1bC\[\d+\]/gi, '');
	text = text.replace(/\x1bI\[\d+\]/gi, '');
	text = text.replace(/\x1b{/g, '');
	text = text.replace(/\x1b}/g, '');
	//edit -> add YEP Message Core's text codes
	return text;
};

SMO.AM.wrapText = function(text, maxWidth, fontSize, easy) {
	if (text == null) return '';
	if (!(maxWidth > 0)) return text;
	var space = ' ';
	var space_w = SMO.AM.textWidthEx(space, fontSize, true); //Space's width
	var one_line_txt = String(text).replace(/\s?\n/g, space); //Text without line breaks
	var words = one_line_txt.split(space);
	var line_w = 0; //Line's width
	var safe = 0; //Loop's limit (500 words)
	text = '';

	//Looping through all words on the given text
	for (var w = 0, l = 0; w < words.length; w++) {
		var word = words[w];
		var word_w = SMO.AM.textWidthEx(word, fontSize, easy);
		var isFirstWord = line_w === 0;
		var space_w2 = isFirstWord ? 0 : space_w;
		//Checking if the current word will fit on this line
		if (maxWidth >= (line_w + space_w2 + word_w) || isFirstWord) {
			//It fits or it's the first word on this line
			text = isFirstWord ? text + word : text + space + word;
			line_w += space_w2 + word_w;
		} else {
			//The word didn't fit on this line -> add it to the next one
			text = text + '\n' + word;
			line_w = word_w;
		}
		if (++safe > 500) {
			console.warn('Wrap text safe activated. 500 words limit reached.');
			break;
		}
	}
	return text;
};

//---------------------------------------------------------------------------------------
// Compatibility to translation/localization plugins

SMO.AM.translate = function(text) {
	if (text == null) return '';
	text = String(text);

	//If there's no translation plugin, just return the text
	if (!SMO.AM.translationEngine.on) return text;

	//Translate using the plugin's method and return the resulting text
	return SMO.AM.translationEngine.translate(text);
};

//Get a specific translation plugin and add it's method to SMO.AM.translationEngine
SMO.AM.getTranslationEngine = function() {
	var isIavra = false;
	try {
		IAVRA.I18N.localize;
		isIavra = true;
	} catch (e) {};

	//Look for "Iavra Localization - Core.js"
	if (isIavra) {
		SMO.AM.translationEngine = {
			author: 'IAVRA',
			translate: function(text) {
				return IAVRA.I18N.localize(text);
			},
			on: true
		};

	//Look for "DKTools_Localization.js"
	} else if (Imported['DKTools_Localization']) {
		SMO.AM.translationEngine = {
			author: 'DK',
			translate: function(text) {
				return DKTools.Localization.getText(text);
			},
			on: true
		};

	//Look for "SRD_TranslationEngine.js"
	} else if (Imported["SumRndmDde Translation Engine"]) {
		SMO.AM.translationEngine = {
			author: 'SRD',
			translate: function(text) {
				return SRD.TranslationEngine.translate(text);
			},
			on: true
		};

	//There's no translation plugin
	} else if (SMO.AM.translationEngine == null) {
		SMO.AM.translationEngine = {
			on: false
		}
	}
};

//-----------------------------------------------------------------------------------------
// Achievements' Commands

//Method: "showAchievements"
// * Opens the achievements' scene (the achievements' menu)
// String: categoryName -> will open the menu menu on a specifc category

SMO.AM.showAchievements = function(categoryName) {
	if (categoryName != null) {
		var category = SMO.AM.DataCategories.find(c => c.name === categoryName);
		SMO.AM.currentCategory = category || { id: 0 };
	}
	SceneManager.push(Scene_Achievements);
};

//Method: "refreshAchievsAfterTransfer"
// * Calls the method "refreshAchievements" right after transfering

SMO.AM.refreshAchievsAfterTransfer = function() {
	if (!SMO.AM.transferRefresh) return;
	SceneManager._scene._achievsCounter = 0;
	SMO.AM.refreshAchievements();
};

//Method: "refreshAchievements"
// * Tries to unlock all the locked achievements

SMO.AM.refreshAchievements = function() {
	var scene = SceneManager._scene;

	if ((scene instanceof Scene_Map) && $gamePlayer._transferring) {
		return;
	}
	//creating the game system obj
	if (!$gameSystem.achievs) {
		$gameSystem.setupAchievs();
	}
	//check locked achievements
	for (d = 0; d < SMO.AM.DataDynamic.achievs.locked.length; d++) {
		SMO.AM.tryUnlockingAchievement(SMO.AM.DataDynamic.achievs.locked[d]);
	}
	var isUnlock = SMO.AM.unlockList.length > 0;
	if (isUnlock) {
		SMO.AM.unlockList.forEach(function(a) {
			SMO.AM.unlockAchievement(a);
		});
		SMO.AM.refreshGoldWindow();
		SMO.AM.refreshUnlockedTrophies(true);
		SMO.AM.refreshItemWindow();
	}
	SMO.AM.unlockList = [];
	SMO.AM.refreshAchievementsScene(true, isUnlock);
};

//Method: "tryUnlockingAchievement"
// * Adds an achievement to the unlock list if it's requirements are met
// Number: id

SMO.AM.tryUnlockingAchievement = function(id) {
	var Achievement = this.DataAchievements[id - 1];
	if (!Achievement) return false;
	if (Achievement.isUnlockEdible()) {
		SMO.AM.unlockList.push(id);
		return true;
	}
	return false;
};

//Method: "getAchievementId"
//  * Gets the real ID of an achievement based on a candidade
//  Number or String: candidate

SMO.AM.getAchievementId = function(candidate) {
	var isNumber = !isNaN(candidate);
	if (isNumber) return Number(candidate);
	return this.getAchievementIdByName(candidate);
};

//Method: "getAchievementIdByName"
//  * Gets the ID of an achievement based on it's name
//  String: name

SMO.AM.getAchievementIdByName = function(name) {
	if (typeof name !== 'string') return 0;
	var Achievements = SMO.AM.DataAchievements;
	for (var a = 0; a < Achievements.length; a++) {
		if (Achievements.Name === name) {
			return a + 1;
		}
	}
	return 0;
};

//Method: "unlockAchievement"
//  * Forces an achievement to unlock
//  Number or String: id -> may be the achievement's ID or name

SMO.AM.unlockAchievement = function(id) {
	id = this.getAchievementId(id);
	if (!id) return;
	var Achievement = SMO.AM.DataAchievements[id - 1];
	if (Achievement.isUnlocked()) return;

	var data = this.DataDynamic.achievs;
	data.locked.delete(id);
	data.unlocked.push(id);
	data.recentUnlock.push(id);
	this.addNewUnlockedDate();
	this.addToPopUpQueue(id);
	Achievement.gainRewards();
	if (this.onUnlockScript) {
		try {
			eval(this.onUnlockScript);
		} catch (e) {
			this.onUnlockScript = '';
			console.error("There's an error on your 'On Unlock' script.")
			console.error(e);
		}
	}
};

SMO.AM.addToPopUpQueue = function(id) {
	if (!$dataAchievsMenuSets.PopUp.enabled) return;
	if (!id) return;
	$gameSystem.achievPopUp.queue.push(id);
};

SMO.AM.addNewUnlockedDate = function() {
	var data = SMO.AM.getDate();
	SMO.AM.DataDynamic.achievs.unlockDate.push(data);
};

//Method: "getAchievsByCategory"
//  * Returns an array with all the achievements on a specific category
//  String: name -> The category's name

SMO.AM.getAchievsByCategory = function(name) {
	if (typeof name !== 'string') return [];
	if (SMO.AM.DataCategories.length === 0) return [];
	return SMO.AM.DataAchievements.filter(function(Achievement) {
		return Achievement && (Achievement.categories.contains(name));
	});
};

//Method: "preloadCustomWindowSkins"
//  * Preloads window skins specified by the user
//  * Window skins are loaded from img/system

SMO.AM.preloadCustomWindowSkins = function() {
	var images = SMO.AM.getCustomWindowSkins();
	for (var i = 0; i < images.length; i++) {
		ImageManager.reserveSystem(images[i]);
	}
};

SMO.AM.getCustomWindowSkins = function() {
	var skins = [];
	for (var m in $dataAchievsMenuSets) {
		let skin = $dataAchievsMenuSets[m].windowSkin;
		let index = skins.indexOf(skin);
		if (skin && index < 0) {
			skins.push(skin);
		}
	}
	return skins;
};

//---------------------------------------------------------------------------------------
// Global Achievements (Dynamic Data) and Menu Settings - DataManager

//SMO.AM.DataDynamic saves the ID's of locked, unlocked, recentUnlock and unlockDate
//of achievements and trophies

//On Global Mode it'll store this data itself, but on local mode it'll point to
//$gameSystem

SMO.AM.DataDynamic = {
	global_achievs: {
		locked: [],
		unlocked: [],
		recentUnlock: [],
		unlockDate: []
	},
	global_trophies: {
		locked: [],
		unlocked: []
	}
};

Object.defineProperty(SMO.AM.DataDynamic, 'achievs', {
	get: function() {
		return SMO.AM.isGlobalMode ? this.global_achievs : $gameSystem.achievs;
	},
	configurable: true
});

Object.defineProperty(SMO.AM.DataDynamic, 'trophies', {
	get: function() {
		return SMO.AM.isGlobalMode ? this.global_trophies : $gameSystem.trophies;
	},
	configurable: true
});

//Method: "resetDynamicData"
//  * Resets the dynamc data for achievements and categories

SMO.AM.resetDynamicData = function() {
	for (var a in SMO.AM.DataDynamic.achievs) {
		SMO.AM.DataDynamic.achievs[a] = [];
	}
	SMO.AM.DataDynamic.achievs.locked = SMO.AM.DataAchievements.map(d => d.id);

	for (var a in SMO.AM.DataDynamic.trophies) {
		SMO.AM.DataDynamic.trophies[a] = [];
	}
	SMO.AM.DataDynamic.trophies.locked = SMO.AM.DataCategories.map(c => c.id);

	DataManager.saveGlobalAchievements();
	SMO.AM.refreshAchievementsScene();
};

//Method: "refreshDynamicData"
//  * Looks for added/removed achievements or categories in order to remove
//  * them from the dynamic data

SMO.AM.refreshDynamicData = function() {
	var updatedA = SMO.AM.refreshAchievsDynamicData();
	var updatedB = SMO.AM.refreshTrophiesDynamicData();
	SMO.AM.refreshUnlockedTrophies(updatedA || updatedB);
};

SMO.AM.refreshAchievsDynamicData = function() {
	var data = SMO.AM.DataDynamic;
	var all = data.achievs.locked.length + data.achievs.unlocked.length;
	var dif = SMO.AM.DataAchievements.length - all;
	if (!dif) return false;
	if (dif > 0) { //Achievements were added
		for (d = all; d < SMO.AM.DataAchievements.length; d++) {
			data.achievs.locked.push(d + 1);
		}
		return true;
	}

	//Achievements were removed
	for (d = all; d > SMO.AM.DataAchievements.length; d--) {
		let index = data.achievs.unlocked.indexOf(d);
		if (index === -1) {
			data.achievs.locked.delete(d);
			continue;
		}
		data.achievs.unlockDate.splice(index, 1);
		data.achievs.unlocked.splice(index, 1);
		data.achievs.recentUnlock.delete(d);
	}
	return true;
};

SMO.AM.refreshTrophiesDynamicData = function() {
	var data = SMO.AM.DataDynamic;
	var all = data.trophies.locked.length + data.trophies.unlocked.length;
	var dif = SMO.AM.DataCategories.length - all;
	if (!dif) return false;
	if (dif > 0) { //Categories were added
		for (d = all; d < SMO.AM.DataCategories.length; d++) {
			data.trophies.locked.push(d + 1);
		}
		return true;
	}
	//Categories were removed
	for (d = all; d > SMO.AM.length; d--) {
		let index = data.achievs.unlocked.indexOf(d);
		if (index === -1) {
			data.trophies.locked.delete(d);
			continue;
		}
		data.trophies.unlocked.splice(index, 1);
	}
	return true;
};

if (SMO.AM.isEditorEnabled) {
	DataManager._databaseFiles.push(
		{ name: '$dataAchievsMenuSets', src: 'AchievsMenu.json' },
		{ name: '$dataAchievsExtras', src: 'AchievsExtras.json' }
	);
}

DataManager.saveGlobalAchievements = function() {
	if (!SMO.AM.isGlobalMode) return false;
	try {
		var savefileId = 'achievs';
		StorageManager.backup(savefileId);
		if (this.saveAchievsWithoutRescue()) {
			StorageManager.cleanBackup(savefileId);
			return true;
		}
	} catch (e) {
		console.error(e);
		try {
			StorageManager.remove(savefileId);
			StorageManager.restoreBackup(savefileId);
		} catch (e2) {
			console.error(e2);
		}
		return false;
	}
};

DataManager.saveAchievsWithoutRescue = function() {
	var json = JsonEx.stringify(SMO.AM.DataDynamic);
	if (json.length >= 200000) {
		console.warn('Save data too big!');
	}
	StorageManager.save('achievs', json);
	return true;
};

DataManager.saveAchievsMenu = function(gameStart) {
	if (!SMO.AM.isEditorEnabled) return false;
	if (!SMO.AM.isPlaytest()) return false;
	if (!Utils.isNwjs()) return false;
	var fs = require('fs');
	var dirPath = StorageManager.dataDirectoryPath();
	var filePath = dirPath + 'AchievsMenu.json';
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath);
	}
	if (gameStart && fs.existsSync(filePath)) return false;
	var data = JSON.stringify($dataAchievsMenuSets, null, '\t');
	fs.writeFileSync(filePath, data);
	if (gameStart) {
		$dataAchievsMenuSets = null;
	}
	return true;
};

DataManager.saveExtraAchievements = function(gameStart) {
	if (!SMO.AM.isEditorEnabled) return false;
	if (!SMO.AM.isPlaytest()) return false;
	if (!Utils.isNwjs()) return false;
	var fs = require('fs');
	var dirPath = StorageManager.dataDirectoryPath();
	var filePath = dirPath + 'AchievsExtras.json';
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath);
	}
	if (gameStart && fs.existsSync(filePath)) return false;
	var data = $dataAchievsExtras ? JSON.stringify($dataAchievsExtras) : "[]";
	var compressed = LZString.compressToBase64(data);
	fs.writeFileSync(filePath, compressed);
	return true;
};

SMO.AM._DataManager_loadDataFile = DataManager.loadDataFile;
DataManager.loadDataFile = function(name, src) {
	if (name !== '$dataAchievsExtras') return SMO.AM._DataManager_loadDataFile.call(this, name, src);
    var xhr = new XMLHttpRequest();
    var url = 'data/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
        	var txt = LZString.decompressFromBase64(xhr.responseText);
            window[name] = JSON.parse(txt);
            DataManager.onLoad(window[name]);
        }
    };
    xhr.onerror = this._mapLoader || function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};

SMO.AM._StorageManager_localFilePath = StorageManager.localFilePath;
StorageManager.localFilePath = function(savefileId) {
	if (savefileId === 'achievs') {
		return this.localFileDirectoryPath() + savefileId +'.rpgsave';
	}
	return SMO.AM._StorageManager_localFilePath.call(this, savefileId);
};

DataManager.loadAchievementsData = function() {
	SMO.AM.getTranslationEngine();
	SMO.AM.getAchievementsData();
	this.loadGlobalAchievements();
	SMO.AM.preloadCustomWindowSkins();
};

DataManager.loadGlobalAchievements = function() {
	if (!SMO.AM.isGlobalMode) return;
	try {
		return this.loadAchievsWithoutRescue('achievs');
	} catch (e) {
		console.error(e);
		return false;
	}
};

DataManager.loadAchievsWithoutRescue = function(savefileId) {
	if (!StorageManager.exists(savefileId)) {
		if (savefileId === 'achievs') {
			if (!this.importOldGlobalAchievs()) {
				SMO.AM.refreshDynamicData();
			}
			if (SMO.AM.isGlobalAutoReset && SMO.AM.isPlaytest()) {
				SMO.AM.resetDynamicData();
			}
			return this.saveGlobalAchievements();
		}
	}
	var json = StorageManager.load(savefileId);

	//Refresh global achievements
	if (savefileId === 'achievs') {
		if (SMO.AM.isGlobalAutoReset && SMO.AM.isPlaytest()) {
			SMO.AM.resetDynamicData();
			this.saveGlobalAchievements();
		} else {
			this.setDynamicData(JsonEx.parse(json));
		}

	//Refresh menu's settings
	} else if (savefileId === 'achievssets') {//edit -> aqui
		this.refreshMenuSettings(JsonEx.parse(json));
	}
};

DataManager.importOldGlobalAchievs = function() {
	if (!Utils.isNwjs()) return false;
	var fs = require('fs');
	var path = DataManager.oldGlobalAchievsPath();
	if (!fs.existsSync(path)) return false;

	var request = new XMLHttpRequest();
	request.open('GET', path);
	request.overrideMimeType('application/json');

	request.onload = function() {
		if (request.status < 400) {
			var text = request.responseText;
			if (text) {
				text = text.replace('S', '');
				text = atob(text);
				DataManager.setDynamicData(JSON.parse(text));
				fs.unlinkSync(path); //deleting old file
			};
		}
	};
	request.send();
	return true;
};

DataManager.setDynamicData = function(data) {
	for (var d in data) {
		for (var a in data[d]) {
			if (SMO.AM.DataDynamic[d] == null) {
				SMO.AM.DataDynamic[d] = {};
				SMO.AM.DataDynamic[d][a] = data[d][a];
				continue;
			}
			SMO.AM.DataDynamic[d][a] = data[d][a];
		}
	}
	SMO.AM.refreshDynamicData();
};

//Check changes on the menu settings' properties
DataManager.refreshMenuSettings = function(data) {
	if (data.info && data.info.version >= $dataAchievsMenuSets.info.version) {
		$dataAchievsMenuSets = data;
		return;
	}
	var updated = false; //true if there was any change on the properties

	//Looking for new properties to be added
	for (var i in $dataAchievsMenuSets) {
		for (var j in $dataAchievsMenuSets[i]) {
			if (data[i] == null) {
				data[i] = {};
				data[i][j] = $dataAchievsMenuSets[i][j];
				updated = true;
				continue;
			}
			if (data[i][j] == null) {
				data[i][j] = $dataAchievsMenuSets[i][j];
				updated = true;
			}
		}
	}

	//Looking for old unused properties to be deleted
	for (i in data) {
		if ($dataAchievsMenuSets[i] == null) {
			delete data[i];
			updated = true;
			continue;
		}

		for (j in data[i]) {
			if ($dataAchievsMenuSets[i][j] == null) {
				delete data[i][j];
				updated = true;
			}
		}
	}
	data.info.version = $dataAchievsMenuSets.info.version;
	$dataAchievsMenuSets = data;
	if (updated) {
		this.saveAchievsMenu();
	}
	return;
};

//On new game -> Setup achievements and give global rewards
SMO.AM._DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function() {
	SMO.AM._DataManager_setupNewGame.call(this);
	SMO.AM.onNewGame();
};

DataManager.getAchievsImgNames = function() {
	SMO.AM.imagesNamesResult = [];
	if (!Utils.isNwjs()) return;
	var path = this.achievsImagesPath();
	var fs = require('fs');

	fs.readdir(path, (err, files) => {
		files.forEach(file => {
			if (file.indexOf('.png') > -1) {
				SMO.AM.imagesNamesResult.push(file.replace('.png', ''));
			}
		});
	});
};

StorageManager.dataDirectoryPath = function() {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, 'data/');
};

StorageManager.imgDirectoryPath = function() {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	return path.join(base, 'img/');
};

DataManager.oldGlobalAchievsPath = function() {
	var path = StorageManager.dataDirectoryPath();
	return path + 'Achievements.json';
};

DataManager.achievsImagesPath = function() {
	var path = StorageManager.imgDirectoryPath();
	return path + 'achievements';
};

//==========================================================================================
// Achievement Data Object
//==========================================================================================
function Achievement_Data() {
	this.initialize.apply(this, arguments);
}

Achievement_Data.prototype = Object.create(null);
Achievement_Data.prototype.constructor = Achievement_Data;

Achievement_Data.prototype.initialize = function(id, data) {
	var secretSign = $dataAchievsMenuSets.Achievements.secretSign;
	this.id = id;
	this._achievement = true;
	this.setupRequirements(data);
	this.setupRewards(data);
	this.setupVisibility(data['Visibility']);
	this.categories = data['Category'].split(',');
	this.category = this.categories[0];
	this.Name = data.Name;
	this.Description = SMO.AM.parse(data['Description']);
	this.description = this.visibility === 'secret' ? secretSign : this.Description;
	this.popUpImage = data['Pop Up Image'] || '';
	this.backgroundImage = data['Background Image'];
	if (this.backgroundImage) {
		SMO.AM.Images.all[this.backgroundImage] = true;
	}
	this.icon = {
		locked: data['Locked Icon'] ? Number(data['Locked Icon']) : -2,
		unlocked: data['Unlocked Icon'] ? Number(data['Unlocked Icon']) : -2,
		secret: data['Secret Icon'] ? Number(data['Secret Icon']) : -2
	};
};

Object.defineProperty(Achievement_Data.prototype, 'name', {
	get: function() {
		return this.isSecret() ? $dataAchievsMenuSets.Achievements.secretSign : this.Name;
	},
	set: function(value) {
		this.Name = value;
	},
	configurable: true
});

Object.defineProperty(Achievement_Data.prototype, 'tname', {
	get: function() {
		return SMO.AM.translate(this.name);
	},
	configurable: true
});

Object.defineProperty(Achievement_Data.prototype, 'imageName', {
	get: function() {
		if (this.isUnlocked()) {
			return this.backgroundImage;
		} else {
			var secret = SMO.AM.currentCategory.secretAchievImg || SMO.AM.Images.secret;
			var locked = SMO.AM.currentCategory.lockedAchievImg || SMO.AM.Images.locked;
			return this.isSecret() ? secret : locked;
		}
	},
	configurable: true
});

Achievement_Data.prototype.setupRequirements = function(data) {
	this.requirements = [];
	var Requirements = SMO.AM.parse(data['Requirements']);
	if (Requirements) {
		let isPlaytime = false;
		Requirements.forEach(function(r) {
			let requirement = JSON.parse(r);
			this.initRequirement(requirement);
			if (requirement.Type === 'Playtime') {
				isPlaytime = true;
			}
		}, this);
		this._playtimeRequired = isPlaytime;
	}
};

Achievement_Data.prototype.initRequirement = function(data) {
	var type = data.Type.toLowerCase();
	var itemId = Number(data['Item ID']);
	var Requirement = {
		type: type,
		itemId: itemId, 
		comparison: data.Comparison,
		alias: String(data.Alias),
		aliasIcon: data['Alias Icon'] ? Number(data['Alias Icon']) : -1,
		currentValue: SMO.AM.parse(data['Current Value']),
		targetValueA: data['Required Value'],
		targetValueB: SMO.AM.parse(data['Final Value'])
	};

	switch(type) {
	case 'custom(advanced)':
		Requirement.name = 'Custom';
		Requirement.value = function() {
			return eval(this.currentValue);
		};
		Requirement.tvalue = function() {
			return this.targetValueB ? eval(this.targetValueB) : this.targetValueA;
		};
		break;
	case 'switch':
		Requirement.name = $dataSystem.switches[itemId];
		Requirement.value = function() {
			return $gameSwitches.value(this.itemId);
		};
		Requirement.tvalue = function() {
			return true;
		};
		break;
	case 'variable':
		Requirement.name = $dataSystem.variables[itemId];
		Requirement.value = function() {
			return $gameVariables.value(this.itemId);
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break
	case 'item':
		var item = $dataItems[itemId];
		Requirement.name = item ? item.name : 'Item ' + itemId;
		Requirement.iconIndex = item ? item.iconIndex : -1;
		Requirement.value = function() {
			return $gameParty.numItems($dataItems[this.itemId]);
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'weapon':
		var item = $dataWeapons[itemId];
		Requirement.name = item ? item.name : 'Weapon ' + itemId;
		Requirement.iconIndex = item ? item.iconIndex : -1;
		Requirement.value = function() {
			return $gameParty.numItems($dataWeapons[this.itemId]);
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'armor':
		var item = $dataArmors[itemId];
		Requirement.name = item ? item.name : 'Armor ' + itemId;
		Requirement.iconIndex = item ? item.iconIndex : -1;
		Requirement.value = function() {
			return $gameParty.numItems($dataArmors[this.itemId]);
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'gold':
		Requirement.name = 'Gold';
		Requirement.value = function() {
			return $gameParty.gold();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'steps':
		Requirement.name = 'Steps';
		Requirement.value = function() {
			return $gameParty.steps();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'playtime':
		Requirement.name = 'Playtime';
		Requirement.value = function() {
			return SMO.AM.playtime();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'save count':
		Requirement.name = 'Save Count';
		Requirement.value = function() {
			return $gameSystem.saveCount();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'battle count':
		Requirement.name = 'Battle Count';
		Requirement.value = function() {
			return $gameSystem.battleCount();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'win count':
		Requirement.name = 'Win Count';
		Requirement.value = function() {
			return $gameSystem.winCount();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'escape count':
		Requirement.name = 'Escape Count';
		Requirement.value = function() {
			return $gameSystem.escapeCount();
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'party member':
		var actor = $gameActors.actor(itemId);
		Requirement.name = actor ? actor.name() : 'Actor ' + itemId;
		Requirement.value = function() {
			return $gameParty.members().contains($gameActors.actor(this.itemId));
		};
		Requirement.tvalue = function() {
			return true;
		};
		break;
	case 'party level':
		Requirement.name = 'Party Level';
		Requirement.value = function() {
			var currentValue = 0;
			if ($gameParty && $gameParty.members().length > 0) {
				$gameParty.members().forEach(function(pm) {
					currentValue += pm.level;
				});
				currentValue = Math.floor(currentValue / $gameParty.members().length);
			}
			return currentValue;
		};
		Requirement.tvalue = function() {
			return this.targetValueA;
		};
		break;
	case 'party size':
		Requirement.name = 'Party Size';
		Requirement.value = function() {
			return $gameParty.members().length;
		};
		Requirement.tvalue = function() {
			return targetValueA;
		};
		break;
	}

	Requirement.isReached = function() {
		switch (this.comparison) {
		case '=':
			return this.value() == this.tvalue();
		case '>':
			return this.value() > this.tvalue();
		case '≥':
			return this.value() >= this.tvalue();
		case '<':
			return this.value() < this.tvalue();
		case '≤':
			return this.value() <= this.tvalue();
		case '≠':
			return this.value() != this.tvalue();
		default:
			return false;
		}
	};

	Requirement.iconIndex = Requirement.iconIndex || -1;

	this.requirements.push(Requirement);
};

Achievement_Data.prototype.setupRewards = function(data) {
	this.rewards = [];
	var Rewards = SMO.AM.parse(data['Rewards']);
	if (!Rewards) return;
	Rewards.forEach(function(r) {
		let Reward = JSON.parse(r);
		this.rewards.push({
			type: Reward.Type.toLowerCase(),
			itemId: Number(Reward['Item ID']),
			amount: Number(Reward.Amount),
			advanced: SMO.AM.parse(Reward.Advanced),
			alias: Reward.Alias,
			aliasIcon: Reward['Alias Icon'] ? Number(Reward['Alias Icon']) : -1
		});
	}, this);
};

Achievement_Data.prototype.isPlaytimeRequired = function() {
	return this._playtimeRequired && !this.isUnlocked();
};

Achievement_Data.prototype.setupVisibility = function(string) {
	var state = string.toLowerCase();
	this.visibility = (state === 'secret' || state === 'hidden') ? state : 'visible';
};

//Method: "progress"
// * Returns an integer indicating the % of completion of this achievement
Achievement_Data.prototype.progress = function() {
	if (this.requirements.length === 0 || this.isUnlocked()) return 100;
	var progress = 0;
	var reached = 0; //amount of reached requirements
	var all = this.requirements.length; //amount of requirements
	var each = 100 / all; // % of progress that each requirement unlocks
	for (var r = 0; r < all; r++) {
		let Requirement = this.requirements[r];
		if (Requirement.isReached()) {
			reached++;
			progress += each;
			continue;
		}

		if (Requirement.comparison === '≥') {
			let v1 = Requirement.value();
			let v2 = Requirement.tvalue();
			if (!isNaN(v1) && !isNaN(v2) && v2 != 0) {
				progress += each * v1 / v2;
			}
		}
	}
	progress = reached === all ? 100 : Math.min(99, progress);
	return Math.round(progress);
};

Achievement_Data.prototype.isUnlockEdible = function() {
	if (this.requirements.length === 0) return true;
	return !this.requirements.some(req => !req.isReached());
};

Achievement_Data.prototype.unlock = function() {
	SMO.AM.unlockAchievement(this.id);
	SMO.AM.refreshUnlockedTrophies(true);
	SMO.AM.refreshAchievementsScene();
};

Achievement_Data.prototype.lock = function() {
	var data = SMO.AM.DataDynamic.achievs;
	var index = data.unlocked.indexOf(this.id);
	if (index === -1) return;
	data.recentUnlock.delete(this.id);
	data.unlockDate.splice(index, 1);
	data.unlocked.splice(index, 1);
	data.locked.push(this.id);
	this.removeFromPopUpQueue();

	DataManager.saveGlobalAchievements();

	SMO.AM.refreshAchievementsScene();
};

Achievement_Data.prototype.removeFromPopUpQueue = function() {
	var PopUp = SceneManager._scene._achievsPopUp;
	if (!PopUp) return;
	var index = PopUp._queue.indexOf(this.id);
	if (index === -1) return;
	if (index === 0) return PopUp.skip();
	$gameSystem.achievPopUp.queue.splice(index, 1);
	PopUp._queue = $gameSystem.achievPopUp.queue;
};

Achievement_Data.prototype.gainRewards = function() {
	var reward, itemId, amount, r;
	for (r = 0; r < this.rewards.length; r++) {
		reward = this.rewards[r];
		itemId = reward.itemId;
		amount = reward.amount;
		switch (reward.type) {
		case 'custom(advanced)':
			//Nothing to see here, keep scrolling
			break;
		case 'gold':
			$gameParty.gainGold(amount);
			break;
		case 'item':
			$gameParty.gainItem($dataItems[itemId], amount);
			break;
		case 'weapon':
			$gameParty.gainItem($dataWeapons[itemId], amount);
			break;
		case 'armor':
			$gameParty.gainItem($dataArmors[itemId], amount);
			break;
		}
		if (reward.advanced) {
			try {
				eval(reward.advanced);
			} catch (e) {
				var err = 'Error on Advanced Reward! ';
				var info = `(Achiev Name: ${this.name} | ID: ${this.id})`;
				console.error(err + info);
				console.error(e);
			}
		}
	}
};

Achievement_Data.prototype.isUnlocked = function() {
	return SMO.AM.DataDynamic.achievs.unlocked.contains(this.id);
};

Achievement_Data.prototype.isHidden = function() {
	return this.visibility === 'hidden' && !this.isUnlocked();
};

Achievement_Data.prototype.isSecret = function() {
	return this.visibility === 'secret' && !this.isUnlocked();
};

Achievement_Data.prototype.getUnlockDateString = function() {
	var str = '';
	if (this.isUnlocked()) {
		var index = SMO.AM.DataDynamic.achievs.unlocked.indexOf(this.id);
		var date = SMO.AM.DataDynamic.achievs.unlockDate[index];
		str = SMO.AM.translate($dataAchievsMenuSets.AchievsInfo.unlockedOn);
		for (var d in date) {
			var regex = new RegExp('<' + d.toLowerCase() + '>', "i");
			if (str.indexOf(regex > -1)) {//edit -> como isso está funcionando???
				var translation = SMO.AM.translate(date[d]);
				str = str.replace(regex, translation);
			}
		}
	}
	return str;
};

Achievement_Data.prototype.getUnlockDateNow = function() {
	var value = null;
	if (this.isUnlocked()) {
		var index = SMO.AM.DataDynamic.achievs.unlocked.indexOf(this.id);
		var value = SMO.AM.DataDynamic.achievs.unlockDate[index].now;
	}
	return value;
};

Achievement_Data.prototype.isMyBackgroundReady = function() {
	if (!this.backgroundImage) return true;

	if (!this.backgroundBitmap) {
		this.backgroundBitmap = ImageManager.loadAchievement(this.backgroundImage);
	}

	if (this.backgroundBitmap.isReady()) {
		delete this.backgroundBitmap;
		return true;
	}
	return false;
};

Achievement_Data.prototype.isMyPopUpReady = function() {
	if (!this.popUpImage) return this.isMyBackgroundReady();

	if (!this.popUpBitmap) {
		this.popUpBitmap = ImageManager.loadAchievement(this.popUpImage);
	}
	
	if (this.popUpBitmap.isReady()) {
		delete this.popUpBitmap;
		return true;
	}
	return false;
};

//==========================================================================================
// Creating/updating data
//==========================================================================================
SMO.AM._SceneLoad_reloadMapIfUpdated = Scene_Load.prototype.reloadMapIfUpdated;
Scene_Load.prototype.reloadMapIfUpdated = function() {
	SMO.AM._SceneLoad_reloadMapIfUpdated.call(this);
	if ($gameSystem.versionId() !== $dataSystem.versionId) {
		$gameSystem.setupAchievs();
	}
};

SMO.AM._SceneLoad_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function() {
	SMO.AM._SceneLoad_onLoadSuccess.call(this);
	if (this._achievsPopUp && !SMO.AM.isGlobalMode) {
		this._achievsPopUp.clear();
	}
};

//==========================================================================================
// Game Player
// Refreshing achievements after transfer
//==========================================================================================
SMO.AM._GamePlayer_clearTransferInfo = Game_Player.prototype.clearTransferInfo;
Game_Player.prototype.clearTransferInfo = function() {
	SMO.AM._GamePlayer_clearTransferInfo.call(this);
	SMO.AM.refreshAchievsAfterTransfer();
};

SMO.AM._GamePlayer_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
	if (SceneManager._scene.isGrabbingSprite()) return false;
	if (SceneManager._scene.isSelecting()) return false;
	return SMO.AM._GamePlayer_canMove.call(this);
};

//==========================================================================================
// Game System
//==========================================================================================
Game_System.prototype.setupAchievs = function() {
	if (!this.achievs) {
		this.achievs = {
			locked:[],
			unlocked:[],
			recentUnlock:[],
			unlockDate:[],
			sortType:0
		};
		this.achievPopUp = {
			opacity:0,
			fadeRate:0,
			fadeLimit:0,
			timer:0,
			queue:[]
		};
		this.trophies = {
			locked:[],
			unlocked:[]
		}
	}

	if (!SMO.AM.isGlobalMode) {
		SMO.AM.refreshDynamicData();
	}

	if ($dataAchievsMenuSets.SortOption.enabled) {
		if (!$dataAchievsMenuSets.SortOption.options[this.achievs.sortType]) {
			this.achievs.sortType = 0;
		}
	}
};

//The achievementId may be a number or the achievement name
Game_System.prototype.achievement = function(achievementId) {
	if (Number(achievementId)) {
		return SMO.AM.DataAchievements[achievementId - 1] || null;
	} else {
		achievementId = SMO.AM.getAchievementIdByName(achievementId);
		if (achievementId > 0) {
			return SMO.AM.DataAchievements[achievementId - 1] || null;
		}
	}
	return null;
};

//The trophyId may be a number or the category's name
Game_System.prototype.isTrophyUnlocked = function(trophyId) {
	if (Number(trophyId)) {
		return SMO.AM.DataDynamic.trophies.unlocked.contains(trophyId);
	} else {
		var category = SMO.AM.DataCategories.find(c => c.name === trophyId);
		var categoryId = category ? category.id : 0;
		return SMO.AM.DataDynamic.trophies.unlocked.contains(categoryId);
	}
	return false;
};

Game_System.prototype.unlockedAchievsCount = function() {
	return SMO.AM.DataDynamic.achievs.unlocked.length;
};

Game_System.prototype.lockedAchievsCount = function() {
	return SMO.AM.DataDynamic.achievs.locked.length;
};

//==========================================================================================
// Window Base
//==========================================================================================
Window_Base.prototype.textWidthEx = function(text) {
	return this.drawTextEx(text, 0, this.contents.height);
};

Window_Base.prototype.drawBorderedRect = function(x, y, width, height, borderSize, borderColor, backColor, backImg) {
	this.contents.drawBorderedRect(x, y, width, height, borderSize, borderColor, backColor, backImg);
};

//==========================================================================================
// Scene Base
//==========================================================================================
SMO.AM._Scene_Base_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
	SMO.AM._Scene_Base_initialize.call(this);
	this.createSButtons();
};

Scene_Base.prototype.createSButtons = function() {
	if (this instanceof Scene_Boot) return;
	this._selecting = false;
	this.SButtons = {
		_all: [],
		_selected: null,
		_grabbing: null,
		_hovered: null,
		_needSort: 'start',
		_state: 'on',
		_description: new Sprite(new Bitmap(Graphics.width, Graphics.height))
	};

	var desc_sprite = this.SButtons._description;
	desc_sprite.bitmap.fontSize = 12;
	desc_sprite.bitmap.outlineColor = 'rgba(0,0,0,0.9)';
	desc_sprite.bitmap.outlineWidth = 3;

	//Method - setButton
	//Gets the button's description and draws it on screen
	desc_sprite.setButton = function(button) {
		if (!this.parent) {
			SceneManager._scene.addChild(this);
		}
		this.bitmap.clear();
		if (button) {
			var padding = 6;
			var line_h = this.bitmap.fontSize;
			var text = button._data.description;
			var lines = text.split('\n');

			//Getting text's max width
			var text_w = SMO.AM.textWidthEx(text, line_h, true);

			//Getting text's max height
			var text_h = lines.length * line_h + (lines.length - 1) * padding;

			this.width = text_w + padding * 2;
			this.height = text_h + padding * 2;
			var bd_size = 1;
			var bd_color = 'rgba(0,0,0,0.9)';
			this.bitmap.drawRoundedRect(0, 0, this.width, this.height, 3, bd_color);

			var body_w = this.width - 2 * bd_size;
			var body_h = this.height - 2 * bd_size;
			var body_c = '#ffffff';
			this.bitmap.drawRoundedRect(bd_size, bd_size, body_w, body_h, 3, body_c);
			for (var line_i = 0; line_i < lines.length; line_i++) {
				var line = lines[line_i];
				var line_y = padding + line_i * (line_h + padding);
				this.bitmap.drawText(line, 0, line_y, this.width, line_h, 'center');
			}
			this.x = Math.floor(button.realX() + button.width / 2 - this.width / 2);
			this.y = button.realY() - this.height - 1;
			this._button = button;
			this.smartPosition();
			this.show();
		} else {
			this._button = null;
			this.hide();
		}
	};

	//Method - Smart Position
	//Prevents the description from spawning outside the screen
	desc_sprite.smartPosition = function() {
		if (this.y < 0) {
			var button = this._button;
			this.y = button ? button.realY() + button.height + 1 : 0;
		} else if ((this.y + this.height) > Graphics.height) {
			this.y = Graphics.height - this.height;
		}
		if (this.x < 0) {
			this.x = -this.x;
		} else if ((this.x + this.width) > Graphics.width) {
			this.x = Graphics.width - this.width;
		}
	};

	desc_sprite.update = function() {
		Sprite.prototype.update.call(this);
		this.updateFading();
	};

	desc_sprite.updateFading = function() {
		if (this._fading) {
			this.opacity += this._fadeRate;
			if (this._fadeRate > 0) {
				if (this.opacity >= this._fadeLimit) {
					this.opacity = this._fadeLimit;
					this._fading = false;
				}
			} else {
				if (this.opacity <= this._fadeLimit) {
					this.opacity = this._fadeLimit;
					this._fading = false;
					if (this.opacity === 0) {
						this.visible = false;
					}
				}
			}
		}
		if (this._fadeTimer && !this._fading) {
			this._fadeTimer--;
			if (this._fadeTimer <= 0) {
				this.hide();
				this._fadeTimer = 0;
			}
		}
	};

	desc_sprite.show = function() {
		this.visible = true;
		this.opacity = 0;
		this._fadeLimit = 255;
		this._fadeRate = 15;
		this._fadeTimer = 0;
		this._fading = true;
	};

	desc_sprite.hide = function() {
		this._fadeLimit = 0;
		this._fadeRate = -15;
		this._fadeTimer = 0;
		this._fading = true;
	};
};

Scene_Base.prototype.grabSprite = function(sprite) {
	if (!sprite) return this.SButtons._grabbing = null;
	var sx = Sprite_Button.prototype.canvasToLocalX.call(sprite, 0);
	var sy = Sprite_Button.prototype.canvasToLocalY.call(sprite, 0);
	this.SButtons._grabbing = {
		sprite: sprite,
		x: TouchInput._x + sx,
		y: TouchInput._y + sy
	};
	sprite.onGrab();
};

Scene_Base.prototype.isGrabbingSprite = function() {
	return !!this.SButtons._grabbing;
};

Scene_Base.prototype.grabbedSprite = function() {
	return this.SButtons._grabbing ? this.SButtons._grabbing.sprite : null;
};

Scene_Base.prototype.addSButton = function(button) {
	if (this.SButtons._needSort === 'start') return this.SButtons._all.push(button);
	this.SButtons._needSort = true;
	button._needSort = true;
};

Scene_Base.prototype.removeSButton = function(button) {
	this.SButtons._all.delete(button);
};

Scene_Base.prototype.getSButtons = function() {
	return this.SButtons._all;
};

Scene_Base.prototype.SButtonsState = function() {
	return this.SButtons._state;
};

Scene_Base.prototype.setSButtonsState = function(state) {
	state = ['on', 'pause', 'off'].contains(state) ? state : 'on';
	this.SButtons._state = state;
};

Scene_Base.prototype.buttonDescription = function() {
	return this.SButtons._description;
};

Scene_Base.prototype.getButtonById = function(id) {
	return this.getSButtons().find(function(button) {
		return (button.isButton() && button.id === id);
	});
};

Scene_Base.prototype.isCallingTrigger = function() {
	var button = this.SButtons._hovered;
	return !!button && button.isButton() && button._touching;
};

Scene_Base.prototype.isGrabAnySButton = function() {
	var button = this.SButtons._hovered;
	return !!button && !button.isButton() && button._touching;
};

Scene_Base.prototype.isTextInputSelected = function() {
	var Button = this.selectedButton();
	return !!Button && (Button instanceof SButton_Text);
};

Scene_Base.prototype.selectedButton = function() {
	return this.SButtons ? this.SButtons._selected : null;
};

Scene_Base.prototype.selectButton = function(new_selection, touch) {
	var current_selection = this.SButtons._selected;
	if (current_selection) {
		if (current_selection === new_selection) {
			return current_selection.onReselect();
		} else {
			this.SButtons._selected = null;
			current_selection.onDeselect();
		}
	}

	this.SButtons._selected = new_selection || null;
	if (new_selection) {
		new_selection.onSelect(touch);
	}
};

Scene_Base.prototype.isHoverAnySButton = function() {
	return this.SButtons._hovered;
};

Scene_Base.prototype.isSelecting = function() {
	return this._selecting;
};

SMO.AM._Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
	SMO.AM._Scene_Base_update.call(this);
	this.updateSButtons();
	this.updateGlobalFrames();
	this.updateAchievements();
};

Scene_Base.prototype.updateSButtons = function() {
	if (this instanceof Scene_Boot) return;
	if (this.isSButtonSorting()) return;
	this.updateSButtonsHover();
	//Updating button selection
	if (this.isTriggeringSButton()) {
		this.selectButton(this.SButtons._hovered);
	}
	if (Input.isTriggered('tab')) {
		if (Input.isPressed('shift')) {
			this.selectPrevSButton();
		} else {
			this.selectNextSButton();
		}
	};
	this.updateTextButtons();
};

Scene_Base.prototype.selectPrevSButton = function() {
	var buttons = this.getSButtons().filter(b => b.isButton() && b.isHoverEdible());
	if (this.SButtons._selected) {
		let index = buttons.indexOf(this.SButtons._selected);
		if (index > 0) {
			this.selectButton(buttons[index - 1], false);
		} else {
			this.selectButton(null);
		}
	} else if (buttons.length > 0) {
		this.selectButton(buttons.last(), false);
	}
};

Scene_Base.prototype.selectNextSButton = function() {
	var buttons = this.getSButtons().filter(b => b.isButton() && b.isHoverEdible());
	if (this.SButtons._selected) {
		let index = buttons.indexOf(this.SButtons._selected);
		if (index < buttons.length - 1) {
			this.selectButton(buttons[index + 1], false);
		} else {
			this.selectButton(null);
		}
	} else if (buttons.length > 0) {
		this.selectButton(buttons[0], false);
	}
};

Scene_Base.prototype.isSButtonSorting = function() {
	var SB = this.SButtons;
	if (!SB._needSort) return false;
	if (SB._needSort === 'start') return SB._needSort = false; //Scene start - No need to sort
	this.getSButtons().forEach(function(Button) {
		Button._needSort = true;
	});
	this.removeChild(this.buttonDescription());
	SB._all = [];
	SB._needSort = false;
	return true;
};

Scene_Base.prototype.updateSButtonsHover = function() {
	if (this.isGrabbingSprite()) {
		this.SButtons._hovered = null;
		return;
	}
	var Hovered = null;
	var Button = null;
	for (var b = this.getSButtons().length - 1; b > -1; b--) {	
		Button = this.getSButtons()[b];
		if (!Button) {
			this.getSButtons().splice(b, 1);
			continue;
		}
		if (!Hovered && Button.checkHover()) { //Only one button may be hovered at a time
			Hovered = Button;
			continue;
		}
		Button.setHover(false);
	}

	if (Hovered) {
		Hovered.setHover(true);
		this.SButtons._hovered = Hovered;
	} else {
		this.SButtons._hovered = null;
	}
	return Hovered;
};

Scene_Base.prototype.updateTextButtons = function() {
	if (document.hasFocus() && this.isTextInputSelected()) {
		var button = this.selectedButton();
		SButton_Text.updateTextInput(button);
	};
};

Scene_Base.prototype.isTriggeringSButton = function() {
	if (!TouchInput.isTriggered()) return false;
	var Button = this.SButtons._hovered;
	if (this.isSelecting() && (!Button || !Button.isOverrideSelect())) {
		this.selectButton(null);
		return false;
	}
	if (!Button || (!Button.isButton() && !Button.isClickOnMyGrabBox())) {
		if (this.selectedButton()) {
			this.selectButton(null);
		}
		return false;
	}
	return true;
};

Scene_Base.prototype.updateGlobalFrames = function() {
	if (!SMO.AM.isGlobalMode) return;
	if (SMO.AM.FrameCount.lastValue !== Graphics.frameCount) {
		SMO.AM.FrameCount.value += Graphics.frameCount - SMO.AM.FrameCount.lastValue;
		SMO.AM.FrameCount.lastValue = Graphics.frameCount;
	}
};

Scene_Base.prototype.updateAchievements = function() {
	if (this instanceof Scene_Boot) return;
	if (this instanceof Scene_Title && !SMO.AM.isGlobalMode) return;
	this.createAchievementPopUp();

	//Refreshing achievements
	if (SMO.AM.autoRefresh) {
		this._achievsCounter = this._achievsCounter || 0;
		this._achievsCounter++;
		if (this._achievsCounter >= SMO.AM.updateInterval) {
			SMO.AM.refreshAchievements();
			this._achievsCounter = 0;
		}
	}
};

Scene_Base.prototype.createAchievementPopUp = function() {
	if (!$dataAchievsMenuSets.PopUp.enabled) return;
	if (this._achievsPopUp) return;

	this._achievsPopUp = new Achievement_PopUp();
	//Adding the pop up below the editor
	if (SMO.AM.isAchievementsScene() && this._achievsEditor) {
		let index = this.getChildIndex(this._achievsEditor);
		this.addChildAt(this._achievsPopUp, index);
	} else {
		//Adding the pop up on the highest layer
		this.addChild(this._achievsPopUp);
	}
};

SMO.AM._SceneBase_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
	SMO.AM._SceneBase_terminate.call(this);
	if (this.isTextInputSelected()) {
		SButton_Text.loadDefaultKeyCodes();
	}
	SMO.AM.TextArea.refreshValue();
	document.body.style.cursor = '';
};

//==========================================================================================
// Image Manager
//==========================================================================================
ImageManager.loadAchievement = function(filename, hue) {
	return this.loadBitmap('img/achievements/', filename, hue, true);
};

ImageManager.isAchievementsReady = function() {
	if (!SMO.AM.Images.loading) {
		SMO.AM.Images.loading = [];
		for (var n in SMO.AM.Images.all) {
			SMO.AM.Images.loading.push(ImageManager.loadAchievement(n));
		}
	}

	if (SMO.AM.Images.loading.some(i => !i.isReady())) {
		return false;
	}

	if (!SMO.AM.Images.menu) {
		var background = SceneManager.backgroundBitmap();
		if (!background || !background.isReady()) {
			return false;
		}
	}

	SceneManager._scene.refreshImgStates();
	delete SMO.AM.Images.loading;
	return true;
};

//==========================================================================================
// Scene Manager
//==========================================================================================
SMO.AM._SceneManager_snapForBackground = SceneManager.snapForBackground;
SceneManager.snapForBackground = function() {
	var scene = this._scene;
	if (scene._achievsPopUp) {
		scene._achievsPopUp.opacity = 0;
	}
	SMO.AM._SceneManager_snapForBackground.call(this);
};

//==========================================================================================
// Achievement Pop Up
// This sprite is created on all scenes except for the Scene_Boot
//==========================================================================================
function Achievement_PopUp() {
	this.initialize.apply(this, arguments);
}

Achievement_PopUp.prototype = Object.create(Sprite_Button.prototype);
Achievement_PopUp.prototype.constructor = Achievement_PopUp;

Achievement_PopUp.prototype.initialize = function() {
	Sprite_Button.prototype.initialize.call(this);
	this.createBitmap();
	this.initMembers();
	this.refreshPosition();
	this.restore();
	this.drawMe();
	this.setClickHandler(this.onClick.bind(this));
};

Achievement_PopUp.prototype.initMembers = function() {
	this._fadeRate = 0;
	this._timerX = 180;
	this._timer = 0;
	this.opacity = 0;
	this._queue = [];
};

//Restore pop up data from previous scene
Achievement_PopUp.prototype.restore = function() {
	$gameSystem.achievPopUp = $gameSystem.achievPopUp || {};
	var Data = $gameSystem.achievPopUp;
	if (Data.queue.length === 0) return; //There's no data to be restored
	if (!this.isAllowed()) return;
	this.opacity = Data.opacity;
	this._fadeRate = Data.fadeRate;
	this._timer = Data.timer;
	this._queue = Data.queue;
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - Create

Achievement_PopUp.prototype.createBitmap = function() {
	var settings = $dataAchievsMenuSets.PopUp;
	var width = eval(settings.width);
	var height = eval(settings.height);
	this.bitmap = new Bitmap(width, height);
	this.bitmap.fontFace = this.standardFontFace();
	this.bitmap.fontSize = this.standardFontSize();
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - Update

Achievement_PopUp.prototype.update = function() {
	Sprite_Button.prototype.update.call(this);
	if (!this.isAllowed()) return;
	this.updateFading();
	this.updateTimer();
	this.updateShowing();
};

Achievement_PopUp.prototype.updateFading = function() {
	if (this.isEditing()) return;
	if (!this.isFading()) return;
	this.opacity += this._fadeRate;
	$gameSystem.achievPopUp.opacity = this.opacity;
	if ([0, 255].contains(this.opacity)) {
		this.onFadeEnd();
	}
};

Achievement_PopUp.prototype.updateTimer = function() {
	if (this.isEditing()) return;
	if (this.waitTimer()) {
		if (--this._timer <= 0) {
			this.onTimerOver();
		}
		$gameSystem.achievPopUp.timer = this._timer;
	}
};

Achievement_PopUp.prototype.updateShowing = function() {
	this._queue = $gameSystem.achievPopUp.queue;
	if (this.isBusy() && !this.opacity && !this.waitTimer()) {
		this.show();
	}
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - Refresh

Achievement_PopUp.prototype.refresh = function() {
	var Editor = SceneManager._scene._achievsEditor;
	var achievementId = Editor && Editor._popUpAchievId > -1 ? Editor._popUpAchievId + 1 : null;
	this.drawMe(achievementId);
};

Achievement_PopUp.prototype.onResize = function() {
	var Editor = SceneManager._scene._achievsEditor;
	var achievementId = Editor && Editor._popUpAchievId > -1 ? Editor._popUpAchievId + 1 : null;
	this.createBitmap();
	this.drawMe(achievementId);
};

Achievement_PopUp.prototype.refreshPosition = function() {
	var settings = $dataAchievsMenuSets.PopUp;
	this.x = eval(settings.x);
	this.y = eval(settings.y);
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - Draw

Achievement_PopUp.prototype.drawMe = function(achievementId) {
	var Data = SMO.AM.DataAchievements;
	var Achievement = achievementId ? Data[achievementId - 1] : Data[this._queue[0] - 1];
	if (!Achievement) return;
	this.bitmap.clear();
	var width = this.bitmap.width;
	var height = this.bitmap.height;
	var popUpImg = Achievement.popUpImage || Achievement.backgroundImage;

	//Drawing background
	var category = SMO.AM.DataCategories.find(c => c.name === Achievement.category);
	var isAutoColor = category && category.autoColor.color && category.autoColor.popUpBorders;
	var bdColor = isAutoColor ? category.autoColor.color : $dataAchievsMenuSets.PopUp.borderColor;
	popUpImg = popUpImg ? `achievements/${popUpImg}` : '';
	this.bitmap.drawBorderedRect(0, 0, width, height, 2, bdColor, 'rgba(20,20,20,0.8)', popUpImg);

	//Drawing text
	if ($dataAchievsMenuSets.PopUp.text) {
		var text = $dataAchievsMenuSets.PopUp.text;
		try {
			text = JSON.parse(SMO.AM.translate(text));
		} catch (e) {
			console.error(`Bad formatting on the translation of your Pop Up's text.`);
			console.error(e);
		}
		text = this.convertPopUpTextCodes(text, Achievement);
		this.drawTextEx(text, 6, 5);//edit -> should I add an offset option?
	}
};

Achievement_PopUp.prototype.drawText = function(text, x, y, maxWidth, maxHeight, align) {
	if (this.bitmap) {
		this.bitmap.drawText(text, x, y, maxWidth, maxHeight, align);
	}
};

Achievement_PopUp.prototype.drawTextEx = function(text, x, y) {
	if (!this.bitmap || !text) return 0;
	var lines = text.split('\n');
	var xOffSet = [];
	var lineSize = 0;
	var keepFont = false;
	this.resetFontSettings();
	//Calculating the align offset
	for (var l = 0; l < lines.length; l++) {
		var line = lines[l];
		line = line.replace(/\\FC\[.*?\]/g, '');
		if (line.toLowerCase().indexOf('<center>') > -1) {
			line = line.replace(/<center>/i, '');
			lineSize = SMO.AM.textWidthEx(line, this.bitmap.fontSize, false, 4, keepFont);
			keepFont = true;
			xOffSet.push(Math.floor((this.width - lineSize) / 2 - x));
		} else if (line.toLowerCase().indexOf('<right>') > -1) {
			line = line.replace(/<right>/i, '');
			lineSize = SMO.AM.textWidthEx(line, this.bitmap.fontSize, false, 4, keepFont);
			keepFont = true;
			xOffSet.push(this.width - lineSize - x - 6);
		} else {
			lineSize = 0;
			xOffSet.push(lineSize);
		}
	}
	text = this.removeAlignTexts(text);

	//Drawing the texts
	var textState = { index: 0, x: x, y: y, left: x, xOffSet: xOffSet, lineIndex: 0 };
	textState.text = this.convertEscapeCharacters(text);
	textState.height = SMO.AM.textStateHeight(textState, this.bitmap.fontSize, false);
	while (textState.index < textState.text.length) {
		this.processCharacter(textState);
	}
	return textState.x - x;
};

Achievement_PopUp.prototype.drawIcon = function(iconIndex, x, y) {
	var bitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth;
	var ph = Window_Base._iconHeight;
	var sx = iconIndex % 16 * pw;
	var sy = Math.floor(iconIndex / 16) * ph;
	this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y);
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - Settings

Achievement_PopUp.prototype.defineSetting = function(parameter, value, refresh) {
	SMO.AM.defineWindowSetting.call(this, 'PopUp', parameter, value, refresh);
};

Achievement_PopUp.prototype.getSetting = function(parameter) {
	return $dataAchievsMenuSets.PopUp[parameter];
};

Achievement_PopUp.prototype.standardFontFace = function() {
	var ff = $dataAchievsMenuSets.PopUp.fontFace;
	return ff || Window_Base.prototype.standardFontFace.call(this);
};

Achievement_PopUp.prototype.standardFontSize = function() {
	return $dataAchievsMenuSets.PopUp.fontSize || 18;
};

Achievement_PopUp.prototype.resetFontSettings = function() {
	this.bitmap.fontFace = this.standardFontFace();
	this.bitmap.fontSize = this.standardFontSize();
	this.bitmap.outlineColor = 'rgba(0, 0, 0, 0.5)';
	this.bitmap.outlineWidth = 4;
	this.bitmap.fontBold = false;
	this.bitmap.fontItalic = false;
	this.bitmap.textColor = SMO.AM.getTextColor(0);
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - On Action

Achievement_PopUp.prototype.onClick = function() {
	if (!$dataAchievsMenuSets.PopUp.button) return;
	if (this.opacity > 0) {
		if (SceneManager._scene instanceof Scene_Title) return;
		if (SceneManager._scene instanceof Scene_Achievements) return;
		if (Imported.AlphaABS && uAPI.isBattle) {
			AlphaABS.BattleManagerABS.alertNoInBattle();
			AlphaABS.BattleManagerABS.warning(1);
			return;
		}
		if (!$gamePlayer.canMove()) return;
		if (!this._queue[0]) return;
		var achievement = $gameSystem.achievement(this._queue[0]);
		if (achievement) {
			var categoryName = achievement.category;
			var category = SMO.AM.DataCategories.find(c => c.name === categoryName);
			SMO.AM.currentCategory = category || { id: 0 };
			var data = SMO.AM.getAchievsByCategory(SMO.AM.currentCategory.name);
			data.forEach(function(d) {
				if (d.isHidden()) {
					data.delete(d);
				}
			});
			data = Window_Achievements.prototype.sortData(data, $gameSystem.achievs.sortType);
			$dataAchievsMenuSets.PopUp.preselect = data.indexOf(achievement);
			$dataAchievsMenuSets.PopUp.isClickTriggered = true;
			SoundManager.playOk();
			SMO.AM.showAchievements();
		}		
	}
};

//------------------------------------------------------------------------------------------
// Achievement Pop Up - Other

Achievement_PopUp.prototype.isEditing = function() {
	var scene = SceneManager._scene;
	return (scene instanceof Scene_Achievements) && scene.isEditing();
};

Achievement_PopUp.prototype.clear = function() {
	this.clearPreviousData();
	this.opacity = 0;
	this._timer = 0;
	this._queue = [];
};

Achievement_PopUp.prototype.clearPreviousData = function() {
	$gameSystem.achievPopUp = {
		opacity: 0,
		fadeRate: 0,
		fadeLimit: 0,
		timer: 0,
		queue: []
	};
};

Achievement_PopUp.prototype.isBusy = function() {
	return this._queue.length > 0;
};

Achievement_PopUp.prototype.waitTimer = function() {
	return this._timer > 0 && !this.isFading();
};

Achievement_PopUp.prototype.onTimerOver = function() {
	if (this._queue_wait) {
		this._queue_wait = false;
	} else {
		this.hide();
	}
	this._timer = 0;
};

Achievement_PopUp.prototype.onFadeEnd = function() {
	this._fadeRate = 0;
	if (this.opacity === 0) {
		this._queue = $gameSystem.achievPopUp.queue;
		this._queue.splice(0, 1);
	}
};

Achievement_PopUp.prototype.isFading = function() {
	return this._fadeRate != 0;
};

Achievement_PopUp.prototype.isAllowed = function() {
	var scene = SceneManager._scene;
	if (!SMO.AM.isGlobalMode) {
		if (scene instanceof Scene_Title) return false;
		if (scene instanceof Scene_Load) return false;
	}
	return true;
};

Achievement_PopUp.prototype.show = function() {
	if (!this.canShow()) return;

	//Get the first achievement that has it's pop up ready and show it
	this._queue = $gameSystem.achievPopUp.queue;
	for (var q = 0; q < this._queue.length; q++) {
		var Achievement = SMO.AM.DataAchievements[this._queue[q] - 1];
		if (Achievement.isMyPopUpReady()) {
			break;
		}
	}
	if (q < this._queue.length) {
		this.drawMe(this._queue[q]);
		this.opacity = 1;
		this.fade(5, this._timerX);
	} else {
		//No achievement has it's pop up ready -> wait 6 frames
		this._timer = 6;
		this._queue_wait = true;
	}
};

Achievement_PopUp.prototype.canShow = function() {
	if (this.opacity) {
		//The pop up is already visible
		return false;
	}
	if (!this.isAllowed()) {
		//It is not allowed on this scene
		this.clearPreviousData();
		return false;
	}
	if ($gameSystem.achievPopUp.queue.length === 0) {
		//Theres no achievement recently unlocked
		return false;
	};

	return true;
};

Achievement_PopUp.prototype.hide = function() {
	this.fade(-5);//fade out
};

Achievement_PopUp.prototype.convertPopUpTextCodes = function(text, Achievement) {
	if (!text) return '';
	if (!Achievement) return text;
	var iconIndex = Achievement.icon.unlocked > -2 ? Achievement.icon.unlocked : SMO.AM.Icons.unlocked;

	//Get auto color
	var c1 = '', c2 = '', c3 = '', c4 = '';
	var category = SMO.AM.DataCategories.find(c => c.name === Achievement.category);
	if (category && category.autoColor.color) {
		if (category.autoColor.popUpCat) {
			c1 = `\\FC[${category.autoColor.color}]`;
			c2 = '\\FC[restore]';
		}
		if (category.autoColor.popUpAchiev) {
			c3 = `\\FC[${category.autoColor.color}]`;
			c4 = '\\FC[restore]';
		}
	}

	text = text.replace(/<AchievCategory:(\d+)>/gi, function() {
		var index = parseInt(arguments[1]) - 1;
		return c1 + SMO.AM.translate(Achievement.categories[index]) + c2;
	}.bind(this));
	text = text.replace(/<AchievName>/gi, c3 + SMO.AM.translate(Achievement.name) + c4);
	text = text.replace(/<AchievId>/gi, Achievement.id);
	text = text.replace(/<AchievIcon>/gi, '\\i[' + iconIndex + ']');
	return text;
};

Achievement_PopUp.prototype.changeTextColor = function(color) {
	if (this.bitmap) {
		this.bitmap.textColor = color;
	}
};

Achievement_PopUp.prototype.lineHeight = function() {
	return 36;
};

Achievement_PopUp.prototype.removeAlignTexts = function(text) {
	text = text.replace(/<center>/ig, '');
	text = text.replace(/<right>/ig, '');
	return text;
};

Achievement_PopUp.prototype.convertEscapeCharacters = function(text) {
	return Window_Base.prototype.convertEscapeCharacters.call(this, text);
};

//For compatibility with YEP_MessageCore.js
Achievement_PopUp.prototype.setWordWrap = function(text) {
	return text;
};

Achievement_PopUp.prototype.convertExtraEscapeCharacters = function(text) {
	return Window_Base.prototype.convertExtraEscapeCharacters.call(this, text);
};

Achievement_PopUp.prototype.actorClassName = function(n) {
	return Window_Base.prototype.actorClassName.call(this, n);
};

Achievement_PopUp.prototype.actorNickname = function(n) {
	return Window_Base.prototype.actorNickname.call(this, n);
};

Achievement_PopUp.prototype.partyClassName = function(text) {
	return Window_Base.prototype.partyClassName.call(this, n);
};

Achievement_PopUp.prototype.partyNickname = function(text) {
	return Window_Base.prototype.partyNickname.call(this, n);
};

Achievement_PopUp.prototype.escapeIconItem = function(n, database) {
	return Window_Base.prototype.escapeIconItem.call(this, n, database);
};

Achievement_PopUp.prototype.obtainEscapeString = function(textState) {
	return Window_Base.prototype.obtainEscapeString.call(this, textState);
};

Achievement_PopUp.prototype.processCharacter = function(textState) {
	Window_Base.prototype.processCharacter.call(this, textState);
};

Achievement_PopUp.prototype.processNewLine = function(textState) {
	textState.x = textState.left;
	textState.y += textState.height;
	textState.lineIndex++;
	textState.height = SMO.AM.textStateHeight(textState, this.bitmap.fontSize, false);
	textState.index++;
};

Achievement_PopUp.prototype.processNormalCharacter = function(textState) {
	var c = textState.text[textState.index++];
	var w = SMO.AM.textWidthEx(c, this.bitmap.fontSize, true);
	var xOffSet = textState.xOffSet[textState.lineIndex] || 0;
	this.bitmap.drawText(c, textState.x + xOffSet, textState.y, this.width/2, textState.height);
	textState.x += w;
};

Achievement_PopUp.prototype.processNewPage = function(textState) {
	textState.index++;
};

Achievement_PopUp.prototype.processEscapeCharacter = function(code, textState) {
	switch (code) {
	case 'C':
		this.bitmap.textColor = SMO.AM.getTextColor(this.obtainEscapeParam(textState));
		break;
	case 'I':
		this.processDrawIcon(this.obtainEscapeParam(textState), textState);
		break;
	case '{':
		this.makeFontBigger();
		break;
	case '}':
		this.makeFontSmaller();
		break;
	case 'FC':
		var color = this.obtainString(textState);
		if (color === 'restore') {
			this.bitmap.textColor = this._fc_restore || this.bitmap.textColor;
			this._fc_restore = null;
		} else {
			this._fc_restore = this.bitmap.textColor;
			this.bitmap.textColor = color;
		}
		break;
	//The ones below are from YEP_MessageCore.js
	case 'MSGCORE':
		if (Imported.YEP_MessageCore) {
			var id = this.obtainEscapeParam(textState);
			if (id === 0) this.resetFontSettings();
			if (id === 1) this.bitmap.fontBold = !this.bitmap.fontBold;
			if (id === 2) this.bitmap.fontItalic = !this.bitmap.fontItalic;
		}
		break;
	case 'FS':
		var size = this.obtainEscapeParam(textState);
		this.bitmap.fontSize = size;
		break;
	case 'FN':
		if (Imported.YEP_MessageCore) {
			var name = this.obtainEscapeString(textState);
			this.bitmap.fontFace = name;
		}
		break;
	case 'OC':
		var id = this.obtainEscapeParam(textState);
		this.bitmap.outlineColor = SMO.AM.getTextColor(id);
		break;
	case 'OW':
		this.bitmap.outlineWidth = this.obtainEscapeParam(textState);
		break;
	}
};

Achievement_PopUp.prototype.processDrawIcon = function(iconIndex, textState) {
	var xOffSet = textState.xOffSet[textState.lineIndex] || 0;
	var yOffSet = -(28 - this.bitmap.fontSize)/2;
	this.drawIcon(iconIndex, textState.x + 2 + xOffSet, textState.y + 2 + yOffSet);
	textState.x += Window_Base._iconWidth + 4;
};

Achievement_PopUp.prototype.makeFontBigger = function() {
	if (this.bitmap.fontSize <= 96) {
		this.bitmap.fontSize += 4;
	}
};

Achievement_PopUp.prototype.makeFontSmaller = function() {
	if (this.bitmap.fontSize >= 24) {
		this.bitmap.fontSize -= 4;
	}
};

Achievement_PopUp.prototype.obtainEscapeCode = function(textState) {
	return Window_Base.prototype.obtainEscapeCode.call(this, textState);
};

Achievement_PopUp.prototype.obtainEscapeParam = function(textState) {
	return Window_Base.prototype.obtainEscapeParam.call(this, textState);
};

Achievement_PopUp.prototype.obtainString = function(textState) {
	var arr = /\[.*?\]/.exec(textState.text.slice(textState.index));
	if (arr) {
		textState.index += arr[0].length;
		return arr[0].slice(1, -1);
	} else {
		return '';
	}
};

Achievement_PopUp.prototype.skip = function() {
	if (this._queue.length === 0) return;
	this._queue.splice(0, 1);
	this._fadeTimer = 0;
	this._fadeRate = 0;
	this.opacity = 0;
};

Achievement_PopUp.prototype.fade = function (fadeRate, timer) {
	fadeRate = Number(fadeRate) || 0;
	if (!fadeRate) return;

	timer = Number(timer) || 0;
	$gameSystem.achievPopUp.fadeRate = fadeRate;
	$gameSystem.achievPopUp.timer = timer;
	this._fadeRate = fadeRate;
	this._timer = timer;
};

//==========================================================================================
// Scene Boot
// Load the initial data for the achievements and the menu
// Also gets the translation method
//==========================================================================================
SMO.AM._SceneBoot_create = Scene_Boot.prototype.create;
Scene_Boot.prototype.create = function() {
	DataManager.saveAchievsMenu(true);
	DataManager.saveExtraAchievements(true);
	SMO.AM._SceneBoot_create.call(this);
};

SMO.AM._SceneBoot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	SMO.AM._SceneBoot_start.call(this);
	DataManager.loadAchievementsData();
};

//==========================================================================================
// Scene Title
// Adding the title command (on global range only)
//==========================================================================================
if (SMO.AM.isGlobalMode) {

SMO.AM._SceneTitle_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
	SMO.AM._SceneTitle_createCommandWindow.call(this);
	this._commandWindow.setHandler('achievements', this.commandAchievements.bind(this));
};

Scene_Title.prototype.commandAchievements = function() {
	this._commandWindow.close();
	SceneManager.push(Scene_Achievements);
};

SMO.AM._WindowTitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
	SMO.AM._WindowTitleCommand_makeCommandList.call(this);
	if (SMO.AM.TitleCommand.enabled) {
		var position = SMO.AM.TitleCommand.position - 1;
		var name = SMO.AM.TitleCommand.name;
		Window_MenuCommand.prototype.addCommandWithIndex.call(this, name, 'achievements', true, null, position);
	}
};

}//SMO.AM.isGlobalMode

//==========================================================================================
// Scene Menu
// Adding the menu command
//==========================================================================================
SMO.AM._SceneMenu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	SMO.AM._SceneMenu_createCommandWindow.call(this);
	this._commandWindow.setHandler('achievements', this.commandAchievements.bind(this));	
};

Scene_Menu.prototype.commandAchievements = function() {
	SceneManager.push(Scene_Achievements);
};

SMO.AM._WindowMenuCommand_makeCommandList = Window_MenuCommand.prototype.makeCommandList;
Window_MenuCommand.prototype.makeCommandList = function() {
	SMO.AM._WindowMenuCommand_makeCommandList.call(this);
	var command = SMO.AM.MenuCommand;
	if (command.enabled) {
		var switchId = command.switchId;
		var condition = switchId ? $gameSwitches.value(switchId) : true;
		var position = command.position - 1;
		var name = command.name;
		if (condition) {
			this.addCommandWithIndex(name, 'achievements', true, null, position);
		}
	}	
};

Window_MenuCommand.prototype.addCommandWithIndex = function(name, symbol, enabled, ext, index) {
	if (enabled === undefined) {
		enabled = true;
	}
	if (ext === undefined) {
		ext = null;
	}
	var min = 0;
	var max = this._list.length;
	var position = index.clamp(min, max);
	var command = { name: name, symbol: symbol, enabled: enabled, ext: ext};
	this._list.splice(position, 0, command);
};

//==========================================================================================
// Scene Map
// Avoiding making the player walk after clicking on the pop up
//==========================================================================================
SMO.AM._SceneMap_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
	if (TouchInput.isTriggered() || this._touchCount > 0) {
		if (TouchInput.isPressed()) {
			if (this._touchCount === 0 || this._touchCount >= 15) {
				if (!this.isGrabbingSprite() && !this.isAnySButton(TouchInput.x, TouchInput.y) && !this.isCallingTrigger()) {
					SMO.AM._SceneMap_processMapTouch.call(this);
					this._touchCount--;
				}
			}
			this._touchCount++;
		} else {
			this._touchCount = 0;
		}
	}
};

Scene_Map.prototype.isAnySButton = function(x, y) {
	if ($dataAchievsMenuSets.PopUp.button && this.isAchievementPopUp(x, y)) return true;
	return this.isHoverAnySButton();
};

Scene_Map.prototype.isAchievementPopUp = function(x, y) {
	var apu = this._achievsPopUp;
	if (!apu) return false;
	if (!apu.isBusy()) return false;
	if (x >= apu.x && x <= apu.x + apu.width) {
		if (y >= apu.y && y <= apu.y + apu.height) {
			return true;
		}
	}
	return false;
};

//===========================================================================================
// New Scene - Scene Achievements
//===========================================================================================
function Scene_Achievements() {
	this.initialize.apply(this, arguments);
}

Scene_Achievements.prototype = Object.create(Scene_Base.prototype);
Scene_Achievements.prototype.constructor = Scene_Achievements;

Scene_Achievements.prototype.initialize = function() {
	Scene_Base.prototype.initialize.call(this);
	this.createBackground();
	this.createWindowLayer();
	this.createTitleWindow();
	this.createItemWindow();
	this.createTrophiesWindow();
	this.createInfoWindow();
	this.createSortSprite();
	this.createEditionTool();

	//After clicking on the Pop Up
	if ($dataAchievsMenuSets.PopUp.isClickTriggered) {
		this.onAchievementOk();
		this._itemWindow.deactivate();
		this.showSortOption();
		$dataAchievsMenuSets.PopUp.isClickTriggered = false;
	}

	//When directly opening a category
	if (SMO.AM.currentCategory.id) {
		this.showSortOption();
	}
};

//------------------------------------------------------------------------------------------
// Scene Achievements - Create

Scene_Achievements.prototype.createBackground = function() {
	this._backgroundSprite = new Sprite();
	this.setBackground(SMO.AM.Images.menu);
	this.addChild(this._backgroundSprite);
};

Scene_Achievements.prototype.createTitleWindow = function() {
	this._titleWindow = new Window_SceneName();
	this.addWindow(this._titleWindow);
};

Scene_Achievements.prototype.createItemWindow = function() {
	this._itemWindow = new Window_Achievements();
	this._itemWindow.setHandler('ok', this.onAchievementOk.bind(this));
	this._itemWindow.setHandler('cancel', this.onAchievementCancel.bind(this));
	this.addWindow(this._itemWindow);
	this._itemWindow.select($dataAchievsMenuSets.PopUp.preselect);
};

Scene_Achievements.prototype.createTrophiesWindow = function() {
	if (SMO.AM.DataCategories.length > 0) {
		this._trophiesWindow = new Window_Trophies();
		this.addWindow(this._trophiesWindow);
	}
};

Scene_Achievements.prototype.createInfoWindow = function() {
	this._infoWindow = new Window_AchievInfo();
	this.addWindow(this._infoWindow);
};

Scene_Achievements.prototype.createSortSprite = function() {
	if (!$dataAchievsMenuSets.SortOption.enabled) return;
	var Data = $dataAchievsMenuSets.SortOption;
	var opt = Data.options.map(o => o.symbol);
	var sv = opt[$gameSystem.achievs.sortType];
	var sortButton = {
		id:'SOP',
		x: eval(Data.x),
		y: eval(Data.y),
		options: opt,
		width: eval(Data.width),
		height: eval(Data.height),
		value: [sv],
		textOffset: [5, 0],
		listLimit: opt.length,
		backColor: 'rgba(0,0,0,0.8)',
		itemColors: ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)']
	};

	this._sortOption = new Sort_Option(sortButton);
	this.addChild(this._sortOption);
	this._sortOption.visible = false;
};

Scene_Achievements.prototype.createEditionTool = function() {
	this._editMode = false;
	if (!SMO.AM.isPlaytest() || !Utils.isNwjs() || !SMO.AM.isEditorEnabled) {
		this._achievsEditor = null;
		return;
	}
	this.createWindowSelector();
	this._achievsEditor = new Achievements_Editor();
	this._achievsEditor.parentFocus = function() {};
	this.addChild(this._achievsEditor);
	this.createEditorEx();
	this.adaptKeyMapper();
	this.createDarkTone();
	this.createWarning();
	this.createTextInputButton();
};

Scene_Achievements.prototype.createWindowSelector = function() {
	var Data = { width: Graphics.width, height: Graphics.height };
	this._windowSelector = new Sprite_Grabbable(Data);
	this._windowSelector._fixedTone = true;
	this._windowSelector._offScreen.x = 1;
	this._windowSelector._offScreen.y = 1;
	this._windowSelector.setDragLimits();
	this._windowSelector.borderSize = 5;
	this._windowSelector.parentFocus = function() {};
	this._windowSelector.update = function() {
		this.updateHoverStyle();
		Sprite_Grabbable.prototype.update.call(this);
		this.updateSelectedTone();
		this.updatePreciseMove();
		this.updateMyLayer();
	};
	this._windowSelector.updateMyLayer = function() {
		//Making sure the selector is above the pop up
		if (this._layerUpdated > 1) return;
		this._layerUpdated = this._layerUpdated || 0;
		this._layerUpdated++;
		if (this._layerUpdated < 2) return;
		if (this.parent._achievsPopUp) {
			var index = this.parent.getChildIndex(this.parent._achievsPopUp);
			this.parent.setChildIndex(this, index + 1);
		}
	};
	this._windowSelector.updateHoverStyle = function() {
		if (this._moveType) return false;
		if (!this.visible) return this.cursorStyle = null;
		if (!this._hovered) return this.cursorStyle = null;
		var cursorStyle = this.getBorderHoverStyle() || 'move';
		if (this.cursorStyle === cursorStyle) return false;
		this.cursorStyle = cursorStyle;
		document.body.style.cursor = cursorStyle;
		return true;
	};
	this._windowSelector.getBorderHoverStyle = function() {
		var bds = this.borderSize;
		var width = this._size[0];
		var height = this._size[1];
		if (TouchInput._cX < (this.x + bds)) {
			if (TouchInput._cY < (this.y + bds)) return 'nw-resize'; //Top-left corner
			if (TouchInput._cY > (this.y + height - bds - 1)) return 'sw-resize'; //Bottom-left corner
			return 'w-resize'; //Left border
		}
		if (TouchInput._cX > (this.x + width - bds - 1)) {
			if (TouchInput._cY < (this.y + bds)) return 'ne-resize'; //Top-right corner
			if (TouchInput._cY > (this.y + height - bds - 1)) return 'se-resize'; //Bottom-right corner
			return 'e-resize'; //Right border
		}
		if (TouchInput._cY < (this.y + bds)) return 'n-resize'; //Top border
		if (TouchInput._cY > (this.y + height - bds - 1)) return 's-resize'; //Bottom border
		return '';
	};
	this._windowSelector.updateSelectedTone = function() {
		if (this._touching || !this.visible) return this.alpha = 1;
		if (this.glow) {
			this.alpha -= 0.02;
			if (this.alpha < 0.5) {
				this.glow = 0;
			}
		} else {
			this.alpha += 0.02;
			if (this.alpha > 1) {
				this.glow = 1;
			}
		}
	};
	this._windowSelector.updateGrabbing = function() {
		if (!this.isGrabbed()) return;
		if (!this.visible) {
			return this.onRelease();
		}
		if (this._moveType === 'move') return Sprite_Grabbable.prototype.updateGrabbing.call(this);
		if (!TouchInput.isPressed() || !SceneManager._scene.isGrabbingSprite()) return this.onRelease();
		var width_changed = this.updateWidthChange();
		var height_changed = this.updateHeightChange();
		if (width_changed || height_changed) {
			this.redraw();
		}
	};
	this._windowSelector.updateWidthChange = function() {
		if (this._moveType === 'n-resize' || this._moveType === 's-resize') return false;
		var spot = SceneManager._scene.SButtons._grabbing; //Clicked spot
		var borders = 10 + this.borderSize * 2;
		var width = this._size[0];
		var x = this.x;
		if (this._moveType === 'e-resize' || this._moveType === 'ne-resize' || this._moveType === 'se-resize') {
			width += TouchInput._cX - this.x - spot.x;
		} else { // w-resize, nw-resize or sw-resize
			x = TouchInput._cX - spot.x;
			width += this._position[0] - x;
		}
		if (this.width === width) return false;
		if (width >= borders) {
			this.x = x;
			this.width = width;
			return true;
		} else if (this.width > borders) {
			this.x = Math.min(x, this._position[0] + this._size[0] - borders);
			this.width = borders;
			return true;
		}
		return false;
	};
	this._windowSelector.updateHeightChange = function() {
		if (this._moveType === 'w-resize' || this._moveType === 'e-resize') return false;
		var spot = SceneManager._scene.SButtons._grabbing;
		var borders = 10 + this.borderSize * 2;
		var height = this.height;
		var y = this.y;
		if (this._moveType === 's-resize' || this._moveType === 'sw-resize' || this._moveType === 'se-resize') {
			height = (TouchInput._cY - this.y) + this._size[1] - spot.y;
		} else { // 'w-resize', 'nw-resize' or 'sw-resize'
			y = TouchInput._cY - spot.y;
			height = this._size[1] + this._position[1] - y;
		}
		if (this.height === height) return false;
		if (height >= borders) {
			this.y = y;
			this.height = height;
			return true;
		} else if (this.height > borders) {
			this.y = Math.min(y, this._position[1] + this._size[1] - borders);
			this.height = borders;
			return true;
		}
		return false;
	};
	this._windowSelector.updatePreciseMove = function() {
		if (!this.visible) return;
		if (this.isGrabbed()) return;
		var selected = this.selected;
		var Editor = SceneManager._scene._achievsEditor;
		if (Input.isRepeated('left')) { this.x--; }
		if (Input.isRepeated('up')) { this.y--; }
		if (Input.isRepeated('right')) { this.x++; }
		if (Input.isRepeated('down')) { this.y++; }
		if (selected.x === this.x && selected.y === this.y) return;
		var last = Editor._undoData.last();
		if (last && last.type === 'preciseMove') {
			last.newValue = {x: selected.x, y: selected.y};
		} else {
			Editor.addEditAction({
				type: 'preciseMove',
				wname: this.selectedName,
				window: selected,
				lastValue: {x: selected.x, y: selected.y}, 
				newValue: {x: this.x, y: this.y}
			});
		}
		SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'x', this.x, true);
		SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'y', this.y, true);
		Editor.redrawWindowInfo();
	};
	this._windowSelector.onGrab = function() {
		Sprite_Grabbable.prototype.onGrab.call(this);
		this._moveType = this.cursorStyle;
	};
	this._windowSelector.onRelease = function() {
		Sprite_Grabbable.prototype.onRelease.call(this);
		if (!this._moveType) return;
		if (this._moveType === 'move') {
			this.onMoved();
		} else {
			let moved = this._moveType.indexOf('w') > -1 || this._moveType.indexOf('n') > -1;
			this.onResize(moved);
		}
		
		this._moveType = null;
		this._position = [this.x, this.y];
		this._size = [this.width, this.height];
	};
	this._windowSelector.onMoved = function() {
		var Editor = SceneManager._scene._achievsEditor;
		var selected = this.selected;
		let moved = selected.x !== this.x || selected.y !== this.y;
		if (!moved) return;
		Editor.addEditAction({
			type: 'move',
			wname: this.selectedName,
			window: selected,
			lastValue: {x: selected.x, y: selected.y}, 
			newValue: {x: this.x, y: this.y}
		});
		SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'x', this.x, true);
		SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'y', this.y, true);
		Editor.redrawWindowInfo();
	};
	this._windowSelector.onResize = function(moved) {
		var Editor = SceneManager._scene._achievsEditor;
		var selected = this.selected;
		let resized = selected.width !== this.width || selected.height !== this.height;
		if (!resized) return;
		Editor.addEditAction({
			type: moved ? 'resize-move' : 'resize',
			wname: this.selectedName,
			window: selected,
			lastValue: {x: selected.x, y: selected.y, width: selected.width, height: selected.height},
			newValue: {x: this.x, y: this.y, width: this.width, height: this.height}
		});
		selected.width = this.width;
		if (moved) {
			SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'x', this.x, true);
			SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'y', this.y, true);
		}
		SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'width', this.width);
		SMO.AM.defineWindowSetting.call(selected, this.selectedName, 'height', this.height, true);
		Editor.redrawWindowInfo();
	};
	this._windowSelector.onMouseLeave = function() {
		Sprite_Grabbable.prototype.onMouseLeave.call(this);
		document.body.style.cursor = '';
	};
	this._windowSelector.drawMe = function(start) {
		if (!this.selected) return;
		var bds = this.borderSize;
		var c1 = '#ffffff'; //border color
		var c2 = 'rgba(255, 255, 255, 0.2)'; //background color
		this.bitmap.drawBorderedRect(0, 0, this.width, this.height, bds, c1, c2);
	};
	this._windowSelector.visible = false;
	this.addChild(this._windowSelector);
};

Scene_Achievements.prototype.createEditorEx = function() {
	var width = 304;
	var height = Graphics.height;
	var EditorEx = new Sprite(new Bitmap(width, height));;
	EditorEx.bitmap.gradientFillRect(0, 0, width, height, '#555555', '#222222', true);
	EditorEx.bitmap.gradientFillRect(width - 1, 0, 1, height, '#999999', '#555555', true);//vertical line
	EditorEx.bitmap.fillRect(0, height - 1, width, height, '#555555');//horizontal line
	EditorEx.x = -width;
	EditorEx._animationCount = 0;
	EditorEx.show = function() {
		this.setItemList();
		this._animationCount = 0;
		this.x = -this.width;
		this._callIn = true;
		this._callOut = false;
	};
	EditorEx.hide = function() {
		this._animationCount = 0;
		this.x = 0;
		this._callIn = false;
		this._callOut = true;
	};
	EditorEx.setItemList = function(type) {
		this._list.setItemList(type);
	};
	EditorEx.update = function() {
		Sprite.prototype.update.call(this);
		if (this._callIn) {
			if (this._animationCount < 1) {
				this._animationCount = Math.min(1, this._animationCount + 0.03);
				var w = this.width;
				this.x = this.width * (easeOutBack(this._animationCount) - 1);
			} else {
				this._animationCount = 0;
				this._callIn = false;
			}
			this._callOut = false;
		} else if (this._callOut) {
			if (this._animationCount < 1) {
				this._animationCount = Math.min(1, this._animationCount + 0.03);
				this.x = - this.width * easeInBack(this._animationCount);
			} else {
				this._animationCount = 0;
				this._callOut = false;
			}
		}
	};
	//Editor's list -> used to show data like weapons, armors and items
	this._achievsEditorEx = EditorEx;
	this._achievsEditorEx._list = new Sprite_ItemList({}, 200, 50);
	this._achievsEditorEx._list.bitmap.fontSize = 20;
	this._achievsEditorEx.addChild(this._achievsEditorEx._list);
	this.addChild(this._achievsEditorEx);
};

Scene_Achievements.prototype.selectWindow = function(selected, name) {
	if (!selected) return;
	this._windowSelector.selected = selected;
	this._windowSelector.selectedName = name;
	this._windowSelector.width = selected.width;
	this._windowSelector.height = selected.height;
	this._windowSelector._position = [selected.x, selected.y];
	this._windowSelector._size = [selected.width, selected.height];
	this._windowSelector.x = selected.x;
	this._windowSelector.y = selected.y;
	this._windowSelector.redraw();
	this._windowSelector.visible = true;
};

Scene_Achievements.prototype.deselectWindow = function() {
	this._windowSelector.selected = null;
	this._windowSelector.visible = false;
};

Scene_Achievements.prototype.createDarkTone = function() {
	var width = Graphics.width;
	var height = Graphics.height;
	var tone = 'rgba(0,0,0,0.5)';
	this._darkTone = new Sprite(new Bitmap(width, height));
	this._darkTone.bitmap.fillRect(0, 0, width, height, tone);
	this._darkTone.visible = false;
	this.addChild(this._darkTone);
};

Scene_Achievements.prototype.createWarning = function() {
	var width_a = Graphics.width;
	var height_a = Graphics.height;
	var width_b = 250;
	var height_b = 300;
	this._warning = new Sprite(new Bitmap(width_a, height_a));
	this._warning.txtChild = new Sprite(new Bitmap(width_b, height_b));
	this._warning.addChild(this._warning.txtChild);
	this._warning.visible = false;
	this._warning._msgId = '';
	this.addChild(this._warning);
	var bitmap = this._warning.bitmap;

	//Drawing bordered-rounded background
	var x = Math.ceil((width_a - width_b) / 2); //center x
	var y = Math.ceil((height_a - height_b) / 2); //center y
	bitmap.drawRoundedRect(x, y, width_b, height_b, 8, '#ffffff'); //border
	bitmap.drawRoundedRect(x + 2, y + 2, width_b - 4, height_b - 4, 6, '#000000'); //back
	bitmap.gradientFillRect(x + 12, y + 40, width_b - 24, height_b - 52, '#222222', '#111111', true); //back

	//Repositioning text child
	this._warning.txtChild.x = x;
	this._warning.txtChild.y = y;

	var okButton = {
		id: 'onOk',
		text: 'OK',
		x: x + 15,
		y: y + height_b - 40,
		textAlign: 'center',
		width: 50,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		borderColor: '#88ff88',
		backColor: '#33db33',
		onClick: this.onOk.bind(this)
	};
	this._okButton = new SButton_Confirm(okButton);
	this._okButton.visible = false;
	this._okButton._overrideState = true;
	this._okButton.playClickSE = function() {};
	this._okButton.refreshPosition = function(type) {
		if (type === 'warning') {
			let Parent = SceneManager._scene._warning;
			this.x = Parent.x + Parent.txtChild.x + 15;
			this.y = Parent.y + Parent.txtChild.y + Parent.txtChild.height - 40;
			return;
		}
		var Parent = SceneManager._scene._textInputButton;
		this.x = Parent.x + 15;
		this.y = Parent.y + Parent.height + 2;
	};
	this.addChild(this._okButton);

	var continueButton = {
		id: 'onContinue',
		text: 'CONTINUE',
		x: Graphics.width / 2 - 40,
		y: y + height_b - 40,
		textAlign: 'center',
		width: 80,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		borderColor: '#ffa500',
		backColor: '#ff6400',
		onClick: this.onContinue.bind(this)
	};
	this._continueButton = new SButton_Confirm(continueButton);
	this._continueButton.visible = false;
	this._continueButton._overrideState = true;
	this._continueButton.playClickSE = function() {};
	this.addChild(this._continueButton);

	var cancelButton = {
		id: 'onCancel',
		text: 'CANCEL',
		x: x + width_b - 65,
		y: y + height_b - 40,
		textAlign: 'center',
		width: 50,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		borderColor: '#ff8888',
		backColor: '#db3333',
		onClick: this.onCancel.bind(this)
	};
	this._cancelButton = new SButton_Confirm(cancelButton);
	this._cancelButton.visible = false;
	this._cancelButton._overrideState = true;
	this._cancelButton.playClickSE = function() {};
	this._cancelButton.refreshPosition = function(type) {
	if (type === 'warning') {
			let Parent = SceneManager._scene._warning;
			this.x = Parent.x + Parent.txtChild.x + Parent.txtChild.width - 65;
			this.y = Parent.y + Parent.txtChild.y + Parent.txtChild.height - 40;
			return;
		}
		var Parent = SceneManager._scene._textInputButton;
		this.x = Parent.x + Parent.width - this.width - 15;
		this.y = Parent.y + Parent.height + 2;
	};
	this.addChild(this._cancelButton);
};

Scene_Achievements.prototype.createTextInputButton = function() {
	var width = 300;
	var height = 150;
	var data = {
		id: 'bigTextInput',
		x: (Graphics.width - width) / 2,
		y: (Graphics.height - height) / 2,
		borderSize: 3,
		maxLines: 0,
		width: width,
		height: height,
		borderColor: '#ffffff',
		backColor: ['vertical', '#111111', '#222222', '#111111']
	};
	this._textInputButton = new SButton_Text(data);
	this._textInputButton.visible = false;
	this._textInputButton._fixedTone = true;
	this._textInputButton._overrideState = true;
	this._textInputButton.onSelect = function(touch) {
		SButton_Text.prototype.onSelect.call(this, touch);
		this.title.bitmap.clear();
		this.title.bitmap.drawBorderedRect(0, 0, this.width, 35, 3, '#ffffff', '#111111');
		this.title.bitmap.drawText(this.title.text, 0, 6, this.width, 22, 'center');
	};
	var Title = new Sprite(new Bitmap(width, 32));
	Title.bitmap.fontSize = 20;
	Title.y = -32;
	Title.text = '';
	this._textInputButton.title = Title;
	this._textInputButton.addChild(Title);
};

//------------------------------------------------------------------------------------------
// Scene Achievements - Update

Scene_Achievements.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	this.updateTriggers();
};

Scene_Achievements.prototype.updateTriggers = function() {
	var onChange = false;
	if (this.isEditorTriggered()) {
		this._achievsEditor.show();
		return;
	}

	if (this.isEditing()) return;

	if (this._infoWindow && this._infoWindow.isOpen()) {
		if (Input.isTriggered('ok') || Input.isTriggered('cancel') || 
			TouchInput.isTriggered() || TouchInput.isCancelled()) {
			SoundManager.playCancel();
			return this.onAchievementOk();
		}
	} else {
		if (this._trophiesWindow && this._trophiesWindow.visible) {
			if (TouchInput.isTriggered()) {
				var buttonName = this.getButtonOnClick();
				if (buttonName) {
					this._trophiesWindow.onClick(buttonName);
				}
			}
			if (Input.isRepeated('left')) {
				this._trophiesWindow.selectSlot(this._trophiesWindow._selected - 1);
			} else if (Input.isRepeated('right')) {
				this._trophiesWindow.selectSlot(this._trophiesWindow._selected + 1);
			}
		}
	}
};

Scene_Achievements.prototype.isEditorTriggered = function() {
	if (!this._achievsEditor) return false;
	if (this.isEditing()) return false;
	return Input.isPressed('control') && Input.isPressed('a'); //CTRL + A
};

Scene_Achievements.prototype.getButtonOnClick = function() {//edit
	var x = TouchInput._x - this._trophiesWindow.x;
	var y = TouchInput._y - this._trophiesWindow.y;
	var buttons = this._trophiesWindow.buttons;
	var button;
	for (var i in buttons) {
		button = buttons[i];
		if (x >= button.x1 && x <= button.x2 && y >= button.y1 && y <= button.y2) {
			return i;
		}
	}
	return '';
};

//------------------------------------------------------------------------------------------
// Scene Achievements - Refresh

//Refreshing all windows completely
Scene_Achievements.prototype.fullRefresh = function() {
	this._windowLayer.children.forEach(function(w) {
		if (w.refresh) {
			w.refresh();
		};
	});
};

//Refreshing all windows, but only important stuff
Scene_Achievements.prototype.easyRefresh = function(isUnlock) {
	if (!this._itemWindow) return;

	if (this._itemWindow.active) {
		this._itemWindow.easyRefresh(isUnlock);
	}

	if (isUnlock && this._trophiesWindow.visible) {
		this._trophiesWindow.refresh();
	} else {
		this._trophiesWindow.easyRefresh(isUnlock);
	}

	if (this._infoWindow.isOpen()) {
		this._infoWindow.easyRefresh(isUnlock);
	}
};

Scene_Achievements.prototype.refreshImgStates = function() {
	if (!SMO.AM.Images.menu) {
		this.setBackground();
	}
	this._itemWindow.refresh();
	if (this._trophiesWindow) {
		this._trophiesWindow.refresh();
	}
};

//------------------------------------------------------------------------------------------
// Scene Achievements - Key Mapper

//Adding shortcuts to the key mapper
Scene_Achievements.prototype.adaptKeyMapper = function() {
	this._keyMapperBackup = {};
	for (var k in Input.keyMapper) {
		this._keyMapperBackup[k] = Input.keyMapper[k];
	}
	Input.keyMapper[65] = 'a';
	Input.keyMapper[83] = 's';
	Input.keyMapper[89] = 'y';
};

//Restoring the key mapper's shortcuts
Scene_Achievements.prototype.restoreKeyMapper = function() {
	if (!this._keyMapperBackup) return;
	for (var k in this._keyMapperBackup) {
		Input.keyMapper[k] = this._keyMapperBackup[k];
	}
};

//------------------------------------------------------------------------------------------
// Scene Achievements - On Action

Scene_Achievements.prototype.onOk = function() {
	if (this._warning.visible) return this.onWarnOk();
};

Scene_Achievements.prototype.onWarnOk = function() {
	SoundManager.playOk();
	var editor = this._achievsEditor;
	var msgId = this._warning._msgId;
	if (msgId === 'save') {
		DataManager.saveAchievsMenu();
		this.createBackup();
		editor._undoData = [];
		editor._redoData = [];
		editor.hide();
	} else if (msgId === 'loadDefault') {
		var result = SMO.AM.loadDefaultSettings();
		if (result) {
			return;
		} else {
			var message = {
				title: 'ERROR',
				text: 'Error when trying to save your changes.',
				type: 'error',
				id: 'loadDefault_error'
			};
			this.showWarning(message);
		}
	}

	editor.closeWarning();
};

Scene_Achievements.prototype.onContinue = function() {
	if (this._warning.visible) return this.onWarnContinue();
	return this.onTextContinue();
};

Scene_Achievements.prototype.onWarnContinue = function() {
	SoundManager.playOk();
	var Editor = this._achievsEditor;
	Editor.closeWarning();
	if (this._warning._msgId === 'save') {
		Editor.loadBackup();
		Editor._undoData = [];
		Editor._redoData = [];
		Editor.hide();
	}
};

Scene_Achievements.prototype.onTextContinue = function() {
	console.log('onTextContinue')
};

Scene_Achievements.prototype.onCancel = function() {
	if (this._warning.visible) return this.onWarnCancel();
	return this.onTextCancel();
};

Scene_Achievements.prototype.onWarnCancel = function() {
	SoundManager.playCancel();
	this._achievsEditor.closeWarning();
};

Scene_Achievements.prototype.onTextCancel = function() {
	this.setSButtonsState('on');
	this._darkTone.visible = false;
	this._okButton.visible = false;
	this._cancelButton.visible = false;
	this._textInputButton.visible = false;
};

Scene_Achievements.prototype.onAchievementOk = function() {
	var index = this._itemWindow.index();
	var item = this._itemWindow._data[index];
	if (!item) return;
	if (this.isCategoriesList()) {
		this.setCurrentCategory(item);
		this._itemWindow.loadWindowskin();
		this._itemWindow._reactivate = 1;
		this._itemWindow._scrollY = 0;
		this._itemWindow.width = this._itemWindow.windowWidth();
		this._trophiesWindow.hide();
		this.showSortOption();
		this.setBackground(SMO.AM.currentCategory.menuImg);
		this.fullRefresh();
	} else if (this._infoWindow.isOpen()) {
		this._infoWindow.close();
		this._itemWindow.easyRefresh();
		this._itemWindow.activate();
	} else {
		this._infoWindow.open(item);
	}
};

Scene_Achievements.prototype.onAchievementCancel = function() {
	if (!SMO.AM.currentCategory.id) {
		return SceneManager.pop();;
	}

	this.clearRecentUnlock();
	this.hideSortOption();
	this.setCurrentCategory();
	this._itemWindow.loadWindowskin();
	this._itemWindow.select(0);
	$dataAchievsMenuSets.PopUp.preselect = 0;
	this._itemWindow.width = this._itemWindow.windowWidth();
	this.setBackground(SMO.AM.Images.menu);
	this.fullRefresh();
	this._trophiesWindow.show();
	this._itemWindow.activate();
};

//------------------------------------------------------------------------------------------
// Scene Achievements - Background

Scene_Achievements.prototype.setBackground = function(filename) {
	var background = this._backgroundSprite;
	if (background._bitmap && filename && this.isBackgroundName(filename)) return;
	background.bitmap = filename ? ImageManager.loadAchievement(filename) : SceneManager.backgroundBitmap();
};

Scene_Achievements.prototype.isBackgroundName = function(filename) {
	var url = this._backgroundSprite._bitmap._url.replace('.png', '');
	var backname = url.slice(url.lastIndexOf('/') + 1);
	return url ? filename === backname : !filename;
};

//------------------------------------------------------------------------------------------
// Scene Achievements - Others

//Check if the editor is open
Scene_Achievements.prototype.isEditing = function() {
	return this._editMode;
};

//Is the player seeing the categories list?
Scene_Achievements.prototype.isCategoriesList = function() {
	return !SMO.AM.currentCategory.id;
};

//Remove recently unlocked achievements when leaving a category's page
Scene_Achievements.prototype.clearRecentUnlock = function() {
	var currentCategory = SMO.AM.currentCategory.name;
	var ids = SMO.AM.DataDynamic.achievs.recentUnlock;
	for (var i = ids.length - 1; i > -1; i--) {
		var achievement = $gameSystem.achievement(ids[i]);
		if (achievement.categories.contains(currentCategory)) {
			ids.splice(i, 1);
		}
	}
	DataManager.saveGlobalAchievements();
};

Scene_Achievements.prototype.showSortOption = function() {
	if (this._sortOption) {
		this._sortOption.show();
	}
};

Scene_Achievements.prototype.hideSortOption = function() {
	if (this._sortOption) {
		this._sortOption.hide();
	}
};

Scene_Achievements.prototype.setCurrentCategory = function(categoryName) {
	if (!categoryName) {
		return SMO.AM.currentCategory = { id: 0 };
	}
	return SMO.AM.currentCategory = SMO.AM.DataCategories.find(c => c.name === categoryName);
};

//Check if all images are ready
Scene_Achievements.prototype.isReady = function() {
	var ready = Scene_Base.prototype.isReady.call(this);
	return ready && ImageManager.isAchievementsReady();
};

//Make sure the key mapper is restored before leaving the scene
Scene_Achievements.prototype.terminate = function() {
	this.restoreKeyMapper();
	Scene_Base.prototype.terminate.call(this);
};

//==========================================================================================
// SceneName Window
//==========================================================================================
function Window_SceneName() {
	this.initialize.apply(this, arguments);
}

Window_SceneName.prototype = Object.create(Window_Base.prototype);
Window_SceneName.prototype.constructor = Window_SceneName;

Window_SceneName.prototype.initialize = function() {
	var SceneName = $dataAchievsMenuSets.SceneName;
	var x = eval(SceneName.x);
	var y = eval(SceneName.y);
	var width = eval(SceneName.width);
	var height = eval(SceneName.height);
	
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this.opacity = SceneName.opacity;
	this.drawSceneName();
};

//------------------------------------------------------------------------------------------
// Window SceneName - Create

Window_SceneName.prototype.createContents = function() {
	Window_Base.prototype.createContents.call(this);
	this.drawSceneName();
};

//------------------------------------------------------------------------------------------
// Window SceneName - Refresh

Window_SceneName.prototype.refresh = function() {
	this.drawSceneName();
};

//------------------------------------------------------------------------------------------
// Window SceneName - Draw

Window_SceneName.prototype.drawSceneName = function() {
	var category = SMO.AM.currentCategory;
	var name = category.id ? category.sceneName : $dataAchievsMenuSets.SceneName.title;
	name = name || $dataAchievsMenuSets.SceneName.title;
	name = SMO.AM.translate(name);

	var x = 0;
	var y = 0;
	var maxWidth = this.contentsWidth();
	this.contents.clear();
	this.applyAutoColor();
	this.drawText(name, x, y, maxWidth, 'center');
};

SMO.AM._WindowSceneName_drawText = Window_SceneName.prototype.drawText;
Window_SceneName.prototype.drawText = function(text, x, y, maxWidth, align) {
	SMO.AM._WindowSceneName_drawText.call(this, text, x, y, maxWidth, align);
	this.clearAutoColor();
};

//------------------------------------------------------------------------------------------
// Window SceneName - Auto Color

Window_SceneName.prototype.isAutoColor = function() {
	if (this.isCategoriesList()) return false;
	var autoColor = SMO.AM.currentCategory.autoColor;
	return autoColor.color && autoColor.scene;
};

Window_SceneName.prototype.applyAutoColor = function() {
	if (this.isAutoColor()) {
		this._lastTextColor = this.contents.textColor;
		this.contents.textColor = SMO.AM.currentCategory.autoColor.color;
	} else {
		this.contents.textColor = $dataAchievsMenuSets.SceneName.textColor;
	}
};

Window_SceneName.prototype.clearAutoColor = function() {
	if (this._lastTextColor) {
		this.contents.textColor = this._lastTextColor;
		delete this._lastTextColor;
	}
};

//------------------------------------------------------------------------------------------
// Window SceneName - Settings

Window_SceneName.prototype.defineSetting = function(parameter, value, refresh) {
	SMO.AM.defineWindowSetting.call(this, 'SceneName', parameter, value, refresh);
};

Window_SceneName.prototype.getSetting = function(parameter) {
	return $dataAchievsMenuSets.SceneName[parameter];
};

Window_SceneName.prototype.standardFontFace = function() {
	var ff = $dataAchievsMenuSets.SceneName.fontFace;
	return ff || Window_Base.prototype.standardFontFace.call(this);
};

Window_SceneName.prototype.standardFontSize = function() {
	var fs = $dataAchievsMenuSets.SceneName.fontSize;
	return fs || Window_Base.prototype.standardFontSize.call(this);
};

Window_SceneName.prototype.loadWindowskin = function() {
	var skin_name = $dataAchievsMenuSets.SceneName.windowSkin || 'Window';
	this.windowskin = ImageManager.loadSystem(skin_name);
};

//------------------------------------------------------------------------------------------
// Window SceneName - Others

Window_SceneName.prototype.isCategoriesList = function() {
	return !SMO.AM.currentCategory.id;
};

//==========================================================================================
// Achievements Window
//==========================================================================================
function Window_Achievements() {
	this.initialize.apply(this, arguments);
}

Window_Achievements.prototype = Object.create(Window_Command.prototype);
Window_Achievements.prototype.constructor = Window_Achievements;

Window_Achievements.prototype.initialize = function() {
	var x = 0;
	var y = 80;
	this._data = [];
	this._sortType = $gameSystem.achievs.sortType;
	Window_Command.prototype.initialize.call(this, x, y);
	SMO.AM.refreshUnlockedTrophies();
};

//------------------------------------------------------------------------------------------
// Window Achievements - Update

Window_Achievements.prototype.update = function() {
	Window_Command.prototype.update.call(this);
	this.updatePosition();
	this.updateActivation();
};

Window_Achievements.prototype.updatePosition = function() {
	if (this._positionRefreshed) return;
	this.y = SceneManager._scene._titleWindow.height;
	this.height = Graphics.height - this.y;
	this._positionRefreshed = true;
};

//Update activation -> prevents from pre-selecting an achievement when using touch
Window_Achievements.prototype.updateActivation = function() {
	if (!this._reactivate) return;
	if (this._reactivate++ < 2) return;
	this.select(0);
	this.activate();
	this._reactivate = 0;
};

//------------------------------------------------------------------------------------------
// Window Achievements - Refresh

Window_Achievements.prototype.easyRefresh = function(isUnlock) {
	if (this.isCategoriesList()) {
		if (isUnlock) {
			this.refresh();
		}
	} else {
		for (var d = 0; d < this._data.length; d++) {
			if (this._data[d].isPlaytimeRequired()) {
				this.redrawItem(d);
			}
		}
	}
};

//------------------------------------------------------------------------------------------
// Window Achievements - Draw

Window_Achievements.prototype.drawItem = function(index) {
	var rect, rect2, y, c, item, completed, color, text, recent;
	var achievs, achievsL, completedAchivs, iconId, iconX, iconSize, maxWidth;
	if (this.isCategoriesList()) {
		rect = this.itemRectForText(index);
		y = rect.y + (rect.height - this.lineHeight()) / 2;
		this.resetTextColor();
		achievs = SMO.AM.getAchievsByCategory(SMO.AM.DataCategories[index].name);

		//Removing completely hidden achievements
		if (SMO.AM.hideTotally) {
			for (var a = achievs.length - 1; a > -1; a--) {
				if (achievs[a].isHidden()) {
					achievs.splice(a, 1);
				}
			}
		}

		iconSize = 0;

		recent = achievs.filter(function(c) {
			return SMO.AM.DataDynamic.achievs.recentUnlock.contains(c.id);
		})
		rect2 = this.itemRect(index);
		this.drawAchievBackground(rect2, SMO.AM.DataCategories[index]);

		if (recent.length > 0 && SMO.AM.Icons.recentUnlock > -1) {
			iconId = SMO.AM.Icons.recentUnlock;
			iconX = rect.width - Window_Base._iconWidth/2 - 4;
			this.drawIcon(iconId, iconX, rect.y);
			iconSize = Window_Base._iconWidth + 4;
		}
		maxWidth = rect.width;

		completedAchivs = achievs.filter(function(c) {
			return c.isUnlocked();
		});

		var category = SMO.AM.DataCategories[index];
		var autoColor = category.autoColor.color && category.autoColor.category;
		if (autoColor) {
			var lastColor = this.contents.textColor;
			this.contents.textColor = category.autoColor.color;
		}
		achievsL = achievs.length;
		completedAchivs = completedAchivs.length;
		this.changePaintOpacity(this.isCommandEnabled(index));
		var category_n = SMO.AM.translate(category.name);
		text = $dataAchievsMenuSets.Categories.text.replace(/<name>/gi, category_n);
		text = text.replace(/<unlocked>/gi, completedAchivs);
		text = text.replace(/<all>/gi, achievsL);
		this.drawText(text, rect.x, y, maxWidth, 'center');
		this.changePaintOpacity(true);
		if (autoColor) {
			this.contents.textColor = lastColor;
		}
	} else {
		item = this._data[index];
		if (item) {
			color = item.isUnlocked() ? $dataAchievsMenuSets.Achievements.unlockedColor : this.textColor(0);
			this.changeTextColor(this.normalColor());
			rect = this.itemRect(index);
			rect.width -= this.textPadding();
			this.drawAchievBackground(rect, item);
			this._keepColor = true;

			var category = SMO.AM.currentCategory;
			var autoColor = category.autoColor.color && category.autoColor.category;
			if (autoColor) {
				var lastColor = this.contents.textColor;
				this.contents.textColor = category.autoColor.color;
			}
			this.contents.fontSize += 4;
			this.drawItemName(item, rect.x + 4, rect.y + 4, rect.width - 6);
			this.contents.fontSize -= 4;
			if (autoColor) {
				this.contents.textColor = lastColor;
			}
			
			this.drawAchievBody(index, rect, color);
			this._keepColor = false;

			var recent = SMO.AM.DataDynamic.achievs.recentUnlock.contains(item.id);

			if (recent && SMO.AM.Icons.recentUnlock > -1) {
				iconId = SMO.AM.Icons.recentUnlock;
				iconX = rect.x + rect.width - Window_Base._iconWidth;
				var iconY = rect.y + rect.height - Window_Base._iconWidth - 4;
				this.drawIcon(iconId, iconX, iconY);
			}
		}
	}
};

Window_Achievements.prototype.drawAchievBackground = function(rect, Data) {
	var bitmap, background, isUnlocked, LH, color1, color2, color3, color4;

	var isAchievement = !!Data._achievement;
	var isUnlocked = isAchievement ? Data.isUnlocked() : false;
	
	var x0, y0, width, dw, dh;
	var cursorWidth = 3;
	x0 = rect.x + cursorWidth;
	y0 = rect.y + cursorWidth;
	width = isAchievement ? rect.width + 6 : rect.width;
	dw = width - cursorWidth * 2;
	dh = rect.height - cursorWidth * 2;

	LH = this.lineHeight();
	color1 = isUnlocked ? $dataAchievsMenuSets.Achievements.unlockedColor : 'rgba(200,200,200,1)'; //borders
	color2 = 'rgba(0,0,0,0.6)'; //name (this will be above the color 3)
	color3 = 'rgba(0,0,0,0.5)'; //body

	if (isAchievement) {
		var background = '';
		var needDark = false;
		if (isUnlocked) {
			background = Data.backgroundImage;
		} else if (Data.isSecret()) {
			background = SMO.AM.currentCategory.secretAchievImg || SMO.AM.Images.secret;
		} else {
			background = SMO.AM.currentCategory.lockedAchievImg || SMO.AM.Images.locked || Data.backgroundImage;
			needDark = !background ? false : SMO.AM.currentCategory.lockedAchievImg ? false : SMO.AM.Images.locked ? false : true;
		}

		background = background ? `achievements/${background}` : '';
		this.drawBorderedRect(x0, y0, dw, dh, 1, color1, color3, background);

		if (!background) {
			//Draw black rectangle behind the achievement's name
			this.contents.fillRect(x0 + 1, y0 + 1, dw - 2, this.lineHeight(), color2);
		}
		if (needDark) {
			//Draw dark tone above achievement's background
			this.contents.fillRect(x0 + 1, y0 + 1, rect.width - 2, rect.height - cursorWidth * 2 - 2, color2);
		}
	} else {
		var img = Data.img ? `achievements/${Data.img}` : '';
		this.drawBorderedRect(x0, y0, dw, dh, 1, color1, color3, img);
	}
};

Window_Achievements.prototype.drawItemName = function(item, x, y, width) {
	var iconBoxWidth, align, name;
	width = width || 312;
	if (!item) return;
	if (!this._keepColor) {
		this.resetTextColor();
	}
	iconBoxWidth = 4;
	if (item.iconIndex > -1) {
		y += 2;
		iconBoxWidth = Window_Base._iconWidth + 6;
		this.drawIcon(item.iconIndex, x + 2, y);
	}
	align = 'left';
	if (item.isSecret()) {
		align = 'center';
		x -= 20;
	}
	this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth, align);
};

Window_Achievements.prototype.drawAchievBody = function(index, rect, color) {
	var Achievement = this._data[index];
	var LH = this.lineHeight();
	if (Achievement.isSecret()) {
		let text = $dataAchievsMenuSets.Achievements.secretSign;
		let txt_x = rect.x + 3;
		let txt_y = rect.y + 2 * LH - 2;
		this.drawText(text, txt_x, txt_y, rect.width, 'center');
	} else {
		let y = rect.y + LH;

		//Drawing progress gauge
		let progress = Achievement.progress();
		let gauge_x = rect.x + 8;
		let gauge_y = y + LH + 12;
		let gauge_w = rect.width - 10; //width
		let gauge_h = LH - 12; //height
		let gauge_r = Math.floor(progress) / 100; //rate
		let c1 = $dataAchievsMenuSets.Achievements.progressGaugeC1; //color1
		let c2 = $dataAchievsMenuSets.Achievements.progressGaugeC2; //color2
		this.drawGauge(gauge_x, gauge_y, gauge_w, gauge_h, gauge_r, c1, c2);

		//Drawing simplified description
		let text = SMO.AM.translate(Achievement.Description);
		text = SMO.AM.removeTextCodes(text);
		let txt_x = rect.x + 8;
		let txt_y = 0;
		let txt_w = rect.width - 8;
		let texts = SMO.AM.wrapText(text, txt_w, this.contents.fontSize, true);
		texts = texts.split('\n');
		for (var t = 0; t < 3; t++) {
			if (!texts[t]) {
				continue;
			}

			if (t === 2 && texts.length > 3) {
				//Drawing three circles to show that the description continues
				let circle_x = rect.x + rect.width / 2;
				let circle_y = y + (LH - 14) * 3;
				this.contents.drawCircle(circle_x - 12, circle_y, 3, '#ffffff');
				this.contents.drawCircle(circle_x, circle_y, 3, '#ffffff');
				this.contents.drawCircle(circle_x + 12, circle_y, 3, '#ffffff');
				break;
			}

			txt_y = y + (LH - 14) * t;
			this.changeTextColor(this.normalColor());
			this.drawText(texts[t], txt_x, txt_y, rect.width - 8, 'left');
		}
		this.changeTextColor(color);

		//Drawing progress text (E.G. 10%)
		text = `${progress}%`;
		txt_x = rect.x + 3;
		txt_y = y + LH * 2 - 2;
		txt_w = rect.width - 3;
		this.contents.outlineColor = 'rgba(0,0,0,0.8)';
		this.drawText(text, txt_x, txt_y, txt_w, 'center');
		this.contents.outlineColor = 'rgba(0,0,0,0.5)';
	}	
};

Window_Achievements.prototype.drawGauge = function(x, y, width, height, rate, c1, c2) {
	height = height || 6;
	var fillW = Math.floor(width * rate);
	var gaugeY = y + this.lineHeight() - 8;
	this.contents.fillRect(x, gaugeY, width, height, this.gaugeBackColor());
	this.contents.gradientFillRect(x, gaugeY, fillW, height, c1, c2);
};

//------------------------------------------------------------------------------------------
// Window Achievements - Settings

Window_Achievements.prototype.defineSetting = function(parameter, value, refresh) {
	var windowName = this.settingsName();
	SMO.AM.defineWindowSetting.call(this, windowName, parameter, value, refresh);
};

Window_Achievements.prototype.getSetting = function(parameter) {
	return $dataAchievsMenuSets[this.settingsName()][parameter];
};

Window_Achievements.prototype.settingsName = function() {
	return this.isCategoriesList() ? 'Categories' : 'Achievements';
};

Window_Achievements.prototype.windowWidth = function() {
	return eval($dataAchievsMenuSets[this.settingsName()].width);
};

Window_Achievements.prototype.windowHeight = function() {
	return eval($dataAchievsMenuSets[this.settingsName()].height);
};

Window_Achievements.prototype.itemHeight = function(index) {
	return eval($dataAchievsMenuSets[this.settingsName()].itemHeight);
};

Window_Achievements.prototype.maxCols = function() {
	return eval($dataAchievsMenuSets[this.settingsName()].columns);
};

Window_Achievements.prototype.standardFontFace = function() {
	var ff = $dataAchievsMenuSets.Achievements.fontFace;
	return ff || Window_Base.prototype.standardFontFace.call(this);
};

Window_Achievements.prototype.standardFontSize = function() {
	return $dataAchievsMenuSets[this.settingsName()].fontSize || 28;
};

Window_Achievements.prototype.loadWindowskin = function() {
	var skin_name = $dataAchievsMenuSets[this.settingsName()].windowSkin || 'Window';
	this.windowskin = ImageManager.loadSystem(skin_name);
};

//------------------------------------------------------------------------------------------
// Window Achievements - Command List

Window_Achievements.prototype.makeCommandList = function() {
	var text, enabled, achievs;
	this._data = this.getCommandListData();

	this._data.forEach(function(d) {
		text = this.isCategoriesList() ? d : d.Name;
		achievs = this.isCategoriesList() ? SMO.AM.getAchievsByCategory(d) : [1];
		enabled = achievs.length > 0 ? true : false;
		this.addCommand(text, 'achiev', enabled);
	}, this);
};

Window_Achievements.prototype.getCommandListData = function() {
	if (this.isCategoriesList()) {
		return SMO.AM.DataCategories.map(c => c.name);
	}

	var hidden = [];

	//Getting achievements from current category and sorting them
	var achievs = SMO.AM.getAchievsByCategory(SMO.AM.currentCategory.name);
	achievs = this.sortData(achievs);

	//Getting proper icons for each achievement
	achievs.forEach(function(a) {
		if (a.isHidden()) {
			hidden.push(a);
		} else if (a.isSecret()) {
			a.iconIndex = a.icon.secret > -2 ? a.icon.secret : SMO.AM.Icons.secret;
		} else if (a.isUnlocked()) {
			a.iconIndex = a.icon.unlocked > -2 ? a.icon.unlocked : SMO.AM.Icons.unlocked;
		} else {
			a.iconIndex = a.icon.locked > -2 ? a.icon.locked : SMO.AM.Icons.locked;
		}
	});

	//Removing hidden achievements from the list
	hidden.forEach(function(a) {
		achievs.delete(a);
	});

	return achievs;	
};

//------------------------------------------------------------------------------------------
// Window Achievements - Others

Window_Achievements.prototype.isCategoriesList = function() {
	return !SMO.AM.currentCategory.id;
};

Window_Achievements.prototype.sortData = function(data, sortType) {
	if (data == null) return;

	var Sort = $dataAchievsMenuSets.SortOption;
	if (!Sort.enabled) return data;

	if (sortType == null) {
		sortType = this._sortType;
	}

	var option = Sort.options[sortType];
	if (!option) {
		this._sortType = 0;
		$gameSystem.achievs.sortType = 0;
		option = Sort.options[0];
	}

	var all = data;
	var unlocked = []; 
	var locked = []; 
	var secrets = [];
	var main = [];
	data.forEach(function(achiev) {
		achiev.tname = SMO.AM.translate(achiev.Name);
		if (achiev.isUnlocked()) {
			unlocked.push(achiev);
		} else if (achiev.isSecret()) {
			secrets.push(achiev);
		} else {
			locked.push(achiev);
		}
	});
	try {
		eval(option.script);
	} catch (e) {
		console.error(`Error on Sort Script (${option.symbol})`);
		console.error(e);
	}
	return main;
};

//==========================================================================================
// Trophies Window
//==========================================================================================
function Window_Trophies() {
	this.initialize.apply(this, arguments);
}

Window_Trophies.prototype = Object.create(Window_Base.prototype);
Window_Trophies.prototype.constructor = Window_Trophies;

Window_Trophies.prototype.initialize = function() {
	var Data = $dataAchievsMenuSets.Trophies;
	var x = eval(Data.x);
	var y = eval(Data.y);
	var width = eval(Data.width);
	var height = eval(Data.height);
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this.initValues();
	this.createSprites();
	if (SMO.AM.currentCategory.id) {
		this.hide();
	} else {
		this.refresh();
	}
};

Window_Trophies.prototype.initValues = function() {
	var Trophies = $dataAchievsMenuSets.Trophies;
	this.refreshProgress();
	this.refreshData();

	this._maxLines = eval(Trophies.lines);
	this._maxCols = eval(Trophies.columns);
	this._maxItems = this._maxLines * this._maxCols;
	this._maxPages = Math.ceil(this._data.length / this._maxItems);
	this._page = 0;

	this._gap = 10;
	this._anchor = this.isGrowSelector() ? 0.5 : 0;
	this._maxWidth = this.width - this.standardPadding() * 2;
	this._trophy_w = Math.floor((this._maxWidth / 2 - this._gap * (this._maxCols + 1)) / this._maxCols);
	this._trophy_h = Math.floor((this.height - 284 - this._gap * (this._maxLines + 1)) / this._maxLines) - 5;
	this._x_fix = this.fixToTrophyX();
	this._y_fix = this.fixToTrophyY();

	this._trophies = null;
	this._selected = 0;
	this._big_trophy = {
		x: this._maxWidth / 2 + this._gap,
		y: 140,
		width: this._maxWidth / 2 - 2 * this._gap,
		height: this._trophy_h * this._maxLines + this._gap * (this._maxLines - 1)
	};
};

//------------------------------------------------------------------------------------------
// Window Trophies - Create

Window_Trophies.prototype.createContents = function() {
	Window_Base.prototype.createContents.call(this);
	this._maxWidth = this.width - this.standardPadding() * 2;
};

Window_Trophies.prototype.createSprites = function() {
	var x, y, width, height, color;
	//Creating trophies' sprites
	var isGrow = this.isGrowSelector();
	var maxItems = this.pageMaxItems();
	var scale = isGrow ? 1 - this.scaleVariation() : 1;
	width = isGrow ?  Math.floor(this._trophy_w / scale) : this._trophy_w;
	height = isGrow ? Math.floor(this._trophy_h / scale) : this._trophy_h;
	var Trophy;
	this._trophies = [];
	for (var s = 0; s < maxItems; s++) {
		Trophy = new Sprite_Button();
		Trophy.bitmap = new Bitmap(width, height);
		Trophy.setClickHandler(function() {
			if (SceneManager._scene.isEditing()) return;
			this.parent.selectSlot(this._index);
		});

		Trophy._index = s;

		Trophy._realIndex = function() {
			return this._index + this._page * this._maxItems;
		};

		Trophy.data = function() {
			return this.parent._data[this._realIndex()];
		};

		Trophy.x_fix = function() {
			return this.baseWidth() * this.anchor.x;
		};

		Trophy.y_fix = function() {
			return this.baseHeight() * this.anchor.y;
		};

		Trophy.baseWidth = function() {
			if (this.parent.isGrowSelector()) {
				return this.width * (1 - this.parent.scaleVariation());
			}
			return this.width;
		};

		Trophy.baseHeight = function() {
			if (this.parent.isGrowSelector()) {
				return this.height * (1 - this.parent.scaleVariation());
			}
			return this.height;
		};

		Trophy.isButtonTouched = function() {
			var tx = TouchInput.x;
			var ty = TouchInput.y;
			var x = this.canvasToLocalX(tx) + this.x_fix();
			var y = this.canvasToLocalY(ty) + this.y_fix();
			return x >= 0 && y >= 0 && x < this.baseWidth() && y < this.baseHeight();
		};
		
		Trophy.update = function() {
			Sprite_Button.prototype.update.call(this);
			this.updateScale();
		};

		Trophy.updateScale = function() {
			if (!this.parent) return;
			if (!this.parent.visible) return;
			if (!this.parent.isGrowSelector()) return;
			var variation = this.parent.scaleVariation();
			var tick = variation / this.parent.scaleVarFrames();
			if (this.parent._selected === this._index) {
				if (this.scale.x < 1) {
					this.scale.x = Math.min(1, this.scale.x + tick);
					this.scale.y = this.scale.x;
				}
			} else if (this.scale.x > (1 - variation)) {
				this.scale.x = Math.max(1 - variation, this.scale.x - tick);
				this.scale.y = this.scale.x;
			}
		};

		Trophy.anchor.x = this._anchor;
		Trophy.anchor.y = this._anchor;
		Trophy.scale.x = scale;
		Trophy.scale.y = scale;
		this._trophies.push(Trophy);
		this.addChild(Trophy);
	}
	this.swapChildren(this._trophies[0], this._trophies[maxItems - 1]);

	//Creating selector's sprite
	var bds = 3; //border size
	var bdc = $dataAchievsMenuSets.Trophies.selectorColor; //border color
	var width = this._trophy_w + 2;
	var height = this._trophy_h + 2;
	var selector = new Sprite(new Bitmap(width, height));
	selector.bdc = bdc;
	selector.bds = bds;
	selector.x = this._trophies[0].x - 1;
	selector.y = this._trophies[0].y - 1;
	selector.visible = !this.isGrowSelector();
	this._selector = selector;
	this.addChild(selector);

	//Creating arrows' sprites
	this._arrows = [];
	var A1 = new Sprite_Button();
	A1.bitmap = new Bitmap(20, 30);
	A1.x = Math.ceil(this.width / 4 + this._gap - 50);
	A1.y = 403;
	A1.setClickHandler(function() {
		if (SceneManager._scene.isEditing()) return;
		this.parent.selectSlot(-1);
	});
	this._arrows.push(A1);
	this.addChild(A1);

	var A2 = new Sprite_Button();
	A2.bitmap = new Bitmap(20, 30);
	A2.x = Math.ceil(this.width / 4 + this._gap + 30);
	A2.y = 403;
	A2.setClickHandler(function() {
		if (SceneManager._scene.isEditing()) return;
		this.parent.selectSlot(this.parent._maxItems);
	});
	this._arrows.push(A2);
	this.addChild(A2);
};

//------------------------------------------------------------------------------------------
// Window Trophies - Update

Window_Trophies.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	this.updateTotalProgress();
};

//Making the "Total Progress" gauge will increase in size smoothly
Window_Trophies.prototype.updateTotalProgress = function() {
	var tp = this._progress;
	if (tp.currentValue > tp.lastValue) {
		if (this.visible) {
			tp.lastValue += 0.2;
			tp.lastValue = Math.min(tp.lastValue, tp.currentValue);
		} else {
			tp.lastValue = tp.currentValue;
		}
		this.redrawTopProgressGauge();
	}
};

//------------------------------------------------------------------------------------------
// Window Trophies - Refresh

//Refresh only necessary stuff
Window_Trophies.prototype.easyRefresh = function(isUnlock) {
	if (isUnlock) {
		this.refreshProgress();
	}
};

//Refresh completely
Window_Trophies.prototype.refresh = function() {
	this.contents.clear();
	this._trophies.forEach(function(t) {
		t.bitmap.clear();
	})
	this.refreshProgress();
	this.drawMe();
	this.refreshSelector();
};

Window_Trophies.prototype.refreshTrophyDesc = function() {
	var x = this._big_trophy.x;
	var y = this._big_trophy.y;
	var width = this._big_trophy.width;
	var height = this._big_trophy.height;
	this.contents.clearRect(x, y, width, height);
	this.drawBorderedRect(x, y, width, height, 2, null, 'rgba(0,0,0,0.6)');
	this.drawBigTrophy();
};

Window_Trophies.prototype.refreshProgress = function() {
	var unlocked = SMO.AM.DataDynamic.achievs.unlocked.length;
	var all = SMO.AM.DataAchievements.length || 1;

	if (this._progress) {
		this._progress.currentValue = Math.floor(unlocked * 100 / all);
		return;
	}

	var current = Math.floor(unlocked * 100 / all);
	this._progress = {
		x: 20,
		y: 400 + this.lineHeight() - 8,
		width: this.width - this.standardPadding() * 2 - 40,
		height: 24,
		lastValue: current,
		currentValue: current,
		lastRate: function() {
			return this.lastValue / 100;
		},
		rate: function() {
			return this.currentValue / 100;
		}
	};
};

Window_Trophies.prototype.refreshData = function() {
	this._data = [];
	if ($dataAchievsMenuSets.Trophies.enabled) {
		this._data = SMO.AM.DataCategories.filter(function(Category) {
			return !Category.Trophy.hidden;
		}).map(Category => Category.Trophy);
	} else {
		var unlocked = SMO.AM.DataDynamic.achievs.unlocked;
		for (t = unlocked.length - 1; this._data.length < this._maxItems; t--) {
			var Achievement = SMO.AM.DataAchievements[unlocked[t] - 1] || { id: 0 };
			this._data.push(Achievement);
		}
	}
};

Window_Trophies.prototype.refreshSelector = function() {
	if (this.isGrowSelector()) {
		this._selector.visible = false;
		return;
	}
	var redraw = false;
	//Checking trophy's size change
	var width = this._trophies[0].width;
	var height = this._trophies[0].height;
	if (width !== (this._selector.width - 2) || height !== (this._selector.height - 2)) {
		this.bitmap = new Bitmap(width + 2, height + 2);
		redraw = true;
		SMO.log("Trophy's Size Changed", "green");
	}
	//Checking selector's color change
	var color = $dataAchievsMenuSets.Trophies.selectorColor;
	if (color != this._selector.bdc) {
		this._selector.bitmap.clear();
		redraw = true;
		SMO.log("Trophy's Color Changed", "green");
	}
	//Updating position
	this._selector.x = this._trophies[this._selected].x - 1;
	this._selector.y = this._trophies[this._selected].y - 1;
	if (redraw) {
		this.drawSelector();
	}
	this._selector.visible = true;
};

//------------------------------------------------------------------------------------------
// Window Trophies - Draw

Window_Trophies.prototype.drawMe = function() {
	this.drawTitle();
	this.drawDescription();
	this.drawTrophies();
	this.drawBigTrophy(); //The big box next to the trophies
	this.drawArrows();
	this.drawTotalProgress();
	this.drawSelector();
};

Window_Trophies.prototype.drawTitle = function() {
	var title = $dataAchievsMenuSets.Trophies.title;
	this.drawText(title, 0, 0, this._maxWidth, 'center');
};

Window_Trophies.prototype.drawDescription = function() {
	this.contents.fontSize -= 5;
	this._lockFontState = true; //prevents "drawTextEx" from changing the font size
	var description = SMO.AM.translate($dataAchievsMenuSets.Trophies.description);
	description = SMO.AM.wrapText(description, this._maxWidth, this.contents.fontSize);
	this.drawTextEx(description, 0, this.lineHeight(), this._maxWidth);
	this.contents.fontSize += 5;
};

Window_Trophies.prototype.drawTrophies = function() {
	var enabled = $dataAchievsMenuSets.Trophies.enabled;
	var defaultImg = SMO.AM.Images.lockedTrophy;
	var x, y, index, img, unlocked, item;
	var realIndex = this._maxItems * this._page;
	var pageMax = this.pageMaxItems();
	for (var line = 0, col = 0, index = 0; index < pageMax; index++) {
		item = this._data[realIndex];
		x = this._gap + (this._trophy_w + this._gap) * col;
		y = 140 + (this._trophy_h + this._gap) * line;
		unlocked = enabled ? item.isUnlocked() : !!item.id;
		img = enabled ? item.imageName() : unlocked ? item.backgroundImage : defaultImg;
		img = img ? `achievements/${img}` : '';
		this.drawTrophy(index, x, y, img, unlocked);
		realIndex++;
		if (++col >= this._maxCols) { 
			line++;
			col = 0;
		}
	}
};

Window_Trophies.prototype.drawTrophy = function(index, x, y, img, unlocked) {
	var Trophy = this._trophies[index];
	if (!Trophy) return;

	Trophy.x = x + this._x_fix;
	Trophy.y = y + this._y_fix;
	var width = Trophy.width;
	var height = Trophy.height;
	var color = unlocked ? $dataAchievsMenuSets.Achievements.unlockedColor : '#ffffff';
	Trophy.bitmap.drawBorderedRect(0, 0, width, height, 2, color, 'rgba(0,0,0,0.6)', img);

	var sign = $dataAchievsMenuSets.Trophies.lockedSign;
	if (!unlocked && sign) {
		Trophy.bitmap.drawText(sign, 0, 0, Trophy.width, Trophy.height, 'center');
	}
};

Window_Trophies.prototype.drawBigTrophy = function() {
	var Trophies = $dataAchievsMenuSets.Trophies;
	var index = this._selected + this._maxItems * this._page;
	var data = this._data[index];
	if (!data) return;
	var unlocked = SMO.AM.DataDynamic.trophies.unlocked.contains(data.id);
	var image = this.selectedImage();
	var LH = this.lineHeight() - 10;
	var bt = this._big_trophy;

	//Drawing background and borders
	this.drawBorderedRect(bt.x, bt.y, bt.width, bt.height, 2, null, 'rgba(0,0,0,0.6)');

	//Drawing back image (above the background)
	if (image) {
		var bitmap = ImageManager.loadAchievement(image);
		var sw = bitmap.width;
		var sh = bitmap.height;
		var dx = bt.x + 2;
		var dy = bt.y + 2;
		var dw = bt.width - 4;
		var dh = bt.height - 4
		this.contents.blt(bitmap, 0, 0, sw, sh, dx, dy, dw, dh);
	}
	this.contents.fontSize -= 10;

	//Drawing "LOCKED" text
	if (!unlocked) {
		var text = Trophies.locked || undefined;
		this.contents.drawText(text, bt.x, bt.y, bt.width, bt.height, 'center');
		this.contents.fontSize += 10;
		return;
	}

	var backColor = 'rgba(0,0,0,0.5)';
	var description = this.selectedDescription();
	var texts = description.split('\n');
	var text_h = LH * texts.length;
	var align_y = {
		up: bt.y,
		center: bt.y - text_h + bt.height / 2,
		down: bt.y - text_h + bt.height - 8
	}
	var y = unlocked ? align_y.down : align_y.center;

	//Drawing description (above the base background and above the image)
	if (Trophies.enabled) {
		for (var t = 0; t < texts.length; t++) {
			this.contents.fillRect(bt.x + 2, y + LH * t + 4, bt.width - 4, LH, backColor);
			this.drawText(texts[t], bt.x + 8, y + LH * t, bt.width - 16, 'left');
		}
	} else {
		this.contents.fontSize += 10;
		//Background for the achievement's name
		this.contents.fillRect(bt.x + 4, align_y.up + 4, bt.width - 8, LH + 15, backColor);
		//Background for the achievement's unlock date
		this.contents.fillRect(bt.x + 4, align_y.down + 4, bt.width - 8, LH, backColor);

		//Drawing name
		this.drawText(data.name, bt.x + 8, align_y.up + 5, bt.width - 16, 'center');
		this.changeTextColor($dataAchievsMenuSets.Achievements.unlockedColor);
		this.contents.fontSize -= 10;
		//Drawing unlock date
		var date = data.getUnlockDateString();
		this.drawText(date, bt.x + 8, align_y.down, bt.width - 16, 'center');
		this.changeTextColor(this.normalColor());
	}
	
	this.contents.fontSize += 10;
};

Window_Trophies.prototype.drawArrows = function() {//edit
	var A1 = this._arrows[0];
	var A2 = this._arrows[1];
	if (this._data.length < this._maxItems) {
		A1.visible = false;
		A2.visible = false;
		return;
	}
	//Left arrow
	A1.bitmap.clear();
	var color = this.isFirstPage() ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,1)';
	A1.bitmap.drawTriangleS(0, 0, 30, 20, 'left', color);
	A1.visible = true;

	//Right arrow
	A2.bitmap.clear();
	color = this.isLastPage() ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,1)';
	A2.bitmap.drawTriangleS(0, 0, 30, 20, 'right', color);
	A2.visible = true;

	//(Current Page)/(Last Page)
	this.contents.fontSize -= 4;
	var text = (this._page + 1) + '/' + this._maxPages;
	var x = A1.x + 25 - this.standardPadding();
	var y = 400 - this.standardPadding();
	var maxWidth = A2.x - 5 - x - this.standardPadding();
	this.drawText(text, x, y, maxWidth, 'center');
	this.contents.fontSize += 4;
};

Window_Trophies.prototype.drawTotalProgress = function() {
	this.drawTotalProgressGauge();
	this.drawTotalProgressText();
};

Window_Trophies.prototype.drawTotalProgressGauge = function() {
	var tp = this._progress;
	var fillW = Math.floor(tp.width * tp.lastRate());
	var color1 = $dataAchievsMenuSets.Trophies.progressGaugeC1;
	var color2 = $dataAchievsMenuSets.Trophies.progressGaugeC2;

	this.contents.fillRect(tp.x, tp.y, tp.width, tp.height, this.gaugeBackColor());
	this.contents.gradientFillRect(tp.x, tp.y, fillW, tp.height, color1, color2);
};

Window_Trophies.prototype.drawTotalProgressText = function() {
	var Achievements = SMO.AM.DataAchievements;
	var unlocked = SMO.AM.DataDynamic.achievs.unlocked.length;
	var all = SMO.AM.hideTotally ? Achievements.filter(d => !d.isHidden()) : Achievements;
	var text = SMO.AM.translate($dataAchievsMenuSets.Trophies.totalProgress);
	text = text.replace(/<percent>/i, this._progress.currentValue);
	text = text.replace(/<unlocked>/i, unlocked);
	text = text.replace(/<all>/i, all.length);
	var y = this._progress.y + 26;
	this.drawText(text, 0, y, this._maxWidth, 'center');
};

Window_Trophies.prototype.drawSelector = function() {
	var width = this._selector.width;
	var height = this._selector.height;
	var thickness = this._selector.bds;
	var color = this._selector.bdc;
	this._selector.bitmap.drawBorderedRect(0, 0, width, height, thickness, color);
};

Window_Trophies.prototype.redrawTopProgressGauge = function() {
	var tp = this._progress;
	var fillW = Math.floor(tp.width * tp.lastRate());
	var color1 = $dataAchievsMenuSets.Trophies.progressGaugeC1;
	var color2 = $dataAchievsMenuSets.Trophies.progressGaugeC2;
	this.contents.gradientFillRect(tp.x, tp.y, fillW, tp.height, color1, color2);
};

//------------------------------------------------------------------------------------------
// Window Trophies - Settings

Window_Trophies.prototype.defineSetting = function(parameter, value, refresh) {
	SMO.AM.defineWindowSetting.call(this, 'Trophies', parameter, value, refresh);
};

Window_Trophies.prototype.getSetting = function(parameter) {
	return $dataAchievsMenuSets.Trophies[parameter];
};

Window_Trophies.prototype.standardFontFace = function() {
	var ff = $dataAchievsMenuSets.Trophies.fontFace;
	return ff || Window_Base.prototype.standardFontFace.call(this);
};

Window_Trophies.prototype.standardFontSize = function() {
	var fs = $dataAchievsMenuSets.Trophies.fontSize;
	return fs || Window_Base.prototype.standardFontSize.call(this);
};

Window_Trophies.prototype.loadWindowskin = function() {
	var skin_name = $dataAchievsMenuSets.Trophies.windowSkin || 'Window';
	this.windowskin = ImageManager.loadSystem(skin_name);
};

Window_Trophies.prototype.resetFontSettings = function() {
	if (this._lockFontState) {
		this._lockFontState = false;
		return;
	}
	this.contents.fontFace = this.standardFontFace();
	this.contents.fontSize = this.standardFontSize();
	this.resetTextColor();
};

//------------------------------------------------------------------------------------------
// Window Trophies - Others

//Returns the max change on the trophy's scale when the "Trophy Selector" is set to "grow"
Window_Trophies.prototype.scaleVariation = function() {
	return 0.20;
};

//Returns amount of frames it'll take for the trophy to "grow" (Trophy Selector)
Window_Trophies.prototype.scaleVarFrames = function() {
	return 15;
};

Window_Trophies.prototype.isGrowSelector = function() {
	return $dataAchievsMenuSets.Trophies.selector === 'grow';
};

Window_Trophies.prototype.isFirstPage = function() {
	return this._page === 0;
};

Window_Trophies.prototype.isLastPage = function() {
	return this._page === this._maxPages - 1;
};

//The the maximun amount of trophies on the current page
Window_Trophies.prototype.pageMaxItems = function() {
	return Math.min(this._maxItems, this._data.length - this._maxItems * this._page);
};

Window_Trophies.prototype.selectSlot = function(index, playCursor, refresh) {
	var last = this._selected;
	if (!this.select(index)) return;
	if (this._trophies[last]) {
		this.swapChildren(this._trophies[this._selected], this._trophies[last]);
	}
	if (refresh || refresh === undefined) {
		this.refreshTrophyDesc();
		if (!this.isGrowSelector()) {
			this._selector.x = this._trophies[this._selected].x - 1;
			this._selector.y = this._trophies[this._selected].y - 1;
			this._selector.visible = true;
		}
	}
	if (playCursor || playCursor === undefined) {
		SoundManager.playCursor();
	}
};

Window_Trophies.prototype.select = function(index) {
	var dataIndex = index + this._maxItems * this._page;
	var data = this._data[dataIndex];
	if (!data) return false;
	if (index < 0) {
		this._page--;
		this._selected = this._maxItems - 1;
		this.refresh();
		return true;
	} else if (index + 1 > this._maxItems) {
		this._page++;
		this._selected = 0;
		this.refresh();
		return true;
	} else if (this._selected != index) {
		this._selected = index;
		return true;
	}
	return false;
};

//The scale variation and the anchor's change cause an offset on both axis
Window_Trophies.prototype.fixToTrophyX = function() {
	var width = this._trophy_w;
	if (!this.isGrowSelector()) {
		var scale = 1 - this.scaleVariation();
		width /= scale;
	}
	var variation_x = width * this._anchor;
	return Math.ceil(this.standardPadding() + variation_x);
};

Window_Trophies.prototype.fixToTrophyY = function() {
	var height = this._trophy_h;
	if (!this.isGrowSelector()) {
		var scale = 1 - this.scaleVariation();
		height /= scale;
	}
	var variation_y = height * this._anchor;
	return Math.ceil(this.standardPadding() + variation_y);
};

//Change the trophy's selector
Window_Trophies.prototype.setSelector = function(selector) {
	selector = selector === 'grow' ? 'grow' : 'selector';
	if ($dataAchievsMenuSets.Trophies.selector === selector) return;
	$dataAchievsMenuSets.Trophies.selector = selector;
	this.removeSprites();
	this.initValues();
	this.createSprites();
	this.refresh();
};

//Getting the image of the selected trophy
Window_Trophies.prototype.selectedImage = function() {
	var enabled = $dataAchievsMenuSets.Trophies.enabled;
	var index = this._selected + this._maxItems * this._page;
	var item = enabled ? this._data[index] : this._data[index];
	if (enabled) {
		return item.imageName();
	} else {
		var unlocked = !!item.id;
		return unlocked ? item.backgroundImage : SMO.AM.Images.lockedTrophy;
	}
};

//Getting the description of the selected trophy
Window_Trophies.prototype.selectedDescription = function() {
	var enabled = $dataAchievsMenuSets.Trophies.enabled;
	var index = this._selected + this._maxItems * this._page;
	var item = enabled ? this._data[index] : this._data[index];
	return enabled ? item.description : $dataAchievsMenuSets.Trophies.locked;
};

Window_Trophies.prototype.removeSprites = function() {
	for (var t = 0; t < this._trophies.length; t++) {
		this.removeChild(this._trophies[t]);
	}
	this.removeChild(this._selector);
	this.removeChild(this._arrows[0]);
	this.removeChild(this._arrows[1]);
};

//==========================================================================================
// Info Window
//==========================================================================================
function Window_AchievInfo() {
	this.initialize.apply(this, arguments);
}

Window_AchievInfo.prototype = Object.create(Window_Base.prototype);
Window_AchievInfo.prototype.constructor = Window_AchievInfo;

Window_AchievInfo.prototype.initialize = function() {
	var width = 408;
	var height = 468;
	var x = Math.round((Graphics.width - width)/2);
	var y = Math.round((Graphics.height - height)/2);
	this._textMaxWidth = width - 36;
	this._data = null;
	this._lines = 7;
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this.openness = 0;
};

//------------------------------------------------------------------------------------------
// Window AchievInfo - Update

Window_AchievInfo.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	this.updateTriggers();
};

Window_AchievInfo.prototype.updateTriggers = function() {
	var scene = SceneManager._scene;
	if (scene.isEditing()) return;
	if (!this.isOpen()) return;

	if (Input.isTriggered('ok') || Input.isTriggered('cancel') || 
		TouchInput.isTriggered() || TouchInput.isCancelled()) {
		SoundManager.playCancel();
		return scene.onAchievementOk();
	}
};

//------------------------------------------------------------------------------------------
// Window AchievInfo - Refresh

Window_AchievInfo.prototype.refresh = function(openning) {
	if (this.isOpen() || openning) {
		this.contents.clear();
		this.drawContents();
	}
};

Window_AchievInfo.prototype.easyRefresh = function(isUnlock) {
	if (this._data && this._data.isPlaytimeRequired() || isUnlock) {
		this.refresh();
	}
};

//------------------------------------------------------------------------------------------
// Window AchievInfo - Draw

Window_AchievInfo.prototype.drawContents = function() {
	if (this._data) {
		this._lines = 6;
		var name, description, iconBoxWidth, secretLines;
		var achiev = this._data;
		var LH = this.lineHeight();
		if (achiev.isSecret()) {
			var fontSize = this.contents.fontSize - 6;
			var maxWidth = this._textMaxWidth;
			var sDesc = SMO.AM.wrapText($dataAchievsMenuSets.Achievements.secretDescription, maxWidth, fontSize, false);
			secretLines = sDesc.split('\n');
			secretLines = secretLines.length + 1;
			this._lines = secretLines.clamp(3, 7);
			this.contents.fontSize -= 6;
			this._lockFontState = true;
			this.drawTextEx(sDesc, 0, 0);
			this._lockFontState = false;
			this.contents.fontSize += 6;
			this.reStyle();
			return;
		}
		
		//Draw achievement's icon
		iconBoxWidth = 0;
		if (achiev.iconIndex > -1) {
			iconBoxWidth = Window_Base._iconWidth + 6;
			this.drawIcon(achiev.iconIndex, 0, 0);
		}

		//Draw name
		this.drawText(achiev.name, iconBoxWidth, 0, this.width - iconBoxWidth, 'left');
		this.drawHorzLine(Math.round(LH/2));
		this.contents.fontSize -= 6;
		this._lockFontState = true;

		//Draw description
		description = achiev.isUnlocked() ? achiev.Description : achiev.description;
		description = SMO.AM.translate(description);
		description = SMO.AM.wrapText(description, this._textMaxWidth, this.contents.fontSize, false);
		this.drawTextEx(description, 0, LH);
		var txtOffset = $dataAchievsMenuSets.AchievsInfo.requirements ? 0 : -6;
		this.drawHorzLine(LH * 4 + txtOffset);

		//Draw status
		this.drawAchievStatus();

		//Draw requirements
		this.drawRequirements();
		this.drawHorzLine(LH * (4 + this._reqLines));

		//Draw rewards
		this.drawRewards();
		this._lockFontState = false;
		this.contents.fontSize += 6;

		//Resize and reposition window
		this.reStyle();
	}
};

Window_AchievInfo.prototype.drawIcon = function(iconIndex, x, y) {
	var bitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth;
	var ph = Window_Base._iconHeight;
	var sx = iconIndex % 16 * pw;
	var sy = Math.floor(iconIndex / 16) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x + 2, y, pw - 4, ph - 4);
};

Window_AchievInfo.prototype.drawAchievStatus = function() {
	var item = this._data;
	if (item.isUnlocked()) {
		var text = item.getUnlockDateString();
	} else {
		var text = $dataAchievsMenuSets.Trophies.locked;
	}
	var y = this.lineHeight() * 4 - 20;
	var color = item.isUnlocked() ? $dataAchievsMenuSets.Achievements.unlockedColor : this.systemColor();
	this.changeTextColor(color);
	this.drawText(text, 0, y, this._textMaxWidth, 'center');
	this.changeTextColor(this.normalColor());
};

Window_AchievInfo.prototype.drawRequirements = function() {
	var req, y2, requirements, text, align, iconX;;
	var values, currentValue, isMet, isFixedValue;
	var LH = this.lineHeight();
	var y1 = LH * 4 + 16;
	var maxWidth = this._textMaxWidth;
	var achiev = this._data;
	var padding = 12; //half the distance between two columns
	var colWidth = maxWidth/2 - padding; //column width
	var col2_x = colWidth + padding * 2; //initial X for the column on the right

	this._reqLines = 0;
	this._column = 1;
	if ($dataAchievsMenuSets.AchievsInfo.requirements) {
		//Drawing "Requirements:" text
		this.changeTextColor(this.systemColor());
		this.drawText($dataAchievsMenuSets.AchievsInfo.requirements, 0, y1, maxWidth, 'center');
		this.changeTextColor(this.normalColor());
		this._reqLines++;
		this._lines++;
	}	
	this.contents.fontSize = 18;//22 -> 18 //edit
	
	requirements = achiev.requirements;
	if (requirements.length === 0) {
		//Drawing "None" text
		this.drawText($dataAchievsMenuSets.AchievsInfo.none, 0, y1 + LH * this._reqLines, maxWidth, 'center')
		this._reqLines++;
		this._lines++;
		this.contents.fontSize = 22;
		return;
	}

	//Drawing Requirements
	for (var r = 0; r < requirements.length; r++) {
		req = requirements[r];
		isMet = achiev.isUnlocked() || req.isReached();
		isFixedValue = isMet && req.comparison === '≥';

		let tvalue = req.tvalue();
		let value = isFixedValue ? tvalue : req.value();
		iconIndex = req.iconIndex;
		text = SMO.AM.translate(req.name);

		if (isMet) {this.changeTextColor($dataAchievsMenuSets.Achievements.unlockedColor)};

		if (req.alias) {
			text = SMO.AM.translate(req.alias);
			text = this.convertAliasCodes(text, value, tvalue);
			iconIndex = req.aliasIcon;
		} else if (!['switch', 'party member'].contains(req.type)) {
			text = `${text} ${value}/${tvalue}`;
		}

		y2 = y1 + LH * this._reqLines;
		align = requirements.length > 1 ? 'left' : 'center';
		iconSize = iconIndex > -1 ? Window_Base._iconWidth + 4 : 0;

		if (this._column === 1) {
			//Column on the left
			if (iconSize) {
				iconX = requirements.length > 1 ? 0 : (maxWidth - iconSize - SMO.AM.textWidthEx(text, this.contents.fontSize, true))/2;
				this.drawIcon(iconIndex, iconX, y2);
			}
			this.drawText(text, iconSize, y2, colWidth - iconSize, align);
			this._lines++;
			this._reqLines++;
			this._column++;
		} else {
			//Column on the right
			if (iconSize) {
				this.drawIcon(iconIndex, col2_x, y2 - LH);
			}
			this.drawText(text, col2_x + iconSize, y2 - LH, colWidth - iconSize, 'left');
			this._column = 1;
		}
		this.changeTextColor(this.normalColor());
	}
	this.contents.fontSize = 22;
};

Window_AchievInfo.prototype.drawRewards = function() {
	var y2, reward, itemId, amount, text, align;
	var iconIndex, iconSize, iconX;
	var txtOffset = $dataAchievsMenuSets.AchievsInfo.rewards ? 0 : 8;
	var rewards = this._data.rewards;
	var LH = this.lineHeight();
	var y1 = LH * (4 + this._reqLines) + 14 + txtOffset;
	var maxWidth = this._textMaxWidth;
	var padding = 12; //half distance between two columns
	var col2_x = maxWidth / 2 + padding; //initial X for the column on the right
	var colWidth = maxWidth / 2 - padding;//edit

	this._rewLines = 0;
	this._column = 1;
	if ($dataAchievsMenuSets.AchievsInfo.rewards) {
		//Drawing "Rewards:" text
		this.changeTextColor(this.systemColor());
		this.drawText($dataAchievsMenuSets.AchievsInfo.rewards, 0, y1, maxWidth, 'center');
		this.changeTextColor(this.normalColor());
		this._rewLines++;
		this._lines++;
	}
	this.contents.fontSize = 18;//22 -> 18

	if (rewards.length === 0 && $dataAchievsMenuSets.AchievsInfo.none) {
		//Drawing "None" text
		this.drawText($dataAchievsMenuSets.AchievsInfo.none, 0, y1 + LH, maxWidth, 'center');
		this._rewLines++;
		this._lines++;
	} else {
		for (var r = 0; r < rewards.length; r++) {
			reward = rewards[r];
			itemId = reward.itemId;
			amount = reward.amount;
			switch(reward.type) {
			case 'custom(advanced)':
				text = 'Custom';
				iconIndex = -1;
				break;
			case 'gold':
				text = amount;
				iconIndex = SMO.AM.Icons.gold;
				break;
			case 'item':
				text = $dataItems[itemId] ? $dataItems[itemId].name : '???';
				iconIndex = $dataItems[itemId] ? $dataItems[itemId].iconIndex : -1;
				break;
			case 'weapon':
				text = $dataWeapons[itemId] ? $dataWeapons[itemId].name : '???';
				iconIndex = $dataWeapons[itemId] ? $dataWeapons[itemId].iconIndex : -1;
				break;
			case 'armor':
				text = $dataArmors[itemId] ? $dataArmors[itemId].name : '???';
				iconIndex = $dataArmors[itemId] ? $dataArmors[itemId].iconIndex : -1;
				break;
			}
			text = SMO.AM.translate(text);

			if (!['custom(advanced)','gold'].contains(reward.type)) {
				text += ' x ' + amount;
			}

			if (reward.alias) {
				text = SMO.AM.translate(reward.alias);
				iconIndex = reward.aliasIcon;
			}

			iconSize = iconIndex > -1 ? Window_Base._iconWidth + 4 : 0;
			align = rewards.length > 1 ? 'left' : 'center';
			y2 = y1 + LH * this._rewLines;
			
			if (this._column === 1) {
				//Column on the left
				if (iconSize) {
					iconX = rewards.length > 1 ? 0 : (maxWidth - SMO.AM.textWidthEx(text, this.contents.fontSize, true) - Window_Base._iconWidth)/2;
					this.drawIcon(iconIndex, iconX, y2);
				}
				this.drawText(text, iconSize, y2, colWidth - iconSize, align);
				this._rewLines++;
				this._lines++;
				this._column++;
			} else {
				//Column on the right
				if (iconSize) {
					this.drawIcon(iconIndex, col2_x, y2 - LH);
				}
				this.drawText(text, col2_x + iconSize, y2 - LH, colWidth - iconSize, 'left');
				this._column = 1;
			}
		}
	}
	this.contents.fontSize += 4;
};

Window_AchievInfo.prototype.drawHorzLine = function(y) {
	var lineY = y + this.lineHeight() / 2 - 1;
	this.contents.paintOpacity = 48;
	this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.normalColor());
	this.contents.paintOpacity = 255;
};

//------------------------------------------------------------------------------------------
// Window AchievInfo - Settings

Window_AchievInfo.prototype.defineSetting = function(parameter, value, refresh) {
	SMO.AM.defineWindowSetting.call(this, 'AchievsInfo', parameter, value, refresh);
};

Window_AchievInfo.prototype.getSetting = function(parameter) {
	return $dataAchievsMenuSets.AchievsInfo[parameter];
};

Window_AchievInfo.prototype.standardFontFace = function() {
	var ff = $dataAchievsMenuSets.AchievsInfo.fontFace;
	return ff || Window_Base.prototype.standardFontFace.call(this);
};

Window_AchievInfo.prototype.standardFontSize = function() {
	var fs = $dataAchievsMenuSets.AchievsInfo.fontSize;
	return fs || Window_Base.prototype.standardFontSize.call(this);
};

Window_AchievInfo.prototype.loadWindowskin = function() {
	var skin_name = $dataAchievsMenuSets.AchievsInfo.windowSkin || 'Window';
	this.windowskin = ImageManager.loadSystem(skin_name);
};

Window_AchievInfo.prototype.resetFontSettings = function() {
	if (this._lockFontState) return;
	this.contents.fontFace = this.standardFontFace();
	this.contents.fontSize = this.standardFontSize();
	this.resetTextColor();
};

//------------------------------------------------------------------------------------------
// Window AchievInfo - Others

Window_AchievInfo.prototype.reStyle = function() {
	this.reSize();
	this.rePosition();
};

Window_AchievInfo.prototype.reSize = function() {
	this.height = this._lines * this.lineHeight() - 18;
};

Window_AchievInfo.prototype.rePosition = function() {
	this.y = (Graphics.height - this.height)/2;
};

Window_AchievInfo.prototype.open = function(achievement) {
	this.setData(achievement);
	Window_Base.prototype.open.call(this);
	this.refresh(true);
};

Window_AchievInfo.prototype.setData = function(data) {
	this._data = data ? data : null;
};

Window_AchievInfo.prototype.convertAliasCodes = function(text, value1, value2) {
	value1 = Number(value1);
	value2 = Number(value2);
	text = text.replace(/\\value1/g, value1);//old versions
	text = text.replace(/\\value2/g, value2);//old versions
	text = text.replace(/<CurrentValue>/gi, value1);
	text = text.replace(/<RequiredValue>/gi, value2);
	return text;
};

//==========================================================================================
// Touch Input
//==========================================================================================
SMO.AM._TouchInput_clear = TouchInput.clear;
TouchInput.clear = function() {
	SMO.AM._TouchInput_clear.call(this);
	this._cX = 0;
	this._cY = 0;
};

SMO.AM._TouchInput__onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
	SMO.AM._TouchInput__onMouseMove.call(this, event);
	this._cX = Graphics.pageToCanvasX(event.pageX);
	this._cY = Graphics.pageToCanvasY(event.pageY);
};

//==========================================================================================
// Input
//==========================================================================================
SMO.AM._Input__onKeyDown = Input._onKeyDown;
Input._onKeyDown = function(event) {
	SMO.AM._Input__onKeyDown.call(this, event);
	SMO.AM.onKeyDown(event);
};

SMO.AM.onKeyDown = function(event) {
	if (!SceneManager._scene) return;
	if (SceneManager._scene.isTextInputSelected()) {
		var code = event.keyCode;
		var special = SButton_Text.SPECIAL_KEY_CODES;
		var command = SButton_Text.COMMAND_KEYS;
		var isCommand = !!command[code];
		if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || isCommand || special[code]) {
			let key = isCommand ? command[code] : event.key;
			let shift = event.shiftKey;
			let ctrl = event.ctrlKey;
			let alt = event.altKey;
			SButton_Text.PressedKeys[code] = { key, shift, ctrl, alt };
		}
	}
};

SMO.AM._Input__onKeyUp = Input._onKeyUp;
Input._onKeyUp = function(event) {
	SMO.AM._Input__onKeyUp.call(this, event);
	SMO.AM.onKeyUp(event);
};

SMO.AM.onKeyUp = function(event) {
	var code = event.keyCode;
	var key = event.key;
	var special = SButton_Text.SPECIAL_KEY_CODES;
	var command = SButton_Text.COMMAND_KEYS;
	if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || special[code] || command[code]) {
		delete SButton_Text.PressedKeys[code];
	}
};

Input.keyQuickRepeatInterval = 3;
Input.isQuickRepeated = function(keyName) {
	if (this._isEscapeCompatible(keyName) && this.isQuickRepeated('escape')) {
		return true;
	} else {
		return (this._latestButton === keyName &&
				(this._pressedTime === 0 ||
				(this._pressedTime >= this.keyRepeatWait &&
				this._pressedTime % this.keyQuickRepeatInterval === 0)));
	}
};

//==============================================================================================
//==============================================================================================
// SButtons -> Special Buttons
//==============================================================================================
//==============================================================================================
// Special buttons' parameters

//The interval between two clicks to be considered a double click (in frames -> 1 sec == 60 frames)
var DOUBLE_CLICK_INTERVAL = 24;

//Desings for SButtons
// rect -> rectangle
// round-rect -> rectangle with rounded borders
// circle -> perfect circle
var SBUTTON_DESIGNS = ['rect', 'round-rect', 'circle'];

//Basic parameters for all SButtons
var SBUTTON_DEFAULT = {
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	text: '',
	textAlign: 'left',
	textOffset: null, //Array => [x-offset, y-offset]
	textColor: '#ffffff',
	fontSize: 18,
	borderSize: 2,
	borderColor: '#ffffff',
	backColor: 'rgba(0,0,0,0)',
	selectorColor: '#7777ff',
	cursorStyle: '',
	img: '', //Background image
	hoverImg: '', //Background "on hover" image
	clickImg: '', //Background "on click" image
	hoverTone: 50,
	disabledTone: -100,
	hideSelect: false, //Borders don't change when this button is selected
	enabled: true, //Button's initial state
	enableFunc: '', //Function called every frame to determine if this button should be enabled/disabled
	onClick: '', //Function called when the user clicks the button
	design: SBUTTON_DESIGNS[0],
	description: ''
};

//Extra parameters for "select" SButtons
var SBUTTON_DEFAULT_SELECT = {
	hoverColor: '#9696ff',
	itemColors: null, //array -> [color1, color2]
	scrollColors: null, //array -> [roller, background]
	open: false,
	options: null,
	value: null, //array
	lastValue: '',
	listLimit: 999,
	precisionArrows: true, 
	scrollArrows: true,
	onOptChange: '',
	onOptKeep: ''
};

//Filters for "text input" SButtons
var SBUTTON_TEXT_FILTERS = ['number', 'letter', 'alphanum'];

//Extra parameters for "text input" SButtons
var SBUTTON_DEFAULT_TEXT = {
	hoverColor: '#9696ff',
	filter: null,
	open: false,
	options: null,
	value: '',
	lastValue: '',
	listLimit: 5,
	maxDigits: 0,
	maxLines: 1,
	minValue: 0,
	maxValue: 0,
	allowPaste: null,
	allowSpace: null
};

//----------------------------------------------------------------------------------------------
// Button Base - Create
//----------------------------------------------------------------------------------------------
function SButton_Base() {//SMO buttons start //edit
	this.initialize.apply(this, arguments);
}

SButton_Base.prototype = Object.create(Sprite.prototype);
SButton_Base.prototype.constructor = SButton_Confirm;

Object.defineProperties(SButton_Base.prototype, {
	enabled: {
		configurable: true,
		get: function() {
			return this._data.enabled;
		},
		set: function(value) {
			value = !!value;
			if (this._data.enabled != value) {
				this._data.enabled = value;
				if (value) {
					this.onEnable();
				} else {
					this.onDisable();
				}
				this.refreshEnabledTone();
			}
		}
	},

	text: {
		configurable: true,
		get: function() {
			return this._data.text;
		},
		set: function(value) {
			value = value == null ? '' : String(value);
			if (this._data.text != value) {
				this._data.text = value;
				this.redrawMyText();
			}
		}
	},

	textColor: {
		configurable: true,
		get: function() {
			return this._data.textColor;
		},
		set: function(value) {
			if (this._data.textColor != value) {
				this._data.textColor = value;
				this.redrawMyText();
			}
		}
	},

	design: {
		configurable: true,
		get: function() {
			return this._data.design;
		},
		set: function(value) {
			if (this._data.design != value && SBUTTON_DESIGNS.contains(value)) {
				this._data.design = value;
				this.redrawBackground();
			}
		}
	},

	backColor: {
		configurable: true,
		get: function() {
			return this._data.backColor;
		},
		set: function(value) {
			if (this._data.backColor != value) {
				this._data.backColor = value;
				this.redrawBackground();
			}
		}
	},

	borderColor: {
		configurable: true,
		get: function() {
			return this._data.borderColor;
		},
		set: function(value) {
			if (this._data.borderColor != value) {
				this._data.borderColor = value;
				this.redrawBorders();
			}
		}
	},

	borderSize: {
		configurable: true,
		get: function() {
			return this._data.borderSize;
		},
		set: function(value) {
			if (this._data.borderSize != value) {
				this._data.borderSize = value;
				this.redraw();
			}
		}
	}
});

//========================================
// Button Base - Initialize

SButton_Base.prototype.initialize = function(data) {
	Sprite.prototype.initialize.call(this);
	this.initValues(data || {});
	this.initPosition();
	this.initBitmaps();
	this.addListener('added', this.onParentAdded.bind(this));
	this.addListener('removed', this.onParentRemoved.bind(this));
	this.checkReady();
};

SButton_Base.prototype.initValues = function(data) {
	this.getDefaultData(data);
	this._imgStates = [];
	this._fixedTone = false;
	this._hovered = false;
	this._overrideSelect = false;
	this._overrideState = false;
	this._ready = false;
	this.visible = false;
};

SButton_Base.prototype.getDefaultData = function(data) {
	this.id = data.id != null ? data.id : '';
	this._data = {};
	for (var k in SBUTTON_DEFAULT) {
		this._data[k] = data[k] != null ? data[k] : SBUTTON_DEFAULT[k];
	}

	if (!Array.isArray(this._data.textOffset)) {
		this._data.textOffset = [];
	}
	if (this._data.textOffset.length < 2) {
		this._data.textOffset[0] = this._data.textOffset[0] || 0;
		this._data.textOffset[1] = this._data.textOffset[1] || 0;
	}

	if (!SBUTTON_DESIGNS.contains(this._data.design)) {
		this._data.design = SBUTTON_DESIGNS[0];
	}
};

SButton_Base.prototype.initPosition = function() {
	this.x = this._data.x;
	this.y = this._data.y;
};

SButton_Base.prototype.initBitmaps = function() {
	this.bitmap = new Bitmap(this._data.width, this._data.height);
	this.txtChild = new Sprite(new Bitmap(this._data.width, this._data.height));
	this.borders = new Sprite(new Bitmap(this._data.width, this._data.height));
	this.addChild(this.txtChild);
	this.addChild(this.borders);
};

//Method - checkReady
// * Checks if this button's images are loaded
SButton_Base.prototype.checkReady = function() {
	if (this.loadMyImages()) {
		this._ready = true;
		this.onReady();
	}
};

SButton_Base.prototype.onReady = function() {
	this.show();
	this.drawMe();
};

//========================================
// Button Base - Listeners

SButton_Base.prototype.onParentAdded = function() {
	var tone = this.isEnabled() ? 0 : this._data.disabledTone;
	this.setColorTone([tone, tone, tone, tone]);
	SceneManager._scene.addSButton(this);
};

SButton_Base.prototype.onParentRemoved = function() {
	this.hideDescription();
	if (this.isSelected()) {
		SceneManager._scene.selectButton(null);
	}
	SceneManager._scene.removeSButton(this);
};

//========================================
// Button Base - Update

SButton_Base.prototype.update = function() {
	this.updateLoadState();
	this.updateSort();
	this.updateTouchTrigger();
	Sprite.prototype.update.call(this);
	if (this._parentFocused) return this._parentFocused = false;
	if (this.isStateActive()) {
		this.updateEnabledState();
		this.updateHoverAndTone();
	}
};

SButton_Base.prototype.updateLoadState = function() {
	if (this._ready) return;
	this.checkReady();
};

SButton_Base.prototype.updateSort = function() {
	if (this._needSort) {
		SceneManager._scene.SButtons._all.push(this);
		this._needSort = false;
	}
};

SButton_Base.prototype.updateTouchTrigger = function() {
	if (this._touching) {
		if (TouchInput.isReleased() || !this.isMouseOverMe()) {
			this._touching = false;
			if (this._data.clickImg) {
				this.redrawBackground();
			}
			if (TouchInput.isReleased()) {
				this.onClick();
			}
		}
	}
};

SButton_Base.prototype.updateEnabledState = function() {
	if (!this.isActive()) return;
	if (this._data.enableFunc) {
		this.enabled = this._data.enableFunc();
	}
};

SButton_Base.prototype.updateHoverAndTone = function() {
	var tone = this._colorTone[0];
	var htone = this._data.hoverTone;
	var dtone = this._data.disabledTone;

	if (!this.isEnabled())
		return (tone != dtone) ? this.setColorTone([dtone, dtone, dtone, dtone]) : undefined;

	if (!this.isHoverEdible() || this._fixedTone)
		return (tone != 0) ? this.setColorTone([0, 0, 0, 0]) : undefined;

	//Removing tone added after click
	if (tone > htone + 4)
		return this.setColorTone([tone-5, tone-5, tone-5, tone-5]);

	//Adding tone when hovered
	if (this._hovered && this.isEnabled())
		return (tone < htone - 4) ? this.setColorTone([tone+5, tone+5, tone+5, tone+5]) : undefined;

	//Removing tone when not hovered
	if (tone > 4)
		return this.setColorTone([tone-5, tone-5, tone-5, tone-5]);
};

//========================================
// Button Base - Draw

SButton_Base.prototype.drawMe = function() {
	this.drawBackground();
	this.drawBorders();
	this.drawMyText();
	this.refreshEnabledTone();
};

SButton_Base.prototype.drawBackground = function() {
	var data = this._data;
	var width = this.width;
	var height = this.height;
	var bds = data.borderSize;
	var img = this._touching ? data.clickImg : data.hoverImg && this.isHovered() ? data.hoverImg : data.img;
	switch(data.design) {
	case 'circle':
		var radius = Math.ceil(width / 2 - bds);
		var x = Math.floor(width / 2);
		var y = Math.floor(height / 2);
		this.bitmap.drawCircleBackground(x, y, radius, data.backColor, img);
		break;
	case 'round-rect':
		var radius = Math.floor(Math.min(width, height) / 4) - bds;
		if (radius > 0) {
			width -= bds * 2;
			height -= bds * 2;
			this.bitmap.drawRoundedRect(bds, bds, width, height, radius, data.backColor, img);
			break;
		} //else -> use default
	default: //'rect'
		this.bitmap.drawRectBackground(0, 0, width, height, bds, data.backColor, img);
		break;
	}
};

SButton_Base.prototype.drawBorders = function() {
	if (!this.borders) return;
	var data = this._data;
	var thickness = this.borderSize;
	if (!thickness) return;
	var bmp = this.borders.bitmap;
	var width = this.width;
	var height = this.height;
	var color = this.isSelected() && data.selectorColor && !data.hideSelect ? data.selectorColor : data.borderColor;
	switch(data.design) {
	case 'circle':
		var radius = Math.ceil(width / 2);
		bmp.drawCircumference(radius, radius, radius, thickness, color);
		break;
	case 'round-rect':
		var radius = Math.floor(Math.min(width, height) / 4);
		bmp.drawRoundedBorders(0, 0, width, height, radius, thickness, color);
		break;
	default: //'rect'
		bmp.drawRectBorders(0, 0, width, height, thickness, color);
		break;
	}
};

SButton_Base.prototype.drawMyText = function() {
	if (!this.txtChild) return;
	var bitmap = this.txtChild.bitmap;
	if (!this.text) return bitmap.clear();
	var data = this._data;
	bitmap.fontSize = data.fontSize;
	bitmap.textColor = data.textColor;
	var x = data.textOffset[0] + data.borderSize;
	var y = data.textOffset[1] + data.borderSize;
	var maxWidth = this.txtChild.width - data.borderSize * 2;
	var maxHeight = this.txtChild.height - data.borderSize * 2;
	var align = data.textAlign;
	bitmap.drawText(this.text, x, y, maxWidth, maxHeight, align);
};

SButton_Base.prototype.refreshEnabledTone = function() {
	if (this._fixedTone) return;
	var enabled = this.isEnabled();
	var hoverTone = this._data.hoverTone;
	var deactTone = enabled ? 0 : this._data.disabledTone;
	var tone = enabled && this._hovered ? hoverTone : deactTone;
	var currentTone = this._colorTone[0];
	if (tone != currentTone) {
		this.setColorTone([tone, tone, tone, tone]);
	}
	var textTone = this.txtChild._colorTone[0];
	if (this.txtChild && this.borders && textTone != deactTone) {
		this.txtChild.setColorTone([deactTone, deactTone, deactTone, deactTone]);
		this.borders.setColorTone([deactTone, deactTone, deactTone, deactTone]);
	}
};

//========================================
// Button Base - Redraw

SButton_Base.prototype.redraw = function() {
	this.setColorTone([0, 0, 0, 0]);
	this.bitmap.clear();
	if (this.txtChild) {
		this.txtChild.setColorTone([0, 0, 0, 0]);
		this.txtChild.bitmap.clear();
	}
	this.redrawBorders();
	this.drawMe();
};

SButton_Base.prototype.redrawBackground = function() {
	this.setColorTone([0, 0, 0, 0]);
	this.bitmap.clear();
	this.drawBackground();
	this.refreshEnabledTone();
};

SButton_Base.prototype.redrawBorders = function() {
	if (!this.borders) return;
	this.borders.setColorTone([0, 0, 0, 0]);
	this.borders.bitmap.clear();
	this.drawBorders();
	this.refreshEnabledTone();
};

SButton_Base.prototype.redrawMyText = function() {
	if (!this.txtChild) return;
	this.txtChild.setColorTone([0, 0, 0, 0]);
	this.txtChild.bitmap.clear();
	this.drawMyText();
	this.refreshEnabledTone();
};

//========================================
// Button Base - Select

//Method - onSelect
// * Called the moment the user clicks this button
// * The selected button's borders become the color of "this._data.selectorColor"
// * While the click is hold, the background image of this button will be "this._data.clickImg"
// * After relasing the click, if the cursor was kept over the button, the function "onClick" will be called
SButton_Base.prototype.onSelect = function(touch) {
	this._touching = touch === undefined ? true : touch;
	if (this._touching && this._data.clickImg) {
		this.redrawBackground();
	}
	this.redrawBorders();
};

SButton_Base.prototype.onReselect = function() {
	this._touching = true;
	if (this._data.clickImg) {
		this.redrawBackground();
	}
};

//Method - onDeselect
// * Called once the user clicks on another button, or anywhere else on the screen
// * The button's borders return to their original color "this._data.borderColor"
SButton_Base.prototype.onDeselect = function() {
	this.redrawBorders();
};

SButton_Base.prototype.isSelected = function() {
	return SceneManager._scene.selectedButton() === this;
};

//========================================
// Button Base - Click Handler

//Method - onClick
// * Called once the click is released while the cursor is still over the button
SButton_Base.prototype.onClick = function() {
	if (this.isEnabled()) {
		this.onClickSuccess();
	} else {
		this.onClickFail();
	}
};

SButton_Base.prototype.onClickSuccess = function() {
	if (this._data.onClick) {
		this._data.onClick(this._data.value);
	}
	this.parentFocus();
};

SButton_Base.prototype.onClickFail = function() {};

//Method - parentFocus
// * Places this button at it's parent's the highest layer
SButton_Base.prototype.parentFocus = function() {
	if (!this.parent) return;
	var buttons = SceneManager._scene.getSButtons();
	var index = buttons.indexOf(this);
	if (index < 0) return;
	//Find the first button with the same parent
	for (var b = buttons.length - 1; b > -1; b--) {
		if (buttons[b].parent !== this.parent) {
			continue;
		}
		if (b === index) return; //this button is already on the highest layer
		//Set this button on the highest layer
		var new_index = this.parent.getChildIndex(buttons[b]);
		this.parent.setChildIndex(this, new_index);
		SceneManager._scene.SButtons._needSort = true;
		//Changing a child's index will cause the 'update' function to be called //edit -> is this really true after changing "childrenSwap" by "setChildIndex"?
		//twice this frame, the variable below is used to prevent weird stuff from happening
		return this._parentFocused = true;
	}
};

//========================================
// Button Base - Enabled

SButton_Base.prototype.isEnabled = function() {
	return this._data.enabled;
};

//Method: "onEnable"
// * Called once this button's state is switched from disabled to enabled
SButton_Base.prototype.onEnable = function() {
};

//Method: "onDisable"
// * Called once this button's state is switched from enabled to disabled
SButton_Base.prototype.onDisable = function() {
};

//========================================
// Button Base - Hover

SButton_Base.prototype.checkHover = function() {
	return this.isHoverEdible() && this.isMouseOverMe();
};

SButton_Base.prototype.isHoverEdible = function() {
	return !!this.parent && this.isActive() && this.isStateActive();
};

SButton_Base.prototype.isMouseOverMe = function() {
	return this.isXyInsideMe(TouchInput._cX, TouchInput._cY);
};

SButton_Base.prototype.isXyInsideMe = function(x, y) {
	x += Sprite_Button.prototype.canvasToLocalX.call(this, 0);
	y += Sprite_Button.prototype.canvasToLocalY.call(this, 0);
	var isInsideMyBox = x >= 0 && x < this.width && y >= 0 && y < this.height;
	return isInsideMyBox && this.isXyFilled(x, y);
};

//Method - isXyFilled
// * Returns a boolean indicating if there's anything drawn on the given pixel
SButton_Base.prototype.isXyFilled = function(x, y) {
	return !!this.bitmap._context.getImageData(x, y, 1, 1).data[3];
};

SButton_Base.prototype.isHovered = function() {
	return this._hovered;
};

SButton_Base.prototype.setHover = function(hover) {
	hover = !!hover;
	if (this._hovered === hover) return;
	if (hover) {
		this.onMouseHover();
	} else {
		this.onMouseLeave();
	}
};

SButton_Base.prototype.onMouseHover = function() {
	this._hovered = true;
	if (this._data.hoverImg) {
		this.redrawBackground();
	}
	if (this._data.cursorStyle) {
		document.body.style.cursor = this._data.cursorStyle;
	};
};

SButton_Base.prototype.onMouseLeave = function() {
	this._hovered = false;
	if (this._data.hoverImg) {
		this.redrawBackground();
	}
	if (this._data.cursorStyle) {
		document.body.style.cursor = '';
	};
};

//========================================
// Button Base - Others

SButton_Base.prototype.realX = function() {
	return -Sprite_Button.prototype.canvasToLocalX.call(this, 0);
};

SButton_Base.prototype.realY = function() {
	return -Sprite_Button.prototype.canvasToLocalY.call(this, 0);
};

SButton_Base.prototype.isActive = function() {
	return this.parent && Sprite_Button.prototype.isActive.call(this);
};

// Method - isButton
// * Used to avoid using "instanceof" to differentiate a Button from a Grabbable Sprite
SButton_Base.prototype.isButton = function() {
	return true;
};

SButton_Base.prototype.resize = function(width, height) {
	this.bitmap.resize(width, height);
};//edit -> bitmap principal editado, mas e quanto a sprite de texto? e as bordas?

SButton_Base.prototype.loadMyImages = function(type) {
	var name, prop, path, index, filename;
	var Data = this._data;
	var names = [Data.img, Data.hoverImg, Data.clickImg];
	for (var n = 0; n < names.length; n++) {
		name = names[n];
		if (!name) {
			this._imgStates[n] = true;
			continue;
		}
		if (this._imgStates[n] === true) {
			continue;
		} else {
			index = name.lastIndexOf('/') + 1;
			filename = name.slice(index, name.length);
			path = 'img/' + name.slice(0, index);
			this._imgStates[n] = ImageManager.loadBitmap(path, filename, 0, true);
		}
		if (this._imgStates[n].isReady()) {
			this._imgStates[n] = true;
		}
	}
	return !this._imgStates.some(i => i !== true);
};

//Method: "isOverrideSelect"
// * When another button is being selected, this one will ignore the selection
SButton_Base.prototype.isOverrideSelect = function() {
	return this._overrideSelect;
};

SButton_Base.prototype.show = function() {
	this.visible = true;
};

SButton_Base.prototype.hide = function() {
	this.visible = false;
};

SButton_Base.prototype.isStateActive = function() {
	if (this._overrideState) return true;
	if (SceneManager._scene.SButtonsState() === 'on') return true;
	return false;
};

//==========================================================================================
//==========================================================================================
// Grabbable Sprite
//==========================================================================================
//==========================================================================================
function Sprite_Grabbable() {
	this.initialize.apply(this, arguments);
}

Sprite_Grabbable.prototype = Object.create(SButton_Base.prototype);
Sprite_Grabbable.prototype.constructor = Sprite_Grabbable;

Sprite_Grabbable.prototype.initialize = function(Data) {
	SButton_Base.prototype.initialize.call(this, Data);
	this._offScreen = {x:0.5, y:0.5};
	this._lastPosition = {x: this.x, y: this.y};
	this._needSort = false;
	this._needStart = true;
	this._fixed = false;
	this._overrideSelect = false;
	this._overrideState = false;
	this._hoverTone = 0;
	this._grabTone = 0;
	this.setFullGrabBox();
	this.setDragLimits();
};

//========================================
// Sprite Grab - Drag Limits
// Defines the X and Y limits where one may drag this sprite

// this._offScreen defines the % of this sprite that can go off screen
// this._offScreen.x = 0; -> none of it may go off screen on X axis
// this._offScreen.y = 1; -> all of it may go off screen on Y axis
// For default, both "this._offScreen.x" and "this._offScreen.y" are set to 0.5

//Method - setDragLimits
// * Allows you to set fixed limits to dragging the sprite
// * For example, you can make "xMin" and "xMax" have the same value so that this sprite
//   won't move on he X axis, this is used to build lists' scrollers
Sprite_Grabbable.prototype.setDragLimits = function(xMin, xMax, yMin, yMax) {
	this._hasDraggingLimits = xMin != null || xMax != null || yMin != null || yMax != null;
	xMin = xMin != null ? xMin : (-this.width * this._offScreen.x);
	xMax = xMax != null ? xMax : (Graphics.width + this.width * (this._offScreen.x - 1));
	yMin = yMin != null ? yMin : (-this.height * this._offScreen.y);
	yMax = yMax != null ? yMax : (Graphics.height + this.height * (this._offScreen.y - 1));
	this._limitX = { min :xMin, max: xMax };
	this._limitY = { min: yMin, max: yMax };
};

//========================================
// Sprite Grab - Grab Box
// The box where the user may click to grab this sprite

Sprite_Grabbable.prototype.setFullGrabBox = function() {
	this.setGrabBox(0, 0, this.width, this.height);
};

Sprite_Grabbable.prototype.setGrabBox = function(x, y, width, height) {
	this._grabBox = {
		x: x,
		y: y,
		width: width,
		height: height
	};
};

Sprite_Grabbable.prototype.isClickOnMyGrabBox = function() {
	return this.isXyInsideMyGrabBox(TouchInput._x, TouchInput._y);
};

Sprite_Grabbable.prototype.isXyInsideMyGrabBox = function(x, y) {
	var gb = this._grabBox;
	if (gb.width === 0 || gb.height === 0) return false;
	var mx = this.realX() + gb.x;
	var my = this.realY() + gb.y;
	return x >= mx && x < mx + gb.width && y >= my && y < my + gb.height;
};

//========================================
// Sprite Grab - Select

Sprite_Grabbable.prototype.onSelect = function(touch) {
	this._touching = touch === undefined ? true : !!touch;
	if (this._touching) {
		SceneManager._scene.grabSprite(this);
		if (this._data.clickImg) {
			this.redrawBackground();
		}
	}
	this.redrawBorders();
};

Sprite_Grabbable.prototype.onReselect = function() {
	this.onSelect(true);
};

//========================================
// Sprite Grab - Touch

Sprite_Grabbable.prototype.updateTouchTrigger = function() {};

//========================================
// Sprite Grab - Grab

Sprite_Grabbable.prototype.isGrabbed = function() {
	return this._touching;
};

Sprite_Grabbable.prototype.onGrab = function() {
	this.parentFocus();
	if (this._grabTone) {
		var tone = this._grabTone;
		this.setColorTone([tone, tone, tone, tone]);
	}
};

Sprite_Grabbable.prototype.onRelease = function() {
	this._touching = false;
	SceneManager._scene.grabSprite(null);
	if (this._grabTone) {
		if (this.isHovered() && this._hoverTone) {
			var tone = this._hoverTone;
			this.setColorTone([tone, tone, tone, tone]);
		} else {
			this.setColorTone([0, 0, 0, 0]);
		}
	}
	SceneManager._scene.selectButton(null);
};

Sprite_Grabbable.prototype.onMoved = function() {};

//========================================
// Sprite Grab - Hover

Sprite_Grabbable.prototype.onMouseHover = function() {
	SButton_Base.prototype.onMouseHover.call(this);
	if (this._hoverTone) {
		var tone = this._hoverTone;
		this.setColorTone([tone, tone, tone, tone]);
	}
};

Sprite_Grabbable.prototype.onMouseLeave = function() {
	SButton_Base.prototype.onMouseLeave.call(this);
	if (this._hoverTone) {
		this.setColorTone([0, 0, 0, 0]);
	}
};

//========================================
// Sprite Grab - Update

Sprite_Grabbable.prototype.update = function() {
	SButton_Base.prototype.update.call(this);
	if (this.isStateActive()) {
		this.updateGrabbing();
	} else {
		this._touching = false;
	}
};

Sprite_Grabbable.prototype.updateGrabbing = function() {
	if (!this.isGrabbed()) return;
	var scene = SceneManager._scene;
	if (!TouchInput.isPressed() || !scene.isGrabbingSprite()) {
		return this.onRelease();
	}
	if (this.isFixed()) return;
	var x = TouchInput._x - scene.SButtons._grabbing.x;
	var y = TouchInput._y - scene.SButtons._grabbing.y;
	var limitX1 = this._limitX.min;
	var limitX2 = this._limitX.max;
	var limitY1 = this._limitY.min;
	var limitY2 = this._limitY.max;
	if (this._hasDraggingLimits) {
		var rX = this.realX() - this.x;
		var rY = this.realY() - this.y;
		limitX1 += rX;
		limitX2 += rX;
		limitY1 += rY;
		limitY2 += rY;
	}
	x = x.clamp(limitX1, limitX2);
	y = y.clamp(limitY1, limitY2);
	if (x !== this._lastPosition.x || y !== this._lastPosition.y) {
		var visual_x = this._hasDraggingLimits ? rX : 0;
		var visual_y = this._hasDraggingLimits ? rY : 0;
		this._lastPosition.x = x;
		this._lastPosition.y = y;
		this.x = x - visual_x;
		this.y = y - visual_y;
		this.onMoved();
	}
};

//========================================
// Sprite Grab - Others

Sprite_Grabbable.prototype.isButton = function() {
	return false;
};

//Method - isFixed
// * If fixed, this sprite can't be moved, but can still be grabbed, which means
//   that the functions "onGrab" and "onRelease" will still be called
Sprite_Grabbable.prototype.isFixed = function() {
	return this._fixed;
};

//----------------------------------------------------------------------------------------------
// Confirm Button - Create
// * Used for common buttons like "Ok" and "Cancel"
//----------------------------------------------------------------------------------------------
function SButton_Confirm() {
	this.initialize.apply(this, arguments);
}

SButton_Confirm.prototype = Object.create(SButton_Base.prototype);
SButton_Confirm.prototype.constructor = SButton_Confirm;

Object.defineProperty(SButton_Confirm.prototype, 'description', {
	get: function() {
		return this._data.description;
	},
	set: function(value) {
		if (this._data.description != value) {
			this._data.description = value;
			if (this._descriptionCount > 0) {
				this._descriptionCount = 0;
				this.hideDescription();
			}
		}
	},
	configurable: true
});

//========================================
// Button Confirm - Initialize

SButton_Confirm.prototype.initialize = function(data) {
	SButton_Base.prototype.initialize.call(this, data);
	this.initTools();
};

SButton_Confirm.prototype.initValues = function(data) {
	SButton_Base.prototype.initValues.call(this, data);
	this._preventClickSE = false;
	this._preventClickBlink = false;
	this._descriptionCountLimit = 45;
	this._descriptionCount = 0;
	this._descriptionVisible = false;
};

SButton_Confirm.prototype.initTools = function() {};

//========================================
// Button Confirm - On Click

SButton_Confirm.prototype.onClickSuccess = function() {
	SButton_Base.prototype.onClickSuccess.call(this);
	this.resetDescriptionCount();
	this.playClickSE();
	this.blinkOnClick();
};

SButton_Confirm.prototype.onClickFail = function() {
	SButton_Base.prototype.onClickFail.call(this);
	SoundManager.playBuzzer();
};

SButton_Confirm.prototype.resetDescriptionCount = function() {
	this._descriptionCount = 0;
};

SButton_Confirm.prototype.playClickSE = function() {
	if (this._preventClickSE) return this._preventClickSE = false;
	SoundManager.playCursor();
};

SButton_Confirm.prototype.blinkOnClick = function() {
	if (this._preventClickBlink) return this._preventClickBlink = false;
	if (this._fixedTone) return;
	var tone = 85;
	this.setColorTone([tone, tone, tone, tone]);
};

//========================================
// Button Confirm - Update & Description

SButton_Confirm.prototype.update = function() {
	if (SButton_Base.prototype.update.call(this) === false) return false;
	if (this.isStateActive()) {
		this.updateDescription();
	}
};

SButton_Confirm.prototype.updateDescription = function() {
	if (!this.isActive() || !document.hasFocus() || SceneManager._scene.isSelecting()) {
		this._descriptionCount = 0;
	}
	if (this.isHovered() && this._data.description) {
		if (this._descriptionCountLimit > 0) {
			this._descriptionCount++;
		}
		if (this._descriptionCount >= this._descriptionCountLimit) {
			this.showDescription();
		} else {
			this.hideDescription();
		}
	} else {
		this._descriptionCount = 0;
		this.hideDescription();
	}
};

SButton_Confirm.prototype.showDescription = function() {
	var last_description = SceneManager._scene.buttonDescription()._button;
	if (last_description && last_description != this) {
		last_description.hideDescription();
	}

	if (!this._descriptionVisible) {
		SceneManager._scene.buttonDescription().setButton(this);
		this._descriptionVisible = true;
	}
};

SButton_Confirm.prototype.hideDescription = function() {
	if (this._descriptionVisible) {
		SceneManager._scene.buttonDescription().setButton(null);
		this._descriptionVisible = false;
	}
};

//----------------------------------------------------------------------------------------------
// Select Button - Create
// * When selected it'll open a list of options for the user to choose from
// * Clicking anywhere on the screen will close the list
//----------------------------------------------------------------------------------------------
function SButton_Select() {
	this.initialize.apply(this, arguments);
}

SButton_Select.prototype = Object.create(SButton_Confirm.prototype);
SButton_Select.prototype.constructor = SButton_Select;

//========================================
// Select Button - Initialize

SButton_Select.prototype.initValues = function(data) {
	SButton_Confirm.prototype.initValues.call(this, data);
	this._selected = false;
};

SButton_Select.prototype.initTools = function() {
	this.initOptions();
};

SButton_Select.prototype.initOptions = function() {
	var data = this._data;
	var options;
	var optionsData = {
		x: 0,
		y: this.height - data.borderSize,
		width: this.width,
		height: this.height * data.options.length,
		listLimit: data.listLimit,
		fontSize: data.fontSize,
		fontFace: data.fontFace,
		textColor: data.textColor,
		backColor: data.borderColor,
		borderColor: data.borderColor,
		borderSize: data.borderSize,
		selectorColor: data.selectorColor,
		hoverColor: data.hoverColor,
		itemColors: data.itemColors,
		scrollColors: data.scrollColors,
		hideSelect: true
	};
	var options = new Sprite_ItemList(optionsData, 1);
	options._overrideSelect = true;
	options._scroller._roller._overrideSelect = true;
	options.setItemList(data.options);
	options.open = function() {
		this.visible = true;
		var button_value = this.parent.currentValue();
		if (button_value) {
			this.selectItem(this.getIndexByString(button_value));
		}
		SceneManager._scene.selectButton(this, false);
	};
	options.close = function(keep) {
		if (!this.visible) return;
		this.visible = false;
		var data = this.parent._data;
		var items = this.getSelectedItems();
		if (data.value.equals(items) || keep) {
			this.parent.onOptionKeep();
		} else {
			data.value = items;
			this.parent.onOptionChange(items, this._selectedIndexes.clone());
		}
		SceneManager._scene._selecting = false;
		data.open = false;
		this.parent.setHover(false);
	};
	options.onSelect = function(touch) {
		touch = touch == undefined ? true : touch;
		Sprite_ItemList.prototype.onSelect.call(this, touch);
		if (touch && !Input.isPressed('control') && !this.isMouseOverScroller()) {
			this.close();
		}
	};
	options.onReselect = function() {
		Sprite_ItemList.prototype.onReselect.call(this);
		if (!Input.isPressed('control') && !this.isMouseOverScroller()) {
			this.close();
		}
	};
	options.onDeselect = function() {
		Sprite_ItemList.prototype.onDeselect.call(this);
		if (!this.isMouseOverScroller()) {
			this.close(true);
		}
	};
	options.onCancelled = function() {
		Sprite_ItemList.prototype.onCancelled.call(this);
		this.close(true);
	};
	options.visible = false;
	this._options = options;
	this.addChild(this._options);
};

SButton_Select.prototype.getDefaultData = function(data) {
	SButton_Confirm.prototype.getDefaultData.call(this, data);
	for (var k in SBUTTON_DEFAULT_SELECT) {
		if (this.id == 'SOP') {
			console.log(k, data[k])
		}
		this._data[k] = data[k] != null ? data[k] : SBUTTON_DEFAULT_SELECT[k];
	}

	if (!Array.isArray(this._data.options)) {
		this._data.options = [];
	}

	if (!Array.isArray(this._data.value)) {
		this._data.value = [];
	}

	if (!Array.isArray(this._data.itemColors)) {
		this._data.itemColors = [];
	}
	if (this._data.itemColors.length < 2) {
		this._data.itemColors[0] = this._data.itemColors[0] || '#999999';
		this._data.itemColors[1] = this._data.itemColors[1] || '#555555';
	}

	if (!Array.isArray(this._data.scrollColors)) {
		this._data.scrollColors = [];
	}
	if (this._data.scrollColors.length < 2) {
		this._data.scrollColors[0] = this._data.scrollColors[0] || '#353535';
		this._data.scrollColors[1] = this._data.scrollColors[1] || '#575757';
	}
};

//========================================
// Select Button - On Action

SButton_Select.prototype.onClickSuccess = function() {
	if (this._closingOptions) return;
	SButton_Confirm.prototype.onClickSuccess.call(this);
	this._data.open = !this._data.open;
	if (this._data.open) {
		this._options.open();
	}
	SceneManager._scene._selecting = this._data.open;
	this.redraw();
};

SButton_Select.prototype.onOptionChange = function(values, indexes) {
	SoundManager.playOk();
	this.redrawMyText();
	if (this._data.onOptChange) {
		this._data.onOptChange(values, indexes);
	}
};

SButton_Select.prototype.onOptionKeep = function() {
	SoundManager.playCancel();
	this.redrawMyText();
	if (this._data.onOptKeep) {
		this._data.onOptKeep();
	}
};

//========================================
// Select Button - Draw

SButton_Select.prototype.drawMyText = function() {
	var txt_bmp = this.txtChild.bitmap;
	var data = this._data;
	var text = this.currentValue() == null ? data.text : this.currentValue();
	var bds = data.borderSize;
	var x = bds + data.textOffset[0];
	var y = data.textOffset[1];
	txt_bmp.fontSize = data.fontSize;
	txt_bmp.textColor = data.textColor;

	//Drawing arrow
	var arrow_w = Math.floor(data.width / 8);
	var arrow_h = Math.floor(data.height / 3);
	var arrow_x = data.width - arrow_w - 5;
	var arrow_y = arrow_h;
	var arrow_d = this._options && this._options.visible ? 'up' : 'down';
	txt_bmp.drawTriangleS(arrow_x, arrow_y, arrow_w, arrow_h, arrow_d, '#ffffff');

	//Drawing text
	var arrow_w = Math.floor(data.height / 2);
	var arrow_x = data.width - Math.floor(arrow_w / 2) - 8 - bds;
	var maxWidth = data.width - bds - x - (data.width - arrow_x - 4);
	var maxHeight = data.height - data.textOffset[1];
	var align = data.textAlign;
	txt_bmp.drawText(text, x, y, maxWidth, maxHeight, align);
	if (!this.currentValue()) {
		let tone = -75;
		this.txtChild.setColorTone([tone, tone, tone, tone]);
	}
};

SButton_Select.prototype.redraw = function(all) {
	if (all) {
		this.redrawOptions();
	}
	SButton_Confirm.prototype.redraw.call(this);
	this._refresh();
};

SButton_Select.prototype.redrawOptions = function() {
	this._options.redraw();
};

SButton_Select.prototype.redrawMyText = function() {
	SButton_Confirm.prototype.redrawMyText.call(this);
	this._refresh();
};

//========================================
// Select Button - Others

SButton_Select.prototype.currentValue = function() {
	return this._data.value.last();
};

SButton_Select.prototype.isOpen = function() {
	return this._data.open;
};

SButton_Select.prototype.setList = function(list) {
	this._data.options = [];
	if (Object.prototype.toString.call(list) !== '[object Array]') return;
	if (JSON.stringify(this._data.options) === JSON.stringify(list)) return;
	this._data.options = list;
	this.redrawOptions();
	if (this._data.open) {
		this._options.close();
	}
};

//----------------------------------------------------------------------------------------------
// Text Button
// * Allows the player to input a text on it
//----------------------------------------------------------------------------------------------
function SButton_Text() {
	this.initialize.apply(this, arguments);
}

SButton_Text.prototype = Object.create(SButton_Select.prototype);
SButton_Text.prototype.constructor = SButton_Text;

Object.defineProperty(SButton_Text.prototype, 'value', {
	get: function() {
		return this._lines.reduce((a, v) => a + '\n' + v);
	},
	set: function(value) {
		value = value == null ? '' : String(value);
		this._lines = value.split('\n');
		this.redrawMyText();
	},
	configurable: true
});

SButton_Text.prototype.initialize = function(data) {
	SButton_Confirm.prototype.initialize.call(this, data);
	this.formatValue();
};

SButton_Text.prototype.initValues = function(data) {
	SButton_Confirm.prototype.initValues.call(this, data);
	if (!this._data.cursorStyle) {
		this._data.cursorStyle = 'text';
	}
	this._scrollX = 0;
	this._scrollY = 0;
	this._line = 1;
	this._lines = [''];
	this._detachScrollWait = 0;
};

SButton_Text.prototype.getDefaultData = function(data) {
	SButton_Confirm.prototype.getDefaultData.call(this, data);
	for (k in SBUTTON_DEFAULT_TEXT) {
		this._data[k] = data[k] != null ? data[k] : SBUTTON_DEFAULT_TEXT[k];
	}

	if (!Array.isArray(this._data.options)) {
		this._data.options = [];
	}

	if (!SBUTTON_TEXT_FILTERS.contains(this._data.filter)) {
		this._data.filter = null;
	}

	if (!(this._data.maxLines > 0)) {
		this._data.maxLines = 1;
	}

	if (this._data.minValue > this._data.maxValue) {
		let v = this._data.maxValue;
		this._data.maxValue = this._data.minValue;
		this._data.minValue = v;
	}

	if (this._data.filter) {
		this._data.allowPaste = this._data.allowPaste === true ? true : false;
		this._data.allowSpace = this._data.allowSpace === true ? true : false;
	} else {
		this._data.allowPaste = this._data.allowPaste === false ? false : true;
		this._data.allowSpace = this._data.allowSpace === false ? false : true;
	}
};

SButton_Text.prototype.onClickSuccess = function() {
	SButton_Confirm.prototype.onClickSuccess.call(this);
};

SButton_Text.prototype.getXIndexOnClick = function() {
	var fontSize = this.txtChild.bitmap.fontSize;
	var borderSize = this._data.borderSize;
	var offset_x = this._data.textOffset[0];
	var touch_x = TouchInput._x - this.realX() + offset_x - 1;
	var letterWidth = fontSize / 2;
	var index = Math.round(touch_x / letterWidth);
	return index;
};

SButton_Text.prototype.getYIndexOnClick = function() {
	var fontSize = this.txtChild.bitmap.fontSize;
	var borderSize = this._data.borderSize;
	var offset_y = this._data.textOffset[1];
	var touch_y = TouchInput._y - this.realY() + offset_y;
	var lineWidth = fontSize + 2;
	var index = Math.floor(touch_y / lineWidth);
	if (this._data.maxLines) {
		var maxLines = Math.min(this._data.maxLines, this.maxVisLines());
		return index.clamp(0, maxLines);
	}
	return Math.max(0, index);
};

SButton_Text.prototype.initTools = function() {
	SButton_Select.prototype.initTools.call(this);
	this._options.onOkTriggered = function(isTouchTriggered) {
		var data = this.parent._data;
		if (data.maxLines === 1 || isTouchTriggered) {
			return Sprite_OptionsList.prototype.onOkTriggered.call(this, isTouchTriggered);
		}
		var index_x = this.parent.realCursorX();
		var index_y = this.parent.realCursorY();
		if (data.maxLines && data.maxLines <= index_y + 1) return;

		var line = this.parent.line();
		var new_index_y = index_y + 1;
		var isNewLine = this.parent._lines[new_index_y] == null;
		if (isNewLine) {
			this.parent._lines[new_index_y] = '';
		}
		this.parent.setCursorAt(0, new_index_y);

		var remain_text = line.substring(0, index_x)
		var jumping_text = line.substring(index_x, line.length);
		this.parent._lines[index_y] = remain_text;
		if (isNewLine) {
			this.parent._lines[new_index_y] = jumping_text;
		} else {
			this.parent._lines.splice(index_y + 1, 0, jumping_text);
		}
		if (jumping_text || new_index_y < this.parent._lines.length - 1) {
			this.parent.redrawMyText();
		}
	};

	//Cursor is the blinking rectangle
	this.createCursor();

	//The precision arrows are just for the "only numbers" inputs
	if (this.isOnlyNumbers() && this._data.precisionArrows) {
		this.createPrecisionArrows();
	}
};

SButton_Text.prototype.createCursor = function() {
	var d = this._data;
	var width = 2;
	var height = d.fontSize + 2;
	this._cursor = new Sprite(new Bitmap(width, height));
	this._cursor._fadeState = 0;
	this._cursor._fadeCounter = 0;
	var fadeWait = 30;
	this._cursor.update = function() {
		Sprite.prototype.update.call(this);
		if (!this.visible) return;
		if (this._fadeState) { // Fade in
			if (this.alpha >= 1) {
				this._fadeCounter++;
				if (this._fadeCounter >= fadeWait) {
					this._fadeCounter = 0;
					this._fadeState = 0;
				}
			} else {
				this.alpha += 0.05;
			}
		} else { // Fade out
			if (this.alpha <= 0) {
				this._fadeCounter++;
				if (this._fadeCounter >= fadeWait - 20) {
					this._fadeCounter = 0;
					this._fadeState = 1;
				}
			} else {
				this.alpha -= 0.05;
			}
		}
	};
	this._cursor.refreshPosition = function() {
		var offset = this.parent._data.textOffset;
		var fontSize = this.parent._data.fontSize;
		var borderSize = this.parent._data.borderSize;
		var line = this.parent.line();
		this._index_x = this._index_x.clamp(0, line.length);
		this._index_y = this._index_y.clamp(0, this.parent._lines.length);
		//Find X position
		var text_w = borderSize + offset[0] + 2;
		if (this._index_x > 0) {
			let start = this.parent._scrollX;
			let end = this._index_x;
			let text = line.substring(start, end);
			text_w += SMO.AM.textWidthEasy(text, fontSize); //aqui -> considerar emotes
		}
		this.x = text_w - 1;
		//Find Y position
		var text_h = borderSize + offset[1] + 2;
		if (this._index_y > 0) {
			text_h += (fontSize + 2) * this.parent.visCursorY();
		}
		this.y = text_h;
	};

	this._cursor.bitmap.fillAll('#ffffff');
	this._cursor.x = d.borderSize + d.textOffset[0] + 2;
	this._cursor.y = d.borderSize + d.textOffset[1] + 2;
	this.hideCursor();
	this._cursor._index_x = 0;
	this._cursor._last_index_x = 0;
	this._cursor._index_y = 0;
	this.addChild(this._cursor);
};

SButton_Text.prototype.createPrecisionArrows = function() {
	var d = this._data;
	this._arrows = [];
	var height = this.height / 2;

	var upArrow = {
		backColor: d.backColor,
		borderColor: d.borderColor,
		textColor: d.textColor,
		fontSize: Math.floor(d.fontSize/2 - 2),
		text: '▲',
		textAlign: 'center',
		height: height,
		width: height,
		x: this.width,
		y: 0,
		onClick: this.onUpArrowClick.bind(this)
	};
	this._arrows.push(new SButton_Confirm(upArrow));
	this.addChild(this._arrows[0]);

	var downArrow = {
		backColor: d.backColor,
		borderColor: d.borderColor,
		textColor: d.textColor,
		fontSize: Math.floor(d.fontSize/2 - 2),
		text: '▼',
		textAlign: 'center',
		height: height,
		width: height,
		x: this.width,
		y: height,
		onClick: this.onDownArrowClick.bind(this)
	};
	this._arrows.push(new SButton_Confirm(downArrow));
	this.addChild(this._arrows[1]);
};

SButton_Text.prototype.onUpArrowClick = function() {
	var data = this._data;
	var number = Number(this.value);
	var maxValue = data.maxValue;
	var digits = String(number + 1).length;
	if ((!maxValue || number < maxValue) && digits <= data.maxDigits) {
		number++;
		this.value = number;
		var cursor = this._cursor;
		cursor.alpha = 0;
		cursor._fadeState = 0;
		cursor._fadeCounter = -10;
		cursor.refreshPosition();
		this.redrawMyText();
		return true;
	}
	return false;
};

SButton_Text.prototype.onDownArrowClick = function() {
	var data = this._data;
	var number = Number(this.value);
	if (number > data.minValue) {
		number--;
		this.value = number;
		var cursor = this._cursor;
		cursor.alpha = 0;
		cursor._fadeState = 0;
		cursor._fadeCounter = -10;
		cursor.refreshPosition();
		this.redrawMyText();
		return true;
	}
	return false;
};

SButton_Text.prototype.drawMyText = function() {
	var d = this._data;
	var text = '';
	var c = this._cursor;
	var maxLetters = this.maxVisLetters();
	var value = this.value;

	//Determine the maximun and minimun values for number specific inputs
	if (this.isOnlyNumbers() && value !== '') {
		var number = Number(value) || 0;
		if (d.maxValue > 0) {
			this.value = number.clamp(d.minValue, d.maxValue).toString();
		} else {
			this.value = Math.max(0, number).toString();
		}
	}

	//Choose the text to draw considering the maximun space available
	if (value) {
		text = value;
		if (text.length > maxLetters) {
			text = text.substr(this._scrollX, maxLetters);
		}
	}
	text = (c && c.visible) ? text : text || d.text;
	var end = Math.min(this._lines.length, this.maxVisLines() + this._scrollY + 1);
	for (var t = this._scrollY; t < end; t++) {
		this.drawLine(t);
	}

	//If there's no value selected, draw button's text in a dark tone
	var tone = value ? 0 : -75;
	this.txtChild.setColorTone([tone, tone, tone, tone]);
};

SButton_Text.prototype.setLineValue = function(text, index) {
	text = text == null ? '' : String(text);
	index = index == null ? this._cursor._index_y : index;
	this._lines[index] = text;
};

SButton_Text.prototype.drawLine = function(index, isRedraw) {
	if (isRedraw) {
		this.clearLine(index);
	}
	var line = this._lines[index];
	if (!line) return;
	var fontSize = this._data.fontSize;
	var offset_x = this._data.textOffset[0];
	var offset_y = this._data.textOffset[1];
	var maxLetters = this.maxVisLetters() + 1;
	var x = 0;
	//Calculate the text's X
	if (this._scrollX > 0) {
		let offset = fontSize / 2;
		x -= offset;
		maxLetters += 1;
	}
	var index_x = Math.max(0, this._scrollX - 1);
	var text = line.substr(index_x, maxLetters);
	x += this.borderSize + offset_x + 2;
	//Calculate the text's Y
	var index_y = index - this._scrollY;
	var y = this._data.maxLines === 1 ? offset_y : this.borderSize + offset_y + 2 + (fontSize + 2) * index_y;
	//Calculate max width and max height
	var maxWidth = this.width + fontSize * 2;
	var maxHeight = this._data.maxLines === 1 ? this.height : fontSize + 4;
	this.txtChild.bitmap.drawText(text, x, y, maxWidth, maxHeight, 'left');
};

SButton_Text.prototype.clearLine = function(index) {
	var fontSize = this.txtChild.fontSize;
	var offset_y = this._data.textOffset[1];
	var x = -fontSize;
	var y = this.borderSize + offset_y + 2 + (fontSize + 2) * (index - this._scrollY);
	var width = this.width - x;
	var height = fontSize + 4;
	this.txtChild.bitmap.clearRect(x, y, width, height);
};

SButton_Text.prototype.redrawLine = function(index) {
	var r = this._colorTone[0];
	var g = this._colorTone[1];
	var b = this._colorTone[2];
	var gray = this._colorTone[3];
	this.txtChild.setColorTone([0, 0, 0, 0]);
	index = index != null ? index : this.realCursorY();
	this.drawLine(index, true);
	this.txtChild.setColorTone([r, g, b, gray]);
};

SButton_Text.prototype.maxVisLetters = function() {
	var fontSize = this.txtChild.bitmap.fontSize;
	var offset_x = this._data.textOffset[0];
	var maxWidth = this.width - 2 * this.borderSize - offset_x - 2;
	var letterWidth = fontSize / 2;
	return Math.floor(maxWidth / letterWidth);
};

SButton_Text.prototype.maxVisLines = function() {
	if (this._maxVisLines != null) return this._maxVisLines;
	var d = this._data;
	var maxHeight = d.height - 2 * d.borderSize - d.textOffset[1];
	var lineHeight = d.fontSize + 2;
	return this._maxVisLines = Math.floor(maxHeight / lineHeight);
};

SButton_Text.prototype.onSelect = function(touch) {
	SButton_Select.prototype.onSelect.call(this, touch);
	SButton_Text.getCustomKeyCodes();
	if (TouchInput.isTriggered()) {
		var index_x = this.getXIndexOnClick();
		var index_y = this.getYIndexOnClick();
		this.setCursorAt(index_x, index_y, true);
	} else {
		var value = this.value;
		this.setCursorAt(value.length, value.length);
	}
	this.showCursor();
	this._data.open = true;
	this._options.open();
	this._preselectBdColor = this.borderColor;
	this.borderColor = this._data.selectorColor;
};

SButton_Text.prototype.onReselect = function() {
	SButton_Select.prototype.onReselect.call(this);
	if (TouchInput.isTriggered()) {
		var index_x = this.getXIndexOnClick();
		var index_y = this.getYIndexOnClick();
		this.setCursorAt(index_x, index_y, true);
	}
	this._preventClickSE = true;
	this._preventClickBlink = true;
};

SButton_Text.prototype.onDeselect = function() {
	SButton_Select.prototype.onDeselect.call(this);
	this.hideCursor();
	this.borderColor = this._preselectBdColor;
	delete this._preselectBdColor;
};

//========================================
// Button Text Input - Update

SButton_Text.prototype.update = function() {
	SButton_Select.prototype.update.call(this);
	this.updateArrowTriggers();
	this.updateOpenState();
};

SButton_Text.prototype.cursorMoveLeft = function() {
	var index_x = this.realCursorX();
	var index_y = this.realCursorY();
	if (index_x > 0) return this.setCursorAt(index_x - 1, index_y);
	if (index_y > 0) return this.setCursorAt(this._lines[index_y - 1].length, index_y - 1);
};

SButton_Text.prototype.cursorMoveUp = function() {
	var index_x = this.realCursorX();
	var index_y = this.realCursorY();
	if (index_y > 0) return this.setCursorAt(null, index_y - 1);
};

SButton_Text.prototype.cursorMoveRight = function() {
	var index_x = this.realCursorX();
	var index_y = this.realCursorY();
	if (index_x < this.line().length) return this.setCursorAt(index_x + 1, index_y);
	if (this._lines[index_y + 1] != null) return this.setCursorAt(0, index_y + 1);
};

SButton_Text.prototype.cursorMoveDown = function() {
	var index_x = this.realCursorX();
	var index_y = this.realCursorY();
	var next_line = this._lines[index_y + 1];
	if (next_line != null) return this.setCursorAt(null, index_y + 1);
};

SButton_Text.prototype.isVisualLimitX = function() {
	return this.maxVisLetters() <= this.visCursorX();
};

SButton_Text.prototype.isVisualLimitY = function() {
	return this.maxVisLines() <= this.visCursorY() + 1;
};

SButton_Text.prototype.updateArrowTriggers = function() {
	if (!this.isOnlyNumbers()) return;
	if (!this.isSelected()) return;
	if (Input.isRepeated('up')) {
		if (this.onUpArrowClick()) {
			this.playArrowScrollSE();
		}
	} else if (Input.isRepeated('down')) {
		if (this.onDownArrowClick()) {
			this.playArrowScrollSE();
		}
	}
};

SButton_Text.prototype.updateOpenState = function() {
	this._data.open = this.isSelected();
};

SButton_Text.prototype.playArrowScrollSE = function() {
	SoundManager.playCursor();
};

SMO.AM.isAlphaNumericCode = function(charCode) {
	if (this.isNumberCode(charCode)) return true;
	if (this.isLetterCode(charCode)) return true;
	return false;
};

SMO.AM.isNumberCode = function(charCode) {
	return charCode >= 48 && charCode <= 57;
};

SMO.AM.isLetterCode = function(charCode) {
	return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
};

//Cursor
SButton_Text.prototype.showCursor = function() {
	this._cursor.visible = true;
};

SButton_Text.prototype.hideCursor = function() {
	this._cursor.visible = false;
};

//Others
SButton_Text.prototype.rightMembers = function() {
	return Math.max(0, this.line().length - this.maxVisLetters() - this.scrollX());
	//return Math.max(0, this._data.value.length - this.maxVisLetters() - this.scrollX());//aqui1
};

SButton_Text.prototype.isOnlyNumbers = function() {
	return this._data.filter === 'number';
};

SButton_Text.prototype.scrollX = function() {
	return this._scrollX;
};

SButton_Text.prototype.line = function() {
	return this._lines[this.realCursorY()] || '';
};

/*SButton_Text.prototype.onMouseHover = function() {
	SButton_Confirm.prototype.onMouseHover.call(this);
	document.body.style.cursor = 'text';
};
SButton_Text.prototype.onMouseLeave = function() {
	SButton_Confirm.prototype.onMouseLeave.call(this);
	document.body.style.cursor = '';
};*/

SButton_Text.prototype.closeOptions = function() {
	if (!this._hovered) {
		this.hideCursor();
		SButton_Text.loadDefaultKeyCodes();
		SButton_Select.prototype.closeOptions.call(this);
		this.formatValue();
	}
};

SButton_Text.prototype.formatValue = function() {
	if (!this.isOnlyNumbers()) return;
	var value = this.value;
	if (this._data.value !== '') return;
	var number = Math.abs(Number(this._data.minValue)) || 0;
	this.value = number.toString();
	this.redrawMyText();
};

SButton_Text.prototype.acceptInput = function(keyCode, shift, ctrl, alt) {
	var filter = this._data.filter;
	if (!filter) return true;
	var isNumber = keyCode >= 48 && keyCode <= 57;
	var isLetter = keyCode >= 65 && keyCode <= 90;
	var isSpecLetter = Boolean(ctrl || alt);
	var isSpecNumber = Boolean(isSpecLetter || shift);
	switch (filter) {
	case 'number':
		return isNumber && !isSpecNumber;
	case 'letter':
		return isLetter && !isSpecLetter;
	case 'alphanum':
		return isNumber ? !isSpecNumber : isLetter ? !isSpecLetter : false;
	default:
		return false;
	}
};

//text -> {string}
SButton_Text.prototype.formatPasteValue = function(text, maxLength) {
	if (!this._data.allowPaste) return text;
	//if (!this._data.filter && this._data.allowSpace) return text;
	var keyCode, char, filter = this._data.filter;
	var allowSpace = !this._data.allowSpace;
	var line = 1;
	var maxLines = this._data.maxLines;
	var currentLine = this.realCursorY();
	var pasteValue = '';
	for (var c = 0; c < text.length; c++) {
		if (pasteValue.length > maxLength) {
			break;
		}

		char = text[c];
		keyCode = text.charCodeAt(c);

		if (maxLines && keyCode === 10) { //line break (\n)
			if (++line + currentLine > maxLines) break;
		}

		if (keyCode === 32) { //Space
			if (allowSpace) {
				pasteValue += char;
			}
			continue;
		}

		//Checking the filter
		if (!filter) {
			pasteValue += char;
			continue;
		}

		var isNumber = keyCode >= 48 && keyCode <= 57;
		var isLetter = (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);
		switch(filter) {
		case 'number':
			if (isNumber) {
				pasteValue += char;
			};
			break;
		case 'letter':
			if (isLetter) {
				pasteValue += char;
			}
			break;
		case 'alphanum':
			if (isNumber || isLetter) {
				pasteValue += char;
			}
			break;
		default:
			break;
		}
	}
	return pasteValue;
};

SButton_Text.prototype.realCursorX = function() {
	return this._cursor._index_x;
};

SButton_Text.prototype.realCursorY = function() {
	return this._cursor._index_y;
};

SButton_Text.prototype.visCursorX = function() {
	return this._cursor._index_x - this._scrollX;
};

SButton_Text.prototype.visCursorY = function() {
	return this._cursor._index_y - this._scrollY;
};

SButton_Text.prototype.addValue = function(string) {
	if (!string) return;
	var linear = string.indexOf('\n') === -1;
	var line = this.line();
	var maxDigits = this._data.maxDigits;
	if (maxDigits) {
		let limit = maxDigits;
		let total = line.length + string.length;
		if (total > limit) {
			let empty = limit - line.length;
			string = string.substr(0, empty);
		}
	}
	if (string.length === 0) return;
	var maxLetters = this.maxVisLetters() + 1;
	var vis_index_x = this.visCursorX();
	var extra_letters = maxLetters - (vis_index_x + string.length + 1);
	if (extra_letters < 0) {
		this._scrollX -= extra_letters;
	}

	line = this.line();
	var index_x = this.realCursorX();
	var sstr1 = line.substr(0, index_x);
	var sstr2 = line.substr(index_x);
	this.setLineValue(sstr1 + string + sstr2);
	var scrollX = this._scrollX;
	this.setCursorAt(index_x + string.length);

	//if (linear && scrollX === this._scrollX) {
		//this.redrawLine();//aqui
	//} else {
		this.redrawMyText();
	//}
	SButton_Text.resetAccent();
};

//Method: "deleteValue"
//  * Delete values between the given indexes (start and end)
//  Number: start -> delete starting from this index
//  Number: end -> delete until this index is reached
SButton_Text.prototype.deleteValue = function(start, end) {
	SButton_Text.resetAccent();
	if (start < 0) return this.concatLine(true);
	var line = this.line();
	if (end > line.length) return this.concatLine();
	if (start === end) return false;
	var sstr1 = line.substring(0, start);
	var sstr2 = line.substring(end, line.length);
	this.setLineValue(sstr1 + sstr2);
	var scrollX = this._scrollX;
	var scrollY = this._scrollY;
	this.setCursorAt(start);
	if (scrollX === this._scrollX && scrollY === this._scrollY) {
		this.redrawMyText();
	}
	return true;
};

//Method: "concatLine"
//  * Concats the current line with the previous one
SButton_Text.prototype.concatLine = function(isBackspace) {
	var index_x = this.realCursorX();
	var index_y = this.realCursorY();

	if (isBackspace) { //When Backspace is pressed
		if (index_y === 0) return false;
		var target_y = index_y - 1;
		var targer_x = this._lines[target_y].length;
		this._lines[target_y] += this._lines[index_y];
		this._lines.splice(index_y, 1);
		this.setCursorAt(targer_x, target_y);
		this.redrawMyText();
		return true;
	}

	//When Delete is pressed
	var target_y = index_y + 1;
	var target_line = this._lines[target_y];
	if (target_line == null) return false;
	this._lines[index_y] += target_line;
	this._lines.splice(target_y, 1);
	this.redrawMyText();
	return true;
};

//Method: "setCursorAt"
//  * Places the cursor at the given coordinates
//  Number: x -> index of the X coordinate
//  Number: y -> index of the Y coordinate
//  Boolean: visual -> if you are defining a visual position, this argument must be true
SButton_Text.prototype.setCursorAt = function(x, y, visual) {
	var Cursor = this._cursor;
	var isKeepLastX = x == null;
	Cursor._index_x = x != null ? x : Cursor._last_index_x;
	Cursor._index_y = y != null ? y : Cursor._index_y;
	if (visual) {
		Cursor._index_x += this._scrollX;
		Cursor._index_y += this._scrollY;
	}
	//Make sure the current line exists
	if (this._lines[Cursor._index_y] == null) {
		Cursor._index_y = this._lines.length - 1;
	}
	//Make sure the cursor is not far from the line's end
	var line_length = this.line().length;
	if (line_length < Cursor._index_x) {
		Cursor._index_x = line_length;
	}
	Cursor.alpha = 0.9;
	Cursor._fadeState = 1;
	Cursor._fadeCounter = -10;
	this.fixScrolls();
	Cursor.refreshPosition();
	Cursor._last_index_x = isKeepLastX ? Cursor._last_index_x : Cursor._index_x;
};

SButton_Text.prototype.fixScrolls = function() {
	var isScrollXFixed = this.fixScrollX();
	var isScrollYFixed = this.fixScrollY();
	if (isScrollXFixed || isScrollYFixed) {
		this.redrawMyText();
	}
};

SButton_Text.prototype.fixScrollX = function() {
	var index_x = this.realCursorX();
	if (index_x < this._scrollX) {
		this._scrollX = index_x;
		return true;
	}
	var extra_letters = index_x - this.maxVisLetters();
	if (extra_letters > this._scrollX) {
		this._scrollX = extra_letters;
		return true;
	}
	return false;
};

SButton_Text.prototype.fixScrollY = function() {
	var index_y = this.realCursorY();
	if (index_y < this._scrollY) {
		this._scrollY = index_y;
		return true;
	}
	var extra_lines = index_y + 1 - this.maxVisLines();
	if (extra_lines > this._scrollY) {
		this._scrollY = extra_lines;
		return true;
	}
	return false;
};

//KeyMapper - key handling
SButton_Text.PressedKeys = {};
SButton_Text.DEFAULT_KEY_CODES = null;
SButton_Text.COMMAND_KEYS = {
	8: 'backspace',
	32: 'space',
	35: 'end',
	36: 'home',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	46: 'delete'
};
SButton_Text.SPECIAL_KEY_CODES = {
	186: 'ç',
	187: '=',
	188: ',',
	189: '-',
	190: '.',
	191: ';',
	192: '\'',
	193: '/',
	219: '´', //dead
	220: ']',
	221: '[',
	222: '~', //dead
	226: '\\'
};

SButton_Text.SPECIAL_SIGNS = {
	54: '6',
	'54b': '¨',
	219: '´',
	'219b': '`',
	222: '~',
	'222b': '^'
};

//Document - On Paste
SMO.AM._document_onPaste = document.onpaste;
document.onpaste = function (event) {
	//Check if there's a text input button selected
	var Scene = SceneManager._scene;
	if (Scene && Scene.isTextInputSelected()) {
		var button = Scene.selectedButton();
		SButton_Text.onPaste(event, button);
	} else if (SMO.AM._document_onPaste) {
		SMO.AM._document_onPaste.call(this, event);
	}
};

SButton_Text.onPaste = function(event, button) {
	var text = event.clipboardData.getData("Text");
	if (!text) return;
	var data = button._data;
	var value = button.value;
	var maxLength = data.maxDigits ? data.maxDigits - value.length : text.length;
	var fittingText = button.formatPasteValue(text, maxLength);
	if (!fittingText) return;

	var index_x = button.realCursorX();
	var index_y = button.realCursorY();
	var index_xf = index_y; //the X index considering a string with only 1 line
	for (var a = 0; a < index_y; a++) {
		index_xf += button._lines[a].length;
	}
	index_xf += index_x;
	var new_text_lines = fittingText.split('\n');
	var str1 = value.substr(0, index_xf);
	var str2 = value.substr(index_xf);
	var new_value = str1 + fittingText + str2;
	var new_lines = new_value.split('\n');
	if (data.maxLines && new_lines.length > data.maxLines) {
		let extra_lines = new_lines.length - data.maxLines;
		new_lines.splice(data.maxLines, extra_lines); //removing exceeding lines
	}
	button.value = new_lines.reduce((a, v) => a + '\n' + v);//aqui -> bad code
	button.setCursorAt(index_x + new_text_lines.last().length, index_y + new_text_lines.length - 1);
};

SButton_Text.getCustomKeyCodes = function() {
	SButton_Text.saveDefaultKeyCodes();
	//Numbers
	for (var c = 48; c < 58; c++) {
		Input.keyMapper[c] = String.fromCharCode(c);
	}
	//Letters - (uppercase 65 -> 90) - (lowercase 97 -> 122)
	for (c = 65; c < 91; c++) {
		Input.keyMapper[c] = String.fromCharCode(c).toLowerCase();
	}

	for (c in SButton_Text.SPECIAL_KEY_CODES) {
		Input.keyMapper[c] = SButton_Text.SPECIAL_KEY_CODES[c];
	}

	for (c in SButton_Text.COMMAND_KEYS) {
		Input.keyMapper[c] = SButton_Text.COMMAND_KEYS[c];
	}
};

SButton_Text.saveDefaultKeyCodes = function() {
	SButton_Text.DEFAULT_KEY_CODES = SButton_Text.DEFAULT_KEY_CODES || {};
	for(var k in Input.keyMapper) {
		SButton_Text.DEFAULT_KEY_CODES[k] = Input.keyMapper[k];
	}
};

SButton_Text.loadDefaultKeyCodes = function() {
	for(var k in Input.keyMapper) {
		if (SButton_Text.DEFAULT_KEY_CODES[k]) {
			Input.keyMapper[k] = SButton_Text.DEFAULT_KEY_CODES[k];
		} else {
			delete Input.keyMapper[k];
		}
	}
	SButton_Text.DEFAULT_KEY_CODES = null;
};

SButton_Text.resetAccent = function() {
	SButton_Text.accent = { code: 0, key: '' };
};
SButton_Text.resetAccent();

SButton_Text.updateTextInput = function(button) {
	var BTI = SButton_Text;
	var Pressed = BTI.PressedKeys;
	for (var k in Pressed) {
		var shift = Pressed[k].shift;
		var ctrl = Pressed[k].ctrl;
		var alt = Pressed[k].alt;
		var char = Pressed[k].key;
		var originalChar = Input.keyMapper[k];

		if (!Input.isQuickRepeated(originalChar)) {
			continue;
		}
		
		var data = button._data;
		var line = button.line();
		var index_x = button.realCursorX();
		var index_y = button.realCursorY();
		var maxDigits = data.maxDigits;
		var filter = data.filter;
		switch (char) {
		case 'Dead':
			if (filter) return;
			if (!BTI.SPECIAL_SIGNS[k]) return;
			char = shift ? BTI.SPECIAL_SIGNS[k + 'b'] : BTI.SPECIAL_SIGNS[k];
			if (BTI.accent.code === 0) return BTI.accent = { code: k, key: char };
			return button.addValue(BTI.accent.key + char);
		case 'left':
			return button.cursorMoveLeft();
		case 'up':
			return button.cursorMoveUp();
		case 'right':
			return button.cursorMoveRight();
		case 'down':
			return button.cursorMoveDown();
		case 'backspace':
			return button.deleteValue(index_x - 1, index_x);
		case 'delete':
			return button.deleteValue(index_x, index_x + 1);
		case 'space':
			if (data.allowSpace) {
				if (BTI.accent.code !== 0) {
					return button.addValue(BTI.accent.key);
				}
				return button.addValue(' ');
			};
			break;
		case 'home':
			return button.setCursorAt(0, index_y, shift);
		case 'end':
			return button.setCursorAt(line.length, index_y, shift);
		default:
			if (ctrl && !(alt && char !== originalChar)) return;
			if (button.acceptInput(k, shift, ctrl, alt)) {
				if (BTI.accent.code !== 0) { //Adding previously typed accents
					let isSpecial = k === '97' || k === '101' || k === '105' || k === '111' || k === '117' || //a, e, i, o, u
									k === '65' || k === '69'  || k === '73'  || k === '79'  || k === '85'  || //A, E, I, O, U
									(k === '89' && BTI.accent.key === '´') || //ý
									(k === '78' && BTI.accent.key === '~'); //ñ
					if (!isSpecial) { char = BTI.accent.key + char; };
				}
				return button.addValue(char);
			};
			break;
		}
	}
};

//----------------------------------------------------------------------------------------------
// Item List - Create
// * Creates a list of items from which it's possible to choose from
//----------------------------------------------------------------------------------------------
function Sprite_ItemList() {
	this.initialize.apply(this, arguments);
}

Sprite_ItemList.prototype = Object.create(SButton_Base.prototype);
Sprite_ItemList.prototype.constructor = Sprite_ItemList;

Object.defineProperty(Sprite_ItemList.prototype, 'fontSize', {
	get: function() {
		return this.bitmap.fontSize;
	},
	set: function(value) {
		if (this.bitmap.fontSize != value) {
			this.bitmap.fontSize = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'itemWidth', {
	get: function() {
		return this._itemWidth;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._itemWidth !== value) {
			this._itemWidth = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'itemHeight', {
	get: function() {
		return this._itemHeight;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._itemHeight !== value && value >= 0) {
			this._itemHeight = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'columns', {
	get: function() {
		return this._cols;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._cols !== value && value >= 0) {
			this._cols = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'rows', {
	get: function() {
		return this._rows;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._rows !== value && value >= 0) {
			this._rows = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'gap_x', {
	get: function() {
		return this._gap_col;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._gap_col !== value && value >= 0) {
			this._gap_col = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'gap_y', {
	get: function() {
		return this._gap_row;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._gap_row !== value && value >= 0) {
			this._gap_row = value;
			this.redraw();
		}
	},
	configurable: true
});

Object.defineProperty(Sprite_ItemList.prototype, 'scrollerWidth', {
	get: function() {
		return this._scroller_w;
	},
	set: function(value) {
		if (!isNaN(value = Number(value)) && this._scroller_w !== value && value >= 0) {
			this._scroller_w = value;
			this.redraw();
		}
	},
	configurable: true
});

//========================================
// Item List - Initialize

Sprite_ItemList.prototype.initialize = function(data, cols, rows) {
	data = data || {};
	this._items = [];
	this._cols = cols > 0 ? Number(cols) : 999;
	this._rows = rows > 0 ? Number(rows) : 999;
	SButton_Base.prototype.initialize.call(this, data);
	var ndata = this._data;
	ndata.listLimit = data.listLimit || 5;
	ndata.hoverColor = data.hoverColor || '#9696ff';
	ndata.itemHeight = data.itemHeight || (ndata.height - ndata.borderSize * 2) / ndata.listLimit;
	ndata.itemColors = data.itemColors || [];
	ndata.itemColors[0] = ndata.itemColors[0] || '#999999';
	ndata.itemColors[1] = ndata.itemColors[1] || '#555555';
	ndata.scrollColors = data.scrollColors || [];
	ndata.scrollColors[0] = ndata.scrollColors[0] || '#575757';
	ndata.scrollColors[1] = ndata.scrollColors[1] || '#353535';
	ndata.maxSelection = data.maxSelection > 0 ? data.maxSelection : 1;
	var borders_x = this.isScroll() ? ndata.borderSize : ndata.borderSize * 2;
	var scroller_w = this.isScroll() ? this._scroller_w : 0;
	this._itemWidth = Math.ceil((ndata.width - borders_x - scroller_w) / this.columns - this._gap_col * (this.columns - 1));
	this._itemHeight = Math.ceil(ndata.itemHeight);
};

Sprite_ItemList.prototype.initValues = function(data) {
	SButton_Base.prototype.initValues.call(this, data);
	this._scroller_w = 8;
	this._selectedIndexes = [];
	this._scrollX = 0;
	this._scrollY = 0;
	this._gap_row = 1;
	this._gap_col = 1;
	this._fixedTone = true;
};

Sprite_ItemList.prototype.initBitmaps = function() {
	this.bitmap = new Bitmap(this._data.width, this._data.height);
	this.bitmap.fontSize = this._data.fontSize;
	this.borders = new Sprite(new Bitmap(this._data.width, this._data.height));
	this.addChild(this.borders);
	this.initScroller();
};

Sprite_ItemList.prototype.initScroller = function() {
	var x = this.width - this._scroller_w;
	var scroll_h = this.height - this.borderSize * 2;
	this._scroller = new Sprite(new Bitmap(this._scroller_w, this.height));
	this._scroller.x = x;

	roller = new Sprite_Grabbable({desing:'round-rect', borderSize:0});
	roller.initBitmaps = function() {
		this.bitmap = new Bitmap(1, 1);
	};
	roller.drawMe = function(width, height, radius, color) {
		this.bitmap.drawRoundedRect(0, 0, width, height, radius, color);
	};
	roller.onMoved = function() {
		Sprite_Grabbable.prototype.onMoved.call(this);
		var gramps = this.parent.parent;
		gramps.setScrollY(this.y * this._tick);
	};
	roller.onRelease = function() {
		Sprite_Grabbable.prototype.onRelease.call(this);
		SceneManager._scene.selectButton(this.parent.parent, false);
	};
	roller._fixedTone = true;
	roller._tick = 0;
	this._scroller._roller = roller;
	this._scroller.addChild(this._scroller._roller);

	this.addChild(this._scroller);
};

//========================================
// Item List - Update

Sprite_ItemList.prototype.update = function() {
	SButton_Base.prototype.update.call(this);
	this.updateIndexSelection();
	this.updateMyTriggers();
};

Sprite_ItemList.prototype.updateMyTriggers = function() {
	var ctrl, shift;
	if (!this.isSelected()) return;
	if (Input.isTriggered('ok')) return this.onOkTriggered();
	if (this.isCancelled()) return this.onCancelled();

	ctrl = Input.isPressed('control');
	shift = Input.isPressed('shift');
	if (Input.isRepeated('up')) return this.selectItemAbove(ctrl, shift);
	if (Input.isRepeated('right')) return this.selectNextItem(ctrl, shift);
	if (Input.isRepeated('down')) return this.selectItemBeneath(ctrl, shift);
	if (Input.isRepeated('left')) return this.selectPreviousItem(ctrl, shift);
};

Sprite_ItemList.prototype.updateIndexSelection = function() {
	if (!this.isHovered()) return;
	if (!this.isMouseMoved()) return;
	var hover_index = this.getHoverIndex();
	this._lastHoverX = TouchInput._cX;
	this._lastHoverY = TouchInput._cY;
	this.hoverSelect(hover_index);
};

//========================================
// Item List - Draw

Sprite_ItemList.prototype.drawItemList = function() {
	if (this.width < 2) return;
	var bds = this.borderSize;
	var bds_x = this.isScroll() ? bds : bds * 2;
	var fontSize = this.fontSize;
	var lines = Math.ceil(this._items.length / this.columns);
	var list_w = this.width - bds_x;
	var list_h = lines * this.itemHeight + (lines - 1) * this._gap_row + bds - 1;//edit -1 teste
	this.resizeBitmap(list_w, list_h);
	this.bitmap.fillAll(this.backColor);

	var item;
	var x = 0, y = 0, row = 1, column = 1;
	var maxCols = this.columns;
	var scroller_w = this.isScroll() ? this._scroller.width : 0;
	var itemColors = this._data.itemColors;
	var color = itemColors[0];
	var textMaxWidth = Math.floor(this._itemWidth - this.textPadding() * 2);
	for (var i = 0; i < this._items.length; i++) {
		item = this._items[i];
		x = (this._itemWidth + this._gap_col) * (column - 1) + bds;
		y = (this._itemHeight + this._gap_row) * (row - 1) + bds;
		this.bitmap.clearRect(x, y, this._itemWidth, this.itemHeight);
		this.bitmap.fillRect(x, y, this._itemWidth, this.itemHeight, color);
		x += this.textPadding();
		this.drawItemName({name: item.text, iconIndex: item.iconIndex}, x, y, textMaxWidth, this.itemHeight);
		color = color === itemColors[0] ? itemColors[1] : itemColors[0];
		if (++column <= maxCols) continue;
		column = 1;
		color = ++row % 2 ? itemColors[0] : itemColors[1];
		if (row > 1000) {
			console.warn("The given list is too big! Button ID: '" + this.id + "'");
			break;
		}
	}
	this.drawScroller();
};

Sprite_ItemList.prototype.drawItemName = function(item, x, y, width, maxHeight) {
	width = width || 312;
	if (item) {
		var iconBoxWidth = 0;
		if (item.iconIndex > -2) {
			iconBoxWidth = Math.min(this.itemHeight - 4, Math.max(this.fontSize, Window_Base._iconWidth));
			let iconY = Math.floor(y + (maxHeight - iconBoxWidth)/2);
			this.drawIcon(item.iconIndex, x, iconY, iconBoxWidth);
		}
		this.bitmap.drawText(item.name, x + iconBoxWidth + 2, y, width - iconBoxWidth, maxHeight);
	}
};

Sprite_ItemList.prototype.drawIcon = function(iconIndex, x, y, width) {
	var bitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth;
	var ph = Window_Base._iconHeight;
	var sx = iconIndex % 16 * pw;
	var sy = Math.floor(iconIndex / 16) * ph;
	this.bitmap.blt(bitmap, sx, sy, pw, ph, x, y, width, width);
};

Sprite_ItemList.prototype.drawScroller = function() {
	if (!this.isScroll()) return;
	var width = this._scroller.width;
	var height = this.height;
	var radius = Math.floor(this._scroller.width / 2);
	var color = this._data.scrollColors[0];
	this._scroller.bitmap.drawRoundedRect(0, 0, width, height, radius, color);
	height = this._scroller._roller.height;
	color = this._data.scrollColors[1];
	this._scroller._roller.drawMe(width, height, radius, color);
};

Sprite_ItemList.prototype.redraw = function() {
	this.setColorTone([0, 0, 0, 0]);
	this.bitmap.clear();
	this.drawItemList();
};

Sprite_ItemList.prototype.redrawItem = function(index) {
	var item = this._items[index];
	if (!item) return;
	var color;
	var id = index + 1;
	var maxCols = this.columns
	var column = (id % maxCols) || maxCols;
	var line = Math.ceil(id / maxCols);
	var x = (this.itemWidth + this._gap_col) * (column - 1) + this.borderSize;
	var y = (this.itemHeight + this._gap_row) * (line - 1) + this.borderSize;
	var textMaxWidth = this.itemWidth - this.textPadding() * 2;
	var isItemHovered = this._hoverSelection === index;
	var itemColors = this._data.itemColors;
	if (isItemHovered) {
		color = this._data.hoverColor;
	} else if (this._selectedIndexes.contains(index)) {
		color = this._data.selectorColor;
	} else {
		let isColumnOdd = column % 2 !== 0;
		let isLineOdd = line % 2 !== 0;
		let isBothOdd = isLineOdd && isColumnOdd;
		let isNeitherOdd = !isLineOdd && !isColumnOdd;
		color = (isBothOdd || isNeitherOdd) ? itemColors[0] : itemColors[1];
	}
	this.bitmap.clearRect(x, y, this.itemWidth, this.itemHeight);
	this.bitmap.fillRect(x, y, this.itemWidth, this.itemHeight, color);
	x += this.textPadding();
	this.drawItemName({name: item.text, iconIndex: item.iconIndex}, x, y, textMaxWidth, this.itemHeight);
};

//========================================
// Item List - Hover

Sprite_ItemList.prototype.hoverSelect = function(index) {
	var isIndexAvailable = (index > -1 && index < this.items().length);
	var hoverIndex = isIndexAvailable ? index : -1;
	if (this._hoverSelection !== hoverIndex) {
		let oldHoverIndex = this._hoverSelection;
		this._hoverSelection = hoverIndex;
		this.redrawItem(this._hoverSelection);
		this.redrawItem(oldHoverIndex);
	}
};

Sprite_ItemList.prototype.getHoverIndex = function() {
	if (!this.isHovered()) return -1;
	if (this._items.length === 0) return -1;
	var tx = TouchInput._cX;

	var index = this.getOptionIndexOnXy(TouchInput._cX, TouchInput._cY);
	var maxIndex = this.items().length - 1;
	if (index < 0 || index > maxIndex) return -1;
	return index;
};


Sprite_ItemList.prototype.onMouseLeave = function() {
	SButton_Base.prototype.onMouseLeave.call(this);
	if (this._hoverSelection !== -1) {
		let hover = this._hoverSelection;
		this._hoverSelection = -1;
		this.redrawItem(hover);
	}
};

Sprite_ItemList.prototype.getOptionIndexOnXy = function(x, y) {
	var column, row;
	var items = this.items();
	if (!items.length) return -1;
	x = x - this.realX() + this._scrollX;
	y = y - this.realY() + this._scrollY;

	if (this.columns < 2) {
		column = 1;
	} else {
		let col_width = this.itemWidth + this._gap_col;
		if (x > this._cols * col_width - this._gap_col) return -1; //Column out of range
		if (x - Math.floor(x / col_width) * col_width > this.itemWidth) return -1; //Clicked on the gap
		column = Math.ceil(x / col_width) || 1;
	}

	if (this.rows < 2) {
		row = 1;
	} else {
		let row_width = this.itemHeight + this._gap_row;
		if (y > this._rows * row_width - this._gap_row) return -1; //Row out of range
		if (y - Math.floor(y / row_width) * row_width > this.itemHeight) return -1; //Clicked on the gap
		row = Math.ceil(y / row_width) || 1;
	}

	return this._cols * (row - 1) + column - 1;
};

Sprite_ItemList.prototype.isMouseOverScroller = function() {
	if (!this.isScroll()) return false;
	var tx = TouchInput._cX;
	var ty = TouchInput._cY;
	var x1 = this.realX.call(this._scroller);
	var x2 = x1 + this._scroller.width;
	var y1 = this.realY.call(this._scroller);
	var y2 = y1 + this._scroller.height;
	return tx >= x1 && tx < x2 && ty >= y1 && ty < y2;
};

Sprite_ItemList.prototype.isMouseMoved = function() {
	return this._lastHoverX != TouchInput._cX || this._lastHoverY != TouchInput._cY;
};

//========================================
// Item List - Items' Management

//Method - setItemList
// * Redraws the list with the given list of items (an array)
// * The array may contain the game objetcs (items, weapons and armors) or just strings
Sprite_ItemList.prototype.setItemList = function(list) {
	list = list || [];
	if (!Array.isArray(list)) {
		console.warn('The given list should be an array.')
		return;
	}
	var max = this.maxItems();
	this._items = [];
	for(var d = 0; d < list.length; d++) {
		if (list[d]) {
			if (list[d].name) {
				this._items.push({text: list[d].name, iconIndex: list[d].iconIndex}); //game objects
			} else {
				this._items.push({text: list[d], iconIndex: -2}); //just strings
			}
		}
		if (d + 1 > max) break;
	}
	this.redraw();
};

// Method - add
// * Adds an item to the list and redraws it
// String: text -> the item's text
// Number: iconIndex -> the index of the icon to be drawn before the text
// String: textColor -> you can use hexadecimal or css colors
// String: backColor -> you can use hexadecimal or css colors
// String: imageName -> the image to be drawn as the item's body
Sprite_ItemList.prototype.add = function(text, iconIndex, textColor, backColor, imageName) {
	if (this._items.length >= this.maxItems()) return;
	text = text || '';
	iconIndex = iconIndex || -2;
	textColor = textColor || '#ffffff';
	backColor = backColor || '#000000';
	imageName = imageName || '';
	this.addItem({text, textColor, backColor, imageName});
};

// Method - addItem
// * Adds an item to the list and redraws it
// Object: item -> {text, textColor, backColor, imageName}
Sprite_ItemList.prototype.addItem = function(item) {
	this._items.push(item);
	this.redraw();
};

Sprite_ItemList.prototype.items = function() {
	return this._items;
};

Sprite_ItemList.prototype.getSelectedItems = function() {
	var items = [];
	for (var i = 0; i < this._selectedIndexes.length; i++) {
		items.push(this.items()[this._selectedIndexes[i]].text);
	}
	return items;
};

Sprite_ItemList.prototype.deselectAllItems = function() {
	if (!this.isAnyItemSelected()) return;
	var selected = this._selectedIndexes.clone();
	this._selectedIndexes = [];
	for (var i = 0; i < selected.length; i++) {
		this.redrawItem(selected[i]);
	}
};

Sprite_ItemList.prototype.selectItem = function(index, ctrl) {
	if (Array.isArray(index)) {
		for (var i = 0; i < index.length; i++) {
			if (Array.isArray(index[i])) {
				continue;
			}
			this.selectItem(index[i], true);
		}
		return;
	}
	if (!(index > -1) || index >= this.items().length) return this.deselectAllItems();
	if (this._selectedIndexes.contains(index)) { //The item is already selected
		if (ctrl) {
			//Deselect this item
			this._selectedIndexes.splice(index, 1);
			this.redrawItem(index);
		} else if (this.isMultipleItemsSelected()) {
			//Deselect all selected items but this one
			this.deselectAllItems();
			this.selectItem(index);
		}
		this.checkDoubleClick(index);
	} else {
		if (this.isAnyItemSelected() && !ctrl) {
			this.deselectAllItems();
		}
		if (this._selectedIndexes.length < this._data.maxSelection) {
			this._selectedIndexes.push(index);
			this.redrawItem(index);
			this.focusItem(index);
			this.checkDoubleClick(index);			
		}
	}
};

Sprite_ItemList.prototype.checkDoubleClick = function(index) {
	var selection = { index:index, frame:Graphics.frameCount };
	if (!this._lastSelection) {
		return this._lastSelection = selection;
	}
	if (this._lastSelection.index !== index) {
		return this._lastSelection = selection;
	}
	var timespan = Graphics.frameCount - this._lastSelection.frame;
	if (timespan > DOUBLE_CLICK_INTERVAL) {
		return this._lastSelection = selection;
	}
	delete this._lastSelection;
	return this.onDoubleClick();
};

//Method - focusItem
// * Makes sure the item on the given index is visible for the user
Sprite_ItemList.prototype.focusItem = function(index) {
	if (!this.isScroll()) return;
	var item_row = this.getItemRow(index);
	var item_y = (this.itemHeight + this._gap_row) * (item_row - 1) + this.borderSize;
	if (this._scrollY > item_y) {
		this.setScrollY(item_y);
		this._scroller._roller.y = this._scrollY / this._scroller._roller._tick;
		return;
	}

	if (this._scrollY + this.height < item_y + this.itemHeight) {
		this.setScrollY(item_y - this.height + this.itemHeight);
		this._scroller._roller.y = this._scrollY / this._scroller._roller._tick;
		return;
	}
};

Sprite_ItemList.prototype.selectItemAbove = function(ctrl, shift) {
	var itemIndex, itemRow, itemCol, lastRow, lastCol;
	if (this.isEmpty()) return;
	if (!this.isAnyItemSelected()) return this.selectItem(this.items().length - 1);
	if (this.items().length == 1) return;
	if ((ctrl || shift) && this._selectedIndexes.length >= this._data.maxSelection) return;

	itemIndex = this._selectedIndexes.last();
	itemRow = this.getItemRow(itemIndex);
	itemCol = this.getItemCol(itemIndex);
	lastRow = this.lastRow();
	lastCol = this.lastCol();
	if (lastRow === 1) return; //This list has only one line
	if (itemRow === 1) { //Go to the last line
		return this.selectItem(this.items().length - lastCol + Math.min(itemCol, lastCol) - 1, ctrl || shift);
	}
	return this.selectItem(itemIndex - this.columns, ctrl || shift);
};

Sprite_ItemList.prototype.selectNextItem = function(ctrl, shift) {
	var itemIndex, lastIndex, nextIndex;
	if (this.isEmpty()) return;
	if (!this.isAnyItemSelected()) return this.selectItem(0);
	if (this.items().length == 1) return;
	if ((ctrl || shift) && this._selectedIndexes.length >= this._data.maxSelection) return;

	itemIndex = this._selectedIndexes.last();
	lastIndex = this.items().length - 1;
	nextIndex = lastIndex > itemIndex ? itemIndex + 1 : 0;
	return this.selectItem(nextIndex, ctrl || shift);
};

Sprite_ItemList.prototype.selectItemBeneath = function(ctrl, shift) {
	var itemIndex, itemRow, itemCol, lastRow, lastCol, select;
	if (this.isEmpty()) return;
	if (!this.isAnyItemSelected()) return this.selectItem(0);
	if ((ctrl || shift) && this._selectedIndexes.length >= this._data.maxSelection) return;

	lastRow = this.lastRow();
	if (lastRow === 1) return; //This list has only one line
	lastCol = this.lastCol();
	itemIndex = this._selectedIndexes.last();
	itemRow = this.getItemRow(itemIndex);
	itemCol = this.getItemCol(itemIndex);
	if (itemRow === lastRow) return this.selectItem(itemCol - 1, ctrl || shift); //Go to the first line
	return this.selectItem(Math.min(this.items().length - 1, itemIndex + this.columns), ctrl || shift);
};

Sprite_ItemList.prototype.selectPreviousItem = function(ctrl, shift) {
	var itemIndex, previousIndex;
	if (this.isEmpty()) return;
	if (!this.isAnyItemSelected()) return this.selectItem(this.items().length - 1);
	if (this.items().length == 1) return;
	if ((ctrl || shift) && this._selectedIndexes.length >= this._data.maxSelection) return;

	itemIndex = this._selectedIndexes.last();
	previousIndex = itemIndex > 0 ? itemIndex - 1 : this.items().length - 1;
	return this.selectItem(previousIndex, ctrl || shift);
};

//========================================
// Item List - Resize

Sprite_ItemList.prototype.resize = function(width, height) {
	this.width = width;
	this.height = height;
};

Sprite_ItemList.prototype.resizeBitmap = function(width, height) {
	var isSizeChanged = this.bitmap.width === width || this.bitmap.height === height;
	var isScrollerSizeChanged =  this._scroller.width === this._scroller_w;
	if (!isSizeChanged && !isScrollerSizeChanged) return;
	var borders_x, scroller_w;
	var roller = this._scroller._roller;
	var old_width = this.width;
	var old_height = this.height;
	var fontSize = this.bitmap ? this.bitmap.fontSize : 28;
	this.bitmap = new Bitmap(width, height);
	this.bitmap.fontSize = fontSize;
	this.width = old_width;
	this.height = old_height;
	if (this.isScroll()) {
		scroller_w = this._scroller_w;
		borders_x = this._data.borderSize;
		let base_height = this.height - this.borderSize * 2;
		let roller_w = scroller_w;
		let roller_h = Math.floor(base_height * base_height / this.bitmap.height);
		let limit_y = this.height - roller_h;
		roller.bitmap = new Bitmap(roller_w, roller_h);
		roller.setDragLimits(0, 0, 0, limit_y);
		roller._tick = (this.bitmap.height - this.height + this.borderSize) / (this.height - roller_h);
		if (this._scroller.width !== scroller_w) {
			this._scroller.bitmap.resize(scroller_w, this._scroller.height);
			this._scroller.width = scroller_w;
			this._scroller.x = this.width - scroller_w;
		}
	} else {
		borders_x = this._data.borderSize * 2;
		scroller_w = 0;
		roller.bitmap.clear();
	}
	this._itemWidth = Math.ceil((this._data.width - borders_x - scroller_w) / this.columns - this._gap_col * (this.columns - 1));
	roller.y = 0;
	this.setScrollY(0);
};

//========================================
// Item List - Scroll

Sprite_ItemList.prototype.isScroll = function() {
	return this.height < this.bitmap.height;
};

Sprite_ItemList.prototype.setScrollY = function(y) {
	this._frame.y = y;
	this._scrollY = y;
	this._refresh();
};

//========================================
// Item List - Others

Sprite_ItemList.prototype.getIndexByString = function(string) {
	var items = this.items();
	for (var i = 0; i < items.length; i++) {
		if (items[i].text == string) {
			return i;
		}
	}
	return -1;
};

Sprite_ItemList.prototype.onOkTriggered = function() {};

Sprite_ItemList.prototype.onCancelled = function() {
	this.deselectAllItems()
};

Sprite_ItemList.prototype.isCancelled = function() {
	return Input.isTriggered('cancel') || TouchInput.isCancelled();
};

Sprite_ItemList.prototype.textPadding = function() {
	return 4;
};

Sprite_ItemList.prototype.maxItems = function() {
	return this.columns * this.rows;
};

Sprite_ItemList.prototype.isEmpty = function() {
	return !this.items().length;
};

Sprite_ItemList.prototype.isAnyItemSelected = function() {
	return !!this._selectedIndexes.length;
};

Sprite_ItemList.prototype.isMultipleItemsSelected = function() {
	return this._selectedIndexes.length > 1;
};

Sprite_ItemList.prototype.getItemCol = function (index) {
	if (!(index > 0)) return 1;
	return ((index + 1) % this.columns) || this.columns;
};

Sprite_ItemList.prototype.getItemRow = function(index) {
	if (!(index > 0)) return 1;
	return Math.ceil((index + 1) / this.columns);
};

Sprite_ItemList.prototype.lastCol = function() {
	return this.getItemCol(this.items().length - 1);
};

Sprite_ItemList.prototype.lastRow = function() {
	return this.getItemRow(this.items().length - 1);
};

Sprite_ItemList.prototype.setGap = function(colGap, rowGap) {
	this._gap_col = colGap == null ? 0 : colGap;
	this._gap_row = rowGap == null ? 0 : rowGap;
	this.redraw();
};

Sprite_ItemList.prototype.onSelect = function(touch) {
	SButton_Base.prototype.onSelect.call(this, touch);
	if (touch != null && !touch) return;
	var ctrl = Input.isPressed('control');
	var selected = this.getOptionIndexOnXy(TouchInput._x, TouchInput._y);
	this.selectItem(selected, ctrl);

};

Sprite_ItemList.prototype.onReselect = function() {
	SButton_Base.prototype.onReselect.call(this);
	var ctrl = Input.isPressed('control');
	var selected = this.getOptionIndexOnXy(TouchInput._x, TouchInput._y);
	this.selectItem(selected, ctrl);
};


Sprite_ItemList.prototype.onDoubleClick = function(index) {
	console.log('onDoubleClick')
};

//==========================================================================================
// Sort Option Sprite
//==========================================================================================
function Sort_Option() {
	this.initialize.apply(this, arguments);
}

Sort_Option.prototype = Object.create(SButton_Select.prototype);
Sort_Option.prototype.constructor = Sort_Option;

Sort_Option.prototype.initialize = function(data) {
	SButton_Select.prototype.initialize.call(this, data);
	console.log(data)
};

//------------------------------------------------------------------------------------------
// Sort Option - Update

Sort_Option.prototype.update = function() {
	var parentFocused = this._parentFocused;
	SButton_Select.prototype.update.call(this);
	this.updateOpenTrigger(parentFocused);
};

Sort_Option.prototype.initBitmaps = function() {
	var settings = $dataAchievsMenuSets.SortOption;
	var width = eval(settings.width);
	var height = eval(settings.height);
	this.bitmap = new Bitmap(width, height);
	this.txtChild = new Sprite(new Bitmap(width, height));
	this.borders = new Sprite(new Bitmap(width, height));
	this.addChild(this.txtChild);
	this.addChild(this.borders);
	this.bitmap.fontFace = this.fontFace;
	this.bitmap.fontSize = this.fontSize;
};

Sort_Option.prototype.updateOpenTrigger = function(parentFocused) {
	if (this.visible && Input.isTriggered('shift') && !parentFocused) {
		if (this._data.open) {
			this._options.close();
			var itemWindow = SceneManager._scene._itemWindow;
			if (itemWindow) {
				itemWindow.easyRefresh();
				itemWindow.activate();
			}
		} else {
			this.onClick();
		}
	}
};

//------------------------------------------------------------------------------------------
// Sort Option - Refresh

Sort_Option.prototype.refresh = function() {};

//------------------------------------------------------------------------------------------
// Sort Option - Settings

Sort_Option.prototype.defineSetting = function(parameter, value, refresh) {
	SMO.AM.defineWindowSetting.call(this, 'SortOption', parameter, value, refresh);
};

Sort_Option.prototype.onResize = function() {
	this.initBitmaps();
	this.redraw(true);
};

//------------------------------------------------------------------------------------------
// Sort Option - On Action

Sort_Option.prototype.onClickSuccess = function() {
	var scene = SceneManager._scene;
	if (scene.isEditing()) {
		this._preventClickSE = true;
		this._preventClickBlink = true;
		return;
	}
	SButton_Select.prototype.onClickSuccess.call(this);
	if (scene._itemWindow) {
		scene._itemWindow.deactivate();
	}
};

Sort_Option.prototype.onOptionChange = function(values, indexes) {
	SButton_Select.prototype.onOptionChange.call(this, values[0], indexes[0]);
	var itemWindow = SceneManager._scene._itemWindow;
	if (itemWindow) {
		$gameSystem.achievs.sortType = indexes[0];
		itemWindow._sortType = indexes[0];
		itemWindow.refresh();
		itemWindow.activate();
	}
};

Sort_Option.prototype.onOptionKeep = function() {
	SButton_Select.prototype.onOptionKeep.call(this);
	var itemWindow = SceneManager._scene._itemWindow;
	if (itemWindow) {
		itemWindow.easyRefresh();
		itemWindow.activate();
	}
};

//==========================================================================================
// Achievenator
//==========================================================================================
function Achievements_Editor() {
	this.initialize.apply(this, arguments);
}

Achievements_Editor.prototype = Object.create(Sprite_Grabbable.prototype);
Achievements_Editor.prototype.constructor = Achievements_Editor;

Achievements_Editor.prototype.initialize = function() {
	var width = 200;
	var height = 250;
	var Data = {
		x: Math.floor((Graphics.width - width) / 2),
		y: Math.floor((Graphics.height - height) / 2),
		width: width,
		height: height
	};
	Sprite_Grabbable.prototype.initialize.call(this, Data);
	//Initial values
	this._selectedWindow = null;
	this._undoData = [];
	this._redoData = [];
	this._page = '';
	this._dataName = '';
	this._pageStack = [];
	this._fixedTone = true;

	this.createButtons();
	this.callPage();
	this.setDragLimits();
	this.getBackgroundImages();
	this.createBackup();
};

Achievements_Editor.prototype.onReady = function() {
	this.drawMe();
};

Achievements_Editor.prototype.createBackup = function() {
	this._backup = JSON.stringify($dataAchievsMenuSets);
};

Achievements_Editor.prototype.loadBackup = function() {
	$dataAchievsMenuSets = JSON.parse(this._backup);
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Update

Achievements_Editor.prototype.update = function() {
	Sprite_Grabbable.prototype.update.call(this);
	if (!this.updateWarning()) {
		this.updateTextInputButton();
		this.updateShortcuts();
		this.updateImagesNames();
	}
};

Achievements_Editor.prototype.updateTextInputButton = function() {
	var Button = SceneManager._scene._textInputButton;
	if (Button.visible && Input.isTriggered('cancel')) {
		var Scene = SceneManager._scene;
		Scene.setSButtonsState('on');
		Scene._darkTone.visible = false;
		Scene._okButton.visible = false;
		Scene._cancelButton.visible = false;
		Button.visible = false;
	}
};

Achievements_Editor.prototype.updateWarning = function() {
	var scene = SceneManager._scene;
	var warning = scene._warning;
	if (!warning) return false;
	if (warning.visible) {
		if (Input.isTriggered('ok')) {
			scene.onWarnOk();
		} else if (Input.isTriggered('cancel')) {
			this._warnClosing = true;
			scene.onWarnCancel();
		}
	}
	return warning.visible;
};

Achievements_Editor.prototype.updateShortcuts = function() {
	if (!this.visible) return;
	if (SceneManager._scene.selectedButton()) return;
	if (Input.isPressed('control')) {
		if (Input.isRepeated('z')) {
			this.undoLastAction();
		} else if (Input.isRepeated('y')) {
			this.redoLastAction();
		}
	} else if (Input.isTriggered('cancel') && !this._warnClosing) {
		if (this._page === 'home') {
			this.hide();
		} else {
			this.popPage();
		}
	}
	this._warnClosing = false;
};

Achievements_Editor.prototype.updateImagesNames = function() {
	if (this.isRefreshingImgNames()) {
		if (SMO.AM.imagesNamesResult.length > 0) {
			this._selectBackground.setList(SMO.AM.imagesNamesResult);
			this._refreshingImgNames = false;
		}
	}
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Refresh

Achievements_Editor.prototype.refresh = function() {
	var scene = SceneManager._scene;
	if (scene.isEditing()) {
		this.redraw();
	} else {
		this.hide();
	}
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Draw

Achievements_Editor.prototype.redraw = function() {
	this.drawPage();
};

Achievements_Editor.prototype.drawBackground = function(color) {
	var width = this.bitmap.width;
	var height = this.bitmap.height;
	var backColor = color || 'rgba(0,0,0,1)';
	var borderColor = '#ffffff';

	//Window's body
	this.bitmap.drawRoundedRect(0, 0, width, height, 10, borderColor);
	this.bitmap.drawRoundedRect(2, 2, width - 4, height - 4, 8, backColor);
};

Achievements_Editor.prototype.drawSelectedWindowInfo = function(w) {//aqui
	var url = sw._windowskin ? sw._windowskin._url : null;
	var windowSkin = url ? url.substr(url.lastIndexOf('/') + 1) : 'Unavailable';
	y = y1 + gap_y * 3 + gap_y2;
	//this.drawText('Skin: ' + windowSkin, x2, y, this.width - x2 * 2, 15, 'center');

	var fontFace = sw.contents ? sw.contents.fontFace : sw.bitmap.fontFace;
	if (Imported.YEP_MessageCore && fontFace) {
		fontFace = fontFace.split(',')[0];
	}
	y = y1 + gap_y * 4 + gap_y2;
	//this.drawText('Font Face: ' + fontFace, x2, y, this.width - x2 * 2, 15, 'center');
};

Achievements_Editor.prototype.redrawWindowInfo = function() {
	var sw = this._selectedWindow;
	if (!sw) return;
	var Button = this._resizeButton;
	var data = Button._data;
	var txt_bmp = Button.txtChild.bitmap;
	txt_bmp.clear();
	txt_bmp.fontSize = data.fontSize;
	txt_bmp.textColor = data.textColor;
	var maxWidth = Math.ceil((Button.txtChild.width - data.borderSize * 2) / 2);
	var maxHeight = data.fontSize;

	//Drawing X
	var x = data.borderSize + 2;
	var y = data.borderSize + 2;
	txt_bmp.drawText('X:' + sw.x, x, y, maxWidth, maxHeight, 'left');

	//Drawing Y
	x = data.borderSize - 2 + maxWidth;
	y = data.borderSize + 2;
	txt_bmp.drawText('Y:' + sw.y, x, y, maxWidth, maxHeight, 'right');

	//Drawing width
	x = data.borderSize + 2;
	y = Button.height - data.borderSize - data.fontSize - 2;
	txt_bmp.drawText('W:' + sw.width, x, y, maxWidth, maxHeight, 'left');

	//Drawing height
	x = data.borderSize - 2 + maxWidth;
	y = Button.height - data.borderSize - data.fontSize - 2;
	txt_bmp.drawText('H:' + sw.height, x, y, maxWidth, maxHeight, 'right');
};

Achievements_Editor.prototype.drawText = function(text, x, y, maxWidth, maxHeight, align) {
	this.txtChild.bitmap.drawText(text, x, y, maxWidth, maxHeight, align);
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Page Settings

Achievements_Editor.prototype.editAchievs = function() {
	this.callPage('achiev');
};

Achievements_Editor.prototype.editCategories = function() {
	this.callPage('cat');
};

Achievements_Editor.prototype.editMenu = function() {
	this.callPage('menu');
};

Achievements_Editor.prototype.onResize = function() {
};

Achievements_Editor.prototype.popPage = function() {
	var index = this._pageStack.length - 2;
	var nextPage = this._pageStack[index] || 'home';
	this.callPage(nextPage);
};

//Method: "callPage"
// * Deals with the page stack, removes buttons from the previous page and loads the next page
Achievements_Editor.prototype.callPage = function(pageName) {
	pageName = this.isProperPage(pageName) ? pageName : 'home';
	if (pageName === this._page) return;

	//Page stack
	var stackIndex = this._pageStack.indexOf(pageName);
	if (stackIndex > -1) {
		//This page already exists on the stack -> remove it and all others above it
		this._pageStack.splice(stackIndex, this._pageStack.length - stackIndex);
	}
	//Adding the page to the stack
	this._pageStack.push(pageName);

	//Preparing to recreate the page
	var scene = SceneManager._scene;
	this._page = pageName;
	if (this.children.length > 1) {
		//Removing all the page's sprites, except for txtChild
		this.removeChildren(1);
	}
	this.selectWindow(null);

	this.loadPage();
};

//Method: "loadPage"
// * Adds the buttons and draw the next page
Achievements_Editor.prototype.loadPage = function() {
	//Buttons that all pages have
	this.addChild(this._closeButton);
	this.addChild(this._saveButton);

	if (this._page !== 'home') {
		//Buttons to show when not at home
		this.addChild(this._backButton);
		this.addChild(this._undoButton);
		this.addChild(this._redoButton);
	}

	//Specific buttons
	switch(this._page) {
	case 'achiev': //Edit Achievements
		this._dataName = 'Achievements';
		break;
	case 'cat': //Edit Categories
		this._dataName = 'Categories';
		break;
	case 'menu': //Edit Menu
		this.addChild(this._selectBackground);
		this.addChild(this._selectWButton);
		break;
	default: //Home
		this._dataName = '';
		this.addChild(this._achievsButton);
		this.addChild(this._catButton);
		this.addChild(this._menuButton);
		this.addChild(this._loadDefaultButton);
		break;
	}

	//Drawing background and texts
	this.drawPage();
};

Achievements_Editor.prototype.drawPage = function() {
	var title = '';
	var txt_bmp = this.txtChild.bitmap;
	txt_bmp.clear();
	txt_bmp.fontSize = 15;
	txt_bmp.textColor = '#ffffff';
	var scene = SceneManager._scene;
	this.bitmap.clear();
	this.drawBackground();
	switch(this._page) {
	case 'achiev':
		title = 'ACHIEVEMENTS';
		break;
	case 'cat':
		title = 'Categories';
		break;
	case 'menu':
		title = 'MENU';
		txt_bmp.fillRect(28, 28, this.width - 56, 50, '#555555');
		this.drawText('Background', 0, 30, this.width, 15, 'center');
		txt_bmp.fillRect(28, 80, this.width - 56, 50, '#444444');
		this.drawText('Windows', 0, 82, this.width, 15, 'center');
		break;
	default: // home
		title = 'ACHIEVENATOR';
		this.drawText('OPTIONS', 0, 32, this.width, 15, 'center');

		//Background box
		//this.bitmap.gradientFillRect(10, 58, 180, 183, '#444444', '#222222', true);
		break;
	}

	//Drawing page's title
	this.drawText(title, 0, 8, this.width, 15, 'center');
	//Drawing line under title
	txt_bmp.fillRect(51, 24, 98, 1, '#ffffff');
};

Achievements_Editor.prototype.createButtons = function() {
	//EMOJIS FROM: EmojiTerra (emojiterra.com)
	//Close
	var closeButton = {
		id: 'closeButton',
		design: 'round-rect',
		text: '❌',
		x: this.width - 23,
		y: 3,
		width: 20,
		height: 20,
		textAlign: 'center',
		fontSize: 12,
		textColor: 'rgba(180,50,50,1)',
		borderColor: 'rgba(150,0,0,1)',
		backColor: '#ef0000',
		onClick: this.hide.bind(this)
	};
	this._closeButton = new SButton_Confirm(closeButton);
	this._closeButton.playClickSE = function() {
		if (!this.parent.isSaveEnabled()) {
			SoundManager.playCancel();
		}
	};

	//Edit achievements
	var achievsButton = {
		id: 'achievs',
		design: 'round-rect',
		text: 'Achievements',
		description: 'Start editing your achievemens',
		x: 25,
		y: 55,
		width: 150,
		height: 23,
		textAlign: 'center',
		fontSize: 14,
		backColor: '#009900',
		onClick: this.editAchievs.bind(this)
	};
	this._achievsButton = new SButton_Confirm(achievsButton);

	//Edit Categories
	var catButton = {
		id: 'cat',
		design: 'round-rect',
		text: 'Categories',
		description: 'Comming Soon',
		//description: 'Change your categories and trophies',
		x: 25,
		y: achievsButton.y + achievsButton.height + 8,
		width: 150,
		height: 23,
		textAlign: 'center',
		fontSize: 14,
		backColor: '#999999',
		enabled: false,
		onClick: this.editCategories.bind(this)
	};
	this._catButton = new SButton_Confirm(catButton);

	//Edit Menu
	var menuButton = {
		id: 'menu',
		design: 'round-rect',
		text: 'Menu',
		description: 'Comming Soon',
		//description: 'Toy with your menu',
		x: 25,
		y: catButton.y + catButton.height + 8,
		width: 150,
		height: 23,
		textAlign: 'center',
		fontSize: 14,
		backColor: '#999999',
		enabled: false,
		onClick: this.editMenu.bind(this)
	};
	this._menuButton = new SButton_Confirm(menuButton);

	//Back (pop page)
	var backButton = {
		id: 'backButton',
		design: 'round-rect',
		text: '↩',
		description: 'Back to previous page',
		x: 4,
		y: 4,
		width: 20,
		height: 20,
		textAlign: 'center',
		borderSize: 1,
		fontSize: 14,
		backColor: '#111111',
		onClick: this.popPage.bind(this)
	};
	this._backButton = new SButton_Confirm(backButton);

	//Undo
	var undoButton = {
		id: 'undoButton',
		design: 'round-rect',
		text: '↻',
		description: 'UNDO your last action [Ctrl + Z]',
		x: 4,
		y: backButton.y + backButton.height + 1,
		width: 20,
		height: 20,
		fontSize: 14,
		textAlign: 'center',
		borderSize: 1,
		backColor: '#222222',
		enabled: false,
		enableFunc: this.isUndoEnabled.bind(this),
		onClick: this.undoLastAction.bind(this)
	};
	this._undoButton = new SButton_Confirm(undoButton);
	
	//Redo
	var redoButton = {
		id: 'redoButton',
		design: 'round-rect',
		text: '↺',
		description: "REDO your last action [Ctrl + Y]",
		x: 4,
		y: undoButton.y + undoButton.height + 1,
		width: 20,
		height: 20,
		fontSize: 14,
		textAlign: 'center',
		borderSize: 1,
		backColor: '#222222',
		enabled: false,
		enableFunc: this.isRedoEnabled.bind(this),
		onClick: this.redoLastAction.bind(this)
	};
	this._redoButton = new SButton_Confirm(redoButton);

	//Save
	var saveButton = {
		id: 'saveButton',
		design: 'round-rect',
		text: '💾',
		description: 'Save your changes (OFF)',
		x: 5,
		y: this.height - 25,
		width: 20,
		height: 20,
		borderSize: 1,
		borderColor: '#002200',
		textAlign: 'center',
		textOffset: [1, 0],
		fontSize: 15,
		backColor: '#999999',
		disabledTone: -20,
		enabled: false,
		enableFunc: this.isSaveEnabled.bind(this),
		onClick: this.saveChanges.bind(this)
	};
	this._saveButton = new SButton_Confirm(saveButton);
	this._saveButton.onEnable = function() {
		this.description = 'Save your changes';
		this.backColor = '#00ff00';
	};
	this._saveButton.onDisable = function() {
		this.description = 'Save your changes (OFF)';
		this.backColor = '#999999';
	};
	this._saveButton.update = function() {
		SButton_Confirm.prototype.update.call(this);
		var tone = this._colorTone[0];
		if (tone !== this._data.disabledTone) {
			//console.log(tone, 'aqui')
		}
	};

	//Load Default
	var loadDefault = {
		id: 'loadDefault',
		design: 'round-rect',
		text: '❗',
		description: "DEFAULT\nLoads the default settings\nfrom the plugin's parameters",
		x: this.width - 25,
		y: this.height - 25,
		width: 20,
		height: 20,
		borderSize: 1,
		borderColor: '#ffffff',
		textAlign: 'center',
		textOffset: [1, 0],
		fontSize: 12,
		backColor: '#220000',
		onClick: this.loadDefaultSettings.bind(this)
	};
	this._loadDefaultButton = new SButton_Confirm(loadDefault);
	this._loadDefaultButton.playClickSE = function() {};

	//Select background
	var selectBackground = {
		id: 'selectBackground',
		text: 'BACKGROUND',
		value: SMO.AM.Images.menu,
		description: 'Choose an image as background\nfor the menu',
		fontSize: 13,
		x: 30,
		y: 50,
		width: 140,
		height: 25,
		textAlign: 'center',
		borderSize: 1,
		backColor: '#000044',
		options: SMO.AM.imagesNamesResult,
		listLimit: 8,
		onOptChange: this.onChangeBackground.bind(this)
	};
	this._selectBackground = new SButton_Select(selectBackground);

	//Resize/reposition button
	var resizeButton = {
		id: 'resizeButton',
		description: 'Reposition/Resize\nW = Width\nH = Height',
		x: 30,
		y: 30,
		width: 140,
		height: 47,
		borderSize: 1,
		backColor: '#2222a5',
		fontSize: 18,
		onClick: this.onResize.bind(this)
	};
	this._resizeButton = new SButton_Confirm(resizeButton);

	//Font settings button
	var fontButton = {
		id: 'fontButton',
		text: '🔠 Font  ',
		description: 'Choose the font size/face',
		textAlign: 'center',
		textOffset: [0, -1],
		x: 30,
		y: 80,
		width: 140,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		backColor: '#2222a5'
	};
	this._fontButton = new SButton_Confirm(fontButton);
	this._fontButton.setLine = function(value) {
		var line = value || 0;
		this.y = 80 + line * 28;
	};

	//Texts
	var textsButton = {
		id: 'textsButton',
		text: '📄 Texts  ',
		description: 'Edit your texts',
		textAlign: 'center',
		textOffset: [0, -1],
		x: 30,
		y: 108,
		width: 140,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		backColor: '#2222a5'
	};
	this._textsButton = new SButton_Confirm(textsButton);
	this._textsButton.setLine = function(value) {
		var line = value || 0;
		this.y = 80 + line * 28;
	};

	//Appearence
	var visualButton = {
		id: 'visualButton',
		text: '👁️ Visual  ',
		description: "Change the window's skin/opacity",
		textAlign: 'center',
		textOffset: [0, -1],
		x: 30,
		y: 136,
		width: 140,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		backColor: '#2222a5'
	};
	this._visualButton = new SButton_Confirm(visualButton);
	this._visualButton.setLine = function(value) {
		var line = value || 0;
		this.y = 80 + line * 28;
	};

	var colorsButton = {
		id: 'colorsButton',
		text: '🎨 Colors  ',
		description: "Edit the window's colors",
		textAlign: 'center',
		textOffset: [0, -1],
		x: 30,
		y: 164,
		width: 140,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		backColor: ['#ff0000', '#00ff00', '#0000ff']
	};
	this._colorsButton = new SButton_Confirm(colorsButton);
	this._colorsButton.setLine = function(value) {
		var line = value || 0;
		this.y = 80 + line * 28;
	};

	var animButton = {
		id: 'animButton',
		text: '😂 Animation  ',
		description: "Create an animation for this window",
		textAlign: 'center',
		textOffset: [0, -1],
		x: 30,
		y: 192,
		width: 140,
		height: 25,
		fontSize: 15,
		borderSize: 1,
		backColor: '#22a522'
	};
	this._animButton = new SButton_Confirm(animButton);
	this._animButton.update = function() {
		SButton_Confirm.prototype.update.call(this);
		this.updateTextAnimation();
	};
	this._animButton.updateTextAnimation = function() {
		if (!this.visible) return;
		if (!this.isStateActive()) return;
		if (!this._hovered) return;
		this._animCount = this._animCount || 0;
		if (++this._animCount <= 25) return;
		let text1 = '😂 Animation  ';
		let text2 = '🤣 Animation  ';
		this.text = this.text !== text1 ? text1 : text2;
		this._animCount = 0;
	};
	this._animButton.onMouseLeave = function() {
		SButton_Confirm.prototype.onMouseLeave.call(this);
		this.text = '😂 Animation  ';
		this._animCount = 0;
	};
	this._animButton.setLine = function(value) {
		var line = value || 0;
		this.y = 80 + line * 28;
	};

	var refreshButton = {
		id: 'refreshButton',
		design: 'round-rect',
		text: 'Refresh',
		textAlign: 'center',
		x: 20,
		y: 215,
		width: 50,
		height: 20,
		fontSize: 15,
		borderColor: '#009900',
		backColor: '#007700',
		onClick: this.onRefreshCommand.bind(this)
	};
	this._refreshButton = new SButton_Confirm(refreshButton);

	var moreButton = {
		id: 'moreButton',
		design: 'round-rect',
		text: 'More',
		textAlign: 'center',
		x: 130,
		y: 215,
		width: 50,
		height: 20,
		fontSize: 15,
		borderColor: '#999900',
		backColor: '#777700',
		onClick: this.onMoreCommand.bind(this)
	};
	this._moreButton = new SButton_Confirm(moreButton);

	//Select window
	var windowOptions = ['None', 'Achievements', 'Achievs Info', 'Categories', 'Trophies', 'Menu Title'];
	if ($dataAchievsMenuSets.SortOption.enabled) {
		windowOptions.push('Sort Option');
	}
	if ($dataAchievsMenuSets.PopUp.enabled) {
		windowOptions.push('Pop Up');
	};
	var selectWButton = {
		id: 'selectWindow',
		text: 'Select window',
		description: 'Select a window to start editing',
		fontSize: 15,
		x: 30,
		y: 102,
		width: 140,
		height: 30,
		textOffset: [4, 0],
		borderSize: 1,
		backColor: '#000022',
		options: windowOptions,
		listLimit: 8,
		onOptChange: this.onOptionChange.bind(this)
	};
	this._selectWButton = new SButton_Select(selectWButton);
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Warning

Achievements_Editor.prototype.closeWarning = function() {
	var Scene = SceneManager._scene;
	if (!Scene._warning) return;
	Scene._warning.visible = false;
	Scene._darkTone.visible = false;
	Scene._okButton.visible = false;
	Scene._continueButton.visible = false;
	Scene._cancelButton.visible = false;
	Scene.setSButtonsState('on');
};

Achievements_Editor.prototype.showWarning = function(message) {
	if (!message) return;
	if (message.type === 'error') {
		SoundManager.playBuzzer();
	} else {
		SoundManager.playEvasion();
	}

	//Show editor
	if (!this.visible) {
		this.show();
	}
	
	var Scene = SceneManager._scene;
	var warning = Scene._warning;
	var darkTone = Scene._darkTone;
	message.text = message.text || '';
	message.title = message.title || '';
	message.type = message.type || '';
	message.id = message.id || '';
	Scene._okButton.visible = true;
	Scene._okButton.refreshPosition('warning');
	Scene._cancelButton.visible = true;
	Scene._cancelButton.refreshPosition('warning');
	Scene._continueButton.visible = message.id === 'save';

	if (message.id != warning._msgId) {
		warning._msgId = message.id;
		var text = message.text;
		var title = message.title;
		var type = message.type;

		var titleHeight = 25;
		var lineHeight = 16;
		var desc_x = 16;
		var maxWidth = warning.txtChild.width - desc_x * 2;
		text = text.replace(/\n/g, '');
		text = SMO.AM.wrapText(text, maxWidth, lineHeight, true);
		var lines = text.split('\n');
		var width = warning.txtChild.width;
		var height = warning.txtChild.height;

		var bitmap = warning.txtChild.bitmap;
		bitmap.clear();

		//Drawing message's title
		var color = type === 'error' ? '#ff0000' : type === 'warn' ? '#ffff00' : '#ffffff';
		bitmap.textColor = color;
		bitmap.fontSize = titleHeight;
		bitmap.drawText(title, 0, 10, width, titleHeight, 'center');

		//Drawing message's text
		bitmap.fontSize = lineHeight;
		for (var i = 0; i < lines.length; i++) {
			var line_y = 16 + titleHeight + lineHeight * i;
			var line_w = width - desc_x * 2;
			bitmap.drawText(lines[i], desc_x, line_y, line_w, lineHeight + 4, 'left');
		}

		Scene._okButton.text = message.id === 'save' ? 'Save' : 'OK';
	}
	Scene.setSButtonsState('off');
	darkTone.visible = true;
	warning.visible = true;
};

//------------------------------------------------------------------------------------------
// Achievements Editor - On Action

Achievements_Editor.prototype.onRefreshCommand = function() {
	console.log('refresh command');//edit
};

Achievements_Editor.prototype.onMoreCommand = function() {
	console.log('more command');
};

Achievements_Editor.prototype.saveChanges = function() {
	DataManager.saveAchievsMenu();
	this._redoData = [];
	this._undoData = [];
};

Achievements_Editor.prototype.onOptionChange = function(values, indexes) {
	var value = values[0];
	var index = indexes[0];
	//['None', 'Achievements', 'Achievs Info', 'Categories', 'Trophies', 'Menu Title']
	var scene = SceneManager._scene;
	switch(value) {
	case "Achievements":
		return this.selectWindow(scene._itemWindow, 'Achievements');
	case "Achievs Info":
		scene._infoWindow.visible = true;
		return this.selectWindow(scene._infoWindow, 'AchievsInfo');
	case "Categories":
		return this.selectWindow(scene._itemWindow, 'Categories');
	case "Trophies":
		return this.selectWindow(scene._trophiesWindow, 'Trophies');
	case "Menu Title":
		return this.selectWindow(scene._titleWindow, 'SceneName');
	case "Pop Up":
		var index = this._popUpAchievId > -1 ? this._popUpAchievId : Math.randomInt(SMO.AM.DataAchievements.length);
		var achiev = SMO.AM.DataAchievements[index] || SMO.AM.EditorAchievement;
		scene._achievsPopUp.drawMe(achiev.id);
		scene._achievsPopUp.opacity = 255;
		scene._achievsPopUp._timer = 180;
		this._popUpAchievId = index;
		return this.selectWindow(scene._achievsPopUp, 'PopUp');
	case "Sort Option":
		scene._sortOption.visible = true;
		return this.selectWindow(scene._sortOption, 'SortOption');
	default:
		return this.selectWindow(null);
	}
};

Achievements_Editor.prototype.onChangeBackground = function(values, indexes) {
	SceneManager._scene._backgroundSprite.bitmap = ImageManager.loadAchievement(values[0]);
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Undo

Achievements_Editor.prototype.undoLimit = function() {
	return 10;
};

Achievements_Editor.prototype.isUndoEnabled = function() {
	return this._undoData.length > 0;
};

Achievements_Editor.prototype.isRedoEnabled = function() {
	return this._redoData.length > 0;
};

Achievements_Editor.prototype.undoLastAction = function() {
	var data = this._undoData.last();
	if (!data) return;
	switch(data.type) {
	case 'preciseMove':
	case 'move':
		if (!data.window.defineSetting) {//edit
			console.warn('The following window does not have a "defineSetting" function:');
			console.log(data.window);
			break;
		}
		data.window.defineSetting('x', data.lastValue.x, true);
		data.window.defineSetting('y', data.lastValue.y, true);
		SceneManager._scene.selectWindow(data.window, data.wname);
		break;
	case 'resize':
		if (!data.window.defineSetting) {
			console.warn('The following window does not have a "defineSetting" function:');
			console.log(data.window);
			break;
		}
		data.window.width = data.lastValue.width;
		data.window.defineSetting('width', data.lastValue.width);
		data.window.defineSetting('height', data.lastValue.height, true);
		SceneManager._scene.selectWindow(data.window, data.wname);
		break;
	case 'resize-move':
		if (!data.window.defineSetting) {
			console.warn('The following window does not have a "defineSetting" function:');
			console.log(data.window);
			break;
		}
		data.window.width = data.lastValue.width;
		data.window.defineSetting('x', data.lastValue.x, true);
		data.window.defineSetting('y', data.lastValue.y, true);
		data.window.defineSetting('width', data.lastValue.width);
		data.window.defineSetting('height', data.lastValue.height, true);
		SceneManager._scene.selectWindow(data.window, data.wname);
		break;
	}
	this._redoData.push(data);
	this._undoData.splice(this._undoData.length - 1, 1);
	SoundManager.playCursor();
	this.refresh();
};

Achievements_Editor.prototype.redoLastAction = function() {
	var data = this._redoData.last();
	if (!data) return;
	switch(data.type) {
	case 'preciseMove':
	case 'move':
		if (!data.window.defineSetting) {
			console.warn('The following window does not have a "defineSetting" function:');
			console.log(data.window);
			break;
		}
		data.window.defineSetting('x', data.newValue.x, true);
		data.window.defineSetting('y', data.newValue.y, true);
		SceneManager._scene.selectWindow(data.window, data.wname);
		break;
	case 'resize':
		if (!data.window.defineSetting) {
			console.warn('The following window does not have a "defineSetting" function:');
			console.log(data.window);
			break;
		}
		data.window.width = data.newValue.width;
		data.window.defineSetting('width', data.newValue.width);
		data.window.defineSetting('height', data.newValue.height, true);
		SceneManager._scene.selectWindow(data.window, data.wname);
		break;
	case 'resize-move':
		if (!data.window.defineSetting) {
			console.warn('The following window does not have a "defineSetting" function:');
			console.log(data.window);
			break;
		}
		data.window.width = data.newValue.width;
		data.window.defineSetting('x', data.newValue.x, true);
		data.window.defineSetting('y', data.newValue.y, true);
		data.window.defineSetting('width', data.newValue.width);
		data.window.defineSetting('height', data.newValue.height, true);
		SceneManager._scene.selectWindow(data.window, data.wname);
		break;
	}
	this._undoData.push(data);
	this._redoData.splice(this._redoData.length - 1, 1);
	SoundManager.playCursor();
	this.refresh();
};

Achievements_Editor.prototype.addEditAction = function(action, redo) {
	if (!action) return;
	this._undoData.push(action);
	if (this._undoData.length > this.undoLimit()) {
		this._undoData.splice(0, 1);
	}
	this._redoData = [];
};

//------------------------------------------------------------------------------------------
// Achievements Editor - Others

Achievements_Editor.prototype.isGrabbing = function() {
	return !!this._grabSpot;
};

Achievements_Editor.prototype.isProperPage = function(pageName) {
	var pages = ['home', 'achiev', 'cat', 'menu'];
	return pages.contains(pageName);
};

Achievements_Editor.prototype.isSaveEnabled = function() {
	return this.isUndoEnabled();
};

Achievements_Editor.prototype.isCategoriesList = function() {
	return !SMO.AM.currentCategory.id;
};

Achievements_Editor.prototype.isRefreshingImgNames = function() {
	return this._refreshingImgNames;
};

Achievements_Editor.prototype.getBackgroundImages = function() {
	DataManager.getAchievsImgNames();
	this._refreshingImgNames = true;
};

Achievements_Editor.prototype.selectWindow = function(select, name) {
	if (!SMO.AM.isAchievementsScene()) return;
	var scene = SceneManager._scene;
	var windows = scene._windowLayer.children;

	//Adding the sort option to the array "windows"
	if (scene._sortOption) {
		windows.push(scene._sortOption);
	}

	if (select) {
		scene.selectWindow(select, name);
		this._selectedWindow = select;
		windows.forEach(function(w) {
			w.alpha = w === this._selectedWindow ? 1 : 0.5;
		}.bind(this));
	} else { //No sprite selected
		this._selectedWindow = null;
		windows.forEach(function(w) {
			w.alpha = 1;
		});
		scene.deselectWindow();
	}
	this.redrawWindowInfo();
};

Achievements_Editor.prototype.loadDefaultSettings = function() {
	this._loadDefaultButton.hideDescription();
	var message = {
		title: 'WARNING',
		text: "This will load the default settings from the plugin's parameters and close the achievements menu.",
		type: 'warn',
		id: 'loadDefault'
	};
	this.showWarning(message);
};

Achievements_Editor.prototype._switchLockMode = function() {
	this._movable = !this._movable;
	SoundManager.playCursor();
	this.refresh();
};

Achievements_Editor.prototype.isClickOnWindow = function(w) {
	if (this.isClickOnMyGrabBox()) return false;
	if (w) {
		var x = TouchInput._x;
		var y = TouchInput._y;
		if (x >= w.x && x < w.x + w.width && y >= w.y && y < w.y + w.height) {
			return true;
		}
	}
	return false;
};

Achievements_Editor.prototype.setButtonAttribute = function(buttonId, prop, value, redraw) {
	var Button = SceneManager._scene.getButtonById(buttonId);
	if (Button) {
		Button._data[prop] = value;
		if (redraw) {
			Button.redraw(true);
		}
	}
};

Achievements_Editor.prototype.show = function() {
	var scene = SceneManager._scene;
	scene._achievsEditorEx.show();

	//Closing Sort option
	if (scene._sortOption && scene._sortOption.visible && scene._sortOption._open) {
		scene._sortOption.onClick(scene._sortOption._selected);
	}

	//Starting edit mode
	scene._editMode = true;

	//Deactivating Item Window
	if (scene._itemWindow) {
		if (!this.isCategoriesList() && !scene._infoWindow.isOpen()) {
			scene._infoWindow.open();
		}
		scene._itemWindow.active = false;
	}

	if (scene._achievsPopUp) {
		scene._achievsPopUp.clear();
	}

	this.visible = true;
	Input.keyMapper[90] = 'z';
	this.refresh();
};

Achievements_Editor.prototype.hide = function() {
	if (this.isSaveEnabled()) {
		var message = {
			title: 'WARNING',
			text: 'All unsaved changes will be lost!',
			type: 'warn',
			id: 'save'
		};
		this.showWarning(message);
	} else {
		SceneManager._scene._achievsEditorEx.hide();
		this.clearSelectedStuff();
		this.callPage();
		this.visible = false;
	}
};

Achievements_Editor.prototype.clearSelectedStuff = function() {
	var scene = SceneManager._scene;
	//Ending edit mode
	scene._editMode = false;
	this._selectedWindow = null;

	//Changing the windows' opacity
	if (scene._itemWindow) {
		if (scene._infoWindow.isOpen()) {
			scene._infoWindow.close();
		}
		scene._itemWindow.active = true;
		scene._itemWindow.alpha = 1;
		scene._trophiesWindow.alpha = 1;
		scene._titleWindow.alpha = 1;
		scene._infoWindow._isWindow = true;
		scene._infoWindow.alpha = 1;
	}

	if (scene._sortOption) {
		scene._sortOption.alpha = 1;
	}

	//Restoring "z" command (default == 'ok')
	if (scene._keyMapperBackup[90]) {
		Input.keyMapper[90] = scene._keyMapperBackup[90];
	} else {
		delete Input.keyMapper[90];
	}
};

//==========================================================================================
// Game Interpreter
// Plugin commands
//==========================================================================================
SMO.AM._GameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	SMO.AM._GameInterpreter_pluginCommand.call(this, command, args);
	var lowerCommand = command.toLowerCase();
	if (lowerCommand === 'showachievements') {
		SMO.AM.showAchievements(args[0]);
	} else if (lowerCommand === 'refreshachievements') {
		SMO.AM.refreshAchievements();
	} else if (lowerCommand === 'resetachievementsdata') {
		SMO.AM.resetDynamicData();
	}
};

//==========================================================================================
// END
//==========================================================================================