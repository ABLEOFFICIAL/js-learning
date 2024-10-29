let gender= 'female';
let tribe= 'USA'

if (gender === 'male'  && tribe === 'Africa'){
    console.log('100% eligibility');
}else if(gender === 'male' || tribe === 'Africa'){
    console.log('80% eligibility');
}else{
    console.log('50% eligibility');
}