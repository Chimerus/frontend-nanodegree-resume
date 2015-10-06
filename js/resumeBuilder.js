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
	"github" : "Chimerus",
	"location" : "NJ"
},
	"picture url" : "http://i.imgur.com/uwN531y.jpg",
	"welcome message" : "Hello! Welcome to my resume page!",
	"skills" : skills
};

var work ={
	"jobs" :[
	{
	"title" : "Floor Staff",
	"employer" :"Regal Entertainment Group",
	"dates" ="2011-2015",
	"location" : "Boston",
	"description" : "Description here"
	},
		{
	"title" : "Graduate assistant",
	"employer" : "Emerson College",
	"dates" ="2009-2010",
	"location" : "Boston",
	"description" : "Description here"
	},
	]
};

var projects = {
	"project":[
	{
	"title" : "Portable PC case modification",
	"dates" : "2014",
	"description" : "project log: http://www.instructables.com/id/Portable-PC-project-inspired-by-Shadowrun-Cyberdec/",
	"images" : ["http://i.imgur.com/WZ8ACDe.jpg","http://i.imgur.com/WXC52vv.jpg", "http://i.imgur.com/vlwVXXq.jpg"]
	}
  ]
}

var education = {
	"schools":[
	{
	"name" : "Boston University",
	"degree" : "BA",
	"major" : "Psychology",
	"year" : "2008",
	"city" : "Boston"
	},
	{
	"name" : "Emerson College",
	"degree" : "MA-W",
	"major" : "Speech-Language Pathology",
	"year" : "2009-2010",
	"city" : "Boston"
	},
	{
	"name" : "NECO",
	"degree" : "OD-W",
	"major" : "Speech-Language Pathology",
	"year" : "2012-2014",
	"city" : "Boston"
	}
  ]
};

/*
$('#header').append(formattedName);
$('#header').append(formattedRole);
$('#main').append(bio);
$('#main').append(work["position"]);
$('#main').append(education.name);
*/