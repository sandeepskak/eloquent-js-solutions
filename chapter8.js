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
//Exercise 2
function withBoxUnlocked(body) {
  // Your code here.
  if(box.locked) {
    box.unlock();
    try{
      body();
    } catch(e){
      throw e;
    } finally{
      box.lock();
    }
    box.lock();
  } else {
     try{
      body();
     } catch(e){
        throw e;
     } finally{
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
