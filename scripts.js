let left = true;
let mss_len=0;
let fst_len=0;
let eml_len=0;


document.getElementById("roro").addEventListener("mouseenter", (e) => {
  e.preventDefault()
  
  if (left) {
    document.getElementById("roro").style.left = "75%";
  } else {
    document.getElementById("roro").style.left = "2%";
  }
});
document.getElementById("roro").addEventListener("mouseleave", (e) => {
  left = !left;
});


document.getElementById("exampleFormControlTextarea1").addEventListener("input",function(){
  let changing_text = document.getElementById("exampleFormControlTextarea1").value.replace(/ /g,'');
  mss_len = changing_text.length;
  if(mss_len != 0 && fst_len != 0 && eml_len!=0){

    document.getElementById("roro").addEventListener("mouseenter", (e) => {
      e.preventDefault()
      
      if (left) {
        document.getElementById("roro").style.left = "2%";
      } else {
        document.getElementById("roro").style.left = "2%";
      }
    });
    document.getElementById("roro").addEventListener("mouseleave", (e) => {
      left = !left;
    });
  }else{
    document.getElementById("roro").addEventListener("mouseenter", (e) => {
      e.preventDefault()
      
      if (left) {
        document.getElementById("roro").style.left = "75%";
      } else {
        document.getElementById("roro").style.left = "2%";
      }
    });
    document.getElementById("roro").addEventListener("mouseleave", (e) => {
      left = !left;
    });
  }
})
document.getElementById("validationServer01").addEventListener("input",function(){
  let changing_text = document.getElementById("validationServer01").value.replace(/ /g,'');
  fst_len = changing_text.length;
  
})
document.getElementById("validationServer02").addEventListener("input",function(){
  let changing_text = document.getElementById("validationServer02").value.replace(/ /g,'');
  eml_len = changing_text.length;
})
var submitBtn = document.getElementById('roro');
submitBtn.addEventListener('click', async (e)=>{
  if(mss_len != 0 && fst_len != 0 && eml_len!=0){
    var message_txt = document.getElementById("exampleFormControlTextarea1").value;
    var senders_name = document.getElementById("validationServer01").value;
    var senders_email = document.getElementById("validationServer02").value;
// e.preventDefault();
    var templateParams = {
        from_name: senders_name,
        message: message_txt,
        email: senders_email
        };
        console.log(templateParams);
        try {
          await emailjs.send('service_l5g9yli','template_6hnsizr', templateParams,'B0PTwjBJN3LoT4bON')
        .then(function() {
         alert("Message sent");
        });
        } catch (error) {
          console.log("error sending the message");
        }
}else alert("Please fill all sections of the form")
})







