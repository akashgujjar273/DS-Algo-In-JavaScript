//our memory space will which is a array will have a lenght of a prime number we r gonna choose 7
//we use prime bcz we will get more randomized distribution of items we add in our hash table and it is optimal
//jitna mrko smjh aya 7 lenght isliye kioki vo jyada randomize batvara krta h aur y chiz optimal h

class Hashtable{
    constructor(value=7){
        this.dataMap=new Array(value)
    }
    //means we hgave to call it in other funcs not ourselves also jonas told not to change anything in it
    _hash(key){
        let hash=0
        //suppose we enter the key paint then the letter p has a numeric value
        //anmd this loop will run 5 times bcz paint is 5 words
        //every world will give a number based on there alphabetic value and given formula
        for(let i=0;i<key.length;i++){
            //use any prime number we used 23 it will generate number between o to 7
            hash=(hash+ key.charCodeAt(i)*23)%this.dataMap.length
        }
        return hash
    }

    set(key,value){
        let index=this._hash(key)
        if(!this.dataMap[index]){
            this.dataMap[index]=[]
        }
        this.dataMap[index].push([key,value])
        return this
    }
    get(key){
        let index=this._hash(key)
        if(this.dataMap[index]){
            for(let i=0;this.dataMap[index].length;i++){
                if(this.dataMap[index][i][0]===key){
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined
    }
    keys(){
        let allKeys=[]
        for(let i=0;i<this.dataMap.length;i++){
            if(this.dataMap[i]){
                for(let j=0;j<this.dataMap[i];j++){
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}


//big o of hashtable
//suppose we r using ll in this case and we runn a ll through hash
//and hash is o(1) operation bncz it is always a single operation

//set is also a o(1)

//but get depends on how manmy items are on a memory space
//if there is one it will be a o1 but if there is many then it might be o(n)