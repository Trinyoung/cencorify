function censor(instr){
    for(idx in censoredWords){
        inStr = inStr.replace(cencoreWords[indx])
    };
    for(idx in customcenSoreWords){
        inStr = instr.replace(customCensoreWords[idx])
    };
    return inStr;
};
exports.censor = censor;
