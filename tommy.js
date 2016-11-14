$(document).ready(function(){
    var section1 = document.getElementById("sec1");
    var section2 = document.getElementById("sec2");
    var section3 = document.getElementById("sec3");
    var section4 = document.getElementById("sec4");
    var section5 = document.getElementById("sec5");
    
    
    
    $.ajax({
        url:"part3.html",
        dataType:"html",
        success:function(resp){
            section1.innerHTML = resp;
        }
    });
    
    $.ajax({
        url:"part4.html",
        dataType:"html",
        success:function(resp){
            section2.innerHTML = resp;
        }
    });
    
    $.ajax({
        url:"part1.html",
        dataType:"html",
        success:function(resp){
            section3.innerHTML = resp;
            img1.onclick = function(){
                img1.style.backgroundImage = "url(https://media.giphy.com/media/11drQGvTzxKzwQ/giphy.gif)";
            }
            img2.onclick = function(){
                img2.style.backgroundImage = "url(http://hongkongthrumyeyes.com/wp-content/uploads/2013/07/An-empty-bowl-of-Ichiran-ramen.-Good-to-the-last-drop.-hongkong-hk-hkig.jpg)";
            }
            img3.onclick = function(){
                img3.style.backgroundImage = "url(https://lh5.googleusercontent.com/-4b6nl7kewj0/VBZ63bmpAvI/AAAAAAAEufY/KfaTmfyw00M/s800/hong-kong-egg-waffles-4.jpg)";
            }
            img4.onclick = function(){
                img4.style.backgroundImage = "url(https://media.giphy.com/media/rXtKgLRD5kssU/giphy.gif)";
            }
            img5.onclick = function(){
                img5.style.backgroundImage = "url(https://media.giphy.com/media/XnSEOkef5goG4/giphy.gif)";
            }
            img6.onclick = function(){
                img6.style.backgroundImage = "url(https://media.giphy.com/media/f27BSs9VX2ecw/giphy.gif)";
            }
        }
    });
    
    $.ajax({
        url:"part2.html",
        dataType:"html",
        success:function(resp){
            section4.innerHTML = resp;
        }
    });
    
    $.ajax({
        url:"part5.html",
        dataType:"html",
        success:function(resp){
            section5.innerHTML = resp;
        }
    });
  
});