function search(pat,txt){
    const mp = new Map()

    for (const ch of pat){
        mp.set(ch,(mp.get(ch) || 0)+1)
    }

    let i =0
    j=0
    ans = 0
    const size = txt.length
    const k = pat.length
    let count = mp.size

    while(j<size){
        
    }
}