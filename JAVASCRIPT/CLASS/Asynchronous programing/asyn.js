let promise = new Promise((resolve, reject) => {
    let success = true; 
    if (success)
    {
        resolve("data loaded");
    } 
    else 
    {
        reject("error occurred");
    }
});

// 