import {action, makeAutoObservable, observable} from "mobx";

class TestStore{
    value = "Mobx Konusuna Giriş Yapıldı";

    constructor() {
        makeAutoObservable(this,{
            value : observable,
            changeValue : action
        });
    }

    changeValue = (param)=>{
        this.value = param;
    }
}

export default new TestStore();
