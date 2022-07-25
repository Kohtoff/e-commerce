export const throttle = (func: Function, delay: number = 300) => {
    let inThrottle: boolean,
        // lastFn: ReturnType<typeof setTimeout>,
        lastTime: number;

    return function (this: any){
        const context = this,
            args = arguments;

        if(!inThrottle){
            func.apply(context, args)
            lastTime = Date.now();
            inThrottle = true;
        } else {
            setTimeout(() => {
                if(Date.now() - lastTime >= delay){
                    func.apply(context, args);
                    lastTime = Date.now()
                }
            }, Math.max(delay - (Date.now() - lastTime), 0))
        }
    }

}
