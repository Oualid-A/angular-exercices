// ex17
function padLeft(value: string, padding: string | number) {
    return "value : "+ value +" padding : "+ padding;
}
console.log(padLeft("100%", "10%"));

// ex18
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

const customer: Customer = {
    name: "Ouaid",
    email: "oualid@gmail.com",
    phone: "06 0000 0000",
    credit: 1000
};

function createCustomer(customer : Customer): string {
    return "Contact Phone: " +customer.phone+ " Credit: " + customer.credit+ " name: " + customer.name+ " email: " + customer.email;
}

console.log(createCustomer(customer)); // Contact Phone: 06 0000 0000 Credit: 1000 name: Ouaid email: oualid@gmail.com"

