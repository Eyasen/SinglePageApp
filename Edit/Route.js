//app.config(function ($routeProvider) {
//  
//    $routeProvider
app.config(function ($routeProvider) {
     

    $routeProvider
    .when("/",
       {
           templateUrl: "/DashBoard/ViewDashBoard"
       })
   .when("/City",
       {
           templateUrl: "/City/AddCity"
       })
    .when("/City/CityIndex",
        {
            templateUrl: "/City/CityIndex"
        })
     .when("/City/SelectCity/:ID",
        {
            templateUrl: "/City/SelectCity"
        })
    .when("/Country",
        {
            templateUrl: "/Country/AddCountry"
        })
    .when("/Country/CountryIndex",
        {
            templateUrl: "/Country/CountryIndex"
        })
    .when("/Country/SelectCountry/:ID",
        {
            templateUrl: "/Country/SelectCountry"
        })
    .when("/Designation",
        {
            templateUrl: "/Designation/AddDesignation"
        })
    .when("/Designation/DesignationIndex",
        {
            templateUrl: "/Designation/DesignationIndex"
        })
    .when("/WeekDay",
        {
            templateUrl: "/WeekDay/Index"
        })
    .when("/Stuff",
        {
            templateUrl: "/Stuff/AddStuff"
        })
    .when("/Stuff/StuffIndex",
        {
            templateUrl: "/Stuff/StuffIndex"
        })
    .when("/Attendance", {
        templateUrl: "/Attendance/AddAttendance"
    })
    .when("/Attendance/AttandenceIndex",
        {
            templateUrl: "/Attendance/AttandenceIndex"
        })
    .when("/Course",
        {
            templateUrl: "/Course/AddCourse"
        })
    .when("/Course/CourseIndex",
        {
            templateUrl: "/Course/CourseIndex"
        })
    .when("/Student",
        {
            templateUrl: "/Student/AddStudent"
        })
    .when("/Student",
        {
            templateUrl: "/Student/AddStudent"
        })
   .when("/Student/StudentIndex",
        {
            templateUrl: "/Student/StudentIndex"
        })
   .when("/Weaver",
        {
            templateUrl: "/Weaver/AddWeaver"
        })
    .when("/Weaver/WeaverIndex",
        {
            templateUrl: "/Weaver/WeaverIndex"
        })
     .when("/WeekDays",
        {
            templateUrl: "/WeekDays/AddWeekDays"
        })
    .when("/WeekDays/WeekDaysIndex",
        {
            templateUrl: "/WeekDays/WeekDaysIndex"
        })
    .when("/UserLogIn",
        {
            templateUrl: "/UserLogIn/UserLogInPage"
        });
});