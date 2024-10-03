function mostrarMenu() {
    let opcion = prompt(
        "Selecciona una opción:\n" +
        "1. linea vertical\n" +
        "2. linea horizontal\n" +
        "3. Ambas lineas\n" +
        "4. Figura de usuario\n" +
        "5. tablas de multiplicar\n" +
        "6. Salir"
    );

    ejecutarOpcion(opcion);
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            function imprimirLineaVertical(caracter) {
                let linea = "";
                for (let i = 0; i < 5; i++) {
                    linea += caracter + "\n"; 
                }
                alert(linea);
            }
            
            imprimirLineaVertical("x");  
            
            regresarAlMenu();
            break;


        case "2":
            function imprimirLineaHorizontal(caracter) {
                let linea = "";
                for (let i = 0; i < 5; i++) {
                    linea += caracter;                  }
                alert(linea);
            }
            
            
            imprimirLineaHorizontal("x");  
            
            regresarAlMenu();
            break;


        case "3":
            function fusionarLineasBorde(caracter) {
                let figura = "";
            
                
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if (i === 0 || j === 0) {
                            figura += caracter;
                        } else {
                            
                            figura += " ";
                        }
                    }
                    figura += "\n";  
                }
            
                alert(figura);  
            }
            
            
            fusionarLineasBorde("x");  
            regresarAlMenu();
                break;
            
            

        case "4":
            function crearFigura() {
                let caracter = prompt("Ingresa el carácter que deseas usar:");
                let numVertical = parseInt(prompt("Ingresa el número de caracteres verticales:"));
                let numHorizontal = parseInt(prompt("Ingresa el número de caracteres horizontales:"));
            
                let figura = "";
            
                
                for (let i = 0; i < numVertical; i++) {
                    for (let j = 0; j < numHorizontal; j++) {
                        figura += caracter;
                    }
                    figura += "\n";  
                }
            
                alert(figura);  
            }
            
            
            crearFigura();
            
                regresarAlMenu();
                break;

        case "5":
            function mostrarTablasMultiplicar() {
                
                for (let i = 1; i <= 10; i++) {
                    let tabla = `Tabla del ${i}:\n`;  
                    for (let j = 1; j <= 10; j++) {
                        tabla += `${i} x ${j} = ${i * j}\n`;  
                    }
                    alert(tabla);  
                }
            }
            
            
            mostrarTablasMultiplicar();
            mostrarMenu();
            break;
            


        case "6":
             alert("Adiós!");
            break;
        default:
            alert("Opción no válida. Intenta de nuevo.");
            mostrarMenu();
            break;
    }
}

function regresarAlMenu() {
    let regresar = confirm("¿Deseas regresar al menú?");
    if (regresar) {
        mostrarMenu();
    } else {
        alert("Adiós!");
    }
}


mostrarMenu();
