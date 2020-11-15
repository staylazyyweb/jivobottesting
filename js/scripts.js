//ws connection for logs
let socket = new WebSocket("wss://testbotjivo.eu-gb.cf.appdomain.cloud/ws/dataexchange");
    socket.onopen = function(e) {
   console.log('Соединение установлено, начинаю логирование');
};

function jivo_onLoadCallback() {
    console.log('Widget fully loaded');
    jivo_api.showProactiveInvitation("How can I help you?");
}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}

//получаем данные только если начался диалог

socket.onmessage = function(event) {
  let message = event.data;

  let messageElem = document.createElement('div');
  messageElem.textContent = message;
  document.getElementById('messages').append(messageElem);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    console.log('[close] Соединение прервано');
  }
};

socket.onerror = function(error) {
  console.log(`[error] ${error.message}`);
};
