const parseKeywords = (keywords: string[] | undefined, bullet: string) => {
    let str = "";
    let regex = "("
    keywords?.map((word: string) => {
        if(word.includes("(") || word.includes("+")) {
            for (let i = 0; i < word.length; i++) {
                if(word.charAt(i) == "(" || word.charAt(i) == ")" || word.charAt(i) == "+" ) {
                    regex += "\\" + word.charAt(i);
                }
                else {
                    regex += word.charAt(i);
                }
            }
            regex += "|";
        }
        else {
            regex += word + "|";
        }
    })
    regex = regex.slice(0, -1);
    regex += ")"
    if(keywords) {
        const strArr = bullet.split(RegExp(regex));
        strArr.map((subStr, idx) => {
            if(subStr.replace(" ", "") != "," && keywords.find(a => a.includes(subStr)) != undefined) {
                str += "<span className='keyword'>" + subStr + "</span>";
            }
            else if(subStr) {
                str += subStr;
            }
        })
    }
    else {
        str = bullet;
    }
    return str;
}

export default parseKeywords;