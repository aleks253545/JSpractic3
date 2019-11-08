let str1 = 'zbaak';
let str2 ='aaabz'
function equivalent ( str1 ,str2){
    let strr1=str1.split(''),
    strr2=str2.split(''),oddfirst=[],oddsecond=[],evenfirst=[],evensecond=[];
    strr1.forEach((element,index) => {
        if(index%2==0){
            evenfirst.push(element);
        }else
        oddfirst.push(element);
    }); 
    strr2.forEach((element,index) => {
        if(index%2==0){
            evensecond.push(element);
        }else
        oddsecond.push(element);
    }); 
    if( evensecond.sort().join()==evenfirst.sort().join() && oddsecond.sort().join()==oddfirst.sort().join()){
        return true
    }else
        return false
}
console.log(equivalent (str1,str2));