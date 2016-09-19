// global namespace
var RESUME = RESUME || {};
// sub namespace
RESUME.model = RESUME.model || {};

// define prototypes for these objects
RESUME.model.Bio = function (name) {
    this.name = name;
    this.role = "";
    this.contacts = {};
    this.welcomeMessage = "";
    this.skills = [];
    this.biopic = "";
};
RESUME.model.Bio.prototype.display = function () {

};

RESUME.model.Education = function () {
    this.schools = [];
    this.onlineCourses = [];
};
RESUME.model.Education.prototype.display = function () {};
RESUME.model.School = function () {
    this.name = "";
    this.location ="";
    this.degree = "";
    this.majors = [];
    this.dates = "";
    this.url = "";
};
RESUME.model.OnlineCourse = function () {
    this.title = "";
    this.school = "";
    this.dates = "";
    this.url = "";
};

RESUME.model.Work = function () {
    this.jobs = [];
};
RESUME.model.Work.prototype.display = function () {};
RESUME.model.Job = function () {
    this.employer = "";
    this.title = "";
    this.location = "";
    this.dates = "";
    this.description = "";
};

RESUME.model.Projects = function () {
    this.projects = [];
};
RESUME.model.Projects.prototype.display = function () {};
RESUME.model.ProjectItem = function () {
    this.title = "";
    this.dates = "";
    this.description = "";
    this.images = [];
};
