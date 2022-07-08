import faker from "faker";


const mount = (el) => {
    let products = "";
    for (let i = 0; i < 8; i++) {
      const name = faker.commerce.productName();
      products += `<div>${name}</div>`;
    }
    el.innerHTML = products;
};

//Scenario 1
//We are running the application in isolation 

if(process.env.NODE_ENV == 'development'){
  const el = document.querySelector("#dev-product");

  //We are assuming that dev-product will only be present in the products and not in 
  //the container. Thus we can know whether this is in isolation or not. 
  //ie it's a check for scenario 1.  
  if(el){
    mount(el); 
  }
}


//Scenario 2 
//We are running it in the container in development or production mode 

//In this, export the function so that it can be handled in the container project 

export {mount}; 



