function positions(firstPlace, secondPlace, lastPlace){
    const colocacoes = [
        firstPlace,
        secondPlace,
        lastPlace,
    ]
    if("Daniel" == colocacoes[0]){
        colocacoes[0] = "Daniel" 
    
    } if("Daniel" == colocacoes[1]){
        
        let podium = colocacoes[0]
        
      colocacoes[0] = "Daniel" 
       
      colocacoes[1] = podium
      
    } if("Daniel" == colocacoes[2]){
        let podium = colocacoes[1]
        colocacoes[1] = "Daniel" 
        colocacoes[2] = podium
        
    }
    console.log(`1ª - Colocado ${colocacoes[0]}. 2ª - Colocado ${colocacoes[1]}. 3ª - Colocado ${colocacoes[2]}.`)
    
    }
    positions("Rafael","Manoel","Daniel")

