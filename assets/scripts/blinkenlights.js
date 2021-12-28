WA.onInit().then(() => {
    WA.room.onEnterLayer('blinkenlights_switch_1').subscribe(() => {
        WA.chat.sendChatMessage("Hello!", 'Mr Robot');
        WA.room.showLayer('obj_haus_vordergrund_pac');
        WA.room.hideLayer('obj_haus_vordergrund_herz');
        //WA.room.hideLayer('obj_haus_animation3');
    });
    WA.room.onLeaveLayer('blinkenlights_switch_1').subscribe(() => {
        WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
        WA.room.hideLayer('obj_haus_vordergrund_pac');
        WA.room.showLayer('obj_haus_vordergrund_herz');
        //WA.room.showLayer('obj_haus_animation3');
    });
    WA.room.onEnterLayer('blinkenlights_switch_2').subscribe(() => {
        WA.chat.sendChatMessage("Hello!", 'Mr Robot');
        WA.room.hideLayer('obj_haus_animation1');
        WA.room.showLayer('obj_haus_animation2');
        WA.room.hideLayer('obj_haus_animation3');
    });
    WA.room.onLeaveLayer('blinkenlights_switch_2').subscribe(() => {
        WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
        WA.room.showLayer('obj_haus_animation1');
        WA.room.showLayer('obj_haus_animation2');
        WA.room.showLayer('obj_haus_animation3');
    });
});
