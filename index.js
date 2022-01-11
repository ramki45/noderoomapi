const express = require("express");
const app = express();
app.use(express.json());
let customer = [];
let rooms = [];
let remove = [];


//post room details
app.post('/roomdetail',function(req,res){
    rooms.push(req.body);
    
    res.json({
        message: 'room details'
    })
    })

//get room details
app.get('/rooms',function(req,res){
   
    res.json(rooms);

})

//post customer detail with bookings
app.post('/customer_detail',function(req,res){
    req.body.id = customer.length + 1;
    customer.push(req.body)
    res.json({
        message: 'customer added'
    })
   
})

//get customer room with booking status
app.get('/customers',function(req,res){
    customer.push(req.body)
    res.json(customer)
})


//customer with booked data
app.get('/booking_customer',function(req,res){
    remove.push(req.body)
    delete(remove[0].status);
    res.json(remove)
        

})



app.listen(3001);