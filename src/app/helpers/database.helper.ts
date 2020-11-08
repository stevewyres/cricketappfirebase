export function promiseCheck(promise: any, method: string) {
    return promise.then(function(result) {
        console.log('success ' + method);
        return true;
    }, function(error) {
        console.log(error, 'You do not have access! ' + method);
        return false;
    });
}
