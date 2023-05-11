var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.start().then(() => {
    console.log(connection.connectionId)
}).catch(function (err) {
    return console.error(err.toString());
});

$("#sendButton").click(function () {
    let name = $("#userInput").val();
    let message = $("#messageInput").val();

    connection.invoke("SendMessage", name, message).catch (function (err) {
        return console.error(err.toString());
    });
})

connection.on("ReceiveMessage", function (name, message) {
    let li = document.createElement("li");
    li.innerText = name + ": " + message;
    $("#messagesList").append(li);
}).catch(function (err) {
    return console.error(err.toString());
});

