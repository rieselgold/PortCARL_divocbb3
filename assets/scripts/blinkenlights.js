WA.onInit().then(() => {

    WA.room.hideLayer('obj_haus_vordergrund_pac');
    WA.room.hideLayer('obj_haus_vordergrund_ccc');
    WA.room.showLayer('obj_haus_vordergrund_herz');

    WA.chat.sendChatMessage("Hello!", 'Mr Robot');

    WA.room.onEnterLayer('blinkenlights_switch_1').subscribe(() => {
        WA.room.showLayer('obj_haus_vordergrund_pac');
        WA.room.hideLayer('obj_haus_vordergrund_herz');
    });
    WA.room.onLeaveLayer('blinkenlights_switch_1').subscribe(() => {
        WA.room.hideLayer('obj_haus_vordergrund_pac');
        WA.room.showLayer('obj_haus_vordergrund_herz');
    });
    WA.room.onEnterLayer('blinkenlights_switch_2').subscribe(() => {
        WA.room.showLayer('obj_haus_vordergrund_ccc');
        WA.room.hideLayer('obj_haus_vordergrund_herz');
    });
    WA.room.onLeaveLayer('blinkenlights_switch_2').subscribe(() => {
        WA.room.hideLayer('obj_haus_vordergrund_ccc');
        WA.room.showLayer('obj_haus_vordergrund_herz');
    });
});
