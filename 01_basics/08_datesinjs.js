//Dates
let myDate=new Date()
{
    // console.log(myDate)
    // console.log(myDate.toString())
    // console.log(myDate.toDateString())
    // console.log(myDate.toISOString())
    // console.log(myDate.toLocaleString())

    // console.log(typeof myDate)

    let mycreatedDate=new Date(2023,0,23)
    // console.log(mycreatedDate.toDateString())
    // console.log(mycreatedDate.toLocaleString())
    // console.log(mycreatedDate)

    let mycreatedDate2=new Date(2023,0,23,5,3)
    // console.log(mycreatedDate2.toDateString())
    // console.log(mycreatedDate2.toLocaleString())
    // console.log(mycreatedDate2)

    let mycreatedDate3=new Date("2023-01-23")
    // console.log(mycreatedDate3.toDateString())
    // console.log(mycreatedDate3.toLocaleString())
    // console.log(mycreatedDate3)
    let mycreatedDate4=new Date("01-23-2023")
    // console.log(mycreatedDate4.toDateString())
    // console.log(mycreatedDate4.toLocaleString())
    // console.log(mycreatedDate4)

    let mytimestamp=Date.now()//value in milliseconds
    console.log(mytimestamp)
    console.log(mycreatedDate.getTime())
    console.log(Math.floor(Date.now()/1000))

    let newdate= new Date()
    console.log(newdate);
    console.log(newdate.getDay())



     newdate.toLocaleString('default',{
        weekday:"long",
     })


}