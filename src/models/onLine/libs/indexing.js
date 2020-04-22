const indexing = (...args)=>{
    console.log(args.length)
    try {
        if(args.length !== 2) throw new Error("The function takes 2 arguments. First string with key, Second array with objects were have a standard key");
        const [key, arr] = args; 
        console.log(key, arr)
        if (typeof key !== 'string') throw new Error("first argument must be string!");
        if (!(arr instanceof Array)) throw new Error("second argument must be array!");
        if (arr.find(obj=>!obj[key])) throw new Error("Duuuuuuddeeee. All the objects in the array must contain the given key");
        return arr.reduce((acc, cur) => ({ ...acc, [cur[key]]: cur }), {});
    } catch(err) {
        console.error(err.name + "IndexingFunction: " + err.message);
    }
}
export { indexing };
