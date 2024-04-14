export interface State {
    stateId: number
    sountryCd: string,
    stateCd: string,
    stateType: string,
    stateName: string,
    stateNameHindi: string,
    effectiveFrom: string,
    effectiveTo: string,
    isActive: string,
    createdBy: string,
    createdDttm: string,
    modifiedBy: string,
    modifiedDttm: string,
}
export interface LangItem {
    lable: string,
    value: string,
}



export const LanguageList: LangItem[] = [
    {
        value: "hindi", lable: "Hindi/हिंदी",
    }, {
        value: "assamese", lable: "Assamese/অসমীয়া",
    }, {
        value: "bengali", lable: "Bengali/বাংলা",
    }, {
        value: "konkani", lable: "Konkani/कोंकणी",
    }, {
        value: "gujarati", lable: "Gujarati/ગુજરાતી",
    }, {
        value: "malayalam", lable: "Malayalam/മലയാളം",
    }, {
        value: "odia", lable: "Odia/ଓଡିଆ",
    }, {
        value: "punjabi", lable: "Punjabi/ਪੰਜਾਬੀ",
    }, {
        value: "tamil", lable: "Tamil/தமிழ்",
    }, {
        value: "telugu", lable: "Telugu/తెలుగు",
    }, {
        value: "marathi", lable: "Marathi/मराठी",
    }, {
        value: "kannada", lable: "Kannada/ಕನ್ನಡ",
    }, {
        value: "urdu", lable: "Urdu/اردو",
    }]