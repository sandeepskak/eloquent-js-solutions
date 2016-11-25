//Exercise 1
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  console.log(a,b);
  if (Math.random() < 0.5) {
   	console.log('if true');
    return a * b;
  }
  else
    console.log('else');
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  while(true){
  	try{
    	return primitiveMultiply(a,b);
  	} catch(e){
    	if(!(e instanceof MultiplicatorUnitFailure)){
    		throw e;
	  	}
    }
 }
}

console.log(reliableMultiply(8, 8));
