let calculator = {
    read (a,b){
      this.a = a;
      this.b = b;
      },
      sum(){
        let summa =  this.a + this.b;
      },
      mul(){
        let multiple =  this.a * this.b;
      }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
