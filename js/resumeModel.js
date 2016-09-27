// global namespace
var RESUME = RESUME || {};
// sub namespace
RESUME.model = RESUME.model || {};

RESUME.model.Bio = function() {
    this.name = "";
    this.role = "";
    this.contacts = {};
    this.welcomeMessage = "";
    this.skills = [];
    this.biopic = "";
};
RESUME.model.Bio.prototype.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedBiopic = HTMLbioPic.replace('%data%', this.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
    $('#header').prepend(formattedName, formattedRole);
    $('#header').append(formattedBiopic, formattedWelcomeMsg, HTMLskillsStart);
    for (var i = 0; i < this.skills.length; i++) {
        var skillFormatted = HTMLskills.replace('%data%', this.skills[i]);
        $('#skills').append(skillFormatted);
    }
    for (var key in this.contacts) {
        if (this.contacts.hasOwnProperty(key)) {
            var contactFormatted = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', this.contacts[key]);
            $('#topContacts').append(contactFormatted);
            $('#footerContacts').append(contactFormatted);
        }
    }
};

RESUME.model.Education = function() {
    this.schools = [];
    this.onlineCourses = [];
};
RESUME.model.Education.prototype.display = function() {
    if (this.schools) {
        for (var i = 0; i < this.schools.length; i++) {
            var school = this.schools[i];
            if (school) {
                $('#education').append(HTMLschoolStart);

                $('.education-entry:last').append(
                    HTMLschoolName.replace('%data%', school.name).replace('#', school.url) + HTMLschoolDegree.replace('%data%', school.degree),
                    HTMLschoolDates.replace('%data%', school.dates),
                    HTMLschoolLocation.replace('%data%', school.location)
                );

                for (var j = 0; j < school.majors.length; j++) {
                    console.log(school.majors[j]);
                    $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors[j]));
                }
            }
        }
    }

    if (this.onlineCourses && this.onlineCourses.length > 0) {
        $('#education').append(HTMLonlineClasses);
        for (var k = 0; k < this.onlineCourses.length; k++) {
            var onlineCourse = this.onlineCourses[k];
            if (onlineCourse) {
                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(
                    HTMLonlineTitle.replace('%data%', onlineCourse.title).replace('#', onlineCourse.url) + HTMLonlineSchool.replace('%data%', onlineCourse.school),
                    HTMLonlineDates.replace('%data%', onlineCourse.dates),
                    HTMLonlineURL.replace('%data%', onlineCourse.url).replace('#', onlineCourse.url)
                );
            }
        }
    }
};
RESUME.model.School = function() {
    this.name = "";
    this.location = "";
    this.degree = "";
    this.majors = [];
    this.dates = "";
    this.url = "";
};
RESUME.model.OnlineCourse = function() {
    this.title = "";
    this.school = "";
    this.dates = "";
    this.url = "";
};

RESUME.model.Work = function() {
    this.jobs = [];
};
RESUME.model.Work.prototype.display = function() {
    if (this.jobs) {
        for (var i = 0; i < this.jobs.length; i++) {
            var job = this.jobs[i];
            if (job) {
                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(
                    HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title),
                    HTMLworkDates.replace('%data%', job.dates),
                    HTMLworkLocation.replace('%data%', job.location),
                    HTMLworkDescription.replace('%data%', job.description)
                );
            }
        }
    }
};
RESUME.model.Job = function() {
    this.employer = "";
    this.title = "";
    this.location = "";
    this.dates = "";
    this.description = "";
};

RESUME.model.Projects = function() {
    this.projects = [];
};
RESUME.model.Projects.prototype.display = function() {
    if (this.projects) {
        for (var i = 0; i < this.projects.length; i++) {
            var project = this.projects[i];
            if (project) {
                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(
                    HTMLprojectTitle.replace('%data%', project.title),
                    HTMLprojectDates.replace('%data%', project.dates),
                    HTMLprojectDescription.replace('%data%', project.description)
                );
                for (var j = 0; j < project.images.length; j++) {
                    var image = project.images[j];
                    if (image) {
                        $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
                    }
                }
            }
        }
    }
};
RESUME.model.Project = function() {
    this.title = "";
    this.dates = "";
    this.description = "";
    this.images = [];
};