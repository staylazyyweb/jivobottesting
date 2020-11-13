function jivo_onLoadCallback() {
    console.log('Widget fully loaded');
    jivo_api.showProactiveInvitation("How can I help you?"); 
}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}
