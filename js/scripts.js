function jivo_onLoadCallback() {
    console.log('Widget fully loaded');
    jivo_api.showProactiveInvitation("How can I help you?");
    let socket = new WebSocket("wss://testbotjivo.eu-gb.cf.appdomain.cloud/ws/dataexchange");
    socket.onopen = function(e) {
  console.log('Соединение установлено, начинаю логирование');
};
    return socket;
}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}

//websocket connection for logs
//function onMessageSent() {
socket.onmessage = function(event) {
  alert(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    alert('[close] Соединение прервано');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};
//};
