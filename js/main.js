// program that transfer or buy airtime ussing USSD code
// dial *901# 
let stageOne = prompt("welcome to USSD Banking. \n Please note that a N6.98 network charge will \n be applied to your bank account for banking \n services on this channel. \n 1. Proceed \n 2.Cancel");
let stageTwo;
let transferStageOne, transferStageTwo, transferStageThree, transferStageFour, transferStageFive;
let airtimeStageOne, airtimeStageTwo, airtimeStageThree;

// using function
selectOption();
function selectOption() {
    if (stageOne == "1") {
        stageTwo = prompt("Access Bank \n 1 > Check Balance \n 2 > Transfer \n 3 > Airtime \n 4 > Other Services \n 5 > Access Money \n 6 > Diamond Xtra \n 7 > XtraCash Loan \n 8 > Mobile Wallet \n 9 > POS FastPay");
    } else {
        firstExit();
    }
    selectOwnAccount();
}
function firstExit() {
    if (stageOne == "2") {
        alert("Glo Unlimited")
    }
}

// transfer decision begins
function selectOwnAccount() {
    if (stageTwo === "2") {
        transferStageOne = prompt("Select account \n 1 > 01XXXX1115 \n 2 > 14XXXX3678");
    } else if (stageTwo == "3") {
        return airtimeOption();
    } else {
        return selectOption();
    }
    selectTrfAmount();
}


function selectTrfAmount() {
    if (transferStageOne == "1" || transferStageOne == "2") {
        transferStageTwo = parseInt(prompt("Enter amount"));
    } else {
        return selectOwnAccount();
    }
    selectPersonAccount();
}


function selectPersonAccount() {
    if (transferStageTwo < 20000) {
        transferStageThree = parseInt(prompt("Enter Account number"));
    } else {
        return selectTrfAmount();
    }
    selectBank();
}


function selectBank() {
    if (transferStageThree != (null)) {
        transferStageFour = prompt("Select Beneficiary Bank \n 1 > Ecobank Nigeria \n 2 > First City Monument Bank \n 99 > Other Financial Institutions");
    } else {
        return selectPersonAccount();
    }
    selectedBank();
}


function selectedBank() {
    if (transferStageFour == "1" || transferStageFour == "2") {
        return verifyTransaction();
    } else if (transferStageFour == "99") {
        return selectedBankNext();
    } else {
        return selectBank();
    }

}

function verifyTransaction() {
    transferStageFive = parseInt(prompt("transfer N" + transferStageTwo.valueOf(parseInt) + " " + "to IFEANYI EMMANUEL ANI, \n" + transferStageThree.valueOf(parseInt) + ", at N26.5 charge \n To continue, please enter your Pin:"));
    transactionFeedBack()
}
function selectedBankNext() {
    let transferStageFourMore = prompt("Select Beneficiary Bank \n 1 > First Bank \n 2 > Sterling Bank \n 3 > Opay \n 4 > Carbon \n 98 > Next page ");
    if (transferStageFourMore == "1" || transferStageFourMore == "2" || transferStageFourMore == "3" || transferStageFourMore == "4") {
        return verifyTransaction();
    } else {
        return selectedBankNext();
    }

}


function transactionFeedBack() {
    if (transferStageFive != "") {
        alert("Transfer processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ")
    }
}

// if selected airtime procedure
function airtimeOption() {
    airtimeStageOne = prompt("Buy Airtime \n 1 > Self \n 2 > Others");
    airtimeChoice();
}


function airtimeChoice() {
    if (airtimeStageOne == "1") {
        airtimeStageTwo = prompt("Select Account \n 1 > 01XXXX1114 \n 2 > 14XXXX3678")
    } else if (airtimeStageOne == "2") {
        return airtimeMoreChoice();
    } else {
        return airtimeOption();
    }
    airtimeAmount();
}

function airtimeAmount() {
    if (airtimeStageTwo == "1" || airtimeStageTwo == "2") {
        airtimeStageThree = parseInt(prompt("Enter amount:"))
    } else {
        return airtimeChoice();
    }
    airtimeMessage();
}


function airtimeMessage() {
    if (airtimeStageThree <= 10000) {
        alert("processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ")
    }
}


function airtimeMoreChoice() {
    let airtimeStageTwo2, airtimeStageThree2, airtimeStagefour2, airtimeStagefive2;
    airtimeAccount();
    function airtimeAccount() {
        if (airtimeStageOne == "2") {
            airtimeStageTwo2 = prompt("Select Account \n 1 > 01XXXX1114 \n 2 > 14XXXX3678")
        }
        airtimeAmount();
    }
    function airtimeAmount() {
        if (airtimeStageTwo2 == "1" || airtimeStageTwo2 == "2") {
            airtimeStageThree2 = parseInt(prompt("Enter amount:"))
        } else {
            return airtimeAccount();
        }
        airtimePhoneNumber();
    }
    function airtimePhoneNumber() {
        if (airtimeStageThree2 <= 10000) {
            airtimeStagefour2 = parseInt(prompt("Enter Phone Number (0816******):"));
        } else {
            return airtimeAmount();
        }
        airtimeVerification();
    }
    function airtimeVerification() {
        if (airtimeStagefour2 != "") {
            airtimeStagefive2 = parseInt(prompt("Purchase" + " " + airtimeStageThree2.valueOf(parseInt) + " " + " " + "Airtime for" + " " + airtimeStagefour2 + ". Enter \n Pin to proceed:"));
        } else {
            return airtimePhoneNumber();
        }
        airtimeMessages();
    }
    function airtimeMessages() {
        if (airtimeStagefive2 != "") {
            alert("processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ")

        }
    };

};



