function apostar(){
    const max = 0
    const min = 9
    const vitoriaAlerta = document.getElementById('vitoria')
    const derrotaAlerta = document.getElementById('derrota')
    const letraAlerta = document.getElementById('letra')
    const btnVitoria = document.getElementsByClassName('alerta')[0]
    const btnDerrota = document.getElementsByClassName('alerta')[1]
    const btnLetra = document.getElementsByClassName('alerta')[2]
    let tela1 = document.getElementById('tela1')
    let tela2 = document.getElementById('tela2')
    let tela3 = document.getElementById('tela3')
    let result
    let input1 = document.getElementsByClassName('aposta')[0]
    let input2 = document.getElementsByClassName('aposta')[1]
    let input3 = document.getElementsByClassName('aposta')[2]
    let valorApostado
    let verificador = 0
    
    if(input1.value.length == 0 && input2.value.length == 0 && input3.value.length == 0){
        input1.value=0
        input2.value=0
        input3.value=0
        
        valorApostado = input1.value
        valorApostado += input2.value
        valorApostado += input3.value
        
        let intervalo1 = setInterval(() => {
            tela1.innerText=result = Math.floor(Math.random() * (max - min + 1)) + min
        }, 90);
        
        let intervalo2 = setInterval(() => {
            tela2.innerText=result = Math.floor(Math.random() * (max - min + 1)) + min
        }, 90);
        
        let intervalo3 = setInterval(() => {
            tela3.innerText=result = Math.floor(Math.random() * (max - min + 1)) + min
        }, 90);
        
        setTimeout(() => {
            clearInterval(intervalo1)
            tela1.innerText = result = Math.floor(Math.random() * (max - min + 1)) + min
            
            verificador = String(result)
        }, 3000);
        
        setTimeout(() => {
            clearInterval(intervalo2)
            tela2.innerText = result = Math.floor(Math.random() * (max - min + 1)) + min
            
            verificador += String(result)
        }, 4500);
        
        setTimeout(() => {
            clearInterval(intervalo3)
            tela3.innerText = result = Math.floor(Math.random() * (max - min + 1)) + min
            
            verificador += String(result)
        }, 6000);
        
        setTimeout(() => {
            if(verificador == valorApostado){
                vitoriaAlerta.showModal()
                btnVitoria.onclick = function(){
                    vitoriaAlerta.close()
                }
            }else{
                derrotaAlerta.showModal()
                btnDerrota.onclick = function(){
                    derrotaAlerta.close()
                }
            }
        }, 6010)
    }else if(input1.value != 1 && input1.value != 2 && input1.value != 3 && input1.value != 4 && input1.value != 5 && input1.value != 6 && input1.value != 7 && input1.value != 8 && input1.value != 9 && input1.value != 0){
        letraAlerta.showModal()
        btnLetra.onclick = function(){
            letraAlerta.close()
        }
    }else if(input2.value != 1 && input2.value != 2 && input2.value != 3 && input2.value != 4 && input2.value != 5 && input2.value != 6 && input2.value != 7 && input2.value != 8 && input2.value != 9 && input2.value != 0){
        letraAlerta.showModal()
        btnLetra.onclick = function(){
            letraAlerta.close()
        }
    }else if(input3.value != 1 && input3.value != 2 && input3.value != 3 && input3.value != 4 && input3.value != 5 && input3.value != 6 && input3.value != 7 && input3.value != 8 && input3.value != 9 && input3.value != 0){
        letraAlerta.showModal()
        btnLetra.onclick = function(){
            letraAlerta.close()
        }
    }else{
        if(typeof Number(input1) != "number"){
            alert('jjj')
        }else{
        if(input1.value.length == 0){
            input1.value = 0
        }
        if(input2.value.length == 0 ){
            input2.value = 0
        }
        if(input3.value.length == 0 ){
            input3.value = 0
        }
        
        valorApostado = input1.value
        valorApostado += input2.value
        valorApostado += input3.value
        
        let intervalo1 = setInterval(() => {
            tela1.innerText=result = Math.floor(Math.random() * (max - min + 1)) + min
        }, 90);
        
        let intervalo2 = setInterval(() => {
            tela2.innerText=result = Math.floor(Math.random() * (max - min + 1)) + min
        }, 90);
        
        let intervalo3 = setInterval(() => {
            tela3.innerText=result = Math.floor(Math.random() * (max - min + 1)) + min
        }, 90);
        
        setTimeout(() => {
            clearInterval(intervalo1)
            tela1.innerText = result = Math.floor(Math.random() * (max - min + 1)) + min
            
            verificador = String(result)
        }, 3000);
        
        setTimeout(() => {
            clearInterval(intervalo2)
            tela2.innerText = result = Math.floor(Math.random() * (max - min + 1)) + min
            
            verificador += String(result)
        }, 4500);
        
        setTimeout(() => {
            clearInterval(intervalo3)
            tela3.innerText = result = Math.floor(Math.random() * (max - min + 1)) + min
            
            verificador += String(result)
        }, 6000);
        
        setTimeout(() => {
            if(verificador == valorApostado){
                vitoriaAlerta.showModal()
                btnVitoria.onclick = function(){
                    vitoriaAlerta.close()
                }
            }else{
                derrotaAlerta.showModal()
                btnDerrota.onclick = function(){
                    derrotaAlerta.close()
                }
            }
        }, 6100)
    }
}
}