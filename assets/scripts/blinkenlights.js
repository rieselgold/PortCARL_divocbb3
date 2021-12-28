WA.onInit().then(() => {
    WA.room.onEnterLayer('blinkenlights_switch_1').subscribe(() => {
        WA.chat.sendChatMessage("Hello!", 'Mr Robot');
    });
    WA.room.onLeaveLayer('blinkenlights_switch_1').subscribe(() => {
        WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
    });
});
