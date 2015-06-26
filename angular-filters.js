app.filter('firstLetterCapitalize', function() {
  
  return function(input, scope) {
    if (input!=null){
        
       var strs = input.split(' ');
       for(var i = 0; i< strs.length; i++){
           strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1).toLowerCase();
       }
       return strs.join(' ');
   }
   
}
