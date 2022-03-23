const getAllCategories = document.getElementsByClassName('categories');

for(var i = 0; i < getAllCategories.length; i++){
    getAllCategories[i].addEventListener('click', function(){
        var getTextContentOfCategories = this.textContent;
        
        const getAllCategoriesFunction = document.querySelectorAll(`.${getTextContentOfCategories}`);
        const getAllCards = document.querySelectorAll('.cards');
        

        getAllCards.forEach((data)=>{
            data.classList.add('active');
        });
        
        getAllCategoriesFunction.forEach((data)=>{
            data.classList.remove('active');
        });

        if(getTextContentOfCategories == "todas las categorías"){
            getAllCards.forEach((data)=>{
                data.classList.remove('active');
            });
        }

    });
}