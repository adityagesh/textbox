/* MENU 
Calculator
Network Connection (network)
Browser info ( browser )
Bg colour change (#)
Date (date)
To Do list (Do:<text> Done:<number>)

*/
var Input = document.getElementById('value');
var output= document.getElementById('field');
var div=document.getElementById('page');
var list=[]; var i;
var path=["image1.jpeg","image2.jpg","image3.jpg","image4.jpg","image5.png","image6.png"];

Input.addEventListener('keydown',function(e) {
    if (e.keyCode === 13) 
    	{
    		main();
    	} 
	});

function main()
	{	
		var str=Input.value;
		temp=str.toLowerCase();
		if(str.startsWith("#"))
			colour(str);
		if(temp.startsWith("date"))
			 date();
		if(temp.startsWith("browser"))
			browser();
		if(temp.startsWith("network"))
			network();
		if(temp.startsWith("list"))
			dolist();
		if(temp.startsWith("do:"))
			tdo(str);
		if(temp.startsWith("done:"))
			done(str);
		if(temp.startsWith("image:"))
			img(str);
		if(str.match(/[+-/*]/))	
			calculator(str);
	}
function img(str)
	{
		str=str.substring(6);
		parseFloat(str);
		str=str;
		var ans = document.createElement("IMG");
	    ans.setAttribute("src", path[str]);
	    ans.setAttribute("width", "304");
	    ans.setAttribute("height", "228");
	    ans.setAttribute("alt", "Use image:0-5");
	    document.body.appendChild(ans);
	}

function done(str)
	{
		str=str.substring(6);
		parseFloat(str);
		str=str-1;
		list.splice(str,1);
		dolist();
	}
function tdo(str)
	{
		str=str.substring(3);
		list.push(str);
		dolist();
	}
function dolist()
	{ 
		var text;
		var len=list.length;
		text = "<ol>";
		for (i = 0; i < len; i++) {
			var j=i+1;
    		text += j+"." + list[i] + "<br>";
	}	
		text += "</ol>";
		output.innerHTML=text;
	}
function network()
	{
		if(navigator.onLine)
			{
				ans="Network connection found";
			}
		else
				ans="No network connection";
		output.innerHTML=ans;
	}
function browser()
	{
		output.innerHTML=navigator.appVersion;
	}
function colour(str)
	{
		div.style.backgroundColor = str;
	}
function date()
	{
		var str = new Date();
		str=str.toString();
		var ans="<b>Time: </b>"+str.slice(15,24)+"<br><b>Day:</b> "+str.slice(0,3)+"<br><b>Date:</b> "+str.slice(4,15);
		output.innerHTML=ans;
	}
function calculator(str)
	{
		function add(str)
			{
				var val = str.split("+");
				var ans= parseFloat(val[0])+parseFloat(val[1]);
				if(!isNaN(ans))	
					output.innerHTML=ans;
			}
		function sub(str)
			{
				var val = str.split("-");
				var ans= parseFloat(val[0])-parseFloat(val[1]);
				if(!isNaN(ans))
					output.innerHTML=ans;
			}
		function mult(str)
			{
				var val = str.split("*");
				var ans= parseFloat(val[0])*parseFloat(val[1]);
				if(!isNaN(ans))	
					output.innerHTML=ans;
			}
		function div(str)
			{
				var val = str.split("/");
				var ans= parseFloat(val[0])/parseFloat(val[1]);
				if(!isNaN(ans))	
					output.innerHTML=ans;
			}

		if(str.match(/[+]/))
			add(str);
		if(str.match(/[-]/))
			sub(str);
		if(str.match(/[*]/))
			mult(str);
		if(str.match(/[/]/))
			div(str);

	}

function dt()
	{
		Input.value="Date";
	}
function re()
	{
		Input.value="";
		output.innerHTML=" ";
	}

function bg()
	{
		Input.value="#";
		output.innerHTML=" ";
	}
function brw()
	{
		Input.value="Browser";
		output.innerHTML=" ";
	}
function net()
	{
		Input.value="Network";
		output.innerHTML=" ";
	}
function doo()
	{
		Input.value="Do:";
		output.innerHTML=" ";
	}
function donee()
	{
		Input.value="Done:";
		if(!temp.startsWith("do:"))
			output.innerHTML=" ";
	}
function disp()
	{
		Input.value="List";
		output.innerHTML=" ";
	}

	function ig()
	{
		Input.value="Image:";
	}