//This function will make sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its numWeeks and weeklyRevenue

const checkMillionDollarIdea = (req, res, next) => {
   const newIdea = req.body;
   if(!newIdea.numWeeks || !newIdea.weeklyRevenue){
      console.log('shit not supplied')
      res.status(400).send(newIdea);
      return false;
   }
   else if(isNaN(newIdea.numWeeks) || isNaN(newIdea.weeklyRevenue)){
      res.status(400).send(newIdea);
      return false;
   }
   else if(newIdea.numWeeks * newIdea.weeklyRevenue < 1000000){
      res.status(400).send(newIdea);
      return false;
   }
   next();
   return true;
};




// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
