$(document).ready( () => {
    const eventRecommender = new EventRecommender(); 
    // console.log(recommandation)
    // let html="";
    // $.each(recommandation.users, function(index,item){
    //       html+=`<li>${item.newUser}</li>`
    // });
    // $("#all-users").html(html);

<<<<<<< HEAD
   
    
    // connecting ajax to express
    $("#button").click(function(e){
    // let html="";
    e.preventDefault();
    let addId=$("#add-user-id").val();
    let addNewUser=$("#add-user-name").val();
    console.log('<<<<<');
    console.log(`what is addID and addnewUser ${addNewUser}`)
     $.ajax({
        url:"/users",
        type: "POST",
        async: false,
        data: {id: addId, newUser: addNewUser},
<<<<<<< HEAD
        // dataType:"html",
        success:function (res){
            console.log("you received some data" + (res))
            $.each(res, function(index,item){
                html+=`<li>${item.newUser}</li>`
          });
        $("#all-users").html(html);
=======
        dataType:"text",
        success:function (res){
            console.log("you received some data" + (res))
        //     console.log("you received some data1" + JSON.parse(res))
        //  return res;
         
        $("#all-users").html(res);
>>>>>>> data-model-1
                // eventRecommender.addUser(addNewUser,addId);
                // $.each(data, function(index,item){
                //           html+=`<li>${item.newUser}</li>`
                //     });
                    
                //     $("#all-users").html(html);
        }
=======
    $("#button").click(function(e){
        let html="";
        e.preventDefault();
        let addId=$("#add-user-id").val();
        let addNewUser=$("#add-user-name").val();
        console.log('<<<<<');
        console.log(`what is addID and addnewUser ${addNewUser}`)
         $.ajax({
            url:"/users",
            type: "POST",
            async: false,
            data: {id: addId, user: addNewUser},
            // dataType:"text",
            success:function (res){
                console.log("you received some data" +JSON.stringify(res)) 
                $.each(res, function(index,item){
                            html+=`<li>${item.newUser}</li>`
                      });
                      $("#all-users").html(html);
            //     $.each(res, function(index,item){
            //         html+=`<li>${item.newUser}</li>`
            //   });
           
                    // eventRecommender.addUser(addNewUser,addId);
                    // $.each(data, function(index,item){
                    //           html+=`<li>${item.newUser}</li>`
                    //     });
                        
                    //     $("#all-users").html(html);
            }
           
           
        })
       
>>>>>>> super-test
    })
    
        // $("#button").click(function(e){
        //      let html="";
        //  
    // $("#button").click(function(e){
    //      let html="";
    //     e.preventDefault();
    //     let addId=$("#add-user-id").val();
    // let addNewUser=$("#add-user-name").val();
    //     eventRecommender.addUser(addNewUser,addId);

    //     $.each(eventRecommender.users, function(index,item){
    //       html+=`<li>${item.newUser}</li>`
    // });
    
    // $("#all-users").html(html);

    //     // console.log(addUserToList);
    //     // $("#all-users").append("<li>"+ addUserToList+"</li>")
    //     // $("#all-users").append("<li>User ID: "  + addId + ": " + "User Name: "+ addUser +"</li>")
    //     // $("#all-users").html(addUser)
       
    // })
    
// detele user block 
    $("#deleteBtn").click(function(e){
        e.preventDefault();
        let html="";
        let valueOfdeleteUserId=$("#delete-user-id").val();
        $.ajax({
            url:"/deleteUser",
            type: "DELETE",
            async: false,
            data: {deleteId:valueOfdeleteUserId},
            // dataType:"text",
            success:function (res){
                console.log("successful delete the id. this is the rest of the users" +JSON.stringify(res)) 
                $.each(res, function(index,item){
                            html+=`<li>${item.newUser}</li>`
                      });
                      $("#all-users").html(html);
            }
           
           
        })
    
     
    })

    // Add Event 
     $("#eventBtn").click(function(e){
         e.preventDefault();
        let html="";
         let eventId=$("#add-event-id").val();
          let eventName=$("#add-event-name").val();
          let eventDate=$("#add-event-date").val();
         let  eventCategory=$("#add-event-category").val();
         let  eventKeyword=$("#add-event-keyword").val();
         $.ajax({
<<<<<<< HEAD
             url:"/events",
             type:"POST",
             data:{addId:eventId, addEvent:eventName,date:eventDate,category:eventCategory,eventKey:eventKeyword},
            
             success(data){
                $.each(data, function(index,item){
                            html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
                      });
                $("#eventList").html(html);
             }
         })
        //    eventRecommender.addEvent(eventName,eventId,eventDate,eventCategory,eventKeyword);
        //    console.log(eventRecommender.events)
=======
            url:"/events",
            type: "POST",
            async: false,
            data: {id:eventId, event: eventName, date:eventDate,category:eventCategory, keyword:eventKeyword},
            // dataType:"text",
            success:function (res){
                console.log("received new event" +JSON.stringify(res)) 
                $.each(res, function(index,item){
                            html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
                      });
                      
                      $("#eventList").html(html);
           
         //    eventRecommender.addEvent(eventName,eventId,eventDate,eventCategory,eventKeyword);
>>>>>>> super-test
        //     $.each(eventRecommender.events, function(index,item){
        //         html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
        //   });
          
<<<<<<< HEAD
       
=======
        //   $("#eventList").html(html);
>>>>>>> super-test
        
        //   $("#eventList").append("<li>Event Id:"+eventId+ ",Event Name:" + eventName+"</li>")
          
     }
    })
})

//Delete event 
$("#deleteEventBtn").click(function(e){
    e.preventDefault();
    let html="";
    let deleteEventId=$("#delete-event-id").val();
    $.ajax({
        url:"/deleteEvent",
        type: "DELETE",
        async: false,
        data: {deleteId:deleteEventId},
        // dataType:"text",
        success:function (res){
            console.log("successful delete the id. this is the rest of the events" +JSON.stringify(res)) 
            $.each(res, function(index,item){
                        html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
                  });
                  $("#eventList").html(html);
        }
       
       
    })
//     eventRecommender.deleteEvent(deleteEventId);
//     $.each(eventRecommender.events, function(index,item){
//         html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
//   });
//   $("#eventList").html(html);

});


// Search Event By keyWord
$("#keywordBtn").click(function(e){
    e.preventDefault();
    let name;
    let id;
    let date;
    let category;
    let searchByKeyword=$("#keyword").val();

    $.ajax({
        type:"GET",
        url:`https://app.ticketmaster.com/discovery/v2/events.json?apikey=EJg3WOdWSxuVHGJ9hGXDByqmJU9jiJAl&keyword=${searchByKeyword}&locale=*&countryCode=US&preferredCountry=us`,
        async:true,
        dataType: "json",
        success: function(json) {
            console.log(`get some api data ${JSON.stringify(json._embedded.events)}`)
            var ticketMasterEvents = json._embedded.events;
            for (let i=0; i<ticketMasterEvents.length; i++){
                name=ticketMasterEvents[i].name;
                id=ticketMasterEvents[i].id;
             date="N/A";
            category=ticketMasterEvents[i].type;
                
            }
            $.ajax({
                type:"POST",
                url:"/keyword",
                async:true,
                data:{apiName:name,apiId:id,apiDate:date,apiCategory:category},
                dataType: "json",
                success: function(res) {
               
                    console.log("successful delete the id. this is the keyword" +JSON.stringify(res)) 
                }
            })
        }
    })
})
            // let searchByKeyword=$("#keyword").val();
        //     html="";
          
        //    for (let i=0; i<ticketMasterEvents.length; i++){
        //        if (ticketMasterEvents[i].name.includes(searchByKeyword)){
                        
        //          html+=`<li>${ticketMasterEvents[i].name}<br>Event type:${ticketMasterEvents[i].type}---Date:${ticketMasterEvents[i].dates.start.localDate}</li>`;
        //          eventRecommender.addEvent(ticketMasterEvents[i].name,ticketMasterEvents[i].id,ticketMasterEvents[i].dates.start.localDate,ticketMasterEvents[i].type)
        //        }
        //     // console.log("ticketmasterEvents[i] returns", ticketMasterEvents[i].name)
        //    }
         
        //    if(html.length===0){
        //        html= `No Result`
        //    }
        //    $("#keywordResult").append(html);

        //     let searchByKeyword=$("#add-event-keyword").val();
        //    console.log(events)
        //    for (var i=0;i<events.length;i++) {

        //    }
                    // Parse the response.
              
                    // Do other things.
                
       
        
      
      
//     let html="";
//     let searchByKeyword=$("#add-event-keyword").val();
//      eventRecommender.findEventsByDate(searchByKeyword);
//      $.each(eventRecommender.events, function(index,item){
//          if(searchByKeyword===item.keyword){
//         html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
//          }
//   });
//   $("#keywordesult").html(html);

// })





// Search Event By date
$("#dateBtn").click(function(e){
    e.preventDefault();
    let html="";
    let searchByDate=$("#date-search-id").val();
    $.ajax({
        url:"/date",
        type: "GET",
        async: false,
        data: {date:searchByDate},
        // dataType:"text",
        success:function (res){
            console.log("match the date" +JSON.stringify(res)) 
       $.each(res, function(index,item){
         if(searchByDate===item.date){
        html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
         }
  });
  $("#result").html(html);
        }
       
       
    })
    //  eventRecommender.findEventsByDate(searchByDate);
//      $.each(eventRecommender.events, function(index,item){
//          if(searchByDate===item.date){
//         html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
//          }
//   });
//   $("#result").html(html);

});

// Search By Category
$("#categoryBtn").click(function(e){
    e.preventDefault();
    let html="";
    let searchByCategory=$("#category-search-id").val();
    $.ajax({
        url:"/category",
        type: "GET",
        async: false,
        data: {category:searchByCategory},
        // dataType:"text",
        success:function (res){
            console.log("match the category" +JSON.stringify(res)) 
            $.each(res, function(index,item){
                         if(searchByCategory===item.category){
                        html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
                         }
                  });
                  $("#categoryResult").html(html);
        }
//      eventRecommender.findEventsByDate(searchByCategory);
//      $.each(eventRecommender.events, function(index,item){
//          if(searchByCategory===item.category){
//         html+=`<li>Event: ${item.eventName}<br> Date:${item.date}-Category:${item.category}-Keyword:${item.keyword}</li>`
//          }
//   });
//   $("#categoryResult").html(html);

});

 //Save Event for user: use nested loop
// $("#categoryBtn").click(function(e){
//     e.preventDefault();
//     let html="";
//      let userId=$("#save-user-id").val();
//      let eventId=$("#save-event-id").val();
//      eventRecommender.saveUserEvent(userId,eventId);
     
// )}
});
})