WA.onInit().then(() => {
    WA.room.onEnterLayer('blinkenlights_switch_1').subscribe(() => {
        WA.chat.sendChatMessage("Hello!", 'Mr Robot');
        WA.room.hideLayer('obj_haus_animation1');
    });
    WA.room.onLeaveLayer('blinkenlights_switch_1').subscribe(() => {
        WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
        WA.room.showLayer('obj_haus_animation1');
    });
});
