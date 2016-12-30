/*!
 * Emoji dialog plugin for Editor.md
 *
 * @file        emoji-dialog.js
 * @author      pandao
 * @version     1.2.0
 * @updateTime  2015-03-08
 * {@link       https://github.com/pandao/editor.md}
 * @license     MIT
 */

(function() {

	var emojiDataJson = {
	"github-emoji" : [
		{
			"category" :"People",
			"list" : ["bowtie","smile","laughing","blush","smiley","relaxed","smirk","heart_eyes","kissing_heart","kissing_closed_eyes","flushed","relieved","satisfied","grin","wink","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","grinning","kissing","kissing_smiling_eyes","stuck_out_tongue","sleeping","worried","frowning","anguished","open_mouth","grimacing","confused","hushed","expressionless","unamused","sweat_smile","sweat","disappointed_relieved","weary","pensive","disappointed","confounded","fearful","cold_sweat","persevere","cry","sob","joy","astonished","scream","neckbeard","tired_face","angry","rage","triumph","sleepy","yum","mask","sunglasses","dizzy_face","imp","smiling_imp","neutral_face","no_mouth","innocent","alien","yellow_heart","blue_heart","purple_heart","heart","green_heart","broken_heart","heartbeat","heartpulse","two_hearts","revolving_hearts","cupid","sparkling_heart","sparkles","star","star2","dizzy","boom","collision","anger","exclamation","question","grey_exclamation","grey_question","zzz","dash","sweat_drops","notes","musical_note","fire","hankey","poop","shit","+1","thumbsup","-1","thumbsdown","ok_hand","punch","facepunch","fist","v","wave","hand","raised_hand","open_hands","point_up","point_down","point_left","point_right","raised_hands","pray","point_up_2","clap","muscle","metal","fu","walking","runner","running","couple","family","two_men_holding_hands","two_women_holding_hands","dancer","dancers","ok_woman","no_good","information_desk_person","raising_hand","bride_with_veil","person_with_pouting_face","person_frowning","bow","couplekiss","couple_with_heart","massage","haircut","nail_care","boy","girl","woman","man","baby","older_woman","older_man","person_with_blond_hair","man_with_gua_pi_mao","man_with_turban","construction_worker","cop","angel","princess","smiley_cat","smile_cat","heart_eyes_cat","kissing_cat","smirk_cat","scream_cat","crying_cat_face","joy_cat","pouting_cat","japanese_ogre","japanese_goblin","see_no_evil","hear_no_evil","speak_no_evil","guardsman","skull","feet","lips","kiss","droplet","ear","eyes","nose","tongue","love_letter","bust_in_silhouette","busts_in_silhouette","speech_balloon","thought_balloon","feelsgood","finnadie","goberserk","godmode","hurtrealbad","rage1","rage2","rage3","rage4","suspect","trollface"]
		},
		{
			"category" :"Nature",
			"list" : ["sunny","umbrella","cloud","snowflake","snowman","zap","cyclone","foggy","ocean","cat","dog","mouse","hamster","rabbit","wolf","frog","tiger","koala","bear","pig","pig_nose","cow","boar","monkey_face","monkey","horse","racehorse","camel","sheep","elephant","panda_face","snake","bird","baby_chick","hatched_chick","hatching_chick","chicken","penguin","turtle","bug","honeybee","ant","beetle","snail","octopus","tropical_fish","fish","whale","whale2","dolphin","cow2","ram","rat","water_buffalo","tiger2","rabbit2","dragon","goat","rooster","dog2","pig2","mouse2","ox","dragon_face","blowfish","crocodile","dromedary_camel","leopard","cat2","poodle","paw_prints","bouquet","cherry_blossom","tulip","four_leaf_clover","rose","sunflower","hibiscus","maple_leaf","leaves","fallen_leaf","herb","mushroom","cactus","palm_tree","evergreen_tree","deciduous_tree","chestnut","seedling","blossom","ear_of_rice","shell","globe_with_meridians","sun_with_face","full_moon_with_face","new_moon_with_face","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","last_quarter_moon_with_face","first_quarter_moon_with_face","moon","earth_africa","earth_americas","earth_asia","volcano","milky_way","partly_sunny","octocat","squirrel"]
		},
		{
			"category" :"Objects",
			"list" : ["bamboo","gift_heart","dolls","school_satchel","mortar_board","flags","fireworks","sparkler","wind_chime","rice_scene","jack_o_lantern","ghost","santa","christmas_tree","gift","bell","no_bell","tanabata_tree","tada","confetti_ball","balloon","crystal_ball","cd","dvd","floppy_disk","camera","video_camera","movie_camera","computer","tv","iphone","phone","telephone","telephone_receiver","pager","fax","minidisc","vhs","sound","speaker","mute","loudspeaker","mega","hourglass","hourglass_flowing_sand","alarm_clock","watch","radio","satellite","loop","mag","mag_right","unlock","lock","lock_with_ink_pen","closed_lock_with_key","key","bulb","flashlight","high_brightness","low_brightness","electric_plug","battery","calling","email","mailbox","postbox","bath","bathtub","shower","toilet","wrench","nut_and_bolt","hammer","seat","moneybag","yen","dollar","pound","euro","credit_card","money_with_wings","e-mail","inbox_tray","outbox_tray","envelope","incoming_envelope","postal_horn","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","package","door","smoking","bomb","gun","hocho","pill","syringe","page_facing_up","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","scroll","clipboard","calendar","date","card_index","file_folder","open_file_folder","scissors","pushpin","paperclip","black_nib","pencil2","straight_ruler","triangular_ruler","closed_book","green_book","blue_book","orange_book","notebook","notebook_with_decorative_cover","ledger","books","bookmark","name_badge","microscope","telescope","newspaper","football","basketball","soccer","baseball","tennis","8ball","rugby_football","bowling","golf","mountain_bicyclist","bicyclist","horse_racing","snowboarder","swimmer","surfer","ski","spades","hearts","clubs","diamonds","gem","ring","trophy","musical_score","musical_keyboard","violin","space_invader","video_game","black_joker","flower_playing_cards","game_die","dart","mahjong","clapper","memo","pencil","book","art","microphone","headphones","trumpet","saxophone","guitar","shoe","sandal","high_heel","lipstick","boot","shirt","tshirt","necktie","womans_clothes","dress","running_shirt_with_sash","jeans","kimono","bikini","ribbon","tophat","crown","womans_hat","mans_shoe","closed_umbrella","briefcase","handbag","pouch","purse","eyeglasses","fishing_pole_and_fish","coffee","tea","sake","baby_bottle","beer","beers","cocktail","tropical_drink","wine_glass","fork_and_knife","pizza","hamburger","fries","poultry_leg","meat_on_bone","spaghetti","curry","fried_shrimp","bento","sushi","fish_cake","rice_ball","rice_cracker","rice","ramen","stew","oden","dango","egg","bread","doughnut","custard","icecream","ice_cream","shaved_ice","birthday","cake","cookie","chocolate_bar","candy","lollipop","honey_pot","apple","green_apple","tangerine","lemon","cherries","grapes","watermelon","strawberry","peach","melon","banana","pear","pineapple","sweet_potato","eggplant","tomato","corn"]
		},
		{
			"category" :"Places",
			"list" : ["house","house_with_garden","school","office","post_office","hospital","bank","convenience_store","love_hotel","hotel","wedding","church","department_store","european_post_office","city_sunrise","city_sunset","japanese_castle","european_castle","tent","factory","tokyo_tower","japan","mount_fuji","sunrise_over_mountains","sunrise","stars","statue_of_liberty","bridge_at_night","carousel_horse","rainbow","ferris_wheel","fountain","roller_coaster","ship","speedboat","boat","sailboat","rowboat","anchor","rocket","airplane","helicopter","steam_locomotive","tram","mountain_railway","bike","aerial_tramway","suspension_railway","mountain_cableway","tractor","blue_car","oncoming_automobile","car","red_car","taxi","oncoming_taxi","articulated_lorry","bus","oncoming_bus","rotating_light","police_car","oncoming_police_car","fire_engine","ambulance","minibus","truck","train","station","train2","bullettrain_front","bullettrain_side","light_rail","monorail","railway_car","trolleybus","ticket","fuelpump","vertical_traffic_light","traffic_light","warning","construction","beginner","atm","slot_machine","busstop","barber","hotsprings","checkered_flag","crossed_flags","izakaya_lantern","moyai","circus_tent","performing_arts","round_pushpin","triangular_flag_on_post","jp","kr","cn","us","fr","es","it","ru","gb","uk","de"]
		},
		{
			"category" :"Symbols",
			"list" : ["one","two","three","four","five","six","seven","eight","nine","keycap_ten","1234","zero","hash","symbols","arrow_backward","arrow_down","arrow_forward","arrow_left","capital_abcd","abcd","abc","arrow_lower_left","arrow_lower_right","arrow_right","arrow_up","arrow_upper_left","arrow_upper_right","arrow_double_down","arrow_double_up","arrow_down_small","arrow_heading_down","arrow_heading_up","leftwards_arrow_with_hook","arrow_right_hook","left_right_arrow","arrow_up_down","arrow_up_small","arrows_clockwise","arrows_counterclockwise","rewind","fast_forward","information_source","ok","twisted_rightwards_arrows","repeat","repeat_one","new","top","up","cool","free","ng","cinema","koko","signal_strength","u5272","u5408","u55b6","u6307","u6708","u6709","u6e80","u7121","u7533","u7a7a","u7981","sa","restroom","mens","womens","baby_symbol","no_smoking","parking","wheelchair","metro","baggage_claim","accept","wc","potable_water","put_litter_in_its_place","secret","congratulations","m","passport_control","left_luggage","customs","ideograph_advantage","cl","sos","id","no_entry_sign","underage","no_mobile_phones","do_not_litter","non-potable_water","no_bicycles","no_pedestrians","children_crossing","no_entry","eight_spoked_asterisk","sparkle","eight_pointed_black_star","heart_decoration","vs","vibration_mode","mobile_phone_off","chart","currency_exchange","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","six_pointed_star","negative_squared_cross_mark","a","b","ab","o2","diamond_shape_with_a_dot_inside","recycle","end","back","on","soon","clock1","clock130","clock10","clock1030","clock11","clock1130","clock12","clock1230","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","heavy_dollar_sign","copyright","registered","tm","x","heavy_exclamation_mark","bangbang","interrobang","o","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","white_flower","100","heavy_check_mark","ballot_box_with_check","radio_button","link","curly_loop","wavy_dash","part_alternation_mark","trident","black_small_square","white_small_square","black_medium_small_square","white_medium_small_square","black_medium_square","white_medium_square","black_large_square","white_large_square","white_check_mark","black_square_button","white_square_button","black_circle","white_circle","red_circle","large_blue_circle","large_blue_diamond","large_orange_diamond","small_blue_diamond","small_orange_diamond","small_red_triangle","small_red_triangle_down","shipit"]
		}
	],

	"twemoji" : ["1f004","1f0cf","1f170","1f171","1f17e","1f17f","1f18e","1f191","1f192","1f193","1f194","1f195","1f196","1f197","1f198","1f199","1f19a","1f1e6","1f1e7","1f1e8-1f1f3","1f1e8","1f1e9-1f1ea","1f1e9","1f1ea-1f1f8","1f1ea","1f1eb-1f1f7","1f1eb","1f1ec-1f1e7","1f1ec","1f1ed","1f1ee-1f1f9","1f1ee","1f1ef-1f1f5","1f1ef","1f1f0-1f1f7","1f1f0","1f1f1","1f1f2","1f1f3","1f1f4","1f1f5","1f1f6","1f1f7-1f1fa","1f1f7","1f1f8","1f1f9","1f1fa-1f1f8","1f1fa","1f1fb","1f1fc","1f1fd","1f1fe","1f1ff","1f201","1f202","1f21a","1f22f","1f232","1f233","1f234","1f235","1f236","1f237","1f238","1f239","1f23a","1f250","1f251","1f300","1f301","1f302","1f303","1f304","1f305","1f306","1f307","1f308","1f309","1f30a","1f30b","1f30c","1f30d","1f30e","1f30f","1f310","1f311","1f312","1f313","1f314","1f315","1f316","1f317","1f318","1f319","1f31a","1f31b","1f31c","1f31d","1f31e","1f31f","1f320","1f330","1f331","1f332","1f333","1f334","1f335","1f337","1f338","1f339","1f33a","1f33b","1f33c","1f33d","1f33e","1f33f","1f340","1f341","1f342","1f343","1f344","1f345","1f346","1f347","1f348","1f349","1f34a","1f34b","1f34c","1f34d","1f34e","1f34f","1f350","1f351","1f352","1f353","1f354","1f355","1f356","1f357","1f358","1f359","1f35a","1f35b","1f35c","1f35d","1f35e","1f35f","1f360","1f361","1f362","1f363","1f364","1f365","1f366","1f367","1f368","1f369","1f36a","1f36b","1f36c","1f36d","1f36e","1f36f","1f370","1f371","1f372","1f373","1f374","1f375","1f376","1f377","1f378","1f379","1f37a","1f37b","1f37c","1f380","1f381","1f382","1f383","1f384","1f385","1f386","1f387","1f388","1f389","1f38a","1f38b","1f38c","1f38d","1f38e","1f38f","1f390","1f391","1f392","1f393","1f3a0","1f3a1","1f3a2","1f3a3","1f3a4","1f3a5","1f3a6","1f3a7","1f3a8","1f3a9","1f3aa","1f3ab","1f3ac","1f3ad","1f3ae","1f3af","1f3b0","1f3b1","1f3b2","1f3b3","1f3b4","1f3b5","1f3b6","1f3b7","1f3b8","1f3b9","1f3ba","1f3bb","1f3bc","1f3bd","1f3be","1f3bf","1f3c0","1f3c1","1f3c2","1f3c3","1f3c4","1f3c6","1f3c7","1f3c8","1f3c9","1f3ca","1f3e0","1f3e1","1f3e2","1f3e3","1f3e4","1f3e5","1f3e6","1f3e7","1f3e8","1f3e9","1f3ea","1f3eb","1f3ec","1f3ed","1f3ee","1f3ef","1f3f0","1f400","1f401","1f402","1f403","1f404","1f405","1f406","1f407","1f408","1f409","1f40a","1f40b","1f40c","1f40d","1f40e","1f40f","1f410","1f411","1f412","1f413","1f414","1f415","1f416","1f417","1f418","1f419","1f41a","1f41b","1f41c","1f41d","1f41e","1f41f","1f420","1f421","1f422","1f423","1f424","1f425","1f426","1f427","1f428","1f429","1f42a","1f42b","1f42c","1f42d","1f42e","1f42f","1f430","1f431","1f432","1f433","1f434","1f435","1f436","1f437","1f438","1f439","1f43a","1f43b","1f43c","1f43d","1f43e","1f440","1f442","1f443","1f444","1f445","1f446","1f447","1f448","1f449","1f44a","1f44b","1f44c","1f44d","1f44e","1f44f","1f450","1f451","1f452","1f453","1f454","1f455","1f456","1f457","1f458","1f459","1f45a","1f45b","1f45c","1f45d","1f45e","1f45f","1f460","1f461","1f462","1f463","1f464","1f465","1f466","1f467","1f468","1f469","1f46a","1f46b","1f46c","1f46d","1f46e","1f46f","1f470","1f471","1f472","1f473","1f474","1f475","1f476","1f477","1f478","1f479","1f47a","1f47b","1f47c","1f47d","1f47e","1f47f","1f480","1f481","1f482","1f483","1f484","1f485","1f486","1f487","1f488","1f489","1f48a","1f48b","1f48c","1f48d","1f48e","1f48f","1f490","1f491","1f492","1f493","1f494","1f495","1f496","1f497","1f498","1f499","1f49a","1f49b","1f49c","1f49d","1f49e","1f49f","1f4a0","1f4a1","1f4a2","1f4a3","1f4a4","1f4a5","1f4a6","1f4a7","1f4a8","1f4a9","1f4aa","1f4ab","1f4ac","1f4ad","1f4ae","1f4af","1f4b0","1f4b1","1f4b2","1f4b3","1f4b4","1f4b5","1f4b6","1f4b7","1f4b8","1f4b9","1f4ba","1f4bb","1f4bc","1f4bd","1f4be","1f4bf","1f4c0","1f4c1","1f4c2","1f4c3","1f4c4","1f4c5","1f4c6","1f4c7","1f4c8","1f4c9","1f4ca","1f4cb","1f4cc","1f4cd","1f4ce","1f4cf","1f4d0","1f4d1","1f4d2","1f4d3","1f4d4","1f4d5","1f4d6","1f4d7","1f4d8","1f4d9","1f4da","1f4db","1f4dc","1f4dd","1f4de","1f4df","1f4e0","1f4e1","1f4e2","1f4e3","1f4e4","1f4e5","1f4e6","1f4e7","1f4e8","1f4e9","1f4ea","1f4eb","1f4ec","1f4ed","1f4ee","1f4ef","1f4f0","1f4f1","1f4f2","1f4f3","1f4f4","1f4f5","1f4f6","1f4f7","1f4f9","1f4fa","1f4fb","1f4fc","1f500","1f501","1f502","1f503","1f504","1f505","1f506","1f507","1f508","1f509","1f50a","1f50b","1f50c","1f50d","1f50e","1f50f","1f510","1f511","1f512","1f513","1f514","1f515","1f516","1f517","1f518","1f519","1f51a","1f51b","1f51c","1f51d","1f51e","1f51f","1f520","1f521","1f522","1f523","1f524","1f525","1f526","1f527","1f528","1f529","1f52a","1f52b","1f52c","1f52d","1f52e","1f52f","1f530","1f531","1f532","1f533","1f534","1f535","1f536","1f537","1f538","1f539","1f53a","1f53b","1f53c","1f53d","1f550","1f551","1f552","1f553","1f554","1f555","1f556","1f557","1f558","1f559","1f55a","1f55b","1f55c","1f55d","1f55e","1f55f","1f560","1f561","1f562","1f563","1f564","1f565","1f566","1f567","1f5fb","1f5fc","1f5fd","1f5fe","1f5ff","1f600","1f601","1f602","1f603","1f604","1f605","1f606","1f607","1f608","1f609","1f60a","1f60b","1f60c","1f60d","1f60e","1f60f","1f610","1f611","1f612","1f613","1f614","1f615","1f616","1f617","1f618","1f619","1f61a","1f61b","1f61c","1f61d","1f61e","1f61f","1f620","1f621","1f622","1f623","1f624","1f625","1f626","1f627","1f628","1f629","1f62a","1f62b","1f62c","1f62d","1f62e","1f62f","1f630","1f631","1f632","1f633","1f634","1f635","1f636","1f637","1f638","1f639","1f63a","1f63b","1f63c","1f63d","1f63e","1f63f","1f640","1f645","1f646","1f647","1f648","1f649","1f64a","1f64b","1f64c","1f64d","1f64e","1f64f","1f680","1f681","1f682","1f683","1f684","1f685","1f686","1f687","1f688","1f689","1f68a","1f68b","1f68c","1f68d","1f68e","1f68f","1f690","1f691","1f692","1f693","1f694","1f695","1f696","1f697","1f698","1f699","1f69a","1f69b","1f69c","1f69d","1f69e","1f69f","1f6a0","1f6a1","1f6a2","1f6a3","1f6a4","1f6a5","1f6a6","1f6a7","1f6a8","1f6a9","1f6aa","1f6ab","1f6ac","1f6ad","1f6ae","1f6af","1f6b0","1f6b1","1f6b2","1f6b3","1f6b4","1f6b5","1f6b6","1f6b7","1f6b8","1f6b9","1f6ba","1f6bb","1f6bc","1f6bd","1f6be","1f6bf","1f6c0","1f6c1","1f6c2","1f6c3","1f6c4","1f6c5","203c","2049","2122","2139","2194","2195","2196","2197","2198","2199","21a9","21aa","23-20e3","231a","231b","23e9","23ea","23eb","23ec","23f0","23f3","24c2","25aa","25ab","25b6","25c0","25fb","25fc","25fd","25fe","2600","2601","260e","2611","2614","2615","261d","263a","2648","2649","264a","264b","264c","264d","264e","264f","2650","2651","2652","2653","2660","2663","2665","2666","2668","267b","267f","2693","26a0","26a1","26aa","26ab","26bd","26be","26c4","26c5","26ce","26d4","26ea","26f2","26f3","26f5","26fa","26fd","2702","2705","2708","2709","270a","270b","270c","270f","2712","2714","2716","2728","2733","2734","2744","2747","274c","274e","2753","2754","2755","2757","2764","2795","2796","2797","27a1","27b0","27bf","2934","2935","2b05","2b06","2b07","2b1b","2b1c","2b50","2b55","30-20e3","3030","303d","31-20e3","32-20e3","3297","3299","33-20e3","34-20e3","35-20e3","36-20e3","37-20e3","38-20e3","39-20e3","a9","ae","e50a"],

	"font-awesome" : ["glass","music","search","envelope-o","heart","star","star-o","user","film","th-large","th","th-list","check","times","search-plus","search-minus","power-off","signal","cog","trash-o","home","file-o","clock-o","road","download","arrow-circle-o-down","arrow-circle-o-up","inbox","play-circle-o","repeat","refresh","list-alt","lock","flag","headphones","volume-off","volume-down","volume-up","qrcode","barcode","tag","tags","book","bookmark","print","camera","font","bold","italic","text-height","text-width","align-left","align-center","align-right","align-justify","list","outdent","indent","video-camera","picture-o","pencil","map-marker","adjust","tint","pencil-square-o","share-square-o","check-square-o","arrows","step-backward","fast-backward","backward","play","pause","stop","forward","fast-forward","step-forward","eject","chevron-left","chevron-right","plus-circle","minus-circle","times-circle","check-circle","question-circle","info-circle","crosshairs","times-circle-o","check-circle-o","ban","arrow-left","arrow-right","arrow-up","arrow-down","share","expand","compress","plus","minus","asterisk","exclamation-circle","gift","leaf","fire","eye","eye-slash","exclamation-triangle","plane","calendar","random","comment","magnet","chevron-up","chevron-down","retweet","shopping-cart","folder","folder-open","arrows-v","arrows-h","bar-chart","twitter-square","facebook-square","camera-retro","key","cogs","comments","thumbs-o-up","thumbs-o-down","star-half","heart-o","sign-out","linkedin-square","thumb-tack","external-link","sign-in","trophy","github-square","upload","lemon-o","phone","square-o","bookmark-o","phone-square","twitter","facebook","github","unlock","credit-card","rss","hdd-o","bullhorn","bell","certificate","hand-o-right","hand-o-left","hand-o-up","hand-o-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-circle-down","globe","wrench","tasks","filter","briefcase","arrows-alt","users","link","cloud","flask","scissors","files-o","paperclip","floppy-o","square","bars","list-ul","list-ol","strikethrough","underline","table","magic","truck","pinterest","pinterest-square","google-plus-square","google-plus","money","caret-down","caret-up","caret-left","caret-right","columns","sort","sort-desc","sort-asc","envelope","linkedin","undo","gavel","tachometer","comment-o","comments-o","bolt","sitemap","umbrella","clipboard","lightbulb-o","exchange","cloud-download","cloud-upload","user-md","stethoscope","suitcase","bell-o","coffee","cutlery","file-text-o","building-o","hospital-o","ambulance","medkit","fighter-jet","beer","h-square","plus-square","angle-double-left","angle-double-right","angle-double-up","angle-double-down","angle-left","angle-right","angle-up","angle-down","desktop","laptop","tablet","mobile","circle-o","quote-left","quote-right","spinner","circle","reply","github-alt","folder-o","folder-open-o","smile-o","frown-o","meh-o","gamepad","keyboard-o","flag-o","flag-checkered","terminal","code","reply-all","star-half-o","location-arrow","crop","code-fork","chain-broken","question","info","exclamation","superscript","subscript","eraser","puzzle-piece","microphone","microphone-slash","shield","calendar-o","fire-extinguisher","rocket","maxcdn","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-circle-down","html5","css3","anchor","unlock-alt","bullseye","ellipsis-h","ellipsis-v","rss-square","play-circle","ticket","minus-square","minus-square-o","level-up","level-down","check-square","pencil-square","share-square","compass","caret-square-o-down","caret-square-o-up","caret-square-o-right","eur","gbp","usd","inr","jpy","rub","krw","btc","file","file-text","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-numeric-asc","sort-numeric-desc","thumbs-up","thumbs-down","youtube-square","youtube","xing","xing-square","youtube-play","dropbox","stack-overflow","instagram","flickr","adn","bitbucket","bitbucket-square","tumblr","tumblr-square","long-arrow-down","long-arrow-up","long-arrow-left","long-arrow-right","apple","windows","android","linux","dribbble","skype","foursquare","trello","female","male","gratipay","sun-o","moon-o","archive","bug","vk","weibo","renren","pagelines","stack-exchange","arrow-circle-o-right","arrow-circle-o-left","caret-square-o-left","dot-circle-o","wheelchair","vimeo-square","try","plus-square-o","space-shuttle","slack","envelope-square","wordpress","openid","university","graduation-cap","yahoo","google","reddit","reddit-square","stumbleupon-circle","stumbleupon","delicious","digg","pied-piper","pied-piper-alt","drupal","joomla","language","fax","building","child","paw","spoon","cube","cubes","behance","behance-square","steam","steam-square","recycle","car","taxi","tree","spotify","deviantart","soundcloud","database","file-pdf-o","file-word-o","file-excel-o","file-powerpoint-o","file-image-o","file-archive-o","file-audio-o","file-video-o","file-code-o","vine","codepen","jsfiddle","life-ring","circle-o-notch","rebel","empire","git-square","git","hacker-news","tencent-weibo","qq","weixin","paper-plane","paper-plane-o","history","circle-thin","header","paragraph","sliders","share-alt","share-alt-square","bomb","futbol-o","tty","binoculars","plug","slideshare","twitch","yelp","newspaper-o","wifi","calculator","paypal","google-wallet","cc-visa","cc-mastercard","cc-discover","cc-amex","cc-paypal","cc-stripe","bell-slash","bell-slash-o","trash","copyright","at","eyedropper","paint-brush","birthday-cake","area-chart","pie-chart","line-chart","lastfm","lastfm-square","toggle-off","toggle-on","bicycle","bus","ioxhost","angellist","cc","ils","meanpath","buysellads","connectdevelop","dashcube","forumbee","leanpub","sellsy","shirtsinbulk","simplybuilt","skyatlas","cart-plus","cart-arrow-down","diamond","ship","user-secret","motorcycle","street-view","heartbeat","venus","mars","mercury","transgender","transgender-alt","venus-double","mars-double","venus-mars","mars-stroke","mars-stroke-v","mars-stroke-h","neuter","facebook-official","pinterest-p","whatsapp","server","user-plus","user-times","bed","viacoin","train","subway","medium","GitHub","bed","buysellads","cart-arrow-down","cart-plus","connectdevelop","dashcube","diamond","facebook-official","forumbee","heartbeat","hotel","leanpub","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","medium","mercury","motorcycle","neuter","pinterest-p","sellsy","server","ship","shirtsinbulk","simplybuilt","skyatlas","street-view","subway","train","transgender","transgender-alt","user-plus","user-secret","user-times","venus","venus-double","venus-mars","viacoin","whatsapp","adjust","anchor","archive","area-chart","arrows","arrows-h","arrows-v","asterisk","at","automobile","ban","bank","bar-chart","bar-chart-o","barcode","bars","bed","beer","bell","bell-o","bell-slash","bell-slash-o","bicycle","binoculars","birthday-cake","bolt","bomb","book","bookmark","bookmark-o","briefcase","bug","building","building-o","bullhorn","bullseye","bus","cab","calculator","calendar","calendar-o","camera","camera-retro","car","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","cart-arrow-down","cart-plus","cc","certificate","check","check-circle","check-circle-o","check-square","check-square-o","child","circle","circle-o","circle-o-notch","circle-thin","clock-o","close","cloud","cloud-download","cloud-upload","code","code-fork","coffee","cog","cogs","comment","comment-o","comments","comments-o","compass","copyright","credit-card","crop","crosshairs","cube","cubes","cutlery","dashboard","database","desktop","diamond","dot-circle-o","download","edit","ellipsis-h","ellipsis-v","envelope","envelope-o","envelope-square","eraser","exchange","exclamation","exclamation-circle","exclamation-triangle","external-link","external-link-square","eye","eye-slash","eyedropper","fax","female","fighter-jet","file-archive-o","file-audio-o","file-code-o","file-excel-o","file-image-o","file-movie-o","file-pdf-o","file-photo-o","file-picture-o","file-powerpoint-o","file-sound-o","file-video-o","file-word-o","file-zip-o","film","filter","fire","fire-extinguisher","flag","flag-checkered","flag-o","flash","flask","folder","folder-o","folder-open","folder-open-o","frown-o","futbol-o","gamepad","gavel","gear","gears","genderless","gift","glass","globe","graduation-cap","group","hdd-o","headphones","heart","heart-o","heartbeat","history","home","hotel","image","inbox","info","info-circle","institution","key","keyboard-o","language","laptop","leaf","legal","lemon-o","level-down","level-up","life-bouy","life-buoy","life-ring","life-saver","lightbulb-o","line-chart","location-arrow","lock","magic","magnet","mail-forward","mail-reply","mail-reply-all","male","map-marker","meh-o","microphone","microphone-slash","minus","minus-circle","minus-square","minus-square-o","mobile","mobile-phone","money","moon-o","mortar-board","motorcycle","music","navicon","newspaper-o","paint-brush","paper-plane","paper-plane-o","paw","pencil","pencil-square","pencil-square-o","phone","phone-square","photo","picture-o","pie-chart","plane","plug","plus","plus-circle","plus-square","plus-square-o","power-off","print","puzzle-piece","qrcode","question","question-circle","quote-left","quote-right","random","recycle","refresh","remove","reorder","reply","reply-all","retweet","road","rocket","rss","rss-square","search","search-minus","search-plus","send","send-o","server","share","share-alt","share-alt-square","share-square","share-square-o","shield","ship","shopping-cart","sign-in","sign-out","signal","sitemap","sliders","smile-o","soccer-ball-o","sort","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-asc","sort-desc","sort-down","sort-numeric-asc","sort-numeric-desc","sort-up","space-shuttle","spinner","spoon","square","square-o","star","star-half","star-half-empty","star-half-full","star-half-o","star-o","street-view","suitcase","sun-o","support","tablet","tachometer","tag","tags","tasks","taxi","terminal","thumb-tack","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up","ticket","times","times-circle","times-circle-o","tint","toggle-down","toggle-left","toggle-off","toggle-on","toggle-right","toggle-up","trash","trash-o","tree","trophy","truck","tty","umbrella","university","unlock","unlock-alt","unsorted","upload","user","user-plus","user-secret","user-times","users","video-camera","volume-down","volume-off","volume-up","warning","wheelchair","wifi","wrench","ambulance","automobile","bicycle","bus","cab","car","fighter-jet","motorcycle","plane","rocket","ship","space-shuttle","subway","taxi","train","truck","wheelchair","circle-thin","genderless","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mercury","neuter","transgender","transgender-alt","venus","venus-double","venus-mars","file","file-archive-o","file-audio-o","file-code-o","file-excel-o","file-image-o","file-movie-o","file-o","file-pdf-o","file-photo-o","file-picture-o","file-powerpoint-o","file-sound-o","file-text","file-text-o","file-video-o","file-word-o","file-zip-o","circle-o-notch","cog","gear","refresh","spinner","check-square","check-square-o","circle","circle-o","dot-circle-o","minus-square","minus-square-o","plus-square","plus-square-o","square","square-o","cc-amex","cc-discover","cc-mastercard","cc-paypal","cc-stripe","cc-visa","credit-card","google-wallet","paypal","area-chart","bar-chart","bar-chart-o","line-chart","pie-chart","bitcoin","btc","cny","dollar","eur","euro","gbp","ils","inr","jpy","krw","money","rmb","rouble","rub","ruble","rupee","shekel","sheqel","try","turkish-lira","usd","won","yen","align-center","align-justify","align-left","align-right","bold","chain","chain-broken","clipboard","columns","copy","cut","dedent","eraser","file","file-o","file-text","file-text-o","files-o","floppy-o","font","header","indent","italic","link","list","list-alt","list-ol","list-ul","outdent","paperclip","paragraph","paste","repeat","rotate-left","rotate-right","save","scissors","strikethrough","subscript","superscript","table","text-height","text-width","th","th-large","th-list","underline","undo","unlink","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","arrow-circle-down","arrow-circle-left","arrow-circle-o-down","arrow-circle-o-left","arrow-circle-o-right","arrow-circle-o-up","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows","arrows-alt","arrows-h","arrows-v","caret-down","caret-left","caret-right","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","caret-up","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","hand-o-down","hand-o-left","hand-o-right","hand-o-up","long-arrow-down","long-arrow-left","long-arrow-right","long-arrow-up","toggle-down","toggle-left","toggle-right","toggle-up","arrows-alt","backward","compress","eject","expand","fast-backward","fast-forward","forward","pause","play","play-circle","play-circle-o","step-backward","step-forward","stop","youtube-play","report an issue with Adblock Plus","adn","android","angellist","apple","behance","behance-square","bitbucket","bitbucket-square","bitcoin","btc","buysellads","cc-amex","cc-discover","cc-mastercard","cc-paypal","cc-stripe","cc-visa","codepen","connectdevelop","css3","dashcube","delicious","deviantart","digg","dribbble","dropbox","drupal","empire","facebook","facebook-f","facebook-official","facebook-square","flickr","forumbee","foursquare","ge","git","git-square","github","github-alt","github-square","gittip","google","google-plus","google-plus-square","google-wallet","gratipay","hacker-news","html5","instagram","ioxhost","joomla","jsfiddle","lastfm","lastfm-square","leanpub","linkedin","linkedin-square","linux","maxcdn","meanpath","medium","openid","pagelines","paypal","pied-piper","pied-piper-alt","pinterest","pinterest-p","pinterest-square","qq","ra","rebel","reddit","reddit-square","renren","sellsy","share-alt","share-alt-square","shirtsinbulk","simplybuilt","skyatlas","skype","slack","slideshare","soundcloud","spotify","stack-exchange","stack-overflow","steam","steam-square","stumbleupon","stumbleupon-circle","tencent-weibo","trello","tumblr","tumblr-square","twitch","twitter","twitter-square","viacoin","vimeo-square","vine","vk","wechat","weibo","weixin","whatsapp","windows","wordpress","xing","xing-square","yahoo","yelp","youtube","youtube-play","youtube-square","ambulance","h-square","heart","heart-o","heartbeat","hospital-o","medkit","plus-square","stethoscope","user-md","wheelchair"]
};

	var factory = function (exports) {

		var $             = jQuery;
		var pluginName    = "emoji-dialog";
		var emojiTabIndex = 0;
		var emojiData     = [];
        var selecteds     = [];

		var logoPrefix    = "editormd-logo";
		var logos         = [
			logoPrefix,
			logoPrefix + "-1x",
			logoPrefix + "-2x",
			logoPrefix + "-3x",
			logoPrefix + "-4x",
			logoPrefix + "-5x",
			logoPrefix + "-6x",
			logoPrefix + "-7x",
			logoPrefix + "-8x"
		];

		var langs = {
			"zh-cn" : {
				toolbar : {
					emoji : "Emoji 表情"
				},
				dialog : {
					emoji : {
						title : "Emoji 表情"
					}
				}
			},
			"zh-tw" : {
				toolbar : {
					emoji : "Emoji 表情"
				},
				dialog : {
					emoji : {
						title : "Emoji 表情"
					}
				}
			},
			"en" : {
				toolbar : {
					emoji : "Emoji"
				},
				dialog : {
					emoji : {
						title : "Emoji"
					}
				}
			}
		};

		exports.fn.emojiDialog = function() {
			var _this       = this;
			var cm          = this.cm;
			var settings    = _this.settings;
            
            if (!settings.emoji)
            {
                alert("settings.emoji == false");
                return ;
            }
            
			var path        = settings.pluginPath + pluginName + "/";
			var editor      = this.editor;
			var cursor      = cm.getCursor();
			var selection   = cm.getSelection();
			var classPrefix = this.classPrefix;

			$.extend(true, this.lang, langs[this.lang.name]);
			this.setToolbar();

			var lang        = this.lang;
			var dialogName  = classPrefix + pluginName, dialog;
			var dialogLang  = lang.dialog.emoji;
			
			var dialogContent = [
				"<div class=\"" + classPrefix + "emoji-dialog-box\" style=\"width: 760px;height: 334px;margin-bottom: 8px;overflow: hidden;\">",
				"<div class=\"" + classPrefix + "tab\"></div>",
				"</div>",
			].join("\n");

			cm.focus();

			if (editor.find("." + dialogName).length > 0) 
			{
                dialog = editor.find("." + dialogName);

				selecteds = [];
				dialog.find("a").removeClass("selected");

				this.dialogShowMask(dialog);
				this.dialogLockScreen();
				dialog.show();
			} 
			else
			{
				dialog = this.createDialog({
					name       : dialogName,
					title      : dialogLang.title,
					width      : 800,
					height     : 475,
					mask       : settings.dialogShowMask,
					drag       : settings.dialogDraggable,
					content    : dialogContent,
					lockScreen : settings.dialogLockScreen,
					maskStyle  : {
						opacity         : settings.dialogMaskOpacity,
						backgroundColor : settings.dialogMaskBgColor
					},
					buttons    : {
						enter  : [lang.buttons.enter, function() {							
							cm.replaceSelection(selecteds.join(" "));
							this.hide().lockScreen(false).hideMask();
							
							return false;
						}],
						cancel : [lang.buttons.cancel, function() {                           
							this.hide().lockScreen(false).hideMask();
							
							return false;
						}]
					}
				});
			}
			
			var category = ["Github emoji", "Twemoji", "Font awesome", "Editor.md logo"];
			var tab      = dialog.find("." + classPrefix + "tab");

			if (tab.html() === "") 
			{
				var head = "<ul class=\"" + classPrefix + "tab-head\">";

				for (var i = 0; i<4; i++) {
					var active = (i === 0) ? " class=\"active\"" : "";
					head += "<li" + active + "><a href=\"javascript:;\">" + category[i] + "</a></li>";
				}

				head += "</ul>";

				tab.append(head);

				var container = "<div class=\"" + classPrefix + "tab-container\">";

				for (var x = 0; x < 4; x++) 
                {
					var display = (x === 0) ? "" : "display:none;";
					container += "<div class=\"" + classPrefix + "tab-box\" style=\"height: 260px;overflow: hidden;overflow-y: auto;" + display + "\"></div>";
				}

				container += "</div>";

				tab.append(container);  
			}
            
			var tabBoxs = tab.find("." + classPrefix + "tab-box");
            var emojiCategories = ["github-emoji", "twemoji", "font-awesome", logoPrefix];

			var drawTable = function() {
                var cname = emojiCategories[emojiTabIndex];
				var $data = emojiData[cname];
                var $tab  = tabBoxs.eq(emojiTabIndex);

				if ($tab.html() !== "") {
                    //console.log("break =>", cname);
                    return ;
                }
                
                var pagination = function(data, type) {
                    var rowNumber = (type === "editormd-logo") ? "5" : 20;
                    var pageTotal = Math.ceil(data.length / rowNumber);
                    var table     = "<div class=\"" + classPrefix + "grid-table\">";

                    for (var i = 0; i < pageTotal; i++)
                    {
                        var row = "<div class=\"" + classPrefix + "grid-table-row\">";

                        for (var x = 0; x < rowNumber; x++)
                        {
                            var emoji = $.trim(data[(i * rowNumber) + x]);
                            
                            if (typeof emoji !== "undefined" && emoji !== "")
                            {
                                var img = "", icon = "";
                                
                                if (type === "github-emoji")
                                {
                                    var src = (emoji === "+1") ? "plus1" : emoji;
                                    src     = (src === "black_large_square") ? "black_square" : src;
                                    src     = (src === "moon") ? "waxing_gibbous_moon" : src;
                                    
                                    src     = exports.emoji.path + src + exports.emoji.ext;
                                    img     = "<img src=\"" + src + "\" width=\"24\" class=\"emoji\" title=\"&#58;" + emoji + "&#58;\" alt=\"&#58;" + emoji + "&#58;\" />";
                                    row += "<a href=\"javascript:;\" value=\":" + emoji + ":\" title=\":" + emoji + ":\" class=\"" + classPrefix + "emoji-btn\">" + img + "</a>";
                                }
                                else if (type === "twemoji")
                                {
                                    var twemojiSrc = exports.twemoji.path + emoji + exports.twemoji.ext;
                                    img = "<img src=\"" + twemojiSrc + "\" width=\"24\" title=\"twemoji-" + emoji + "\" alt=\"twemoji-" + emoji + "\" class=\"emoji twemoji\" />";
                                    row += "<a href=\"javascript:;\" value=\":tw-" + emoji + ":\" title=\":tw-" + emoji + ":\" class=\"" + classPrefix + "emoji-btn\">" + img + "</a>";
                                }
                                else if (type === "font-awesome")
                                {
                                    icon = "<i class=\"fa fa-" + emoji + " fa-emoji\" title=\"" + emoji + "\"></i>";
                                    row += "<a href=\"javascript:;\" value=\":fa-" + emoji + ":\" title=\":fa-" + emoji + ":\" class=\"" + classPrefix + "emoji-btn\">" + icon + "</a>";
                                }
                                else if (type === "editormd-logo")
                                {
                                    icon = "<i class=\"" + emoji + "\" title=\"Editor.md logo (" + emoji + ")\"></i>";
                                    row += "<a href=\"javascript:;\" value=\":" + emoji + ":\" title=\":" + emoji + ":\" style=\"width:20%;\" class=\"" + classPrefix + "emoji-btn\">" + icon + "</a>";
                                }
                            }
                            else
                            {
                                row += "<a href=\"javascript:;\" value=\"\"></a>";                        
                            }
                        }

                        row += "</div>";

                        table += row;
                    }

                    table += "</div>";
                    
                    return table;
                };
                
                if (emojiTabIndex === 0)
                {
                    for (var i = 0, len = $data.length; i < len; i++)
                    {
                        var h4Style = (i === 0) ? " style=\"margin: 0 0 10px;\"" : " style=\"margin: 10px 0;\"";
                        $tab.append("<h4" + h4Style + ">" + $data[i].category + "</h4>");
                        $tab.append(pagination($data[i].list, cname));
                    }
                }
                else
                {
                    $tab.append(pagination($data, cname));
                }

				$tab.find("." + classPrefix + "emoji-btn").bind(exports.mouseOrTouch("click", "touchend"), function() {
					$(this).toggleClass("selected");

					if ($(this).hasClass("selected")) 
					{
						selecteds.push($(this).attr("value"));
					}
				});
			};
			
			if (emojiData.length < 1) 
			{            
					emojiData = emojiDataJson;
                    				emojiData[logoPrefix] = logos;
					drawTable();
			} 
			else 
			{
				drawTable();
			}

			tab.find("li").bind(exports.mouseOrTouch("click", "touchend"), function() {
				var $this     = $(this);
				emojiTabIndex = $this.index();

				$this.addClass("active").siblings().removeClass("active");
				tabBoxs.eq(emojiTabIndex).show().siblings().hide();
				drawTable();
			});
		};

	};
    
	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    { 
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
		if (define.amd) { // for Require.js

			define(["editormd"], function(editormd) {
                factory(editormd);
            });

		} else { // for Sea.js
			define(function(require) {
                var editormd = require("./../../editormd");
                factory(editormd);
            });
		}
	} 
	else
	{
        factory(window.editormd);
	}

})();
