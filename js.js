




let tweetButton = document.getElementById("botton2").onclick = function(){
        let thePost = document.getElementsByClassName('hoverpost')[0];
   
    let contain = document.getElementById('postscontainer');
    contain.insertBefore(thePost.cloneNode(true), contain.firstElementChild)
    var postinput = document.getElementById('postInput').value;
    let theText = document.getElementById('thetxet').innerHTML = postinput;    
    var claer = document.getElementById('postInput').value = "";
    
    localStorage.setItem("postinput", postinput);
};

function retweetFunction(event){
    
    event.target.style = "color:green";

    

}



    
        function like(event){
            event.target.style = "color:red"
        }
    
 

 






var s = document.getElementsByTagName('a');
for (let i = 1; ( i<8 && i < s.length); i++){
    s[i].onclick = function() {
    var b = document.querySelector(".nav li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add('active');
    }
  };



    
