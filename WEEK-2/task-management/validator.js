function validateTitle(title) {
                    //Your code here   
                        if(!title){
                            return "Title Required"
                        }
                        if(title.length<=3){
                            return "Min 3 characters is required"
                        }
                        return true;
                       }
                      
                    //2.Validate priority (must be: low, medium, high)    
                       function validatePriority(priority) {
                    //Your code here
                        const priorities=["Low","Medium","high"]
                        let result=priorities.includes(priority)
                        if(result===false){
                            return "Invalid priority"
                        }
                        return true
                      }                      
                    //3.Validate due date (must be future date)   
                      function validateDueDate(date) {
                    //Your code here   
                        let duedate=new Date('2024-10-20')
                        let today=new Date()
                        if(dueDate>today){
                            return "Invalid Duedate"
                        }
                        return true;
                      }    
                      export{validatePriority,validateTitle,validateDueDate}