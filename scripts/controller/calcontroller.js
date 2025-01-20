class CalcController {

    constructor() {

        //Declarar as variáveis que vamos utilizar depois aqui no constructor
        this._currentDate
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._originCountry = 'pt-BR'

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

    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        //Passando o botão e o index do botão, e colocando entre parenteses
        buttons.forEach((btn, index) => {
            //Passando os parâmetros para o evento criado 'addEventListenerAll''
            this.addEventListenerAll(btn, 'click drag', e => {

                console.log(btn.className.baseVal.replace("btn -", ""))
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