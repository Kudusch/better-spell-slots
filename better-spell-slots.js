const MODULE_NAME = "better-spell-slots";

function gen_spellslots(slots, uses) {
    var i;
    var used_slot = "<div class='spellslot'><div class='spellslot-content'></div></div>";
    var unused_slot = "<div class='spellslot spellslot-available'><div class='spellslot-content'></div></div>";
    var out_html = [];
    for (i = 1; i <= slots; i++) {
        if (i > uses) {
            out_html.push(used_slot);
        } else {
            out_html.push(unused_slot);
        }
    }
    //out_html.reverse();
    return("<div class='slots'>" + out_html.join("\n") + "</div>");
}

Hooks.on("renderTidy5eSheet", (app, html, data) => {
    console.log("<---- better-spell-slots");
    var spellbok_data = data.actor.data.spells;
    var spellbook_sections = $( document ).find(".spell-detail.spell-slots");
    var spell_level = 1;
    spellbook_sections.each(function(){
        
        var slots = spellbok_data["spell"+spell_level]["max"];
        var uses =  slots - spellbok_data["spell"+spell_level]["value"];
        var slots_html = gen_spellslots(slots, uses);
        $(this).append(slots_html);
        spell_level++;
    })
    
    console.log("<---- better-spell-slots");
});