// var div=document.createElement("div");
// div.setAttribute("class","container");

// var div1=document.createElement("div");
// div1.setAttribute("class","row");

// var div2=document.createElement("div");
// div2.setAttribute("class","col");
// div2.innerHTML="this is col";

// div1.append(div2);
// div.append(div1);
// document.body.append(div);

//Assignemt 01: Create a HTML Form Using DOM
//1.firstname,2.Middlename,3.lastname,4.Phone number
//Deploy it in Netlify

var Fname=createlabels("label","for","name","First name");
var br1=createlinebreak("br");
var Fnameinput=createinput("input","type","text","id","First name");
var br2=createlinebreak("br");

var Mname=createlabels("label","for","name","Middle name");
var br3=createlinebreak("br");
var Mnameinput=createinput("input","type","text","id","Middle name");
var br4=createlinebreak("br");

var Lname=createlabels("label","for","name","Last name");
var br5=createlinebreak("br");
var Lnameinput=createinput("input","type","text","id","Last name");
var br6=createlinebreak("br");

var phone=createlabels("label","for","number","phone number");
var br7=createlinebreak("br");
var phoneinput=createinput("input","type","number","id","phone");
var br8=createlinebreak("br");


document.body.append(Fname,br1,Fnameinput,br2,Mname,br3,Mnameinput,br4,Lname,br5,Lnameinput,br6,phone,br7,phoneinput);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}