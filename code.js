$(document).ready(function () {

    var myRules =
        {
            salary:
                {
                    required: true,
                    min: 30000,
                    max: 300000,
                    digits: false
                },
            credit:
                {
                    required: true,
                    min: 299,
                    max: 851,
                    digits: false
                },
            months:
                {
                    required: true,
                    min: 6,
                    max: 120,
                    digits: false
                }
        };
    var myMessages =
        {
            salary:
                {
                    required: "Please enter your salary",
                    digits: "Your salary cannot contain letters"
                },
            credit:
                {
                   required: "Please enter your credit score",
                   min: "Too low, your number should be above 299",
                   max: "Too high, your number should be below 851",
                   digits: "Your credit score cannot contain letters"
                },
            months:
                {
                   required: "Please enter how many months you've been working at your job",
                   digits: "Your input cannot contain letters"
                }
        };

    $("form").validate(
        {
            submitHandler: loanApproval,
            rules: myRules,
            messages: myMessages
        }
    );

    function loanApproval()
    {
        var salary = parseFloat($("#salary").val());
        var credit = parseFloat($("#credit").val());
        var months = parseFloat($("#months").val());

        var approval;

        if (salary >= 40000 && credit >= 600)
        {
            approval = "approved";
        }
        else if (salary >= 40000 && credit <= 600 && months > 12)
        {
            approval = "approved";
        }
        else if (salary <= 40000 && credit >= 600 && months > 12)
        {
            approval = "approved";
        }
        else if (salary <= 40000 && credit <= 600 && months <= 12)
        {
            approval = "not approved";
        }
        else if (salary <= 40000 && credit >= 600 && months <= 12)
        {
            approval = "not approved";
        }
        else if (salary >= 40000 && credit >= 600 && months <= 12)
        {
            approval = "not approved";
        }
        else
        {
            return false;
        }

        $("#approvalOutput").text(`You were ${approval} for a loan`);

    }

});