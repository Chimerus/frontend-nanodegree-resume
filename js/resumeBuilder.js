//$('#main').append("Jason");
var name ="Jason";
var formattedName = HTMLheaderName.replace("%data%", name);

var role ="Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills=["awesomeness, ", "programming, ", "learning, ", "js"];

var bio = {
	"name" : name,
	"role" : role,
	"contact info" : { 
	"phone" : "some cell number",
	"email" : "Example.gmail.com",
	"github" : "Chimerus"
},
	"picture url" : "http://i.imgur.com/uwN531y.jpg",
	"welcome message" : "Hello! Welcome to my resume page!",
	"skills" : skills
};

var work ={};
work.position = "Floor Staff";
work.employer ="Regal Entertainment Group";
work.worked ="5";
work.city = "Boston";

var education = {};
education["name"] = "Boston University";
education["year"] = "2008";
education["city"] = "Boston";

$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#main').append(bio);
$('#main').append(work["position"]);
$('#main').append(education.name);