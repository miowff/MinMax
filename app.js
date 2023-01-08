function maxMin(k, arr) 
{
    arr.sort(function(a, b){return a-b});
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++)
    {
        if((i+k)>arr.length)
        {
            return min;
        }
        let subArray = arr.slice(i,i+k);
        let unfairness = subArray[subArray.length-1] - subArray[0];
        if(unfairness<min)
        {
            min = unfairness;
        }
    }
}
