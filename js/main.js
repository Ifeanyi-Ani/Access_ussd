// program that transfer or buy airtime ussing USSD code
// dial *901# 
let stageOne = prompt("welcome to USSD Banking. \n Please note that a N6.98 network charge will \n be applied to your bank account for banking \n services on this channel. \n 1. Proceed \n 2.Cancel");

// if you select one
if (stageOne == "1") {
    let stageTwo = prompt("Access Bank \n 1 > Check Balance \n 2 > Transfer \n 3 > Airtime \n 4 > Other Services \n 5 > Access Money \n 6 > Diamond Xtra \n 7 > XtraCash Loan \n 8 > Mobile Wallet \n 9 > POS FastPay");
    if (stageTwo == "2") {
        let transferStageOne = prompt("Select account \n 1 > 01XXXX1115 \n 2 > 14XXXX3678");
        if (transferStageOne == "1" || transferStageOne == "2") {
            let transferStageTwo = parseInt(prompt("Enter amount"));
            if (transferStageTwo < 20000) {
                let transferStageThree = parseInt(prompt("Enter Account number"));
                if (transferStageThree != "") {
                    let transferStageFour = prompt("Select Beneficiary Bank \n 1 > Ecobank Nigeria \n 2 > First City Monument Bank \n 99 > Other Financial Institutions");
                    if (transferStageFour == "1" || transferStageFour == "2") {
                        let transferStageFive = parseInt(prompt("transfer N" + transferStageTwo.valueOf(parseInt) + " " + "to IFEANYI EMMANUEL ANI, \n" + transferStageThree.valueOf(parseInt) + ", at N26.5 charge \n To continue, please enter your Pin:"));
                        if (transferStageFive != "") {
                            alert("Transfer processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ")
                        }
                    }
                    else if (transferStageFour =="99"){
                        let transferStageFourMore = prompt("Select Beneficiary Bank \n 1 > First Bank \n 2 > Sterling Bank \n 3 > Opay \n 4 > Carbon \n 98 > Next page ");
                        if (transferStageFourMore=="1" || transferStageFourMore=="2"|| transferStageFourMore=="3" || transferStageFourMore=="4"){
                            let transferStageFive = parseInt(prompt("transfer N" + transferStageTwo.valueOf(parseInt) + " " + "to IFEANYI EMMANUEL ANI, \n" + transferStageThree.valueOf(parseInt) + ", at N26.5 charge \n To continue, please enter your Pin:"));
                            if (transferStageFive != "") {
                                alert("Transfer processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ")
                            }
                        }

                    }
                }
            }
        }
    }
    else if (stageTwo == "3") {
        let airtimeStageOne = prompt ("Buy Airtime \n 1 > Self \n 2 > Others");
        if (airtimeStageOne=="1") {
            let airtimeStageTwo = prompt ("Select Account \n 1 > 01XXXX1114 \n 2 > 14XXXX3678")
            if (airtimeStageTwo=="1" || airtimeStageTwo=="2") {
                let airtimeStageThree = parseInt(prompt("Enter amount:"))
                if (airtimeStageThree<=10000){
                    alert("processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ") 
                }
            }
        }
        else if (airtimeStageOne=="2") {
            let airtimeStageTwo2 = prompt ("Select Account \n 1 > 01XXXX1114 \n 2 > 14XXXX3678")
            if (airtimeStageTwo2=="1" || airtimeStageTwo2=="2") {
                let airtimeStageThree2 = parseInt(prompt("Enter amount:"))
                if (airtimeStageThree2<=10000){
                    let airtimeStagefour2 = parseInt(prompt("Enter Phone Number (0816******):"));
                    if (airtimeStagefour2 !=""){
                        let airtimeStagefive2=parseInt(prompt("Purchase"+" "+ airtimeStageThree2.valueOf(parseInt)+" "+" "+"Airtime for"+" "+airtimeStagefour2 +". Enter \n Pin to proceed:"));
                        if (airtimeStagefive2 !="") {
                            alert("processing. N1million could be yours \n this month! To qualify, buy airtime & transfer up \n to 15x per wk. T&Cs apply ") 
                        }
                    }
                }
            }
        }
    }
    else {
        
    }
}
else if (stageOne == "2") {
    alert("Glo unlimited")
}




