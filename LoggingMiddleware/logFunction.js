const log = async()=>{
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
}