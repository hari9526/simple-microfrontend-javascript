import('./bootstrap'); 
//The reason why we have an import statement here is to give webpack
//the opportunity to load resources from products project before runnning bootstrap.js. 
//If we directly write code in here then, it would lead to errors 
//since webpack doesn't get time to load resources from products page 