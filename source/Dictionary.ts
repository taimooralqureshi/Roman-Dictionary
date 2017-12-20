import {isUndefined} from "util";

export class Dictionary {
    mapSize = 1000;
    map : Array<Array<Array<string>>>;

    constructor () {
        this.map = [];
        for (let i = 0 ; i < this.mapSize ; i++) {
            this.map.push([])
        }
    }
    addToMap(wordMeaning:string[]) {
        let hashcode = this.evaluate(wordMeaning[0])
        this.map[hashcode].push(wordMeaning)

    }
    evaluate(word:string) : number {
        let hashCode = 0;
        for (let i = 0 ; i < word.length ; i++) {
            hashCode +=  word.charCodeAt(i) * (i+1);
        }
        return hashCode % this.mapSize;
    }
    show(){
        if(!isUndefined(this.map))
        {
            for( let i in this.map)
            {
                console.log(this.map[i])
            }
        }
    }
    loadData(lines : string[]) {
        let wordMeanings: string[]

        for (let i in lines) {
            wordMeanings = null
            wordMeanings = lines[i].toString().split('|')

           this.addToMap(wordMeanings)
        }

    }
    search(wordArray: string[]) {

        let word: string
        let hashcode: number
        let contentword = <HTMLDivElement> document.getElementById("content_word")
        let contentmeaning = <HTMLDivElement> document.getElementById("content_meaning")

        while (wordArray.length != 0) {
            word = wordArray.pop()
            hashcode = this.evaluate(word)
            if (this.map[hashcode].length != 0) {
                for (let i in this.map[hashcode]) {
                    let Alfaz = this.map[hashcode][i][0]
                    if (word === Alfaz) {
                        document.getElementById("content_word").style.height = "auto";
                        document.getElementById("content_word").style.display = "block"
                        document.getElementById("content_meaning").style.display = "block"
                        contentword.innerText = Alfaz
                        contentmeaning.innerText = this.map[hashcode][i][1]
                        return
                    }
                }
            }

        }
        let height = window.innerHeight;
        document.getElementById("content_word").style.height = (height - 162) + "px";

        window.addEventListener("resize", resizeHandler);

        function resizeHandler() {

            let height = window.innerHeight;
            document.getElementById("content_word").style.height = (height - 162) + "px";
        }
        document.getElementById("content_word").style.display = "block"
        contentword.innerText = "!لفظ موجود نہیں"
        contentmeaning.innerText = null
        document.getElementById("content_meaning").style.display = "none"


    }
}
