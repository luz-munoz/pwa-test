//save on dynamic cache

function SaveDynamicCache(name, request, response){
    if(response.ok){
        return caches.open(name).then(cache => {
                    cache.put(request, response.clone());
                    return response.clone();
               });
    }
    else{
        return response;
    }
}