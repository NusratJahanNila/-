function getElement(id){
    const result=document.getElementById(id);
    return result;
}
function getInnerTextNumber(id){
    const result=document.getElementById(id);
    const innerText=result.innerText;
    const getInnerTextNumber=parseInt(innerText);
    return getInnerTextNumber;
}

// Coin reducing Function
function coinReduced(){
    const coinCount=getInnerTextNumber('coin-count');
    const reduceCoin=parseInt(20)
    // Alert
    if(coinCount>=20){
        alert('Calling National Emergency Service : 999');
    }
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    //  calculate
    const finalCoin=coinCount-reduceCoin;
    // assign
    getElement('coin-count').innerText=finalCoin;
}

// Heart Increasing
function heartIncreased(){
    const heartCount=getInnerTextNumber('heart-count');
    // calculate
    const finalHeart=heartCount+1;
    // assign
    getElement('heart-count').innerText=finalHeart;
}

// Copy button
function copyIncreased(){
    const copyCount=getInnerTextNumber('copy-count');
    // calculate
    const finalCopy=copyCount+1;
    // assign
    getElement('copy-count').innerText=finalCopy;
}
// Call History
const callHistoryData = [];

function history(){
    const data={
        service: 'জাতীয় জরুরি সেবা',
        mobile: 999,
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data);
    // console.log(callHistoryData);
    const historyContainer= getElement('history-container')
    historyContainer.innerText=''
    for(const data of callHistoryData){
        const div=document.createElement('div');
        div.innerHTML=`
            <div class=" p-4 bg-[#fafafa] rounded-lg mb-2">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-sm">${data.service}</h2>
                        <p class="text-[5C5C5C] mt-1">${data.mobile}</p>
                    </div>
                    <div>
                        <p class="text-lg">${data.time}</p>
                    </div>
                </div>
            </div>
        `
        historyContainer.appendChild(div)
    }
}

// -----------------------------------------------------------------------------------------------------
// For Emergency call
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-emergency-call').addEventListener('click',function(e){
    e.preventDefault();
    // function call
    coinReduced();
    // history
    // const data={
    //     service: 'জাতীয় জরুরি সেবা',
    //     mobile: 999,
    //     time:new Date().toLocaleTimeString()
    // }
    // callHistoryData.push(data);
    // // console.log(callHistoryData);
    // const historyContainer= getElement('history-container')
    // historyContainer.innerText=''
    // for(const data of callHistoryData){
    //     const div=document.createElement('div');
    //     div.innerHTML=`
    //         <div class=" p-4 bg-[#fafafa] rounded-lg mb-2">
    //             <div class="flex justify-between items-center">
    //                 <div>
    //                     <h2 class="text-sm">${data.service}</h2>
    //                     <p class="text-[5C5C5C] mt-1">${data.mobile}</p>
    //                 </div>
    //                 <div>
    //                     <p class="text-lg">${data.time}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     `
    //     historyContainer.appendChild(div)
    // }
    history();
})

// heart button
getElement('emergency-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-emergency-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('emergency-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :999')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})


