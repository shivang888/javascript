    //    create element P 
       let newElement = document.createElement("p");
       let newText = document.createTextNode("Hello Shivang Kad");
          
        newElement.appendChild(newText);
        document.querySelector('#heading').appendChild(newElement);

        

        // Add Class

        let btnAdd = document.querySelector('#addbtn');
        btnAdd.addEventListener("click", function () {
            newElement.classList.add("two");  
        });
        
        // Remove Class

        let btnRemove = document.querySelector('#removebtn');
        let h1 = document.querySelector('#heading');
        btnRemove.addEventListener("click", function () {
            h1.classList.remove("one");  
        });            

        // Toggle Class

        let btnToggle = document.querySelector('#tooglebtn');
        btnToggle.addEventListener("click", function () { 
            newElement.classList.toggle("two");
        });

        // Replace Class

        let btnReplace = document.querySelector('#replacebtn');
        btnReplace.addEventListener("click", function () {
                h1.classList.replace('one','three');
        });

        // getAttribute

        console.log(h1.getAttribute("class"));
        console.log(h1.getAttribute("id"));

        // Set Attribute

         let input = document.querySelector('#inp');
       console.log(input.setAttribute('placeholder',"Enter your Name :")); 
               
        // Has Attribute (return a Bollean Value)
          
        console.log(input.hasAttribute('placeholder'));