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





// // Copy-Paste the number:
// // reusable function
// function setupCopyButton(buttonId, targetId) {
//     const button = getElement(buttonId);
//     const target = getElement(targetId);

//     if (!button || !target) return; // safety check

//     button.addEventListener('click', async function (e) {
//         e.preventDefault();
//         const copyText = target.innerText.trim();
//         try {
//             await navigator.clipboard.writeText(copyText);
//             alert("নম্বর কপি হয়েছে: " + copyText);
//         } catch (err) {
//             const ta = document.createElement('textarea');
//             ta.value = copyText;
//             document.body.appendChild(ta);
//             ta.select();
//             try { document.execCommand('copy'); } catch(e) {}
//             document.body.removeChild(ta);
//             alert("Copied: " + copyText);
//         }
//     });
// }
// -----------------------------------------------------------------------------------------------------
// For Emergency call
// -----------------------------------------------------------------------------------------------------

// Call Button
getElement('btn-emergency-call').addEventListener('click',function(e){
    e.preventDefault();

    coinReduced();
})

// copy button
// getElement('btn-emergency-copy').addEventListener('click',function(){
//     // copy the number
//     setupCopyButton('btn-emergency-copy', 'emergency-copy-number');
//     // Increase copy number
//     copyIncreased();
    
// })


