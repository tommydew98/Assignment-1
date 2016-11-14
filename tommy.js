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