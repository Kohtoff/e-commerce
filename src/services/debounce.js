export const debounce = (func, timeout = 300) => {
    //store for setTimeout ID
    let timer;

    return (...args) => {
        if(!timer) func.apply(this, args)

        //deleting of timeout by id
        clearTimeout(timer);

        //call a new timeout
        timer = setTimeout(() => {
            //reset timer var to put new id
            timer = undefined;
        }, timeout)

    }

}
