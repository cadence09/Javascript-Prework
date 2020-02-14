
class Event {
    constructor(name, description) {

        this.name = name;
        this.description = description;
        this.availableTickets = [];

    }
    
    addAvailableTickets(type, price) {
        //     let event=new Event();
        //    this.availableTickets.push(event);
        let ticketInfo=new TicketType(type,price)
        
        this.availableTickets.push(ticketInfo)
        this.availableTickets.join();
       
        // console.log(type,price);
    }
    
    allTickets() {
        return this.availableTickets;  
    }
    searchTicket(min,max){
        let result=" ";
       for (let i=0; i<this.availableTickets.length; i++){
        if(i%2 ==0){
            result+=" ";
        }
        if(i%2 !==0 && this.availableTickets[i]>min && this.availableTickets[i]<max){
            result+=this.availableTickets[i-1] + this.availableTickets[i];
        } 
       
    
    }
    return result;
}
 
}

class TicketType {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}

const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const eventObj2 = new Event("skillet& Sevendust", "victorious was tour");
const eventObj3 = new Event("Jenny Lewis", "On the lin tour 2019")
const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(`all tickets info ${eventArray}`);


$(document).ready(function () {
  
    let html = " ";
    $.each(eventArray, function (index, item) {
        html += `<li>${item.name}-${item.description}</li>-all ticket:${item.searchTicket()}`;
    });
    $("#event").html(html);

    // $('#name').keyup(function () {
    //     $('#display').text($(this).val());
    //   });
  
})


eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);
eventObj1.searchTicket(0, 250);
eventObj2.searchTicket(0, 100);
eventObj3.searchTicket(0, 250);




