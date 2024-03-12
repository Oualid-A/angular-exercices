// ex 15
enum Response {
    No = 0,
    Yes = 1
}
function processResponse(response: Response): string {
    if (response === Response.Yes) {
        return "Response is Yes.";
    } else {
        return "Response is No.";
    }
} 
console.log(processResponse(Response.No)); // Response is No.


// ex 16
enum Message {
    Success = "SUCCESS",
    Faimure = "FAILURE",
}

function processMessage(message: Message): string {
    if (message === Message.Success) {
        return "Message is Success.";
    } else {
        return "Message is Failure.";
    }
}

console.log(processMessage(Message.Success)); // Message is Success.