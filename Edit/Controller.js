app.controller('myCtrll', function ($scope, $http, $routeParams, $interval) {

    $scope.itemsPerPage = [2, 5, 10, 20, 30, 40, 50];
    //......Country Operations starts........

    $scope.AddCountry = function() //For Adding Countries
        {
            $http({
                method: "POST",
                url: "/Country/AddCountry",
                data: $scope.Country

            }).then(function mySucces(response) {
                window.location.href = "#!/Country/CountryIndex";
                toastr.success("Saved Successfully");

            }, function myError(response) {

            });
        }

    $http({ //For Getting Countries
        method: "GET",
        url: "/Country/GetCountry"
    }).then(function mySucces(response) {
        //console.log(response.data.result);
        $scope.CountryList = response.data.result;

    }, function myError(response) {

    });

    $scope.getCountryInfo = function () {
        debugger
        var id = $routeParams.ID;

        $http({
            method: "GET", //get CityList List for Stuff
            url: "/Country/GetCountryById?id=" + id,

        }).then(function mySuccess(response) {
            //console.log(response.data);

            $scope.CountryInfo = response.data;
            // $scope.country = response;
        }, function myError(response) {

        });
    }

    $scope.UpdateCountry = function () //Update Country
    {
        debugger
        $http({
            method: "POST",
            url: "/Country/UpdateCountry",
            data: $scope.CountryInfo
        }).then(function mySuccess(response) {
            toastr.success("Updated Successfully");
            //console.log(response.data.result);
            //$http.get("/Country/GetCountry").then(function mySuccess(response) {

            //    toastr.success("Updated Successfully");
            window.location.href = "#!/Country/CountryIndex";
            //});

        }, function myError(response) {

        });
    }

    $scope.DeleteCountry = function (country) //delete country working code
    {
        debugger
        $http.post("/Country/DeleteCountry", { ID: country.Country_Id })
            .then(function mySucces(response) {
                $http.get("/Country/GetCountry").then(function (response) {
                    $scope.CountryList = response.data.result;
                    toastr.warning("Deleted Successfully");
                });

            }, function myError(response) {

            });
    }


    $scope.SelectCountry = function (country) {
        debugger
        $http.post("/Country/SelectCountry", { ID: country.Country_Id })
            .then(function mySucess(response) {

                // window.location.href = "#!/Country/SelectCountry/" + country.Country_Id;
                //$scope.CountryList = response.data.CountryList;

            });
    }


    $scope.SelectCity = function (city) {
        debugger
        $http.post("/City/SelectCity", { ID: city.City_Id })
            .then(function mySucess(response)
            {

            });
    }

    //......Country Operations ends........

    

    //......City Operations Starts........


    $scope.getCityInfo = function () {
        debugger
        var id = $routeParams.ID;

        $http({
            method: "GET", //get CityList List for Stuff
            url: "/City/GetCityById?id=" + id,

        }).then(function mySuccess(response) {
            //console.log(response.data);

            $scope.City = response.data;
            // $scope.country = response;
        }, function myError(response) {

        });
    }

    $http({
        method: "GET", //get CityList List for Stuff
        url: "/City/GetCity"
    }).then(function mySuccess(response) {
        $scope.CityList = response.data.result;
    }, function myError(response) {

    });

    $scope.UpdateCity = function () //add City
    {
        $http
            ({
                method: "POST",
                url: "/City/UpdateCity",
                data: $scope.City
            }).then(function mySucces(response)
            {
                toastr.success("Updated Successfully");
                window.location.href = "#!/City/CityIndex";
            }, function myError(response) {

         });
    }

    $scope.AddCity = function () //add City
    {
        $http
            ({
                method: "POST",
                url: "/City/AddCity",
                data: $scope.City
            }).then(function mySucces(response) {
                window.location.href = "#!/City/CityIndex";
                toastr.success("Saved Successfully");
            }, function myError(response) {

            });
    }

    $scope.DeleteCity = function (city) //delete city working code
    {
        debugger
        $http.post("/City/DeleteCity", { ID: city.City_Id })
            .then(function mySucces(response) {
                $http.get("/City/GetCity").then(function (response) {
                    $scope.CityList = response.data.result;
                    toastr.warning("Deleted Successfully");
                });

            }, function myError(response) {

            });
    }

    //......City Operations ends........

    $scope.AddDesignation = function () {
        //For Adding Designations
        $http({
            method: "POST",
            url: "/Designation/AddDesignation",
            data: $scope.Designation

        }).then(function mySucces(response) {

        }, function myError(response) {

        });
    }

    $http({ //get Designation List
        method: "GET",
        url: "/Designation/GetDesignation"
    }).then(function mySucces(response) {
        //console.log(response.data.result);
        $scope.DesignationList = response.data.result;

    }, function myError(response) {

    });
    //Week Day Operations

    $scope.AddWeekDays = function ()
    {
        debugger
        $http({
            method: "POST",
            url: "/WeekDays/AddWeekDays",
            data: $scope.WeekDays

        }).then(function mySucces(response) {

        }, function myError(response) {

        });
    }

    //Get Week days starts

    $http({
        method: "GET", //get Wekkday List
        url: "/WeekDays/GetWeekDays"
    }).then(function mySuccess(response) {
        //console.log(response.data.result);
        $scope.WeekDaysList = response.data.result;
    }, function myError(response) {

    });
    //Get Week days Ends

    $http({
        method: "GET", //get Designation List for Stuff
        url: "/Stuff/GetStuff"
    }).then(function mySuccess(response) {
        //console.log(response.data.result);
        $scope.StuffList = response.data.result;
    }, function myError(response) {

    });


    //$scope.UpdateCity = function ()
    //{
    //    debugger
    //    $http
    //        ({
    //        method: "POST",
    //        url: "/City/UpdateCity",
    //        data:$scope.City
    //        }).then(function mySucces(response) {
    //            //console.log(response.data.result);
    //            $http.get("/City/GetCity").then(function (response) {
    //                window.location.href = "#!/City/CityIndex",
    //                toastr.success("Updated Successfully")
    //            });

    //        }, function myError(response) {

    //        });
    //}
        

    //$scope.UpdateCity = function () //Update Country
    //{
    //    debugger
    //    $http({
    //        method: "POST",
    //        url: "/City/UpdateCity",
    //        data: $scope.City
    //    }).then(function mySucces(response) {
    //        //console.log(response.data.result);
    //        $http.get("/City/GetCity").then(function (response) {
    //            window.location.href = "#!/City/CityIndex",
    //                toastr.success("Updated Successfully")
    //        });

    //    }, function myError(response) {

    //    });
    //}

   


    $scope.AddStuff = function () //Add stuff
    {
        debugger
        var file = $scope.myFile;
        console.dir(file);
        console.log('file is ');

        var fd = new FormData();
        fd.append('file', file);
        fd.append('Stuff_Name', $scope.Stuff.Stuff_Name);
        fd.append('DesignationId', $scope.Stuff.DesignationId);
        fd.append('CityId', $scope.Stuff.CityId);
        fd.append('CountryId', $scope.Stuff.CountryId);
        fd.append('Address', $scope.Stuff.Address);
        fd.append('Phone', $scope.Stuff.Phone);
        fd.append('Email', $scope.Stuff.Email);
        fd.append('FathersName', $scope.Stuff.FathersName);
        fd.append('MothersName', $scope.Stuff.MothersName);
        fd.append('VoterId', $scope.Stuff.VoterId);
   
        console.log(fd);
        uploadUrl = "/Stuff/AddStuff";

        // Simple GET request example:
        $http.post(uploadUrl, fd,
        {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        })
        .then(function mySucces(response)
        {
            toastr.success("Employee Added Sucess Fully!");
        },
         function myError(response)
         {

         });
     }

   
    //$scope.deleteCountry = function (country) //delete Country
    //{
    //    debugger
    //        $http({
    //            method: "DELETE",
    //            url: "/Country/DeleteCountry/" + country.Country_Id

    //        }). success(function (data) {
    //            alert = "The Person Deleted Successfully!!!";
    //            GetCountry();
    //        }).error(function (data) {
    //            alart = "Unable to delete a person: " + error.message;
    //        });

    //};


    //$scope.DeleteCountry = function (country) delete country working code
    //{
    //    debugger
    //    $http.post("/Country/DeleteCountry", { ID: country.Country_Id })
    //    .then(function mySucces(response)
    //    {
    //        alert(country.Country_Name + ' Deleted Successfully!!!');
    //        location.reload();
    //    }, function myError(response) {

    //    });
    //}


    $scope.GetCityByCountryId = function () //add City
    {
        debugger
        $http
            ({
                method: "POST",
                url: "/Stuff/GetCityByCountryId/",
                data: JSON.stringify({ CountryID: $scope.Stuff.CountryId })
            }).then(function mySucces(response) {
                
                //toastr.success("Updated Successfully");
                //window.location.href = "#!/City/CityIndex";
                //$scope.CountryList = response.data.result;
                $scope.CityList = response.data;
                
            }, function myError(response) {

            });
    }


    
    // get Attendance Information starts

    debugger
    $http({
        method: "GET", //getattendance List 
        url: "/Attendance/GetAttendance"
    }).then(function mySuccess(response)
    {
        $scope.AttendanceList = response.data.result;
        //$scope.AttendanceList.get

    }, function myError(response)
    {

    });

    // get Attendance Information Ends


    //Attendance add starts

    //ticking Time starts

    var tick = function () {
        $scope.today = Date.now();
    }
    tick();
    $interval(tick, 1000);

    //$scope.today = new Date();

    //ticking Time ends


    //login time picker Strats

    $scope.AddAttendance = function (id, date, time) {

        var d = new Date(time);
        var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        var hours = (d.getHours() < 10) ? "0" + d.getHours() % 12 : d.getHours() % 12;
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        var formattedTime = hours + ":" + minutes;

        $http({
            method: "POST",
            url: "Attendance/AddAttendance",
            data: { id: id, date: date, time: formattedTime },
        }).then(function mySucces(response) {


            //$scope.AttendanceList = response.data;

        }, function myError(response) {

        });
    }

    // logintime picker ends
    
    //logOut time picker Strats
    $scope.AddAttendanceOut = function (id, date, time)
    {
        debugger
        var d = new Date(time);
        var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        var hours = (d.getHours() < 10) ? "0" + d.getHours() % 12 : d.getHours() % 12; 
        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        var formattedTime = hours + ":" + minutes;
        debugger

        $http({
            method: "POST",
            url: "Attendance/AddAttendanceOut",
            data: { id: id, date: date, time: formattedTime }
        }).then(function mySucces(response) {


            //$scope.AttendanceList = response.data;

        }, function myError(response) {

        });
    }
    //logOut time picker ends

    $scope.dateOptions = {
        //dateDisabled: disabled,   //disables the popup
        //minDate: new Date(),
        startingDay: 1,
    };
    /*// Disable weekend selection
    function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }*/
    $scope.format = 'yyyy/MM/dd';
    $scope.datetpicker = new Date();
    $scope.open = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };

    //datetime picker ends

    //Attendance add ends

    //course Operattion Starts
    $scope.AddCourse = function ()
    {
        debugger
        $http({
            method: "POST",
            url: "/Course/AddCourse",
            data: $scope.course

        }).then(function mySucces(response) {

        }, function myError(response) {

        });
    }
    debugger
    $http({
        method: "GET", //get Designation List for Stuff
        url: "/Course/GetCourses"
    }).then(function mySuccess(response) {
        $scope.CourseList = response.data.result;
        //$scope.AttendanceList.get

    }, function myError(response) {

    });
    //course Operattion Ends

    //Weaver Operation Starts

    $scope.AddWeaver = function ()
    {
        debugger
        $http({
            method: "POST",
            url: "/Weaver/AddWeaver",
            data: $scope.weaver

        }).then(function mySucces(response) {

        }, function myError(response) {

        });
    }

    debugger
    $http({
        method: "GET", //get Designation List for Stuff
        url: "/Weaver/GetWeavers"
    }).then(function mySuccess(response) {
        $scope.WeaverList = response.data.result;
        //$scope.AttendanceList.get

    }, function myError(response) {

    });

    //Weaver Operation Ends

    //Student Operation Starts

    //$scope.AddStudent = function ()
    //{
    //    debugger
    //    $http({
    //        method: "POST",
    //        url: "/Student/AddStudent",
    //        data: $scope.student
    //    }).then(function mySucces(response) {

    //    }, function myError(response) {

    //    });
    //}
    $scope.GetCityByCountry = function () //add City
    {
        debugger
        $http
            ({
                method: "POST",
                url: "/Student/GetCityByCountry/",
                data: JSON.stringify({ CountryID: $scope.student.CountryId })
            }).then(function mySucces(response) {

                //toastr.success("Updated Successfully");
                //window.location.href = "#!/City/CityIndex";
                //$scope.CountryList = response.data.result;
                $scope.CityList = response.data;

            }, function myError(response) {

            });
    }

    $scope.AddStudent = function () //Add stuff
    {
        debugger
        var file = $scope.myFile;
        console.dir(file);
        console.log('file is ');

        var fd = new FormData();
        fd.append('file', file);
        fd.append('Student_Name', $scope.student.Student_Name);
        fd.append('DateOfBirth', $scope.datetpicker.toUTCString());
        fd.append('Student_Sex', $scope.student.Student_Sex);
        fd.append('Student_MailingAddress', $scope.student.Student_MailingAddress);
        fd.append('Student_PermanentAddress', $scope.student.Student_PermanentAddress);
        fd.append('Student_Phone', $scope.student.Student_Phone);
        fd.append('Student_Email', $scope.student.Student_Email);
        fd.append('CountryId', $scope.student.CountryId);
        fd.append('CityId', $scope.student.CityId);
        fd.append('FatherName', $scope.student.FatherName);
        fd.append('MotherName', $scope.student.MotherName);
        fd.append('GuardiansName', $scope.student.GuardiansName);
        fd.append('GurdiansPhone', $scope.student.GurdiansPhone);
        fd.append('CourseId', $scope.student.CourseId);
        fd.append('CurrentInstitute', $scope.student.CurrentInstitute);
        fd.append('Status', $scope.student.Status);
        fd.append('StaffId', $scope.student.StaffId);
        fd.append('StudentId', $scope.student.StudentId);
        fd.append('WeaverId', $scope.student.WeaverId);
        console.log(fd);
        uploadUrl = "/Student/AddStudent";

        // Simple GET request example:
        $http.post(uploadUrl, fd,
        {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }

        })
        .then(function mySucces(response) {
            toastr.success("Employee Added Sucess Fully!");
        },
         function myError(response) {

       });
    }

    $http
        ({
           method: "GET",
           url: "/Student/GetStudents",
        }).then(function mySucces(response) {

                //toastr.success("Updated Successfully");
                //window.location.href = "#!/City/CityIndex";
                //$scope.CountryList = response.data.result;
            $scope.StudentList = response.data.result;

        }, function myError(response) {

       });
    //Student Operation Ends


    //date Conversion
    
    $scope.UserInfoSubmit = function () //For Adding Countries
    {
        debugger
        $http({
            method: "POST",
            url: "UserLogIn/GetUserData",
            data: $scope.userInfo

        }).then(function mySucces(response) {
            //window.location.href = "#!/Country/CountryIndex";
            //toastr.success("Saved Successfully");

        }, function myError(response) {

        });
    }
    //
});