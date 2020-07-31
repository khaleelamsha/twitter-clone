




let tweetButton = document.getElementById("botton2").onclick = function(){
        let thePost = document.getElementsByClassName('hoverpost')[0];
   
    let contain = document.getElementById('postscontainer');
    contain.insertBefore(thePost.cloneNode(true), contain.firstElementChild)
    var postinput = document.getElementById('postInput').value;
    let theText = document.getElementById('thetxet').innerHTML = postinput;    
    var postinput = document.getElementById('postInput').value = "";
};

function retweetFun(){
     let g = document.getElementById('postscontainer');
for (var i = g.children.length-1; i > 0; i--)
{

    (function(index){
        g.children[i].onclick = function(){
     
     let thePost = document.getElementById('hoverpost').cloneNode(true);
        let contains = document.getElementById('retweetcontainer');
        
        contains.insertBefore(thePost, contains.firstElementChild)
     
        }    
    })(i);

}

}



    
    function like(){
        document.getElementById('likeid').style = "color:red"
    }
    
 

 var postcontiner = [document.getElementById('postscontainer').children];
    let c = [];
        for (let element of postcontiner){
            
       
      
      
    console.log(element)

           
        }







var s = document.getElementsByTagName('a');
for (let i = 1; ( i<8 && i < s.length); i++){
    s[i].onclick = function() {
    var b = document.querySelector(".nav li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add('active');
    }
  };



    
