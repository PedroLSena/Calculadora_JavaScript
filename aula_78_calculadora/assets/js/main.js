function criaCalc() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = '';
        },

        inicia() {
            this.cliqueBnt();
            this.pressEnter();
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            try {
                const resultado = eval(this.display.value);

                if (isNaN(resultado) || !isFinite(resultado)) {
                    throw new Error('Conta inválida');
                }

                this.display.value = resultado;
            } catch (error) {
                alert(error.message);
            }
        },

        cliqueBnt() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalc();
calculadora.inicia();
