
 const categories ={
   ARCHITECTURE : 1,
   INTERIOR:2,
   VISUALISATION:3,
   BRANDING:4,
 }

export  function dataService(type, subtype){   
  return fetch(`/api/project?category=${categories[type]}`,{
      method: 'Get',
    })
    .then(result=>{
      if(result.ok){
        return result.json();
      } else{ 
        throw '';
      }  
    })
    .then(projects=> projects)
    .catch(err=>{
      console.log(err);
    });
}