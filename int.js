var processedData;
window.onload = function(){
    var data = [{
        "Name": "Jacob",
        "Gender": "Male",
        "City": "Newyork",
        "State": "Newyork"
    }, {
        "Name": "Mason",
        "Gender": "Male",
        "City": "Los Angeles",
        "State": "California"
    }, {
        "Name": "Ethan",
        "Gender": "Male",
        "City": "Chicago",
        "State": "Illinois"
    }, {
        "Name": "Noah",
        "Gender": "Male",
        "City": "Newyork",
        "State": "NewYork"
    }, {
        "Name": "Sophia",
        "Gender": "Female",
        "City": "Los Angeles",
        "State": "California"
    }, {
        "Name": "Emma",
        "Gender": "Female",
        "City": "Los Angeles",
        "State": "California"
    }, {
        "Name": "Isabella",
        "Gender": "Female",
        "City": "Chicago",
        "State": "Illinois"
    }, {
        "Name": "Olivia",
        "Gender": "Female",
        "City": "Chicago",
        "State": "Illinois"
    }, {
        "Name": "Elizabeth",
        "Gender": "Female",
        "City": "Newyork",
        "State": "Newyork"
    }, {
        "Name": "zoey",
        "Gender": "Female",
        "City": "Newyork",
        "State": "Newyork"
    }];
    
    document.getElementById('btn').addEventListener('click', function(){
        processedData = count(data);
    });
    
    document.getElementById('get').addEventListener('click', function(){
        if(!processedData){
            alert('press go first');
        }
        alert(get(processedData, 'City', 'Chicago'));
    });
}

function count(data){
    /* LONG VERSION
    var result = {Name: {}, Gender: {}, City: {}, State: {}};
    
    for(var i = 0; i < data.length; i++){
        if(!result.Name[data[i].Name]){
            result.Name[data[i].Name] = 0;
        }
        result.Name[data[i].Name]++;
        
        if(!result.Gender[data[i].Gender]){
            result.Gender[data[i].Gender] = 0;
        }
        result.Gender[data[i].Gender]++;
        
        if(!result.City[data[i].City]){
            result.City[data[i].City] = 0;
        }
        result.City[data[i].City]++;
        
        if(!result.State[data[i].State]){
            result.State[data[i].State] = 0;
        }
        result.State[data[i].State]++;
        
    };
    */
    
    //SHORT VERSION
    var result = {};
    for(var i = 0; i < data.length; i++){
        for(var item in data[i]){
            if(!result[item]){
                result[item] = {};
            }
            
            if(!result[item][data[i][item]]){
                result[item][data[i][item]] = 0;
            }
            
            result[item][data[i][item]]++;
        }
    }
    
    console.log(result);
    return result;
}

function get(data, group, item){
    return data[group][item];
}
