$(function(){
   $('.toggler').click(function(){
       $('div#show').toggle(this.checked);
       
   });
})


/*Angular Js Form Validation */

// create angular app
    var validationApp = angular.module('validationApp', []);

    // create angular controller
    validationApp.controller('mainController', function($scope) {

        // function to submit the form after all validation has occurred            
        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
               // alert('Congrats we have received you data');
            }

        };

    });


/* Normal Js script Form Validation */
function Validate(userForm) {

	var voomaamerror = document.getElementById("voomaamm").value;
	var emailerror = document.getElementById("email").value;
	var achternaaerror = document.getElementById("achternaam").value;
	var optvalueerror = document.getElementById("optvalue").value;
	var optvalueerror2 = document.getElementById("optvalue2").value;


	if (voomaamerror === "") {
		document.getElementById("voomaamm").style.borderColor  = "#ec1e52";
	}


	else if (voomaamerror != ""){
		document.getElementById("voomaamm").style.borderColor  = "";

	}

	 if (achternaaerror === ""){
		document.getElementById("achternaam").style.borderColor  = "#ec1e52";
	}

	else if (achternaaerror != ""){
		document.getElementById("achternaam").style.borderColor  = "";
	}

	 if (optvalueerror === ""){
		document.getElementById("optvalue").style.borderColor  = "#ec1e52";
	}

	else if (optvalueerror != ""){
		document.getElementById("optvalue").style.borderColor  = "";
	}

	 if (optvalueerror2 === ""){
		document.getElementById("optvalue2").style.borderColor  = "#ec1e52";
	}

	else if (optvalueerror2 != ""){
		document.getElementById("optvalue2").style.borderColor  = "";	

	}
	if (emailerror === ""){
 		document.getElementById("checked").style.color  = "#ec1e52";
	}

	else if (emailerror != ""){
		document.getElementById("checked").style.color  = "";
	}


	if (voomaamerror != "" && achternaaerror != "" && emailerror != "" && optvalueerror != "" && optvalueerror2 != "" ){

		document.getElementById("formsection").style.display  = "none";
		document.getElementById("success").style.display  = "block";
	}


};
