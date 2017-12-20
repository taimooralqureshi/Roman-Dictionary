import {Dictionary} from "./Dictionary";
import {Translator} from "./Translator";

export class Tester {

    testHash() {

        let testcses = [
            "سہغست" , "معرہن" , "پبصےص" , "کثرت" , "کسرت"
        ];
        let dict = new Dictionary();
        for (let i = 0 ; i < testcses.length ; i++) {
            console.log(testcses[i] + " -> " + dict.evaluate(testcses[i]));
        }
    }
    testTransileration() {
        let t = new Translator();
        // let testcases = ["makhdoosh" , "makhsoos" , "mashkook" , "istejabiah" , "mukhtasar"];
        //let expectations = ["مخدوش" , "مخصوص" , "مشکوک" , "استعجابیہ" , "مختصر"];
        let testcases = ["kasrat" , "kasrat" , "mukarram" , "allergy" , "position" ,"mayal"];
        let expectations = ["کثرت" , "کسرت" , "مکرم" , "الرجی" , "پوزیشن", "مائل"];
        for (let i = 0 ; i < testcases.length ; i++) {
            console.log("TESTING FOR  : " + testcases[i]);
            var result = t.transliterate(testcases[i]);
            console.log("Total translations : " + result.length);
            var index = result.indexOf(expectations[i]);
            if (index > -1) {
                console.log("Found at : " + index + "[" + result[index] + "]");
            }
            else {
                console.log("Unable to generate word.");
            }
        }
    }
}