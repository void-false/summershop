var lang="eng";

$(document).ready(function() {
    
        
    
        $("#data").load("data.html #p1eng");

        $("#li1").click(function() {
            
            $("#figure").attr("src", "img/boiler1.jpg");
            
            $("li").removeClass("active");
            $(this).addClass("active");
            switch(lang) {
                case "eng": 
                    $("#data").load("data.html #p1eng");
                    break;
                case "heb": 
                    $("#data").load("data.html #p1heb");
                    break;
                case "rus": 
                    $("#data").load("data.html #p1rus");
                    break;
            }
        });
        $("#li2").click(function() {
            
            $("#figure").attr("src", "img/boiler2.jpg");
            
            $("li").removeClass("active");
            $(this).addClass("active");
            switch(lang) {
                case "eng": 
                    $("#data").load("data.html #p2eng");
                    break;
                case "heb": 
                    $("#data").load("data.html #p2heb");
                    break;
                case "rus": 
                    $("#data").load("data.html #p2rus");
                    break;
            }
        });
        $("#li3").click(function() {
            
            $("#figure").attr("src", "img/boiler3.jpg");
            
            $("li").removeClass("active");
            $(this).addClass("active");
            switch(lang) {
                case "eng": 
                    $("#data").load("data.html #p3eng");
                    break;
                case "heb": 
                    $("#data").load("data.html #p3heb");
                    break;
                case "rus": 
                    $("#data").load("data.html #p3rus");
                    break;
            }
        });
        $("#li4").click(function() {
            
            $("#figure").attr("src", "img/boiler4.jpg");
            
            $("li").removeClass("active");
            $(this).addClass("active");
            switch(lang) {
                case "eng": 
                    $("#data").load("data.html #p4eng");
                    break;
                case "heb": 
                    $("#data").load("data.html #p4heb");
                    break;
                case "rus": 
                    $("#data").load("data.html #p4rus");
                    break;
            }
        });

    $("#buttonEng").click(function() {
        lang="eng";
        $("h1").html("Boilerplate &middot; is a professional front-end");
        $("#li1").html("Home");
        $("#li2").html("Messages");
        $("#li3").html("About");
        $("#li4").html("Help");
        var currentli = $("ul").find(".active").attr("id");
        switch(currentli) {
                case "li1":
                    $("#data").load("data.html #p1eng");
                    break;
                case "li2":
                    $("#data").load("data.html #p2eng");
                    break;
                case "li3":
                    $("#data").load("data.html #p3eng");
                    break;
                case "li4":
                    $("#data").load("data.html #p4eng");
                    break;
                    
        }
    });
    $("#buttonHeb").click(function() {
        lang="heb";
        $("h1").html("מוכן מראש &middot; היא תבנית חזיתי מקצועית");
        $("#li1").html("בית");
        $("#li2").html("הודעות");
        $("#li3").html("אודות");
        $("#li4").html("עזרה");
        var currentli = $("ul").find(".active").attr("id");
        switch(currentli) {
                case "li1":
                    $("#data").load("data.html #p1heb");
                    break;
                case "li2":
                    $("#data").load("data.html #p2heb");
                    break;
                case "li3":
                    $("#data").load("data.html #p3heb");
                    break;
                case "li4":
                    $("#data").load("data.html #p4heb");
                    break;
                    
        }
    });
    $("#buttonRus").click(function() {
        lang="rus";
        $("h1").html("Boilerplate &middot; это профессиональные шаблоны");
        $("#li1").html("Домой");
        $("#li2").html("Сообщения");
        $("#li3").html("О Нас");
        $("#li4").html("Помощь");
        var currentli = $("ul").find(".active").attr("id");
        switch(currentli) {
                case "li1":
                    $("#data").load("data.html #p1rus");
                    break;
                case "li2":
                    $("#data").load("data.html #p2rus");
                    break;
                case "li3":
                    $("#data").load("data.html #p3rus");
                    break;
                case "li4":
                    $("#data").load("data.html #p4rus");
                    break;
                    
        }
    });

});


