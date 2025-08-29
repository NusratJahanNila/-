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
    // if(coinCount< 20){
    //     alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
    //     return;
    // }
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

// Clear Button funcitonalities:

getElement('btn-history-clear').addEventListener('click',function(){
    const historyContainer= getElement('history-container');
    historyContainer.innerText=''
})



// -----------------------------------------------------------------------------------------------------
// For Emergency call
// -----------------------------------------------------------------------------------------------------

// Call Button
// getElement('btn-emergency-call').addEventListener('click',function(e){
//     e.preventDefault();
//     const coinCount=getInnerTextNumber('coin-count');
//     if(coinCount>=20){
//         alert('জাতীয় জরুরি সেবায় কল করা হচ্ছে : 999')
//     }
//     // function call
//     coinReduced();
//     // call history   
//     const data={
//         service: 'জাতীয় জরুরি সেবা',
//         mobile: 999,
//         time:new Date().toLocaleTimeString()
//     }
//     callHistoryData.push(data);
//     // console.log(callHistoryData);
//     const historyContainer= getElement('history-container')
//     historyContainer.innerText=''
//     for(const data of callHistoryData){
//         const div=document.createElement('div');
//         div.innerHTML=`
//             <div class=" p-4 bg-[#fafafa] rounded-lg mb-2">
//                 <div class="flex justify-between items-center">
//                     <div>
//                         <h2 class="text-sm">${data.service}</h2>
//                         <p class="text-[5C5C5C] mt-1">${data.mobile}</p>
//                     </div>
//                     <div>
//                         <p class="text-lg">${data.time}</p>
//                     </div>
//                 </div>
//             </div>
//         `
//         historyContainer.appendChild(div)
//     }
// })
getElement('btn-emergency-call').addEventListener('click',function(e){
    e.preventDefault();
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('জাতীয় জরুরি সেবায় কল করা হচ্ছে : 999')

        // function call
        coinReduced();
        // call history   
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
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



// -----------------------------------------------------------------------------------------------------
// Police
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-police-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('পুলিশের নম্বরে কল করা হচ্ছে : 999')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'পুলিশ',
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('police-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-police-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('police-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :999')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})



// -----------------------------------------------------------------------------------------------------
// Fire Service
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-fire-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('ফায়ার সার্ভিস নম্বরে কল করা হচ্ছে : 999')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'ফায়ার সার্ভিস',
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('fire-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-fire-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('fire-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :999')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})



// -----------------------------------------------------------------------------------------------------
// Ambulance Service
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-ambulance-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('অ্যাম্বুলেন্স নম্বরে কল করা হচ্ছে : 1994999999')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'অ্যাম্বুলেন্স',
            mobile: 1994999999,
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('ambulance-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-ambulance-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('ambulance-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :1994-999999')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})



// -----------------------------------------------------------------------------------------------------
// Women & Child Helpline
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-woman-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('নারী ও শিশু সহায়তা নম্বরে কল করা হচ্ছে : 109')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'নারী ও শিশু সহায়তা',
            mobile: 109 ,
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('woman-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-woman-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('woman-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :109')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})



// -----------------------------------------------------------------------------------------------------
// Anti-Corruption
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-anti-corruption-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('দুদক নম্বরে কল করা হচ্ছে : 106')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'দুদক',
            mobile: 106 ,
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('anti-corruption-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-anti-corruption-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('anti-corruption-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :106')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})



// -----------------------------------------------------------------------------------------------------
//Electricity Outage
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-electricity-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('বিদ্যুৎ অফিসের নম্বরে কল করা হচ্ছে : 16216')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'বিদ্যুৎ বিভ্রাট',
            mobile: 16216 ,
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('electricity-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-electricity-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('electricity-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :16216')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})



// -----------------------------------------------------------------------------------------------------
// Brac
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-brac-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('ব্র্যাক অফিসের নম্বরে কল করা হচ্ছে : 16445')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'ব্র্যাক ',
            mobile: 16445 ,
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
    
})

// heart button
getElement('brac-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-brac-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('brac-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :16445')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})


// -----------------------------------------------------------------------------------------------------
// Bangladesh Railway
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-railway-call').addEventListener('click',function(e){
    e.preventDefault();
    // alert
    const coinCount=getInnerTextNumber('coin-count');
    if(coinCount>=20){
        alert('বাংলাদেশ রেলওয়ে অফিসের নম্বরে কল করা হচ্ছে : 163')

        // function call
        coinReduced();
        // call history
        const data={
            service: 'বাংলাদেশ রেলওয়ে',
            mobile: 163 ,
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
    else{
        alert('কয়েন সংখ্যা ২০ এর কম! কল করা সম্ভব নয়।')
        return;
    }
})

// heart button
getElement('railway-heart-icon').addEventListener('click',function(){
    heartIncreased();
})

// Copy paste Button
getElement('btn-railway-copy').addEventListener('click',function(){
    const numToCopy=getInnerTextNumber('railway-copy-number');

    //alert
    alert('নম্বর কপি হয়েছে :163')

    //copy-paste
    navigator.clipboard.writeText(numToCopy).then(()=> {});

    // Increase copy number
    copyIncreased();
    
})


