class CalcController {

    constructor() {

        //Declarar as variáveis que vamos utilizar depois aqui no constructor
        this._currentDate
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._originCountry = 'pt-BR'
        this._operation = [];

        //Chamando a função initiliaze quando irá ser feito uma nova instância da classe "calcController"
        this.initialize()

        //Chamando o método do click dos botões
        this.initButtonsEvents()
    }

    initialize() {

        //Inicia a calculadora já com o tempo fixo, e após aplica os laços do setTimeout
        this.date = this.currentDate.toLocaleDateString(this._originCountry)
        this.hour = this.currentDate.toLocaleTimeString(this._originCountry)

        //Atribuindo a mudança de segundos com o setInterval
        setInterval(() => {

            //Peguei o retorno do get currentDate e transformei na data local do Brasl
            this.date = this.currentDate.toLocaleDateString(this._originCountry)
            this.hour = this.currentDate.toLocaleTimeString(this._originCountry)
        }, 1000)


    }

    //Criando o nosso próprio método
    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }


    //Método que irá pegar o nome da classe dos botões já alterada e criar um switch para cada valor digitado
    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+')
                break;
            case 'subtracao':
                this.addOperation('-')
                break;
            case 'divisao':
                this.addOperation('/')
                break;
            case 'multiplicacao':
                this.addOperation('*')
                break;
            case 'porcento':
                this.addOperation('%')
                break;
            case 'igual':


                break;
            case 'ponto':
                this.addOperation('.')
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':

                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();

        }
    }

    clearAll() {
        this._operation = []
    }

    clearEntry() {
        this._operation.pop()
    }

    //Método pra setar a mensagem de erro no Switch default
    setError() {
        this.displayCalc = "Houve um erro"
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1]
    }

    isOperador(value) {
        if (['+', '-', '*', '/'].indexOf(value) > -1) {
            return true
        }
        else {
            return false
        }
    }

    //Validação do último dígito e inserção no Array
    addOperation(value) {

        if (isNaN(this.getLastOperation())) {
            if (this.isOperador(value)) {
                this._operation[this._operation.length - 1] = value
            } else if (isNaN(value)) {
                console.log(value)
            }
            else {
                this._operation.push(value)
            }

        } else {
            let newValue = this.getLastOperation().toString() + value.toString()
            this._operation.push(newValue)

        }

    }


    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        //Passando o botão e o index do botão, e colocando entre parenteses
        buttons.forEach((btn, index) => {
            //Passando os parâmetros para o evento criado 'addEventListenerAll''
            this.addEventListenerAll(btn, 'click drag', e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);


            })

            //Eventos de mouse para tornar o cursor como pointer
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer'
            })
        })


    }



    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get date() {
        return this._dateEl.innerHTML
    }
    set date(value) {
        this._dateEl.innerHTML = value
    }

    get hour() {
        return this._timeEl.innerHTML
    }
    set hour(value) {
        this._timeEl.innerHTML = value
    }

    //Irei retornar apenas uma nova data
    get currentDate() {
        return new Date()
    }
}