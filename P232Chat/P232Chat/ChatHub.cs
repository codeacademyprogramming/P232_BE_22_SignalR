﻿using Microsoft.AspNetCore.SignalR;

namespace P232Chat
{
    public class ChatHub:Hub
    {
        public async Task SendMessage(string name,string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", name, message);
        }
    }
}
